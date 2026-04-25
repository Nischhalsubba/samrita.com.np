# Samrita Maharjan Civil Engineering Portfolio

> A static, recruiter-focused civil engineering portfolio for **Samrita Maharjan** — designed as a calm, credible, privacy-conscious professional website for an entry-level Civil Engineer in Nepal.

[![Static Site](https://img.shields.io/badge/Site-Static%20HTML%20%2B%20CSS%20%2B%20JS-111111?style=for-the-badge)](#development)
[![SEO Focused](https://img.shields.io/badge/SEO-Recruiter%20Search%20Intent-0F766E?style=for-the-badge)](#seo-implementation)
[![Accessibility](https://img.shields.io/badge/Accessibility-Keyboard%20%2B%20Contrast%20Aware-2563EB?style=for-the-badge)](#accessibility)
[![Portfolio](https://img.shields.io/badge/Portfolio-Civil%20Engineering-6B7280?style=for-the-badge)](#project-goals)

---

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Designer's Perspective](#designers-perspective)
- [Information Architecture](#information-architecture)
- [Content Strategy](#content-strategy)
- [Design Direction](#design-direction)
- [Theme System](#theme-system)
- [Interaction Design](#interaction-design)
- [Accessibility](#accessibility)
- [SEO Implementation](#seo-implementation)
- [Contact Form](#contact-form)
- [File Structure](#file-structure)
- [Development](#development)
- [Deployment Notes](#deployment-notes)
- [Quality Checklist](#quality-checklist)
- [Content Maintenance](#content-maintenance)
- [Roadmap](#roadmap)
- [Credits](#credits)

---

## Overview

**Samrita Maharjan Civil Engineering Portfolio** is a static professional website built to present Samrita Maharjan as an entry-level Civil Engineer in Nepal. The site is designed for recruiters, engineering firms, site supervisors, and hiring teams who need a quick but credible understanding of her education, certificates, projects, practical skills, and contact path.

The project is intentionally simple from a technical point of view. It uses static HTML, CSS, and JavaScript instead of a heavy framework. This keeps the website fast, portable, and easy to host on simple static platforms.

From a design point of view, the site behaves like a polished editorial resume. It avoids unnecessary visual noise and focuses on trust: clean typography, narrow readable content width, grouped verification records, careful certificate presentation, and realistic fresher-level project storytelling.

---

## Project Goals

The site has five primary goals:

1. Present Samrita as an entry-level Civil Engineer in Nepal with a professional public profile.
2. Make education, certificates, and fresher-level projects easy for recruiters to scan.
3. Keep public information useful while avoiding exposure of sensitive personal identifiers.
4. Support search discoverability for realistic hiring-related queries.
5. Stay lightweight, fast, accessible, and simple to maintain.

This is not designed as a flashy agency landing page. It is designed as a job-focused civil engineering portfolio where clarity matters more than decoration.

---

## Designer's Perspective

This project is written and maintained from the perspective of a designer who understands front-end basics and recruiter behavior.

The design choices are based on a few practical beliefs:

- A fresher portfolio should feel honest, not exaggerated.
- Recruiters need fast evidence, not long marketing claims.
- Certificates should be easy to verify, but private information should not be carelessly exposed.
- Civil engineering content should feel grounded and practical.
- A static site is enough when the main goal is presentation, SEO, and contact.

The website uses quiet interaction, clear sections, and recruiter-focused copy to make the experience feel professional without pretending Samrita is already a senior engineer.

---

## Information Architecture

The homepage is intentionally structured around recruiter scanning.

| Section | Purpose | UX Reason |
|---|---|---|
| Hero | Introduces Samrita and her professional direction | Helps visitors understand the profile immediately |
| Recruiter Snapshot | Summarizes key hiring signals | Makes the profile easy to evaluate quickly |
| Education Journey | Shows academic background | Builds credibility |
| Academic Verification | Groups proof records | Avoids clutter while supporting authenticity |
| Languages | Shows communication ability | Useful for local hiring contexts |
| Skills | Highlights civil engineering support skills | Connects learning to practical work |
| Certificates | Presents grouped documents | Gives proof without overwhelming the page |
| Projects | Shows fresher-level applied work | Demonstrates initiative and readiness |
| Civil Engineering Notes | Adds practical writing/SEO value | Shows interest and learning attitude |
| Contact | Creates a hiring conversation path | Converts interest into action |
| Recruiter FAQ | Answers common hiring questions | Reduces friction |
| Footer CTA | Final contact prompt | Ends with a clear next step |

Supporting pages include project details, blog notes, and utility/template pages such as `404.html`, `password.html`, `start-here.html`, `style-guide.html`, `licenses.html`, and `changelog.html`.

---

## Content Strategy

The content is written for professional trust.

### Positioning

Samrita is positioned as an entry-level Civil Engineer, not as a senior engineer. The copy emphasizes readiness for support roles such as:

- site coordination support
- AutoCAD drafting support
- surveying assistance
- quantity estimation
- construction documentation
- daily reporting
- team coordination
- fresher-level engineering project support

### Authenticity Rules

The project follows careful content rules:

- Do not claim final bachelor completion unless officially verified.
- Keep pending academic results clearly marked.
- Avoid publishing typed serial numbers, symbol numbers, registration numbers, and private identifiers.
- Keep project language realistic for a fresher.
- Group academic records so the page stays readable.
- Avoid fake senior-level achievements.

### Certificate Grouping

Certificates are grouped into recruiter-friendly categories:

- Bachelor's Degree in Civil Engineering
- Higher Secondary Education (+2), Science
- Secondary Education Examination (SEE)

This grouped approach is better than dumping every certificate separately on the homepage. It keeps the page clean while still providing verification value.

---

## Design Direction

The design system is minimal, editorial, and monochrome-first.

### Visual Principles

- dark-first design with light theme support
- centered, narrow content column
- generous whitespace
- thin separators instead of heavy cards
- restrained motion
- minimal decoration
- high readability
- no fake luxury treatment
- no unnecessary shadows or visual clutter

### Layout Direction

The main content uses a small container, making the website feel more like a focused profile than a crowded company site.

The layout supports:

- long-form readability
- grouped content blocks
- certificate previews
- project tiles
- blog/resource tiles
- clear contact section

### Typography Direction

The site uses Inter as the main font. The type system is intentionally plain and professional. It avoids overly decorative choices because the project needs to feel credible to recruiters and hiring teams.

---

## Theme System

Theme tokens live in `assets/styles.css`.

### Dark Theme

| Token Role | Value |
|---|---:|
| Background | `#0f0f0f` |
| Text | `#d7d7d7` |
| Heading / Primary | `#ffffff` |
| Muted Text | `#bdbdbd` |

### Light Theme

| Token Role | Value |
|---|---:|
| Background | `#f7f7f7` |
| Text | `#242424` |
| Heading / Primary | `#0f0f0f` |
| Muted Text | `#4a4a4a` |

The theme system is important because the site needs to remain readable and professional in both modes. The light theme should not be a quick inversion of the dark theme; it should preserve hierarchy, contrast, and tone.

---

## Interaction Design

The interaction design is quiet and supportive.

### GSAP Motion

GSAP and ScrollTrigger are used for:

- header and hero intro animation
- scroll-driven hero diamond rotation
- scroll-driven footer diamond rotation
- modal entrance animation
- scroll reveal animations

The motion language is intentionally subtle:

- short fade
- small upward movement
- calm rotation
- no aggressive per-letter effects
- no interaction that blocks content

### Custom Cursor

Desktop pointer devices receive a soft circular cursor that expands over interactive elements. Touch devices do not need this cursor behavior.

### Mobile Behavior

The mobile experience prioritizes usability:

- hamburger navigation
- visible summaries
- no hover-only dependency
- certificate modal constrained to viewport width
- readable stacked sections
- no horizontal scrolling

---

## Accessibility

Accessibility is part of the product quality of this site.

Current and intended accessibility choices include:

- semantic heading structure
- `main` landmark
- skip link
- keyboard-focusable controls
- modal dialog attributes
- visible validation messages
- sufficient color contrast
- descriptive image alt text
- no important mobile content hidden behind hover

### Accessibility Maintenance Rule

Any new section should be usable by keyboard, readable in both themes, and understandable without animation.

### Accessibility Checklist

- [ ] All images have meaningful alt text.
- [ ] Decorative images are marked appropriately.
- [ ] Certificate modals can be opened and closed by keyboard.
- [ ] Focus states are visible.
- [ ] Form validation is understandable.
- [ ] Color contrast is checked in both themes.
- [ ] The layout works without horizontal scrolling.
- [ ] Content remains understandable if JavaScript fails.

---

## SEO Implementation

The project has a practical SEO strategy focused on realistic recruiter search intent.

### SEO Elements

- descriptive title focused on entry-level civil engineering in Nepal
- recruiter-friendly meta description
- canonical URL
- Open Graph metadata
- Twitter summary card metadata
- local OG image at `assets/og-image.png`
- sitemap at `sitemap.xml`
- robots file at `robots.txt`
- JSON-LD Person data
- JSON-LD ProfilePage data
- JSON-LD FAQPage data
- article structured data on blog pages
- internal links from homepage to projects and blog notes

### SEO Content Rules

- Write for recruiters first.
- Use civil engineering keywords naturally.
- Avoid keyword stuffing.
- Focus on long-tail intent instead of broad ranking promises.
- Keep academic and professional claims accurate.
- Add practical blog notes that reflect real civil engineering learning and job readiness.

### Ranking Growth Recommendations

To improve search visibility over time:

- submit `https://samrita.com.np/sitemap.xml` in Google Search Console
- verify the domain in Google Search Console
- add relevant backlinks from LinkedIn, college profiles, GitHub, and professional directories
- publish more useful civil engineering notes
- keep project pages specific and realistic
- add real project images when available
- maintain consistent contact details across platforms

---

## Contact Form

The form uses FormSubmit's AJAX endpoint.

Current intended recipients:

- primary: `samritamaharjan00@gmail.com`
- cc: `hinischalsubba@gmail.com`

The form includes:

- name field
- email field
- message field
- validation
- success/error states
- honeypot spam field
- AJAX submission

After deployment, FormSubmit may require first-submission confirmation from the primary recipient inbox.

---

## File Structure

```text
.
├── assets/
│   ├── certificates/
│   ├── blog-documentation.svg
│   ├── blog-site-readiness.svg
│   ├── favicon.svg
│   ├── og-image.png
│   ├── script.js
│   └── styles.css
├── blog/
│   ├── civil-engineering-documentation-for-freshers.html
│   └── entry-level-civil-engineer-site-readiness.html
├── projects/
│   ├── campus-study-planner.html
│   ├── concrete-mix-calculator.html
│   ├── student-portfolio-website.html
│   └── survey-field-notes.html
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Development

This is a static HTML/CSS/JavaScript site. No build step is required.

Run locally with any static server:

```bash
npx http-server -p 4173 -a 127.0.0.1 .
```

Then open:

```text
http://127.0.0.1:4173/
```

Alternative simple local server:

```bash
python -m http.server 4173
```

---

## Deployment Notes

The site can be deployed to any static hosting platform:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- shared hosting with static file upload

Because the site has no build step, deployment usually means uploading the root files and folders exactly as they are.

### Deployment Checklist

- [ ] `index.html` loads at root.
- [ ] `robots.txt` is accessible.
- [ ] `sitemap.xml` is accessible.
- [ ] Contact form works after FormSubmit confirmation.
- [ ] Certificate images load correctly.
- [ ] Project and blog pages are reachable.
- [ ] 404 page works if supported by the host.
- [ ] Domain redirects and canonical URLs are consistent.

---

## Quality Checklist

Before publishing changes:

- [ ] Check homepage on mobile, tablet, and desktop.
- [ ] Check both light and dark themes.
- [ ] Open certificate modals on mobile.
- [ ] Test filter buttons for certificates and projects.
- [ ] Submit empty contact form and confirm validation appears.
- [ ] Submit real test contact form after deployment.
- [ ] Validate JSON-LD.
- [ ] Confirm `sitemap.xml` includes new public pages.
- [ ] Confirm no private certificate identifiers are typed into public copy.
- [ ] Confirm public copy does not mention AI generation or cloning.

---

## Content Maintenance

When adding content:

- keep claims accurate and modest
- use dates only when verified
- keep bachelor result pending until officially confirmed
- add project pages only when they support Samrita's positioning
- add blog pages only when they are useful to recruiters or civil engineering learners
- use descriptive alt text
- avoid publishing private IDs
- keep the copy human and professional

---

## Roadmap

- Add real resume PDF if Samrita wants a downloadable resume.
- Add more real civil engineering project pages.
- Add original blog notes about site documentation, estimating, surveying, AutoCAD, and fresher readiness.
- Improve certificate image optimization.
- Add WebP versions of heavy images.
- Add a manual privacy review checklist before uploading new documents.
- Add a stronger off-site SEO strategy through LinkedIn and professional profiles.

---

## Credits

Designed and developed by [nischhalsubba.com.np](https://nischhalsubba.com.np/).

---

## License and Usage

This repository is a personal professional portfolio for Samrita Maharjan. The structure may be used for learning, but the personal content, certificates, identity details, and portfolio copy should not be reused without permission.
