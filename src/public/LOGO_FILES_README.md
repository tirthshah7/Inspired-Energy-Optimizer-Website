# Logo Files for Inspired Energy Optimizer

## 📦 Available Files

### SVG Files (Vector - Scalable)

1. **logo-full.svg** (400x60px)
   - Full horizontal logo with text
   - Best for: Website headers, email signatures
   - White text on gradient background

2. **logo-icon.svg** (80x80px)
   - Icon only (square format)
   - Best for: App icons, social media avatars, favicons
   - Lightning bolt on gradient background with glow

3. **logo-horizontal.svg** (500x80px)
   - Extended horizontal version
   - Best for: Wide banners, website headers, presentations
   - Larger text, more spacing

4. **logo-stacked.svg** (320x140px)
   - Vertical/stacked layout
   - Best for: Mobile headers, business cards, vertical banners
   - Text split into two lines below icon

5. **favicon.svg** (32x32px)
   - Browser favicon size
   - Best for: Website favicon, small icons
   - Simplified lightning bolt

## 🎨 Design Specifications

### Colors
- **Gradient Start**: #22c55e (Green)
- **Gradient End**: #38bdf8 (Sky Blue)
- **Text Color**: #f8fafc (Off-white)
- **Icon Color**: White

### Effects
- Gradient: 135° diagonal (top-left to bottom-right)
- Glow effect applied to icon background
- Border radius: 12-16px (rounded corners)

## 🔄 Converting SVG to PNG

### Method 1: Online Converters (Easiest)
1. Visit any of these free converters:
   - https://cloudconvert.com/svg-to-png
   - https://svgtopng.com/
   - https://convertio.co/svg-png/

2. Upload the SVG file
3. Choose your desired PNG size:
   - **logo-full.svg** → Export at 800x120px or 1200x180px (2x-3x for retina)
   - **logo-icon.svg** → Export at 256x256px, 512x512px, or 1024x1024px
   - **favicon.svg** → Export at 64x64px, 128x128px, 256x256px

### Method 2: Using Browser (Quick)
1. Open the SVG file in Chrome/Firefox
2. Right-click → "Inspect"
3. Right-click on the `<svg>` element → "Capture node screenshot"
4. Save as PNG

### Method 3: Using Design Tools
**Figma:**
1. Import SVG to Figma
2. Select the frame
3. Export as PNG at desired resolution

**Adobe Illustrator:**
1. Open SVG file
2. File → Export → Export As
3. Choose PNG format
4. Set resolution (300 DPI for print, 72 DPI for web)

**Inkscape (Free):**
1. Open SVG
2. File → Export PNG Image
3. Set width/height
4. Export

### Method 4: Command Line (For Developers)
Using ImageMagick:
```bash
# Install ImageMagick first
brew install imagemagick  # macOS
# or
sudo apt-get install imagemagick  # Linux

# Convert with specific size
convert -background none logo-icon.svg -resize 512x512 logo-icon-512.png

# Multiple sizes at once
for size in 128 256 512 1024; do
  convert -background none logo-icon.svg -resize ${size}x${size} logo-icon-${size}.png
done
```

## 📐 Recommended PNG Export Sizes

### For Web Use
| File | Standard Size | Retina (2x) | Ultra (3x) |
|------|--------------|-------------|------------|
| logo-full.svg | 400x60 | 800x120 | 1200x180 |
| logo-icon.svg | 128x128 | 256x256 | 512x512 |
| logo-horizontal.svg | 500x80 | 1000x160 | 1500x240 |
| logo-stacked.svg | 320x140 | 640x280 | 960x420 |
| favicon.svg | 32x32 | 64x64 | 128x128 |

### For App Icons (iOS/Android)
- **1024x1024** - App Store preview
- **512x512** - Play Store
- **180x180** - iOS app icon
- **192x192** - Android app icon
- **128x128** - Small icon
- **64x64** - Notification icon

### For Social Media
- **Profile Picture**: 512x512 (from logo-icon.svg)
- **Cover Photo**: 1200x180 (from logo-horizontal.svg)
- **Open Graph**: 1200x630 (crop/adapt logo-horizontal.svg)

### For Print
- Export at **300 DPI** minimum
- For business cards: 1000x1000 for icon
- For banners: Scale up 3-4x from SVG dimensions

## 🎯 Usage Guidelines

### Dark Backgrounds
All logos are designed for dark backgrounds (#0f172a or similar). The gradient provides good contrast.

### Light Backgrounds
If you need versions for light backgrounds:
1. Use the SVG files as a base
2. Modify the gradient to darker colors, OR
3. Add a dark border/outline to the icon

### Minimum Sizes
- **Icon only**: Don't use smaller than 24x24px
- **With text**: Don't use smaller than 200px wide
- **Favicon**: 16x16px minimum (use favicon.svg)

## ✨ Quick Start

1. **For website header**: Use `logo-full.svg` or `logo-horizontal.svg`
2. **For favicon**: Use `favicon.svg` directly in HTML:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg">
   ```
3. **For social media**: Convert `logo-icon.svg` to PNG at 512x512px
4. **For email**: Convert `logo-horizontal.svg` to PNG at 1000x160px

## 🔗 Integration with Website

To use these logos in your React components:

```tsx
// For SVG (best for web)
<img src="/logo-full.svg" alt="Inspired Energy Optimizer" className="h-10" />

// For favicon (add to index.html)
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

## 📝 Notes

- SVG files scale infinitely without quality loss
- Always prefer SVG for web when possible
- PNG is better for:
  - Social media platforms that don't support SVG
  - Email clients
  - Legacy systems
  - When exact pixel rendering is critical

- All SVG files include:
  - Embedded gradients
  - Glow effects (via SVG filters)
  - Proper viewBox for scaling
  - Semantic naming

## 🎨 Customization

To modify colors in SVG files:
1. Open SVG in text editor
2. Find `<linearGradient>` section
3. Change `stop-color` values:
   - First stop: Start color
   - Last stop: End color
4. Save and preview

---

**Need different sizes or variations?**
All SVG files can be opened in any vector editor (Figma, Illustrator, Inkscape) for customization.
