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
  assert.equal(guide.media.firstVideo.label, "Preview");
  assert.equal(guide.media.secondVideo.label, "Preview");
  assert.match(guide.media.setupImage.alt, /Knox Signature wedding setup/i);
});

test("investment guide includes planner-friendly coverage sections", () => {
  const sectionTitles = guide.primaryOffer.sections.map((section) => section.title);

  assert.deepEqual(sectionTitles, ["Cocktail Hour", "Reception", "Planning & Coordination"]);
  assert.equal(guide.production.title, "Production & Design");
  assert.ok(guide.production.items.includes("Minimal white DJ command center"));
  assert.equal(guide.ceremony.heading, "Ala carte");
  assert.ok(guide.difference.copy.includes("not a traditional DJ company"));
});
