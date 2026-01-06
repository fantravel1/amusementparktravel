# 🎢 AmusementParkTravel.com

> **The world's most comprehensive amusement park travel planning resource** — a mobile-first, blazingly fast, SEO/AEO-optimized static mega-site built for GitHub Pages.

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://pages.github.com/)
[![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green?logo=android)](/)
[![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-orange?logo=google)](/)
[![AEO Ready](https://img.shields.io/badge/AEO-Answer%20Engine%20Ready-purple?logo=openai)](/)

---

## 🎯 Project Vision

AmusementParkTravel.com is built to dominate the **underserved gaps** in amusement park content — from Epic Universe and emerging international parks to regional hidden gems competitors ignore. We're not competing with Disney Food Blog for Magic Kingdom content; we're capturing **quick-win opportunities** where quality content simply doesn't exist.

**Core Differentiators:**
- 🌍 **Global Focus** — Comprehensive coverage from Beto Carrero World to Six Flags Qiddiya
- 🛠️ **Interactive Tools** — Budget calculators, crowd predictors, trip planners competitors can't replicate
- 📱 **Mobile-First** — 70%+ of travel research happens on phones; we're designed for thumbs
- ⚡ **Blazing Fast** — Sub-1-second loads via static generation + CDN
- 🤖 **AI-Ready** — Structured for featured snippets, voice search, and AI answer engines

---

## 📐 Technical Architecture

### Static Site Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Pages (CDN)                       │
├─────────────────────────────────────────────────────────────┤
│                    11ty (Eleventy) SSG                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Markdown   │  │   Nunjucks  │  │  JavaScript/JSON    │  │
│  │   Content   │  │  Templates  │  │   Data Files        │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Tailwind   │  │  Alpine.js  │  │  Chart.js/D3        │  │
│  │     CSS     │  │ Interactivity│ │  Visualizations     │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    Build Pipeline                           │
│  GitHub Actions → Build → Optimize → Deploy                 │
└─────────────────────────────────────────────────────────────┘
```

### Why Eleventy (11ty)?

| Feature | Benefit |
|---------|---------|
| Zero client-side JS by default | Maximum performance score |
| Flexible templating | Nunjucks, Markdown, JS all work |
| Data cascade | Perfect for park databases |
| Fast builds | <5 seconds for 1000+ pages |
| GitHub Pages native | No custom CI complexity |

### Directory Structure

```
amusementparktravel.com/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── src/
│   ├── _data/                      # Global data files
│   │   ├── parks.json              # Master park database
│   │   ├── site.json               # Site configuration
│   │   ├── navigation.json         # Menu structure
│   │   └── tools/                   # Interactive tool configs
│   ├── _includes/                  # Reusable components
│   │   ├── layouts/
│   │   │   ├── base.njk            # HTML shell
│   │   │   ├── park.njk            # Individual park pages
│   │   │   ├── guide.njk           # Long-form guides
│   │   │   ├── tool.njk            # Interactive tools
│   │   │   └── comparison.njk      # Vs/comparison pages
│   │   ├── components/
│   │   │   ├── header.njk
│   │   │   ├── footer.njk
│   │   │   ├── park-card.njk
│   │   │   ├── breadcrumbs.njk
│   │   │   ├── toc.njk             # Table of contents
│   │   │   ├── faq-schema.njk      # FAQ structured data
│   │   │   ├── rating-stars.njk
│   │   │   └── share-buttons.njk
│   │   └── seo/
│   │       ├── meta.njk            # Meta tags
│   │       ├── schema.njk          # JSON-LD structured data
│   │       └── og-image.njk        # Open Graph images
│   ├── assets/
│   │   ├── css/
│   │   │   ├── tailwind.css        # Tailwind input
│   │   │   └── components/         # Custom component styles
│   │   ├── js/
│   │   │   ├── tools/              # Interactive tool logic
│   │   │   ├── search.js           # Client-side search
│   │   │   └── analytics.js        # Privacy-respecting analytics
│   │   ├── images/
│   │   │   ├── parks/              # Park photos (WebP)
│   │   │   ├── icons/              # UI icons (SVG)
│   │   │   └── og/                 # Social share images
│   │   └── fonts/                  # Self-hosted fonts
│   ├── content/
│   │   ├── parks/                  # Individual park guides
│   │   │   ├── north-america/
│   │   │   ├── europe/
│   │   │   ├── asia/
│   │   │   ├── south-america/
│   │   │   ├── oceania/
│   │   │   └── middle-east/
│   │   ├── guides/                 # Long-form planning guides
│   │   │   ├── first-timers/
│   │   │   ├── budget/
│   │   │   ├── families/
│   │   │   └── seasonal/
│   │   ├── comparisons/            # Vs pages (high SEO value)
│   │   ├── news/                   # Park announcements
│   │   └── tools/                  # Interactive tool pages
│   ├── pages/
│   │   ├── index.njk               # Homepage
│   │   ├── about.njk
│   │   ├── parks.njk               # Park directory
│   │   ├── tools.njk               # Tools hub
│   │   └── search.njk              # Search results
│   └── feeds/
│       ├── rss.njk                 # RSS feed
│       └── sitemap.njk             # XML sitemap
├── scripts/
│   ├── build-search-index.js       # Generate search JSON
│   ├── generate-og-images.js       # Auto-generate OG images
│   └── optimize-images.js          # WebP conversion
├── .eleventy.js                    # 11ty configuration
├── tailwind.config.js              # Tailwind configuration
├── package.json
└── README.md
```

---

## 🎨 Design System

### Mobile-First Philosophy

Every component starts at 320px and scales up. **No desktop-first exceptions.**

```css
/* ✅ CORRECT: Mobile-first */
.park-card {
  padding: 1rem;           /* Mobile default */
}
@media (min-width: 768px) {
  .park-card {
    padding: 2rem;         /* Tablet+ enhancement */
  }
}

/* ❌ WRONG: Desktop-first */
.park-card {
  padding: 2rem;
  @media (max-width: 767px) {
    padding: 1rem;
  }
}
```

### Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| `xs` | 0px | Small phones |
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Color Palette: Theme Park Joy

```css
:root {
  /* Primary: Exciting, energetic */
  --color-primary-50: #fef3f2;
  --color-primary-100: #fee4e2;
  --color-primary-500: #ef4444;   /* Roller coaster red */
  --color-primary-600: #dc2626;
  --color-primary-700: #b91c1c;
  
  /* Secondary: Fun, approachable */
  --color-secondary-50: #fefce8;
  --color-secondary-100: #fef9c3;
  --color-secondary-500: #eab308;  /* Sunshine yellow */
  --color-secondary-600: #ca8a04;
  
  /* Accent: Magical, immersive */
  --color-accent-50: #eff6ff;
  --color-accent-100: #dbeafe;
  --color-accent-500: #3b82f6;    /* Sky blue */
  --color-accent-600: #2563eb;
  
  /* Success: Go! */
  --color-success-500: #22c55e;   /* Green light */
  
  /* Warning: Attention */
  --color-warning-500: #f97316;   /* Orange alert */
  
  /* Neutrals */
  --color-gray-50: #fafafa;
  --color-gray-100: #f4f4f5;
  --color-gray-200: #e4e4e7;
  --color-gray-500: #71717a;
  --color-gray-700: #3f3f46;
  --color-gray-900: #18181b;
  
  /* Semantic */
  --color-background: var(--color-gray-50);
  --color-surface: #ffffff;
  --color-text: var(--color-gray-900);
  --color-text-muted: var(--color-gray-500);
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-display: 'Fredoka', system-ui, sans-serif;   /* Fun headings */
  --font-body: 'Inter', system-ui, sans-serif;        /* Clean body */
  --font-mono: 'JetBrains Mono', monospace;           /* Code/data */
  
  /* Type Scale (fluid) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
  --text-5xl: clamp(3rem, 2rem + 5vw, 5rem);
}
```

### Fun & Engaging Elements

```css
/* Playful shadows */
.shadow-fun {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(239, 68, 68, 0.1);  /* Subtle red glow */
}

/* Bounce animation for CTAs */
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.cta-bounce:hover {
  animation: bounce-subtle 0.5s ease-in-out;
}

/* Gradient text for headings */
.text-gradient-fun {
  background: linear-gradient(135deg, #ef4444 0%, #eab308 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Ticket stub styling */
.ticket-stub {
  position: relative;
  background: var(--color-surface);
  border-radius: 0.5rem;
}
.ticket-stub::before,
.ticket-stub::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--color-background);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.ticket-stub::before { left: -10px; }
.ticket-stub::after { right: -10px; }
```

### Component Library

#### Park Card

```html
<article class="park-card group">
  <div class="park-card__image">
    <img src="/images/parks/epic-universe.webp" 
         alt="Universal Epic Universe entrance"
         loading="lazy"
         width="400" height="300">
    <span class="park-card__badge">NEW</span>
  </div>
  <div class="park-card__content">
    <h3 class="park-card__title">
      <a href="/parks/north-america/universal-epic-universe/">
        Universal Epic Universe
      </a>
    </h3>
    <p class="park-card__location">
      <svg><!-- location icon --></svg>
      Orlando, Florida
    </p>
    <div class="park-card__meta">
      <span class="park-card__rating">
        <svg><!-- star --></svg> 4.9
      </span>
      <span class="park-card__type">Theme Park</span>
    </div>
  </div>
</article>
```

#### Quick Fact Box

```html
<aside class="quick-facts" aria-label="Quick Facts">
  <h4 class="quick-facts__title">
    <svg><!-- lightning bolt --></svg>
    Quick Facts
  </h4>
  <dl class="quick-facts__list">
    <div class="quick-facts__item">
      <dt>Opened</dt>
      <dd>May 22, 2025</dd>
    </div>
    <div class="quick-facts__item">
      <dt>Ticket Price</dt>
      <dd>From $179</dd>
    </div>
    <div class="quick-facts__item">
      <dt>Best For</dt>
      <dd>Potter fans, thrill seekers</dd>
    </div>
  </dl>
</aside>
```

#### FAQ Accordion (AEO-Ready)

```html
<section class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <h2 class="faq__title">Frequently Asked Questions</h2>
  
  <div class="faq__item" itemscope itemprop="mainEntity" 
       itemtype="https://schema.org/Question">
    <button class="faq__question" aria-expanded="false"
            itemprop="name">
      Is Express Pass worth it at Epic Universe?
      <svg class="faq__icon"><!-- chevron --></svg>
    </button>
    <div class="faq__answer" itemscope itemprop="acceptedAnswer"
         itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>Express Pass provides significant value during peak seasons 
        (spring break, summer, holidays) when standby waits exceed 60 minutes. 
        For off-peak visits, you can often experience all major attractions 
        without it...</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🔍 SEO & AEO Optimization

### On-Page SEO Checklist

Every page **must** include:

- [ ] Unique, keyword-optimized `<title>` (50-60 chars)
- [ ] Compelling `<meta name="description">` (150-160 chars)
- [ ] Semantic heading hierarchy (single H1, logical H2-H6)
- [ ] Optimized images with descriptive `alt` text
- [ ] Internal links to related content
- [ ] External links to authoritative sources
- [ ] Mobile-friendly layout
- [ ] Fast load time (<2s LCP)

### Structured Data Requirements

#### Every Page: Organization + WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Amusement Park Travel",
  "url": "https://amusementparktravel.com",
  "logo": "https://amusementparktravel.com/images/logo.png",
  "sameAs": [
    "https://twitter.com/parktravel",
    "https://facebook.com/amusementparktravel"
  ]
}
```

#### Park Pages: TouristAttraction + Review

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Universal Epic Universe",
  "description": "Universal's newest theme park featuring...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4728,
    "longitude": -81.4678
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  }
}
```

#### Guide Pages: HowTo

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Plan Your First Disney World Trip",
  "description": "Complete guide to planning...",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "3000-8000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set Your Budget",
      "text": "Determine how much you can spend..."
    }
  ]
}
```

#### FAQ Pages: FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Express Pass worth the money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Express Pass provides significant ROI during..."
      }
    }
  ]
}
```

