# Bini Gold - Luxury Jewelry E-Commerce

## Overview

Bini Gold is a premium e-commerce website showcasing luxury 14K gold jewelry collections. The application presents an elegant, minimalist interface for displaying rings, earrings, necklaces, and bracelets with a focus on high-end visual design and user experience. Built as a static marketing website with client-side routing, it emphasizes product presentation and brand aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with React Router v6. The application uses a declarative routing structure with a catch-all route for 404 handling. All custom routes must be defined above the wildcard "*" route to ensure proper route matching.

**UI Component System**: Built on shadcn/ui, a collection of accessible, customizable components based on Radix UI primitives. Components follow a consistent design system with theme variables defined in CSS custom properties.

**Styling**: 
- Tailwind CSS for utility-first styling
- Custom design tokens defined in `src/index.css` for colors, spacing, and typography
- Two primary font families: Cormorant Garamond (serif) for headings and Montserrat (sans-serif) for body text
- Luxury-focused color palette with gold (#38 60% 45% in HSL), ivory, and beige tones
- CSS variables enable theme customization and dark mode support

**State Management**: 
- React Query (TanStack Query v5) for server state and async data management
- React Context for theme state (light/dark mode)
- No global state management beyond these—components primarily use local state

**Component Structure**:
- Shared layout components (Header, Footer) provide consistent navigation and branding
- Page-level components for each product category (Rings, Earrings, Necklaces, Bracelets, Index)
- Reusable UI components from shadcn/ui located in `src/components/ui/`

### Design Patterns

**Theme System**: Custom ThemeProvider using React Context and localStorage persistence. Supports light and dark modes with a toggle button in the header. Theme preference is stored with the key "binni-gold-theme".

**Responsive Design**: Mobile-first approach using Tailwind's responsive utilities. Custom hook `useIsMobile()` provides programmatic mobile detection at 768px breakpoint.

**Accessibility**: All interactive components use Radix UI primitives ensuring ARIA compliance, keyboard navigation, and screen reader support.

**Code Organization**:
- Path aliases configured via TypeScript (`@/` points to `src/`)
- Strict separation between UI components, pages, hooks, and utilities
- Component composition pattern preferred over prop drilling

### Build Configuration

**Development**: Vite dev server on port 5000, configured for Replit hosting with allowed hosts for `.replit.dev` and `.repl.co` domains.

**Build Modes**: Supports both production and development builds via npm scripts. Development mode includes the Lovable component tagger for visual development.

**TypeScript**: Configured with relaxed type checking (`strict: false`, no implicit any checks disabled) to support rapid iteration. ES2020 target with DOM libraries.

**Linting**: ESLint with TypeScript parser, React hooks plugin, and React Refresh plugin. Unused variables and parameters warnings are disabled.

## External Dependencies

### UI Framework & Components
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-configured component implementations built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Lucide React**: Icon library for UI elements

### State & Data Management
- **TanStack React Query v5**: Server state management and data fetching
- **React Router DOM**: Client-side routing and navigation

### Form Handling
- **React Hook Form**: Form state and validation (via @hookform/resolvers)
- **Zod**: Schema validation (implied by resolver setup)

### UI Enhancements
- **next-themes**: Theme management system
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional className utilities
- **cmdk**: Command menu/palette component
- **embla-carousel-react**: Carousel/slider functionality
- **date-fns**: Date formatting and manipulation
- **react-day-picker**: Date picker component
- **input-otp**: OTP/PIN input component
- **sonner**: Toast notifications
- **vaul**: Drawer component (implied by UI components)

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety and developer experience
- **ESLint**: Code linting with TypeScript support
- **Lovable Tagger**: Component tagging for visual development environment

### Hosting & Platform
- **Replit**: Primary hosting platform, with server configuration optimized for Replit domains
- No backend services—purely client-side application
- No database—product data is hardcoded in component files
- Static assets (images) referenced from `src/assets/` directory

### Future Considerations
The application is currently a static frontend. Potential additions might include:
- E-commerce backend with product database
- Shopping cart and checkout functionality
- User authentication and accounts
- Product management CMS
- Payment processing integration
- Email notifications
