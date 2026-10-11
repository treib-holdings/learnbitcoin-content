---
title: "Privacy"
heading: "Here is everything we know about you."
description: "What data LearnBitcoin collects, who sees it, how long it lives. Short version: almost nothing, unless you subscribe to the newsletter."
published: "2026-05-14"
updated: "2026-10-11"
---

**Changed 2026-10-11:** we are adding an email newsletter. Reading
the site works exactly as before. If you subscribe,
[the newsletter section](#the-newsletter) lists what is kept, including
a record of which emails you open and which links you click. We also
corrected the line about our server logs, which said about 30 days.
The real figure is under "Your IP address, briefly" below.

Short version: almost nothing. If you subscribe to the newsletter, we
also have your email address, and Buttondown, the company that sends
the newsletter for us, keeps a record of which emails you open and
which links you click.

We are a content site. We do not sell ads. The site runs no trackers.
We do not have a marketing funnel. There is nothing to monetize about
your visit, so there is no reason for us to build a profile on you.
The newsletter is the one exception: its emails record opens and
clicks for each subscriber, and
[the newsletter section](#the-newsletter) below says exactly what.

## What we actually collect

**Your IP address, briefly.** Every web server sees the IP of every
visitor. Ours does too. Most requests never reach our own code: the
pages are static files, served by Cloudflare. The ones that do (the
analytics script and its ping, the share-preview images, the
newsletter form) are logged for 3 days. The entry holds your IP
address, your browser's user-agent string, the page the request came
from, and the location Cloudflare works out from the IP, down to city
and postal code. It never holds what you typed into the form. We keep
that log to keep the site working and to spot abuse, which in EU terms
is our legitimate interest.
[Cloudflare](https://www.cloudflare.com/cloudflare-customer-dpa/)
also sits in front of the whole site and uses your IP to block abuse,
rate-limit bots, and serve cached pages. They keep their own logs per
their own retention policy.

**Aggregate page views via Plausible.** We use [Plausible Analytics](https://plausible.io/data-policy),
which is cookieless, does not fingerprint you, and does not build a
profile. It tells us "this page got N views this week" without knowing
which views were yours.

**A few small requests to ChainQuery for the live numbers.** The home
page, the [node page](/node), and any chapter or glossary entry with a
live widget (today the Mining, Mempool, Supply Schedule, Halvings and
Bitcoin Units chapters and the glossary entry for Block) fetch the
figures they show, such as block height, supply, fees, difficulty and
price, from [ChainQuery.com](https://chainquery.com), a service we
also run; most of them repeat the request every 30 to 60 seconds while
the page stays open. Each request reaches ChainQuery's server the way
any web request reaches ours: it sees your IP address, your browser's
user-agent string and that the request came from this site, and no
cookies travel with it. ChainQuery keeps ordinary web-server logs,
sits behind Cloudflare as we do, and has its own
[privacy policy](https://chainquery.com/privacy-policy).

**Whatever you choose to send us.** If you email
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com), we have your
email and whatever you wrote. We read it. We delete what we no longer
need.

**Your email address, if you subscribe to the newsletter.** Plus what
Buttondown keeps around it, the open and click records included, all
described under [The newsletter](#the-newsletter) below.

That is the full list.

## What the site does not collect

- No advertising cookies, ever.
- No third-party trackers.
- No social-network pixels (Facebook, X, LinkedIn, etc.).
- No fingerprinting scripts.
- No session recording.
- No "anonymous" identifiers that turn out to be not anonymous.

The newsletter is the one exception to "no third-party trackers": its
emails carry Buttondown's open and click tracking. Nothing on the site
itself does. [The newsletter](#the-newsletter) below says what that
records.

We do not sell or rent anything about you. If you subscribe to the
newsletter, Buttondown and the companies it runs on handle your
address and your open and click records so the email can reach you.
We give them to nobody else.

## Cookies and local storage

This site uses two kinds of browser storage, both strictly necessary,
neither of which needs your consent:

- **Cloudflare cookies** (`cf_clearance`, `__cf_bm`, similar) - set
  by Cloudflare to keep the site online and block bad traffic. We do
  not read them. We could not turn them off without breaking the
  site.
- **localStorage** (key: `lb_progress_v1`) - your browser remembers
  which rabbit holes and Journey chapters you have read, which
  checklist items you have ticked, and when, so the site can show
  check marks and the home page can point you to the next Journey
  chapter. The data lives only on your device. It is never sent to
  our server. Clear your browser storage and it is gone. If the home
  page shows a "Pick up where you left off" line, its "Clear my
  reading progress" button erases this data too.

That is why there is no cookie banner. Reading the site asks nothing
of you. The newsletter asks for your consent once, when you sign up
and click the confirm link. The manifesto promised no dark patterns;
this is what that looks like in practice.

## The newsletter

The newsletter is optional. If you never sign up, none of this applies
to you.

**Who runs it.** Treib Holdings, LLC, the company behind LearnBitcoin
and ChainQuery, runs the list and answers for it at
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com).
[Buttondown](https://buttondown.com/legal/privacy) stores the list and
sends the email for us, under a
[data processing agreement](https://buttondown.com/legal/data-processing-agreement),
on services run by other companies
([its list](https://buttondown.com/legal/subprocessors)).

**What we ask for.** Your email address. Nothing else.

**What happens to it.** The form posts your address to our own server,
which passes it to Buttondown and keeps no copy. Nothing about you
travels with it: not your IP address, not your browser, not the page
you came from. Our server logs the request for 3 days, as it logs
every request that reaches it (see "Your IP address, briefly" above).

**What Buttondown keeps.** Your address; when you signed up and
confirmed; that you came through our server; the address our server
called from, which is Cloudflare's, not yours, and a country guessed
from it, which need not be yours; a spam score it computes for every
new subscriber; the old address if you ever change it; and, for each
email it sends you, whether it arrived, whether you opened it, and
which links you clicked. Buttondown also keeps a log of every request
our server makes to it. That log holds your address, and we cannot
delete it.

**Opens and clicks are counted.** Each email carries a tiny image and
tracked links hosted on buttondown.com, so every open and click is
recorded against your address. We use the counts to see what gets
read, and we pass them to nobody. To stay mostly uncounted, set your
mail app not to load remote images, and find the pages on the site
yourself instead of clicking the links. The email that asks you to confirm
carries no tracking.

**Buttondown's pages.** The confirm, unsubscribe and manage links open
pages on buttondown.com, which set Buttondown's own cookies
([its cookie policy](https://buttondown.com/legal/cookies)). After you
confirm, you come back to a page on this site that loads no analytics.

**Where, and on what basis.** The list is kept in the United States.
If you are in the EU, the UK or Switzerland, the legal basis is your
consent, which you give by sending the form and confirming the email,
and Buttondown's agreement with us includes the EU standard
contractual clauses. The unsubscribe link in every email withdraws it.

**How long.** An unconfirmed address is removed after 30 days; an
unsubscribed one, 7 days after you leave. Buttondown's default is to
hide a removed record rather than erase it, and it turns full erasure
on per newsletter on request, so assume a hidden copy exists until
this page says otherwise. The request log above outlives all of it.
If we ever stop the newsletter, we delete the list.

**Age.** 16 and over. If you are younger, the [RSS feed](/rss.xml)
gives you every new chapter with no email at all.

**Your data.** Every email has a link to change your address or leave.
For a copy of everything Buttondown holds on you, or to have it
deleted (all but the request log), email
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com) from the
address you subscribed with. You can also complain to the
data-protection authority where you live.

**No email at all.** The [RSS feed](/rss.xml) lists every new chapter
and rabbit hole and needs nothing from you. It does not carry glossary
entries, corrections or news.

## Your rights

If you live in the EU, UK, California, or anywhere with comparable
laws, you have the right to know what we have about you, correct it,
delete it, or take your business elsewhere. Email
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com) and we will
respond.

Realistically: unless you subscribe to the newsletter, we have nothing
meaningful to give back, because we collect almost nothing. If you do
subscribe, we can send you everything Buttondown holds on you,
including the open and click records, and delete it when you ask, all
but the request log described in the newsletter section. The right is
yours either way, and we will tell you honestly what we found.

## Children

The site is suitable for any age but is not directed at children
under 13. The newsletter is for people 16 and over. Apart from
newsletter addresses, what people choose to email us, and the short
server log described above, which any visitor's browser can leave, we
do not knowingly collect anything from anyone, of any age.

## Changes

This page lives in our [public content repo](https://github.com/treib-holdings/learnbitcoin-content/blob/main/pages/privacy.md).
Every change is in git history. We will not silently rewrite our
privacy posture.

## Contact

[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com).
