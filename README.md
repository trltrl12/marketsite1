# EleventhMedia — Real Estate Investor Lead Generation Website

A production-ready marketing website for a paid lead generation company serving real estate investors, "we buy houses" companies, wholesalers, and cash home buyers.

Built with **Next.js 15** + **Tailwind CSS** — ready to deploy on Vercel in minutes.

---

## Features

- **Two-step conversion funnel**: Lead capture form (Step 1) → Calendly scheduling embed (Step 2)
- **Persuasive direct-response copy** written for real estate investor businesses
- **Mobile-responsive** design with clean visual hierarchy
- **Webhook-ready** form — connect to Zapier, GoHighLevel, HubSpot, or any CRM
- **Fast-loading** static-optimized Next.js build
- **Easy to rebrand** — branding is isolated in component files

---

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Calendly Inline Widget

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values (see `.env.example` for documentation).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_WEBHOOK_URL` | Optional | Webhook URL for form submissions (Zapier, GoHighLevel, HubSpot, etc.) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Your production domain for canonical URLs |

When `NEXT_PUBLIC_WEBHOOK_URL` is set, every form submission sends a POST request with:

```json
{
  "name": "...",
  "companyName": "...",
  "phone": "...",
  "email": "...",
  "submittedAt": "2024-01-01T00:00:00.000Z"
}
```

---

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push this repository to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_WEBHOOK_URL` (if connecting to a CRM)
   - `NEXT_PUBLIC_SITE_URL` (your production domain)
5. Click **Deploy**

Vercel will automatically detect Next.js and use the correct build settings.

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Pushing to GitHub

If starting from scratch:

```bash
# Initialize git (already done if cloned)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: EleventhMedia marketing site"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main
git push -u origin main
```

---

## Customization Guide

### Branding

Update the company name and colors in these files:

- **Company name**: Search for `EleventhMedia` across all component files and replace
- **Primary color**: `blue-600` / `blue-500` throughout components
- **Accent color**: `amber-500` / `amber-400` throughout components
- **Logo**: Edit `NavBar.tsx` and `Footer.tsx`

### Calendly URL

The Calendly embed URL is defined in `app/components/CalendlyEmbed.tsx`:

```ts
const CALENDLY_URL = 'https://calendly.com/taylor-marcheleventh/30min';
```

Replace this with your own Calendly link.

### Copy / Messaging

All page copy is written directly in the component files. Each section is its own component:

| Component | Section |
|---|---|
| `HeroSection.tsx` | Above-the-fold hero + lead form |
| `HowItWorks.tsx` | Meta Ads + Google PPC explanation |
| `PainPoints.tsx` | Problem/solution cards |
| `Services.tsx` | Services detail (Meta + Google) |
| `WhyUs.tsx` | Differentiators |
| `Process.tsx` | 6-step process |
| `Testimonials.tsx` | Testimonials + stats |
| `FAQ.tsx` | Accordion FAQ |
| `FinalCTA.tsx` | Bottom CTA section |
| `Footer.tsx` | Footer |

### Form → CRM Connection

To connect the lead form to your CRM or automation platform:

1. Create a webhook URL in Zapier, Make.com, GoHighLevel, or your platform
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
   ```
3. Add it to your Vercel environment variables in the dashboard

The form automatically POSTs lead data on submission when this variable is set.

---

## Project Structure

```
app/
├── components/
│   ├── NavBar.tsx           # Sticky navigation bar
│   ├── HeroSection.tsx      # Hero + lead form + Calendly embed (steps 1 & 2)
│   ├── LeadForm.tsx         # Step 1: Lead capture form
│   ├── CalendlyEmbed.tsx    # Step 2: Calendly scheduling embed
│   ├── HowItWorks.tsx       # Meta + Google explanation
│   ├── PainPoints.tsx       # Pain points + solutions
│   ├── Services.tsx         # Services section
│   ├── WhyUs.tsx            # Why choose us
│   ├── Process.tsx          # Campaign process steps
│   ├── Testimonials.tsx     # Testimonials + stats
│   ├── FAQ.tsx              # FAQ accordion
│   ├── FinalCTA.tsx         # Bottom call-to-action
│   └── Footer.tsx           # Footer
├── globals.css              # Global styles
├── layout.tsx               # Root layout + metadata
└── page.tsx                 # Main page (assembles all sections)
.env.example                 # Environment variable template
```

---

## Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## License

All rights reserved. This website was built for EleventhMedia.
