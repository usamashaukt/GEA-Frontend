# Image Optimization Guide

## Code Changes Completed ✅

All code has been updated to use responsive images with proper `srcset` and `sizes` attributes. The following image files need to be created/optimized:

## Required Image Files to Create

### 1. Destination Images

#### Sydney Opera House (`/assets/images/Aus-bg/`)
- **Small**: `sydney-opera-house-small.webp` - 231x154px (for mobile)
- **Medium**: `sydney-opera-house-medium.webp` - 462x308px (for tablet)
- **Original**: `sydney-opera-house.webp` - Keep optimized at 924x616px (for desktop/retina)
- **Current issue**: 2560x1706px → 760.9 KiB
- **Target savings**: ~755 KiB

#### Big Ben London (`/assets/images/big-ben/`)
- **Small**: `big-Ben-London-small.webp` - 231x152px (for mobile)
- **Medium**: `big-Ben-London-medium.webp` - 462x304px (for tablet)
- **Original**: `big-Ben-London.webp` - Keep optimized at 924x608px (for desktop/retina)
- **Current issue**: 1600x1056px → 38.9 KiB
- **Target savings**: ~38 KiB

#### USA Image (`/assets/images/usa/`)
- **Small**: `usa-small.webp` - 231x152px
- **Medium**: `usa-medium.webp` - 462x304px
- **Original**: `usa.webp` - 924x608px
- **Note**: Download from `https://www.gamsatreviewblog.com/content/images/2020/01/Gamsat-in-USA.jpg` and convert to WebP
- **Target savings**: ~272 KiB

#### Europe Image (`/assets/images/Eu-bg/`)
- **Small**: `europe-small.webp` - 231x154px
- **Medium**: `europe-medium.webp` - 462x308px
- **Original**: `europe.webp` - 924x616px
- **Note**: Download from `https://media.restless.co.uk/uploads/2022/12/the-cheapest-countries-to-visit-in-europe.jpg` and convert to WebP
- **Target savings**: ~128 KiB

### 2. Hero Background Image (`/assets/images/big-ben/`)

Already has responsive versions, but ensure they're optimized:
- **Small**: `hero-sec-small.webp` - 800x600px (should be ~50-80 KiB)
- **Medium**: `hero-sec-medium.webp` - 1200x800px (should be ~100-150 KiB)
- **Large**: `hero-sec.webp` - 1920x1080px (should be ~180-220 KiB)
- **Current issue**: 2048x1341px → 319.9 KiB
- **Target savings**: ~138 KiB

### 3. University Logos (`/assets/images/uni-logos/`)

For each logo, create three sizes:
- **Small**: `{logo-name}-small.webp` - 80x63px (for mobile)
- **Medium**: `{logo-name}-medium.webp` - 160x125px (for tablet/desktop - used as fallback)
- **Original**: `{logo-name}.webp` - 320x250px (for retina displays)

**Logos that need optimization:**
- `BPP.webp` (1200x900px → 96.1 KiB) → Target: ~2 KiB
- `Heriot-watt.webp` (1908x1146px → 79.4 KiB) → Target: ~1 KiB
- `LSBU.webp` (700x272px → 48.6 KiB) → Target: ~5 KiB
- `Gisma_Business_School_Logo_02.2022.svg.webp` (1200x1200px → 32.7 KiB) → Target: ~1 KiB
- `uws.webp` (911x624px → 31.0 KiB) → Target: ~1 KiB
- `hu-logo-bg.webp` (1563x1563px → 26.8 KiB) → Target: ~1 KiB
- `lincoln.webp` (512x512px → 26.2 KiB) → Target: ~2 KiB
- `bangor.webp` (667x538px → 25.6 KiB) → Target: ~1 KiB
- `Arden-University.webp` (967x968px → 19.6 KiB) → Target: ~1 KiB
- `bcu.webp` (902x250px → 18.4 KiB) → Target: ~2 KiB
- `Bedfordshire.webp` (300x300px → 17.3 KiB) → Target: ~3 KiB
- `coventry.webp`, `cuc.webp`, `images.webp`, `ulster.webp` (also need responsive versions)

### 4. Student Pictures (`/assets/images/studentpics/`)

#### student3.jpg → Convert to WebP
- **Small**: `student3-small.webp` - 197x196px
- **Medium**: `student3-medium.webp` - 394x392px (used as fallback)
- **Original**: `student3.webp` - 788x784px
- **Current issue**: 1016x572px JPG → 59.9 KiB
- **Target savings**: ~56 KiB

### 5. HU Logo (`/assets/images/hu-logo/`)

- **Small**: `hu-logo-bg-small.webp` - 100x100px
- **Medium**: `hu-logo-bg-medium.webp` - 150x150px (used as fallback)
- **Original**: `hu-logo-bg.webp` - 300x300px
- **Current issue**: 1563x1563px → 26.8 KiB
- **Target savings**: ~26 KiB

## Tools to Use

### Online Tools (Recommended)
1. **Squoosh.app** (https://squoosh.app) - Google's free tool
   - Upload original image
   - Resize to target dimensions
   - Choose WebP format
   - Adjust quality (75-85% recommended)
   - Download optimized version

2. **TinyPNG** (https://tinypng.com) - Simple compression
   - Drag & drop images
   - Automatic optimization
   - Download compressed versions

3. **CloudConvert** (https://cloudconvert.com) - For format conversion
   - Convert JPG to WebP
   - Batch processing available

### Command Line Tools (Advanced)

#### Using ImageMagick
```bash
# Resize and convert to WebP
magick input.jpg -resize 231x154 -quality 85 output-small.webp
magick input.jpg -resize 462x308 -quality 85 output-medium.webp
magick input.jpg -resize 924x616 -quality 85 output.webp
```

#### Using Sharp (Node.js)
```javascript
const sharp = require('sharp');

async function optimizeImage(input, output, width, height) {
  await sharp(input)
    .resize(width, height, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(output);
}
```

## Optimization Guidelines

1. **WebP Quality**: Use 75-85% quality for photos, 90-95% for logos
2. **Resize First**: Always resize before compressing
3. **Aspect Ratio**: Maintain aspect ratio when resizing
4. **File Naming**: Follow the `-small`, `-medium` naming convention
5. **Testing**: Test images in browser DevTools Network tab

## Priority Order

1. **High Priority** (Biggest impact):
   - Sydney Opera House (755 KiB savings)
   - Hero image (138 KiB savings)
   - USA image (272 KiB savings)
   - Europe image (128 KiB savings)

2. **Medium Priority**:
   - University logos (BPP, Heriot-watt, LSBU)
   - student3.jpg conversion

3. **Low Priority**:
   - Remaining university logos
   - HU logo

## Expected Results After Optimization

- **Total bandwidth savings**: ~1,792 KiB (1.75 MB) per page load
- **LCP improvement**: 50-70% faster loading
- **Better mobile performance**: Smaller images for mobile devices
- **Improved Core Web Vitals**: Better performance scores
- **Reduced server costs**: Less bandwidth usage

## Testing Checklist

- [ ] All responsive images load correctly
- [ ] Images display at correct sizes on mobile, tablet, desktop
- [ ] No broken image links
- [ ] WebP format works in all target browsers
- [ ] Lighthouse performance score improved
- [ ] Network tab shows correct image sizes being loaded

## Browser Support

WebP is supported in:
- Chrome 23+
- Firefox 65+
- Edge 18+
- Safari 14+
- Opera 12.1+

For older browsers, consider adding fallback `<picture>` elements with JPG/PNG sources.
