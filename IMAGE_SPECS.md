# Image Asset Specifications - Sebastian Gerhardt Magic Website
**Version:** 1.0
**Last Updated:** September 29, 2025
**Project:** magicsite

---

## Table of Contents
1. [Directory Structure](#directory-structure)
2. [General Guidelines](#general-guidelines)
3. [Hero Section Images](#hero-section-images)
4. [About Section Images](#about-section-images)
5. [Services/Shows Section Images](#servicesshows-section-images)
6. [Media Section Images](#media-section-images)
7. [Testimonials Section Images](#testimonials-section-images)
8. [Decorative Images](#decorative-images)
9. [Logos & Icons](#logos--icons)
10. [Responsive Image Implementation](#responsive-image-implementation)
11. [Performance Optimization](#performance-optimization)
12. [Accessibility Requirements](#accessibility-requirements)

---

## Directory Structure

```
/assets/images/
├── hero/              # Hero section backgrounds and featured images
├── about/             # Headshots and biographical images
├── services/          # Service-related imagery (if needed)
├── shows/             # Show cards, performance photos, event images
├── media/             # Press logos, media appearances
├── testimonials/      # Client photos and video thumbnails
├── decorative/        # Background elements, textures, effects
└── logos/             # Brand logos and social media icons
```

---

## General Guidelines

### File Format Hierarchy
1. **WebP** (primary) - Modern, optimized format
2. **AVIF** (optional) - Next-gen format for cutting edge browsers
3. **JPG** (fallback) - Universal support for photos
4. **PNG** (fallback) - Universal support for logos/transparency

### Naming Conventions
- Use lowercase with hyphens: `hero-background.jpg`
- Be descriptive: `sebastian-headshot-professional.jpg`
- Include size indicator for variants: `hero-bg-1920w.webp`, `hero-bg-768w.webp`
- Avoid spaces, special characters, or version numbers

### File Size Targets
- **Hero images:** 150-300KB (WebP), 300-500KB (JPG)
- **Show cards:** 80-150KB per image
- **Logos:** 10-30KB (PNG with transparency)
- **Thumbnails:** 20-50KB
- **Full-width sections:** 200-400KB

### Compression Tools
- [Squoosh](https://squoosh.app/) - Browser-based image optimization
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [ImageOptim](https://imageoptim.com/) - Mac app for batch processing

---

## Hero Section Images

### 1. Hero Background Image
**File Location:** `assets/images/hero/hero-bg.webp` + `.jpg` fallback
**Current Status:** ✅ Exists as `hero-bg.jpg`

**Specifications:**
- **Dimensions:** 1920×1080px (desktop), 768×1024px (mobile portrait)
- **Aspect Ratio:** 16:9 (desktop), 3:4 (mobile)
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 300KB (WebP), 500KB (JPG)
- **Content:** Dramatic, atmospheric image featuring Sebastian or magical elements
- **Considerations:**
  - Dark overlay will be applied (50-70% opacity)
  - Text will be overlaid in center, keep central area clear
  - Should work with both light and dark text treatments

**Responsive Variants:**
```
hero-bg-1920w.webp    → 1920×1080px (desktop)
hero-bg-1366w.webp    → 1366×768px (laptop)
hero-bg-768w.webp     → 768×1024px (tablet portrait)
hero-bg-480w.webp     → 480×800px (mobile)
```

**Alt Text:** `"Sebastian Gerhardt performing close-up magic with dramatic lighting"`

**HTML Implementation:**
```html
<picture>
  <source media="(min-width: 1366px)" srcset="assets/images/hero/hero-bg-1920w.webp" type="image/webp">
  <source media="(min-width: 1366px)" srcset="assets/images/hero/hero-bg-1920w.jpg" type="image/jpeg">
  <source media="(min-width: 768px)" srcset="assets/images/hero/hero-bg-1366w.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="assets/images/hero/hero-bg-1366w.jpg" type="image/jpeg">
  <source srcset="assets/images/hero/hero-bg-768w.webp" type="image/webp">
  <img src="assets/images/hero/hero-bg-768w.jpg" alt="Sebastian Gerhardt performing close-up magic" loading="eager">
</picture>
```

---

## About Section Images

### 2. Professional Headshot
**File Location:** `assets/images/about/headshot.webp` + `.jpg` fallback
**Current Status:** ✅ Exists as `headshot.jpg` (CardSpring Final.jpg)

**Specifications:**
- **Dimensions:** 800×800px (square), or 600×800px (portrait)
- **Aspect Ratio:** 1:1 (preferred) or 3:4
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 120KB (WebP), 200KB (JPG)
- **Content:** Professional portrait of Sebastian
- **Style:** High-quality, professional lighting, clean background or subtle depth

**Responsive Variants:**
```
headshot-800w.webp    → 800×800px (desktop)
headshot-600w.webp    → 600×600px (tablet)
headshot-400w.webp    → 400×400px (mobile)
```

**Alt Text:** `"Sebastian Gerhardt, professional magician and illusionist"`

**HTML Implementation:**
```html
<picture class="about-image">
  <source srcset="assets/images/about/headshot-800w.webp 800w,
                  assets/images/about/headshot-600w.webp 600w,
                  assets/images/about/headshot-400w.webp 400w"
          type="image/webp"
          sizes="(min-width: 1200px) 400px, (min-width: 768px) 350px, 300px">
  <img src="assets/images/about/headshot-600w.jpg"
       srcset="assets/images/about/headshot-800w.jpg 800w,
               assets/images/about/headshot-600w.jpg 600w,
               assets/images/about/headshot-400w.jpg 400w"
       sizes="(min-width: 1200px) 400px, (min-width: 768px) 350px, 300px"
       alt="Sebastian Gerhardt, professional magician and illusionist"
       loading="lazy"
       class="headshot-image">
</picture>
```

---

## Services/Shows Section Images

### 3. Interactive Close-Up Magic Show Card
**File Location:** `assets/images/shows/closeup-magic.webp` + `.jpg` fallback
**Current Status:** ✅ Exists as `closeup-magic.jpg` (Beth OO.jpg)

**Specifications:**
- **Dimensions:** 800×600px (landscape card)
- **Aspect Ratio:** 4:3
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 100KB (WebP), 180KB (JPG)
- **Content:** Close-up magic performance, cards, intimate moment
- **Style:** Engaging, shows interaction with audience

**Alt Text:** `"Sebastian performing interactive close-up magic with cards for an engaged audience"`

---

### 4. The Group Show Card
**File Location:** `assets/images/shows/group-show.webp` + `.jpg` fallback
**Current Status:** ✅ Exists as `group-show.jpg` (Group Shows.jpg)

**Specifications:**
- **Dimensions:** 800×600px (landscape card)
- **Aspect Ratio:** 4:3
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 100KB (WebP), 180KB (JPG)
- **Content:** Group performance, audience engagement
- **Style:** Dynamic, shows entertainment value

**Alt Text:** `"Sebastian performing an interactive group show for a captivated audience"`

---

### 5. "The Other Side" Show Featured Image
**File Location:** `assets/images/shows/the-other-side-featured.webp` + `.jpg`
**Current Status:** ❌ **MISSING - NEEDS TO BE CREATED**

**Specifications:**
- **Dimensions:** 1200×800px (featured card, larger than regular show cards)
- **Aspect Ratio:** 3:2
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 150KB (WebP), 250KB (JPG)
- **Content:** Promotional image for "The Other Side" theatrical magic show
- **Style:** Dramatic, theatrical, mysterious - matches show branding
- **Special Notes:** This is a featured show section, needs high-quality production image

**Alt Text:** `"The Other Side - Award-winning magic game show featuring Sebastian Gerhardt"`

**HTML Implementation:**
```html
<picture class="show-featured-image">
  <source srcset="assets/images/shows/the-other-side-featured-1200w.webp" type="image/webp">
  <img src="assets/images/shows/the-other-side-featured-1200w.jpg"
       alt="The Other Side - Award-winning magic game show featuring Sebastian Gerhardt"
       loading="lazy"
       class="show-image-featured">
</picture>
```

---

### 6. Upcoming Shows Background Video
**File Location:** `assets/images/shows/upcoming-shows-bg.mp4`
**Current Status:** ✅ Exists as `upcoming-shows-bg.mp4` (PreShow_Loop_StaticTVClouds_v1.mp4)

**Specifications:**
- **Format:** MP4 (H.264 codec)
- **Dimensions:** 1920×1080px
- **Duration:** 10-30 seconds (looping)
- **File Size:** Max 5-10MB for background video
- **Content:** Atmospheric, looping background effect
- **Audio:** None (muted background video)

---

## Media Section Images

### Logo Requirements (All Media Logos)

**File Location Pattern:** `assets/images/media/{company-name}.webp` + fallback
**Current Status:** ✅ All organized in `/images/media/`

**General Specifications:**
- **Dimensions:** Variable based on logo, typically 200-400px width
- **Aspect Ratio:** Maintain original logo aspect ratio
- **Format:** WebP for photos, PNG with transparency for vector-style logos
- **File Size:** Max 50KB per logo
- **Background:** Transparent or white, depending on logo design
- **Padding:** Include 10-20px padding around logo for visual breathing room

### Individual Media Logo Specifications:

#### 7. FOX 35 Logo
**File Location:** `assets/images/media/fox35.webp`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 300×100px (approximately, maintain aspect ratio)
- **Format:** WebP (currently .webp)
- **Alt Text:** `"FOX 35 Orlando - Featured television appearance"`

---

#### 8. KETK Logo
**File Location:** `assets/images/media/ketk.png`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 300×120px (approximately)
- **Format:** PNG with transparency
- **Alt Text:** `"KETK NBC East Texas - Television feature"`

---

#### 9. MagicSeen Magazine Logo
**File Location:** `assets/images/media/magicseen.webp` (convert from .jpg)
**Current Status:** ✅ Exists as .jpg (should convert to WebP)

**Specifications:**
- **Dimensions:** 300×100px
- **Format:** WebP or JPG
- **Alt Text:** `"MagicSeen Magazine - Featured magician"`

---

#### 10. MAGIC Magazine Logo
**File Location:** `assets/images/media/magic-magazine.png`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 300×100px
- **Format:** PNG with transparency
- **Alt Text:** `"MAGIC Magazine - Industry feature"`

---

#### 11. Penguin Monthly Logo
**File Location:** `assets/images/media/penguin-monthly.webp` (convert from .jpg)
**Current Status:** ✅ Exists as .jpg (should convert to WebP)

**Specifications:**
- **Dimensions:** 300×150px (magazine cover may be taller)
- **Format:** WebP or JPG
- **Alt Text:** `"Penguin Magic Monthly - Cover feature"`

---

#### 12. SunTrust Logo
**File Location:** `assets/images/media/suntrust.png`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 300×80px
- **Format:** PNG with transparency (corporate logo)
- **Alt Text:** `"SunTrust - Corporate event performance"`

---

#### 13. Lockheed Martin Logo
**File Location:** `assets/images/media/lockheed-martin.png`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 350×100px
- **Format:** PNG with transparency
- **Alt Text:** `"Lockheed Martin - Corporate entertainment"`

---

#### 14. LG Logo
**File Location:** `assets/images/media/lg.webp` (convert from .jpg)
**Current Status:** ✅ Exists as .jpg

**Specifications:**
- **Dimensions:** 200×80px (simple logo, smaller)
- **Format:** WebP or PNG
- **Alt Text:** `"LG - Corporate event performance"`

---

#### 15. Lytx Logo
**File Location:** `assets/images/media/lytx.png`
**Current Status:** ✅ Exists

**Specifications:**
- **Dimensions:** 250×80px
- **Format:** PNG with transparency
- **Alt Text:** `"Lytx - Corporate entertainment client"`

---

## Testimonials Section Images

### 16. Video Testimonials
**File Location Pattern:** `assets/images/testimonials/testimonial-{number}.mp4`
**Current Status:** ❌ **ALL MISSING - NEED TO BE CREATED**

**Required Files:**
- `testimonial-1.mp4` (Sarah & Michael Johnson - Wedding Clients)
- `testimonial-2.mp4` (Jennifer Martinez - Event Coordinator, Tech Corp)
- `testimonial-3.mp4` (David Chen - Private Party Host)

**Specifications:**
- **Format:** MP4 (H.264 codec, AAC audio)
- **Dimensions:** 1280×720px (720p) or 1920×1080px (1080p)
- **Aspect Ratio:** 16:9
- **Duration:** 30-90 seconds per testimonial
- **File Size:** 20-50MB per video (optimized for web)
- **Bitrate:** 2-5 Mbps video, 128 kbps audio
- **Frame Rate:** 30fps or 24fps
- **Audio:** Clear dialogue, professional quality, minimal background noise
- **Subtitles:** Consider adding .vtt caption files for accessibility

**Optional Thumbnail Images:**
```
testimonial-1-thumb.webp → 640×360px
testimonial-2-thumb.webp → 640×360px
testimonial-3-thumb.webp → 640×360px
```

**Alt Text Pattern:** `"Video testimonial from {Client Name}, {Event Type}"`

---

### 17. Client Photo Placeholders (Optional)
**File Location Pattern:** `assets/images/testimonials/client-{number}.jpg`
**Current Status:** ❌ Not currently used, but recommended for static testimonials if added

**Specifications:**
- **Dimensions:** 300×300px (square)
- **Aspect Ratio:** 1:1
- **Format:** WebP primary, JPG fallback
- **File Size:** Max 40KB
- **Content:** Professional headshot or photo of client (with permission)
- **Style:** Consistent cropping and styling across all client photos

---

## Decorative Images

### 18. Decorative Background Elements
**File Location Pattern:** `assets/images/decorative/{element-name}.webp`
**Current Status:** ✅ None currently needed (CSS animations handle effects)

**Potential Future Assets:**
- Magical particle effects
- Smoke/fog overlays
- Sparkle/glitter textures
- Card spread backgrounds
- Mystical texture overlays

**General Specifications:**
- **Format:** PNG with transparency or WebP
- **File Size:** Max 100KB
- **Usage:** Decorative only, not essential to content
- **Alt Text:** Empty alt attribute `alt=""` (decorative images)
- **Loading:** Always `loading="lazy"`

---

## Logos & Icons

### 19. Main Logo (OO Logo)
**File Locations:**
- `assets/images/logos/logo-white.png` ✅ Exists
- `assets/images/logos/logo-black.png` ✅ Exists

**Specifications:**
- **Dimensions:** 200×80px (approximately, maintain aspect ratio)
- **Format:** PNG with transparency (for overlay on varied backgrounds)
- **File Size:** Max 30KB
- **Variants:** White version (for dark backgrounds), Black version (for light backgrounds)
- **Usage:** Navigation bar, footer
- **Alt Text:** `"Sebastian Gerhardt - Official logo"` or `"OO - Oracle of Oslo logo"`

---

### 20. Social Media Icons

#### Instagram Icon
**File Location:** `assets/images/logos/instagram-icon.jpg`
**Current Status:** ✅ Exists (but should be SVG or PNG)
**Recommendation:** Replace with SVG for scalability

**Specifications:**
- **Dimensions:** 48×48px (icon)
- **Format:** SVG (preferred) or PNG with transparency
- **File Size:** Max 5KB
- **Alt Text:** `"Instagram icon"` or `""` (empty if decorative within link with text)

**Note:** YouTube, TikTok, Facebook icons are currently inline SVG in HTML (good approach)

---

## Responsive Image Implementation

### Breakpoints and Sizes
```css
/* Standard breakpoints */
Mobile:     320px - 767px
Tablet:     768px - 1023px
Desktop:    1024px - 1439px
Large:      1440px+
```

### srcset and sizes Implementation Pattern

**Example for Show Cards:**
```html
<picture class="show-image">
  <source srcset="assets/images/shows/closeup-magic-800w.webp 800w,
                  assets/images/shows/closeup-magic-600w.webp 600w,
                  assets/images/shows/closeup-magic-400w.webp 400w"
          type="image/webp"
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 60vw, 90vw">
  <img src="assets/images/shows/closeup-magic-600w.jpg"
       srcset="assets/images/shows/closeup-magic-800w.jpg 800w,
               assets/images/shows/closeup-magic-600w.jpg 600w,
               assets/images/shows/closeup-magic-400w.jpg 400w"
       sizes="(min-width: 1024px) 45vw, (min-width: 768px) 60vw, 90vw"
       alt="Sebastian performing interactive close-up magic"
       loading="lazy"
       class="show-image-photo">
</picture>
```

### Loading Attributes
- `loading="eager"` → Above-the-fold images (hero, logo)
- `loading="lazy"` → Below-the-fold images (testimonials, footer)

### Decoding Attribute
- `decoding="async"` → For non-critical images to improve page render time

---

## Performance Optimization

### Image Optimization Checklist
- [ ] Convert all photos to WebP with JPG fallback
- [ ] Create responsive variants (at least 3 sizes per image)
- [ ] Compress all images to target file sizes
- [ ] Implement lazy loading for below-the-fold content
- [ ] Use `<picture>` element with art direction where needed
- [ ] Add explicit width/height attributes to prevent layout shift
- [ ] Use CSS aspect-ratio for container sizing
- [ ] Preload critical hero images
- [ ] Consider using blur-up placeholder technique

### Preloading Critical Images
```html
<!-- In <head> -->
<link rel="preload" as="image" href="assets/images/hero/hero-bg-1920w.webp" type="image/webp">
<link rel="preload" as="image" href="assets/images/logos/logo-white.png" type="image/png">
```

### CSS Aspect Ratio Boxes (Prevent Layout Shift)
```css
.show-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```

---

## Accessibility Requirements

### Alt Text Guidelines

**Descriptive Alt Text (Content Images):**
- Describe what's happening in the image
- Include relevant context (who, what, where)
- Keep concise but informative (80-125 characters ideal)
- Don't start with "Image of..." or "Picture of..."

**Examples:**
```html
<!-- Good -->
<img src="headshot.jpg" alt="Sebastian Gerhardt, professional magician">

<!-- Better -->
<img src="performance.jpg" alt="Sebastian performing card trick for amazed corporate audience">

<!-- Best (includes context) -->
<img src="closeup.jpg" alt="Sebastian executing card flourish during close-up magic performance">
```

**Empty Alt Text (Decorative Images):**
```html
<img src="sparkle-effect.png" alt="" loading="lazy">
```

**Logo Alt Text:**
- Include company/brand name
- Optionally include context
```html
<img src="logo-white.png" alt="Sebastian Gerhardt Magic">
```

### ARIA Labels for Background Images
```html
<div class="hero-background" role="img" aria-label="Dramatic stage lighting with magical atmosphere">
  <!-- Background image via CSS -->
</div>
```

---

## Image Optimization Workflow

### Step-by-Step Process

1. **Capture/Source Image**
   - Use high-resolution source (2x-3x final display size)
   - Ensure proper lighting and composition
   - Get signed model releases for people in photos

2. **Edit and Prepare**
   - Crop to desired aspect ratio
   - Color correct and enhance
   - Export at highest quality

3. **Create Responsive Variants**
   - Export at 400w, 600w, 800w, 1200w, 1920w (as needed)
   - Maintain aspect ratio across variants

4. **Convert Formats**
   - Create WebP version (80-85% quality)
   - Create JPG fallback (75-80% quality)
   - Optionally create AVIF version

5. **Compress**
   - Run through compression tool
   - Verify file sizes meet targets
   - Check quality on various devices

6. **Optimize Filenames**
   - Rename with descriptive, SEO-friendly names
   - Use consistent naming convention

7. **Upload to Correct Directory**
   - Place in appropriate `/assets/images/{category}/` folder
   - Update HTML references
   - Test loading and rendering

8. **Validate**
   - Check images load correctly on all breakpoints
   - Verify alt text is present and accurate
   - Test with slow network throttling
   - Run Lighthouse performance audit

---

## Quick Reference: Image Checklist by Section

### Hero Section
- [ ] `hero-bg-1920w.webp` + `.jpg` (1920×1080px) - ✅ Exists
- [ ] `hero-bg-1366w.webp` + `.jpg` (1366×768px) - ❌ Need to create
- [ ] `hero-bg-768w.webp` + `.jpg` (768×1024px) - ❌ Need to create

### About Section
- [x] `headshot-800w.webp` + `.jpg` (800×800px) - ✅ Exists as JPG
- [ ] `headshot-600w.webp` + `.jpg` - ❌ Need to create
- [ ] `headshot-400w.webp` + `.jpg` - ❌ Need to create

### Shows Section
- [x] `closeup-magic.jpg` (800×600px) - ✅ Exists
- [x] `group-show.jpg` (800×600px) - ✅ Exists
- [ ] `the-other-side-featured-1200w.webp` + `.jpg` - ❌ **CRITICAL - MISSING**
- [x] `upcoming-shows-bg.mp4` - ✅ Exists

### Media Section (Logos)
- [x] All 9 media logos organized - ✅ Exists
- [ ] Convert JPG logos to WebP - ❌ Optimization needed

### Testimonials Section
- [ ] `testimonial-1.mp4` - ❌ **CRITICAL - MISSING**
- [ ] `testimonial-2.mp4` - ❌ **CRITICAL - MISSING**
- [ ] `testimonial-3.mp4` - ❌ **CRITICAL - MISSING**

### Logos
- [x] `logo-white.png` - ✅ Exists
- [x] `logo-black.png` - ✅ Exists
- [x] `instagram-icon.jpg` - ✅ Exists (recommend SVG replacement)

---

## Asset Production Priorities

### Phase 1: Critical (Launch Blockers)
1. **The Other Side show featured image** - Replace SVG placeholder
2. **Testimonial videos** (3 files) - Record or source client testimonials
3. **Responsive variants for hero background** - Create mobile/tablet versions

### Phase 2: High Priority (Launch Week)
1. Convert all JPG logos to WebP with fallbacks
2. Create responsive variants for all show cards
3. Optimize all existing images (compress, convert to WebP)
4. Create responsive variants for headshot

### Phase 3: Optimization (Post-Launch)
1. Implement blur-up placeholders
2. Create AVIF versions for next-gen browsers
3. Add decorative elements if needed
4. Gather and add more testimonial content

---

## Tools and Resources

### Recommended Tools
- **[Squoosh](https://squoosh.app/)** - Format conversion and compression
- **[ImageOptim](https://imageoptim.com/)** - Batch optimization (Mac)
- **[Sharp](https://sharp.pixelplumbing.com/)** - Node.js image processing
- **[Photopea](https://www.photopea.com/)** - Free online Photoshop alternative
- **[SVGOMG](https://jakearchibald.github.io/svgomg/)** - SVG optimization

### Testing Tools
- **Chrome DevTools** - Network throttling, performance profiling
- **Google Lighthouse** - Performance, accessibility, SEO audits
- **WebPageTest** - Real-world performance testing
- **ImageOptim API** - Automated optimization in workflows

### Format Support Resources
- [Can I Use - WebP](https://caniuse.com/webp)
- [Can I Use - AVIF](https://caniuse.com/avif)
- [MDN - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

## Change Log

**v1.0 - September 29, 2025**
- Initial documentation created
- Directory structure established
- Existing images organized into categories
- Specifications defined for all current and missing assets
- Responsive image implementation patterns documented

---

**Maintained by:** Development Team
**Questions?** Refer to CONTENT_AUDIT.md for related issues and priorities