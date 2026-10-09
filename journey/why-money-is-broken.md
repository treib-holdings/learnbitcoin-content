---
title: "Why Money Is Broken"
slug: why-money-is-broken
draft: false
status: live
published: "2026-05-15"
updated: "2026-10-09"
order: 1
estimatedMinutes: 22
tagline: "Inflation isn't a force of nature. It's a policy. Once you see how fiat actually works, Bitcoin stops looking strange."
prerequisites: []
relatedTerms: ["fiat", "inflation", "disinflation", "cbdc-central-bank-digital-currency", "satoshi-nakamoto"]
ogImage: "/diagrams/og/dollar-purchasing-power.png"
ogImageAlt: "What a dollar buys, 1970 to 2026: a line chart showing one dollar's purchasing power declining to about 12 cents over more than half a century of compounded inflation at roughly 4 percent annual CPI."
sources:
  - { label: "FRED - M2 Money Stock (St. Louis Fed)", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "BLS CPI Inflation Calculator", url: "https://www.bls.gov/data/inflation_calculator.htm" }
  - { label: "Federal Reserve - why the Fed aims for 2 percent inflation over the longer run", url: "https://www.federalreserve.gov/faqs/economy_14400.htm" }
  - { label: "University of Warwick - Research team sheds light on Roman financial crisis (April 2022): the denarius was deliberately alloyed with copper by 87 BC", url: "https://warwick.ac.uk/newsandevents/pressreleases/research_team_sheds/" }
  - { label: "Michael D. Bordo - Gold Standard, Concise Encyclopedia of Economics (2008): US inflation averaged 0.1 percent a year from 1880 to 1914", url: "https://www.econlib.org/library/Enc/GoldStandard.html" }
  - { label: "Federal Reserve History - Creation of the Bretton Woods System (November 2013)", url: "https://www.federalreservehistory.org/essays/bretton-woods-created" }
  - { label: "Federal Reserve History - Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls (November 2013): early in the Bretton Woods era the US held about three-quarters of the world's official gold reserves", url: "https://www.federalreservehistory.org/essays/gold-convertibility-ends" }
  - { label: "Federal Reserve History - The Great Inflation (November 2013)", url: "https://www.federalreservehistory.org/essays/great-inflation" }
  - { label: "Foreign Relations of the United States, 1964-1968, Vol. VIII, Document 99 - Treasury Secretary Fowler to President Johnson on France's gold conversions (21 June 1966)", url: "https://history.state.gov/historicaldocuments/frus1964-68v08/d99" }
  - { label: "Nixon's August 15, 1971 Address (full text)", url: "https://www.presidency.ucsb.edu/documents/address-the-nation-outlining-new-economic-policy-the-challenge-peace" }
  - { label: "Federal Reserve Board - Greenbook, part IV: gold sale to France (18 August 1971)", url: "https://www.federalreserve.gov/monetarypolicy/files/FOMC19710824greenbook19710818.pdf" }
  - { label: "Lyn Alden - What Is Money, Anyway? (March 2022)", url: "https://www.lynalden.com/what-is-money/" }
  - { label: "Cantillon - Essay on the Nature of Trade in General (1755), Liberty Fund edition", url: "https://oll.libertyfund.org/titles/essay-on-the-nature-of-trade-in-general-lf-ed" }
  - { label: "BLS - Common Misconceptions about the Consumer Price Index: Questions and Answers (the 1983 and 1999 method changes)", url: "https://www.bls.gov/cpi/factsheets/common-misconceptions-about-cpi.htm" }
  - { label: "BLS - CPI-U, all items (annual average 160.5 in 1997, 321.943 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SA0?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "BLS - CPI-U, hospital services (annual average 101.7 in 1997, 433.655 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SEMD01?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "BLS - CPI-U, college tuition and fees (annual average 294.1 in 1997, 955.326 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SEEB01?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "Federal Reserve - Changes in U.S. Family Finances from 2022 to 2025 (October 2026): 56 percent of all families, and 31 percent of families in the bottom half by income, held stock directly or indirectly", url: "https://www.federalreserve.gov/publications/files/scf26.pdf" }
  - { label: "mempool.space - the genesis block, dated 3 January 2009", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 2010)", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "mempool.space - block 74,691 (16 August 2010, 08:20 UTC), where the corrected chain overtook the bad one", url: "https://mempool.space/block/00000000005c22d199706df1c38b38d76f8401920dcbe91edf3417f8847da707" }
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "mempool.space - block 225,455 (12 March 2013, 06:20 UTC), where the chain every version could follow overtook the one only version 0.8 accepted", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
---

> **Where you're going:** By the end of this chapter, you'll be able to explain - in plain English, to your dad - why the dollar has lost most of its purchasing power since 1971, and why that isn't an accident. You won't have met Bitcoin yet. You'll just see the shape of the problem it tries to solve.

<figure>
  <video
    src="/videos/purchasing-power.mp4"
    poster="/videos/posters/purchasing-power.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated line chart: what a dollar buys, measured in 1970 dollars, declines decade by decade from $1 in 1970 to about $0.12 in 2026, with green dollar coins continuously fading as purchasing power erodes."
  ></video>
  <figcaption>Half a century of inflation, decade by decade. By 2026 a dollar bought about what 12 cents bought in 1970.</figcaption>
</figure>

## 1. The Feeling That Something's Wrong

You make more money than you used to. Your rent is higher. Your groceries cost more. The number on your paycheck went up; the number of grocery bags it carries home didn't.

Most people feel this. Most people are also told, in various polite ways, that they're imagining it. *Inflation is normal. The economy is strong. Just put your money in the stock market.*

Here's the thing: you aren't imagining it. The dollar in your pocket is, by design, worth a little less than it was last year - and a lot less than it was when your grandparents were your age. That's not a glitch. That's how the system was built.

This chapter walks through how it got built that way, who benefits, and why it matters.

## 2. What Money Is Actually For

Strip away the brand names and currency symbols and money has three jobs:

- **Medium of exchange** - you can trade it for stuff. Beats hauling around chickens.
- **Store of value** - you can save it now and spend it later without losing purchasing power.
- **Unit of account** - you can use it to measure and compare prices.

Dollars are great at job one. They're okay at job three (prices in dollars are confusing across decades, but workable). They're terrible at job two over any meaningful time horizon.

That second-job failure is the entire subject of this chapter.

## 3. A Short History of Money

This is the version you can tell at a dinner party.

1. **People bartered.** It worked badly. You had to find someone who had what you wanted *and* wanted what you had. Economists call this the "coincidence of wants." Most people call it inconvenient.

2. **Commodity money.** Communities settled on scarce, durable things - salt, shells, cattle, beads, copper, silver, gold. Gold won most rounds because it's portable, divisible, durable, verifiable, and rare. It earned the job.

3. **Coins.** Governments stamped metal into standard weights so you didn't have to weigh it every time. They also discovered they could put a little less silver or gold in each coin and pocket the difference. This is called *debasement*, and Rome was already doing it to its silver denarius by 87 BC.

4. **Paper money - backed.** Goldsmiths and later banks issued paper notes that promised "redeemable for X grams of gold on demand." Paper is lighter than metal, so this was an improvement. As long as the issuer actually had the gold, it worked.

5. **Paper money - partially backed.** Banks figured out that not everyone redeems at once. They could issue more notes than they had gold, as long as the math stayed quiet.

6. **The classical gold standard (~1870-1914).** Most major economies pegged their currencies to specific weights of gold. International trade settled in gold. Inflation was near zero over decades.

7. **Bretton Woods (1944).** After two world wars wrecked the old system, the world rebuilt around a US dollar pegged to gold at $35/oz, with every other currency pegged to the dollar. At the start America held about three-quarters of the world's official gold, and other governments held dollars they could trade in for it.

8. **August 15, 1971.** Nixon went on television and closed the last way to turn dollars into gold, which by then only foreign governments and central banks could use. The suspension was supposed to be temporary. It was never restored. We have lived in the post-1971 monetary world ever since.

That's the history. The next section is what changed in 1971 and why it matters.

## 4. The Nixon Shock

By the late 1960s, the United States had spent heavily - Vietnam, the Great Society, the space race - and printed dollars to do it. Foreign governments holding those dollars were trading more and more of them in for the gold the peg promised. France had made it policy by 1966 to turn all its new dollars into gold, at least $34 million a month. In early August 1971 it bought another $191 million of US gold.

There wasn't enough gold to honor the promises.

On [August 15, 1971](/glossary/what-happened-in-1971), Nixon announced a "temporary" suspension of dollar-to-gold conversion. He told Americans:

> "...if you are among the overwhelming majority of Americans who buy American-made products in America, your dollar will be worth just as much tomorrow as it is today."

Measured by the US Consumer Price Index, by 2025 a dollar bought about what **13 cents** bought in 1971. You can verify this yourself on the [BLS inflation calculator](https://www.bls.gov/data/inflation_calculator.htm). Eighty-seven percent of the dollar's purchasing power was deleted over fifty-four years.

August 1971 was the moment the dollar stopped being tethered to anything scarce. From then on, the supply could expand whenever it was politically convenient - which, it turns out, is most of the time.

## 5. The Cantillon Effect (Without the Jargon)

Here's a question most introductory economics classes avoid:

**When new money enters an economy, who gets it first?**

Not everyone, all at once, evenly. The new money flows through specific channels - government spending, bank lending, financial markets - and the people closest to those channels get it before prices have time to adjust.

By the time the new money reaches your paycheck, prices have already moved up to reflect the larger money supply. You're not richer. You're holding more dollars that buy the same things, or less.

This is called the **Cantillon effect**, after Richard Cantillon, an 18th-century banker who described it in his 1755 essay on commerce. It's not a conspiracy theory. It's a structural consequence of how monetary expansion actually works.

Who benefits, in rough order of proximity to new money:

1. **The government**, which spends it first
2. **Primary dealers and large banks**, which lend it next
3. **Corporations** that borrow at low rates and use the cash to buy back stock and bid up asset prices
4. **Asset owners** - real estate, equities, gold - whose holdings rise as money chases them
5. **Workers**, eventually, through wages - but with a lag

If you own assets, monetary expansion is roughly neutral or beneficial to you. If you live paycheck to paycheck and save in cash, monetary expansion is a continuous, quiet tax.

## 6. The Math of Compounding

"Two percent inflation" sounds tame. Compounded, it isn't.

| Annual inflation | 10 years | 20 years | 40 years |
|---|---|---|---|
| 2% | -18% | -33% | -55% |
| 3% | -26% | -45% | -69% |
| 5% | -39% | -62% | -86% |
| 7% | -49% | -74% | -93% |

The official US CPI averaged around 4% a year from 1971 to 2025. That's a working life of erosion.

<figure>
  <img src="/diagrams/dollar-purchasing-power.svg" alt="What a dollar buys, 1970 to 2026: a line chart showing one dollar's purchasing power declining to about 12 cents over more than half a century of compounded inflation at roughly 4 percent annual CPI." />
  <figcaption>Counted from 1970 to 2026, a dollar kept about 12 cents of its 1970 buying power. Section 4 counts from 1971 to 2025 instead, which gives about 13 cents.</figcaption>
</figure>

And CPI has its critics. They say changes to how it has been measured since the 1980s hold the headline number down. The Bureau of Labor Statistics, which publishes it, says the effect is smaller than they claim. By its numbers, a 1999 change that allows for shoppers switching to cheaper items trims less than 0.3 percentage points off the yearly inflation rate. A 1983 change in how homeowners' housing costs are counted made the housing part of the index rise faster when it first took effect.

CPI is also only an average, and the average hides the big bills. From 1997 to 2025, overall consumer prices roughly doubled, while prices for hospital services rose to about 4.3 times their 1997 level and college tuition and fees to about 3.2 times theirs.

## 7. Who Pays and Who Benefits

This is where the politics get clear.

**Who pays the inflation tax:**

- People who save in cash
- People on fixed incomes
- Wage earners (because wages lag prices)
- Young people (who must buy assets at inflated prices)
- The poor (in 2025 only 31 percent of families in the bottom half by income owned any stock, directly or through a fund or retirement account)

**Who benefits from inflation:**

- Debtors paying back fixed-dollar loans (especially governments, which are the biggest debtors in history)
- Asset owners - stocks, real estate, gold, businesses
- People who get the new money first (see section 5)
- Anyone whose income is leveraged to asset prices

The standard advice - *just invest your savings* - works only if you have savings to invest, the knowledge to invest them, and the stomach to hold through downturns. In 2025, 44 percent of American families owned no stock at all, not even through a retirement account.

Inflation, in practice, is a wealth transfer from people who hold dollars to people who hold assets. It's enacted by almost every government in modern history, and there's no line item for it on your tax return.

## 8. The Quiet Tax

You don't vote for inflation.

When taxes go up, there's a debate. There's a bill. Someone has to defend it. When the money supply expands, there's a press release from the Federal Reserve, and most people don't read it.

The transfer happens quietly, continuously, year after year. By 2025 a dollar bought about what 80 cents bought in 2020, a loss of about 20% of its buying power in five years.

If a politician proposed a 20% tax on savings accounts, there would be riots. The same 20% reduction in purchasing power, delivered through monetary expansion, is described as "normal" and "the cost of doing business."

This isn't a conspiracy. It's how the system functions. The people who designed it largely meant well. The consequences are what they are.

## 9. The Unanswered Question

So here's the question this chapter sets up but doesn't answer:

**What would money look like if no one could expand its supply?**

What if it were:

- **Portable** - easy to move across borders, instantly
- **Divisible** - fine enough for any purchase
- **Durable** - doesn't rot, doesn't rust, doesn't depend on a bank
- **Verifiable** - impossible to counterfeit
- **Scarce** - and not just "scarce because we agreed," but *scarce because the math says so*
- **Sovereign** - outside the control of any government or company

That money would do all three jobs - medium of exchange, store of value, unit of account - and it would do the second one *as well as gold did before 1971*, with none of gold's downsides.

It would have to be a new kind of thing. It would have to use cryptography to make scarcity provable. It would have to use a network instead of a vault. It would have to be a protocol, not a product.

That money exists. It has been running since January 2009. Twice, in [2010](/rabbit-hole/inflation-bug-postmortem) and [2013](/rabbit-hole/2013-chain-fork), a software bug forced the network to throw out a stretch of its transaction record, and both times it was back on a single agreed record within a day. The next chapter is about what it actually is.

> **Pro tip:** If you only remember one thing from this chapter, remember that inflation is a *policy*, not a force of nature. Once you see that, you can't unsee it. Everything Bitcoin does is in response to a system that was built - deliberately or carelessly - to lose its grip on value over time.
