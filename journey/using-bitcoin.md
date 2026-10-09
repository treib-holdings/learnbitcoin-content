---
title: "Using Bitcoin"
slug: using-bitcoin
draft: false
status: live
published: "2026-05-15"
updated: "2026-10-09"
order: 5
estimatedMinutes: 30
tagline: "On-chain transactions, fees in practice, Lightning basics. Now that you have it, here's how to actually use it."
prerequisites: ["be-your-own-bank"]
relatedTerms: ["lightning-network", "transaction-fee", "fee-estimation", "lightning-channel", "payment-channel", "bolt-11", "htlc-hashed-time-locked-contract", "replace-fee-rbf", "fee-bumping"]
ogImage: "/diagrams/og/bitcoin-lifecycle.png"
ogImageAlt: "Final frame of the Bitcoin transaction lifecycle animation. Alice's wallet on the left shows the transaction she sent (To bc1q...x4z, Amount 0.1 BTC, Fee 20 sat/vB, SEND button). Bob's wallet on the right shows the receipt (+0.1 BTC) with the confirmations counter at Final in orange. The blockchain strip across the bottom shows seven sequential blocks 920,247 through 920,253; Alice's block at 920,251 is highlighted orange. Caption: Three blocks deep. Effectively final."
sources:
  - { label: "mempool.space - live fee dashboard", url: "https://mempool.space" }
  - { label: "Bitcoin developer guide - transactions", url: "https://developer.bitcoin.org/devguide/transactions.html" }
  - { label: "BIP 125 - Opt-in Full Replace-by-Fee Signaling", url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki" }
  - { label: "Lightning Network whitepaper (Poon & Dryja, 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "ChainQuery - fee pressure dashboard", url: "https://chainquery.com/fee-pressure" }
  - { label: "BIP 141 - Segregated Witness (virtual size is transaction weight divided by 4)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "mempool.space API docs - recommended fees (fastestFee, halfHourFee, hourFee)", url: "https://mempool.space/docs/api/rest#get-recommended-fees" }
  - { label: "Bitcoin Core source - fee estimator tracks how long past transactions took to confirm", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/fees/block_policy_estimator.h" }
  - { label: "Bitcoin Core PR #34075 - mempool-based fee estimation (merged August 2026 for version 32.0)", url: "https://github.com/bitcoin/bitcoin/pull/34075" }
  - { label: "Ordinals docs - Runes specification (activates on block 840,000)", url: "https://docs.ordinals.com/runes/specification.html" }
  - { label: "mempool.space - block 840,002, first block over 500 sat/vB median after the April 20, 2024 halving", url: "https://mempool.space/block/00000000000000000002c0cc73626b56fb3ee1ce605b0ce125cc4fb58775a0a9" }
  - { label: "mempool.space - block 840,005, median fee rate about 2,879 sat/vB", url: "https://mempool.space/block/000000000000000000027b0ec0e3acadd018cd19e7dd976602f216a1bc12d079" }
  - { label: "mempool.space - block 840,064 (11:00 UTC April 20, 2024), last of the run over 500 sat/vB", url: "https://mempool.space/block/00000000000000000001289854c5bbc59c15dc0d0e73ba477222aa8f7da90e04" }
  - { label: "mempool.space - mempool size graph, all-time view (over 144 vMB, a full day of blocks, waiting at every 12-hour reading from November 3, 2023 to July 14, 2024)", url: "https://mempool.space/graphs/mempool#all" }
  - { label: "Bitcoin Core GUI source - Increase transaction fee menu item", url: "https://github.com/bitcoin-core/gui/blob/master/src/qt/transactionview.cpp" }
  - { label: "Electrum source - Bump fee button", url: "https://github.com/spesmilo/electrum/blob/master/electrum/gui/qml/components/TxDetails.qml" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024) - mempoolfullrbf default changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 30.0 release notes (October 2025) - wallet fee bumps no longer require BIP-125 signaling", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Child pays for parent (CPFP)", url: "https://bitcoinops.org/en/topics/cpfp/" }
  - { label: "Bitcoin Core source - kernel/mempool_options.h (default mempool expiry 336 hours)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/mempool_options.h" }
  - { label: "ChainQuery - abandontransaction RPC reference", url: "https://chainquery.com/rpc/abandontransaction" }
  - { label: "blockchain.com - bitcoin market price (about $63,800 on April 20, 2024)", url: "https://www.blockchain.com/explorer/charts/market-price" }
  - { label: "Bitcoin Core source - kernel/chainparams.cpp (10-minute block target)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "BOLT 2 - Peer protocol (the funder puts up the channel's bitcoin; dual funding is an option)", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT 4 - Onion routing (the route is constructed by the origin node)", url: "https://github.com/lightning/bolts/blob/master/04-onion-routing.md" }
  - { label: "mempool.space - Lightning network statistics (median channel fee 100 ppm plus 0.5 sat base, August 2026)", url: "https://mempool.space/lightning" }
  - { label: "BOLT 11 - Invoice protocol (lnbc prefix; expiry defaults to 3600 seconds when not set)", url: "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md" }
  - { label: "LND API docs - AddInvoice (expiry defaults to 86,400 seconds)", url: "https://lightning.engineering/api-docs/api/lnd/lightning/add-invoice/" }
  - { label: "Core Lightning docs - invoice (expiry defaults to 604,800 seconds)", url: "https://docs.corelightning.org/reference/invoice" }
  - { label: "LUD-16 - Lightning Address specification", url: "https://github.com/lnurl/luds/blob/luds/16.md" }
  - { label: "BOLT 12 - Offers (added to the Lightning spec in September 2024)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "Bitcoin Optech - Offers (implementation progress by year)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "Jameson Lopp - Known physical bitcoin attacks (365 entries, December 2014 to October 2026)", url: "https://github.com/jlopp/physical-bitcoin-attacks" }
---

> **Where you're going:** You'll send an on-chain transaction with a fee you chose deliberately, generate a Lightning invoice, and receive a Lightning payment. Both should feel different. Both should leave you with a working mental model of when to use which.

<figure>
  <video
    src="/videos/bitcoin-lifecycle.mp4"
    poster="/videos/posters/bitcoin-lifecycle.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated walkthrough of an on-chain Bitcoin transaction lifecycle. Alice's wallet shows three fields - destination address, amount, fee rate - and a SEND button. A transaction packet leaves her wallet and joins the mempool, a fee-sorted queue of unconfirmed transactions. Alice's transaction slots into its fee tier. A miner selects the top of the mempool; the chosen transactions including Alice's zip into a forming block. The block is sealed and snaps onto the end of the chain. Bob's wallet receives a notification of plus 0.1 BTC. A confirmation counter ticks from 1 to 2 to 3 to Final. Closing pillars: Public. Final. Yours."
  ></video>
  <figcaption>Send. Sit in the mempool sorted by fee. Sealed into a block. Snapped onto the chain. Confirmed at the recipient. No intermediary anywhere in the loop.</figcaption>
</figure>

## 1. You Hold Some. Now What?

Self-custody is the foundation. *Use* is what gives it a point.

Most people, once they self-custody, treat their bitcoin like a savings bond they're afraid to touch. That's fine - bitcoin is genuinely excellent as a savings instrument, and *not selling* is a real strategy. But Bitcoin is also money, and money that never circulates isn't really money. This chapter is how to use it.

The two layers we care about:

- **On-chain.** Transactions that settle in a Bitcoin block. Final, global, slower, fee-bearing. Best for: large amounts, infrequent payments, anything you want recorded permanently.
- **Lightning.** Payments that move through a network of bidirectional payment channels built on top of Bitcoin. Instant, near-free, smaller amounts. Best for: coffee, tips, podcast subscriptions, micropayments, day-to-day.

You'll use both. Knowing which is which is most of the skill.

## 2. The Anatomy of Sending On-Chain

Open your wallet. Tap Send. You'll be asked for three things:

- **A destination address.** A long string starting with `bc1` (modern format) or `3` or `1` (older formats). Always paste from a trusted source. Always double-check the first and last several characters. Treat addresses like account numbers, not URLs.
- **An amount.** In BTC or sats, your call. Modern wallets let you toggle.
- **A fee rate.** Usually in **sat/vB** (satoshis per virtual byte), the price for each unit of your transaction's size. A virtual byte works like a byte, except signature data counts at a quarter of its real size.

A few things to internalize:

- **Fees are not a percentage of the amount.** Sending 1 BTC costs the same fee as sending 0.001 BTC (assuming both transactions use the same number of inputs and outputs). The fee is paying for *block space*, not for moving value. This is why Bitcoin is cheaper for large transfers and proportionally expensive for tiny ones - and why Lightning exists.
- **Always send a tiny test first** when you're using a new address for any serious amount. A few thousand sats. Confirm it arrived. Then send the rest.
- **Address checking is your job.** No central authority can reverse a misdirected transaction. Bitcoin works exactly like Bitcoin says it works.

Many wallets give you three suggested fee rates (e.g., 2 sat/vB, 5 sat/vB, 12 sat/vB) corresponding to "within about an hour," "within about half an hour," and "next block." These are estimates. Some are built from the current mempool. Bitcoin Core versions through 31 base theirs only on how long recent transactions at each fee rate took to confirm. Version 32, in release testing as of October 2026, also reads the current mempool.

## 3. Reading the Mempool

<figure>
  <video
    src="/videos/mempool.mp4"
    poster="/videos/posters/mempool.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated mempool lifecycle. A transaction is broadcast and propagates across four nodes, each of which adds it to their local mempool. Transactions are sorted by fee rate into bands - 50 plus sat per virtual byte at the top, scaling down to 1-5 sat per virtual byte at the bottom. Alice broadcasts at a low fee rate early; Bob broadcasts later at a high fee rate. A miner mines the next block by scooping the top fee band. Bob confirms in that block. Time passes; subsequent blocks drain the mempool further; eventually Alice's low-fee transaction confirms several blocks later. Closing tagline: Pay the rate. Or wait."
  ></video>
  <figcaption>The mempool is a fee-rate-sorted queue. Higher fees confirm first. Lower fees wait, or eventually drop out and have to be rebroadcast.</figcaption>
</figure>

The mempool is the queue of unconfirmed transactions, sorted by fee rate. Every node has its own copy; they're nearly identical (see chapter 3).

When the mempool is empty (block space exceeds demand), almost any fee gets in next block. When it's congested (demand exceeds capacity), the fee market gets real, and fee rates can jump into the hundreds or even thousands of sat/vB.

In the hours before block 840,000 on April 20, 2024, the median fee rate in mined blocks was about 60 to 110 sat/vB. That block brought the [fourth halving](/rabbit-hole/halvings), and it also switched on Runes, a new token protocol. Two blocks later the median passed 500 sat/vB. It stayed there for nearly 11 hours, peaking near 2,900 sat/vB.

**Tools that show you the live state:**

- [**mempool.space**](https://mempool.space) - the standard. Live mempool visualization, fee estimates, block timing.
- [**ChainQuery's fee pressure dashboard**](https://chainquery.com/fee-pressure) - live read on what's clearing right now, served from a real Bitcoin node.
- Your own node's [`estimatesmartfee`](https://chainquery.com/rpc/estimatesmartfee) - if you run one.

A sensible workflow:

1. Check current fee estimates before composing a transaction
2. Pick a fee rate based on how soon you need it confirmed
3. If you're not in a hurry, pick a low rate. In quiet periods a low-fee transaction usually confirms within hours, but in a busy stretch it can wait days. From early November 2023 to mid-July 2024, every mempool.space reading (one every 12 hours) showed a backlog bigger than a full day of blocks could hold.
4. If you are in a hurry, pay more

There is no "right" fee. There is "the fee you need to pay to get into the next *N* blocks." Pick *N* based on your patience.

## 4. Replace-by-Fee (RBF) - When Your Tx Gets Stuck

<figure>
  <img src="/diagrams/bumping-stuck-tx.svg" alt="Two-row diagram of the two mechanisms for unsticking a Bitcoin transaction. Top row, RBF: a stuck transaction at 5 sat per virtual byte (gray) is replaced by the same transaction at 50 sat per virtual byte (orange), which confirms in the next block while the original disappears. Bottom row, CPFP: a stuck parent at 5 sat per virtual byte (gray) has its change output spent by a new child transaction at 50 sat per virtual byte (orange); both parent and child end up in the next block because the miner sees the combined fee. Tagline: Your transaction is not stuck forever. It is at the wrong fee level for current conditions." />
  <figcaption>Two mechanisms, same outcome: a stuck transaction gets into the next block. RBF replaces the original. CPFP rescues it via a high-fee child.</figcaption>
</figure>

Suppose you sent at 5 sat/vB and then a mempool surge raised the floor to 50 sat/vB. Your transaction will sit there, possibly for hours, possibly until the mempool drops back. If you can't wait:

**Replace-by-Fee (RBF)** ([BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki)) lets you broadcast a new version of the transaction, spending the same coins, with a higher fee. Miners prefer the higher-paying version; the original disappears from the mempool. Many wallets do this with one button, usually labeled something like "Bump fee" or "Increase fee."

Under BIP-125, the original transaction signals that it is "replaceable" with a flag. Since version 28.0 (October 2024), Bitcoin Core nodes on default settings accept a higher-fee replacement even without that flag. Your wallet may still refuse to bump a transaction that lacks it; Bitcoin Core's own wallet did until version 30.0 (October 2025).

If yours won't bump, you have another option called **Child Pays for Parent (CPFP)**, where you spend the *change output* of your stuck transaction with a higher fee, dragging the parent into a block alongside it.

Don't memorize the mechanics. Memorize the principle: **your transaction isn't stuck forever; it's just at the wrong fee level for current conditions.** Wait or bump.

If the fee is so low that it never confirms, most nodes eventually drop it from their mempools (Bitcoin Core's default expiry is two weeks), and you can spend those coins again. Some wallets make you cancel or "abandon" the old transaction first. It stays valid until another transaction spending the same coins confirms, so it can still confirm if someone rebroadcasts it. You never lose bitcoin to a stuck transaction - the UTXOs are still yours, the broadcast just didn't take.

## 5. The Lightning Network: An Overview

On-chain Bitcoin is excellent at high-value, low-frequency settlement. It is *not* the right layer for buying a $4 coffee. The fee is the same whether you send $4 or $4,000, so on a busy day it can cost more than the coffee.

During the April 2024 Runes spike (section 3), the median fee rate stayed above 500 sat/vB for hours. Even at 500 sat/vB, a simple payment with one input and two outputs (about 141 vbytes) cost 70,500 sats, about $45 at that day's price. The first confirmation also takes about 10 minutes on average.

The Lightning Network solves this by moving small, frequent payments **off-chain**, while letting either side settle on Bitcoin's main chain at any time.

The mechanics, simplified:

1. **Open a channel.** Two parties (you and another node) lock bitcoin into a 2-of-2 multisig address via an on-chain transaction; usually one side puts up all of it. That's the only on-chain transaction you'll need for thousands of subsequent payments between you.
2. **Update the balance.** Inside the channel, you and the other party can update the relative balance as many times as you want, near-instantly, with cryptographic guarantees. Each update is a signed message; the latest one is the "current truth."
3. **Route payments.** If you don't have a direct channel with the person you want to pay, your wallet finds a path through other people's channels - A pays B, who pays C, who pays your destination - using a clever mechanism called HTLCs that ties every hop to the same secret, so the payment goes through end to end or not at all.
4. **Close the channel.** Either party can close at any time by broadcasting the latest channel state on-chain. The final balances settle on Bitcoin's main chain. You're back to layer 1.

<figure>
  <img src="/diagrams/lightning-channel.svg" alt="A Lightning channel between Alice and Bob. On Bitcoin Mainnet, an OPEN block locks BTC into a 2-of-2 multisig; later, a CLOSE block settles the final balances back to mainnet. Between the two on-chain anchors, the channel runs off-chain with many back-and-forth payments. Alice and Bob each have dashed channel lines to additional ghost nodes, indicating they also have channels into the wider Lightning network." />
  <figcaption>One channel between Alice and Bob: open once on-chain, transact freely off-chain, close on-chain if ever. Each side has other channels to the wider network.</figcaption>
</figure>

A Lightning payment doesn't wait for a block, so it usually completes within seconds. For small payments, routing fees are typically a few sats, far below on-chain fees. The settlement is final the moment the recipient sees the payment.

The whitepaper for Lightning ([Poon & Dryja, 2016](https://lightning.network/lightning-network-paper.pdf)) is dense but readable. You don't need to read it to use Lightning, but you should know it exists.

## 6. Lightning in Practice

<figure>
  <video
    src="/videos/lightning-mesh.mp4"
    poster="/videos/posters/lightning-mesh.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated Lightning Network mesh. Alice has a single channel to Bob. She uses that same channel to pay Bob directly, then to route payments to Carol, Frank, and Ivy through the network. The animation then reverses to show payments flowing back to Alice through the same one channel. The bidirectional flow is the lesson: one channel, many destinations, both directions."
  ></video>
  <figcaption>Alice opens one channel - to Bob. Same channel routes payments to anyone reachable in the network, in either direction.</figcaption>
</figure>

Three categories of Lightning wallets, ordered by sovereignty. The category matters more than the specific app.

**Custodial.** Someone else runs the Lightning node; you have an account. Easiest setup, almost no operational complexity. You have reintroduced a trusted third party. Fine for tiny working balances, the same way a coffee-money wallet on your phone is fine. *Not where you store anything serious.*

**Non-custodial, managed.** You run a Lightning node *inside the app*, on your phone, with channel management abstracted. The keys are yours; the operational complexity is handled. The sweet spot for most users post-chapter-4.

**Fully sovereign.** You run a Lightning node on your own hardware. Maximum control, maximum complexity. Best paired with the node setup in [chapter 6 (Sovereignty)](/journey/sovereignty).

> **Starting points, not gospel.** The Lightning wallet ecosystem moves quickly. Specific apps come and go; the categories are stable. Pick the simplest option in the category that fits your trust model, verify it is currently maintained, and start.

To receive a Lightning payment: in your wallet, tap "Receive," optionally enter an amount, and you'll get a long string starting with `lnbc...` (a [BOLT-11 invoice](/glossary/bolt-11)) plus a QR code. Anyone with a Lightning wallet can pay it.

To send: paste an invoice, hit Pay, done. The payment usually completes within seconds.

## 7. When to Use On-Chain vs Lightning

A heuristic that gets most cases right:

<figure>
  <img src="/diagrams/on-chain-vs-lightning.svg" alt="Three side-by-side cards showing the recommended Bitcoin layer by payment size. Small payments under $50 use Lightning - fees and speed both favor it. Medium payments $50 to a few thousand either works - personal preference. Large payments above a few thousand use on-chain - Lightning channel capacity limits plus settlement preference. Three special cases below: recipient without a Lightning wallet means on-chain; repeated payments to the same party means open a Lightning channel; long-term storage means do not move it at all. Tagline: most people use both; knowing which is which is most of the skill." />
  <figcaption>Three payment-size lanes plus three special cases. Most real-world payments fit somewhere on this card.</figcaption>
</figure>

Many people use both. A Lightning wallet on the phone for daily stuff; an on-chain wallet (preferably on hardware) for holding.

## 8. Receiving Payments

The flip side of sending: how to *get* paid.

**On-chain:**
- Generate a fresh address each time. Modern wallets do this automatically.
- Avoid address reuse. It's a privacy leak - anyone who sees the address can later see all subsequent receipts to it.
- Share the address as a string or a QR code. The sender pays at whatever fee rate they pick. If their payment gets stuck, you can pull it through yourself with CPFP (section 4) by spending your new output at a higher fee, if your wallet supports it.

**Lightning:**
- Generate an invoice. You can specify an amount (e.g., "pay me 5,000 sats") or leave it open ("pay me any amount").
- Invoices expire. If an invoice doesn't say when, the Lightning invoice spec (BOLT-11) treats it as good for one hour. Node software often sets a longer default, such as 24 hours (LND) or a week (Core Lightning). After one expires, you generate a new one.
- The sender pays your invoice; the payment usually arrives within seconds; the invoice is consumed.

There's a convention called **Lightning Address** (looks like an email: `you@yourdomain.com`) that lets people pay you without asking you for a new invoice each time; a web server at that domain creates a fresh one for each payment. Convenient, but requires running that server or using a service that does. Optional for most users, useful if you do public-facing work that takes tips.

**Offers** ([BOLT-12](/glossary/bolt), added to the Lightning spec in September 2024) are reusable payment codes that need no web server. As of October 2026, wallet support is still uneven.

## 9. The Sovereignty Side-Effects

Once you're using Bitcoin for real, a few things become tangible that were previously abstract:

- **You can pay anyone, anywhere, anytime.** No bank hours. No correspondent banking. No "we can't send to that country." A wallet on a phone with internet is a global financial terminal.
- **Privacy is your job.** Every on-chain transaction is public forever. Avoid address reuse. Consider coin control if you're handling sensitive amounts. We have a [Privacy Best Practices](/downloads/bitcoin-privacy-best-practices.pdf) PDF on this site; read it before serious use.
- **Mistakes are permanent.** Wrong address, wrong amount, wrong network - there's no helpdesk. Always test small first. Always verify before sending.
- **You're a target.** Each person who knows you hold real bitcoin adds a little to your risk. As of October 2026, Jameson Lopp's public list of physical attacks on people and businesses holding bitcoin or other crypto has 365 entries since December 2014, 86 of them in 2025, and it notes that many attacks are not publicly reported. Don't talk publicly about how much you hold. Don't put a sign outside your house that says "I HODL." The threat is low for most people but nonzero.

These aren't reasons to avoid Bitcoin. They're the operational consequences of opting out of the trusted-third-party world. Worth it. Just real.

## 10. Your Milestone

Before chapter 6 (Sovereignty - running a node, multisig, op-sec), do these three things:

- [ ] Send a deliberate on-chain transaction - pick the fee rate yourself, watch it confirm
- [ ] Open a Lightning channel or fund a self-custodial LN wallet (the non-custodial managed category in section 6 is the easy path)
- [ ] Send and receive a Lightning payment - it should take seconds

That's it. You're using Bitcoin, not just holding it. Welcome to actually living in the new monetary system.

> **Pro tip:** People who say "Bitcoin is too slow for payments" are usually thinking about on-chain only. People who say "Lightning is the future of payments" sometimes forget on-chain exists. Both layers are real, both have jobs, and using Bitcoin well means knowing which is which. The system was designed to be flexible. Use the flexibility.