#### Tool Pages: SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Theme Park Budget Calculator",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0"
  }
}
```

### AEO (Answer Engine Optimization)

Target featured snippets and AI answers with:

#### 1. Direct Answer Paragraphs

```html
<!-- First paragraph directly answers the query -->
<p class="lead">
  <strong>Universal Epic Universe opened May 22, 2025</strong>, 
  making it the newest major theme park in Orlando. The park features 
  five immersive worlds including the Wizarding World's Ministry of Magic, 
  Super Nintendo World, and the all-new Dark Universe.
</p>
```

#### 2. Definition Boxes

```html
<div class="definition-box" itemscope itemtype="https://schema.org/DefinedTerm">
  <span itemprop="name"><strong>Lightning Lane Multi Pass</strong></span>: 
  <span itemprop="description">Disney's paid skip-the-line service that 
  allows guests to book up to 3 advance reservations for select attractions, 
  with additional reservations available once initial selections are used.</span>
</div>
```

#### 3. Comparison Tables

```html
<table class="comparison-table">
  <caption>Epic Universe vs Islands of Adventure: Key Differences</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Epic Universe</th>
      <th scope="col">Islands of Adventure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opened</th>
      <td>May 2025</td>
      <td>May 1999</td>
    </tr>
    <!-- More rows -->
  </tbody>
