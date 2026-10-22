---
title: "Change Output"
slug: change-output
linkText:
  - "change output"
  - "change outputs"
  - "change address"
draft: false
published: "2026-09-08"
updated: "2026-10-22"
shortDefinition: "The output a transaction sends back to the spender when the selected inputs exceed the payment plus the fee. Bitcoin coins are spent whole, like paper bills, and the change is the difference."
keyTakeaways:
  - "Wallets send change to a fresh internal address on a separate derivation branch (BIP-44 reserves chain 1 for change), so a change address never appears in a request for payment"
  - "Change is the weak point of on-chain privacy: odd amounts, script type, and fresh-address patterns let analysts guess which output is yours and follow it into your next transaction"
  - "A change output too small to be worth spending is dust; wallets skip creating it and pay the surplus as fee instead"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Bitcoin Wiki - Privacy (change address detection)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Bitcoin Wiki - Change", url: "https://en.bitcoin.it/wiki/Change" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Bitcoin Core PR #23789 - wallet: strictly match tx change type to improve privacy (merged December 2021, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/23789" }
  - { label: "Bitcoin Core PR #24494 - wallet: generate random change target for each tx for better privacy (shipped in 24.0.1)", url: "https://github.com/bitcoin/bitcoin/pull/24494" }
  - { label: "Bitcoin Core 24.0.1 release notes (December 2022): change output amounts are now randomized", url: "https://bitcoincore.org/en/releases/24.0.1/" }
  - { label: "Bitcoin Core 0.17.0 release notes (October 2018): transaction inputs shuffled before signing, PR #12699", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core - src/wallet/coinselection.cpp (GenerateChangeTarget: the random change target, CHANGE_LOWER 50,000 and CHANGE_UPPER 1,000,000 sats)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.cpp" }
  - { label: "Bitcoin Core - src/wallet/spend.cpp (the change output inserted at a random position; inputs shuffled)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/spend.cpp" }
relatedTerms:
  - utxo-unspent-transaction-output
  - output-transaction-output
  - coin-selection
  - changeless-transaction
  - branch-and-bound-bnb
  - hierarchical-deterministic-wallet
  - address-reuse
  - address-clustering
  - dust
  - coin-control
sameAs:
  - "https://en.bitcoin.it/wiki/Change"
liveWidget: ~
---

A Bitcoin [UTXO](/glossary/utxo-unspent-transaction-output) cannot be partly spent. If you hold a 0.75 BTC coin and owe someone 0.5, the transaction consumes the whole 0.75, sends 0.5 to the payee, and sends the remainder, minus the fee, back to an address you control. That remainder is the change output. It works exactly like handing a cashier a twenty for a twelve-dollar purchase, except that the "eight dollars" comes back as a brand-new coin with its own address and its own place in the ledger.

Modern wallets handle change automatically and carefully. A [hierarchical deterministic wallet](/glossary/hierarchical-deterministic-wallet) derives change addresses from a separate internal branch of the key tree; BIP-44 reserves chain index 1 for it, alongside chain 0 for the addresses you hand out to receive payments. That split means a change address is always fresh, never reused, and never one that you gave to anybody. If you look at your own transaction in a block explorer and see an output you do not recognize, it is almost always your change landing on an address your wallet generated silently.

The privacy trouble is that change is usually easy to spot from the outside. [Chain analysts](/glossary/chain-analysis) run a handful of heuristics: the payment is often a round number while the change is a long odd decimal; the change goes to a never-seen address while the payee's address may have history; the change output tends to share the script type of the inputs, since the same wallet made both, which is why Bitcoin Core has matched the change type to the destination type when it can since version 23.0. Guess the change correctly and you have linked the sender's inputs to a new address, which links to the sender's next transaction, and so on down the chain. This is the mechanism that turns one identified address into a history. It is why some coin selection deliberately hunts for [changeless transactions](/glossary/changeless-transaction) and why wallets vary the derivation and ordering of outputs to blur the clues.

Bitcoin Core blurs them in four ways, each with a version. The change output is inserted at a random position among the outputs, and since 0.17.0 (2018) the inputs are shuffled before signing. The change type matches a destination type since 23.0, as above. And since 24.0.1 (December 2022) the amount of change the wallet aims for is drawn at random for each transaction (PR #24494): for payments of 25,000 sats or less the target is 50,000 sats plus the change fee; for larger payments it is the change fee plus a random value between 50,000 sats and the smaller of twice the payment (the average output, when there are several) and 1,000,000 sats, so the old fixed minimum of 0.01 BTC survives as the top of the range. Only the Knapsack and CoinGrinder algorithms aim at that target; Branch and Bound makes no change, and Single Random Draw uses the 50,000-sat floor.

Change also has a floor. If the surplus would be so small that spending it later costs more than it is worth, it is [dust](/glossary/dust), and a well-built wallet will drop the output and let the miner keep the difference rather than create a coin nobody will ever spend. Between that floor and the point where a change output is clearly worth having sits the tolerance that [Branch and Bound](/glossary/branch-and-bound-bnb) uses to decide whether a slightly overpaid fee beats a slightly pointless coin.

Change from a [CoinJoin](/glossary/coinjoin) is the exception to everything above. It is unmixed by definition, and spending it together with the mixed outputs undoes the mix. Privacy-focused wallets label it, quarantine it, and warn you when you touch it, which is the right instinct for change in general.

Go deeper in [Which Coins Does Your Wallet Spend?](/rabbit-hole/coin-selection) - what a change output costs twice, how analysts detect it, and what Bitcoin Core does to blur the clues.
