# Image Optimization Guide

## Current Issues (Lighthouse Report)
- **Total savings possible**: 1,789 KiB (1.8 MB)
- **Main culprits**: 
  - Sydney Opera House: 760.9 KiB → 752.4 KiB savings
  - Hero image: 319.9 KiB → 138.1 KiB savings
  - University logos: 96.1 KiB → 94.3 KiB savings each

## Required Image Sizes

### Hero Image (hero-sec.webp)
- **Small**: 800x600px (mobile)
- **Medium**: 1200x800px (tablet)
- **Large**: 1920x1080px (desktop)

### University Logos
- **Small**: 80x63px (mobile)
- **Medium**: 160x125px (tablet/desktop)
- **Large**: 320x250px (retina)

### Other Images
- **Sydney Opera House**: Resize to 280x186px (displayed size)
- **Student pics**: Resize to 246x196px (displayed size)

## Tools to Use

### Online Tools (Recommended)
1. **Squoosh.app** - Google's free tool
   - Upload original image
   - Resize to target dimensions
   - Choose WebP format
   - Download optimized version

2. **TinyPNG** - Simple compression
   - Drag & drop images
   - Automatic optimization
   - Download compressed versions

### Desktop Tools
1. **ImageOptim** (Mac)
2. **FileOptimizer** (Windows)
3. **ImageMagick** (Command line)

## File Naming Convention
```
Original: hero-sec.webp
Small: hero-sec-small.webp
Medium: hero-sec-medium.webp
Large: hero-sec.webp (keep original as large)
```

## Steps to Follow
1. **Optimize hero image** first (biggest impact)
2. **Optimize university logos** (multiple files)
3. **Optimize other large images**
4. **Test the responsive images**
5. **Run Lighthouse again**

## Expected Results
- **LCP improvement**: 50-70% faster loading
- **Bandwidth savings**: 1.8 MB per page load
- **Better mobile performance**: Smaller images for mobile devices
- **Improved Core Web Vitals**: Better performance scores 