---
title: "What Bitcoin Actually Is"
slug: what-bitcoin-actually-is
draft: false
status: live
published: "2026-05-15"
updated: "2026-10-09"
order: 2
goDeeper: ["supply", "decentralization", "energy"]
estimatedMinutes: 25
tagline: "Not a stock. Not a company. Not a payment app. Bitcoin is a new kind of money - and the difference matters."
prerequisites: ["why-money-is-broken"]
relatedTerms: ["satoshi-nakamoto", "whitepaper", "proof-work-pow", "decentralization", "halving-halvening", "genesis-block", "block-subsidy", "hash"]
ogImage: "/diagrams/og/network-topology.png"
ogImageAlt: "Two network topologies side by side. On the left, a single central bank hub stands alone. On the right, Bitcoin as roughly thirty-five peer nodes connected in an organic mesh with no center. One central bank, versus tens of thousands of Bitcoin nodes. No one is in charge."
sources:
  - { label: "Bitcoin Whitepaper (Satoshi Nakamoto, 2008)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "ChainQuery - getblock RPC reference and playground (run it with the genesis block hash)", url: "https://chainquery.com/rpc/getblock" }
  - { label: "mempool.space - the genesis block (block 0, January 3, 2009), whose coinbase carries The Times headline", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Satoshi Nakamoto - Bitcoin P2P e-cash paper, the Cryptography Mailing List at metzdowd.com (October 31, 2008, 14:10 EDT)", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released, the Cryptography Mailing List (January 8, 2009): 21,000,000 coins in total, cut in half every 4 years", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "Satoshi Nakamoto Institute - Bitcoin emails", url: "https://satoshi.nakamotoinstitute.org/emails/" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last BitcoinTalk post is dated December 12, 2010)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
  - { label: "Sergio Lerner - The Return of the Deniers and the Revenge of Patoshi (2019): about 1.1M coins attributed to Satoshi, 99.9% of those blocks unspent", url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/" }
  - { label: "FRED - Federal Reserve total assets (WALCL): $925.7 billion on September 10, 2008, $1,969.1 billion on October 29, 2008", url: "https://fred.stlouisfed.org/series/WALCL" }
  - { label: "FRED - M2 money stock, seasonally adjusted (M2SL): $7.51 trillion in January 2008, $23.34 trillion in August 2026", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double-spending (December 2012), Table 1: 0.059% for a 10% attacker after 6 confirmations", url: "https://arxiv.org/abs/1402.2009" }
  - { label: "Bitcoin Core GetBlockSubsidy (permalink, Oct 2026) - halves the subsidy every 210,000 blocks, counted in whole satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "mempool.space - block 840,000, the fourth halving (mined 00:09 UTC April 20, 2024)", url: "https://mempool.space/block/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5" }
  - { label: "mempool.space - block 969,999 (October 5, 2026): 20,093,750 BTC issued by the schedule, against 164,250 BTC a year at 3.125 BTC per block, about 0.82%", url: "https://mempool.space/block/000000000000000000001d95e5f7284cb199b8620eb6a7938dd9696f85751bb3" }
  - { label: "World Gold Council - How much gold has been mined? (about 222,600 t, end-Q2 2026)", url: "https://www.gold.org/goldhub/data/how-much-gold" }
  - { label: "World Gold Council - Gold Demand Trends Full Year 2025, supply (mine production 3,672 t)", url: "https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025/supply" }
  - { label: "USGS Mineral Commodity Summaries 2026 - Gold (world mine production 2025: 3,300 t)", url: "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" }
  - { label: "BTC Nodes - reachable Bitcoin nodes (25,514 in the 19:28 UTC snapshot of October 9, 2026; the old bitnodes.io API now redirects here)", url: "https://btcnodes.io" }
  - { label: "Coin Dance - public Bitcoin nodes, duplicate and non-listening nodes omitted (25,362 on October 9, 2026; live)", url: "https://coin.dance/nodes" }
  - { label: "Mike Belshe - Segwit2x Final Steps, calling off the planned 2MB fork (bitcoin-segwit2x list, November 8, 2017, archived)", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 15, 2010; patched client within five hours)", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "mempool.space - block 225,455 (06:20 UTC March 12, 2013), where the chain every version accepted took the lead again", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
  - { label: "Coin Metrics - BTC daily reference price (about $124,800 on October 6, 2025; about $58,500 on June 30, 2026)", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2025-10-01&end_time=2026-10-08&page_size=10000" }
  - { label: "Cambridge Judge Business School - Cambridge study: sustainable energy rising in Bitcoin mining (April 2025; 138 TWh, about 0.5% of global electricity; 52.4% from renewables and nuclear among 49 surveyed firms)", url: "https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/" }
---

> **Where you're going:** You'll be able to describe Bitcoin from first principles - not as a "coin" or "investment," but as a network, a protocol, and a fixed supply of monetary units governed by rules no one can change unilaterally. By the end you'll know who made it, what it actually does, and what trade-offs it asks of you.

<figure>
  <video
    src="/videos/fixed-vs-infinite.mp4"
    poster="/videos/posters/fixed-vs-infinite.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Side-by-side animated chart: the US Dollar M2 supply growing past a 'Glass ceiling' to over $22 trillion, while Bitcoin supply rises with halving steps and plateaus below its 21 million cap. The end-card spells out the difference in zeros: 22,000,000,000,000 versus 21,000,000."
  ></video>
  <figcaption>Two supply schedules, side by side. USD: over $22T in M2 ($23.3T as of August 2026), with no cap. BTC: 21M, locked.</figcaption>
</figure>

## 1. A Strange Email

On Friday, October 31, 2008 - Halloween - at 2:10pm Eastern, an email landed on the Cryptography Mailing List at metzdowd.com. The sender was someone calling themselves Satoshi Nakamoto. The subject line was unremarkable: *"Bitcoin P2P e-cash paper."* The body was short. It had one sentence of introduction, a list of the system's five main properties, and the paper's abstract.

It linked to a PDF on bitcoin.org: [*Bitcoin: A Peer-to-Peer Electronic Cash System*](/bitcoin.pdf). Nine pages. Eight references. No marketing.

The context matters. Lehman Brothers had collapsed six weeks earlier. The financial crisis was at full boil. The US government had just signed a $700 billion bank bailout. Every major economy was scrambling to keep its banking system from imploding. The Federal Reserve's balance sheet (the total of everything it owned, including the loans it had made) had more than doubled in seven weeks, from about $926 billion on September 10 to $1.97 trillion on October 29.

Satoshi's email was, in retrospect, the polite version of *"Maybe try this instead."*

Sixty-four days later, on January 3, 2009, Satoshi mined the first block of the Bitcoin network. Embedded in that block - permanently, unforgeably - was a string of text:

> *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"*

It was the front-page headline of the London *Times* that morning. It is still there in every full copy of the Bitcoin blockchain on Earth.

This chapter is about what that strange email pointed at.

## 2. What Bitcoin Is (and Isn't)

Most people meet Bitcoin through its price. That's the wrong door. Let's reset.

**Bitcoin is, at the same time, three things:**

- **A network** - thousands of computers around the world running compatible software, talking to each other, keeping a shared ledger
- **A protocol** - the precise rules every one of those computers follows: what's a valid transaction, what's a valid block, how new units are issued, what wins ties
- **A unit of account** - the 21-million-supply asset whose movements that network tracks

Crucially, **Bitcoin is not:**

- A stock - there's no company behind it
- A token - it's not built on top of another network
- A payment app - it's the layer underneath payment apps
- "Crypto" - that's a marketing umbrella that mostly refers to other things

Bitcoin has no CEO. No board. No headquarters. No legal entity. No marketing budget. No customer service. If you have a question, you read the code. If you want to use it, you run software. If you want to change it, you'll need to convince every other participant to change too - which has been attempted, and which we'll get to.

This is *deeply* unlike everything else in the modern financial system. It's also the only design that produces the properties we listed at the end of chapter 1.

## 3. The Whitepaper in Five Minutes

The whitepaper is nine pages and you can read it in an hour. The argument runs like this:

**The problem.** Online commerce relies on trusted third parties - banks, payment processors - to settle transactions. Those intermediaries can reverse payments, so merchants guard against fraud by asking customers for more information than they would otherwise need. The intermediaries also add cost and friction. Cash works without trusted third parties. Online cash, until Bitcoin, did not.

**The proposal.** A digital cash system in which transactions are broadcast to a network, batched into blocks, and ordered by a competitive computation called proof-of-work. The longest chain of these blocks, the one with the most proof-of-work behind it, is the truth.

**The key insight.** The network reaches agreement on transaction order *without* anyone in charge - because reorganizing past blocks gets exponentially harder the deeper you go. The system has no off-switch and no editor.

**The economics.** Participants who add new blocks ("miners") are paid in newly-issued bitcoin plus transaction fees. The paper itself says only that a "predetermined number" of coins will enter circulation. The numbers arrived with the software in January 2009, when Satoshi announced a total of 21 million coins, with issuance cut in half every four years.

That's it. That's the whitepaper. The rest is engineering.

## 4. The 21 Million Cap

Where does 21 million come from?

Bitcoin issues new units as a reward for mining each block. A block happens roughly every 10 minutes. The reward started at 50 BTC and halves every 210,000 blocks - about every four years.

Here's the math:

```
50 + 25 + 12.5 + 6.25 + 3.125 + ... = 100 BTC (one block's reward in each era, added up)
210,000 blocks per era x 100 BTC = 21,000,000 BTC (rounded; actual: 20,999,999.9769)
```

The supply is a geometric series that converges. New issuance shrinks toward zero, and because Bitcoin counts in whole satoshis, the subsidy hits exactly zero at block 6,930,000, around the year 2140.

The cap is enforced by every full node on the network. If a miner tried to issue more than the schedule allows, every other node would reject the block as invalid. The cap isn't a promise. It's not legislation. It's not a guideline. It is a property of the software that every participant runs.

To change the 21M cap, you would have to convince virtually every node operator on Earth to run different software. The political cost of doing that is the social contract that makes Bitcoin valuable in the first place - break it, and you break what you were trying to inherit.

This is what "sound money" means, technically. Not "we promise to be careful." But "the rules are the rules and you can verify them yourself."

## 5. Proof-of-Work as the World's Loudest Clock

Mining is the part most people get wrong. Let's get it right.

A Bitcoin block is just a list of transactions plus a header. To "mine" a block, a computer tries to find a number (a "nonce") such that the cryptographic hash of the header is below a certain target. Most numbers don't work. You guess, you check, you guess, you check. Trillions of times per second.

When someone finds a valid nonce, they broadcast the block to the network. Everyone checks the work (cheap - just one hash) and adds it to their copy of the chain.

Why bother? Two reasons.

**One: it's the network's clock.** Roughly every 10 minutes, a block appears. That cadence anchors the entire system. Without proof-of-work, there's no objective way for participants spread across the world to agree on what happened first.

**Two: it makes rewriting history expensive.** To reorganize old blocks, an attacker would need to redo all the proof-of-work that has accumulated since - outpacing the rest of the world's mining at the same time. The deeper the block, the more astronomical the cost. After six blocks (about an hour), an attacker with a tenth of the world's mining power has about a 1-in-1,700 chance of ever catching up, by Meni Rosenfeld's 2012 analysis. Only an attacker with most of the mining power could count on it.

The energy use is the feature. It's what converts physical reality (electricity, hardware, time) into the security that protects every Bitcoin in existence. Gold gets its monetary properties from being hard to dig out of the ground. Bitcoin gets its monetary properties from being hard to add blocks to. The mechanism is different. The role is the same.

## 6. The Halving Schedule

Every 210,000 blocks, the block reward halves. This is not an opinion poll. It is a line of code that every node enforces.

| Halving | Block height | Approx. date | New reward |
|---|---|---|---|
| Genesis | 0 | Jan 3, 2009 | 50 BTC |
| First | 210,000 | Nov 28, 2012 | 25 BTC |
| Second | 420,000 | Jul 9, 2016 | 12.5 BTC |
| Third | 630,000 | May 11, 2020 | 6.25 BTC |
| Fourth | 840,000 | Apr 20, 2024 (UTC) | 3.125 BTC |
| Fifth | 1,050,000 | ~2028 | 1.5625 BTC |

The annual issuance rate of new bitcoin, once high, was about 0.82% as of October 2026, roughly half the pace at which mining added to the world's gold stock in 2025 (about 1.5 to 1.7%). After the fifth halving, due around 2028, it will be about 0.4%. At block 6,930,000, around 2140, it reaches zero. The [Supply Schedule rabbit hole](/rabbit-hole/supply) has the math.

Compare that to fiat. The US M2 money supply more than tripled from January 2008 to August 2026, from about $7.5 trillion to $23.3 trillion. Across those same years, Bitcoin's supply, launched in January 2009, followed its predetermined path, regardless of who was in office.

This is what scarcity looks like when it's encoded in math instead of policy.

## 7. The Question of Who's in Charge

A lot of people, hearing "no CEO, no company," assume Bitcoin must therefore be a free-for-all. It isn't.

There are three groups of participants, and they keep each other honest:

- **Node operators** - anyone running Bitcoin software that validates every transaction and every block. Their copy of the rules is what counts as Bitcoin. There are tens of thousands.
- **Miners** - specialized computers competing to add the next block in exchange for the reward. They produce blocks but they don't *make the rules*; if they produce an invalid block, nodes reject it and the work is wasted.
- **Developers** - people who write the software. There are several independent implementations; the dominant one is called Bitcoin Core. Developers can propose changes, but they cannot impose them; nodes choose what software to run.

<figure>
  <img src="/diagrams/network-topology.svg" alt="Two network topologies side by side. On the left, a central bank: a single institutional hub standing alone. On the right, the Bitcoin network: roughly thirty-five peer nodes scattered across the panel and connected to their neighbors in an organic mesh, with no central node." />
  <figcaption>One central bank, versus tens of thousands of Bitcoin nodes. No center, no headquarters, no off switch.</figcaption>
</figure>

This is the genuinely radical part. **No one is in charge.** Not the largest miner. Not the most prolific developer. Not the wealthiest holder. The rules are upheld by everyone running a node, and changes to the rules require near-universal agreement. There have been attempted "takeovers" - chiefly in 2017, by a coalition of large miners and businesses - and the network defeated them by simply continuing to enforce the existing rules. The coalition called off its planned fork, SegWit2x, in November 2017 for lack of consensus.

**About Satoshi.** The person or people who created Bitcoin stopped posting in public in December 2010. They left no will, no trademark, no foundation. Almost none of the coins they are believed to have mined has ever moved. We don't know who they were. We probably never will. This is a feature: there is no founder to capture, coerce, or compromise. Bitcoin has been ownerless for nearly its entire existence. That is part of what makes it durable.

If you want to go deeper on this - what "decentralized" actually means, where Bitcoin lands on the spectrum, and how the 2017 takeover attempt was defeated - see the [Decentralization rabbit hole](/rabbit-hole/decentralization).

## 8. The Properties, Re-Examined

Chapter 1 ended with a list of six properties we'd want from sound money. Let's check Bitcoin against each:

- **Portable** - bitcoin moves at the speed of an internet packet. A billion dollars can cross any border in minutes.
- **Divisible** - one bitcoin divides into 100 million satoshis. (See the [Bitcoin Units rabbit hole](/rabbit-hole/bitcoin-units) for the full scale.)
- **Durable** - the network has run since January 2009. Its two worst incidents were each repaired within a day. In August 2010 a bug created 184 billion BTC, and the repaired chain erased them (see [The Inflation Bug Postmortem](/rabbit-hole/inflation-bug-postmortem)). In March 2013 the chain split in two (see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork)). Your coins exist as long as the network exists.
- **Verifiable** - you can run a node on a laptop and personally verify the entire history. No trust required.
- **Scarce** - capped at 21 million by code that every node enforces. The cap has never been raised. It almost certainly never will be.
- **Sovereign** - no government, no company, no individual can issue, freeze, seize, or invalidate your bitcoin without your private key.

Gold satisfies most of these too - and was, for thousands of years, the world's best money. Bitcoin's claim is that it satisfies all six *and* removes gold's downsides (custodianship, divisibility at small scales, settlement speed). Whether that claim holds is something you'll decide for yourself by chapter 6.

## 9. The Honest Trade-offs

"Bitcoin only. No bullshit." applies to the bull case too.

**Volatility.** Bitcoin's price is volatile in fiat terms. From its October 2025 high to its June 2026 low, the daily price fell about 53%. This is partly because monetization is a process, not an event; partly because the asset is small relative to global wealth.

**On-chain settlement speed.** A Bitcoin transaction takes roughly 10 minutes to confirm and an hour to be considered fully settled. This is a deliberate trade-off - slower settlement makes the system harder to attack - but it means on-chain isn't ideal for buying coffee. (The Lightning Network solves this, mostly; chapter 5.)

**Learning curve.** The user experience has improved enormously but is still not as smooth as your banking app. Self-custody requires you to take responsibility for your keys. Losing them means losing your coins. There's no helpdesk.

**Energy use.** Bitcoin's mining network uses significant electricity - roughly 0.5% of global consumption, or about 138 TWh a year, by a 2025 University of Cambridge estimate. The miners Cambridge surveyed got 52.4% of their power from renewables and nuclear. That energy isn't wasted (it secures the network), but it isn't free. Whether that cost is worth what it buys is a values question.

**Custody risk.** If you self-custody, you carry the risk. If you don't self-custody, you've reintroduced exactly the trusted third parties Bitcoin was designed to eliminate. Both have failure modes.

None of these trade-offs are fatal. None are hidden. They're the price of admission.

## 10. Where We Go From Here

You've now met Bitcoin at the conceptual level. You know what it is, who made it, why it has the properties it has, and what it costs to use.

Chapter 3 is *how it works under the hood* - the machinery. Blocks, transactions, mempool, fees, UTXOs. The model that lets you reason about Bitcoin instead of just believing in it.

Chapter 4 is *owning it for real*. Seed phrases, hardware wallets, self-custody. You'll do it, not just read about it.

For now, sit with the thing you just learned. **[Money got broken in 1971](/glossary/what-happened-in-1971). Six weeks after Lehman Brothers collapsed, someone proposed an alternative. It's still running, the supply schedule is still on track, and the 21 million cap has never been raised.** That's the basic fact of the matter. Everything else is detail.

> **Pro tip:** If you want to verify *any* claim in this chapter, the [whitepaper](/bitcoin.pdf) is nine pages and unchanged since 2009. The [genesis block](https://chainquery.com/rpc/getblock) is still there (run `getblock` on any live node with hash `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`), with the *Times* headline embedded in it. The network has been running, with public source code, since January 2009. Verify, don't trust.
