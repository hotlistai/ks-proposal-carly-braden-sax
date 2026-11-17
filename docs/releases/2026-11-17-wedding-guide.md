# Wedding investment guide, November 17, 2026

## Scope

Redesigned details.knoxsignature.com as an extension of pr.knoxsignature.com for planners and couples seeking starting prices before a consultation. Uses the PR source's Iowan Old Style / Baskerville / Times New Roman display stack, Helvetica Neue / Helvetica / Arial body stack, #090909 and #f3f1eb palette, label tracking, editorial spacing and offset italic headings. The hero still comes from the PR collection poster. Existing performance videos and production photo are retained.

Pricing preserves the current live correction in base commit 5691c8c: Signature starts at $5,500 for cocktail hour plus up to four reception hours; ceremony coverage remains $750. Requested additions are violin at $850 for ceremony only or $1,200 for the full night, and drums starting at $1,200. Violin is the Lux enhancement. An email inquiry is primary, with the existing consultation link available as an option.

## Release

- Source branch: hotlist/details-pr-style-20261117
- Deployment: dpl_DNDSJC3YXig2zgeVgcQVnrudNLq1
- Host: https://details.knoxsignature.com
- Hosted build: https://ks-proposal-carly-braden-ed8b7rczs-hotlist-ai.vercel.app
- Previous host deployment, retained for rollback: dpl_2t9HYTG3WiGVhmSDwFqjMwV9Jk77
- The existing project serves multiple historical proposals. This release binds only the details hostname to the verified isolated deployment. The custom alias remains manually pinned, as before.

## Verification

- npm test: all four existing content tests pass.
- npm run build: passes.
- npx tsc --noEmit --incremental false: passes independently of the inherited build setting that skips type checking.
- npm run lint and git diff --check: pass.
- Browser checks at 1440px, 390px and 320px: matching computed heading/body fonts and no horizontal overflow at checked phone widths.
- Both videos decode and advance playback; both images load after the lazy image enters the viewport.
- Public HTTPS and emitted styles checked against the hosted preview, including all requested prices and inquiry links.
- npm audit reports 25 existing dependency findings (7 moderate, 17 high, 1 critical). Dependency manifests and lockfile were not changed by this design update. Remediation is outside this change.

No client portal records or PR page source were modified. No inquiry messages were sent.

## Owner revisions, November 17

- Restored the exact hero tagline: Luxury Sax + DJ Atmospheres.
- Changed Explore the investment to a filled oval button with no rectangular outline.
- Highlighted Signature as its own starting-point block with Saxophone + DJ and its coverage, followed by a separate add-on list.
- Changed ceremony to $950 everywhere in the guide and full-night violin to $1,500. Ceremony-only violin remains $850, drums from $1,200, Signature from $5,500.
- Removed Lux/Ultra package terminology from visible guide copy; violin and drums are straightforward enhancements. Drums are identified as reception coverage.
- Added the exact owner-supplied knox-violin.jpeg and knox-drum.jpg, with both original compositions intact. Public file bytes match the supplied files.
- Changed the inquiry CTA to https://www.knoxsignature.com/request?cta_source=wedding-investment-guide. Verified that the existing occasion-selection funnel loads. No submission was made, and HoneyBook integration remains deferred by the owner.
- No password added. The hero photo remains the existing collection poster while the owner selects a replacement; the draft duo-photo replacement was removed before publication.
- Deployment: dpl_C9tqu84PuYLCwFWJi7nfnrxmPaqo, https://ks-proposal-carly-braden-a6gg7op3z-hotlist-ai.vercel.app. Previous custom-host deployment: dpl_DNDSJC3YXig2zgeVgcQVnrudNLq1.
- Hosted build Ready; existing content tests pass with updated ceremony expectations. Desktop 1440px and mobile 390px visual review passed, including all images, the separated Signature summary, the oval button and pricing. Dependency audit findings remain unchanged.

### Footer button cleanup

Removed the diagonal arrow glyph from both footer CTAs at the owner's request. Both labels are now text-only, with the existing inquiry funnel and call links preserved. Deployment dpl_ChfmcF6SShTxAwkiYP4UtRmTPfYP is bound to details.knoxsignature.com. Hosted build and content checks passed.

### Final hero photo

Replaced the collection poster with the owner's supplied Monochrome Jazz Duo with Saxophone.png. The deployed phil-ben-hero.png preserves the supplied bytes. Added phone-specific framing to retain both duo members and fade into the existing dark hero background. Desktop 1440px and phone 390px screenshots verified. Deployment dpl_71sqLahSBNhsiPqJj2Cgwon3Uh9U is bound to details.knoxsignature.com; prior deployment was dpl_ChfmcF6SShTxAwkiYP4UtRmTPfYP. Hero photo selection is complete.