</table>
```

#### 4. Numbered Lists for Processes

```html
<ol class="process-list">
  <li><strong>Book your park tickets</strong> — Purchase at least 30 days 
      in advance for best pricing</li>
  <li><strong>Reserve your hotel</strong> — On-site hotels include 
      early park admission</li>
  <li><strong>Download the app</strong> — Essential for virtual queues 
      and mobile food ordering</li>
</ol>
```

### Technical SEO

#### Site Speed Requirements

| Metric | Target | Maximum |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | <1.5s | <2.5s |
| FID (First Input Delay) | <50ms | <100ms |
| CLS (Cumulative Layout Shift) | <0.05 | <0.1 |
| Time to First Byte | <200ms | <600ms |
| Total Page Weight | <500KB | <1MB |

#### Image Optimization

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');

// All images converted to WebP with AVIF fallback
// Responsive sizes generated automatically
const sizes = [320, 640, 768, 1024, 1280, 1536];

// Lazy loading for below-fold images
// Eager loading for hero/above-fold only
```

#### Canonical URLs

```html
<link rel="canonical" href="https://amusementparktravel.com/parks/epic-universe/">
```

#### Sitemap Generation

```xml
<!-- Auto-generated, updated on each build -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://amusementparktravel.com/parks/epic-universe/</loc>
    <lastmod>2025-01-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 🛠️ Interactive Tools

### Tool 1: Combined Orlando Budget Calculator

**First-to-market opportunity** — No existing tool calculates Disney + Universal + SeaWorld combined trip costs.

```
Features:
├── Park selection (multi-select)
├── Number of days per park
├── Ticket type (base, park hopper, etc.)
├── Hotel tier (value, moderate, deluxe, off-site)
├── Dining plan vs. out-of-pocket
├── Transportation (rental car, rideshare, shuttle)
├── Express Pass / Lightning Lane inclusion
├── Seasonal pricing adjustments
└── Exportable trip summary PDF
```

### Tool 2: Lightning Lane / Express Pass ROI Calculator

**Help users make data-driven decisions** on skip-the-line purchases.

```
Inputs:
├── Park and date
├── Party size
├── Must-do attractions list
├── Rope drop capability (yes/no)
├── Crowd level prediction
└── User's time value ($$/hour)

