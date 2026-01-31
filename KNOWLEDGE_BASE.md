# 12Keys Agency Website - AI Knowledge Base Reference

This document serves as a comprehensive reference for AI agents working on the 12Keys Agency website. It contains all structural, architectural, and content information about the project.

---

## 1. WEBSITE OVERVIEW

**Project Name:** 12Keys Agency
**Description:** Luxury concierge service based in Kigali, Rwanda, specializing in private events, corporate functions, and bespoke experiences
**Tagline:** "Exceptional service and bespoke experiences in Rwanda"
**Domain:** 12keys.agency

**Contact:**
- Address: KK 250 Ave, Kigali Rwanda
- Phone: +250 788863209 / +250 795422953
- Email: info@12keys.agency
- Hours: Mon - Fri / 8am to 7pm
- Telegram Bot: t.me/Twelvekeys_bot

---

## 2. ROUTE STRUCTURE & PAGES

### All Application Routes

```
/                          → LandingPage (Home)
/b2b                      → B2BPage (B2B Connector Service)
/travel-hospitality       → TravelHospitalityPage (Travel & Hospitality Service)
/corporate-delegation     → CorporateDelegationPage (Corporate & Delegation Service)
/relocation-settlement    → RelocationSettlementPage (Relocation & Settlement Service)
/personal-lifestyle       → PersonalLifestyleConcierge (Personal & Lifestyle Service)
/login                    → Login (Customer login)
/signup                   → Signup (Customer signup)
/dashboard                → Dashboard (Customer dashboard - authenticated)
/staff/login              → StaffLogin (Staff login)
/staff/dashboard          → StaffDashboard (Staff dashboard - authenticated)
```

### Landing Page Anchor Links (for internal navigation)

```
#services                 → Services section
#about                    → About Us section
#contact                  → Contact & Form section
```

**Important:** Anchor links work across all pages via `ScrollToAnchor` component in App.tsx. Clicking "About us" or "Contact us" from any service page navigates to `/#about` or `/#contact`, automatically scrolling to those sections on the landing page.

---

## 3. SERVICES - COMPLETE REFERENCE

### 5 Main Services (in order of appearance on Landing Page)

#### 1. Corporate & Delegation Concierge
- **Route:** `/corporate-delegation`
- **Description:** Structured support for boards, executive teams, and visiting delegations
- **Key Features:**
  - Delegation Hosting Coordination
  - Board-Level Mobility & On-Ground Logistics
  - Venue & Operational Setup Support
  - On-Call Team Support Throughout Engagement
- **Ideal For:** Corporate teams, Government delegations, Board visits, International groups

#### 2. Business-to-Business (B2B) Connector
- **Route:** `/b2b`
- **Description:** Strategic introductions connecting credible companies and institutions across sectors
- **Process (4-Step):**
  1. Targeted Partner Identification (Research & shortlisting)
  2. Professional Outreach & Communication (Confidential engagement)
  3. Structured Meeting Facilitation (Logistics & meeting prep)
  4. Follow-Up & Outcome Tracking (Post-engagement support)
- **Industries Served:** Hospitality, Government, Telecommunications, Investment, Medical, Real Estate, Corporate Services, Event Management, Education, Import/Export, Logistics, Technology (12 total)

#### 3. Travel & Hospitality
- **Route:** `/travel-hospitality`
- **Description:** Seamless travel, mobility, and hospitality planning with refined coordination
- **Core Services:**
  1. Hotel & Luxury Accommodation Coordination
  2. Chauffeured & Executive Transport
  3. Priority Reservations & Curated Rwanda Experiences
  4. Airport Meet-and-Assist & Facilitation Services
  5. Itinerary Planning & 24/7 Guest Support

#### 4. Relocation & Settlement Support
- **Route:** `/relocation-settlement`
- **Description:** Smooth transitions for executives and families relocating to Rwanda
- **Core Services:**
  1. Housing Search, Lease Negotiation & Move-in Setup
  2. Utilities & Household Activation
  3. Family Settling Assistance (Schools, Wellness, Memberships)
  4. First-90-Day Lifestyle Stabilization
