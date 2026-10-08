---
title: "Ponzi Scheme"
slug: ponzi-scheme
draft: false
published: "2026-09-29"
shortDefinition: "A fraud that pays earlier investors with deposits from later ones while claiming the money comes from a business. It needs an operator, a promised return, and hidden books. Bitcoin has none of the three, though plenty of Ponzis have been run with bitcoin as the deposit."
keyTakeaways:
  - "Charles Ponzi's 1920 scheme promised 50 percent in 45 days; Bernard Madoff's ran for decades and showed clients about $65 billion in statements for money that did not exist"
  - "The test is structural: who is the operator, what return was promised, and can anyone audit the books. Bitcoin's ledger is public, its supply schedule is fixed in code, and nobody promises anything"
  - "The real Ponzis in this industry took bitcoin as the deposit: Bitcoin Savings and Trust (2012), Bitconnect (2018), PlusToken (2019), and QuadrigaCX, which regulators said operated like one"
sources:
  - { label: "US SEC - Ponzi schemes (investor.gov)", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/ponzi-schemes" }
  - { label: "European Central Bank - Virtual Currency Schemes (October 2012)", url: "https://www.ecb.europa.eu/pub/pdf/other/virtualcurrencyschemes201210en.pdf" }
  - { label: "US SEC - SEC Charges Texas Man With Running Bitcoin-Denominated Ponzi Scheme (July 2013)", url: "https://www.sec.gov/news/press-release/2013-132" }
  - { label: "Ontario Securities Commission - QuadrigaCX: A Review by Staff of the Ontario Securities Commission (June 2020)", url: "https://www.osc.ca/quadrigacxreport/" }
relatedTerms:
  - rug-pull
  - counterparty-risk
  - quadriga-cx
  - ftx
  - mt-gox
  - hashlet
  - minsky-moment
  - not-your-keys-not-your-coins
  - fud-fear-uncertainty-doubt
  - tulip-mania
  - intrinsic-value
sameAs:
  - "https://www.investor.gov/introduction-investing/investing-basics/glossary/ponzi-schemes"
liveWidget: ~
---

A Ponzi scheme is a fraud with a specific shape. An operator takes deposits, promises a return, and pays that return to earlier depositors out of the money arriving from later ones. There is no business underneath, or a much smaller one than advertised, so the scheme survives only as long as new deposits outrun withdrawals. When they stop, it collapses, and the account statements turn out to have been fiction from the start.

Charles Ponzi gave it the name in 1920 with a Boston operation that promised 50 percent in 45 days, supposedly from arbitraging international postal reply coupons. He took in millions of dollars in a few months and was arrested in August of that year. Bernard Madoff ran the largest one on record for decades. When it fell apart in December 2008, his clients' statements showed about $65 billion; the principal they had actually handed over, and lost, was closer to $17.5 billion. Both men were running the same machine. Neither had a business.

So the test for whether something is a Ponzi is structural, and it has three parts. Is there an operator who takes your money? Did that operator promise you a return? Are the books hidden, so that nobody can check whether the return is real?

Bitcoin fails all three. There is no operator: the software is open source, the network is run by thousands of unrelated [nodes](/glossary/node), and there is no company or foundation that holds anyone's deposit. There is no promised return: the protocol says nothing about price, and anyone who tells you what bitcoin will be worth next year is selling something else. And the books are the most audited ledger in existence. Every payment since January 2009 is public, the [supply schedule](/rabbit-hole/supply) is fixed in code, and the [inflation bug](/glossary/inflation-bug) postmortem shows what happens when even a theoretical break in that accounting is found. The European Central Bank weighed the Ponzi label in its 2012 report on virtual currencies and declined to apply it either way: it noted there is no central organiser and that the system "does not promise high returns to anybody," and it still called Bitcoin a high-risk system for its users, which was fair.

What people usually mean when they say it is narrower. Early buyers only profit if later buyers pay more. That is true, and it is also true of gold, farmland, and every other asset that produces no cash flow. A price that depends on future demand is a feature of most things people own. A hidden liability paid from new deposits is a crime. The word for the first is [price discovery](/glossary/price-discovery); the word for the second is Ponzi, and confusing them is how the label got attached.

The industry has had real Ponzis, and they are worth knowing by name because they all used bitcoin as the deposit rather than being Bitcoin. Bitcoin Savings and Trust, run by Trendon Shavers as "pirateat40" on the BitcoinTalk forum, promised up to 7 percent a week and took in roughly 700,000 BTC in 2011 and 2012; it became the SEC's first bitcoin securities case in 2013. Bitconnect promised daily returns from a "trading bot" and collapsed in January 2018 with about $2 billion gone. PlusToken took in billions in coins across Asia in 2018 and 2019 before Chinese police broke it up; a court sentenced its operators in 2020. And [QuadrigaCX](/glossary/quadriga-cx), then Canada's largest exchange, was found by the Ontario Securities Commission to have "operated like a Ponzi scheme" after its founder's death; the [custody graveyard](/rabbit-hole/mt-gox-ftx-graveyard) chapter has the full story.

In each case the tell was the same one Ponzi and Madoff used: a guaranteed return, paid by a person, with the books closed. Bitcoin held in your own keys has none of those. Bitcoin handed to someone who promises you a yield has all of them, which is what [counterparty risk](/glossary/counterparty-risk) means.

See [Rat Poison, Tulips and a Pet Rock](/rabbit-hole/bitcoin-is-dead) for who called Bitcoin a Ponzi scheme, when, and how the label scores against the SEC's own definition.
