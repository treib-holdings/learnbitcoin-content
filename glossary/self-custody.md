---
title: "Self-Custody"
slug: self-custody
linkText:
  - "self-custody"
  - "self-custodial"
  - "self-custodied"
draft: false
published: "2026-06-18"
updated: "2026-10-13"
shortDefinition: "Holding your own bitcoin private keys, so that no exchange, bank, or custodian stands between you and your coins. The thing Bitcoin was built to make possible."
keyTakeaways:
  - "In self-custody you control the private keys directly - there is no third party who can freeze, lend, or lose your coins"
  - "It removes counterparty risk but adds personal-responsibility risk: lose your keys and the coins are gone with no recourse"
  - "Scale the setup to the stake - a hardware wallet for most holders, multisig once the amount would change your life"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 2, Transactions (2008): an electronic coin is defined as a chain of digital signatures, and each owner transfers it by signing it over to the next", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "bitcoin.org - Securing your wallet: when a third party controls your keys you rely entirely on their security and honesty, and exchanges and online wallets have been hacked, failed, or frozen access to funds; keep a backup in more than one place; forget your password and your funds are permanently lost; multi-signature protects against theft", url: "https://bitcoin.org/en/secure-your-wallet" }
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): 850,000 bitcoins missing, about 100,000 of them the exchange's own", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "Kroll, FTX case information: FTX Trading Ltd. and 101 affiliated debtors filed for Chapter 11 on November 11 and 14, 2022", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "Mt. Gox Rehabilitation Trustee - notice of repayment in bitcoin and Bitcoin Cash (July 5, 2024): the first repayments went to some creditors that day, a decade after the 2014 bankruptcy, with the rest to follow", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "In re FTX Trading (D. Del. 22-11068), Doc 36154 - FTX Recovery Trust financial report, Q2 2026 (filed August 17, 2026): after the July 31, 2026 distribution all allowed interest-bearing claims had received, or been reserved, at least a 100 percent cumulative recovery on their dollar claims", url: "https://restructuring.ra.kroll.com/FTX/ExternalCall-DownloadPDF?id1=NDA5NDM1MQ%3D%3D&id2=0" }
relatedTerms:
  - not-your-keys-not-your-coins
  - counterparty-risk
  - seed-phrase
  - private-key
  - mt-gox
  - ftx
  - hardware-wallet
  - multisig
liveWidget: ~
---

Self-custody means holding the [private keys](/glossary/private-key) to your own bitcoin, so that no exchange, custodian, or bank sits between you and your coins. Bitcoin is a bearer asset, which means whoever controls the keys controls the money. Self-custody is just taking that control yourself instead of handing it to someone else.

It's the direct answer to [counterparty risk](/glossary/counterparty-risk). When you hold your own keys, there's no company that can go bankrupt out from under you, no balance that's secretly a loan, and nobody who can switch your withdrawals off. Every name in the custody graveyard, from [Mt. Gox](/glossary/mt-gox) to [FTX](/glossary/ftx), was a failure of a custodian, not of Bitcoin. The coins were lost because someone else was holding the keys.

Self-custody isn't free, though. It moves the risk rather than removing it. Lose your [seed phrase](/glossary/seed-phrase) and the coins are gone for good, with none of the partial recovery a bankruptcy might eventually produce. The main skill it takes, backing up a seed properly, is something you can learn in an afternoon, and you can scale the setup to the amount. A single [hardware wallet](/glossary/hardware-wallet) is already a big improvement over an exchange balance, and [multisig](/glossary/multisig) is worth the effort once losing the money would seriously hurt. For most people holding for the long term, trading counterparty risk for personal responsibility is a good deal.

See [Mt. Gox to FTX: The Custody Graveyard](/rabbit-hole/mt-gox-ftx-graveyard) for the decade of receipts behind this.