- **Ideal For:** International executives, Families with children, Corporate relocations

#### 5. Personal & Lifestyle Concierge
- **Route:** `/personal-lifestyle`
- **Description:** Bespoke support for lifestyle, dining, and personal arrangements (available selectively for existing clients)
- **Core Services:**
  1. Private Dining Arrangements
  2. Wellness & Appointment Coordination
  3. Bespoke Requests & On-call Assistant
  4. Wardrobe & Personal Shopping
- **Availability:** Selective (existing clients only)

---

## 4. COMPONENT ARCHITECTURE

### Landing Page Components (components/landing/)

| Component | Purpose | Key Props | Events |
|-----------|---------|-----------|--------|
| **Header.tsx** | Fixed navigation bar on all pages | - | Handles Services dropdown navigation, mobile menu toggle |
| **Hero.tsx** | Full-screen welcome section | - | "Explore Services", "Learn More" buttons |
| **Services.tsx** | Display 5 service cards | - | Cards navigate to service pages, modal opens on click |
| **About.tsx** | About Us section with features | - | "Request for a meeting" button |
| **Contact.tsx** | Contact information + form | - | Form submission to webhook |
| **Footer.tsx** | Footer with links and social media | - | Navigation, social links, Telegram link |

### UI Components (components/ui/)

| Component | Purpose | Props |
|-----------|---------|-------|
| **ServiceCard.tsx** | Reusable service card | `title`, `image`, `description`, `ctaLabel`, `href`, `onClick` |
| **Modal.tsx** | Reusable modal dialog | `isOpen`, `onClose`, `title`, `children` |

### Form Components (components/forms/)

| Component | Purpose | Props | Integration |
|-----------|---------|-------|-------------|
| **ServiceContactForm.tsx** | Contact form used on all pages | `serviceName`, `onSubmit` | Sends to n8n webhook, optional Supabase save |

### Chat Component (components/)

| Component | Purpose |
|-----------|---------|
| **ChatwootWidget.tsx** | Live chat widget integration |

### Context Providers (context/)

| Provider | Purpose |
|----------|---------|
| **AuthContext.tsx** | Manages Supabase user authentication |

---

## 5. FORM SUBMISSION FLOW

### ServiceContactForm - Step-by-Step

1. **User Input:** Form collects:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Service Type (required)
   - Country Code (optional, e.g., "+250")
   - Phone Number (optional)
   - Message (required)

2. **Form Processing:**
   ```
   User submits form
   ↓
   Validation check
   ↓
   Combine fields (firstName + lastName → fullName, countryCode + phoneNumber → fullPhone)
   ↓
   Try: Save to Supabase (non-fatal if not configured)
   ↓
   Send to n8n webhook (CRITICAL)
   ↓
   Display success/error message
   ↓
   Reset form on success
   ```

3. **Integrations:**
   - **Supabase:** Saves to `service_requests` table (optional)
   - **n8n Webhook:** Always sends form data to automation endpoint

4. **Webhook Payload:**
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "phone": "+250788123456",
     "message": "Message content",
     "serviceName": "Service name",
     "subject": "Service type",
     "timestamp": "2024-01-31T10:30:00.000Z"
   }
   ```

5. **Error Handling:**
   - Supabase errors are logged but non-fatal
   - Webhook errors display "Something went wrong" message
   - Console logs all webhook requests and responses

---

## 6. NAVIGATION STRUCTURE

### Header Navigation (All Pages)

**Desktop Menu:**
- Logo → `/`
- Home → `/`
- Services (Dropdown):
  - B2B Connector → `/b2b`
  - Travel & Hospitality → `/travel-hospitality`
  - Corporate & Delegation → `/corporate-delegation`
  - Relocation & Settlement → `/relocation-settlement`
  - Personal & Lifestyle → `/personal-lifestyle`
- About us → `/#about`
- Contact us → `/#contact`
- Chat Button → Opens Chatwoot widget
- Email Button → Opens email client

