---
title: "UTXO (Unspent Transaction Output)"
slug: utxo-unspent-transaction-output
draft: false
shortDefinition: "A spendable piece of BTC recorded on-chain. Each transaction input consumes one or more UTXOs."
keyTakeaways:
  - "Reflects the 'coin' concept in Bitcoin's ledger model"
  - "Must be fully spent; leftover must go to a 'change' output"
  - "Fundamental to on-chain transaction logic and privacy"
sources:
  - { label: "UTXOs rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/utxos" }
relatedTerms:
  - absolute-fee
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - output-transaction-output
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - transaction
  - transaction-index-txindex
  - vanity-address
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
liveWidget: ~
---

A UTXO - **u**nspent **t**ransaction **o**utput - is a [transaction output](/glossary/output-transaction-output) that's still spendable. Bitcoin doesn't track account balances; it tracks UTXOs. The "balance" your wallet shows is just the sum of all UTXOs it can unlock.

Each UTXO has two parts: an **amount** (in satoshis) and a **locking script** that defines what's required to spend it. The most common script is "prove you have the private key for this address." More advanced scripts can require multiple signatures, a time delay, or other conditions.

UTXOs are all-or-nothing. When you spend one as a [transaction input](/glossary/input-transaction-input), the whole thing gets consumed. If you only want to send part of it, your transaction creates two outputs: one to the recipient, one back to yourself as **change**. Most wallets do this invisibly and pick a new address for the change.

Thinking in UTXOs matters for two practical reasons:

- **Fees.** Every input you spend takes up roughly 68-148 bytes (depending on script type), and bigger transactions cost more. Many small UTXOs = expensive transactions. Periodically consolidating them when fees are low can save you money later.
- **Privacy.** When you spend two UTXOs in the same transaction, you're publicly declaring they had a common owner. Chain analysts use this to cluster addresses. Coin control (manually choosing which UTXOs to spend) and tools like [CoinJoin](/glossary/coinjoin) let you push back.

Go deeper in the [UTXOs rabbit hole](/rabbit-hole/utxos) - change addresses, coin selection, dust, and the privacy implications. See also [Transaction](/glossary/transaction) for the data structure that consumes and creates UTXOs, and the [Mining rabbit hole §6](/rabbit-hole/mining) for how miners value them.