Outputs:
├── Estimated wait time without Express
├── Estimated wait time with Express
├── Time saved calculation
├── ROI analysis (cost per hour saved)
└── Recommendation (worth it / not worth it)
```

### Tool 3: Best Park Day Optimizer

**Input dates, get optimized park assignments.**

```
Logic:
├── Crowd calendar integration
├── Extra Magic Hours schedules
├── Special events (parties, after-hours)
├── User's priority attractions
├── Weather forecasts
└── Output: Day-by-day optimized itinerary
```

### Tool 4: Height Requirement Checker

**Interactive family planning tool.**

```
Features:
├── Enter each child's height
├── Select parks to visit
├── Visual ride eligibility matrix
├── "Rider Switch" opportunities highlighted
├── Sortable by land/area
└── Printable checklist
```

### Tool Architecture

```javascript
// All tools are client-side only (no server required)
// State management via Alpine.js
// Calculations in vanilla JavaScript
// Results exportable as PDF/image for sharing

// Example: Budget Calculator structure
const BudgetCalculator = {
  // State
  parks: [],
  dates: { start: null, end: null },
  party: { adults: 2, children: 0 },
  accommodations: 'moderate',
  dining: 'quick-service',
  
  // Computed
  get totalCost() {
    return this.ticketCost + this.hotelCost + this.foodCost + this.extras;
  },
  
  // Methods
  calculateTickets() { /* ... */ },
  calculateHotel() { /* ... */ },
  exportPDF() { /* ... */ }
};
```

---

## 📝 Content Templates

### Park Page Template

```markdown
---
layout: park
title: "Universal Epic Universe Guide 2025: Tips, Tricks & Planning"
description: "Complete guide to Universal Epic Universe with tips for 
every world, best rides, dining, and money-saving strategies."
park:
  name: Universal Epic Universe
  location: Orlando, Florida
  region: north-america
  opened: 2025-05-22
  type: theme-park
  priceRange: $$$
  rating: 4.9
  coordinates:
    lat: 28.4728
    lng: -81.4678
