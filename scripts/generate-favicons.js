import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure favicon directory exists
const faviconDir = path.join(__dirname, '..', 'public', 'favicon');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Base SVG content for La Barbiere
const svgContent = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1024" height="1024" fill="#000000"/>
  
  <!-- Main Logo Background -->
  <rect x="128" y="256" width="768" height="512" rx="32" fill="#FFFFFF"/>
  
  <!-- Scissors Icon (Left) -->
  <g transform="translate(200, 400)">
    <!-- Scissors Handle 1 -->
    <circle cx="40" cy="40" r="20" fill="#000000"/>
    <circle cx="40" cy="40" r="12" fill="#FFFFFF"/>
    
    <!-- Scissors Handle 2 -->
    <circle cx="40" cy="120" r="20" fill="#000000"/>
    <circle cx="40" cy="120" r="12" fill="#FFFFFF"/>
    
    <!-- Scissors Blades -->
    <path d="M60 50 L140 80 L140 70 L70 45 Z" fill="#000000"/>
    <path d="M60 110 L140 80 L140 90 L70 115 Z" fill="#000000"/>
    
    <!-- Scissors Pivot -->
    <circle cx="140" cy="80" r="8" fill="#000000"/>
  </g>
  
  <!-- Text "LA BARBIERE" -->
  <g transform="translate(350, 450)">
    <!-- LA -->
    <text x="0" y="0" font-family="serif" font-size="48" font-weight="bold" fill="#000000">LA</text>
    
    <!-- BARBIERE -->
    <text x="0" y="60" font-family="serif" font-size="36" font-weight="600" fill="#000000">BARBIERE</text>
  </g>
  
  <!-- Decorative Elements -->
  <g transform="translate(600, 400)">
    <!-- Comb -->
    <rect x="0" y="20" width="80" height="8" fill="#000000"/>
    <rect x="0" y="20" width="4" height="40" fill="#000000"/>
    <rect x="8" y="20" width="4" height="35" fill="#000000"/>
    <rect x="16" y="20" width="4" height="40" fill="#000000"/>
    <rect x="24" y="20" width="4" height="35" fill="#000000"/>
    <rect x="32" y="20" width="4" height="40" fill="#000000"/>
    <rect x="40" y="20" width="4" height="35" fill="#000000"/>
    <rect x="48" y="20" width="4" height="40" fill="#000000"/>
    <rect x="56" y="20" width="4" height="35" fill="#000000"/>
    <rect x="64" y="20" width="4" height="40" fill="#000000"/>
    <rect x="72" y="20" width="4" height="35" fill="#000000"/>
    
    <!-- Razor -->
    <g transform="translate(0, 80)">
      <rect x="10" y="0" width="60" height="6" fill="#000000"/>
      <rect x="0" y="6" width="80" height="12" fill="#000000"/>
      <rect x="35" y="18" width="10" height="30" fill="#000000"/>
    </g>
  </g>
  
  <!-- Subtle Pattern -->
  <defs>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#333333" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="1024" height="1024" fill="url(#dots)"/>
</svg>
`;

// Favicon sizes to generate
const sizes = [
  // Apple Store Required Sizes
  { size: 1024, name: 'apple-icon-1024x1024.png' },
  { size: 512, name: 'android-icon-512x512.png' },
  { size: 192, name: 'android-icon-192x192.png' },
  { size: 180, name: 'apple-icon-180x180.png' },
  { size: 152, name: 'apple-icon-152x152.png' },
  { size: 144, name: 'android-icon-144x144.png' },
  { size: 144, name: 'apple-icon-144x144.png' },
  { size: 120, name: 'apple-icon-120x120.png' },
  { size: 114, name: 'apple-icon-114x114.png' },
  { size: 96, name: 'android-icon-96x96.png' },
  { size: 76, name: 'apple-icon-76x76.png' },
  { size: 72, name: 'android-icon-72x72.png' },
  { size: 72, name: 'apple-icon-72x72.png' },
  { size: 60, name: 'apple-icon-60x60.png' },
  { size: 57, name: 'apple-icon-57x57.png' },
  { size: 48, name: 'android-icon-48x48.png' },
  { size: 36, name: 'android-icon-36x36.png' },
  // Standard favicon sizes
  { size: 96, name: 'favicon-96x96.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 16, name: 'favicon-16x16.png' },
  // Microsoft tile icons
  { size: 310, name: 'ms-icon-310x310.png' },
  { size: 150, name: 'ms-icon-150x150.png' },
  { size: 144, name: 'ms-icon-144x144.png' },
  { size: 70, name: 'ms-icon-70x70.png' }
];

async function generateFavicons() {
  console.log('🎨 Generating La Barbiere favicons...');
  
  try {
    // Generate PNG favicons from SVG
    for (const { size, name } of sizes) {
      const outputPath = path.join(faviconDir, name);
      
      await sharp(Buffer.from(svgContent))
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .png({
          quality: 100,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(outputPath);
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }
    
    // Generate ICO file for legacy browsers
    await sharp(Buffer.from(svgContent))
      .resize(32, 32)
      .png()
      .toFile(path.join(faviconDir, 'favicon-32x32.png'));
    
    await sharp(Buffer.from(svgContent))
      .resize(16, 16)
      .png()
      .toFile(path.join(faviconDir, 'favicon-16x16.png'));
    
    console.log('✅ Generated legacy favicon files');
    
    // Copy main favicon to root
    await sharp(Buffer.from(svgContent))
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
    
    console.log('✅ Generated root favicon.ico');
    
    // Generate apple-icon.png (default Apple Touch Icon)
    await sharp(Buffer.from(svgContent))
      .resize(180, 180)
      .png()
      .toFile(path.join(faviconDir, 'apple-icon.png'));
    
    console.log('✅ Generated apple-icon.png');
    
    // Generate apple-icon-precomposed.png
    await sharp(Buffer.from(svgContent))
      .resize(180, 180)
      .png()
      .toFile(path.join(faviconDir, 'apple-icon-precomposed.png'));
    
    console.log('✅ Generated apple-icon-precomposed.png');
    
    console.log('🎉 All favicons generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();