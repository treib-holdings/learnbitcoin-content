---
title: "Security"
heading: "What we ship, what we don't, and where third parties grade us."
description: "How LearnBitcoin secures the site - concrete config, independent grades, honest gaps. Verify it yourself."
---

Short version: this site holds none of your money, none of your keys,
none of your personal data. There is nothing to drain, nothing to steal,
no API token to rotate. The strongest security posture is having nothing
worth attacking, and we lean on that.

That is not an excuse to ship sloppy. Here is exactly what we run, where
third parties grade it, and where we know we still owe work.

## What we ship

- **HTTPS only.** TLS 1.2 and 1.3. Cloudflare manages certs via Let's
  Encrypt and Google Trust Services. We publish CAA DNS records so no
  other CA can issue a cert for this domain even if compromised.
- **HSTS with preload.** Once your browser visits us over HTTPS, it
  refuses to fall back to plain HTTP for a year. We are submitting to
  the [browser preload list](https://hstspreload.org) so the protection
  also covers your *first* visit.
- **Strict Content Security Policy.** Every executable script on every
  page is allow-listed by SHA-256 content hash. No `unsafe-inline`
  anywhere. A build-time linter blocks new inline scripts so the policy
  cannot quietly erode.
- **No third-party scripts.** No ad networks, no tag managers, no chat
  widgets, no Google Fonts, no embedded iframes. Plausible analytics is
  proxied through our own Cloudflare Worker so it is same-origin -
  adblockers do not block it and a CDN compromise cannot backdoor it.
- **No cookies, no tracking pixels.** Plausible is cookieless. The only
  browser storage we set is `lb_progress_v1`, which holds your reading
  progress and never leaves your device. (Cloudflare sets its own
  `cf_clearance` / `__cf_bm` cookies for abuse mitigation; we do not
  read them.)
- **Locked-down CI.** GitHub Actions third-party actions are pinned to
  commit SHAs, not mutable `@v4` tags. Workflow tokens are scoped to
  read-only by default. Dependabot opens grouped update PRs weekly.

## Independent grades

We do not embed badges. Badges go stale, and they are just third-party
JavaScript that we would then have to allow in our CSP. Click through
and re-run the scan yourself:

- **[Mozilla Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=learnbitcoin.com)** -
  combined HTTPS, headers, cookies, and CSP grade.
- **[securityheaders.com](https://securityheaders.com/?q=https%3A%2F%2Fwww.learnbitcoin.com)** -
  HTTP response header configuration.
- **[SSL Labs](https://www.ssllabs.com/ssltest/analyze.html?d=learnbitcoin.com)** -
  TLS and certificate configuration.

## What we don't claim

This is a content site that serves HTML and a few PNGs. We do not:

- Hold any of your money, keys, seed phrases, or personal data.
- Run any custodial service, exchange, or wallet.
- Promise zero-day-fix SLAs. We rescan after every significant change
  and patch real findings within 14 days.

## Known gaps

Two open advisories on the underlying framework (Astro 5.x):

- An XSS in `define:vars` - we verified by grep that we do not use
  `define:vars` anywhere in the codebase.
- A server-island encrypted-parameter replay issue - we verified that
  we do not use server islands either.

Both resolve cleanly on an Astro 6 upgrade, which we will do as a
focused session rather than a rushed audit response. The lack of impact
is documented internally so any contributor PR that introduces either
feature triggers explicit review.

## Report a vulnerability

Email **[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com)** with
subject starting `[security]`. We aim to acknowledge within 72 hours
and ship a fix or mitigation within 14 days for anything with real
impact.

We do not run a paid bug bounty. Substantive disclosures get credited
publicly if you want it.

## Changes

This page, like the rest of the content, lives in our [public content
repo](https://github.com/treib-holdings/learnbitcoin-content/blob/main/pages/security.md).
Every change is in git history. We will not silently rewrite our
security claims.
