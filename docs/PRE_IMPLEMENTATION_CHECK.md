# BENESTUDIO.COM.NG — Pre-Implementation Verification Check

This document defines the exact scope of optimizations verified against the actual codebase before implementation.

---

## 1. Existing Elements That Will Remain Untouched
* **Visual Identity & Theme:** Deep dark background (`#030303`), subtle dark glass cards, orange/amber glow highlights (`#f97316`), and `BENE.` signature branding with orange dot.
* **Hero Visual Personality (`HeroGeometric` / `shape-landing-hero.tsx`):** Ambient 3D floating glass shapes with warm amber lighting.
* **Header & Navbar Layout (`Navbar.tsx`):** Fixed top floating glass bar with logo and navigation links.
* **Footer Architecture (`Footer.tsx`):** Founder card with Peter Benedict's portrait, direct email, and social channels.
* **Horizontal Showcase (`Projects.tsx`):** Smooth snap-scrolling rounded project carousel for live project previews.
* **Site Structure & Core Routes:** `/`, `/work`, `/services`, `/about`, `/interior-designers`, `/contact`, `/privacy`, `/terms`, `/work/plugsy`, `/work/ubbcakes`, `/work/newdreams`.

---

## 2. Copy That Will Change
* **Hero Eyebrow & Supporting Copy (`shape-landing-hero.tsx`):**
  - Eyebrow Badge: `WEBSITES • DIGITAL PRODUCTS • CLIENT SYSTEMS`
  - Headline: `DIGITAL EXPERIENCES THAT MOVE BUSINESS.`
  - Supporting text: *"Benestudio designs and builds premium websites, digital products and client systems for businesses ready to look sharper, operate smarter and turn attention into action."*
* **CTA Standardization Across All Components:**
  - Primary Hero: `VIEW OUR WORK` (links to `/work`) & `START A PROJECT` (links to `/contact`)
  - Navbar Desktop CTA: `Start a Project`
  - Footer CTA: `Start a Project`
  - Services / About / Interior Designers CTAs: Standardized to `Start a Project`
* **Services Pillars (`Services.tsx`):** Position clearly around the 3 core pillars:
  1. `WEBSITES` — Premium marketing, service, portfolio and commerce experiences.
  2. `DIGITAL PRODUCTS` — Interfaces, portals, platforms and customer-facing digital experiences.
  3. `CLIENT SYSTEMS` — Inquiry qualification, booking, CRM and follow-up experiences that support the website.
  *(All useful detailed sub-capabilities remain intact underneath)*
* **About Page Narrative (`AboutPage.tsx`):** Confident, founder-led messaging focusing on Peter Benedict, studio standards, and why business-driven digital design matters.
* **Interior Designers Page (`InteriorDesigners.tsx`):** Headline updated to *"YOUR PORTFOLIO GETS ATTENTION. YOUR WEBSITE SHOULD TURN IT INTO PROJECTS."* with supporting positioning around residential studio websites + client inquiry systems.

---

## 3. Proof / Content That Will Improve
* **Factual Project Descriptions:** Rewrite project summaries across Homepage, Work page, and Case Study pages to answer:
  - Who was it for?
  - What did they need?
  - What did Benestudio build?
  - Why did that matter?
* **Case Study Structure (`/work/plugsy`, `/work/ubbcakes`, `/work/newdreams`):** Add structured metadata & answer blocks:
  - Context & Problem
  - The Approach
  - What Benestudio Built
  - Desktop & Mobile Highlights
  - Factual Outcomes & Live Site link
* **Avery House Demonstration Framing:** Clearly label Avery House as a `SELF-INITIATED CONCEPT` / `DEMONSTRATION PROJECT` on `/interior-designers` and case studies (no fake paying client claims).
* **Problem → Approach → Solution Framework:** Include factual problem-solution breakdown components for real project transformations.

---

## 4. Pages That Will Improve
* **Homepage (`Home.tsx`):** Early proof presentation via horizontal project showcase, clear service pillars, and objection handling FAQ.
* **Work Page (`Work.tsx`):** Clear project cards with live links and case study entry points.
* **Case Study Pages (`/work/*`):** Concise, visual, structured case studies.
* **Services Page (`Services.tsx`):** Clear 3-pillar positioning hierarchy with detailed sub-capabilities.
* **Interior Designers Page (`InteriorDesigners.tsx`):** Specialized sales page illustrating the 7-step lead-to-consultation journey (`SOCIAL/SEARCH/REFERRAL → WEBSITE → PROJECT FIT → QUALIFIED INQUIRY → CONSULTATION → CRM → FOLLOW-UP`).
* **About Page (`AboutPage.tsx`):** Confident founder narrative and studio philosophy.
* **Contact Page (`Contact.tsx`):** Clean, multi-field inquiry questionnaire with robust form validation, honeypot, user feedback, and mailto fallback.

---

## 5. SEO Fixes Required
* **Page-Specific Metadata:** Ensure every route (`/`, `/work`, `/services`, `/about`, `/interior-designers`, `/contact`, `/work/plugsy`, etc.) has unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags via `SEO.tsx`.
* **Structured Data (JSON-LD):** Verify and enrich `Organization`, `Service`, `ContactPage`, and `CreativeWork` schemas on indexable pages.
* **Machine Readability / AI Search:** Explicit text declaring Benestudio's core services, studio location, founder info, and specialization.
* **Robots & Sitemap:** Ensure `sitemap.xml` and `robots.txt` in `/public` reflect `https://benestudio.com.ng`.

---

## 6. Performance Fixes Required
* **Scroll Performance Check:** Verify whether smooth-scroll dependencies (e.g. Lenis) add overhead or lag; prefer clean native browser scrolling for instantaneous response.
* **Image Delivery:** Use `loading="eager"` and `fetchpriority="high"` for hero/above-the-fold portrait assets; use `loading="lazy"` for below-the-fold screenshots.
* **Bundle & Rendering:** Maintain lightweight React + Tailwind setup without introducing heavy animation libraries or scroll hijacking.

---

## 7. Form / Conversion Fixes Required
* **Robust Submission Architecture (`Contact.tsx`):**
  - Implement full client-side validation (Name, Business, Work Email, Project Type, Budget, Details).
  - Add honeypot field for spam mitigation.
  - Provide a clear, clean success feedback state in UI.
  - Keep `mailto:` pre-filled mail-client trigger as a reliable zero-backend-failure fallback.
  - Trigger custom typed analytics events (`submit_inquiry`).
* **FAQ & Objection Handling:** Add strategic FAQ sections on Homepage, Services, and Contact pages addressing client timeline, process, international work, and ongoing support.

---

## 8. Anything From the Old Audit That Should NOT Be Implemented
* **NO "5–7 Day Guaranteed Delivery" Claims:** Removed fake turnaround promises. Replaced with factual statement: *"Typical project turnaround depends on scope, content readiness, and review speed."*
* **NO Permanent Lenis Retention:** Do NOT retain smooth scroll library if native browser scrolling provides faster, crisper interaction.
* **NO Mailto-Only Fragile Form:** Do NOT leave the contact form without validation, honeypot, or structured state feedback.
* **NO Synthetic Metrics or Fake Testimonials:** Do NOT manufacture fake star ratings, revenue numbers, or client logos.
* **NO Hero Inline Forms:** Do NOT crowd the hero section with an inline form or extra buttons.

---
