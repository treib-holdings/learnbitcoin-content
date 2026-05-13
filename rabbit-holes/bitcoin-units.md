---
title: "Bitcoin Units"
slug: bitcoin-units
draft: false
status: live
section: rabbit-hole
tagline: "Big Coins, Tiny Bits — Making Sense of BTC, Sats, and Everything in Between"
order: 1
estimatedMinutes: 9
sources:
  - { label: "Bitcoin Wiki — Units", url: "https://en.bitcoin.it/wiki/Units" }
relatedTerms: ["satoshi", "bitcoin", "lightning-network", "halving-halvening"]
hasInteractive:
  - unitsConverter
  - unitsVisualization
downloads:
  - { label: "Bitcoin Units Cheat Sheet (PDF)", file: "bitcoin-units-cheatsheet.pdf" }
---

Ever tried buying a pack of gum with a hundred-dollar bill? Sure, it's doable, but you might get a strange look — plus, counting the change can get messy. Now imagine trying to pay for something small with an entire Bitcoin without knowing how to "break it down." That's where Bitcoin's smaller denominations ride to the rescue, whether you're a newcomer still learning about your seed phrase or a seasoned Bitcoiner who remembers MtGox. Grab a comfy seat: we're about to dive deep into the fascinating world of Bitcoin units.

> **Pro tip:** Bookmark this page or press `Ctrl+D` (`Cmd+D` on Mac) to come back whenever you need a quick refresher or want to check our interactive converter.

## 1. Why Bitcoin Units Matter (For Everyone)

**From newbies to veterans — we all need the right change.**

When Bitcoin was new, no one thought much about fractions — you either had a whole coin or you didn't. But as its value climbed, the smaller units started to matter. Understanding those units is key to using Bitcoin without getting lost in a sea of decimals.

- **For beginners:** Think of it like dollars and cents — but in Bitcoin, the "cents" are called satoshis. And you can slice things even thinner if needed.
- **For pros:** Whether you're tweaking fees or settling microtransactions, knowing your way around mBTC, µBTC, and Finney can mean the difference between precision and overpayment.

> **Analogy alert:** If 1 BTC is a giant bag containing 100 million grains of rice, 1 satoshi is like a single grain. You wouldn't lug the entire bag around if you just need a few grains for a micro-payment.

## 2. The Bitcoin Units to Satoshi Visualization

::unitsVisualization

## 3. Meet the Gang — BTC, mBTC, µBTC, Finney, and Sats

Let's step through each unit, why it exists, and how you might use it.

### BTC (Bitcoin) — The whole coin

- **What it is:** The standard unit we all know. There will never be more than 21 million Bitcoin.
- **How it helps:** Useful for quoting big trades or referencing the overall market price.
- **Fun fact:** 1 BTC = 100,000,000 satoshis. That's a lot of slices.

### dBTC (deci-Bitcoin) — Unnamed

- **What it is:** One-tenth of a Bitcoin, or 0.1 BTC. That's 10,000,000 satoshis.
- **How it helps:** A solid chunk of value — often used in savings, OTC trades, or quoting mid-size balances.
- **Fun fact:** If 1 BTC is a dollar, this would be a dime. In Bitcoin, this "dime" could someday buy a whole lot more.

### cBTC (Centibit) — The handy middle ground

- **What it is:** One hundredth of a Bitcoin, or 0.01 BTC. That's 1,000,000 satoshis.
- **How it helps:** Great for everyday transactions — big enough to feel meaningful, small enough to be practical.
- **Fun fact:** If Bitcoin were gold, a centibit would be like carrying around a hefty gold coin — compact, but still packing real value.

### mBTC (Millibitcoin, Millibits)

- **What it is:** One-thousandth of a Bitcoin.
- **Definition:** 1 mBTC = 0.001 BTC.
- **Bonus:** Great for quoting smaller amounts without resorting to too many trailing zeros.

### Finney

- **What it is:** A tribute to Hal Finney, one of Bitcoin's earliest pioneers.
- **Definition:** Commonly 1 Finney = 0.0001 BTC (10,000 satoshis).
- **Why it matters:** Some people honor Bitcoin's history by using Finneys to measure everyday amounts — a nod to the second-ever person to run Bitcoin software.

### Unnamed (0.00001 BTC)

- **What it is:** One hundred-thousandth of a Bitcoin, or 0.00001 BTC. That's 1,000 satoshis.
- **How it helps:** Ideal for microtransactions, fine-tuning fees, or testing wallet setups with minimal risk.
- **Fun fact:** This unit is exactly one milli-satoshi away from rounding-error territory for many apps — small, but mighty in the right context.

### µBTC (Microbitcoin, "bits")

