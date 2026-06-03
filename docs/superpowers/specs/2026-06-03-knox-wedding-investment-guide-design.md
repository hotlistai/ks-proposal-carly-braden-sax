# Knox Wedding Investment Guide Design

Date: 2026-06-03

## Goal

Build a simple, static, public Knox Signature wedding investment guide for planners, couples, and referral partners. The guide should live at `details.knoxsignature.com`, preserve the final Knox proposal aesthetic, and make pricing easier to understand without feeling like a generic price sheet.

## Approved Direction

Use the existing Knox proposal lineage as the base direction:

- Full-width Knox banner first.
- Dark editorial page shell.
- Large direct hero headline.
- Restrained section labels with uppercase letter-spaced metadata.
- Modular content blocks with thin borders, subtle translucent surfaces, and strong negative space.
- Video breaks that show the actual Knox experience.
- A clear investment block with price hierarchy borrowed from the compact price-sheet concept.
- Practical section order for planners and couples, without adding sidebar navigation.

## Audience

Primary audience:

- Wedding planners checking whether Knox fits a client brief.
- Engaged couples reviewing the baseline investment before a call.
- Referral partners who need a clean public link.

The page should feel premium and specific enough for couples, but practical enough that planners can scan coverage, inclusions, ceremony add-on details, logistics notes, and the call CTA quickly.

## Content Structure

The static page should use this order:

1. Knox banner.
2. Hero: `KNOX SIGNATURE` and `WEDDING INVESTMENT GUIDE`.
3. Intro copy explaining that Knox Signature is a luxury hybrid live music and DJ experience.
4. First video: use the `Man I Need` video as the first media moment.
5. Snapshot cards:
   - Starting investment: `$5,950`.
   - Typical range: `$5,950-$9,500`.
   - Core format: cocktail hour + reception.
   - Ceremony add-on: `$1,450`.
6. `The Full Atmosphere` pricing section for Cocktail Hour + Reception.
7. Practical inclusion groups:
   - Cocktail Hour.
   - Reception.
   - Production & Design.
   - Planning & Coordination.
8. Setup image: use the Knox setup wedding picture as a production/design break.
9. `Ceremony Coverage` add-on section.
10. Second video: use Ben wedding video as the second media moment.
11. `What Makes Knox Different`.
12. `Investment Notes`.
13. `Next Steps` CTA linking to `https://cal.com/knoxsignature/atmospherereviewcall`.

## Media

Use existing Knox proposal media where possible.

- First video: `Man I Need`.
- Second video: Ben wedding video.
- Setup image: Knox setup wedding picture.
- Banner image: existing `https://www.knoxsignature.com/images/knox-press-banner.png`.

If a requested local media file is not present, use the existing hosted Knox proposal media URLs already in the repo and keep the file paths explicit in code so they can be swapped later.

## Visual Requirements

- Keep the dark Knox page language from the approved proposals.
- Avoid rounded marketing-card styling; use hard edges and thin borders.
- Use clear price hierarchy: offer name, starting amount, short descriptor, grouped inclusions.
- Keep text readable on mobile and desktop.
- Use real media assets; no abstract placeholder hero graphics.
- Keep the page static and fast.
- Do not add login, portal behavior, forms, checkout, or private proposal tokens.

## Technical Approach

Use the existing `ks-proposal-carly-braden-sax` Next.js repo as the fastest route because it already contains the approved proposal visual language, Knox media patterns, Vercel setup expectations, and public proposal metadata structure.

Implementation should:

- Add a reusable investment-guide data/content module.
- Add a focused investment-guide page component.
- Point the root page at the investment guide for this deployment.
- Update metadata for `details.knoxsignature.com`.
- Keep existing sax/proposal components available unless removing them is required for build correctness.
- Verify with lint, build, and browser screenshots.

## Deployment

Target public URL:

- `https://details.knoxsignature.com`

Fastest deployment path:

- Deploy the repo to Vercel production.
- Alias the production deployment to `details.knoxsignature.com`.

If Vercel cannot attach the domain because DNS is missing or controlled elsewhere, create or identify the required DNS record and report the exact blocker.

## Non-Goals

- No custom CMS.
- No planner login.
- No payment collection.
- No per-couple personalization.
- No separate app shell or operator dashboard.
- No sidebar navigation.

## Acceptance Criteria

- The page presents all provided investment-guide content.
- The visual direction clearly matches the existing Knox proposal lineage.
- The pricing hierarchy is easy to scan.
- The requested media appears in the intended order.
- The Atmosphere Review Call CTA links to the provided Cal.com URL.
- The app passes lint/build checks.
- The live target or deployment blocker is clearly verified.
