# Knox Wedding Investment Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build and deploy a static Knox Signature wedding investment guide at `details.knoxsignature.com`.

**Architecture:** Use the existing Next.js proposal repo and replace the root page with a focused public investment-guide component. Store guide copy, pricing, media URLs, and CTA details in one JSON content file, then render it with the existing Knox dark editorial visual language.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS v4, Node built-in test runner, Vercel.

---

## File Structure

- Create: `content/investment-guide.json` - single content contract for copy, prices, media, and CTA.
- Create: `tests/investment-guide-content.test.mjs` - Node test that verifies required public-guide content exists.
- Create: `components/investment-guide/investment-guide-page.tsx` - presentational page component.
- Modify: `app/page.tsx` - render the investment guide.
- Modify: `app/layout.tsx` - update metadata and metadata base for `details.knoxsignature.com`.
- Modify: `package.json` - add `npm test` script using `node --test`.
- Modify: `.gitignore` - ignore `.superpowers/` brainstorm scratch files.

## Task 1: Content Contract Test

**Files:**
- Create: `tests/investment-guide-content.test.mjs`
- Modify: `package.json`

- [x] **Step 1: Write the failing content-contract test**

Create `tests/investment-guide-content.test.mjs`:

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const guide = JSON.parse(
  await readFile(new URL("../content/investment-guide.json", import.meta.url), "utf8")
);

test("investment guide includes required pricing and CTA details", () => {
  assert.equal(guide.brand, "KNOX SIGNATURE");
  assert.equal(guide.title, "WEDDING INVESTMENT GUIDE");
  assert.equal(guide.primaryOffer.startingAt, "$5,950");
  assert.equal(guide.ceremony.addOnInvestment, "$1,450");
  assert.match(guide.investmentNotes, /\$5,950 and \$9,500/);
  assert.equal(guide.cta.href, "https://cal.com/knoxsignature/atmospherereviewcall");
});

test("investment guide includes the requested media sequence", () => {
  assert.match(guide.media.firstVideo.label, /Man I Need/i);
  assert.match(guide.media.secondVideo.label, /Ben wedding video/i);
  assert.match(guide.media.setupImage.alt, /Knox Signature wedding setup/i);
});

test("investment guide includes planner-friendly coverage sections", () => {
  const sectionTitles = guide.primaryOffer.sections.map((section) => section.title);
  assert.deepEqual(sectionTitles, [
    "Cocktail Hour",
    "Reception",
    "Production & Design",
    "Planning & Coordination",
  ]);
  assert.ok(guide.difference.copy.includes("not a traditional DJ company"));
});
```

Update `package.json` scripts:

```json
"test": "node --test"
```

- [x] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: fails because `content/investment-guide.json` does not exist yet.

## Task 2: Guide Content Data

**Files:**
- Create: `content/investment-guide.json`

- [x] **Step 1: Write the content data**

Create `content/investment-guide.json` with the user-provided copy, requested pricing, and media URLs:

```json
{
  "brand": "KNOX SIGNATURE",
  "title": "WEDDING INVESTMENT GUIDE",
  "intro": [
    "Knox Signature is a luxury hybrid live music and DJ experience designed to shape the atmosphere of your wedding from the first arrival to the final song.",
    "Every event is custom tailored to the venue, timeline, and vision for the day, but the information below provides a starting point for most celebrations."
  ],
  "media": {
    "bannerImage": {
      "src": "https://www.knoxsignature.com/images/knox-press-banner.png",
      "alt": "Knox Signature"
    },
    "firstVideo": {
      "label": "Man I Need video",
      "src": "https://blog.hotlistdigital.com/wp-content/uploads/2026/01/copy_BF7A718B-4926-4B53-AD03-6D3BC8DB232F_2.mp4",
      "poster": "/videos/carly-braden-man-i-need-poster.jpg"
    },
    "setupImage": {
      "src": "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/Images/knox-signature-set-1.png",
      "alt": "Knox Signature wedding setup with white DJ command center and architectural lighting"
    },
    "secondVideo": {
      "label": "Ben wedding video",
      "src": "https://blog.hotlistdigital.com/wp-content/uploads/2026/05/WeddingReception-1.mov",
      "poster": "/videos/victoria-aaron-wedding-reception-poster.jpg"
    }
  },
  "snapshots": [
    { "label": "Starting Investment", "value": "$5,950" },
    { "label": "Typical Range", "value": "$5,950-$9,500" },
    { "label": "Core Format", "value": "Cocktail Hour + Reception" },
    { "label": "Ceremony Add-On", "value": "$1,450" }
  ],
  "primaryOffer": {
    "eyebrow": "The Full Atmosphere",
    "title": "Cocktail Hour + Reception",
    "startingAt": "$5,950",
    "sections": [
      {
        "title": "Cocktail Hour",
        "items": [
          "Live piano and saxophone performance",
          "A welcoming, elevated atmosphere as guests arrive",
          "Thoughtful live music designed to feel social, memorable, and refined"
        ]
      },
      {
        "title": "Reception",
        "items": [
          "DJ-led reception with live saxophone integration",
          "Emcee coverage for introductions, announcements, and key moments",
          "Music direction for dinner, transitions, and dance floor",
          "Live saxophone integration throughout the evening"
        ]
      },
      {
        "title": "Production & Design",
        "items": [
          "Minimal white DJ command center",
          "Premium column-array sound system",
          "Architectural atmospheric lighting",
          "Wireless microphones for speeches and toasts",
          "Digital mixing for clarity and control"
        ]
      },
      {
        "title": "Planning & Coordination",
        "items": [
          "Site visit prior to the wedding day",
          "Music planning session",
          "Access to the Knox Signature Planning Portal"
        ]
      }
    ]
  },
  "ceremony": {
    "title": "Ceremony Coverage",
    "addOnInvestment": "$1,450",
    "items": [
      "Wireless speaker coverage",
      "Wireless lapel microphone for officiant",
      "Wireless lapel microphone for groom",
      "Recorded ceremony music and cueing",
      "Optional live saxophone accents for select moments",
      "Dedicated ceremony technician",
      "Clean, discreet ceremony setup"
    ]
  },
  "difference": {
    "title": "What Makes Knox Different",
    "copy": "We are not a traditional DJ company. Knox Signature blends live saxophone, live piano, and curated DJ performance into a single, cohesive experience designed around flow, energy, and intentional pacing. Our focus is not on oversized production or unnecessary extras. It is on creating an atmosphere that feels effortless, elevated, and memorable."
  },
  "investmentNotes": "Most Knox Signature weddings fall between $5,950 and $9,500 depending on ceremony coverage, venue logistics, multiple locations, travel, and event duration.",
  "cta": {
    "title": "Next Steps",
    "copy": "If this feels aligned with your vision, we'd love to learn more about your wedding. Schedule a quick Atmosphere Review Call and we'll walk through your venue, timeline, and goals for the day.",
    "label": "Schedule an Atmosphere Review Call",
    "href": "https://cal.com/knoxsignature/atmospherereviewcall"
  }
}
```

- [x] **Step 2: Run test to verify it passes**

Run: `npm test`

Expected: all content-contract tests pass.

## Task 3: Investment Guide Component

**Files:**
- Create: `components/investment-guide/investment-guide-page.tsx`
- Modify: `app/page.tsx`

- [x] **Step 1: Build the page component**

Create `components/investment-guide/investment-guide-page.tsx` using the content JSON and the same dark Knox design language:

```tsx
import Image from "next/image";
import guide from "@/content/investment-guide.json";