- **What it is:** One-millionth of a Bitcoin.
- **Definition:** 1 µBTC = 0.000001 BTC.
- **Why we love it:** Works with all legacy financial systems that already support two decimal places for the smallest unit.

### Unnamed (0.0000001 BTC)

- **What it is:** One ten-millionth of a Bitcoin, or 0.0000001 BTC. That's 10 satoshis.
- **How it helps:** Used in ultra-fine fee adjustments and experimental micropayments. Not common, but technically valid.
- **Fun fact:** Most wallets won't let you send a 10-sat payment without rounding up.

### Satoshis (Sats) — The smallest slice

- **What it is:** Named after Satoshi Nakamoto, the mysterious creator(s) of Bitcoin.
- **Definition:** 1 sat = 0.00000001 BTC. Eight decimal places.
- **Why we love it:** Perfect for tips, micropayments, or simply avoiding decimal heartbreak.

## 4. Bitcoin Units Table

**When 1 BTC = $1,000,000** — here's how the smaller Bitcoin units stack up when that milestone hits, just in case "a few sats" turns out to be more than pocket change.

| Name           | Symbol | Decimal       | Precision | Value at $1M/BTC |
|----------------|--------|---------------|-----------|------------------|
| Bitcoin        | BTC    | 1             | 8         | $1,000,000.00    |
|                |        | 0.1           | 7         | $100,000.00      |
| Centi-Bitcoin  | cBTC   | 0.01          | 6         | $10,000.00       |
| Milli-Bitcoin  | mBTC   | 0.001         | 5         | $1,000.00        |
| Finney         | —      | 0.0001        | 4         | $100.00          |
|                |        | 0.00001       | 3         | $10.00           |
| Micro-Bitcoin  | µBTC   | 0.000001      | 2         | $1.00            |
|                |        | 0.0000001     | 1         | $0.10            |
| Satoshi        | sat    | 0.00000001    | 0         | $0.01            |

## 5. Why 8 Decimals?

There's no official record of why Satoshi Nakamoto chose 8 decimal places, but most believe it struck a balance: precise enough for microtransactions, yet broad enough to support Bitcoin's early price volatility. At 8 decimals, Bitcoin can be divided into 100 million satoshis — plenty of granularity for everything from billion-dollar trades to tiny tips.

While 8 decimal places may sound like overkill, some modern use cases are already brushing up against the limit — especially on the Lightning Network. In high-volume, low-value environments like gaming, tipping, or IoT micropayments, even a single satoshi can feel too large. Developers sometimes work around this by "abstracting" units or using off-chain accounting, but it's a sign that more precision could eventually be needed.

Could we go smaller? Technically, yes. Bitcoin was designed with adaptability in mind. Expanding the decimal limit would require a network-wide consensus update — not something taken lightly, but entirely possible if and when the need becomes clear.

## 6. Bitcoin Units Converter

::unitsConverter

> **Pro tip:** Double-check your decimals. If you meant 10,000 sats but typed 100,000, that's a big difference.

## 7. Tips, Pitfalls & Best Practices

**Decimal danger.** The difference between 0.01 BTC and 0.001 BTC might look like a minor slip, but financially it's a huge difference. Always check — and then double-check — the decimal place before hitting Send.

**Use monospaced fonts.** Many reputable wallets and exchanges use a monospaced font to align numbers and keep decimal places clear. If you're building personal tools, do the same. It's easy on the eyes and saves your future self from heartbreak.

**Everyday referencing.** Some communities love talking purely in sats. Others stick to BTC. Some prefer the metric feel of mBTC or µBTC. A few are proud Finney fans. There's no one right way — just make sure both sides of a transaction agree on the unit beforehand. ("That's 10,000 sats, right?" never hurts.)

## 8. Fun Facts & Culture

**Satoshi Nakamoto's legacy.** We still don't know the true identity, but their influence is everywhere — right down to each "sat" in your wallet.

**Hal Finney's role.** Hal was one of the earliest adopters, famously receiving the first BTC transaction from Satoshi. Naming 0.0001 BTC the "Finney" is a tribute to that contribution. Not universally used, but a nice personal touch.

**Community tipping.** On Twitter/X, Reddit, and Nostr, you'll often see sats thrown around for funny memes, insightful posts, or random acts of Bitcoin kindness.

**Block subsidy halvings.** Every ~4 years the amount of new BTC entering circulation halves, making each sat arguably more precious over time — and reminding us that eventually we'll need those smaller units.

**The "10,000 BTC for pizza" legend.** In 2010, Laszlo Hanyecz famously paid 10,000 BTC for two pizzas — worth around $41 at the time. The perfect example of how even large amounts of BTC were once pocket change, and a reminder that as Bitcoin's value increases, smaller units become critical for everyday transactions.
