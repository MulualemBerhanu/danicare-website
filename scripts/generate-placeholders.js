const fs = require('fs');
const path = require('path');

// Create placeholder image directories if they don't exist
const directories = [
  'public/images',
  'public/images/224th',
  'public/images/willowbrook'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create placeholder SVG images
const createPlaceholderSVG = (width, height, text, filename) => {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
  
  fs.writeFileSync(filename, svg);
  console.log(`Created: ${filename}`);
};

// Generate placeholder images
const images = [
  { path: 'public/images/hero-caregiver.jpg', text: 'Hero Caregiver', width: 800, height: 600 },
  { path: 'public/images/about-story.jpg', text: 'About Story', width: 800, height: 600 },
  { path: 'public/images/person-centered-care.jpg', text: 'Person Centered Care', width: 800, height: 600 },
  { path: 'public/images/224th/1.jpg', text: '224th Branch 1', width: 400, height: 300 },
  { path: 'public/images/224th/2.jpg', text: '224th Branch 2', width: 400, height: 300 },
  { path: 'public/images/224th/3.jpg', text: '224th Branch 3', width: 400, height: 300 },
  { path: 'public/images/224th/4.jpg', text: '224th Branch 4', width: 400, height: 300 },
  { path: 'public/images/willowbrook/1.jpg', text: 'Willowbrook Branch 1', width: 400, height: 300 },
  { path: 'public/images/willowbrook/2.jpg', text: 'Willowbrook Branch 2', width: 400, height: 300 },
  { path: 'public/images/willowbrook/3.jpg', text: 'Willowbrook Branch 3', width: 400, height: 300 },
  { path: 'public/images/willowbrook/4.jpg', text: 'Willowbrook Branch 4', width: 400, height: 300 },
];

images.forEach(img => {
  createPlaceholderSVG(img.width, img.height, img.text, img.path.replace('.jpg', '.svg'));
});

console.log('\nPlaceholder images generated successfully!');
console.log('Replace these with actual photos for production.');
