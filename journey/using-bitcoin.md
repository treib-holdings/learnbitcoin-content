---
title: "Using Bitcoin"
slug: using-bitcoin
draft: false
status: live
order: 5
estimatedMinutes: 30
tagline: "On-chain transactions, fees in practice, Lightning basics. Now that you have it, here's how to actually use it."
prerequisites: ["be-your-own-bank"]
relatedTerms: ["lightning-network", "transaction-fee", "fee-estimation", "lightning-channel", "payment-channel", "bolt-11", "htlc-hashed-time-locked-contract", "replace-fee-rbf", "fee-bumping"]
ogImage: "/diagrams/og/lightning-channel.png"
ogImageAlt: "A two-layer diagram of a Lightning channel between Alice and Bob. The top shows Bitcoin Mainnet as a chain of blocks with OPEN and CLOSE highlighted. Below, the channel pipe connects Alice and Bob with multiple back-and-forth payment arrows. Each has dashed channel lines to additional ghost nodes, signaling that Alice and Bob each have other channels into the wider Lightning network."
sources:
  - { label: "mempool.space - live fee dashboard", url: "https://mempool.space" }
  - { label: "Bitcoin developer guide - transactions", url: "https://developer.bitcoin.org/devguide/transactions.html" }
  - { label: "Lightning Network whitepaper (Poon & Dryja, 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "ChainQuery - fee pressure dashboard", url: "https://chainquery.com/fee-pressure" }
---

> **Where you're going:** You'll send an on-chain transaction with a fee you chose deliberately, generate a Lightning invoice, and receive a Lightning payment. Both should feel different. Both should leave you with a working mental model of when to use which.

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
- **A fee rate.** Usually in **sat/vB** (satoshis per virtual byte) - how much you'll pay per byte of transaction data.

A few things to internalize:

- **Fees are not a percentage of the amount.** Sending 1 BTC costs the same fee as sending 0.001 BTC (assuming both transactions use the same number of inputs and outputs). The fee is paying for *block space*, not for moving value. This is why Bitcoin is cheaper for large transfers and proportionally expensive for tiny ones - and why Lightning exists.
- **Always send a tiny test first** when you're using a new address for any serious amount. A few thousand sats. Confirm it arrived. Then send the rest.
- **Address checking is your job.** No central authority can reverse a misdirected transaction. Bitcoin works exactly like Bitcoin says it works.

Most wallets give you three suggested fee rates (e.g., 2 sat/vB, 5 sat/vB, 12 sat/vB) corresponding to "next several blocks," "within an hour," "next block." These are estimates based on the current state of the mempool.

## 3. Reading the Mempool

The mempool is the queue of unconfirmed transactions, sorted by fee rate. Every node has its own copy; they're nearly identical (see chapter 3).

When the mempool is empty (mining capacity exceeds demand), almost any fee gets in next block. When it's congested (demand exceeds capacity), the fee market gets real. During major events - ordinals frenzies, large liquidations, network surges - fee rates can spike from 1 sat/vB to 500+ sat/vB for a few hours.

**Tools that show you the live state:**

- [**mempool.space**](https://mempool.space) - the standard. Live mempool visualization, fee estimates, block timing.
- [**ChainQuery's fee pressure dashboard**](https://chainquery.com/fee-pressure) - live read on what's clearing right now, served from a real Bitcoin node.
- Your own node's [`estimatesmartfee`](https://chainquery.com/rpc/estimatesmartfee) - if you run one.

A sensible workflow:

1. Check current fee estimates before composing a transaction
2. Pick a fee rate based on how soon you need it confirmed
3. If you're not in a hurry, pick a low rate; mempool conditions usually clear within hours
4. If you are in a hurry, pay more

There is no "right" fee. There is "the fee you need to pay to get into the next *N* blocks." Pick *N* based on your patience.

## 4. Replace-by-Fee (RBF) - When Your Tx Gets Stuck

Suppose you sent at 5 sat/vB and then a mempool surge raised the floor to 50 sat/vB. Your transaction will sit there, possibly for hours, possibly until the mempool drops back. Bitcoin doesn't time out transactions, but if you can't wait:

**Replace-by-Fee (RBF)** lets you rebroadcast the same transaction with a higher fee. Miners prefer the higher-paying version; the original disappears from the mempool. Most modern wallets do this with one button - usually labeled "Boost," "Bump fee," or "Speed up."

The mechanics: RBF requires the original transaction to have signaled "replaceable" (a flag in the transaction). Most wallets enable this by default. If yours didn't, you have another option called **Child Pays for Parent (CPFP)**, where you spend the *change output* of your stuck transaction with a higher fee, dragging the parent into a block alongside it.

Don't memorize the mechanics. Memorize the principle: **your transaction isn't stuck forever; it's just at the wrong fee level for current conditions.** Wait or bump. And if the fee is so low that it never confirms at all, the transaction eventually drops out of the mempool (typically after about two weeks at most nodes' default expiry) and the funds return to spendable in your wallet. You never lose bitcoin to a stuck transaction - the UTXOs are still yours, the broadcast just didn't take.

## 5. The Lightning Network: An Overview

On-chain Bitcoin is excellent at high-value, low-frequency settlement. It is *not* the right layer for buying a $4 coffee. The economics don't work - you'd pay $1 in fees, your coffee would take an hour to confirm, and the block space cost would outweigh the value of the transaction.

The Lightning Network solves this by moving small, frequent payments **off-chain**, while keeping Bitcoin's settlement guarantees.

The mechanics, simplified:

1. **Open a channel.** Two parties (you and another node) commit some bitcoin to a 2-of-2 multisig address via an on-chain transaction. That's the only on-chain transaction you'll need for thousands of subsequent payments between you.
2. **Update the balance.** Inside the channel, you and the other party can update the relative balance as many times as you want, near-instantly, with cryptographic guarantees. Each update is a signed message; the latest one is the "current truth."
3. **Route payments.** If you don't have a direct channel with the person you want to pay, the network finds a path through other people's channels - A pays B, who pays C, who pays your destination - using a clever mechanism called HTLCs that makes each hop atomic.
4. **Close the channel.** Either party can close at any time by broadcasting the latest channel state on-chain. The final balances settle on Bitcoin's main chain. You're back to layer 1.

<figure>
  <img src="/diagrams/lightning-channel.svg" alt="A Lightning channel between Alice and Bob. On Bitcoin Mainnet, an OPEN block locks BTC into a 2-of-2 multisig; later, a CLOSE block settles the final balances back to mainnet. Between the two on-chain anchors, the channel runs off-chain with many back-and-forth payments. Alice and Bob each have dashed channel lines to additional ghost nodes, indicating they also have channels into the wider Lightning network." />
  <figcaption>One channel between Alice and Bob: open once on-chain, transact freely off-chain, close on-chain if ever. Each side has other channels to the wider network.</figcaption>
</figure>

Routing payments through Lightning takes milliseconds. The fees are typically a few sats - orders of magnitude smaller than on-chain fees. The settlement is final the moment the recipient sees the payment.

The whitepaper for Lightning ([Poon & Dryja, 2016](https://lightning.network/lightning-network-paper.pdf)) is dense but readable. You don't need to read it to use Lightning, but you should know it exists.

## 6. Lightning in Practice

Three categories of Lightning wallets, ordered by sovereignty:

**Custodial** - someone else runs the Lightning node, you have an account. Easiest to use, almost no setup, but you've reintroduced a trusted third party. Examples: Wallet of Satoshi, Cash App's Lightning support. **Fine for tiny working balances**, the same way a coffee-money wallet on your phone is fine. *Not where you store anything serious.*

**Non-custodial, self-hosted simplified** - you run a Lightning node *inside the app*, on your phone, with managed channel management. The keys are yours; the operational complexity is handled. Examples: Phoenix, Breez, Mutiny. **The sweet spot for most users**, especially after chapter 4.

**Fully sovereign** - you run a Lightning node on your own hardware (Umbrel, Start9, raw LND/CLN on a Linux box). Maximum control, maximum complexity. Best paired with chapter 6's full-node setup.

For your first Lightning experience, **Phoenix** (iOS/Android, by ACINQ) is the cleanest entry point: self-custodial, opens channels automatically when you receive your first payment, has a usable interface for beginners. Set it up the way you set up your on-chain wallet: install, write down the seed, back it up.

To receive a Lightning payment: in your wallet, tap "Receive," optionally enter an amount, and you'll get a long string starting with `lnbc...` (a [BOLT-11 invoice](/glossary/bolt-11/)) plus a QR code. Anyone with a Lightning wallet can pay it.

To send: paste an invoice, hit Pay, done. The payment completes in milliseconds.

## 7. When to Use On-Chain vs Lightning

A heuristic that gets most cases right:

| If your payment is... | Use... | Why |
|---|---|---|
| Under $50 | Lightning | Fees and speed both favor LN |
| $50 to a few hundred | On-chain or LN | Personal preference |
| A few hundred to a few thousand | On-chain or LN | LN works fine, on-chain is fine if you're not in a rush |
| Over a few thousand | On-chain | LN channel capacity limits + settlement preference |
| To someone who doesn't have LN | On-chain | They can't receive what they can't receive |
| Repeated payments to the same party | Open an LN channel | Pay once, transact forever |
| Long-term storage | Neither - just don't move it | Cold storage, see chapter 4 |

Most people use both. A Lightning wallet on the phone for daily stuff; an on-chain wallet (preferably on hardware) for holding.

## 8. Receiving Payments

The flip side of sending: how to *get* paid.

**On-chain:**
- Generate a fresh address each time. Modern wallets do this automatically.
- Avoid address reuse. It's a privacy leak - anyone who sees the address can later see all subsequent receipts to it. (Newer wallets default to never showing the same address twice.)
- Share the address as a string or a QR code. The sender pays at whatever fee rate they pick; you have no control over the fee.

**Lightning:**
- Generate an invoice. You can specify an amount (e.g., "pay me 5,000 sats") or leave it open ("pay me any amount").
- Invoices are time-limited - usually one hour. After they expire, you generate a new one.
- The sender pays your invoice; the payment arrives in milliseconds; the invoice is consumed.

There's an emerging standard called **Lightning Address** (looks like an email: `you@yourdomain.com`) that lets people pay you without generating a new invoice each time. Convenient, but requires running a small server or using a service that does. Optional for most users, useful if you do public-facing work that takes tips.

## 9. The Sovereignty Side-Effects

Once you're using Bitcoin for real, a few things become tangible that were previously abstract:

- **You can pay anyone, anywhere, anytime.** No bank hours. No correspondent banking. No "we can't send to that country." A wallet on a phone with internet is a global financial terminal.
- **Privacy is your job.** Every on-chain transaction is public forever. Avoid address reuse. Consider coin control if you're handling sensitive amounts. We have a [Privacy Best Practices](/downloads/bitcoin-privacy-best-practices.pdf) PDF on this site; read it before serious use.
- **Mistakes are permanent.** Wrong address, wrong amount, wrong network - there's no helpdesk. Always test small first. Always verify before sending.
- **You're a target.** Anyone who knows you hold real bitcoin is, statistically, a slightly elevated security risk. Don't talk publicly about how much you hold. Don't put a sign outside your house that says "I HODL." The threat is low for most people but nonzero.

These aren't reasons to avoid Bitcoin. They're the operational consequences of opting out of the trusted-third-party world. Worth it. Just real.

## 10. Your Milestone

Before chapter 6 (Sovereignty - running a node, multisig, op-sec), do these three things:

- [ ] Send a deliberate on-chain transaction - pick the fee rate yourself, watch it confirm
- [ ] Open a Lightning channel or fund a self-custodial LN wallet (Phoenix is the easy path)
- [ ] Send and receive a Lightning payment - it should take seconds

That's it. You're using Bitcoin, not just holding it. Welcome to actually living in the new monetary system.

> **Pro tip:** People who say "Bitcoin is too slow for payments" are usually thinking about on-chain only. People who say "Lightning is the future of payments" sometimes forget on-chain exists. Both layers are real, both have jobs, and using Bitcoin well means knowing which is which. The system was designed to be flexible. Use the flexibility.
