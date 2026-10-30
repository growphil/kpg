# KYRA PACIFIC GREEN — Official Corporate Website

> **Official Brand Tagline:** POWERING A SUSTAINABLE PACIFIC  
> **Primary Hero Headline:** Powering PNG's Next Era of Solar  
> **Market:** Papua New Guinea  

A production-grade, responsive, and performance-optimized corporate web application engineered with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Built to present an international digital agency standard of corporate credibility, Pacific landscape storytelling, and conversion paths for Papua New Guinea's renewable energy sector.

---

## 🌟 Architecture & Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19.3 | Modern component-based rendering |
| **Tooling & Bundler** | Vite 8.3 | Ultra-fast HMR and optimized production bundling |
| **Language** | TypeScript (Strict) | Robust type safety and contract enforcement |
| **Styling** | Tailwind CSS v4 | Reusable design tokens, fluid typography, responsive layout |
| **Routing** | React Router v7 | Route-level code splitting (`React.lazy`) and deep linking |
| **Animation** | GSAP 3 + ScrollTrigger | Restrained, non-distracting reveals respecting `prefers-reduced-motion` |
| **Form Handling** | React Hook Form + Zod | Strict client-side validation, honeypot spam traps, accessible errors |
| **Iconography** | Lucide React | Consistent, accessible iconography |
| **Deployment** | Vercel | SPA rewrites, static caching, serverless API endpoints |

---

## 🧭 Page Routes & Content Matrix

1. **Home (`/`)**
   - **Section 01 — Hero:** Cinematic Pacific landscape with high-efficiency PV arrays, fluid Manrope headline, primary conversion actions.
   - **Section 02 — Our Solutions:** Editorial layout presenting all 8 solar solutions + B2B collaboration banner.
   - **Section 03 — Featured Products:** 3-column product showcase (Inverters, BESS, Foldable Kits, Panels, Complete Systems, All-in-One ESS).
   - **Section 04 — Why Choose Us:** 4 corporate pillars (Different Needs, Flexible Approaches, Guidance, Partnerships).
   - **Section 05 — Who We Serve:** Multi-sector panorama spanning residential, commercial, industrial, government, institutions, dealers, installers.
   - **Section 06 — Our Process:** 4-step structured timeline from initial requirement sharing to quotation.
   - **Section 07 — About KYRA:** Business introduction, PNG energy focus, local commitment.
   - **Section 08 — FAQs:** Accessible WAI-ARIA accordion covering systems, pricing, and partnerships.
   - **Section 09 — Contact Us:** Direct coordinates cards + comprehensive interactive enquiry form.
   - **Section 10 — Footer:** Deep navy corporate footer with quick links, legal links, and verified contact coordinates.

2. **About Us (`/about`)**
   - A New Perspective on Solar Energy for PNG
   - Our Story & History
   - Our Mission & Vision
   - What Guides Us (Customer-Focused, Practical Approach, Collaboration, Long-Term Perspective)
   - Our Commitment to Papua New Guinea

3. **Products Catalogue (`/products`)**
   - Category filtering pills (Foldable Solar, Inverters, Battery Storage, Panels, Complete Systems, All-in-One ESS)
   - Individual product cards with category badges and direct quote links
   - Request specifications workflow

4. **Product Detail (`/products/:id`)**
   - High-resolution gallery with thumbnail switcher
   - Verified feature highlights & application suitability
   - Clear "Request Specifications" callout (no fictional specs)
   - Direct WhatsApp enquiry with pre-filled product name

5. **Solutions (`/solutions`)**
   - In-depth editorial cards for Residential, Commercial, Industrial, On-Grid, Off-Grid, Hybrid, Backup Power, and Consultancy
   - Key benefits and potential applications

6. **Partnerships (`/partnerships`)**
   - Dedicated B2B portal for solar dealers, distributors, installers, and EPC contractors
   - Collaboration areas and B2B enquiry form

7. **Contact (`/contact`)**
   - Verified WhatsApp (`+675 7492 0919`)
   - Verified Email (`kyrapacificgreen@gmail.com`)
   - Location (`Kasupe, Papua New Guinea`)
   - Full 13-category enquiry form with real-time Zod validation

8. **Custom 404 (`*`)**
   - Accessible corporate fallback with quick recovery links

---

## 🎨 Design System & Palette

- **Primary Navy:** `#061F49` (Headings, primary brand tone, footer)
- **Pacific Blue:** `#0874C9` (Supporting accents, active links)
- **Solar Green:** `#159A2E` (Sustainability accents, primary conversion buttons)
- **Sunshine Yellow:** `#FFCA05` (Eyebrows, solar highlights)
- **Solar Orange:** `#FF8500` (Warm highlights)
- **Soft Background:** `#F4F8FB` (Alternating section containers)
- **Primary Text:** `#10233F`
- **Secondary Text:** `#64748B`
- **Border:** `#E3EAF0`
- **Typography:** Headings in **Manrope** (500–800), Body in **Inter** (300–700)

---

## 🔒 Content Integrity & Verification Matrix

In accordance with strict brand guidelines:
- **No fabricated claims:** No invented installation numbers, awards, client testimonials, or unverified warranties.
- **Provisional Contact Information:** Verified from the official website documents (`KYRA PACIFIC GREEN home page.docx`, `CONTACT PAGE FOR KYRA.docx`):
  - WhatsApp: `+675 7492 0919`
  - Email: `kyrapacificgreen@gmail.com`
  - Location: `Kasupe, Papua New Guinea`
  *(Quarantined secondary Dubai/GCC promotional poster details into central config `src/config/contact.ts`)*.
- **Specification Integrity:** Where exact manufacturer datasheets are pending, a clear *"Request Specifications"* callout is provided.

---

## 🚀 Deployment Instructions (Vercel)

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Local Development Server:**
   ```bash
   npm run dev
   ```

3. **Production Build & Type Check:**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel:**
   - Link project via Vercel CLI or GitHub repository.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: `Vite`
   - Optional Serverless Secret Environment Variables:
     - `RESEND_API_KEY`: API key for automated email delivery via `/api/enquiry`.
     - `NOTIFICATION_EMAIL`: Target mailbox (default: `kyrapacificgreen@gmail.com`).

---

## 📄 License & Ownership
© 2026 KYRA Pacific Green. All rights reserved.
