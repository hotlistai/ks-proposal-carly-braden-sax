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
