# Security Audit — Lumen landing page

- **Scope:** `main` (head `d91c958`), all 47 commits of git history, `npm audit` against `package-lock.json`.
- **Method:** static review only. No live endpoint was called, no deployment or setting was inspected.
- **Context:** the repository is public, so everything in the tree and its history is readable by anyone.
- **What the app is:** a single client-rendered Next.js 16 page (`app/page.tsx`), with four locales, a cookie banner and local images. It has **no forms, no API or route handlers, no server actions, no serverless functions, no paid or AI calls, no environment variables and no third-party scripts.** The attack surface is very small.

## Summary

| ID | Severity | Finding | Status |
|----|----------|---------|--------|
| M1 | Medium | `next@16.3.7` is covered by six published advisories, fixed in 16.3.8 | Recommendation |
| L1 | Low | CSP allows `'unsafe-inline'` and `'unsafe-eval'` scripts and lacks `frame-ancestors`, `object-src`, `base-uri` and `form-action` | Recommendation |
| L2 | Low | Preconnect to Google Fonts sends every visitor's IP address to Google even though the fonts are self-hosted | Recommendation |
| L3 | Low | Committed build and test logs reveal the developer workstation's local paths and project layout | Recommendation |
| L4 | Low | Build-time dev dependencies have known DoS and file-read advisories | Recommendation |
| L5 | Low | Privacy, Imprint and Contact links are empty (`#`), and the cookie banner doesn't match what the site stores | Recommendation |
| I1 | Info | No HSTS header is set in the app config | Verify on host |
| I2 | Info | The Playwright suite targets the production domain | Note |
| I3 | Info | Internal material (AI video prompt, audit output) is in the public repo | Note |

There are **no Critical or High findings** that apply to this codebase. This PR therefore contains only this report.

---

## M1 — `next@16.3.7` is covered by six published advisories (Medium)

**Where:** `package.json:14` (`"next": "16.3.7"`) and `package-lock.json`.

`npm audit` reports these advisories for `next >=16.0.0 <16.3.8`:

| Advisory | npm severity | Applies here? |
|---|---|---|
| GHSA-cjq9-62q9-8jv4: SSRF in Image Optimization | High | **No.** The advisory states that apps without `images.remotePatterns` are not affected, and `next.config.ts` has none. |
| GHSA-4jqv-mc3x-m676, GHSA-mcj8-r9mp-w47p: SSG/ISR cache poisoning | Moderate | Only when self-hosted with `next start`. This is not reachable on a managed host such as Vercel, where `.vercel` is gitignored. |
| GHSA-f87g-xv8r-7p7x: metadata image routes info disclosure | Moderate | No. The app has no `opengraph-image` or `icon` route files. |
| GHSA-3w37-wq28-93x7: `use cache` leaks Draft Mode content | Moderate | No. The app uses neither `use cache` nor Draft Mode. |
| GHSA-39w2-rjm5-chcv: dev-server MCP endpoint info disclosure | Low | Only while `next dev` runs on a reachable network interface. |

**Exploit scenario:** none is reachable with the current configuration. The risk is latent. If someone later adds `images.remotePatterns` for a CDN, an attacker could use `/_next/image?url=…` to make the server fetch internal addresses (DNS-rebinding SSRF). If someone moves the site to a self-hosted `next start`, the cache-poisoning advisories would apply.

**Fix:** bump to `next@16.3.8`, a patch release, or to the current `16.4.x`. Use `npm install next@16.3.8`, then run `npm run build` and smoke-test the page. The bump was left out of this PR because none of the advisories applies, and the brief limits fixes to Critical/High findings.

## L1 — Weak Content-Security-Policy (Low)

**Where:** `next.config.ts:25-28`.

```
script-src 'self' 'unsafe-inline' 'unsafe-eval'
```

