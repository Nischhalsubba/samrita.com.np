# Samrita Maharjan Civil Engineering Portfolio

A static, recruiter-focused portfolio for Samrita Maharjan, an entry-level Civil Engineer in Nepal. The site presents verified education records, grouped certificates, fresher-level civil engineering projects, practical writing, and a contact path for hiring conversations.

The public site is optimized for people first: recruiters, engineering firms, site supervisors, and hiring teams who need to quickly understand Samrita's background, authenticity, and readiness for junior civil engineering work.

## Project Goals

- Present Samrita as an entry-level Civil Engineer in Nepal with a credible, job-focused portfolio.
- Keep the design close to a premium editorial resume: quiet, minimal, whitespace-heavy, and fast to scan.
- Make academic records verifiable without overwhelming recruiters with repeated certificate cards.
- Support SEO for realistic search intent such as `entry-level civil engineer Nepal`, `civil engineering graduate Nepal`, `junior civil engineer Nepal`, `civil engineer Lalitpur`, and related long-tail searches.
- Keep the site static, fast, accessible, and easy to deploy.

## Important SEO Note

The site has been optimized for discoverability, but no code change can guarantee first-page Google ranking for a broad query like `civil engineer nepal`. Google ranking also depends on indexing, backlinks, domain authority, search competition, location, freshness, engagement, and reputation signals outside this repository.

The implemented strategy follows Google Search Central guidance:

- Build useful, people-first content instead of keyword-stuffed pages.
- Use accurate titles, descriptions, structured data, internal links, and sitemap entries.
- Keep mobile layout and page experience strong.
- Use descriptive image filenames, alt text, and Open Graph assets.

References:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Images SEO Best Practices](https://developers.google.com/search/docs/appearance/google-images)
- [Structured Data Supported by Google Search](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

## Information Architecture

The homepage is intentionally sparse and recruiter-oriented:

1. Hero
2. Recruiter Snapshot
3. Education Journey
4. Academic Verification
5. Languages
6. Skills
7. Certificates
8. Projects
9. Civil Engineering Notes
10. Contact
11. Recruiter FAQ
12. Footer CTA

The supporting pages include:

- `projects/*.html` for fresher-level civil engineering project details.
- `blog/*.html` for practical civil engineering notes.
- `404.html`, `password.html`, `start-here.html`, `style-guide.html`, `licenses.html`, and `changelog.html` as template-support pages.

## Content Strategy

The content is written for hiring trust, not decoration.

### Positioning

Samrita is positioned as an entry-level Civil Engineer in Nepal, not as an experienced senior engineer. The copy emphasizes:

- Site coordination support
- AutoCAD drafting support
- Surveying assistance
- Quantity estimation
- Construction documentation
- Daily reporting
- Team coordination

### Authenticity Rules

- Do not claim a final bachelor result until the result is officially published.
- Keep the bachelor section future-ready and clearly marked as pending where needed.
- Avoid publishing typed serial numbers, symbol numbers, registration numbers, and sensitive personal identifiers.
- Use grouped verification for academic records so recruiters see proof without repetitive certificate clutter.
- Keep project language realistic for a fresher.

### Certificate Structure

Certificates are grouped into three recruiter-friendly records:

- Bachelor's Degree in Civil Engineering
- Higher Secondary Education (+2), Science
- Secondary Education Examination (SEE)

The grouped popup model keeps the page clean while still allowing recruiters to view document previews.

## Design Direction

The design system is minimal, editorial, monochrome-first, and resume-oriented. It relies on typography, spacing, hierarchy, thin borders, and restrained interaction instead of heavy decoration.

### Visual Principles

- Dark-first design with a complete light theme.
- One centered content column using a small container.
- Large typographic hierarchy for hero and section headings.
- Thin separators instead of heavy cards wherever possible.
- Cards only where the content is a repeated item or clickable resource.
- No saturated decorative palette.
- No heavy shadows.
- No nested card styling.
- No design copy that says the site is AI-made or cloned.

### Layout

- Main content uses `--container-small: 32rem`.
- Sections use generous vertical spacing.
- Hero fills the viewport and uses the rotating diamond motif.
- Resume and verification content uses stacked editorial entries.
- Skills use divider-based rows with thin progress bars.
- Projects, certificates, and blog notes use quiet image-backed editorial tiles.

### Typography

- Font: Inter.
- Font weight: 400 throughout, matching the minimal editorial style.
- Letter spacing remains `0`.
- Font sizes are breakpoint-based, not fluid viewport scaling.
- Long text is kept narrow for readability.

## Theme System

Theme tokens live in `assets/styles.css`.

Dark theme:

- Background: `#0f0f0f`
- Text: `#d7d7d7`
- Heading/primary: `#ffffff`
- Muted text: `#bdbdbd`

Light theme:

- Background: `#f7f7f7`
- Text: `#242424`
- Heading/primary: `#0f0f0f`
- Muted text: `#4a4a4a`

The light theme was checked against rendered UI states for headings, body text, muted text, filter buttons, skills, form fields, and modal rows. Maintain contrast at WCAG AA or better for normal text.

## Interaction Design

### GSAP Motion

GSAP and ScrollTrigger are used for:

- Header and hero intro animation.
- Scroll-driven hero diamond rotation.
- Scroll-driven footer diamond rotation.
- Modal entrance animation.
- Scroll reveal animations.

Animations are intentionally quiet:

- Small upward reveal.
- Short fade.
- No aggressive per-letter animation.
- No motion that blocks content.

### Custom Cursor

Desktop pointer devices get a soft circular cursor that expands over interactive elements. It is disabled on touch-first devices.

### Mobile Behavior

- Mobile navigation uses a hamburger menu.
- Hover-dependent information is avoided.
- Cards keep their summaries visible by default.
- The certificate modal is constrained to viewport width and does not create horizontal scroll.
- Mobile reveal animations remain active unless the user prefers reduced motion.

## Accessibility

Accessibility choices include:

- Semantic headings.
- `main` landmark and skip link.
- Keyboard-focusable theme toggle, menu button, cards, filters, and form controls.
- Modal dialog attributes.
- Visible form validation messages.
- Sufficient color contrast in both themes.
- Descriptive alt text for meaningful images.
- No content hidden behind hover-only behavior on mobile.

Maintenance rule: any new section must be usable from keyboard and readable in both light and dark themes.

## SEO Implementation

SEO work currently includes:

- Descriptive title focused on `Entry-Level Civil Engineer Nepal`.
- Meta description aligned with recruiter search intent.
- Canonical URL.
- Open Graph metadata.
- Twitter summary card metadata.
- Local OG image at `assets/og-image.png`.
- Sitemap at `sitemap.xml`.
- Robots file at `robots.txt`.
- JSON-LD Person data.
- JSON-LD ProfilePage data.
- JSON-LD FAQPage data.
- Article structured data on blog pages.
- Internal links from homepage to project and blog pages.
- Blog pages targeting practical civil engineering topics.

### SEO Content Rules

- Write for recruiters first, search engines second.
- Use civil engineering keywords naturally.
- Avoid repeated keyword stuffing.
- Prefer specific long-tail search phrases over broad claims.
- Keep Samrita's claims accurate and verifiable.
- Keep blog articles related to civil engineering practice, documentation, site readiness, estimating, surveying, and fresher career readiness.

### Ranking Growth Recommendations

To improve chances of ranking over time:

- Submit `https://samrita.com.np/sitemap.xml` in Google Search Console.
- Verify the domain in Google Search Console.
- Add a real resume PDF with descriptive filename if Samrita wants public downloads.
- Add backlinks from LinkedIn, Facebook, Instagram, college profiles, GitHub, and professional directories.
- Add 3-6 more original civil engineering notes over time.
- Keep project pages detailed and specific.
- Add real project images when available.
- Keep contact details consistent across the web.

## Contact Form

The form uses FormSubmit's AJAX endpoint:

- Primary recipient: `samritamaharjan00@gmail.com`
- CC recipient: `hinischalsubba@gmail.com`

The form includes:

- Required name, email, and message fields.
- Inline validation.
- AJAX submission with success/error states.
- Honeypot spam field.

FormSubmit may require the first submission to be confirmed from the primary recipient inbox after deployment.

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

## Quality Checklist

Before publishing changes:

- Check the homepage on mobile, tablet, and desktop.
- Check both light and dark themes.
- Open certificate modals on mobile.
- Test filter buttons for certificates and projects.
- Submit an empty contact form and confirm validation appears.
- Submit a real test contact form after deployment.
- Validate JSON-LD.
- Confirm `sitemap.xml` includes new public pages.
- Confirm no private certificate identifiers are typed into public copy.
- Confirm public copy does not mention AI generation or cloning.

## Content Maintenance

When adding content:

- Prefer accurate, modest, recruiter-friendly copy.
- Use dates only when verified.
- Keep bachelor result pending until official publication.
- Add project pages for real or realistic fresher-level civil engineering work.
- Add blog pages only when they support Samrita's professional positioning.
- Keep every image near relevant text and use descriptive alt text.

## Credits

Designed and developed by [nischhalsubba.com.np](https://nischhalsubba.com.np/).
