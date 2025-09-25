# Dani Care - Home Care Website

A modern, production-ready website for Dani Care, a home care provider in Oregon. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### 🏠 **Two Branch Locations**
- Gresham (SE 224th Ave) - 1037 SE 224th Ave, Gresham OR 97030
- Gresham (SW Willowbrook Pl) - 1731 SW Willowbrook Pl, Gresham OR 97080
- Separate contact forms routing to correct branch inboxes
- Individual photo galleries for each location

### 🎨 **Modern UI/UX**
- Responsive design with mobile-first approach
- Beautiful gradients and glassmorphism effects
- Smooth animations with Framer Motion
- WCAG-AA accessibility compliance
- Inter + Playfair Display typography

### 📱 **Complete Page Structure**
- **Home** (`/`) - Hero, services overview, about blurb, trust badges
- **About** (`/about`) - Company story, mission, values, HCBS approach
- **Services** (`/services`) - Core & specialized care services
- **Gallery & Amenities** (`/gallery`) - Photo galleries with lightbox and facility amenities
- **Locations** (`/locations`) - Branch information with maps
- **Contact** (`/contact`) - Contact form with branch selection
- **Legal** (`/legal/nondiscrimination`, `/legal/privacy`) - Compliance pages

### 🔒 **Oregon Compliance**
- Section 1557 non-discrimination notice
- HIPAA-style privacy practices
- Mandatory abuse reporting information
- Language access services
- Complaint filing procedures

### 📧 **Contact System**
- Form validation with Zod
- Branch-specific email routing via Brevo
- Rate limiting protection
- Success/error handling

### 🚀 **Performance & SEO**
- Next.js 14 App Router
- Automatic sitemap generation
- Structured data (JSON-LD) for local businesses
- Optimized images with next/image
- Vercel-optimized deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Brevo
- **Icons**: Lucide React
- **Fonts**: Inter + Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Brevo account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd danicare
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   SITE_URL=https://your-domain.com
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Site Data

All site content is centralized in `/src/data/site.ts`. Update this file to modify:
- Company information
- Branch locations and details
- Contact information
- Compliance data

### Styling

The design system uses Tailwind CSS with custom colors:
- **Dani Blue**: Primary brand color (`dani-*`)
- **Warm Yellow**: Accent color (`warm-*`)

### Images

Place images in the `/public/images/` directory:
- `/images/hero-caregiver.jpg` - Home page hero
- `/images/about-story.jpg` - About page story section
- `/images/person-centered-care.jpg` - About page care section
- `/images/224th/` - Gresham 224th branch gallery
- `/images/willowbrook/` - Gresham Willowbrook branch gallery

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Environment Variables

Required for production:
- `SITE_URL` - Your domain (e.g., https://danicare.com)
- `BREVO_API_KEY` - Brevo API key for contact form emails

## File Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── api/               # API routes
│   ├── legal/             # Legal pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── PageHero.tsx      # Page hero sections
│   ├── BranchCard.tsx    # Branch information cards
│   ├── GalleryGrid.tsx   # Photo gallery with lightbox
│   ├── ContactForm.tsx   # Contact form component
│   └── ComplianceCallouts.tsx # Compliance notices
├── data/                 # Site data and configuration
│   └── site.ts          # Single source of truth
└── lib/                  # Utility functions
    └── utils.ts         # Common utilities
```

## Customization

### Adding New Branches

1. Update `/src/data/site.ts` with new branch information
2. Add branch photos to `/public/images/[branch-slug]/`
3. Update gallery data in the site configuration

### Modifying Services

Edit the services arrays in `/src/app/services/page.tsx` to add or modify care services.

### Styling Changes

- **Colors**: Update `tailwind.config.js` custom colors
- **Typography**: Modify font imports in `src/app/layout.tsx`
- **Components**: Edit individual component files

## Compliance Notes

This website includes required compliance elements for Oregon home care providers:

- **Section 1557**: Non-discrimination notice
- **HIPAA**: Privacy practices notice
- **Abuse Reporting**: Mandatory reporting information
- **Language Access**: Translation services notice
- **Complaints**: Oregon Health Authority contact information

## Support

For questions or support:
- Email: [your-email@domain.com]
- Phone: [your-phone-number]

## License

This project is proprietary to Dani Care. All rights reserved.

---

Built with ❤️ for compassionate care in Oregon
