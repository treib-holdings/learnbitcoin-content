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
pages are static files, and Cloudflare serves them without running
it. Some requests do reach it: the small analytics script and the ping
it sends, the preview images that chat apps and social networks fetch
when someone shares a link, the newsletter form when you send it, and
some requests
for pages that do not exist (a browser that follows a dead link gets
the 404 page without our code running; a script or a bot asking for
the same address usually reaches it). For each of those we keep a log
entry for 3 days, in Cloudflare's logging service for our server. The
entry holds your IP address, your browser's user-agent string, the
page the request came from, and what Cloudflare works out from the IP:
country, region, city, postal code, rough coordinates, and the network
the connection came from. For the analytics ping, the page it came
from is the page you were reading. The entry never holds what you
typed into the newsletter form. We keep that log to keep the site
working and to spot abuse; in EU terms, that is our legitimate
interest, and 3 days is the retention the service gives us.
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

The newsletter is optional. Nothing on this site needs it. If you
never sign up, none of this section applies to you.

**Who runs it.** Treib Holdings, LLC, the company behind LearnBitcoin
and ChainQuery, runs the list, decides what it is used for, and
answers for it at
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com). A company called
[Buttondown](https://buttondown.com/legal/privacy) stores the list and
sends the email for us. It works under a
[data processing agreement](https://buttondown.com/legal/data-processing-agreement)
and may use the list only to provide its service to us.

**What we ask for.** Your email address. The form asks for nothing
else, and it says what follows before you press the button.

**What our server does with it.** The form posts your address to our
own server. Our server sends Buttondown the address and nothing else.
Nothing from your browser's request travels with it: not your IP
address, not your browser details, not the page you came from. We
checked the request it makes. Our server keeps no copy of the address
and writes it into no log. It does use your IP address for a moment to
stop one machine from flooding the form, and our server log of that
request (see "Your IP address, briefly" above) keeps the IP for 3
days.

**What Buttondown records when the address arrives.** Buttondown keeps
a log of every request our server makes to it. For a signup, that log
entry holds the IP address our server called from, what was called and
whether it worked, the headers our server sent, none of which come
from your browser, and the body of the request, which is your email
address. The calling address belongs to Cloudflare, because the call
leaves from our server and not from your machine. Yours is not in it.
We cannot delete those log entries ourselves; Buttondown's API has no
way to, and Buttondown does not publish how long it keeps them.
Buttondown also copies
that calling address onto your subscriber record and works out a
country from it. Our server runs in the Cloudflare data center nearest
you, so that country may match yours.

**What Buttondown keeps about you.** For each subscriber, Buttondown
keeps:

- your email address;
- when you signed up, and when you confirmed;
- that you came in through our server, not through a form of
  Buttondown's;
- the IP address our server called from, which is Cloudflare's, not
  yours, and a country worked out from that address;
- a spam-risk score that Buttondown computes for every new subscriber,
  even with its spam filter off for our account. An address it scores
  as a throwaway can be refused, and our form then asks you to try
  another;
- an avatar link made from a hash of your address (a scrambled,
  fixed-length form of it), of the kind the Gravatar service uses.
  Buttondown fills it in for every subscriber. We never load it, and we
  do not know whether Buttondown's own dashboard does;
- if your address on the record ever changes, whether you change it on
  the manage page or ask us to, the old address and the date of the
  change;
- every email it sent you, and whether it arrived or bounced;
- which emails you opened, and when;
- which links you clicked, and when;
- totals and rates worked out from those: emails received, opened and
  clicked;
- for each open or click, the kind of mail app, operating system and
  device it could detect, and sometimes a country. Buttondown works
  those out from the connection your mail app makes to buttondown.com,
  and its own description of the feature says it collects IP addresses
  along with the open and click events. Buttondown shows us the
  worked-out fields;
- if you leave, the date, and a reason if you give one.

Nothing else. No name, no note of the page you came from, no tags. We
read the record of a real signup on 2026-10-11 to check.

**Opens and clicks are tracked.** We switched this on. We want to know
which emails get read and which links people follow, so we can write
better ones. Each email ends with a tiny
invisible image hosted on buttondown.com. When your mail app loads
it, Buttondown records that you opened that email. Each link in the
email goes to buttondown.com first, which records the click and sends
you on to the real page. Both carry a code that points to you, so
every open and click is recorded against your address. We do not sell
these records or pass them to anyone else. The email that asks you to
confirm may record an open in the same way, which would happen before
you have confirmed anything.

Each email also carries one hidden link that only automated mail
scanners follow. Buttondown uses it to tell scanners from people. It
never counts as you opening or clicking anything.

If you would rather not be counted: set your mail app not to load
remote images, and most opens go unrecorded. A click is recorded
whenever you follow a link from the email, so to avoid that, find the
page on the site yourself. Buttondown has no setting that keeps you on
the list with the counting switched off for you alone. Or skip the
email and use the [RSS feed](/rss.xml), which asks nothing of you.

**Buttondown's pages and cookies.** The confirm link in the first
email, and the unsubscribe and manage links in every issue, open pages
on buttondown.com. Those pages are Buttondown's, and they set
Buttondown's cookies. One is named `fingerprint`. Buttondown files it
under "essential and analytics", says it holds a random value, the
time it was issued and a signature, and it lasts until you close your
browser. Another, `initial_path`, notes the first Buttondown page you
landed on and can last up to 90 days. We never see either. Buttondown
lists every cookie it sets in its
[cookie policy](https://buttondown.com/legal/cookies).
When you click the confirm link, buttondown.com sees that visit the
way any website sees a visit: your IP address and your browser's
details reach its server, under Buttondown's own privacy policy, not
ours. After you confirm, Buttondown sends you back to a page on this
site that loads no analytics.

**If you reply to an email.** The reply address on the email that asks
you to confirm is at Buttondown, which passes replies on to us.
Whatever you write in a reply to any of our emails may pass through
Buttondown as well as reach us.

**Who else handles it.** Buttondown runs on other companies' services.
Postmark delivers the email and Amazon Web Services hosts the data,
among others. The full list is at
[buttondown.com/legal/subprocessors](https://buttondown.com/legal/subprocessors),
and Buttondown has to tell us 30 days before adding to it.

**Where it is kept.** In the United States. Buttondown is a US
company, and the people behind this site are in the US (the pages
themselves are served from Cloudflare's network, from whichever of its
data centers is nearest you). If you are in the EU, the UK or
Switzerland, Buttondown's agreement with us includes the EU standard
contractual clauses, with the UK and Swiss additions: the contract
terms the EU wrote for moving personal data to a country outside it.

**Why we are allowed to.** If you are in the EU, the UK or
Switzerland, the legal basis is your consent. You give it in two
steps: you type your address
into our form, which describes the tracking above the button, and
then you click the confirm link in the email Buttondown sends. No
newsletter goes out to you until you do. You can take your consent
back at any time with the unsubscribe link at the bottom of every
email. That is as easy as signing up was.

**How long we keep it.**

- If you never click the confirm link, nothing else is sent to the
  address, and Buttondown removes it from our list after 30 days.
- If you unsubscribe, the email stops at once, and Buttondown removes
  your record from our list 7 days later.
- Removed is not the same as erased. Buttondown's default is to keep a
  hidden copy of a removed record rather than erase it; full erasure
  is something it turns on per newsletter, on request. Until this page
  says otherwise, assume the hidden copy exists. Buttondown can also
  restore anything deleted for 3 days after the deletion, and its own
  policy says its backups clear on their own cycle and that it may
  keep some information to prevent fraud.
- While you stay subscribed, Buttondown keeps your address and the
  open and click records for as long as you stay on the list. There is
  no setting that purges old opens and clicks on their own.
- If you ask us to delete you, we do it within 7 days, with the same
  caveat about the hidden copy.
- One thing outlives all of this: Buttondown's log of our server's
  requests, described above, holds your address. We cannot delete it
  ourselves, and Buttondown does not publish how long it keeps it.
- If we ever stop the newsletter, we delete the list.

**Age.** The newsletter is for people 16 and over. Why 16: in the EU,
each country sets the age at which you can agree to this on your own,
somewhere between 13 and 16, and using the top of the range means no
reader needs a parent to agree for them. If you are younger, the
[RSS feed](/rss.xml) gives you every new chapter and rabbit hole with
no email at all. If we learn that a subscriber is under 16, we delete
the address.

**Seeing, changing or deleting your data.** Every email has a link to
manage your subscription, where you can change your address or leave.
For a copy of everything Buttondown holds on you, including the open
and click records, or to have everything we can delete deleted (all of
it except the request log described above), email
[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com) from the
address you subscribed with. That is how we know it is you. If you
think we have handled your data badly, you can complain to the
data-protection authority where you live.

**No email at all.** The [RSS feed](/rss.xml) lists every new chapter
and rabbit hole and needs nothing from you. It does not carry glossary
entries, or the corrections and the news that go in the newsletter.

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
under 13. The newsletter is for people 16 and over, and
[the newsletter section](#the-newsletter) says why. Apart from
newsletter addresses, what people choose to email us, and the short
server log described above, which any visitor's browser can leave, we
do not knowingly collect anything from anyone, of any age.

## Changes

This page lives in our [public content repo](https://github.com/treib-holdings/learnbitcoin-content/blob/main/pages/privacy.md).
Every change is in git history. We will not silently rewrite our
privacy posture.

## Contact

[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com).
