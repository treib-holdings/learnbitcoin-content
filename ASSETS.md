# Assets — diagrams and interactive widgets

What this is: an index of every reusable visual asset (static SVG diagram or interactive Svelte widget) that content in this repo can embed, plus the boilerplate for embedding them.

The assets themselves live in the **web repo** (`learnbitcoin-web`), not here. This repo references them by URL path (for SVGs) or by component import (for Svelte widgets).

---

## Static SVG diagrams

All shipped diagrams live at `learnbitcoin-web/public/diagrams/<name>.svg`. Each is authored to a `viewBox="0 0 800 420"` canvas (1.905:1 aspect, the OG-PNG canonical ratio); the prebuild rasterize pipeline auto-generates a 1200×630 PNG at `public/diagrams/og/<name>.png` for social cards.

| Diagram | File | Currently embedded in |
|---|---|---|
| **Alice pays Bob (UTXO)** | `alice-pays-bob.svg` | [how-bitcoin-works §3](journey/how-bitcoin-works.md), [rabbit-holes/utxos §3](rabbit-holes/utxos.mdx) |
| **Dollar purchasing power** | `dollar-purchasing-power.svg` | [why-money-is-broken §6](journey/why-money-is-broken.md) |
| **Verify, don't trust** | `verify-dont-trust.svg` | [sovereignty §2](journey/sovereignty.md) |
| **HD wallet tree** | `hd-wallet-tree.svg` | [be-your-own-bank §3](journey/be-your-own-bank.md), [rabbit-holes/key-space](rabbit-holes/key-space.mdx) (near top) |
| **Network topology** | `network-topology.svg` | [what-bitcoin-actually-is §7](journey/what-bitcoin-actually-is.md), [rabbit-holes/decentralization](rabbit-holes/decentralization.mdx) |
| **Merkle tree** | `merkle-tree.svg` | [how-bitcoin-works §7](journey/how-bitcoin-works.md) |
| **Threat triangle** | `threat-triangle.svg` | [rabbit-holes/seed-backup-strategies §2](rabbit-holes/seed-backup-strategies.mdx) (chapter is draft; diagram is in place for go-live), [journey/sovereignty §10](journey/sovereignty.md) — same SVG reused; sovereignty pairs it with the "balance the three threats" framing in the threat-model section |
| **Confirmations stack** | `confirmations-stack.svg` | [how-bitcoin-works §8](journey/how-bitcoin-works.md) |
| **Lightning channel** | `lightning-channel.svg` | [using-bitcoin §5](journey/using-bitcoin.md), [rabbit-holes/lightning-routing §2](rabbit-holes/lightning-routing.mdx) — same SVG reused; routing chapter pairs it with the "channel is an edge in the graph" framing |
| **Lightning hop knowledge** | `lightning-hop-knowledge.svg` | [rabbit-holes/lightning-routing §8](rabbit-holes/lightning-routing.mdx) — six-column matrix of what each position on a route (Alice / Bob / Carol / Fred / Eve / Dave) knows about a payment. Top three rows form the privacy donut: the middle hops and the last hop cannot see the endpoints (the last hop can often guess the receiver, so it gets a dash). Bottom three rows are operational: every hop has to know its neighbors and the amount. Reuses the named characters from the onion-routing animation for continuity. |
| **Lightning MPP** | `lightning-mpp.svg` | [rabbit-holes/lightning-routing §7](rabbit-holes/lightning-routing.mdx) — Alice's 1 BTC payment to Dave split into three chunks (0.4 / 0.3 / 0.3) across three routes of different hop counts. Top route runs through three middle hops (Bob, Jack, Grace); middle and bottom routes through two each (Carol/Hank, Frank/Ivy). Mirror-symmetric branching and converging curves. Chunk amounts pilled on the path just after Alice. |
| **Bitcoin governance vetoes** | `bitcoin-governance-vetoes.svg` | [glossary/bitcoin-governance](glossary/bitcoin-governance.md) — five-vertex pentagon of Bitcoin's stakeholder groups (Developers / Miners / Nodes / Users / Hodlers), each with a "vetoes by..." caption. Central CONSENSUS badge represents the alignment all five must reach. Echoes the threat-triangle visual grammar (vertex boxes with bold orange labels + italic captions, center badge). Reusable for future BIP-process and block-size-wars rabbit holes. |
| **Bumping a stuck transaction** | `bumping-stuck-tx.svg` | [journey/using-bitcoin §4](journey/using-bitcoin.md) — two-row diagram of the RBF and CPFP unsticking mechanisms. RBF: gray-stuck tx at 5 sat/vB gets replaced by orange-bumped tx at 50 sat/vB, which confirms in NEXT BLOCK while the original disappears. CPFP: gray-parent at 5 sat/vB has its "change" output spent by a new orange-child at 50 sat/vB; both parent and child confirm together because the miner sees the combined fee. Tagline: "Your transaction is not stuck forever. It is at the wrong fee level for current conditions." |
| **On-chain or Lightning?** | `on-chain-vs-lightning.svg` | [journey/using-bitcoin §7](journey/using-bitcoin.md) — three side-by-side payment-size cards (SMALL $0-$50 → Lightning, MEDIUM $50-few-thousand → Either Works, LARGE few-thousand+ → On-chain) with WHY captions, plus three SPECIAL CASES rows (no LN wallet → on-chain, repeated payments → open a channel, long-term storage → don't move it). Replaces a markdown table that was less shareable. Tagline: "Many people use both. Knowing which is which is most of the skill." |
| **Privacy leaks** | `privacy-leaks.svg` | [journey/sovereignty §8](journey/sovereignty.md), [rabbit-holes/bitcoin-privacy §4](rabbit-holes/bitcoin-privacy.mdx) (same SVG reused; the chapter pairs it with the "most leaks are not on the chain" framing) — six-row matrix of common Bitcoin habits (public Electrum server, address reuse, KYC + non-KYC UTXO mixing, skipping Tor, KYC purchasing, public stack discussion) mapped to five leak types (IP, identity link, address graph, balance, tx history). Orange dot = leaks; dash = doesn't. Same visual language as lightning-hop-knowledge.svg. |
| **Inheritance recovery** | `inheritance-recovery.svg` | [journey/sovereignty §9](journey/sovereignty.md) — left-to-right flow: heir → letter (at lawyer) → branches to three seed locations (home / bank / relative, with 2 collected and 1 grayed as "not needed") → coordinator (any 2 of 3 sign) → recovered funds. Mirror bookend circles (Heir on left, BTC on right) with rounded-rect stages in between. Reinforces the 2-of-3 multisig recovery property. |
| **Custody graveyard timeline** | `mt-gox-ftx-graveyard-timeline.svg` | [rabbit-holes/mt-gox-ftx-graveyard](rabbit-holes/mt-gox-ftx-graveyard.mdx) — seven custodian collapses (Mt. Gox 2014 to Genesis 2023) drawn as tombstones on a timeline, with the 2022 wave bracketed as five-in-eight-months. Chapter is draft; diagram in place for go-live. NOTE: authored on a 980x470 canvas (wider than the 800x420 OG standard) for inline use only - not wired as the chapter's OG card. |
| **Block size war timeline** | `block-size-war-timeline.svg` | [rabbit-holes/block-size-war §1](rabbit-holes/block-size-war.mdx) — two-lane pressure timeline of 2015-2017: industry moves above the orange chain line (Bitcoin XT, Hong Kong truce, Bitcoin Unlimited bug, New York Agreement), user moves below (SegWit ships, BIP-148 flag day, BIP-91), Bitcoin Cash branching off Aug 2017 with the BSV sub-split, and a dashed stub ending in an X for the canceled SegWit2x fork. Authored on the standard 800x420 canvas; wired as the chapter's OG card via `/diagrams/og/block-size-war-timeline.png`. Takeaway: a claimed 83% of mining power could not change one rule without the users. |
| **UASF flag day countdown** | `uasf-flag-day.svg` | [rabbit-holes/block-size-war §7](rabbit-holes/block-size-war.mdx) — countdown timeline of the 2017 UASF standoff: shaolinfry proposes (Feb), BIP-148 published with the Aug 1 flag day (Mar), the New York Agreement as the industry's answer (May 23), BIP-91 locking in Jul 20 bracketed "12 days to spare," growing orange node clusters below the axis, and SegWit live Aug 24 past the dashed AUG 1 wall. Inline only; the chapter's OG card stays the war timeline. Takeaway: the threat was credible, so it never had to be carried out. |
| **BIP lifecycle** | `bip-lifecycle.svg` | [rabbit-holes/bip-process §3](rabbit-holes/bip-process.mdx) — left-to-right flow of the BIP-3 statuses (in force since Jan 2026): idea -> editor assigns a number -> DRAFT -> COMPLETE -> DEPLOYED on the orange spine, with the gray CLOSED exit below (withdrawn, rejected, or superseded) and a footnote on the nine-status BIP-2 era. Wired as the chapter's OG card via `/diagrams/og/bip-lifecycle.png`. Chapter is draft; diagram in place for the 2026-07-14 flip. Takeaway: the editors assign numbers, the network decides adoption. |
| **Activation mechanisms** | `activation-mechanisms.svg` | [rabbit-holes/bip-process §5](rabbit-holes/bip-process.mdx) — three side-by-side cards comparing soft-fork activation designs: BIP-9 (the workhorse; 95%, fails quietly = minority veto in practice), BIP-8 LOT=true (the guarantee; mandatory final-period signaling, never used on mainnet), and Speedy Trial (the experiment, orange-highlighted; 90% + fixed activation height, shipped Taproot 2021). Same three-card pattern as on-chain-vs-lightning. Inline only; the chapter's OG stays the lifecycle. Takeaway: the designs differ mainly in what happens when miners refuse to signal. |
| **Chain analysis heuristics** | `chain-analysis-heuristics.svg` | [rabbit-holes/bitcoin-privacy §2](rabbit-holes/bitcoin-privacy.mdx) — three side-by-side cards on how coins get traced: COMMON INPUT (three inputs into one TX, orange bracket "one owner", the leak Satoshi named in whitepaper section 10), CHANGE DETECTION (0.75 BTC in, round 0.50000 to the payee, odd 0.24817 back to a fresh address highlighted orange), and THE KYC ANCHOR (orange-tinted card: exchange with passport on file, withdrawal arrow to a named address node, dotted links to a five-circle cluster). Same three-card pattern as activation-mechanisms and on-chain-vs-lightning. Wired as the chapter's OG card via `/diagrams/og/chain-analysis-heuristics.png`. Chapter is draft; diagram in place for go-live. Takeaway: heuristics build the cluster, one identified withdrawal names it. |
| **Taproot: one key, two doors** | `taproot-two-paths.svg` | [rabbit-holes/how-taproot-works §2](rabbit-holes/how-taproot-works.mdx) — left: construction (INTERNAL KEY P and a three-leaf script tree hashed to a Merkle root feed a TWEAK box, Q = P + h(P,root)G, producing the orange OUTPUT KEY Q, "the 32 bytes on the chain, bc1p..."); right: two doors below Q, KEY PATH (orange tint: one 64-byte Schnorr signature, everyone behind P agreed, looks like any single-sig spend, tree never revealed) and SCRIPT PATH (gray: reveal one leaf plus inputs and a control block of 33 + 32m bytes, other leaves stay hidden). Wired as the chapter's OG card via `/diagrams/og/taproot-two-paths.png`. Takeaway: cooperate and the contract stays invisible, disagree and only one branch is shown. |
| **The 2013 chain fork** | `2013-chain-fork.svg` | [rabbit-holes/2013-chain-fork §2](rabbit-holes/2013-chain-fork.mdx) - two-lane timeline of 11-12 March 2013 (UTC). The orange chain splits after block 225,429. Upper gray lane: the chain 0.8 nodes followed, from Slush's 998 kB block at 22:39 to block 225,454, 25 blocks abandoned, ending in an X. Lower orange lane: the chain every version could follow, first block at 23:24, overtaking at 225,455 at 06:20. Tick marks for the first report (23:11), the recognition (00:05), the decision (00:45), BTC Guild fully switched (02:36) and the reorganisation (06:20). Standard 800x420 canvas; wired as the chapter's OG card via `/diagrams/og/2013-chain-fork.png`. Takeaway: miners with most of the hash power gave up 25 blocks so that old nodes were not left behind. |
| **Quantum-exposed supply by script type** | `quantum-exposure-stacked.svg` | [rabbit-holes/quantum-and-bitcoin](rabbit-holes/quantum-and-bitcoin.mdx) — six horizontal bars sorted by BTC at risk (P2WPKH, P2PK, P2SH, P2PKH, P2WSH, P2TR), deep orange for always-exposed and lighter orange for reuse-exposed, BTC and address counts per bar. Generated from ChainQuery's live figures; regenerated 2026-09-17 to the post-v1.2 numbers (7,142,979 BTC, snapshot 2026-09-14, block 967,001). Canvas 800x532, not the chapter's OG card. Regenerate by editing the rows list at the top of the SVG generator in the session notes rather than the bars by hand. |
| **Bitcoin obituaries, year by year** | `bitcoin-is-dead-obituaries.svg` | [rabbit-holes/bitcoin-is-dead §1](rabbit-holes/bitcoin-is-dead.mdx) - two stacked panels on one 2010-2026 time axis: bitcoin's month-end close on a log scale (Coin Metrics, CC BY-NC 4.0, credited on the chart) and gray bars of entries per year on 99Bitcoins' obituary list (1, 6, 1, 17, 28, 39, 28, 124, 94, 41, 14, 47, 27, 8, 2, then dashed empty slots for 2025-26 because the list stopped in April 2024). 2017 darkened, "113 before the 16 Dec 2017 top". Standard 800x420; wired as the chapter's OG card via `/diagrams/og/bitcoin-is-dead-obituaries.png`. Generator: `_scratch/bid-visuals/make_charts.py`. Takeaway: obituaries arrive near the tops more often than near the bottoms. Chapter is draft; in place for the 2026-10-08 flip. |
| **Every fall, and how long the climb back took** | `bitcoin-is-dead-drawdowns.svg` | [rabbit-holes/bitcoin-is-dead §5](rabbit-holes/bitcoin-is-dead.mdx) - underwater chart of the daily close against the running record close, 2010-2026: the four 75%+ falls labeled with depth and days to a new high (-92.7% / 622, -84.5% / 1,177, -83.8% / 1,080, -76.7% / 847) and the open 2025-26 fall (-53.1% at the 30 Jun 2026 low, -30.7% on 4 Oct 2026, not recovered). Five event markers. 800x420, inline only. Close basis; intraday lows went deeper. |
| **Buffett and Munger on bitcoin** | `bitcoin-is-dead-buffett-arc.svg` | [rabbit-holes/bitcoin-is-dead §2](rabbit-holes/bitcoin-is-dead.mdx) - nine dated remarks (filled dots Buffett, hollow Munger) on the 2013-2026 log price line at that day's close; card for the one dated call (3 Mar 2014, "not around in 10 or 20 years") with a ten-year bracket to the $73,082 record close of 13 Mar 2024; 2034 leg open; right-margin labels for the 2025 high and the open drawdown, matching the Dimon and Schiff charts. 800x460, inline only. Generator: `_scratch/bid-visuals/bid_svg34_spiral_buffett.py`. |
| **Jamie Dimon on bitcoin** | `bitcoin-is-dead-dimon-arc.svg` | [rabbit-holes/bitcoin-is-dead §3](rabbit-holes/bitcoin-is-dead.mdx) - Dimon's dated remarks 2015-2025 on the log price line, with a JPMorgan lane below (wealth-client funds 2021, IBIT authorized participant, "allow you to buy it" 2025) and the 8 Dec 2024 first close above $100,000. Inline. |
| **Peter Schiff's bitcoin calls** | `bitcoin-is-dead-schiff-calls.svg` | [rabbit-holes/bitcoin-is-dead §4](rabbit-holes/bitcoin-is-dead.mdx) - numbered dated calls 2013-2026 on the log price line with a key scoring each (wrong / pending to 2032 / right in the short run / not wrong so far). Inline. |
| **Labels by kind of claim** | `bitcoin-is-dead-labels.svg` | [rabbit-holes/bitcoin-is-dead §1](rabbit-holes/bitcoin-is-dead.mdx) - 19-row matrix of labels (Ponzi, tulips, only for drugs, boils the oceans, banned, quantum...) by kind of claim (prediction dated / undated, definition or measurement, analogy, value judgment; orange dot = yes) with a verdict column. Same matrix grammar as privacy-leaks.svg. 800x660, inline only (do not use the stretched OG raster). |
| **The price a year later** | `bitcoin-is-dead-one-year-later.svg` | [rabbit-holes/bitcoin-is-dead §"It can't recover"](rabbit-holes/bitcoin-is-dead.mdx) - 13 dated doom claims 2011-2022, close on the day to close 365 days later (orange higher, slate lower) on a log axis, with the 4 Oct 2026 close and the 2025 high marked. 7 of 13 lower a year later; all 13 below Oct 2026. 800x558, inline only. |
| **The 2021 death spiral that did not happen** | `bitcoin-is-dead-death-spiral-2021.svg` | [rabbit-holes/bitcoin-is-dead §"The mining death spiral"](rabbit-holes/bitcoin-is-dead.mdx) - 7-day hash rate Apr-Sep 2021 against difficulty drawn as the 10-minute-block hash rate; slow-block band, the -27.94% cut at block 689,472 on 3 Jul 2021, and a per-epoch minutes-per-block strip (13.88 slowest, 10.51 after the cut). 800x420, inline. |
| **Crypto crime share, first estimate and revision** | `bitcoin-is-dead-illicit-share.svg` | [rabbit-holes/bitcoin-is-dead §"Only for drugs"](rabbit-holes/bitcoin-is-dead.mdx) - paired gray bars of Chainalysis's first-reported and revised illicit share of on-chain volume, 2019-2024, with dollar estimates and Chainalysis's own caveats (lower bound, all crypto, stablecoins 63% / 84%). Gray, not orange, because it covers all crypto. 800x420, inline. |
| **All the world's energy by 2020?** | `bitcoin-is-dead-energy-2020.svg` | [rabbit-holes/bitcoin-is-dead §"It boils the oceans"](rabbit-holes/bitcoin-is-dead.mdx) - Newsweek's Dec 2017 projection (33 TWh growing 25% a month) on a log TWh axis against world electricity and Cambridge's actual estimates (89.0, 95.5, 138, CBECI 157.59 with range). 800x420, inline. |
| **They'll just ban it** | `bitcoin-is-dead-bans.svg` | [rabbit-holes/bitcoin-is-dead §"They'll just ban it"](rabbit-holes/bitcoin-is-dead.mdx) - 2013-2026 timeline, one row each for China (notices 2013/2017/2021/2026 plus hash-rate share), India, Nigeria, Bolivia, the United States and El Salvador; bars for bans in force, end caps for lifted or struck down; Library of Congress 2021 count in the footer. 800x536, inline only. |
| **Flippened?** | `bitcoin-is-dead-flippening.svg` | [rabbit-holes/bitcoin-is-dead §"Obsolete, too slow, flippened"](rabbit-holes/bitcoin-is-dead.mdx) - dumbbells of ether (85.1% to 19.2%) and Bitcoin Cash (23.8% to 0.37%) market value as a share of bitcoin's, then and 5 Oct 2026, plus a bitcoin-dominance side panel (87.1%, 32.6% low, 59.2%). 800x420, inline. |
| **Our side's dated price calls** | `bitcoin-is-dead-our-calls.svg` | [rabbit-holes/bitcoin-is-dead §"What our side got wrong"](rabbit-holes/bitcoin-is-dead.mdx) - five deadline calls (Tom Lee, McAfee, PlanB, Draper, Balaji) as target-versus-close dumbbells on a log price axis, misses from about 2.9x to 39x. 800x420, inline. |

### How to embed an SVG diagram

In any markdown or MDX file, use a `<figure>` block:

```html
<figure>
  <img src="/diagrams/<name>.svg" alt="<long descriptive alt text>" />
  <figcaption><short editorial caption that lands the takeaway></figcaption>
</figure>
```

To make this diagram the page's social-card image, add to the frontmatter:

```yaml
ogImage: "/diagrams/og/<name>.png"
ogImageAlt: "<one or two sentence description for social previews>"
```

The OG PNG is auto-generated; you do not need to create it by hand. Each chapter has only one OG image (the "lead" diagram).

---

## Animated explainers (manim videos)

Short data-driven animations rendered with manim CE and served as MP4 from `learnbitcoin-web/public/videos/<name>.mp4`. Brand grammar locked in v1: white background, Geist + Geist Mono, ink-800 chrome, **green = fiat / decay, orange = Bitcoin**, end card with site logo + `www.LearnBitcoin.com`. 1920×1080 @ 60fps, ~15-25s, ~1-2MB.

| Video | File | Currently embedded in |
|---|---|---|
| **What $1 from 1970 buys** | `purchasing-power.mp4` | [why-money-is-broken](journey/why-money-is-broken.md) — top-of-chapter visual hook, above the fold |
| **One has a supply cap. One doesn't.** | `fixed-vs-infinite.mp4` | [what-bitcoin-actually-is](journey/what-bitcoin-actually-is.md) — top-of-chapter hook, side-by-side USD vs BTC supply with "Glass ceiling" / "21M cap" contrast |
| **Open once. Pay many.** | `lightning-mesh.mp4` | [using-bitcoin §6](journey/using-bitcoin.md) — top-of-section hook for the Lightning-in-practice section, animated Lightning Network mesh with bidirectional routing through Alice's single channel to Bob. **Also embedded in** [rabbit-holes/lightning-routing](rabbit-holes/lightning-routing.mdx) — same MP4 reused; routing chapter pairs it with the BOLT-spec walkthrough of how routes actually get computed. OG card derived from the t=22s frame at `/diagrams/og/lightning-routing.png`. |
| **Five hours that almost killed Bitcoin.** | `inflation-bug.mp4` | [inflation-bug-postmortem](rabbit-holes/inflation-bug-postmortem.mdx) — top-of-chapter hook, August 2010 reorg visualization with 53-block orphan and the 184B-vs-21M digit contrast |
| **Pay the rate. Or wait.** | `mempool.mp4` | [mempool](rabbit-holes/mempool.mdx) — top-of-chapter hook, full mempool lifecycle (broadcast → propagation across 4 nodes → fee-rate sorting → Alice/Bob characters → mining → eviction after 2 weeks → rebroadcast at higher rate). **Also embedded in** [journey/using-bitcoin §3](journey/using-bitcoin.md) — same MP4 reused as the top-of-section hook for "Reading the Mempool"; the section's editorial point ("fee market gets real") lands harder with the animation than with the prose-and-links alone. |
| **Threshold-of-keys.** | `multisig.mp4` | [glossary/multisig](glossary/multisig.md) — top-of-entry hook, 35-second walkthrough of 2-of-3 multisig: setup (three different makers), normal spend (two signatures), loss scenario (one key gone, two remain), theft scenario (thief halts at one signature), closing pillars (Multisig / Threshold-of-keys / Vendor-diverse). First animated glossary entry. **Also embedded in** [rabbit-holes/seed-backup-strategies §7](rabbit-holes/seed-backup-strategies.mdx) and [journey/sovereignty §6](journey/sovereignty.md) — same MP4 reused across all three. |
| **The privacy is the peeling.** | `onion-routing.mp4` | [glossary/lightning-sphinx](glossary/lightning-sphinx.md) - top-of-entry hook, 43-second walkthrough of Sphinx onion routing with a 5-node route (Alice -> Bob -> Carol -> Eve -> Dave). Three wrapping layers around Dave's payload: his payment instructions (an orange envelope tagged 'amount + payment secret'), never the preimage. Each route node flashes orange as Alice writes its layer; each hop peels its own layer with a privacy callout showing what it knows and what it cannot know. Dave reads that the payment is his, the preimage R appears in his own node (he made it with the invoice), and he reveals it to get paid while R travels back hop by hop to Alice. Re-rendered 2026-10-02: the first cut put the preimage inside the onion. **Also embedded in** [glossary/onion-routing-lightning](glossary/onion-routing-lightning.md) and [rabbit-holes/lightning-routing section 4](rabbit-holes/lightning-routing.mdx) - same MP4 reused across all three. OG card derived from the t=20s Bob-peel frame at `/diagrams/og/onion-routing.png`. |
| **Send. Settle. Done.** | `bitcoin-lifecycle.mp4` | [journey/using-bitcoin](journey/using-bitcoin.md) — top-of-chapter hook (above-the-fold), 46-second walkthrough of an on-chain transaction lifecycle. Six beats: Title ("Send. Settle. Done."), Setup (Alice + Bob visible, intent banner "Alice -> Bob 0.1 BTC"), Build the TX (each wallet field's value pulses then physically zips to a labeled TRANSACTION builder; header pulses on each arrival), Mempool (Alice's 20 sat/vB slots into a sorted column, "waits for a miner"), Block (mempool fades, NEXT BLOCK forms with selected tx zip-in, white flash + held hash + orange shockwave ring on seal, snaps to chain with sequential heights 920,247 -> 920,251), Confirm (orange wave travels from Alice's chain block to Bob's wallet, receipt notification appears, chain grows 920,252/920,253 with counter ticks, chain-wide orange flash sweeps left-to-right on Final), End card (Public / Final / Yours + brand mark). The on-chain counterweight to the lightning-mesh hook at the top of the chapter. OG card derived from the t=40s "Three blocks deep. Effectively final." frame at `/diagrams/og/bitcoin-lifecycle.png`. |
| **Quantum is real. Bitcoin is preparing.** | `quantum-timeline.mp4` | [quantum-and-bitcoin](rabbit-holes/quantum-and-bitcoin.mdx) — top-of-chapter hook, 44-second timeline across four states: Today (36% of supply at quantum-exposed addresses, 64% safe behind a hash; re-rendered 2026-09-18 from ChainQuery's 2026-09-14 snapshot), Bitcoin Prepares (post-quantum scheme activates, supply migrates to 82% PQ-safe, 18% residual stranded as lost keys), Quantum Arrives (the bar does not move — the threat meets a prepared network), closing manifesto ("Quantum is real. Bitcoin is preparing. Stop address reuse."). Pairs with the ChainQuery quantum-exposure report data on the page. |
| **The load that disappears** | `energy-demand.mp4` | [energy](rabbit-holes/energy.mdx) — top-of-chapter hook, 32-second single-arc demand-response story: A Hot Afternoon (grid-capacity bar fills, orange Bitcoin miner as the marginal load on top), The Brink (demand climbs until the miner pushes total load past the red GRID CAPACITY line), The Drop (miner curtails in seconds, orange drains, total load falls back under capacity), Receipt + closer (Riot Platforms, ERCOT, August 2023: $31.7M earned to power down vs $8.9M mined; "The only industrial load that vanishes in seconds."). Moving version of the static `energy-demand-response.svg` in §4. |
| **The Bitcoin obituaries** | `bitcoin-is-dead-obituaries.mp4` | [rabbit-holes/bitcoin-is-dead](rabbit-holes/bitcoin-is-dead.mdx) - top-of-chapter hook, 39 seconds: the price line draws 2010-2026 while one tombstone per 99Bitcoins entry drops into its year's column; pauses at the 16 Dec 2017 top (113 of 2017's 124 before it) and at the last entry (17 Apr 2024, 477); a zoomed inset on a zero-based axis shows the open 2025-26 drawdown; closing lines "Wrong so far. Score dated claims, not people." Source `learnbitcoin-animations/bitcoin_obituaries/`. |
| **Every label is a claim** | `claim-types.mp4` | [rabbit-holes/bitcoin-is-dead §1](rabbit-holes/bitcoin-is-dead.mdx) - 44 seconds, the chapter's method: labels drop in, sort into five bins (prediction dated / no date, definition or measurement, analogy, value judgment) and get scored bin by bin; only predictions and definitions are marked wrong. Source `learnbitcoin-animations/claim_types/`. |
| **The death spiral** | `death-spiral.mp4` | [rabbit-holes/bitcoin-is-dead §"The mining death spiral"](rabbit-holes/bitcoin-is-dead.mdx) - 38 seconds: the miners-leave feedback loop, the difficulty adjustment that breaks it, then the real 2021 test (hash rate -53.1%, 13.88-minute epoch, -27.94% cut at block 689,472, 10.51 minutes after, back above the May peak 8 Dec 2021); closing lines "Miners can leave. Bitcoin adjusts to the miners who stay." Uses the energy-demand animation's danger red for the claim's loop. Source `learnbitcoin-animations/death_spiral/`. |

### How to embed a video

```html
<figure>
  <video
    src="/videos/<name>.mp4"
    poster="/videos/posters/<name>.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="<description of what the animation shows, for screen readers>"
  ></video>
  <figcaption>One-line caption with the key takeaway.</figcaption>
</figure>
```

`autoplay muted loop playsinline` is the loop-friendly default for decorative motion graphics. `controls` gives readers pause/play + scrubber on hover; `controlslist` suppresses download, playback rate, and cast buttons we don't need. Browsers honor `prefers-reduced-motion` and pause autoplay for users who request it.

### Poster frame + VideoObject JSON-LD (required for every embed)

Every embedded video ships with a poster frame and schema.org VideoObject structured data. Without the poster, slow connections show a blank box until autoplay starts; without the VideoObject, Google's video indexing falls back to an arbitrary page image for the thumbnail and reports the video as unindexable (both surfaced by GSC video inspection, June 2026).

1. Extract a 1280×720 poster from the most representative moment (a data reveal, not a transition or blank fade):

   ```bash
   # from learnbitcoin-web/
   ffmpeg -y -ss <seconds> -i public/videos/<name>.mp4 \
     -frames:v 1 -vf "scale=1280:720" public/videos/posters/<name>.png
   ```

2. Reference it as `poster="/videos/posters/<name>.png"` on **every** `<video>` embed of that MP4 (see pattern above). Unlike `public/diagrams/og/*`, the posters directory is tracked normally — no `.gitignore` exception needed.

3. Add one row to `learnbitcoin-web/src/lib/videos.ts` (name, description, poster, uploadDate, duration — `ffprobe -show_entries format=duration` gives the seconds; write it as ISO 8601, e.g. `PT44S`). The page templates scan the raw body for `/videos/*.mp4` embeds and emit one VideoObject per video from that registry, so a video without a registry row silently gets no structured data.

The poster doubles as the VideoObject `thumbnailUrl`, so the frame choice decides how the video card looks in Google results. Current poster timestamps (re-extract at the same `t` after re-rendering a video): purchasing-power t=15.5, fixed-vs-infinite t=13.5, lightning-mesh t=22, inflation-bug t=7.9, mempool t=22, multisig t=14.1, onion-routing t=20, bitcoin-lifecycle t=40, quantum-timeline t=8.8, energy-demand t=16, bitcoin-is-dead-obituaries t=30.0, death-spiral t=31.0, claim-types t=38.2.

### Authoring new videos

Source code for the animations lives in the private repo `treib-holdings/learnbitcoin-animations` (kept private to avoid intimidating contributors with a Python/manim toolchain, and to give editorial control over drafts). Setup and render instructions are in that repo's README. The deliverable is the rendered MP4, which gets copied to `learnbitcoin-web/public/videos/<name>.mp4` and committed there.

### OG image from a video frame

When a chapter's lead asset is a video (not an SVG diagram), the OG image is extracted as a still frame from the rendered MP4 at the most visually rich moment (typically a data reveal or end-card frame). Standard workflow:

```bash
# from learnbitcoin-web/
ffmpeg -y -ss <seconds> -i public/videos/<name>.mp4 \
  -vframes 1 -vf "scale=1200:675,crop=1200:630" \
  public/diagrams/og/<chapter-slug>.png
```

Because `public/diagrams/og/*` is gitignored (auto-regenerated by `scripts/rasterize-diagrams.mjs` from SVGs), each video-derived OG needs a `!public/diagrams/og/<chapter-slug>.png` exception line added to `learnbitcoin-web/.gitignore`. Otherwise `git add` will silently skip the file.

Reference the OG in the chapter frontmatter as `ogImage: "/diagrams/og/<chapter-slug>.png"` — same syntax as SVG-derived OGs.

---

## Original photography

Operator-shot photos of real hardware, stored at `learnbitcoin-web/public/photos/<name>.jpg` for single shots or `public/photos/<chapter-slug>/<name>.jpg` for chapters with multiple photos. Resized to 1200-1600px max edge at JPEG quality 72-85 (~250KB-1MB per file). Authentic device photography proves the gear is real and in use, which is the whole brand differentiator versus sites that lean on vendor marketing shots or stock imagery.

| Photo | File | Currently embedded in |
|---|---|---|
| **Hardware wallet ecosystem** | `hardware-wallet-ecosystem.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — hero shot, four vendors side by side |
| **Trezor Safe 5 PIN entry** | `trezor-safe-5-pin.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Safe 5 bullet, shows scrambled keypad |
| **Coldcard Mk4 PIN prefix** | `coldcard-mk4-pin.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Coldcard bullet, transparent case showing the chip |
| **Keystone 3 Pro retail box** | `keystone-3-pro-box.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Keystone bullet |
| **Blockstream Jade unlock** | `jade-unlock.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Jade bullet |
| **Trezor four-generation lineup** | `trezor-evolution.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — closes the section, 2014-2024 historical anchor |
| **Trezor paper backup card** | `seed-backup/paper-card.jpg` | [rabbit-holes/seed-backup-strategies §3](rabbit-holes/seed-backup-strategies.mdx) — opens the Paper section |
| **Coldcard recovery card** | `seed-backup/paper-coldcard-recovery.jpg` | [rabbit-holes/seed-backup-strategies §3](rabbit-holes/seed-backup-strategies.mdx) — closes Paper section, shows metadata fields beyond seed words |
| **Steel tube backup (dot-matrix)** | `seed-backup/steel-tube.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — tube format |
| **Steel plate backup (tile)** | `seed-backup/steel-plate-tile.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — tile-insertion format |
| **Steel plate backup (tab)** | `seed-backup/steel-plate-tab.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — bend-tab format |
| **SLIP-39 share card** | `seed-backup/shamir-shares.jpg` | [rabbit-holes/seed-backup-strategies §6](rabbit-holes/seed-backup-strategies.mdx) — 20-word Shamir share format |
| **Multisig HW lineup** | `seed-backup/multisig-three-devices.jpg` | [rabbit-holes/seed-backup-strategies §7](rabbit-holes/seed-backup-strategies.mdx) — Coldcard + Jade + Trezor (also cropped for chapter OG card at `/diagrams/og/seed-backup.jpg`) |

### How to embed a photo

Same `<figure>` block pattern as static diagrams, with a `/photos/` path:

```html
<figure>
  <img src="/photos/<name>.jpg" alt="<long descriptive alt text>" />
  <figcaption><short editorial caption>.</figcaption>
</figure>
```

Photos do not auto-rasterize into OG cards (that pipeline is SVG-only). If a photo should be a page's social card, point `ogImage` in frontmatter directly at the photo and make sure the source is close to 1200×630:

```yaml
ogImage: "/photos/<name>.jpg"
ogImageAlt: "..."
```

### Authoring new photos

Photos.app on macOS sandboxes its library bundle — CLI tools cannot read inside `~/Pictures/Photos Library.photoslibrary/`. To get photos out:

1. Export from Photos.app (File → Export → Export N Photos…) as JPEG, High quality, sRGB, 2400px long edge.
2. Save to `~/Sync/Treib Holdings LLC/<batch-name>/` (Desktop and Downloads are TCC-restricted too on this machine; the Sync folder is unrestricted).
3. Resize to web-friendly with `sips`: `sips -s format jpeg -s formatOptions 72 -Z 1200 input.jpeg --out output.jpg` (target ~250KB per photo for chapter-embedded shots; single hero shots can go larger).
4. Strip EXIF (avoids leaking phone model, GPS, timestamps): `exiftool -all= -overwrite_original output.jpg`.
5. Copy to `learnbitcoin-web/public/photos/<descriptive-name>.jpg` (single shot) or `learnbitcoin-web/public/photos/<chapter-slug>/<descriptive-name>.jpg` (chapter with multiple photos).
5. Embed via `<figure>` block (above).
6. Update the table here when adding a new photo.

---

## Interactive Svelte widgets

Live components in `learnbitcoin-web/src/components/`. Embedded in MDX (not plain markdown) via `import` + JSX-style tag. Each MDX page that embeds a widget should also declare it in the frontmatter `hasInteractive` array so the listing pages can flag it.

| Widget | Component path | Currently embedded in |
|---|---|---|
| **Bitcoin units converter** | `units/UnitsConverter.svelte` | [rabbit-holes/bitcoin-units](rabbit-holes/bitcoin-units.mdx) |
| **Bitcoin units visualization** | `units/UnitsVisualization.svelte` | [rabbit-holes/bitcoin-units](rabbit-holes/bitcoin-units.mdx) (multiple instances, one per unit) |
| **Supply chart** | `supply/SupplyChart.svelte` | [rabbit-holes/supply](rabbit-holes/supply.mdx) |
| **Halving countdown** | `halving/HalvingCountdown.svelte` | [rabbit-holes/halvings](rabbit-holes/halvings.mdx) |
| **Difficulty clock** | `mining/DifficultyClock.svelte` | [rabbit-holes/mining](rabbit-holes/mining.mdx) |
| **Mempool histogram** | `mining/MempoolHistogram.svelte` | [rabbit-holes/mining](rabbit-holes/mining.mdx), [rabbit-holes/mempool](rabbit-holes/mempool.mdx) |
| **Key space visualizer** | `keyspace/KeySpaceVisualizer.svelte` | [rabbit-holes/key-space](rabbit-holes/key-space.mdx) |

There are also site-chrome widgets (`LivePrice`, `LiveBlockHeight`) used in Astro pages only (homepage, `/node`, glossary). Those are not for content embedding.

### How to embed an interactive widget

The file must be `.mdx`, not `.md`. At the top of the body (after frontmatter, before the first heading or blockquote), import the component:

```mdx
import KeySpaceVisualizer from '@components/keyspace/KeySpaceVisualizer.svelte';
```

Then, wherever the widget belongs in the prose, drop in the tag with a hydration directive:

```mdx
<KeySpaceVisualizer client:load />
```

Hydration directives:
- `client:load` — hydrates immediately on page load. Use for above-the-fold widgets.
- `client:visible` — hydrates only when scrolled into view. Use for below-the-fold widgets (lighter on first paint).

In the chapter frontmatter, declare the widget so listing pages can flag the chapter as having interactive content:

```yaml
hasInteractive: ["keySpaceVisualizer"]
```

The string is camelCase of the component name. Multiple widgets: `["widgetA", "widgetB"]`.

### Widget configuration

Some widgets accept props. For example, `UnitsVisualization` takes a `unit` and an optional `showLabel`:

```mdx
<UnitsVisualization client:visible unit="finney" />
<UnitsVisualization client:visible unit="btc" showLabel={false} />
```

When a widget is new to you, check the `.svelte` source in the web repo for the `export let` declarations to see what it accepts.
