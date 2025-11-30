# Secure AI Solutions Landing Page

## Overview

This is a marketing landing page for Secure AI Solutions, a Canadian business offering privacy-focused, local AI solutions for small businesses in healthcare, legal, accounting, and consulting sectors. The website is designed to drive consultation bookings for businesses interested in deploying secure, offline Large Language Models (LLMs) that keep sensitive data completely private and compliant with Canadian regulations.

The application is a single-page React application with a modern, clean design emphasizing trust, privacy, and Canadian business credibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application is primarily a single-page design with smooth scrolling navigation between sections.

**UI Component System**: 
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library (New York style variant) for pre-built, customizable components
- Tailwind CSS for utility-first styling with custom design tokens

**Design System**:
- Primary color: `#2A6EF7` (blue) for CTAs and accents
- Typography: Inter font family via Google Fonts
- Responsive breakpoint: 768px for mobile/desktop distinction
- Custom CSS variables for theming (light mode focused)
- Component variants using `class-variance-authority`

**State Management**: 
- React Query (TanStack Query) for server state and caching
- Local React state (useState) for UI interactions like dialog visibility and form inputs

**Landing Page Structure**:
1. Fixed header with navigation and CTA
2. Hero section (full viewport height) with background image
3. Pain points section (3-column grid)
4. Solution section with comparison
5. Features section (6 features in grid)
6. Use cases section (4 industry-specific cards)
7. Pricing section (3 pricing tiers)
8. CTA section
9. Footer with links

**Form Handling**: React Hook Form with Zod validation via `@hookform/resolvers` for the consultation booking dialog.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Build Process**: Custom esbuild-based bundler that:
- Bundles server code into a single CommonJS file
- Selectively bundles frequently-used dependencies to reduce cold start times
- Builds client using Vite
- Outputs to `dist/` directory

**Development Mode**: Vite dev server runs in middleware mode, integrated with Express for HMR support.

**Static File Serving**: Production mode serves pre-built client files from `dist/public`.

**API Structure**: Routes prefixed with `/api` (registered in `server/routes.ts`). Currently minimal backend - the landing page is primarily frontend-focused.

**Storage Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for user data. Designed to be swappable with database-backed implementations.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless` driver).

**Schema**: Minimal user schema defined in `shared/schema.ts`:
- Users table with id, username, password
- Zod schemas for validation using `drizzle-zod`

**Database Provider**: Configured for Neon serverless PostgreSQL (based on connection string format).

**Migrations**: Schema changes tracked in `./migrations` directory, pushed using `drizzle-kit push`.

**Note**: The current landing page doesn't actively use the database - the schema appears to be template/boilerplate for future authentication or user management features.

### External Dependencies

**UI Component Libraries**:
- `@radix-ui/*`: 20+ primitive component packages for accessible UI building blocks
- `lucide-react`: Icon library for consistent iconography
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority` and `clsx`: For dynamic className composition

**Forms & Validation**:
- `react-hook-form`: Form state management
- `zod`: Schema validation
- `@hookform/resolvers`: React Hook Form + Zod integration

**Data Fetching**:
- `@tanstack/react-query`: Server state management and caching

**Database & ORM**:
- `drizzle-orm`: TypeScript ORM
- `drizzle-zod`: Zod schema generation from Drizzle schemas
- `@neondatabase/serverless`: PostgreSQL driver for Neon

**Development Tools**:
- `@replit/vite-plugin-*`: Replit-specific Vite plugins for development experience
- `tsx`: TypeScript execution for development and build scripts

**Styling**:
- `tailwind-merge`: Merging Tailwind classes safely
- `tailwindcss-animate`: Animation utilities for Tailwind
- `autoprefixer` and `postcss`: CSS processing

**Assets**:
- Hero image stored in `attached_assets/` directory
- Google Fonts CDN for Inter font family

**Build & Deployment**:
- `esbuild`: Bundling server code
- `vite`: Building client application
- No external hosting dependencies specified - designed for standard Node.js hosting