**Exploit scenario:** today there is no injection sink. The only `dangerouslySetInnerHTML` uses are the static JSON-LD constants at `app/layout.tsx:202-214`, and the translations are static. If a future change renders attacker-influenced HTML (a CMS field, a query parameter, a third-party embed), this CSP would not stop an inline `<script>` or an `eval`. As a result, an XSS would run with full page privileges. In addition, there is no `object-src 'none'`, `base-uri 'self'` or `form-action 'self'`. An injected `<base href>` could therefore re-point every relative script URL.

**Fix (recommendation):**
1. Drop `'unsafe-eval'` in production builds, since Next only needs it in dev.
2. Add `object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests`. `frame-ancestors` supersedes the existing `X-Frame-Options: DENY`.
3. Longer term, remove `'unsafe-inline'` by using a nonce-based CSP set in `proxy.ts`, which is the Next 16 name for middleware. Follow `node_modules/next/dist/docs/` for the CSP guide. This makes the page dynamically rendered, so measure the change before shipping it.
4. Remove `https://fonts.googleapis.com` and `https://fonts.gstatic.com`, because `next/font` self-hosts the fonts (see L2).

Test in a preview deployment before shipping, because a CSP mistake blanks the page.

## L2 — Google Fonts preconnect discloses visitor IPs (Low, privacy)

**Where:** `app/layout.tsx:216-217`.

The fonts are loaded with `next/font/google` (`app/layout.tsx:2-20`), which downloads them at build time and serves them from the site's own origin. The two `<link rel="preconnect">` tags are therefore leftovers. Their only effect is that every visitor's browser opens a TLS connection to Google servers, which reveals the visitor's IP address.

**Exploit scenario:** this is not an attack but a compliance exposure. For an EU (Hungarian) business, an unconsented transfer of visitor IPs to Google is the pattern behind the 2022 Munich Regional Court Google Fonts ruling and the wave of demand letters that followed.

**Fix:** delete the two preconnect lines and the Google entries in the CSP. The page looks the same.

## L3 — Workstation paths and tool output committed (Low, information disclosure)

**Where:** the following files are in the current tree and in history:
- `build-log.txt`, `build-log3.txt`, `build-output.txt`, `build-stderr2.txt`
- `audit-pass.txt`, `audit-results.txt`, `audit-full.txt`
- `test-results/…`
- `audit-screenshots/`

The build logs contain the absolute local path of the developer workstation, including drive letter, a parent monorepo name and a `temp` working folder, plus its lockfile layout.

**Exploit scenario:** a reader learns the developer's local directory structure and internal project naming. That information helps targeted phishing or social engineering, for example "your mcp-… build is failing". It is low impact on its own.

**Fix:** `git rm` these files, and add `build-*.txt`, `audit-*.txt`, `test-output.txt`, `test-results/`, `playwright-report/` and `audit-screenshots/` to `.gitignore`. A history rewrite is not worth it for this content.

## L4 — Vulnerable transitive dev dependencies (Low)

**Where:** `package-lock.json`. These come in through `eslint`, `eslint-config-next`, `tailwindcss` and the build toolchain:

| Package | Severity | Advisories |
|---|---|---|
| `brace-expansion` | High | ReDoS / DoS |
| `braces`, `micromatch`, `fast-glob` | High | Stack exhaustion |
| `js-yaml` | High | Quadratic CPU |
| `browserslist` | High | OOM / prototype write from a malicious stats file |
| `source-map-js` | High | Event-loop DoS |
| `@humanfs/node` | Moderate | Symlink copy |
| `baseline-browser-mapping` | Moderate | — |
| `@babel/core` | Low | File read via `sourceMappingURL` |

**Exploit scenario:** each of these needs attacker-controlled input (glob patterns, YAML, source maps, a browserslist stats file) on the build or lint machine. None of it ships to visitors, so the realistic impact is a slow or crashed local or CI build.

**Fix:** run `npm audit fix` (not `--force`) and rebuild. Also align `eslint-config-next` (`package.json:24`, pinned at `16.2.1`) with `next`. Ignore npm's suggested "fix" for it, which is a downgrade to 14.2.35.

