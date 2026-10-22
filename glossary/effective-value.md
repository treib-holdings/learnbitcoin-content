---
title: "Effective Value"
slug: effective-value
linkText:
  - "effective value"
  - "effective values"
draft: false
published: "2026-10-22"
shortDefinition: "A coin's amount minus the fee it will cost to spend it as an input at the fee rate of the transaction being built. Coin selection adds up effective values, not face values, so the target stays fixed while the wallet searches; a coin whose effective value is zero or negative is not worth spending at that fee rate."
keyTakeaways:
  - "effective value = amount - (input size in vbytes x fee rate); a 10,000 sat coin behind a 68 vbyte native-segwit input is worth 9,932 sats at 1 sat/vB and 3,200 sats at 100 sat/vB"
  - "From Mark Erhardt's 2016 thesis (equation 5.1), implemented in Bitcoin Core for Branch and Bound in 0.17.0 and for all selection in 22.0 (PR #17331), which ended the old fee loop that could overestimate fees by up to 30 percent"
  - "Since 26.0 an unconfirmed coin's effective value also subtracts what it costs to bump its unconfirmed parent transactions to the same fee rate (PR #26152)"
sources:
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016), section 5.3, equation 5.1", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Core - src/wallet/coinselection.h (struct COutput: effective_value, fee, long_term_fee, ancestor_bump_fees)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.h" }
  - { label: "Bitcoin Core PR #10637 - Coin Selection with Murch's algorithm (effective values inside Branch and Bound, 0.17.0)", url: "https://github.com/bitcoin/bitcoin/pull/10637" }
  - { label: "Bitcoin Core PR #17331 - Use effective values throughout coin selection (22.0)", url: "https://github.com/bitcoin/bitcoin/pull/17331" }
  - { label: "Bitcoin Core PR #26152 - Bump unconfirmed ancestor transactions to target feerate (26.0)", url: "https://github.com/bitcoin/bitcoin/pull/26152" }
  - { label: "Bitcoin Core 22.0 release notes", url: "https://bitcoincore.org/en/releases/22.0/" }
  - { label: "Bitcoin Core 26.0 release notes (coin selection accounts for unconfirmed low-feerate ancestors)", url: "https://bitcoincore.org/en/releases/26.0/" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes, a P2PKH input 148)", url: "https://bitcoinops.org/en/tools/calc-size/" }
relatedTerms:
  - coin-selection
  - waste-metric
  - utxo-unspent-transaction-output
  - dust
  - transaction-fee
  - fee-estimation
  - branch-and-bound-bnb
  - coingrinder
liveWidget: ~
---

A coin's effective value is its face value minus the fee its input will add to the transaction that spends it. It is the number [Bitcoin Core's](/glossary/bitcoin-core) [coin selection](/glossary/coin-selection) adds up, so the target stays fixed while the wallet searches: each coin already carries its own fee. The idea is from Mark Erhardt's 2016 thesis, which gave the formula as the coin's value minus the fee per byte times the bytes of an input, with the example of a 100,000-satoshi coin being worth 98,520 satoshis at 10 satoshis per byte behind a 148-byte legacy input. In native segwit terms an input is 68 vbytes, so a 10,000 sat coin is worth 9,932 sats at 1 sat/vB and 3,200 at 100 sat/vB; at about 147 sat/vB it is worth nothing.

Before effective values, the reference wallet picked coins first and estimated the fee afterwards, then picked again with the fee added to the target, a loop the thesis showed could compound fees by up to 30 percent. [Branch and Bound](/glossary/branch-and-bound-bnb) used effective values from 0.17.0 (2018), and PR #17331 made every algorithm use them in 22.0 (2021). Since 26.0 the fee to bump a coin's unconfirmed parents is subtracted too, so an unconfirmed coin whose parent paid a low fee is worth less to the wallet than its face value suggests.

Three of the four algorithms only consider coins whose effective value is positive; the oldest, Knapsack, will still spend a coin at a loss, a leftover of its 2012 behaviour that the 22.0 change kept on purpose. A coin whose effective value is negative at the going rate is [dust](/glossary/dust) in the broad sense, the one that moves with the fee rate; the dust limit is the narrow one.

Go deeper in [Which Coins Does Your Wallet Spend?](/rabbit-hole/coin-selection) - the three costs of a pick, the four algorithms, the waste metric that judges them, and when consolidating pays.
