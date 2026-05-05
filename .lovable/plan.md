# Anjani Enterprises — Editorial Luxury Website

A spare, intentional website that frames a Jaipur-based integrated textile manufacturer as a partner for discerning global clients. Visual language borrows from luxury bridal/editorial publications: white canvas, true black typography, serif headlines, generous whitespace, slow reveals.

## Structure (Hybrid)

A long-scroll homepage that flows through every section in the brief, plus dedicated routes for depth, sharing, and SEO.

```text
/             Home — full editorial scroll (hero → about → collections →
              machinery → compliance → vision → contact)
/units        Units — Barkat Nagar (office + manufacturing) and Sanganer
              (stitching), with infrastructure detail
/capabilities Capabilities — printing mill, stitching, sampling studio,
              machinery deep-dives
/compliance   Compliance — Factory License, Fire NOC, ISO, MSME, etc.
/vision       Vision — manifesto-style page anchored on "Realizing client
              goals through innovation"
/contact      Contact — full details + inquiry form
```

Top nav (transparent sticky, thin hairline on scroll): Units · Capabilities · Compliance · Vision · Contact. Logotype left, set in Cormorant Garamond small caps.

## Visual System

- **Palette**: pure white canvas (#FFFFFF), true black (#000000) for type and rules, a single warm off-white (#FAF8F4) for alternating bands, no accent colors. Imagery carries all warmth.
- **Typography**: Cormorant Garamond for all display and section headings (light/regular weights, generous tracking on small caps eyebrows). Inter for body, captions, nav, and form UI. Strong scale contrast — oversized serif headlines against small, quiet body text.
- **Layout**: 12-column grid used asymmetrically. Sections breathe with 120–200px vertical padding on desktop. Captions and metadata sit in narrow side columns like a print magazine.
- **Imagery**: neutral, elegant placeholders sized and cropped exactly as the final shots will sit, with clearly labeled swap points so real textile and machinery photography drops in cleanly later. Images use a subtle grain overlay and slow ken-burns/parallax.
- **Motion**: fade-and-rise on scroll (600–800ms, ease-out), image cross-fades 3–4s, hairline underlines that draw on hover. No bouncy or flashy effects. Respects `prefers-reduced-motion`.

## Homepage Flow

1. **Hero** — full-viewport image well with centered serif overlay: *"Anjani Enterprises — A One-Stop Solution for Global Design & Sourcing."* Small-caps eyebrow above, thin scroll cue below.
2. **Editorial About** — split screen: tall vertical studio image left, right column with a short serif lede then Inter body copy on minimum margins, long-term partnerships, integrated capabilities. A pull-quote anchors the column.
3. **Collections (3×3 grid)** — labeled "Collections" not "Products":
   - Integrated Printing Mill (dyeing, screen, block, digital)
   - Stitching Units (50-person capacity, Sanganer + Barkat Nagar)
   - Sampling Studio (design + prototyping)
   - Six additional tiles for specialized machinery and workflow shots
   Each tile: image, serif title, single-line Inter caption, hover reveals a thin "View" link.
4. **Technical Specifications** — minimalist row of machinery cards: Jumbo Zegger, Lopager, Digital Printing systems, Spectra Light Box. Clean line-icon or product-shot treatment, short spec list, framed as precision instruments.
5. **Compliance Strip** — slim horizontal band on off-white: Factory License · Fire NOC · ISO · MSME, each as a small mark with label. Quiet, confident, not corporate.
6. **Vision Anchor** — full-bleed black section, white Cormorant in oversized weight: *"Realizing client goals through innovation."* Single line of Inter attribution beneath.
7. **Contact** — left column with Mr. Himanshu Sharma, mobile 8290477917, Jaipur address; right column hosts the inquiry form.

## Contact Inquiry Form

Minimal form (Lovable Cloud handles storage):
- Fields: Name, Company, Email, Phone (optional), Message.
- Underline-only inputs, serif labels, generous spacing.
- Zod validation client + server (trim, length caps, email format).
- Submissions stored in a `contact_inquiries` table with RLS; only admins can read.
- Success state replaces the form with a quiet serif acknowledgement.
- Optional: email notification to Mr. Sharma via a server function (can be enabled once an email provider is connected).

## Responsive Behavior

- Desktop ≥1280px: full asymmetric grid, oversized type.
- Tablet: grid collapses to 2 columns, hero text scales down a step, side captions move below.
- Mobile: single column, sections stack with preserved 80–100px breathing room, nav becomes a thin top bar with a serif "Menu" toggle opening a full-screen overlay.

## Technical Notes

- TanStack Start file-based routes per section above; each route ships its own `head()` with unique title, description, og:title, og:description.
- Smooth scroll + scroll restoration enabled; in-page anchors used only for the homepage section jumps.
- Intersection-observer based reveal hook for fade-rise; centralized so timing stays consistent.
- Image components reserve aspect-ratio boxes to prevent layout shift and make swapping real photography trivial.
- Form backed by Lovable Cloud (Supabase): `contact_inquiries` table, RLS denying public reads, insert allowed for anon, admin role for reads.
- Fonts loaded via Google Fonts (Cormorant Garamond + Inter) with `font-display: swap`.
- No third-party analytics or trackers in this scope.

## Out of Scope (for now)

- Real photography (placeholders with swap points are provided).
- CMS for editing copy (content lives in route files; easy to lift later).
- Multilingual content.
- Email delivery integration (table capture only unless an email provider is connected).
