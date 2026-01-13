# 12Keys Agency Website

## Project Overview
**12Keys Agency** is a luxury concierge service based in Kigali, Rwanda, specializing in private events, corporate functions, and bespoke experiences.

**Tagline**: "Exceptional service and bespoke experiences in Rwanda"

## Contact Information
- **Address**: KK 250 Ave, Kigali Rwanda
- **Phone**: +250 788863209 / +250 795422953
- **Email**: info@12keys.agency
- **Hours**: Mon - Fri / 8am to 7pm
- **Telegram Bot**: t.me/Twelvekeys_bot

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend/Auth**: Supabase (env vars: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Chat Widget**: Chatwoot (self-hosted at chatwoot.12keys.agency)
- **Webhook**: n8n workflow at 12keys-agency-n8n.go13ce.easypanel.host

## Project Structure
```
src/
├── api/
│   └── contact-webhook.ts     # n8n webhook integration
├── components/
│   ├── forms/
│   │   └── ServiceContactForm.tsx  # Contact form (saves to Supabase + sends webhook)
│   ├── landing/
│   │   ├── Header.tsx         # Fixed nav with Call/Email links
│   │   ├── Hero.tsx           # Full-screen hero with CTA buttons
│   │   ├── Services.tsx       # 6 service cards with modal inquiry forms
│   │   ├── About.tsx          # About section with Quality/Availability/Expertise features
│   │   ├── Contact.tsx        # Contact info + form
│   │   └── Footer.tsx         # Footer with social links
│   └── ui/
│       ├── Modal.tsx          # Reusable modal component
│       └── ServiceCard.tsx    # Service card with hover effects
├── context/
│   └── AuthContext.tsx        # Supabase auth context
├── lib/
│   └── supabaseClient.ts      # Supabase client init
├── pages/
│   ├── LandingPage.tsx        # Main landing page
│   ├── Login.tsx              # Customer login
│   ├── Signup.tsx             # Customer signup
│   ├── Dashboard.tsx          # Customer dashboard
│   ├── StaffLogin.tsx         # Staff login
│   └── StaffDashboard.tsx     # Staff dashboard
└── main.tsx
```

## Routes
- `/` - Landing page
- `/login` - Customer login
- `/signup` - Customer signup
- `/dashboard` - Customer dashboard
- `/staff/login` - Staff login
- `/staff/dashboard` - Staff dashboard

## Services Offered
1. **Private Events** - Intimate gatherings to grand celebrations
2. **Corporate Functions** - Business events and client entertainment
3. **Luxury Experiences** - Bespoke access to premium venues/services
4. **Venue Selection** - Expert guidance for perfect venues
5. **Catering Services** - World-class catering with custom menus
6. **Entertainment** - Live music, performance artists

## Design System
- **Primary Color**: `#8e6d46` (warm brown/gold)
- **Primary Hover**: `#a2886a` (lighter brown)
- **Background Light**: `#f3f3f3`
- **Footer Background**: `#212121`
- **Typography**: Light font weights, uppercase tracking for headings
- **Style**: Luxury, elegant, minimalist with hover animations

## Commands
```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # TypeScript type checking
```

## Database (Supabase)
- **Table**: `service_requests`
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `service_type` (string)
  - `message` (string)
  - `status` (string, default: 'pending')

## Form Submission Flow
1. User fills ServiceContactForm
2. Data saved to Supabase `service_requests` table
3. Webhook sent to n8n for further processing (email notifications, etc.)

## Key Integrations
- **Chatwoot**: Live chat widget (token: JqdHQ2WwSuyfvKNf5PsZsmR7)
- **n8n Webhook**: Receives form submissions for automation
- **Supabase**: Database and authentication

## Recent Changes (from git history)
- Changed "Excellence" to "Quality" in About section
- Linked Telegram icon to t.me/Twelvekeys_bot in footer
- Updated address to "KK 250 Ave, Kigali Rwanda" in Contact section
- Updated navigation labels: "About Us" → "About", "Call Us" → "Call"
- Changed Send Message button icon to Mail envelope

## Code Patterns
- Components use named exports
- Forms use controlled inputs with useState
- Tailwind classes for all styling (no separate CSS files)
- Lucide icons throughout
- Section IDs for anchor navigation (#services, #about, #contact)

## Notes
- Hero uses Pexels stock images
- Social links (Facebook, Instagram, Twitter) currently use placeholder `#` href
- Telegram link is active and points to the bot
- Mobile menu toggles with hamburger icon
