---
title: "What Bitcoin Actually Is"
slug: what-bitcoin-actually-is
draft: false
status: live
order: 2
estimatedMinutes: 25
tagline: "Not a stock. Not a company. Not a payment app. Bitcoin is a new kind of money — and the difference matters."
prerequisites: ["why-money-is-broken"]
relatedTerms: ["satoshi-nakamoto", "whitepaper", "proof-work-pow", "decentralization", "halving-halvening", "genesis-block", "block-subsidy", "hash"]
sources:
  - { label: "Bitcoin Whitepaper (Satoshi Nakamoto, 2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Genesis block — bitcoin.org explorer", url: "https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Cypherpunks mailing list announcement (October 31, 2008)", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
  - { label: "Satoshi Nakamoto Institute — Bitcoin emails", url: "https://satoshi.nakamotoinstitute.org/emails/" }
---

> **Where you're going:** You'll be able to describe Bitcoin from first principles — not as a "coin" or "investment," but as a network, a protocol, and a fixed supply of monetary units governed by rules no one can change unilaterally. By the end you'll know who made it, what it actually does, and what trade-offs it asks of you.

## 1. A Strange Email

On Friday, October 31, 2008 — Halloween — at 2:10pm Eastern, an email landed on the cypherpunks mailing list. The sender was someone calling themselves Satoshi Nakamoto. The subject line was unremarkable: *"Bitcoin P2P e-cash paper."* The body was nine sentences.

It linked to an attached PDF: *Bitcoin: A Peer-to-Peer Electronic Cash System*. Nine pages. Eight references. No marketing.

The context matters. Lehman Brothers had collapsed six weeks earlier. The financial crisis was at full boil. The US government had just signed a $700 billion bank bailout. Every major economy was scrambling to keep its banking system from imploding. The Federal Reserve had begun the largest monetary expansion in history.

Satoshi's email was, in retrospect, the polite version of *"Maybe try this instead."*

Sixty-eight days later, on January 3, 2009, Satoshi mined the first block of the Bitcoin network. Embedded in that block — permanently, unforgeably — was a string of text:

> *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."*

It was the front-page headline of the London *Times* that morning. It is still there, fifteen years later, in every full copy of the Bitcoin blockchain on Earth.

This chapter is about what that strange email pointed at.

## 2. What Bitcoin Is (and Isn't)

Most people meet Bitcoin through its price. That's the wrong door. Let's reset.

**Bitcoin is, at the same time, three things:**

- **A network** — thousands of computers around the world running compatible software, talking to each other, keeping a shared ledger
- **A protocol** — the precise rules every one of those computers follows: what's a valid transaction, what's a valid block, how new units are issued, what wins ties
- **A unit of account** — the 21-million-supply asset whose movements that network tracks

Crucially, **Bitcoin is not:**

- A stock — there's no company behind it
- A token — it's not built on top of another network
- A payment app — it's the layer underneath payment apps
- "Crypto" — that's a marketing umbrella that mostly refers to other things

Bitcoin has no CEO. No board. No headquarters. No legal entity. No marketing budget. No customer service. If you have a question, you read the code. If you want to use it, you run software. If you want to change it, you'll need to convince every other participant to change too — which has been attempted, and which we'll get to.

This is *deeply* unlike everything else in the modern financial system. It's also the only design that produces the properties we listed at the end of chapter 1.

## 3. The Whitepaper in Five Minutes

The whitepaper is nine pages and you can read it in an hour. The argument runs like this:

**The problem.** Online commerce relies on trusted third parties — banks, payment processors — to settle transactions. Those intermediaries can reverse payments, freeze funds, deny service, and require identification. They also add cost and friction. Cash works without trusted third parties. Online cash, until now, did not.

**The proposal.** A digital cash system in which transactions are broadcast to a network, batched into blocks, and ordered by a competitive computation called proof-of-work. The longest chain of these blocks is the truth.

**The key insight.** The network reaches agreement on transaction order *without* anyone in charge — because reorganizing past blocks gets exponentially harder the deeper you go. The system has no off-switch and no editor.

**The economics.** Participants who add new blocks ("miners") are paid in newly-issued bitcoin. New issuance shrinks on a fixed schedule, so total supply asymptotes to a hard cap. There will never be more than approximately 21 million bitcoin.

That's it. That's the whitepaper. The rest is engineering.

## 4. The 21 Million Cap

Where does 21 million come from?

Bitcoin issues new units as a reward for mining each block. A block happens roughly every 10 minutes. The reward started at 50 BTC and halves every 210,000 blocks — about every four years.

Here's the math:

```
50 + 25 + 12.5 + 6.25 + 3.125 + ... = 100 BTC per halving cycle
210,000 blocks × 100 BTC = 21,000,000 BTC (rounded; actual: 20,999,999.9769)
```

The supply is a geometric series that converges. New issuance approaches zero asymptotically. The last fractional satoshi will be mined around the year 2140.

The cap is enforced by every full node on the network. If a miner tried to issue more than the schedule allows, every other node would reject the block as invalid. The cap isn't a promise. It's not legislation. It's not a guideline. It is a property of the software that every participant runs.

To change the 21M cap, you would have to convince virtually every node operator on Earth to run different software. The political cost of doing that is the social contract that makes Bitcoin valuable in the first place — break it, and you break what you were trying to inherit.

This is what "sound money" means, technically. Not "we promise to be careful." But "the rules are the rules and you can verify them yourself."

## 5. Proof-of-Work as the World's Loudest Clock

Mining is the part most people get wrong. Let's get it right.

A Bitcoin block is just a list of transactions plus a header. To "mine" a block, a computer tries to find a number (a "nonce") such that the cryptographic hash of the header is below a certain target. Most numbers don't work. You guess, you check, you guess, you check. Trillions of times per second.

When someone finds a valid nonce, they broadcast the block to the network. Everyone checks the work (cheap — just one hash) and adds it to their copy of the chain.

Why bother? Two reasons.

**One: it's the network's clock.** Roughly every 10 minutes, a block appears. That cadence anchors the entire system. Without proof-of-work, there's no objective way for participants spread across the world to agree on what happened first.

**Two: it makes rewriting history expensive.** To reorganize old blocks, an attacker would need to redo all the proof-of-work that has accumulated since — outpacing the rest of the world's mining at the same time. The deeper the block, the more astronomical the cost. After six blocks (about an hour), it's effectively impossible.

The energy use is the feature. It's what converts physical reality (electricity, hardware, time) into the security that protects every Bitcoin in existence. Gold gets its monetary properties from being hard to dig out of the ground. Bitcoin gets its monetary properties from being hard to add blocks to. The mechanism is different. The role is the same.

## 6. The Halving Schedule

Every 210,000 blocks, the block reward halves. This is not an opinion poll. It is a line of code that every node enforces.

| Halving | Block height | Approx. date | New reward |
|---|---|---|---|
| Genesis | 0 | Jan 3, 2009 | 50 BTC |
| First | 210,000 | Nov 28, 2012 | 25 BTC |
| Second | 420,000 | Jul 9, 2016 | 12.5 BTC |
| Third | 630,000 | May 11, 2020 | 6.25 BTC |
| Fourth | 840,000 | Apr 19, 2024 | 3.125 BTC |
| Fifth | 1,050,000 | ~2028 | 1.5625 BTC |

The annual issuance rate of new bitcoin, once high, is now lower than the rate at which new gold is mined out of the ground. After the next halving it will be lower again. The asymptote is zero.

Compare that to fiat. The US M2 money supply roughly tripled from 2008 to 2022, a 14-year span across which Bitcoin's supply expanded on its predetermined geometric path, regardless of who was in office.

This is what scarcity looks like when it's encoded in math instead of policy.

## 7. The Question of Who's in Charge

A lot of people, hearing "no CEO, no company," assume Bitcoin must therefore be a free-for-all. It isn't.

There are three groups of participants, and they keep each other honest:

- **Node operators** — anyone running Bitcoin software that validates every transaction and every block. Their copy of the rules is what counts as Bitcoin. There are tens of thousands.
- **Miners** — specialized computers competing to add the next block in exchange for the reward. They produce blocks but they don't *make the rules*; if they produce an invalid block, nodes reject it and the work is wasted.
- **Developers** — people who write the software. There are several independent implementations; the dominant one is called Bitcoin Core. Developers can propose changes, but they cannot impose them; nodes choose what software to run.

This is the genuinely radical part. **No one is in charge.** Not the largest miner. Not the most prolific developer. Not the wealthiest holder. The rules are upheld by everyone running a node, and changes to the rules require near-universal agreement. There have been attempted "takeovers" — chiefly in 2017, by a coalition of large miners and businesses — and the network defeated them by simply continuing to enforce the existing rules. The fork that resulted is now a footnote.

**About Satoshi.** The person or people who created Bitcoin disappeared in 2010. They left no will, no trademark, no foundation, no chosen successor. Their early mined coins have never moved. We don't know who they were. We probably never will. This is a feature: there is no founder to capture, coerce, or compromise. Bitcoin has been ownerless for nearly its entire existence. That is part of what makes it durable.

## 8. The Properties, Re-Examined

Chapter 1 ended with a list of six properties we'd want from sound money. Let's check Bitcoin against each:

- **Portable** — bitcoin moves at the speed of an internet packet. A billion dollars can cross any border in minutes.
- **Divisible** — one bitcoin divides into 100 million satoshis. (See the [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units) for the full scale.)
- **Durable** — the network has run continuously since January 2009 with one known outage in its first eight months and zero since. Your coins exist as long as the network exists.
- **Verifiable** — you can run a node on a laptop and personally verify the entire history. No trust required.
- **Scarce** — capped at 21 million by code that every node enforces. The cap has never been raised. It almost certainly never will be.
- **Sovereign** — no government, no company, no individual can issue, freeze, seize, or invalidate your bitcoin without your private key.

Gold satisfies most of these too — and was, for thousands of years, the world's best money. Bitcoin's claim is that it satisfies all six *and* removes gold's downsides (custodianship, divisibility at small scales, settlement speed). Whether that claim holds is something you'll decide for yourself by chapter 6.

## 9. The Honest Trade-offs

"Bitcoin only. No bullshit." applies to the bull case too.

**Volatility.** Bitcoin's price is volatile in fiat terms. This is partly because monetization is a process, not an event; partly because the asset is still small relative to global wealth. The volatility decreases over time but is real today.

**On-chain settlement speed.** A Bitcoin transaction takes roughly 10 minutes to confirm and an hour to be considered fully settled. This is a deliberate trade-off — slower settlement makes the system harder to attack — but it means on-chain isn't ideal for buying coffee. (The Lightning Network solves this, mostly; chapter 5.)

**Learning curve.** The user experience has improved enormously but is still not as smooth as your banking app. Self-custody requires you to take responsibility for your keys. Losing them means losing your coins. There's no helpdesk.

**Energy use.** Bitcoin's mining network uses significant electricity — roughly 0.5% of global consumption, varying by season. That energy isn't wasted (it secures the network and increasingly comes from stranded renewables) but it isn't free. Whether that cost is worth what it buys is a values question.

**Custody risk.** If you self-custody, you carry the risk. If you don't self-custody, you've reintroduced exactly the trusted third parties Bitcoin was designed to eliminate. Both have failure modes.

None of these trade-offs are fatal. None are hidden. They're the price of admission.

## 10. Where We Go From Here

You've now met Bitcoin at the conceptual level. You know what it is, who made it, why it has the properties it has, and what it costs to use.

Chapter 3 is *how it works under the hood* — the machinery. Blocks, transactions, mempool, fees, UTXOs. The model that lets you reason about Bitcoin instead of just believing in it.

Chapter 4 is *owning it for real*. Seed phrases, hardware wallets, self-custody. You'll do it, not just read about it.

For now, sit with the thing you just learned. **Money got broken in 1971. Sixty-eight days after the 2008 financial crisis peaked, someone proposed an alternative. Fifteen years later, it's still running, the supply schedule is still on track, and the rules haven't changed.** That's the basic fact of the matter. Everything else is detail.

> **Pro tip:** If you want to verify *any* claim in this chapter, the [bitcoin.org whitepaper](https://bitcoin.org/bitcoin.pdf) is nine pages and unchanged since 2009. The [genesis block](https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f) is still there, with the *Times* headline embedded in it. The network has been running, with public source code, for sixteen years. Verify, don't trust.
