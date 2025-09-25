import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

export function generateLocalBusinessJsonLd(branch: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": branch.name,
    "description": "Compassionate care for adults with intellectual and developmental disabilities in Gresham, Oregon",
    "url": process.env.SITE_URL,
    "telephone": branch.phone,
    "email": branch.email,
    "founder": {
      "@type": "Person",
      "name": "Daniel Zewelde",
      "jobTitle": "President/Director"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": branch.address.split(',')[0],
      "addressLocality": "Gresham",
      "addressRegion": "OR",
      "postalCode": branch.address.match(/\d{5}/)?.[0] || "97030",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5000,
      "longitude": -122.4304
    },
    "openingHours": branch.hours,
    "priceRange": "$$",
    "serviceType": "Home Care Services",
    "areaServed": {
      "@type": "City",
      "name": "Gresham, Oregon"
    }
  };
}

export function getGoogleMapsDirectionsUrl(address: string): string {
  // Create a Google Maps directions URL
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
}

export function getGoogleMapsUrl(address: string): string {
  // Create a Google Maps location URL
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

export function getGoogleMapsEmbedUrl(address: string): string {
  // Create a Google Maps embed URL for iframe using a simpler approach
  const encodedAddress = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