**Mobile Menu:**
- Same structure with hamburger toggle
- Services submenu expandable
- Touch-friendly spacing

### Footer Navigation

- Home, Services, About, Contact → Same as header
- Social Links:
  - Facebook → `#` (placeholder)
  - Instagram → `#` (placeholder)
  - Twitter → `#` (placeholder)
  - Telegram → `https://t.me/Twelvekeys_bot` (active)

### Page-Specific Navigation

Each service page includes:
- Header with Services dropdown
- Hero section with CTA buttons
- Content sections
- Final CTA button that opens contact modal
- Footer

---

## 7. EXTERNAL INTEGRATIONS

### Supabase

**Configuration File:** `src/lib/supabaseClient.ts`

**Environment Variables:**
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Anonymous key for client access

**Database Table:** `service_requests`
```
- id: UUID (primary key)
- name: string
- email: string
- phone: string
- service_type: string
- message: text
- status: string (default: 'pending')
- created_at: timestamp
```

**Auth Context:** Manages user sessions and authentication state via `AuthContext.tsx`

**Fallback Behavior:** If credentials not configured, form submission skips Supabase but continues with webhook

### n8n Webhook

**Endpoint:** `https://12keys-agency-n8n.go13ce.easypanel.host/webhook/aaed8b10-6338-4a55-bc2f-96dd2e3d1e40`

**Configuration File:** `src/api/contact-webhook.ts`

**Function:** `sendToWebhook(data: ContactWebhookPayload)`

**Features:**
- POST request with JSON content-type
- CORS enabled (credentials: 'omit')
- Logs request/response to browser console
- Throws error on non-200 response
- Includes timestamp in payload

**Usage:** Called from `ServiceContactForm` when user submits

### Chatwoot Live Chat

**Base URL:** Self-hosted at `https://chatwoot.12keys.agency`

**Website Token:** `JqdHQ2WwSuyfvKNf5PsZsmR7`

**Component:** `ChatwootWidget.tsx`

**Features:**
- Dynamically loads SDK
- Accessible via Chat button in header
- Bubble messaging interface
- Prevents duplicate script loading

---

## 8. DESIGN SYSTEM

### Color Palette

| Color Name | Hex Value | Usage |
|-----------|-----------|-------|
| Primary Brown | `#8e6d46` | Buttons, highlights, accents |
| Primary Hover | `#a2886a` | Button hover state, lighter accents |
| Light BG | `#f3f3f3` | Section backgrounds |
| Dark Footer | `#212121` | Footer background |
| White | `#ffffff` | Cards, text backgrounds |

### Typography

**Font Style:** Light (300-400 weight), uppercase for headings

**Responsive Sizes:**
- H1 (Hero): `text-5xl` to `text-8xl` responsive
- H2 (Section): `text-4xl` to `text-5xl`
- H3 (Card): `text-2xl` to `text-3xl`
- Body: `text-lg` or `text-base`

**Spacing:**
- Letter-spacing: `tracking-wider` (headings), `tracking-widest` (uppercase)
- Line-height: Light fonts with relaxed line-height

### Layout

