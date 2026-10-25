# HiveGrid dependency security update — October 25, 2026

Scope: development branch `lucy/approved-brand-alignment`, based on `8d6ccbe`.
Production remains unauthorized. This change does not merge or promote production.

## Changes

- Upgrade Next.js 14.2.0 to 15.5.28, the patched Maintenance LTS version identified in the October 14, 2026 upstream advisory.
- Upgrade React and React DOM together to 19.3.1 for the App Router upgrade.
- Align eslint-config-next to 15.5.28.
- Pin PostCSS 8.5.31 and Tailwind CSS 3.4.19. Preserve Tailwind 3 configuration and styling.
- Override nested PostCSS to the same patched version and selector-parser to the patched 7.1.x line. The lockfile resolves selector-parser 7.1.7 and Sharp 0.35.5.
- Remove the obsolete `swcMinify` Next.js configuration option.
- Add package-lock.json to preserve the audited dependency graph. Use `npm ci` for repeatable installation.

## Evidence

- `npm audit --json`: zero vulnerabilities across production and development dependencies.
- `npm audit --omit=dev --json`: zero production dependency vulnerabilities.
- A clean `npm ci --ignore-scripts --no-audit --no-fund` install passed.
- Next.js production build passed from that clean install for `/`, `/portal`, `/energy-calculator` and the generated not-found route.
- Eleven Chromium/Playwright regression groups passed; see the adjacent log and `qa/security-regression.cjs`.
- Six isolated contact-response cases passed: boolean/string success, rejected response, HTTP failure, missing success property and invalid JSON.
- No live form submissions or emails were sent. Browser contact tests intercepted the provider request.

Browser tests cover the homepage, footer, logo, headline color, keyboard skip link, mobile menu and Escape focus restoration, document width, reduced-motion animation, contact success/error behavior, invalid gate code, both valid demo/work codes, session persistence, role views, sample creation/reset and locking, archived calculator and absence of page JavaScript errors. External font requests were blocked in the browser test; external-font loading and visual typography are not certified by this run.

Run the browser regression against a local `npm run start -- --port 3100` server. Provide a compatible Chromium path via `CHROMIUM_EXECUTABLE` and a Playwright installation through Node module resolution, then run `node qa/security-regression.cjs`. `QA_BASE_URL` can override the local URL. Browser tooling is not included as a website runtime dependency.

## Preserved scope and limits

Website content, approved branding and footer, and the fictional-data portal remain unchanged. Both existing demo/work access codes remain. These codes are demonstration gates, not secure authentication for private/customer information. Sandra explicitly approved retention of this demo scope.

A zero audit result means no known advisories were reported for this dependency graph at check time; it is not a penetration test or a guarantee against future findings. Full accessibility/contrast review, hosted-environment checks, actual inbox delivery and Outlook signature verification remain separate release tasks. This update closes the dependency-remediation item only.

## Primary references

- https://nextjs.org/blog/nextjs-security-update-october-14-2026
- https://nextjs.org/docs/app/guides/upgrading/version-15
- https://github.com/advisories/GHSA-rj75-hqrm-r3gf
