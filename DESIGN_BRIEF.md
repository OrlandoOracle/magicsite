# THE OTHER SIDE -- Comprehensive Website Design Brief
## A Premium Magic/Illusion Game Show Touring the U.S.

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Competitive Landscape Analysis](#competitive-landscape-analysis)
3. [Recommended Tech Stack](#recommended-tech-stack)
4. [Color System & Visual Identity](#color-system--visual-identity)
5. [Typography System](#typography-system)
6. [Page Architecture & Section Breakdown](#page-architecture--section-breakdown)
7. [Hero Section -- The Gateway](#hero-section----the-gateway)
8. [Tour Dates & City Listings](#tour-dates--city-listings)
9. [Ticket Purchase Flow](#ticket-purchase-flow)
10. [Visual Techniques & Animations](#visual-techniques--animations)
11. [Mobile Experience](#mobile-experience)
12. [SEO & Structured Data](#seo--structured-data)
13. [Ticketing Platform Recommendations](#ticketing-platform-recommendations)
14. [Key Sections Every Show Website Needs](#key-sections-every-show-website-needs)
15. [CSS Code Patterns](#css-code-patterns)
16. [JavaScript Animation Patterns](#javascript-animation-patterns)
17. [Performance Optimization](#performance-optimization)
18. [GitHub Resources & Templates](#github-resources--templates)

---

## EXECUTIVE SUMMARY

This design brief synthesizes research from Cirque du Soleil, Hamilton, Wicked, Derren Brown, Penn & Teller, Shin Lim, Sleep No More, and Punchdrunk to create a world-class website for "The Other Side" -- an award-winning magic game show blending illusion, audience interaction, and theatrical storytelling.

The universal pattern across all premium show websites is: **dark atmosphere + selective light accents + full-bleed imagery + narrative-driven content + frictionless ticketing.**

Every site studied prioritizes mood over information density, letting the aesthetic do the selling before the copy does.

---

## COMPETITIVE LANDSCAPE ANALYSIS

### Cirque du Soleil (cirquedusoleil.com)
- **Layout**: Dark base (#000000, #191a1a) with gold accents (#dca85d, #f2e7bb)
- **Navigation**: "Shows & Tickets" as primary CTA; 20+ shows in dropdown
- **Hero**: Centered messaging with transparent character imagery overlay
- **Tour dates**: Card-based system with tag system for show categories
- **Ticketing**: Sticky box wrapper for persistent ticket options across pages
- **Key pattern**: Split-block grids pairing imagery with descriptive text
- **Custom font**: "Cds Sans" -- proprietary sans-serif
- **No mobile app**: Relies entirely on mobile-optimized web

### Hamilton (hamiltonmusical.com/us-tour/)
- **Layout**: Dark backgrounds with gold/white typography
- **Tour dates**: Card-based with venue name, location, dates, "Get Tickets" button
- **Ticketing**: Multi-channel (Ticketmaster links + lottery system)
- **Key pattern**: Each tour stop is a self-contained card with multiple CTAs
- **Tech**: WordPress with Swiper.js for vertical scrolling effects
- **Analytics**: New Relic, GTM, TikTok Pixel, Facebook Pixel

### Wicked (wickedthemusical.com)
- **Color**: Black base with lime-green primary (#8DC63F) -- instantly iconic
- **Hero**: "See it live. Remember it forever." -- emotion over information
- **Animations**: CSS particle animations (purple, smoke, stars variants)
- **Key pattern**: Urgency messaging ("Best availability February evenings") via modal overlays
- **Typography**: Uppercase, condensed, 42-70px at max viewport
- **Layout spacing**: Consistent 6rem between sections

### Derren Brown (derrenbrown.co.uk)
- **Color**: Deep charcoal (rgb(71,79,85)) with gold (#a98b52)
- **Typography**: Custom "Portrait" font family (Regular, Medium, Text Medium)
- **Hero**: Show title with "INFO & TICKETS" gold-highlighted CTA
- **Key pattern**: Full-width sections with strategically positioned background images
- **Mood**: Sophisticated, mysterious, premium
- **Navigation**: Clean horizontal -- Stage & Screen | Art | Books | NEWS | Derren | Contact
- **Button style**: 50px border-radius, gold hover transitions

### Penn & Teller (pennandteller.com)
- **Color**: Black with vibrant red (#f81d2d)
- **Layout**: Hero banner linking directly to tour dates + 6 content tiles below
- **Key pattern**: Conversion-focused grid -- Vegas tickets, Fool Us, VIP, merch, podcast
- **Typography**: Open Sans, Roboto, Libre Baskerville
- **E-commerce**: WooCommerce integration for merchandise

### Shin Lim (shinlimmagic.com)
- **Platform**: Squarespace -- clean, dark, minimal
- **Social proof**: "By leaps and bounds, the BEST Close-Up Magic in the history of America's Got Talent" -- Howie Mandel
- **Key pattern**: Testimonials from media outlets as content sections
- **Product integration**: Card decks, tutorials, streaming content alongside show info

### Sleep No More / McKittrick Hotel (mckittrickhotel.com)
- **Mood**: Dark theatrical noir -- atmospheric over promotional
- **Tagline**: "A legendary Hotel. Shakespeare's Fallen Hero. A Film noir shadow of suspense."
- **Key pattern**: Lead with narrative/mood rather than features
- **CTA**: "Book With Haste" -- in-character urgency language
- **Pricing**: Transparent range ($138.50-$346.44)
- **Cast**: Full "Residents" gallery (32+ performers) building parasocial connection

### Punchdrunk (punchdrunk.com)
- **Aesthetic**: Minimalist dark with strategic white typography
- **Layout**: Cinematic gallery (915x600px landscape images)
- **Key pattern**: Featured experiences with high-contrast photography
- **SEO**: Extensive JSON-LD structured data

---

## RECOMMENDED TECH STACK

### Primary Recommendation: Astro + Tailwind CSS + GSAP

```
Framework:     Astro 5.x (static-first, island architecture)
Styling:       Tailwind CSS 4.x (utility-first, dark mode native)
Animations:    GSAP + ScrollTrigger (industry standard for theatrical scroll effects)
Deployment:    Vercel or Netlify (edge CDN, instant deploys)
CMS:           Sanity.io or Contentful (for tour dates, press quotes, cast bios)
Ticketing:     Eventbrite Embedded Checkout or ShowClix Widget
```

### Why Astro
- Zero JS by default = blazing fast (critical for mobile users checking tour dates)
- Island architecture = interactive components (ticket widgets, animations) hydrate on demand
- Built-in View Transitions API for cinematic page transitions
- Markdown/MDX for content management
- 95+ Lighthouse scores out of the box

### Alternative: Next.js + Framer Motion
- Better if you need a CMS-heavy site with dynamic content
- Framer Motion provides excellent scroll-triggered animations
- App Router with server components for performance

---

## COLOR SYSTEM & VISUAL IDENTITY

### Primary Palette: "The Other Side"

The universal pattern: **dark base + metallic/jewel accent + high-contrast text**

```css
:root {
  /* === CORE DARK === */
  --color-void:          #0A0A0C;     /* True background -- near-black with blue undertone */
  --color-obsidian:      #121218;     /* Card/section backgrounds */
  --color-shadow:        #1A1A24;     /* Elevated surfaces, nav background */
  --color-smoke:         #2A2A36;     /* Borders, dividers, subtle UI */

  /* === ACCENT -- Choose ONE signature color === */

  /* Option A: Mystic Gold (Cirque/Derren Brown approach) */
  --color-accent:        #C9A84C;     /* Primary accent -- gold */
  --color-accent-light:  #E8D5A0;     /* Hover states, highlights */
  --color-accent-glow:   rgba(201, 168, 76, 0.3);  /* Glow effects */

  /* Option B: Ethereal Violet (Sleep No More / Wicked approach) */
  /* --color-accent:     #8B5CF6;     Purple -- mystical, theatrical */
  /* --color-accent-light: #A78BFA; */
  /* --color-accent-glow: rgba(139, 92, 246, 0.3); */

  /* Option C: Blood Red (Penn & Teller approach) */
  /* --color-accent:     #DC2626;     Red -- danger, drama */
  /* --color-accent-light: #F87171; */
  /* --color-accent-glow: rgba(220, 38, 38, 0.3); */

  /* === TEXT === */
  --color-text-primary:  #F5F5F7;     /* Headings, primary content */
  --color-text-secondary:#A0A0B0;     /* Body text, descriptions */
  --color-text-muted:    #6B6B7B;     /* Captions, metadata */

  /* === FUNCTIONAL === */
  --color-success:       #22C55E;     /* Available tickets */
  --color-warning:       #F59E0B;     /* Limited availability */
  --color-danger:        #EF4444;     /* Sold out */
}
```

### Gradient Patterns Used Across Sites

```css
/* Fade-to-dark overlay for images/video (universal pattern) */
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 12, 0) 0%,
    rgba(10, 10, 12, 0.4) 50%,
    rgba(10, 10, 12, 0.95) 85%,
    rgba(10, 10, 12, 1) 100%
  );
}

/* Accent glow for CTAs */
.cta-glow {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
  box-shadow: 0 0 40px var(--color-accent-glow),
              0 0 80px rgba(201, 168, 76, 0.1);
}

/* Radial spotlight effect (theatrical) */
.spotlight {
  background: radial-gradient(
    ellipse at 50% 30%,
    rgba(201, 168, 76, 0.08) 0%,
    transparent 70%
  );
}
```

---

## TYPOGRAPHY SYSTEM

### Recommended Font Pairings

**Option A: Classic Theatrical** (Derren Brown / Cirque approach)
```css
/* Display: Playfair Display -- dramatic serif for headlines */
/* Body: Inter -- clean, readable sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
}
```

**Option B: Modern Mystical** (For a more contemporary feel)
```css
/* Display: Cormorant Garamond -- elegant, refined serif */
/* Body: DM Sans -- geometric, modern sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;700&display=swap');

:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;
}
```

**Option C: Bold & Cinematic** (Hamilton / Wicked approach)
```css
/* Display: Bebas Neue -- condensed uppercase impact */
/* Body: Source Sans 3 -- workhorse readable body */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:wght@300;400;600;700&display=swap');

:root {
  --font-display: 'Bebas Neue', Impact, sans-serif;
  --font-body: 'Source Sans 3', -apple-system, sans-serif;
}
```

### Type Scale

```css
:root {
  /* Mobile-first sizes */
  --text-hero:    clamp(3rem, 8vw, 7rem);      /* 48px -> 112px */
  --text-h1:      clamp(2.25rem, 5vw, 4.5rem); /* 36px -> 72px */
  --text-h2:      clamp(1.75rem, 3.5vw, 3rem); /* 28px -> 48px */
  --text-h3:      clamp(1.25rem, 2.5vw, 2rem); /* 20px -> 32px */
  --text-body:    clamp(1rem, 1.2vw, 1.125rem); /* 16px -> 18px */
  --text-small:   clamp(0.875rem, 1vw, 1rem);   /* 14px -> 16px */
  --text-caption:  0.75rem;                       /* 12px */

  /* Letter spacing -- critical for theatrical feel */
  --tracking-hero:    0.15em;    /* Wide tracking for hero text */
  --tracking-heading:  0.08em;   /* Moderate tracking for headings */
  --tracking-caps:     0.2em;    /* Extra wide for uppercase labels */
  --tracking-body:     0.01em;   /* Minimal for body readability */
}
```

---

## PAGE ARCHITECTURE & SECTION BREAKDOWN

### Full Site Map

```
HOME (/)
  |-- Hero (video/image + CTA)
  |-- About the Show (narrative hook)
  |-- Tour Dates (upcoming cities)
  |-- The Experience (what audience can expect)
  |-- Press & Reviews
  |-- Cast / Performers
  |-- Gallery / Media
  |-- Newsletter Signup
  |-- Footer

TOUR DATES (/tour)
  |-- All upcoming dates with city/venue/ticket links
  |-- Map visualization (optional)
  |-- Past shows archive

ABOUT (/about)
  |-- Show concept and story
  |-- Creator/performer bios
  |-- Awards and accolades

TICKETS (external or embedded widget per city)

GALLERY (/gallery)
  |-- Photo grid with lightbox
  |-- Video highlights / trailer

PRESS (/press)
  |-- Press kit download
  |-- Media inquiries contact
  |-- Press quotes / reviews

CONTACT (/contact)
  |-- Booking inquiries
  |-- Venue partnerships
  |-- General inquiries
```

### Section Flow (Home Page)

The home page follows a proven narrative arc observed across all studied sites:

```
1. HOOK        -- Full-screen hero with video/image (0-3 seconds to capture)
2. INTRIGUE    -- "What is The Other Side?" (mystery-forward description)
3. PROOF       -- Press quotes / awards / "As Seen On"
4. EXPERIENCE  -- What the audience will feel (sensory language)
5. ACTION      -- Tour dates with ticket CTAs
6. CAST        -- Performer profiles (builds connection)
7. MEDIA       -- Gallery / trailer
8. CAPTURE     -- Newsletter / follow on socials
9. FOOTER      -- Legal, navigation, social links
```

---

## HERO SECTION -- THE GATEWAY

### Pattern Analysis

Every premium show website uses a full-viewport hero that establishes mood within 3 seconds:

| Site | Hero Type | CTA Placement | Messaging Style |
|------|-----------|---------------|-----------------|
| Cirque du Soleil | Image + overlay text | Centered | "Welcome to a new era" |
| Hamilton | Logo + tour badge | Below logo | "North American Tour" |
| Wicked | Dark + particles | Centered | "See it live. Remember it forever." |
| Derren Brown | Show image + logo | Below title | "INFO & TICKETS" |
| Sleep No More | Dramatic photo | Below narrative | "Book With Haste" |

### Recommended Hero Structure

```html
<section class="hero" aria-label="The Other Side - Welcome">
  <!-- Video Background (desktop only) -->
  <div class="hero__media">
    <video
      class="hero__video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/images/hero-poster.webp"
    >
      <source src="/video/hero-bg.webm" type="video/webm" />
      <source src="/video/hero-bg.mp4" type="video/mp4" />
    </video>
    <!-- Dark gradient overlay -->
    <div class="hero__overlay" aria-hidden="true"></div>
    <!-- Particle/smoke effect layer -->
    <canvas class="hero__particles" aria-hidden="true"></canvas>
  </div>

  <!-- Content -->
  <div class="hero__content">
    <p class="hero__pre-title">An Award-Winning Magic Game Show</p>
    <h1 class="hero__title">
      <span class="hero__title-line">THE OTHER</span>
      <span class="hero__title-line hero__title-line--accent">SIDE</span>
    </h1>
    <p class="hero__tagline">Where illusion meets reality. Are you ready to cross over?</p>
    <div class="hero__cta-group">
      <a href="/tour" class="btn btn--primary btn--glow">
        Get Tickets
      </a>
      <a href="#trailer" class="btn btn--ghost">
        <svg class="btn__icon"><!-- play icon --></svg>
        Watch Trailer
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="hero__scroll-indicator" aria-hidden="true">
    <span>Scroll to discover</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>
```

### Hero CSS

```css
.hero {
  position: relative;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-void);
}

.hero__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6; /* Dim video for text readability */
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 12, 0.3) 0%,
    rgba(10, 10, 12, 0.1) 40%,
    rgba(10, 10, 12, 0.7) 75%,
    rgba(10, 10, 12, 1) 100%
  );
}

.hero__particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 0 1.5rem;
}

.hero__pre-title {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.5s forwards;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: var(--tracking-hero);
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.8s forwards;
}

.hero__title-line {
  display: block;
}

.hero__title-line--accent {
  color: var(--color-accent);
  text-shadow: 0 0 60px var(--color-accent-glow);
}

.hero__tagline {
  font-family: var(--font-body);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 1.1s forwards;
}

.hero__cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 1s ease 1.4s forwards;
}

/* Scroll indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%      { opacity: 1; transform: scaleY(1.2); }
}
```

---

## TOUR DATES & CITY LISTINGS

### Pattern Analysis

| Site | Format | Data Shown | CTA |
|------|--------|------------|-----|
| Hamilton | Card list | Venue, city, state, dates | "Get Tickets" (Ticketmaster link) |
| Cirque | Card grid | Show name, venue, dates, tags | Sticky ticket box |
| Derren Brown | Section blocks | Tour name, dates | "INFO & TICKETS" |
| Penn & Teller | Hero banner | Tour dates page link | "Tour Dates" nav |

### Recommended Tour Dates Component

```html
<section class="tour" id="tour">
  <div class="tour__header">
    <p class="section-label">Now Touring</p>
    <h2 class="section-title">Find Us Near You</h2>
    <p class="section-subtitle">The Other Side is crossing the country. Don't miss your city.</p>
  </div>

  <div class="tour__list" role="list">
    <!-- Upcoming show card -->
    <article class="tour-card" role="listitem">
      <div class="tour-card__date">
        <span class="tour-card__month">MAR</span>
        <span class="tour-card__day">15</span>
      </div>
      <div class="tour-card__info">
        <h3 class="tour-card__city">Austin, TX</h3>
        <p class="tour-card__venue">Paramount Theatre</p>
        <p class="tour-card__dates">March 15 - 17, 2026</p>
      </div>
      <div class="tour-card__status">
        <span class="tour-card__badge tour-card__badge--available">On Sale</span>
      </div>
      <a href="/tickets/austin" class="btn btn--primary tour-card__cta">
        Get Tickets
      </a>
    </article>

    <!-- Limited availability -->
    <article class="tour-card" role="listitem">
      <div class="tour-card__date">
        <span class="tour-card__month">APR</span>
        <span class="tour-card__day">05</span>
      </div>
      <div class="tour-card__info">
        <h3 class="tour-card__city">Nashville, TN</h3>
        <p class="tour-card__venue">Ryman Auditorium</p>
        <p class="tour-card__dates">April 5 - 7, 2026</p>
      </div>
      <div class="tour-card__status">
        <span class="tour-card__badge tour-card__badge--limited">Limited</span>
      </div>
      <a href="/tickets/nashville" class="btn btn--primary tour-card__cta">
        Get Tickets
      </a>
    </article>

    <!-- Sold out -->
    <article class="tour-card tour-card--sold-out" role="listitem">
      <div class="tour-card__date">
        <span class="tour-card__month">FEB</span>
        <span class="tour-card__day">22</span>
      </div>
      <div class="tour-card__info">
        <h3 class="tour-card__city">Chicago, IL</h3>
        <p class="tour-card__venue">Chicago Theatre</p>
        <p class="tour-card__dates">February 22 - 24, 2026</p>
      </div>
      <div class="tour-card__status">
        <span class="tour-card__badge tour-card__badge--soldout">Sold Out</span>
      </div>
      <button class="btn btn--ghost tour-card__cta" disabled>
        Waitlist
      </button>
    </article>
  </div>

  <a href="/tour" class="tour__see-all">
    View All Tour Dates
    <svg><!-- arrow icon --></svg>
  </a>
</section>
```

### Tour Card CSS

```css
.tour {
  padding: 6rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.tour__list {
  display: flex;
  flex-direction: column;
  gap: 1px; /* Hairline dividers via background color */
  background: var(--color-smoke);
  border-radius: 12px;
  overflow: hidden;
}

.tour-card {
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: var(--color-obsidian);
  transition: background 0.3s ease;
}

.tour-card:hover {
  background: var(--color-shadow);
}

.tour-card--sold-out {
  opacity: 0.5;
}

.tour-card__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-display);
}

.tour-card__month {
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-accent);
}

.tour-card__day {
  font-size: var(--text-h2);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1;
}

.tour-card__city {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.tour-card__venue {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
}

.tour-card__dates {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.tour-card__badge {
  font-size: var(--text-caption);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
}

.tour-card__badge--available {
  background: rgba(34, 197, 94, 0.15);
  color: var(--color-success);
}

.tour-card__badge--limited {
  background: rgba(245, 158, 11, 0.15);
  color: var(--color-warning);
}

.tour-card__badge--soldout {
  background: rgba(239, 68, 68, 0.15);
  color: var(--color-danger);
}

/* Mobile: Stack layout */
@media (max-width: 640px) {
  .tour-card {
    grid-template-columns: 60px 1fr;
    grid-template-rows: auto auto;
    gap: 0.75rem 1rem;
    padding: 1.25rem 1rem;
  }

  .tour-card__status {
    grid-column: 2;
    grid-row: 2;
  }

  .tour-card__cta {
    grid-column: 1 / -1;
    grid-row: 3;
    width: 100%;
    text-align: center;
  }
}
```

---

## TICKET PURCHASE FLOW

### Pattern Analysis

Three approaches observed across show websites:

**1. External Redirect (Hamilton, Penn & Teller)**
- "Get Tickets" links to Ticketmaster or venue-specific pages
- Pros: Simple, no maintenance, trusted checkout
- Cons: Users leave your site, lose brand immersion

**2. Embedded Widget (Cirque du Soleil, modern approach)**
- Ticket widget loads within an iframe or modal on your site
- Pros: Users stay on-brand, higher conversion
- Cons: More technical setup, dependent on platform API

**3. Hybrid (Recommended for The Other Side)**
- Show tour dates on your site with "Get Tickets" buttons
- Button opens a modal with embedded Eventbrite/ShowClix checkout
- Fallback: direct link to external page if widget fails

### Eventbrite Embedded Checkout Implementation

```html
<!-- Ticket Modal -->
<dialog class="ticket-modal" id="ticketModal">
  <div class="ticket-modal__backdrop" data-close-modal></div>
  <div class="ticket-modal__content">
    <button class="ticket-modal__close" data-close-modal aria-label="Close">
      <svg><!-- X icon --></svg>
    </button>
    <div class="ticket-modal__header">
      <h3>Austin, TX -- Paramount Theatre</h3>
      <p>March 15 - 17, 2026</p>
    </div>
    <div id="eventbrite-widget-container"></div>
  </div>
</dialog>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
<script>
  function openTicketModal(eventId, cityName, venueName, dates) {
    const modal = document.getElementById('ticketModal');
    modal.querySelector('h3').textContent = `${cityName} -- ${venueName}`;
    modal.querySelector('p').textContent = dates;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: eventId,
      iframeContainerId: 'eventbrite-widget-container',
      iframeContainerHeight: 500,
      onOrderComplete: () => {
        // Track conversion
        gtag('event', 'purchase', { event_category: 'tickets', event_label: cityName });
        // Show confirmation
        modal.querySelector('.ticket-modal__content').innerHTML = `
          <div class="ticket-confirmation">
            <h3>You're crossing over.</h3>
            <p>Check your email for your tickets to The Other Side in ${cityName}.</p>
          </div>
        `;
      }
    });

    modal.showModal();
  }
</script>
```

### ShowClix Alternative

```html
<!-- ShowClix Embedded Checkout -->
<script
  type="text/javascript"
  src="https://www.showclix.com/embed/checkout?event=YOUR_EVENT_ID&theme=dark"
></script>
<div id="showclix-checkout"></div>
```

---

## VISUAL TECHNIQUES & ANIMATIONS

### 1. Parallax Scroll (CSS-only, modern approach)

```css
/* Modern CSS Scroll-Driven Parallax */
@supports (animation-timeline: scroll()) {
  .parallax-section {
    position: relative;
    overflow: hidden;
  }

  .parallax-bg {
    position: absolute;
    inset: -20% 0;
    background-image: url('/images/stage-wide.webp');
    background-size: cover;
    background-position: center;
    animation: parallaxShift linear;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
  }

  @keyframes parallaxShift {
    from { transform: translateY(-10%); }
    to   { transform: translateY(10%); }
  }
}

/* Fallback for Safari */
@supports not (animation-timeline: scroll()) {
  .parallax-bg {
    background-attachment: fixed;
  }
}
```

### 2. Reveal-on-Scroll Animations (GSAP ScrollTrigger)

```javascript
// GSAP ScrollTrigger setup for section reveals
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade-in-up for sections
gsap.utils.toArray('.reveal-up').forEach(element => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
    }
  });
});

// Staggered card reveals (tour dates)
gsap.from('.tour-card', {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.tour__list',
    start: 'top 80%',
  }
});

// Text split reveal for headings
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

document.querySelectorAll('.split-reveal').forEach(heading => {
  const split = new SplitText(heading, { type: 'chars, words' });

  gsap.from(split.chars, {
    y: 100,
    opacity: 0,
    rotateX: -90,
    stagger: 0.03,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: heading,
      start: 'top 80%',
    }
  });
});

// Hero parallax on scroll
gsap.to('.hero__content', {
  y: -100,
  opacity: 0,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});
```

### 3. Particle/Smoke Background Effects

```javascript
// Lightweight particle system for hero background
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: this.canvas.height + 10,
      size: Math.random() * 3 + 1,
      speedY: -(Math.random() * 0.5 + 0.2),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      color: `rgba(201, 168, 76, `, // Gold particles
    };
  }

  update() {
    // Add new particles occasionally
    if (Math.random() < 0.1) {
      this.particles.push(this.createParticle());
    }

    // Update existing particles
    this.particles = this.particles.filter(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.opacity -= 0.002;
      return p.opacity > 0 && p.y > -10;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color}${p.opacity})`;
      this.ctx.fill();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  start() {
    this.animate();
  }
}

// Initialize
const canvas = document.querySelector('.hero__particles');
if (canvas) {
  const particles = new ParticleSystem(canvas);
  particles.start();
}
```

### 4. CSS Fog/Mist Effect (No JavaScript)

```css
.fog-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.fog-layer::before,
.fog-layer::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 100%;
  background: url('/images/fog-texture.png') repeat-x;
  opacity: 0.15;
}

.fog-layer::before {
  animation: fogDrift 30s linear infinite;
  top: 0;
}

.fog-layer::after {
  animation: fogDrift 45s linear infinite reverse;
  bottom: 0;
  opacity: 0.08;
}

@keyframes fogDrift {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### 5. Magnetic Cursor Effect (Premium touch)

```javascript
// Magnetic button effect (desktop only)
document.querySelectorAll('.btn--magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 0.5s ease';
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'none';
  });
});
```

---

## MOBILE EXPERIENCE

### Key Principles (from all studied sites)

1. **No mobile app** (Cirque du Soleil's explicit strategy -- invest in mobile web)
2. **Video becomes static image** on mobile (performance, data savings)
3. **Touch targets minimum 44x44px** (Apple HIG standard)
4. **Tour dates stack vertically** with full-width CTAs
5. **Hamburger menu** with full-screen overlay (theatrical feel)

### Mobile Navigation Pattern

```css
/* Full-screen mobile navigation overlay */
.nav-mobile {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--color-void);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.nav-mobile.is-open {
  opacity: 1;
  visibility: visible;
}

.nav-mobile__link {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-heading);
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease, color 0.3s ease;
}

.nav-mobile.is-open .nav-mobile__link {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger each link */
.nav-mobile.is-open .nav-mobile__link:nth-child(1) { transition-delay: 0.1s; }
.nav-mobile.is-open .nav-mobile__link:nth-child(2) { transition-delay: 0.2s; }
.nav-mobile.is-open .nav-mobile__link:nth-child(3) { transition-delay: 0.3s; }
.nav-mobile.is-open .nav-mobile__link:nth-child(4) { transition-delay: 0.4s; }
.nav-mobile.is-open .nav-mobile__link:nth-child(5) { transition-delay: 0.5s; }

.nav-mobile__link:hover,
.nav-mobile__link:focus {
  color: var(--color-accent);
}

/* Hamburger animation */
.hamburger {
  width: 32px;
  height: 24px;
  position: relative;
  cursor: pointer;
  z-index: 1001;
}

.hamburger__line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger__line:nth-child(1) { top: 0; }
.hamburger__line:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger__line:nth-child(3) { bottom: 0; }

.hamburger.is-active .hamburger__line:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}
.hamburger.is-active .hamburger__line:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active .hamburger__line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}
```

### Mobile-Specific Breakpoints

```css
/* Breakpoint system (inspired by Cirque du Soleil) */
/* Mobile: 0-639px */
/* Tablet: 640-1023px */
/* Desktop: 1024-1279px */
/* Wide: 1280px+ */

@media (max-width: 639px) {
  /* Swap video for poster image */
  .hero__video { display: none; }
  .hero__media {
    background-image: url('/images/hero-poster.webp');
    background-size: cover;
    background-position: center;
  }

  /* Full-width buttons */
  .hero__cta-group {
    flex-direction: column;
    width: 100%;
  }

  .btn { width: 100%; justify-content: center; }

  /* Simplified tour cards */
  .tour-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tour-card__date {
    flex-direction: row;
    gap: 0.5rem;
  }
}
```

---

## SEO & STRUCTURED DATA

### Event Schema (JSON-LD) -- Required for Google Rich Results

Each tour date needs its own Event schema. This follows the Google structured data specification exactly:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "The Other Side - Live Magic Experience",
  "description": "An award-winning magic game show blending illusion, audience interaction, and theatrical storytelling. Cross over to The Other Side.",
  "startDate": "2026-03-15T19:30:00-06:00",
  "endDate": "2026-03-15T21:30:00-06:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Paramount Theatre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "713 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    }
  },
  "image": [
    "https://theotherside.show/images/og-16x9.jpg",
    "https://theotherside.show/images/og-4x3.jpg",
    "https://theotherside.show/images/og-1x1.jpg"
  ],
  "performer": {
    "@type": "PerformingGroup",
    "name": "The Other Side"
  },
  "organizer": {
    "@type": "Organization",
    "name": "The Other Side Productions",
    "url": "https://theotherside.show"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://theotherside.show/tickets/austin",
    "lowPrice": 49,
    "highPrice": 199,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-15T10:00:00-06:00"
  }
}
</script>
```

### Additional SEO Requirements

```html
<head>
  <!-- Primary Meta Tags -->
  <title>The Other Side | Award-Winning Magic Game Show - Live Tour 2026</title>
  <meta name="description" content="Experience The Other Side, an award-winning magic game show blending illusion, audience interaction, and theatrical storytelling. Now touring across the U.S. Get tickets." />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="The Other Side | Live Magic Experience" />
  <meta property="og:description" content="Where illusion meets reality. An award-winning magic game show touring the U.S." />
  <meta property="og:image" content="https://theotherside.show/images/og-1200x630.jpg" />
  <meta property="og:url" content="https://theotherside.show" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Other Side | Live Magic Experience" />
  <meta name="twitter:description" content="Where illusion meets reality. Now touring the U.S." />
  <meta name="twitter:image" content="https://theotherside.show/images/twitter-card.jpg" />

  <!-- Canonical -->
  <link rel="canonical" href="https://theotherside.show" />

  <!-- Preload critical assets -->
  <link rel="preload" href="/fonts/display-font.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/images/hero-poster.webp" as="image" />

  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Theme Color (for mobile browser chrome) -->
  <meta name="theme-color" content="#0A0A0C" />
</head>
```

### SEO Content Strategy

1. **Each tour city gets its own page** (`/tour/austin-tx`, `/tour/nashville-tn`) with unique Event schema
2. **Blog/news section** for fresh content signals (behind-the-scenes, city previews)
3. **Image alt text** describing the magic/performance for accessibility and SEO
4. **Internal linking** between tour pages and main landing page
5. **Sitemap.xml** updated automatically when tour dates change

---

## TICKETING PLATFORM RECOMMENDATIONS

### Tier 1: Best for Touring Shows

| Platform | Best For | Embed Support | Pricing | White Label |
|----------|----------|---------------|---------|-------------|
| **Eventbrite** | Versatility, name recognition | Embedded checkout widget (JS) | Free for free events; from 3.7% + $1.79/ticket for paid | Partial |
| **ShowClix** | Theaters, touring shows | Embedded checkout (customizable) | Custom pricing, flat fee options | Yes |
| **DICE** | Anti-scalping, mobile-first | Limited (mobile app focused) | ~5% per ticket | Yes |
| **See Tickets** | Large tours, festivals | External links | Custom pricing | Yes |

### Tier 2: Alternatives Worth Considering

| Platform | Best For | Key Feature |
|----------|----------|-------------|
| **TicketSpice** | Budget-conscious, full control | $0.99/ticket flat fee + processing |
| **Tixr** | Premium experiences, VIP tiers | Premium packaging and upsells |
| **Universe** | Community events | Free tier available |
| **Ticket Tailor** | Simplicity, low fees | No per-ticket fee on some plans |

### Recommendation for The Other Side

**Primary: Eventbrite** -- for its embedded checkout widget, brand recognition, and discoverability (Eventbrite's marketplace drives organic traffic).

**Alternative: ShowClix** -- if white-label branding and theater-specific features (reserved seating, season passes) are needed.

**For VIP/Premium tiers: Tixr** -- if selling meet-and-greet packages, backstage access, or tiered experiences.

---

## KEY SECTIONS EVERY SHOW WEBSITE NEEDS

Based on analysis of all studied websites, here are the essential and recommended sections:

### Essential (Every show site has these)

1. **Hero / Landing** -- Full-viewport, mood-setting, primary CTA
2. **About the Show** -- What it is, narrative hook, emotional pitch
3. **Tour Dates / Schedule** -- Where and when, with ticket links
4. **Tickets / How to Buy** -- Clear purchasing path
5. **Press / Reviews** -- Social proof from publications and audiences
6. **Gallery / Media** -- Photos, video trailer
7. **Footer** -- Social links, legal, newsletter signup

### Highly Recommended

8. **Cast / Performers** -- Builds parasocial connection (Sleep No More, Cirque)
9. **Newsletter Signup** -- Email capture for tour announcements
10. **FAQ** -- Showtime, age restrictions, accessibility, parking
11. **Group Sales** -- Block booking for organizations
12. **Press Kit** -- Downloadable assets for media

### Premium Additions

13. **VIP Experiences** -- Meet & greet, backstage, premium seating
14. **Merchandise** -- Integrated shop (Penn & Teller model)
15. **Behind the Scenes** -- Blog/video content (Cirque model)
16. **Accessibility Info** -- ADA compliance, ASL performances, sensory information
17. **Gift Cards** -- For gifting experiences

---

## CSS CODE PATTERNS

### Button System

```css
/* === BUTTON SYSTEM === */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 50px; /* Pill shape (Derren Brown pattern) */
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Primary -- Accent filled */
.btn--primary {
  background: var(--color-accent);
  color: var(--color-void);
}

.btn--primary:hover {
  background: var(--color-accent-light);
  box-shadow: 0 0 30px var(--color-accent-glow);
  transform: translateY(-2px);
}

/* Ghost -- Outlined */
.btn--ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-smoke);
}

.btn--ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Glow -- For primary CTAs */
.btn--glow {
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.btn--glow:hover {
  box-shadow: 0 0 40px var(--color-accent-glow),
              0 0 80px rgba(201, 168, 76, 0.15);
}

/* Size variants */
.btn--lg {
  padding: 1.125rem 2.5rem;
  font-size: var(--text-body);
}

.btn--sm {
  padding: 0.625rem 1.25rem;
  font-size: var(--text-caption);
}
```

### Section Styling Pattern

```css
/* === SECTION SYSTEM === */
.section {
  padding: 6rem 1.5rem;
  position: relative;
}

@media (min-width: 1024px) {
  .section { padding: 8rem 2rem; }
}

.section__inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-label {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  line-height: 1.1;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  max-width: 600px;
  line-height: 1.6;
}

/* Divider between sections */
.section-divider {
  width: 60px;
  height: 1px;
  background: var(--color-accent);
  margin: 0 auto;
  opacity: 0.5;
}
```

### Press Quotes Section

```css
/* === PRESS QUOTES (Sleep No More / Cirque pattern) === */
.press-quotes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.press-quote {
  padding: 2rem;
  border-left: 2px solid var(--color-accent);
  position: relative;
}

.press-quote__text {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-style: italic;
  color: var(--color-text-primary);
  line-height: 1.4;
  margin-bottom: 1rem;
}

.press-quote__source {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-accent);
}
```

### Navigation (Desktop)

```css
/* === NAVIGATION === */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s ease, padding 0.4s ease;
}

/* Scrolled state -- add background */
.nav.is-scrolled {
  background: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0.75rem 2rem;
  border-bottom: 1px solid rgba(42, 42, 54, 0.5);
}

.nav__logo {
  height: 40px;
  transition: height 0.4s ease;
}

.nav.is-scrolled .nav__logo {
  height: 32px;
}

.nav__links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav__link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.nav__link:hover,
.nav__link.is-active {
  color: var(--color-text-primary);
}

.nav__link:hover::after,
.nav__link.is-active::after {
  width: 100%;
}

.nav__cta {
  /* "Get Tickets" button in nav */
}

/* JavaScript for scroll detection */
/*
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('is-scrolled', window.scrollY > 50);
});
*/
```

---

## JAVASCRIPT ANIMATION PATTERNS

### Page Load Sequence

```javascript
// Orchestrated page load animation
document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.nav', { y: -100, opacity: 0, duration: 0.8 })
    .from('.hero__pre-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
    .from('.hero__title-line', {
      y: 80,
      opacity: 0,
      rotateX: -15,
      stagger: 0.2,
      duration: 1
    }, '-=0.6')
    .from('.hero__tagline', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
    .from('.hero__cta-group > *', {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, '-=0.4')
    .from('.hero__scroll-indicator', { opacity: 0, duration: 1 }, '-=0.2');
});
```

### Smooth Scroll Navigation

```javascript
// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 },
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  });
});
```

### Image Reveal Effect

```javascript
// Theatrical image reveal (curtain wipe)
gsap.utils.toArray('.image-reveal').forEach(container => {
  const img = container.querySelector('img');
  const overlay = container.querySelector('.image-reveal__curtain');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
    }
  });

  tl.from(overlay, {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 0.6,
    ease: 'power2.inOut'
  })
  .to(overlay, {
    scaleX: 0,
    transformOrigin: 'right center',
    duration: 0.6,
    ease: 'power2.inOut'
  }, '+=0.1')
  .from(img, {
    scale: 1.3,
    duration: 1.2,
    ease: 'power2.out'
  }, '-=0.6');
});
```

---

## PERFORMANCE OPTIMIZATION

### Video Background Best Practices

```
1. DURATION:    5-15 seconds, seamless loop
2. RESOLUTION:  1920x1080 max (not 4K -- unnecessary for background)
3. FORMAT:      WebM primary (smaller), MP4 fallback
4. FILE SIZE:   Under 5MB (compress aggressively)
5. ENCODING:    H.264 for MP4, VP9 for WebM
6. AUDIO:       Strip audio track entirely (saves ~30% file size)
7. PRELOAD:     preload="metadata" (not "auto")
8. MOBILE:      Replace with static poster image below 640px
9. CDN:         Serve from edge CDN, not origin server
10. LAZY LOAD:  Use IntersectionObserver for below-fold videos
```

### Image Optimization

```html
<!-- Responsive images with modern formats -->
<picture>
  <source
    srcset="/images/gallery/show-1.avif"
    type="image/avif"
  />
  <source
    srcset="/images/gallery/show-1.webp"
    type="image/webp"
  />
  <img
    src="/images/gallery/show-1.jpg"
    alt="A performer on stage during The Other Side, surrounded by dramatic lighting and smoke"
    loading="lazy"
    decoding="async"
    width="1200"
    height="800"
  />
</picture>
```

### Critical CSS Pattern

```html
<!-- Inline critical CSS for instant first paint -->
<style>
  /* Only the above-the-fold styles */
  :root { /* color variables */ }
  body { background: #0A0A0C; color: #F5F5F7; margin: 0; }
  .hero { height: 100dvh; display: flex; align-items: center; justify-content: center; }
  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; }
  /* ... minimal hero + nav styles */
</style>

<!-- Defer full stylesheet -->
<link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="/css/main.css" /></noscript>
```

### Lighthouse Score Targets

```
Performance:    95+
Accessibility:  100
Best Practices: 100
SEO:            100
```

---

## GITHUB RESOURCES & TEMPLATES

### Most Relevant Open Source Resources

**Event Website Templates:**
- [99points/astrojs-event-template](https://github.com/99points/astrojs-event-template) -- Astro + Tailwind event template with View Transitions (11 stars)
- [alexnm/next-events](https://github.com/alexnm/next-events) -- Next.js + React event website (7 stars)

**Dark Theme Landing Pages:**
- [anas-md/dark-theme-landing-page](https://github.com/anas-md/dark-theme-landing-page) -- Next.js + Framer Motion dark SaaS landing page (5 stars)
- [JohnMwendwa/fylo-dark-theme-landing-page](https://github.com/JohnMwendwa/fylo-dark-theme-landing-page) -- Clean dark theme implementation (63 stars)

**Animation Libraries to Use:**
- [GSAP](https://gsap.com/) -- Industry standard for scroll animations, text reveals, timeline sequences
- [tsParticles](https://particles.js.org/) -- Customizable particle effects for hero backgrounds
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) -- Smooth scroll with parallax
- [Lenis](https://lenis.darkroom.engineering/) -- Lightweight smooth scroll library

**Cirque du Soleil References:**
- [DMDa1994CR/CirqueDuSoleilKurios.github.io](https://github.com/DMDa1994CR/CirqueDuSoleilKurios.github.io) -- Cirque Kurios website recreation
- [IndexDuo/Cirque-du-Soleil-Remake](https://github.com/IndexDuo/Cirque-du-Soleil-Remake) -- Cirque du Soleil website remake

**Note:** The entertainment/show website niche is underrepresented on GitHub. Most premium show websites are custom-built by agencies. The best approach is to use a high-quality dark landing page template as a foundation and customize extensively.

---

## COMPLETE ASTRO PROJECT STRUCTURE

```
the-other-side/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── fonts/
│   │   ├── display-font.woff2
│   │   └── body-font.woff2
│   ├── images/
│   │   ├── hero-poster.webp
│   │   ├── og-1200x630.jpg
│   │   ├── gallery/
│   │   └── cast/
│   └── video/
│       ├── hero-bg.webm
│       └── hero-bg.mp4
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML shell, meta, fonts, analytics
│   ├── components/
│   │   ├── Nav.astro                # Fixed navigation
│   │   ├── Hero.astro               # Full-viewport hero with video
│   │   ├── About.astro              # Show description section
│   │   ├── TourDates.astro          # Tour date cards
│   │   ├── TourCard.astro           # Individual tour date card
│   │   ├── Experience.astro         # What to expect section
│   │   ├── PressQuotes.astro        # Reviews/press section
│   │   ├── Cast.astro               # Performer profiles
│   │   ├── Gallery.astro            # Photo/video gallery
│   │   ├── Newsletter.astro         # Email signup
│   │   ├── Footer.astro             # Site footer
│   │   ├── TicketModal.astro        # Embedded checkout modal
│   │   ├── ParticleCanvas.astro     # Hero particle effects (client:idle)
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── SectionHeader.astro
│   │       └── Badge.astro
│   ├── pages/
│   │   ├── index.astro              # Home page
│   │   ├── tour.astro               # All tour dates
│   │   ├── about.astro              # About the show
│   │   ├── gallery.astro            # Media gallery
│   │   ├── press.astro              # Press kit
│   │   └── contact.astro            # Booking inquiries
│   ├── content/
│   │   ├── tour-dates.json          # Tour date data (or CMS)
│   │   ├── press-quotes.json        # Press quotes
│   │   └── cast.json                # Cast bios
│   ├── styles/
│   │   ├── global.css               # CSS custom properties, resets
│   │   └── animations.css           # Keyframe animations
│   └── scripts/
│       ├── particles.ts             # Particle system for hero
│       ├── scroll-animations.ts     # GSAP ScrollTrigger setup
│       └── nav.ts                   # Nav scroll behavior + mobile menu
```

---

## SUMMARY OF RECOMMENDATIONS

### The Top 5 Design Principles from Research

1. **Dark is non-negotiable.** Every premium show/magic website uses a dark base. It creates drama, focuses attention on imagery, and establishes theatrical mood instantly.

2. **Lead with emotion, not information.** Sleep No More's "Book With Haste," Wicked's "See it live. Remember it forever." -- the best sites sell a feeling first, details second.

3. **Tour dates must be frictionless.** Card-based layout with city, venue, dates, availability badge, and one-click ticket purchase. No hunting, no confusion.

4. **One signature accent color.** Cirque uses gold. Wicked uses green. Penn & Teller uses red. "The Other Side" needs one strong accent that becomes synonymous with the brand.

5. **Performance is part of the experience.** A slow-loading show website kills the magic before it starts. Target sub-2-second load times. Video backgrounds are powerful but must be optimized ruthlessly.

### Prioritized Build Order

```
Phase 1: Foundation
  - Astro project setup with Tailwind
  - Color system + typography
  - Navigation + hero section (with poster fallback)
  - Basic tour dates section
  - Footer

Phase 2: Content & Polish
  - About the show section
  - Press quotes section
  - Cast profiles
  - Gallery with lightbox
  - Newsletter signup

Phase 3: Interactivity
  - GSAP scroll animations
  - Particle effects on hero
  - Ticket modal with Eventbrite embed
  - Mobile navigation overlay

Phase 4: SEO & Launch
  - Event schema for all tour dates
  - Open Graph images
  - Sitemap + robots.txt
  - Analytics (GA4, Facebook Pixel)
  - Performance audit + optimization
```
