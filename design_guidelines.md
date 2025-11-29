# Design Guidelines for Secure AI Solutions Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from privacy-focused tech companies like Apple's privacy pages, Cloudflare, and modern SaaS landing pages (Stripe, Linear) - emphasizing trust, clarity, and professional restraint.

## Core Design Principles
- **Trust-First Design**: Clean, uncluttered layouts that communicate security and professionalism
- **Canadian Identity**: Subtle incorporation of local business credibility
- **Conversion-Focused**: Every section drives toward booking consultation

## Typography System
**Font Family**: Inter (via Google Fonts CDN)

**Hierarchy**:
- H1 (Hero): 3.5rem (desktop) / 2.25rem (mobile), font-weight: 700
- H2 (Section Headers): 2.5rem (desktop) / 1.875rem (mobile), font-weight: 700
- H3 (Card Headers): 1.5rem, font-weight: 600
- Body: 1.125rem, font-weight: 400, line-height: 1.75
- Small/Caption: 0.875rem, font-weight: 500

## Layout System
**Spacing Units**: Use Tailwind spacing scale focusing on 4, 6, 8, 12, 16, 20, 24, 32 units
- Section padding: py-20 (desktop) / py-12 (mobile)
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections

## Color Palette
- **Primary Blue**: #2A6EF7 (CTA buttons, accents, icons)
- **Background**: White (#FFFFFF)
- **Text Primary**: #1F2937 (gray-800)
- **Text Secondary**: #6B7280 (gray-500)
- **Border/Dividers**: #E5E7EB (gray-200)
- **Success/Trust**: Subtle green accents for security badges

## Component Library

### Hero Section (100vh)
- Full-viewport height with centered content
- Large hero image: Professional office setting with computer/server (subtle AI visualization overlay)
- Headline + subheadline stacked centrally
- Dual CTA buttons: Primary (solid blue) + Secondary (outline)
- Buttons with backdrop-blur-md background over image
- Subtle scroll indicator at bottom

### Pain Points Section
- 3-column grid (1-column mobile)
- Icon cards with light gray background (bg-gray-50)
- Icons: 3rem size in primary blue
- Equal height cards with padding: p-8
- Hover: subtle shadow lift (shadow-lg)

### Solution Section
- Two-column layout (text left, visual right on desktop)
- Right side: Illustration or diagram of local vs cloud setup
- Background: subtle gray section (bg-gray-50)
- CTA button aligned left

### Features Grid
- 6-item grid: 3 columns desktop / 2 columns tablet / 1 column mobile
- Minimal cards with icon, title, brief description
- Icons: Simple line icons (Heroicons) at 2.5rem, primary blue
- Consistent spacing: gap-8

### Use Cases Section
- 4 cards in grid (2x2 desktop, 1 column mobile)
- Each card: Icon, profession title, 2-3 bullet points
- White cards on gray background with border
- Hover: border color changes to primary blue

### Pricing Section
- 2-column card layout (stack on mobile)
- Cards: White with subtle border, rounded-lg
- Featured plan (Professional): Primary blue border, slight elevation
- Price: Large (3rem), bold
- Feature list: Checkmark icons (green)
- CTA button at card bottom

### Final CTA Section
- Centered content, full-width background in primary blue
- White text on blue background
- Large headline + prominent button (white background, blue text)
- py-24 vertical padding

### Footer
- Dark background (bg-gray-900)
- White text, centered
- Business name + tagline
- Minimal links if needed
- py-12 padding

## Icons
**Library**: Heroicons (via CDN)
**Key Icons**:
- Lock (privacy/security)
- Shield (compliance)
- Cpu/Chip (AI technology)
- DocumentText (file processing)
- CloudOff (offline capability)
- CheckCircle (features/benefits)

## Images

### Hero Image
- **Type**: Professional office/tech environment
- **Description**: Modern workspace with desktop/server hardware, subtle AI/tech visualization, conveys professionalism and local setup
- **Placement**: Full-width background with overlay gradient (dark bottom for text legibility)
- **Treatment**: Slight blur or darkening overlay for text contrast

### Solution Section Visual
- **Description**: Simple diagram comparing cloud (crossed out) vs local AI setup
- **Style**: Clean illustration, icons-based, primary blue accent
- **Placement**: Right column, desktop view

### Use Case Cards
- **Description**: Small profession-specific icons (stethoscope, gavel, calculator, briefcase)
- **Style**: Line icons matching Heroicons aesthetic
- **Treatment**: Primary blue color

## Navigation
- Sticky header (optional): Logo left, nav links right
- Anchor links: Home, Features, Pricing, Contact
- Mobile: Hamburger menu
- Background: White with subtle shadow on scroll

## Responsive Behavior
- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Key transitions**:
  - Grids collapse to single column below md
  - Hero maintains aspect ratio, text scales proportionally
  - Padding reduces on mobile (py-20 → py-12)
  - Font sizes scale down 30-40% on mobile

## Animation/Interaction (Minimal)
- Smooth scroll to anchor links
- Button hover: slight scale (1.02) + shadow increase
- Card hover: shadow elevation only
- Page load: Subtle fade-in for hero content (0.5s)
- **No** complex scroll animations or parallax effects

## Accessibility
- WCAG AA contrast ratios
- Focus states: 2px blue outline for keyboard navigation
- Alt text for all images
- Semantic HTML structure
- ARIA labels where appropriate