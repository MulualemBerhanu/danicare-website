const fs = require('fs');
const path = require('path');

const willowbrookImages = [
  {
    filename: '1.jpg',
    alt: 'Modern living room with comfortable seating',
    width: 800,
    height: 600,
    description: 'Spacious living area with natural light'
  },
  {
    filename: '2.jpg',
    alt: 'Beautiful outdoor garden and patio area',
    width: 800,
    height: 600,
    description: 'Peaceful outdoor space for relaxation'
  },
  {
    filename: '3.jpg',
    alt: 'Well-equipped kitchen with modern appliances',
    width: 800,
    height: 600,
    description: 'Fully equipped kitchen for meal preparation'
  },
  {
    filename: '4.jpg',
    alt: 'Comfortable bedroom with quality furnishings',
    width: 800,
    height: 600,
    description: 'Cozy bedroom with premium amenities'
  },
  {
    filename: '5.jpg',
    alt: 'Dining area with elegant table setting',
    width: 800,
    height: 600,
    description: 'Elegant dining space for meals'
  },
  {
    filename: '6.jpg',
    alt: 'Caregiver providing compassionate care',
    width: 800,
    height: 600,
    description: 'Professional caregiver with client'
  },
  {
    filename: '7.jpg',
    alt: 'Activity room for social engagement',
    width: 800,
    height: 600,
    description: 'Space for activities and social interaction'
  },
  {
    filename: '8.jpg',
    alt: 'Bathroom with safety features',
    width: 800,
    height: 600,
    description: 'Accessible bathroom with safety equipment'
  }
];

const outputDir = path.join(__dirname, '../public/images/willowbrook');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

willowbrookImages.forEach((image, index) => {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${image.width}" height="${image.height}" viewBox="0 0 ${image.width} ${image.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg${index})" />
  
  <!-- Decorative elements -->
  <circle cx="${image.width * 0.2}" cy="${image.height * 0.3}" r="60" fill="url(#accent${index})" opacity="0.3" />
  <circle cx="${image.width * 0.8}" cy="${image.height * 0.7}" r="40" fill="url(#accent${index})" opacity="0.2" />
  
  <!-- Main content area -->
  <rect x="${image.width * 0.1}" y="${image.height * 0.4}" width="${image.width * 0.8}" height="${image.height * 0.2}" fill="white" opacity="0.9" rx="10" />
  
  <!-- Text -->
  <text x="50%" y="${image.height * 0.5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#1F2937">
    ${image.alt}
  </text>
  <text x="50%" y="${image.height * 0.55}" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#6B7280">
    ${image.description}
  </text>
  
  <!-- Image placeholder indicator -->
  <rect x="${image.width * 0.4}" y="${image.height * 0.65}" width="${image.width * 0.2}" height="4" fill="url(#accent${index})" rx="2" />
  
  <!-- Corner accent -->
  <polygon points="${image.width * 0.9},${image.height * 0.1} ${image.width},${image.height * 0.1} ${image.width},${image.height * 0.2}" fill="url(#accent${index})" opacity="0.8" />
</svg>`;

  const filePath = path.join(outputDir, image.filename.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated: ${filePath}`);
});

console.log(`\nGenerated ${willowbrookImages.length} placeholder images for Willowbrook gallery.`);
console.log('Replace these SVG files with actual JPG/PNG images for production use.');