**Container:** `max-w-7xl` centered
**Padding:** `px-4 sm:px-6 lg:px-8` horizontal, `py-20` vertical sections
**Grid:** Responsive columns:
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3` (varies by section)

### Components Styling

**Buttons:**
- Primary: `bg-[#8e6d46]` with white text
- Hover: `hover:bg-[#a2886a]`
- Padding: `px-8 py-3` or `px-8 py-4`

**Cards:**
- Background: White or `#f3f3f3`
- Shadow: Subtle on hover
- Border: Top border `border-t-4 border-[#8e6d46]` (some cards)

**Icons:**
- Background: `bg-[#8e6d46]/10` (light brown)
- Color: `text-[#8e6d46]`
- Size: Typically `w-12 h-12` or `w-6 h-6`

---

## 9. ASSETS & IMAGES

### Local Public Assets

```
public/
├── favicon.jpg                 # Browser tab icon
├── logo.jpeg                   # Header logo
├── logo-dark.jpeg              # Footer logo
├── 12keys-logo.png            # Alternative logo
└── (various section images)
```

### Stock Images (Pexels - External URLs)

**Landing Page:**
- Hero: https://images.pexels.com/photos/8069407/
- Corporate: https://images.pexels.com/photos/1181395/
- B2B: https://images.pexels.com/photos/6950015/
- Travel: https://images.pexels.com/photos/7820359/
- Relocation: https://images.pexels.com/photos/7464736/
- Personal: https://images.pexels.com/photos/3727469/

**Service Pages:** Each has hero background + multiple section images (see detailed list in component documentation)

---

## 10. TECH STACK

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Vite | 5.4.21 | Build Tool |
| Tailwind CSS | 3.4.18 | Styling |
| React Router | 7.9.6 | Routing & Navigation |
| Supabase | 2.57.4 | Backend & Auth |
| Lucide React | 0.344.0 | Icon Library |
| ESLint | 9.9.1 | Code Linting |

### Key Scripts

```
npm run dev                # Start Vite dev server (http://localhost:5173)
npm run build              # Production build to dist/
npm run preview            # Preview production build
npm run lint               # Run ESLint
npm run typecheck          # TypeScript type checking
```

---

## 11. FILE STRUCTURE

```
src/
├── api/
│   └── contact-webhook.ts          # n8n webhook integration
├── components/
│   ├── landing/
│   │   ├── Header.tsx              # Navigation
│   │   ├── Hero.tsx                # Hero section
│   │   ├── Services.tsx            # Service cards
│   │   ├── About.tsx               # About section
│   │   ├── Contact.tsx             # Contact form
│   │   └── Footer.tsx              # Footer
│   ├── ui/
│   │   ├── Modal.tsx               # Modal dialog
│   │   └── ServiceCard.tsx         # Service card component
│   ├── forms/
│   │   └── ServiceContactForm.tsx  # Contact form
│   └── ChatwootWidget.tsx          # Live chat
├── context/
│   └── AuthContext.tsx             # Auth provider
├── lib/
│   └── supabaseClient.ts           # Supabase init
├── pages/
│   ├── LandingPage.tsx             # Home (/)
│   ├── B2BPage.tsx                 # B2B (/b2b)
│   ├── TravelHospitalityPage.tsx   # Travel (/travel-hospitality)
│   ├── CorporateDelegationPage.tsx # Corporate (/corporate-delegation)
│   ├── RelocationSettlementPage.tsx # Relocation (/relocation-settlement)
│   ├── PersonalLifestyleConcierge.tsx # Personal (/personal-lifestyle)
│   ├── Login.tsx                   # Login (/login)
│   ├── Signup.tsx                  # Signup (/signup)
│   ├── Dashboard.tsx               # Dashboard (/dashboard)
│   ├── StaffLogin.tsx              # Staff login (/staff/login)
│   └── StaffDashboard.tsx          # Staff dashboard (/staff/dashboard)
├── App.tsx                         # Main app with Router
├── main.tsx                        # Entry point
└── index.css                       # Global styles

index.html                          # HTML entry point with favicon
KNOWLEDGE_BASE.md                   # This file (AI reference)
CLAUDE.md                          # Project overview
```

---

## 12. KEY DEVELOPMENT PATTERNS

### Form Submission Pattern

All forms use the `ServiceContactForm` component which:
1. Collects user data via controlled inputs
2. Validates required fields
3. Formats data (combines first/last name, phone parts)
4. Attempts Supabase save (non-fatal if missing)
5. Sends webhook to n8n (critical)
6. Displays success/error message
7. Resets form on success

### Navigation Pattern

Header uses `useNavigate()` from React Router for:
- Service dropdown links (buttons with onClick handlers)
- Mobile menu links (buttons with onClick handlers)
- Landing page navigation (anchor links via `/#section-id`)

Anchor links trigger `ScrollToAnchor` effect which:
1. Detects hash in URL
2. Finds element by ID
3. Smooth-scrolls to element

### Modal Pattern

Service pages follow this pattern:
1. useState to track selected service
2. Service cards set `selectedService` state on click
3. Modal opens/closes based on state
4. Form inside modal has onSubmit callback to close modal
5. Form submission clears state after delay

---

## 13. BEST PRACTICES FOR AI AGENTS

### When Working on This Project:

1. **Always check CLAUDE.md and KNOWLEDGE_BASE.md** for project context
2. **Service pages all follow same structure:** Hero → Intro → Content → Benefits → Subservices → CTA → Modal → Footer
3. **All forms use ServiceContactForm** - Don't create new form components
4. **Webhook integration is critical** - Always ensure forms call `sendToWebhook()`
5. **Navigation uses React Router** - Use `navigate()` function, not direct links for internal routes
6. **Responsive design first** - Always use Tailwind responsive classes (md:, lg:)
7. **Color scheme is consistent** - Brown `#8e6d46` and light `#f3f3f3` backgrounds
8. **Supabase is optional** - Forms work without Supabase credentials, but webhook must work
9. **Scroll anchors must use `/#section-id`** format from other pages
10. **All pages must include Header and Footer** components

---

## 14. COMMON TASKS & LOCATIONS

| Task | Location |
|------|----------|
| Add new navigation link | `src/components/landing/Header.tsx` |
| Modify color scheme | Search and replace `#8e6d46` or update `CLAUDE.md` |
| Add new service page | Create page in `src/pages/`, update routes in `App.tsx`, add to Header services list |
| Change contact email | `src/components/landing/Header.tsx`, `src/components/landing/Footer.tsx`, forms |
| Update webhook | `src/api/contact-webhook.ts` (WEBHOOK_URL constant) |
| Modify form fields | `src/components/forms/ServiceContactForm.tsx` |
| Update service descriptions | Individual service page files in `src/pages/` |
| Change logo | Replace files in `public/` and update img src in components |
| Modify footer | `src/components/landing/Footer.tsx` |
| Add new social link | `src/components/landing/Footer.tsx` (socialLinks array) |

---

## 15. DEPLOYMENT & GITHUB

**Repository:** https://github.com/Jgasana/12keys.agency

**Deployment:** GitHub Pages (automatic via GitHub Actions)

**Workflow:** `.github/workflows/static.yml`
- Triggers on push to main branch
- Includes npm caching for faster builds
- Builds with Vite
- Deploys to GitHub Pages

**Recent Changes:**
- Favicon updated with 12Keys logo
- Webhook error handling improved
- Services dropdown navigation fixed (React Router integration)
- Form submission works without Supabase
- Logo size adjusted to 80px in header
- About/Contact links point to home page anchors (`/#about`, `/#contact`)
- Footer links updated for proper navigation

---

## 16. CURRENT KNOWN ISSUES & SOLUTIONS

| Issue | Solution | File |
|-------|----------|------|
| Forms throw error if Supabase not configured | Made Supabase optional, check if `supabase` exists | `ServiceContactForm.tsx` |
| Webhook fails to send | Added CORS mode and detailed logging to console | `contact-webhook.ts` |
| Service dropdown links don't navigate | Changed to use `navigate()` from React Router | `Header.tsx` |
| Anchors don't scroll from other pages | ScrollToAnchor effect handles hash-based navigation | `App.tsx` |
| Logo was too small | Increased header logo to 80px | `Header.tsx` |

---

**Last Updated:** January 31, 2024
**Version:** 2.0
**For:** AI Agent Reference

---

This knowledge base is designed to be comprehensive yet scannable. Use it to understand the project structure, architecture, and key implementation details when working on the 12Keys Agency website.
