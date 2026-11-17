---
title: "Why It Was Made"
slug: why-money-is-broken
draft: false
status: live
published: "2026-05-15"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 2
goDeeper: ["supply", "halvings"]
estimatedMinutes: 5
tagline: "What happens to a dollar over time, who decides, and the different rule Bitcoin follows."
prerequisites: ["what-bitcoin-actually-is"]
relatedTerms: ["halving-halvening", "satoshi-nakamoto", "genesis-block"]
sources:
  - { label: "US Bureau of Labor Statistics - Consumer Price Index for All Urban Consumers, all items: 40.5 on average in 1971, 337.511 in October 2026, so what cost $100 in 1971 costs about $833; up about 2.7% a year since January 2012", url: "https://data.bls.gov/timeseries/CUUR0000SA0?from_year=1971&to_year=2026&annualAveragesRequested=true" }
  - { label: "US Bureau of Labor Statistics - CPI Inflation Calculator", url: "https://www.bls.gov/data/inflation_calculator.htm" }
  - { label: "Federal Reserve - statement of January 25, 2012: inflation of 2 percent a year, measured by the price index for personal consumption, is the rate most consistent with its mandate", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20120125c.htm" }
  - { label: "Federal Reserve - Why does the Federal Reserve aim for 2 percent inflation over time? (answer last updated January 26, 2015, as archived July 1, 2019): a lower rate would raise the chance of falling into deflation", url: "https://web.archive.org/web/20190701071438/http://www.federalreserve.gov/faqs/economy_14400.htm" }
  - { label: "Federal Reserve - Monetary policy: what are its goals, how does it work? (room to cut interest rates when the economy weakens)", url: "https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm" }
  - { label: "Federal Reserve History - The Great Inflation, 1965 to 1982 (Michael Bryan, 2013): its origins were Federal Reserve policies that let the supply of money grow too fast", url: "https://www.federalreservehistory.org/essays/great-inflation" }
  - { label: "Bank of England - Money creation in the modern economy (March 2014): banks create money when they make loans, and a central bank can add to it by buying assets", url: "https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" }
  - { label: "FRED - M2 money stock (M2SL): $7.51 trillion in January 2008, $23.41 trillion in September 2026, about three times as much", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "FRED - Federal Reserve total assets (WALCL): $0.92 trillion at the start of 2008, $6.76 trillion in late 2026", url: "https://fred.stlouisfed.org/series/WALCL" }
  - { label: "Federal Reserve History - Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls (August 15, 1971)", url: "https://www.federalreservehistory.org/essays/gold-convertibility-ends" }
  - { label: "Federal Reserve History - The Smithsonian Agreement: by the 1960s the dollars held abroad had passed the US gold stock", url: "https://www.federalreservehistory.org/essays/smithsonian-agreement" }
  - { label: "Federal Reserve History - Federal Reserve Reform Act of 1977: the law tells the Fed to promote maximum employment, stable prices and moderate long-term interest rates", url: "https://www.federalreservehistory.org/essays/fed-reform-act-of-1977" }
  - { label: "Michael Bordo - Gold Standard, Concise Encyclopedia of Economics: inflation averaged 0.1% a year from 1880 to 1914", url: "https://www.econlib.org/library/Enc/GoldStandard.html" }
  - { label: "Federal Reserve History - Banking Panics of the Gilded Age, 1863 to 1913 (Gary Richardson and Tim Sablik, 2015): eight panics, three of them nationwide", url: "https://www.federalreservehistory.org/essays/banking-panics-of-the-gilded-age" }
  - { label: "mempool.space API - block 0, stamped January 3, 2009", url: "https://mempool.space/api/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Core, chainparams.cpp, line 71 - the text written into block 0: that day's headline from The Times about a second bailout for banks", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/kernel/chainparams.cpp#L71" }
  - { label: "Satoshi Nakamoto - Bitcoin open source implementation of P2P currency, P2P Foundation forum (February 11, 2009)", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/" }
  - { label: "Satoshi Nakamoto - P2P Foundation forum (February 18, 2009): nobody acts as a central bank to adjust the supply, so the supply is set in advance and the value moves instead", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/3/" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released (January 8, 2009): 21,000,000 coins in total, the new amount cut in half every 4 years", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "Bitcoin Core, validation.cpp - a block that pays its maker more than the fees plus the scheduled amount is rejected", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L2608-L2611" }
  - { label: "Board of Governors of the Federal Reserve System - Economic Well-Being of U.S. Households in 2025 (May 2026), table 33: 9% of adults held cryptocurrency as an investment, 2% used it to buy something or make a payment", url: "https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-banking.htm" }
  - { label: "Coin Metrics - BTC daily reference price since 2010: falls of more than half from a record high in 2011, twice between 2013 and 2015, in 2017 to 2018, twice between 2021 and 2022, and from October 2025 to June 2026; a buyer on December 16, 2017 was down 15% five years later", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2010-07-18&page_size=10000" }
  - { label: "US Census Bureau - historical income tables, Table H-5: median household income in 2025 dollars, $59,970 in 1971 and $87,460 in 2025", url: "https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-households/h05.xlsx" }
  - { label: "FRED - 3-month Treasury bill rate (TB3MS): a dollar kept in Treasury bills since 1971 grew at least 28% more than prices rose, before tax; it fell behind prices in the 1970s, and since 2009 it has lost about 19% against prices; the smallest bill cost $10,000 from 1970", url: "https://fred.stlouisfed.org/series/TB3MS" }
---

> **Where you're going:** By the end you will know what problem Bitcoin was made to solve and what its answer costs. You'll also have checked a number that puts it all in perspective for your own lifetime.

**A guess first.** Think of the year you were born. What would it take today to buy what $100 bought then? Remember your number. The end of the page has you check it.

## What happens to a dollar over time?

It buys less. What cost $100 in 1971 costs more than $800 today. (Why 1971? That year comes up again below.)

The name for this is **inflation**: prices rising, year after year, so that each dollar buys a little less. Most years it is slow enough to miss. It was fast in the 1970s, and again from 2021 to 2023.

## Is that on purpose?

Partly. Since 2012 the Federal Reserve (the Fed), the central bank of the United States, has aimed for prices to rise about 2 percent a year. They have risen a little faster than that. Even at 2 percent, a dollar loses about a fifth of what it buys every ten years.

The Fed has given its reasons. Aim lower, it says, and the economy is more likely to slip into falling prices, which it ties to very weak economies. A rate a little above zero also leaves it room to cut interest rates in a slump.

The fast years were not on purpose. An essay on the Fed's own history site puts the blame for the 1970s on the Fed's policies. For most of the forty years after that, inflation stayed low.

## Who decides how much money there is?

People do. The Fed steers how easy it is to borrow. Banks create new money when they lend: a loan appears as new money in the borrower's account. And since 2008 the Fed has created trillions of dollars itself, to buy bonds.

The total is called the **money supply**. For dollars it has tripled since 2008. Prices did not triple with it. They rose by a little more than half.

Until 1971 there was meant to be an outside limit. Other countries could hand dollars to the United States and get gold back at a fixed price. By the 1960s that was failing: there were more dollars abroad than gold to cover them. In August 1971 President Nixon ended it.

Since then the limit has been the judgment of the people in charge, under a law that tells them to keep prices stable. Judgment has a case: money can be added in a panic, as it was in 2008 and 2020. Gold did not prevent panics. Before 1914 prices held, but bank panics came every few years.

## What did Bitcoin's maker want instead?

The first aim you have met already: payments with no bank in the middle. The second was a money whose supply does not rest on anyone's judgment.

Bitcoin started in January 2009, in the middle of a banking crisis. Its first block has a newspaper headline of that day written into it, about a second rescue for banks. A month later its maker, Satoshi Nakamoto, wrote that ordinary money needs a central bank that "must be trusted not to debase the currency". To debase a currency is to make each unit worth less by making more of it.

So Bitcoin's supply follows a rule set at the start. There will be at most 21 million coins. That limit is called **the cap**, and it has never been raised.

New coins come out with each block. About every four years the number of new coins in a block is cut in half. Each cut is called a **halving**. Anyone can read the schedule, and the computers that keep the record enforce it.

The hope behind the rule is simple. If more people want a thing and nobody can make more of it, each piece buys more. That is the bet, and nobody can promise it will pay.

## What does that rule cost?

What it gives up is a steady price. Nobody can make more bitcoin when people suddenly want it, or less when they do not. So every rise and fall in how much people want it shows up in the price. Owners most often say they hold it as an investment, so the price also moves with their hopes and fears.

The price has fallen by more than half at least seven times. The dollar's buying power has never fallen that fast. There have been five-year stretches in which a buyer ended up with less than at the start.

So the two designs give up opposite things. The dollar gives up long-run value to stay steady from month to month. Bitcoin gives up steadiness to keep its supply fixed.

Whether a fixed supply holds its value over decades is not known yet. Bitcoin has under twenty years of prices to go on, not a hundred.

## Do it

This one needs no wallet. It takes a couple of minutes.

- [ ] Open the [inflation calculator](https://www.bls.gov/data/inflation_calculator.htm) of the US Bureau of Labor Statistics, at bls.gov. It asks for an amount and two dates, and nothing else.
- [ ] Type 100 in the box, with no dollar sign. In the first pair of lists, choose the year you were born. Leave the second date alone, and press Calculate.
- [ ] Read the amount that appears. That is what it takes today to buy what $100 bought then. Compare it with your guess.

The gap between the two numbers is inflation over your lifetime. Not in the United States? Many countries' central banks or statistics offices have the same tool for their own money, and in some countries the gap is far wider than the dollar's.

## A fair objection

"Wages rise too, and savings earn interest. So where is the harm?"

They can, and that matters. Rising prices don't mean everyone becomes poorer. Wages can grow faster than prices, and savers have ways to earn interest that helps offset inflation. But neither happens automatically. Pay may lag behind rising costs, and money held as cash or in a low-interest account can lose purchasing power. Even when interest keeps up, taxes can reduce what a saver keeps.

Bitcoin's answer is a rule in place of people's judgment. Its cost is the one above. Bitcoin pays no interest either, and today its price swings far more than a dollar's.

## Check yourself

<details>
<summary>What is inflation?</summary>

Prices rising over time, so that each dollar buys less. Reread "What happens to a dollar over time?"

</details>

<details>
<summary>What limits how many dollars there are? How many bitcoin?</summary>

For dollars, the judgment of the central bank, and how much banks lend. For bitcoin, a rule set at the start: the cap of 21 million. Reread "Who decides how much money there is?" and the section after it.

</details>

<details>
<summary>What does Bitcoin give up by having a fixed supply?</summary>

A steady price. Nobody can add or remove coins to calm things down, so the price swings. Reread "What does that rule cost?"

</details>

## Words you now know

- **Inflation.** Prices rising over time, so that each dollar buys less.
- **Money supply.** All the money there is of one kind.
- **The cap.** Bitcoin's limit of 21 million coins.
- **Halving.** The cut, about every four years, in how many new coins come out with each block.

If you have doubts by now, you are reading carefully.