seo:
  canonical: /parks/north-america/universal-epic-universe/
  ogImage: /images/og/epic-universe.jpg
schema:
  - TouristAttraction
  - FAQPage
lastUpdated: 2025-01-05
---

# Universal Epic Universe: The Complete 2025 Guide

<QuickFacts :park="park" />

**Universal Epic Universe opened May 22, 2025** as the most ambitious 
theme park project in Orlando history...

## Table of Contents

<TableOfContents />

## What's at Epic Universe?

### The Five Worlds

#### 1. Celestial Park (Hub)
...

#### 2. The Wizarding World: Ministry of Magic
...

## Best Rides Ranked

<RideRankings park="epic-universe" />

## Tips for First-Time Visitors

<TipsList category="first-timers" />

## Is Express Pass Worth It?

<ExpressPassAnalysis park="epic-universe" />

## Where to Eat

<DiningGuide park="epic-universe" />

## Hotels at Epic Universe

<HotelComparison park="epic-universe" />

## Frequently Asked Questions

<FAQ>
  <FAQItem question="When does Epic Universe open?">
    Epic Universe is currently open daily from 9 AM to 9 PM, with extended 
    hours during peak seasons...
  </FAQItem>
  <FAQItem question="Is Express Pass worth it at Epic Universe?">
    ...
  </FAQItem>
</FAQ>

## Plan Your Visit

<CTABox 
  title="Ready to Experience Epic Universe?"
  description="Use our free trip planning tools..."
  link="/tools/orlando-budget-calculator/"
/>
```

### Comparison Page Template

```markdown
---
layout: comparison
title: "Epic Universe vs Islands of Adventure: Which Park is Better?"
description: "Head-to-head comparison of Universal's newest park vs the 
classic favorite. We break down rides, theming, value, and more."
comparison:
  itemA: 
    name: Epic Universe
    slug: epic-universe
  itemB:
    name: Islands of Adventure
    slug: islands-of-adventure
  category: universal-parks
seo:
  canonical: /comparisons/epic-universe-vs-islands-of-adventure/
schema:
  - FAQPage
---

# Epic Universe vs Islands of Adventure: The Ultimate Comparison

**Choosing between Universal's parks?** This guide breaks down every 
factor to help you decide...

<ComparisonTable :itemA="itemA" :itemB="itemB" />

## Theming & Atmosphere

### Epic Universe
...

### Islands of Adventure
...

## Best Rides

<RideComparison :parks="[itemA, itemB]" />

## Value for Money

...

## The Verdict

<VerdictBox>
  **Choose Epic Universe if:** You prioritize cutting-edge attractions...
  
  **Choose Islands of Adventure if:** You want the original Wizarding World...
