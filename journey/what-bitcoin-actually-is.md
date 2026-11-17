---
title: "What Bitcoin Is"
slug: what-bitcoin-actually-is
draft: false
status: live
published: "2026-05-15"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 1
goDeeper: ["supply", "bitcoin-units"]
estimatedMinutes: 5
tagline: "What it is, who runs it and how you hold it, in plain words. Nothing to buy."
prerequisites: []
relatedTerms: ["wallet", "address", "block", "blockchain", "satoshi-unit", "private-key", "block-explorer", "satoshi-nakamoto", "node"]
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (the design; the file read today is the revision of March 24, 2009)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Satoshi Nakamoto - Bitcoin P2P e-cash paper, the Cryptography Mailing List at metzdowd.com (October 31, 2008): the email that announced the design", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released, the Cryptography Mailing List (January 8, 2009): open source code, and 21,000,000 coins in total", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "mempool.space API - block 0, the first block, stamped January 3, 2009", url: "https://mempool.space/api/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Core 32.1, transactionrecord.h - the wallet treats six confirmations as the recommended number", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/qt/transactionrecord.h#L76" }
  - { label: "Bitcoin Core, amount.h - one bitcoin is 100,000,000 satoshis", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/consensus/amount.h" }
  - { label: "Bitcoin Core, validation.cpp - the schedule of new coins: 50 a block at first, halved every 210,000 blocks until it reaches zero", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L1833-L1844" }
  - { label: "Bitcoin Core, validation.cpp - a block that pays its maker more than the fees plus the scheduled amount is rejected", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L2608-L2611" }
  - { label: "Satoshi Nakamoto Institute - Satoshi's forum posts (the last on the Bitcoin forum is dated December 12, 2010; the index also lists one disputed line from March 7, 2014)", url: "https://satoshi.nakamotoinstitute.org/posts/" }
  - { label: "High Court of England and Wales - COPA v Wright (May 20, 2024): the one claim to be Satoshi Nakamoto that was tested in court failed", url: "https://caselaw.nationalarchives.gov.uk/ewhc/ch/2024/1198" }
  - { label: "BTC Nodes - computers that accept connections from others: 18,519 in the snapshot of November 16, 2026, of which 90.1% announced themselves as Bitcoin Core and 9.6% as Bitcoin Knots, which is built from Core's code", url: "https://btcnodes.io/api/v1/snapshots/1794846425/" }
  - { label: "mempool.space API - who made the last month's blocks (three pools made 62% of them in the month to November 16, 2026)", url: "https://mempool.space/api/v1/mining/pools/1m" }
  - { label: "Bitcoin Core - the signing keys that may merge changes into the program (five, October 2026)", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/contrib/verify-commits/trusted-keys" }
  - { label: "Bitcoin Core 32.1 release notes (October 27, 2026) - How to Upgrade: a new version is installed by hand", url: "https://bitcoincore.org/en/releases/32.1/" }
  - { label: "Bitcoin Core - download page: one of the copies offered, a snap, is updated by the computer without being asked", url: "https://bitcoincore.org/en/download/" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 15, 2010): 184 billion coins created by a bug, a patched program within five hours", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "Bitcoin Core - notice of September 20, 2018: a bug that could have let a block maker create coins, fixed on September 18 and described in full two days later", url: "https://bitcoincore.org/en/2018/09/20/notice/" }
  - { label: "UK Financial Conduct Authority - Cryptoassets consumer research 2025: 74% of people who own crypto keep it at the exchange where they bought it", url: "https://www.fca.org.uk/publication/research-notes/cryptoasset-consumer-research-2025-wave-6.pdf" }
  - { label: "European Central Bank - Use of cash by companies in the euro area in 2026 (August 13, 2026), chart 1: 1% of companies with physical points of sale accept crypto-assets or stablecoins", url: "https://www.ecb.europa.eu/press/use-of-cash/html/ecb.uccea202608.en.html" }
  - { label: "Board of Governors of the Federal Reserve System - Economic Well-Being of U.S. Households in 2025 (May 2026), table 33: 9% of adults held cryptocurrency as an investment, 2% used it to buy something or make a payment", url: "https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-banking.htm" }
  - { label: "Federal Reserve Bank of Atlanta - 2025 Survey and Diary of Consumer Payment Choice (May 2026), table E: 66.7% of people who own cryptocurrency say it is an investment", url: "https://www.atlantafed.org/-/media/Project/Atlanta/FRBA/Documents/research-and-data/surveys/consumer-payments/survey-diary-consumer-payment-choice/2025/2025-SDCPC-results-report.pdf" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: only scammers will guarantee profits or big returns", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams" }
  - { label: "Coin Metrics - BTC daily reference price since 2010: falls of more than half from a record high in 2011, twice between 2013 and 2015, in 2017 to 2018, twice between 2021 and 2022, and from October 2025 to June 2026", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2010-07-18&page_size=10000" }
---

> **Where you're going:** By the end you will know what Bitcoin is and who runs it. You will also have tried it yourself, with practice coins that are worth nothing.

**A guess first.** Who runs Bitcoin: a company, a government, or nobody? Remember your answer. The end of the page comes back to it.

You have probably met Bitcoin through its price. People buy and sell it for dollars, euros and other money, and the price moves a lot. Put the price to one side for a few minutes. This chapter is about the thing itself, and it needs no technical background.

## What is it?

Bitcoin was built to be money for the internet. You can send it to anyone, anywhere, and no bank or payment company has to approve it.

A bank keeps a record of what everyone has, and you trust the bank to keep it straight. Bitcoin keeps track of who has what without a bank. The next section says how.

## Where is the money?

It is on a shared record. Thousands of computers around the world each keep a copy. They all run the same kind of program, with the rules written into it. The main rules are easy to say: nobody can spend coins they do not have, spend the same coins twice, or make new coins outside a fixed schedule.

Each computer checks every new payment against those rules and ignores any that break them. Anyone may run one. The program is free, and anyone can read how it works.

New payments are added to the record in batches called **blocks**, about one every ten minutes. Each block is linked to the one before it, like the links of a chain. That is all the word *blockchain* means.

When a block takes in your payment, the payment has one **confirmation**. Each block added after it is one more. After six, a payment is usually treated as final.

## How much is there?

The rules allow 21 million bitcoin and no more. That limit has never been raised. New coins are released on a fixed schedule that slows down until it stops, more than a hundred years from now.

You do not need a whole one. A bitcoin divides into 100 million pieces called **sats**, so a person can hold or send a few dollars' worth.

## How do you hold it?

You can hold it without an account and without giving your name. The record holds no names. It lists coins against **addresses**. An address is a string of letters and numbers that you give to someone who wants to pay you.

Your coins are never on your phone. They stay on the shared record. What you hold is a secret that lets you spend them, called a **key**. A **wallet** is the app that keeps your keys.

Whoever has the key can spend the coins, and nobody can without it. If you lose it, nobody can give it back, because there is no company to ask.

Many people leave their coins with a company instead. Then the company holds the keys, not them. A later chapter is about that choice, and about keeping a key safe so that a lost phone does not mean lost coins.

## Who runs it?

No single person, company or government.

It was started in 2009 by someone using the name Satoshi Nakamoto. Nobody has shown who that was. Satoshi stopped writing in public at the end of 2010, and Bitcoin has run without its founder ever since.

Today each of those thousands of computers belongs to whoever chose to run it. Each one follows the rules of the program its owner picked. A new version arrives only if the owner installs it, or has told the computer to. So there is no switch that one person can flip to change the rules for everyone.

## What it is not

- **Not a company, and not a share in one.** There are no profits and nobody to pay them out. There are only the coins.
- **Not a bank.** Nobody can reverse a payment for you or reset a lost key.
- **Not everyday money, at least not yet.** You can send it to anyone, but few shops take it. The reason owners give most often for having some is investment.
- **Not a promise.** The price has fallen by more than half at least seven times. Anyone who guarantees you a profit is running a scam. This Journey will not tell you whether to buy any.

## Try it

That is enough to try it. The step below opens this site's own practice wallet, at practice.learnbitcoin.com. It asks for no name, no email and no money, and it takes a few minutes. Practice coins are sent, received and confirmed the way bitcoin is, and they are worth nothing.

Three things will come up. First the wallet asks whether to use a passkey, which is a login that your phone or computer keeps for you. Where both choices are offered, either works, and without is simpler.

Then it shows you 12 words and asks you to write them down. They are a master key: every key in this wallet is made from them. Here they guard practice coins only.

Last, before the coins are sent, a check run by Cloudflare, a company that guards websites, makes sure you are a person. It may ask you to tick a box.

**Do it:** [Hold some](https://practice.learnbitcoin.com/do/hold-some). Make a practice wallet, ask for practice coins and watch a block take them in.

## What the step shows

You make a wallet, and it makes its keys from 12 words. It gives you an address, practice coins are sent to it, and a block takes the payment in. That is its first confirmation. If you skipped the step, you can go back to it at any time.

Last, the step can tell you which block took a coin of yours in, and offers you a look at that coin on a block explorer, a website that shows the record to anyone who asks. We run the practice network and its explorer too, so here you see the idea and not the proof. On Bitcoin, explorers are run by many different people, and anyone can run the program and check the record directly.

## A fair objection

"Nobody runs it" is too simple.

Nearly all of those computers run the same program or a close copy of it, and a small group of programmers looks after that program. A few large groups make most of the blocks.

At least three times a bug put the whole record at risk, in 2010, 2013 and 2018, and a handful of people fixed it within days. The first let someone create billions of coins out of nothing. Each fix held only because the people running the computers went along with it.

So some people matter far more than others. What we can say so far is narrower than "nobody runs it": none of them has changed a rule that the people running those computers refused. The chapter called Fair Questions tells how close that has come to a test.

## Check yourself

<details>
<summary>Who can change the record?</summary>

No one alone. Thousands of computers each check every new payment against the same rules, and each follows the program its owner picked. Reread "Who runs it?"

</details>

<details>
<summary>What does a wallet keep?</summary>

Your keys: the secrets that let you spend your coins. The coins themselves stay on the shared record. Reread "How do you hold it?"

</details>

<details>
<summary>Your guess at the start: who runs Bitcoin?</summary>

Not a company and not a government. No single person or group runs it, though some matter far more than others. Reread "A fair objection".

</details>

## Words you now know

- **Block.** A batch of new payments added to the shared record. All the blocks, linked in order, are the blockchain.
- **Confirmation.** A block that holds your payment, or one added after it.
- **Sats.** The small pieces of a bitcoin. 100 million make one.
- **Address.** What you give someone so that they can pay you.
- **Key.** The secret that lets you spend your coins. This wallet makes all its keys from 12 words.
- **Wallet.** The app that keeps your keys.

Why would anyone want money like this?