type GuideSection = {
  title: string;
  items: string[];
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}>
      {children}
    </p>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item} className="relative mb-3 pl-7 text-[15px] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          <span className="absolute left-0" style={{ color: "rgba(255,255,255,0.25)" }}>{"-"}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function GuideVideo({ label, src, poster }: { label: string; src: string; poster?: string }) {
  const isMov = src.toLowerCase().endsWith(".mov");
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <video className="block w-full bg-black" controls playsInline preload="metadata" poster={poster}>
        <source src={src} type={isMov ? "video/quicktime" : "video/mp4"} />
        {isMov ? <source src={src} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function InvestmentGuidePage() {
  return (
    <main>
      <Image src={guide.media.bannerImage.src} alt={guide.media.bannerImage.alt} width={1920} height={600} priority className="block h-auto w-full" />
      <section className="mx-auto max-w-[1040px] px-9 pb-10 pt-20 md:px-[72px]">
        <p className="mb-4 text-[10px] font-semibold uppercase" style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}>{guide.brand}</p>
        <h1 className="text-balance font-extrabold" style={{ fontSize: "clamp(38px, 6vw, 68px)", letterSpacing: "-0.045em", lineHeight: 0.96, color: "#fff" }}>{guide.title}</h1>
        <div className="mt-7 max-w-[66ch] space-y-5 font-light" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
          {guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
    </main>
  );
}
```

Then complete the component with the remaining sections from the content file and update `app/page.tsx`:

```tsx
import { InvestmentGuidePage } from "@/components/investment-guide/investment-guide-page";

export default function Page() {
  return <InvestmentGuidePage />;
}
```

- [x] **Step 2: Run lint and build**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass.

## Task 4: Metadata and Verification

**Files:**
- Modify: `app/layout.tsx`

- [x] **Step 1: Update metadata**

Set metadata base to `https://details.knoxsignature.com`, title to `Knox Signature Wedding Investment Guide`, and description to the static guide positioning.

- [x] **Step 2: Run all verification**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all pass.

- [x] **Step 3: Start local dev server and inspect**

Run:

```bash
npm run dev
```

Open the local URL in the in-app browser and verify:

- Knox banner appears first.
- First video appears before pricing.
- Setup image appears before ceremony add-on.
- Second video appears before the differentiation section.
- CTA points to the Cal.com URL.
- Desktop and mobile layouts do not overlap.

## Task 5: Deploy and Alias

**Files:**
- No source files expected unless Vercel config requires it.

- [x] **Step 1: Deploy to Vercel production**

Run:

```bash
npx vercel deploy --prod --yes
```

Expected: Vercel returns a production deployment URL.

- [x] **Step 2: Attach alias**

Run:

```bash
npx vercel alias set <deployment-url> details.knoxsignature.com
```

Expected: alias succeeds, or Vercel reports an actionable DNS/domain ownership blocker.

- [x] **Step 3: Verify live URL**

Run:

```bash
curl -I https://details.knoxsignature.com
```

Expected: HTTP 200 or a clearly identified propagation/blocker status.