</VerdictBox>
```

---

## 🚀 Build & Deploy

### Local Development

```bash
# Clone repository
git clone https://github.com/your-org/amusementparktravel.com.git
cd amusementparktravel.com

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview
```

### GitHub Actions Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build site
        run: npm run build
        env:
          ELEVENTY_ENV: production
          
      - name: Optimize images
        run: npm run optimize:images
        
      - name: Generate search index
        run: npm run build:search
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '_site'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Custom Domain Setup

1. Add `CNAME` file to repository root:
   ```
   amusementparktravel.com
   ```

2. Configure DNS:
   ```
   Type  Name              Value
   A     @                 185.199.108.153
   A     @                 185.199.109.153
   A     @                 185.199.110.153
   A     @                 185.199.111.153
   CNAME www               your-org.github.io
   ```

3. Enable HTTPS in repository settings

---

## 📊 Content Roadmap

### Phase 1: Foundation (Months 1-2)

**Priority: Quick-win content that ranks fast**

| Content | Competition | Priority |
|---------|-------------|----------|
| Epic Universe Complete Guide | Low | 🔴 Critical |
| Universal Kids Resort Texas Guide | Very Low | 🔴 Critical |
| Six Flags Qiddiya Guide | None | 🔴 Critical |
| Theme Park Rain Policies Master Guide | Low | 🟡 High |
| Best Regional Theme Parks in America | Low | 🟡 High |
| Orlando Budget Calculator Tool | None | 🔴 Critical |

### Phase 2: Expansion (Months 3-4)

**Priority: International gaps + tools**

| Content | Competition | Priority |
|---------|-------------|----------|
| Beto Carrero World Complete Guide | None (English) | 🔴 Critical |
| Phantasialand Germany Guide | Low | 🟡 High |
| Fantawild Parks China Guide | None | 🟡 High |
| Lightning Lane ROI Calculator | Very Low | 🔴 Critical |
| Best Park Day Optimizer | Low | 🟡 High |

### Phase 3: Authority Building (Months 5-6)

**Priority: Deep guides + regional coverage**

| Content | Competition | Priority |
|---------|-------------|----------|
| Silver Dollar City Complete Guide | Low | 🟡 High |
| Holiday World & Splashin' Safari Guide | Low | 🟡 High |
| Dollywood Complete Guide | Medium | 🟢 Normal |
| Theme Parks for Adults Without Kids | Low | 🟡 High |
| Multi-Park Vacation Planners | Low | 🟡 High |

### Ongoing Content Pillars

1. **Park News & Updates** — Weekly coverage of openings, closures, events
2. **Seasonal Guides** — Halloween, Christmas, spring break (publish 2-3 months ahead)
3. **Comparison Content** — High-value "vs" pages for SEO
4. **Tool Enhancements** — Continuous improvement based on user feedback

---

## 📏 Performance Budgets

### Page Weight Limits

| Resource | Budget | Notes |
|----------|--------|-------|
| HTML | <50KB | Compressed |
| CSS | <30KB | Tailwind purged |
| JavaScript | <100KB | Tools only |
| Fonts | <100KB | 2 families max |
| Images (above fold) | <200KB | WebP + AVIF |
| Total page | <500KB | Without lazy images |

### Core Web Vitals Targets

```javascript
// Lighthouse CI configuration
module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.05 }],
        'total-blocking-time': ['error', { maxNumericValue: 150 }],
      },
    },
  },
};
```

---

## 🤝 Contributing

### Content Guidelines

1. **Mobile-first writing** — Short paragraphs, scannable headers
2. **Answer-first structure** — Lead with the answer, then explain
3. **Original research** — No regurgitated content from competitors
4. **Accuracy over speed** — Verify all facts, dates, prices
5. **Regular updates** — Content must stay current

### Code Standards

1. **Semantic HTML** — Proper heading hierarchy, ARIA labels
2. **Accessibility** — WCAG 2.1 AA minimum
3. **Performance** — Every feature must pass Lighthouse
4. **Progressive enhancement** — Works without JavaScript

### Pull Request Process

1. Create feature branch from `main`
2. Make changes following style guides
3. Test locally (`npm run build && npm run preview`)
4. Run Lighthouse (`npm run lighthouse`)
5. Submit PR with description of changes
6. Address review feedback
7. Merge after approval

---

## 📄 License

Content © 2025 AmusementParkTravel.com. All rights reserved.

Code is MIT licensed.

---

## 🎢 Let's Build Something Amazing!

This isn't just another theme park blog — it's a **comprehensive travel planning platform** designed to help millions of families create magical memories.

**Ready to contribute?** Check the [Issues](https://github.com/your-org/amusementparktravel.com/issues) for good first tasks.

**Questions?** Open a [Discussion](https://github.com/your-org/amusementparktravel.com/discussions).

---

*Built with ❤️ for theme park fans everywhere.*
