import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import * as brevo from '@getbrevo/brevo'
import { getBranchBySlug } from '@/data/site'

// Initialize Brevo API client
let brevoApi: brevo.TransactionalEmailsApi | null = null

if (process.env.BREVO_API_KEY) {
  brevoApi = new brevo.TransactionalEmailsApi()
  brevoApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)
}

// In-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  branchSlug: z.string().min(1),
})

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Get branch information
    const branch = getBranchBySlug(validatedData.branchSlug)
    if (!branch) {
      return NextResponse.json(
        { message: 'Invalid branch selected.' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = `[Dani Care – ${branch.name}] Website Inquiry`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">New Website Inquiry</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Preferred Location:</strong> ${branch.name}</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; color: #78350f;">${validatedData.message}</p>
        </div>
        
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Branch Information</h3>
          <p><strong>Location:</strong> ${branch.name}</p>
          <p><strong>Address:</strong> ${branch.address}</p>
          <p><strong>Phone:</strong> ${branch.phone}</p>
          <p><strong>Email:</strong> ${branch.email}</p>
          <p><strong>Hours:</strong> ${branch.hours}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This inquiry was submitted through the Dani Care website contact form.
            Please respond to the customer within 24 hours.
          </p>
        </div>
      </div>
    `

    // Send email using Brevo
    if (!brevoApi) {
      console.log('Brevo not configured, simulating email send')
      console.log('Email would be sent to:', branch.email)
      console.log('Subject:', emailSubject)
      console.log('Content:', emailHtml)
    } else {
      try {
        const sendSmtpEmail = new brevo.SendSmtpEmail()
        sendSmtpEmail.subject = emailSubject
        sendSmtpEmail.htmlContent = emailHtml
        sendSmtpEmail.sender = { name: 'Dani Care Website', email: 'danielzewelde@gmail.com' }
        sendSmtpEmail.to = [{ email: 'danielzewelde@gmail.com', name: 'Dani Care' }]
        sendSmtpEmail.replyTo = { email: validatedData.email, name: validatedData.name }

        const response = await brevoApi.sendTransacEmail(sendSmtpEmail)
        console.log('Email sent successfully:', response)
      } catch (error) {
        console.error('Brevo error:', error)
        return NextResponse.json(
          { message: 'Failed to send email. Please try again later.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data. Please check your input.', errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
