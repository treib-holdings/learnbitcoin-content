---
title: "Changeless Transaction"
slug: changeless-transaction
draft: false
published: "2026-09-08"
shortDefinition: "A transaction whose inputs match the payment closely enough that no change output is needed; the small excess goes to the miner as fee. Cheaper to build, cheaper to spend from later, and it gives change detection nothing to work with."
keyTakeaways:
  - "Drops the change output (about 31 vbytes for a native SegWit output) and the future cost of spending it (about 68 vbytes for a native SegWit input), for the price of a slightly larger fee"
  - "With a single output there is no change to identify, so the change-detection heuristic has nothing to work with"
  - "Bitcoin Core's Branch and Bound algorithm exists to find these; the excess it tolerates is capped at the cost of creating and spending a change output"
sources:
  - { label: "Bitcoin Core PR #10637 - Coin Selection with Murch's algorithm", url: "https://github.com/bitcoin/bitcoin/pull/10637" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Bitcoin Wiki - Privacy (change address detection)", url: "https://en.bitcoin.it/wiki/Privacy" }
relatedTerms:
  - change-output
  - coin-selection
  - branch-and-bound-bnb
  - utxo-pool
  - transaction-fee
  - address-clustering
  - chain-analysis
  - payjoin
liveWidget: ~
---

A changeless transaction is one where the coins being spent add up to the payment plus the fee closely enough that the wallet does not bother creating a [change output](/glossary/change-output). Whatever tiny surplus remains is simply left for the miner. Instead of two outputs, one to the payee and one back to the sender, the transaction has one, and it is the cleanest shape an on-chain payment can take.

The first benefit is cost, and it is larger than it looks. An output is not free to create: a native SegWit output adds about 31 vbytes to a transaction. It is also not free to spend later, since the change becomes a new coin that will cost about 68 vbytes as an input in some future transaction. A changeless spend avoids both charges. The [coin selection](/glossary/coin-selection) logic in Bitcoin Core (`src/wallet/coinselection.cpp`) makes this trade explicitly: [Branch and Bound](/glossary/branch-and-bound-bnb) will accept an overshoot, paid as extra fee, up to the amount that a change output would have cost to create and spend, because paying the miner a little now beats paying twice for a coin you did not want.

The second benefit is privacy. The most productive trick in [chain analysis](/glossary/chain-analysis) is change detection: look at a transaction's two outputs, decide which one is the change, and follow it into the sender's next transaction. The clues are familiar. The change is the odd amount while the payment is round; the change goes to a fresh address while the payee's address might be reused; the change matches the script type of the inputs. A changeless transaction removes the second output entirely, so there is nothing to compare and no thread to pull. The analyst sees a payment and does not know whether the sender kept anything at all.

The catch is that exact matches are only possible when the wallet's [pool of coins](/glossary/utxo-pool) contains a combination that happens to land in the window, which depends on how many coins you hold and how varied their sizes are. A wallet with one large coin never gets a changeless spend. A wallet that has received many payments of assorted sizes gets them surprisingly often. This is one of the quieter arguments for keeping a spread of coin sizes rather than consolidating everything into a single lump, and one of the reasons Core runs Branch and Bound on every send.
