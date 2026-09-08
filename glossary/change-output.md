---
title: "Change Output"
slug: change-output
draft: false
published: "2026-09-08"
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

The privacy trouble is that change is usually easy to spot from the outside. [Chain analysts](/glossary/chain-analysis) run a handful of heuristics: the payment is often a round number while the change is a long odd decimal; the change goes to a never-seen address while the payee's address may have history; the change output tends to share the script type of the inputs, since the same wallet made both. Guess the change correctly and you have linked the sender's inputs to a new address, which links to the sender's next transaction, and so on down the chain. This is the mechanism that turns one identified address into a history. It is why some coin selection deliberately hunts for [changeless transactions](/glossary/changeless-transaction) and why wallets vary the derivation and ordering of outputs to blur the clues.

Change also has a floor. If the surplus would be so small that spending it later costs more than it is worth, it is [dust](/glossary/dust), and a well-built wallet will drop the output and let the miner keep the difference rather than create a coin nobody will ever spend. Between that floor and the point where a change output is clearly worth having sits the tolerance that [Branch and Bound](/glossary/branch-and-bound-bnb) uses to decide whether a slightly overpaid fee beats a slightly pointless coin.

Change from a [CoinJoin](/glossary/coinjoin) is the exception to everything above. It is unmixed by definition, and spending it together with the mixed outputs undoes the mix. Privacy-focused wallets label it, quarantine it, and warn you when you touch it, which is the right instinct for change in general.