## L5 — Missing legal pages, and a cookie banner that doesn't match reality (Low, compliance)

**Where:** `app/page.tsx:333-341`. The Imprint, Privacy and Contact links point to `href="#"`. The cookie banner is in `components/CookieConsent.tsx`.

**Exploit scenario:** this is not a technical exploit. A Hungarian commercial site needs an imprint (Ekertv. §4) and a privacy notice (GDPR Art. 13). The banner says the site "uses cookies", but the site sets no cookies. It stores only `lumen-locale` and `lumen-cookies` in `localStorage`, and the "Decline" choice changes nothing. That inconsistency can draw consumer-protection or data-protection complaints.

**Fix:** this is a content decision for the owner. Publish the imprint and privacy notice and link them. Then either reword the banner to describe what is actually stored, or drop it, because purely functional storage needs no consent. This was not changed here because it would alter the page's content.

## I1 — No HSTS in app config (Info)

**Where:** `next.config.ts:12-29`. The config doesn't set `Strict-Transport-Security`. Vercel adds HSTS automatically on its domains, but this static review couldn't confirm that the production host does. Check it once in the browser's response headers. If the header is missing, add `max-age=63072000; includeSubDomains; preload`.

## I2 — Tests run against production (Info)

**Where:** `playwright.config.ts:11` and `test-audit.spec.ts:7`. Every `npx playwright test` run sends about 40 sessions to the live site with `retries: 1`. That is harmless at this scale, but it skews analytics and is risky if tests ever submit data. Read the base URL from an environment variable that defaults to `http://localhost:3000`.

## I3 — Internal material in the public repo (Info)

`THE_WHISPER_PROMPT.md` (the AI video prompt) and the audit and test outputs are public. They contain no secrets or personal data beyond the owner's own commit name. Commit e-mails are GitHub `noreply` addresses. Move anything the brand owner considers confidential to a private repo.

---

## Checked and found sound

- **Secrets, current tree:** no API keys, tokens, private keys or connection strings.
- **Secrets, history:** all 47 commits were scanned, including deleted files (`app/page.tsx.bak` and `test-results/*`). Nothing found for AWS, OpenAI/Anthropic-style `sk-`, GitHub, Slack, Google, Resend, SendGrid, PEM, or generic `key`/`secret`/`password`/`token` assignments.
- **Env files:** `.env*` is gitignored, and no env file was ever committed.
- **Client-side exposure:** there are no `process.env` or `NEXT_PUBLIC_*` references, so nothing secret can reach the bundle.
- **Forms, API and serverless:** there are no `app/api` or `route.ts` route handlers, no server actions, no `<form>` elements and no `fetch` calls. There is nothing to flood, spam or bill, and no AI or other paid API calls.
- **Third-party scripts and embeds:** none (no analytics, tag managers, iframes or external `<script>`). The only external references are the L2 preconnects.
- **XSS sinks:** `dangerouslySetInnerHTML` is used only for `JSON.stringify` of static constants (`app/layout.tsx:202-214`), and every other text is rendered through React escaping.
- **localStorage:** the stored locale is validated against an allow-list before use (`lib/LanguageContext.tsx:24-28`). The consent value is only checked for presence.
- **Images:** all 90 image blobs in the tree and history were checked. None has EXIF GPS or camera metadata.
- **Image optimizer:** only local `/public` images are used, and there is no `remotePatterns`, so it can't be abused as an open proxy.
- **Links:** there are no external `target="_blank"` links, so there is no reverse-tabnabbing risk.
- **Headers:** `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` and a restrictive `Permissions-Policy` are set, and `poweredByHeader: false` is set.
- **Commit identities:** commits use GitHub `noreply` e-mail addresses.
- **Static files:** `robots.txt`, `sitemap.xml` and `manifest.json` contain nothing sensitive.
