import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const guide = JSON.parse(
  await readFile(new URL("../content/investment-guide.json", import.meta.url), "utf8")
);

test("investment guide includes required pricing and CTA details", () => {
  assert.equal(guide.brand, "KNOX SIGNATURE");
  assert.equal(guide.title, "WEDDING INVESTMENT GUIDE");
  assert.equal(guide.primaryOffer.startingAt, "$5,500");
  assert.equal(guide.snapshots.find((snapshot) => snapshot.label === "Typical Range")?.value, "$5,500-$8,950");
  assert.equal(guide.snapshots.find((snapshot) => snapshot.label === "Ceremony Add-On")?.value, "$750");
  assert.equal(guide.ceremony.addOnInvestment, "$750");
  assert.match(guide.investmentNotes, /\$5,500 and \$8,950/);
  assert.equal(guide.cta.href, "https://cal.com/knoxsignature/atmospherereviewcall");
});

test("investment guide CTA small copy avoids repeating the headline", () => {
  assert.equal(
    guide.cta.copy,
    "Schedule a quick Atmosphere Review Call and we'll walk through your venue, timeline, and goals for the day."
  );
  assert.doesNotMatch(guide.cta.copy, /If this feels aligned/i);
});

test("investment guide includes the requested media sequence", () => {
  assert.equal(guide.media.firstVideo.label, "Preview");
  assert.equal(guide.media.secondVideo.label, "Preview");
  assert.equal(
    guide.media.secondVideo.src,
    "https://blog.hotlistdigital.com/wp-content/uploads/2026/07/NewestWeddingAd.mov"
  );
  assert.equal(guide.media.secondVideo.poster, "/videos/main-knox-video-poster.jpg");
  assert.equal(guide.media.secondVideo.glassPreview, true);
  assert.match(guide.media.setupImage.alt, /Knox Signature wedding setup/i);
});

test("investment guide includes planner-friendly coverage sections", () => {
  const sectionTitles = guide.primaryOffer.sections.map((section) => section.title);

  assert.deepEqual(sectionTitles, [
    "Cocktail Hour",
    "Reception",
    "Planning & Coordination",
    "Production & Design",
  ]);
  const production = guide.primaryOffer.sections.find((section) => section.title === "Production & Design");
  assert.ok(production.items.includes("Minimal white DJ command center"));
  assert.equal(guide.ceremony.heading, "Ceremony Coverage");
  assert.ok(guide.difference.copy.includes("not a traditional DJ company"));
});
