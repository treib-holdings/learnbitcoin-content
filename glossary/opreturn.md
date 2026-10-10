---
title: "OP_RETURN"
slug: opreturn
draft: false
updated: "2026-10-10"
shortDefinition: "A script opcode allowing arbitrary data in a transaction output, effectively making the output unspendable."
keyTakeaways:
  - "Enables data embedding without making coins spendable"
  - "Size limits are relay policy, not consensus: Bitcoin Core relayed up to 80 bytes for a decade, then lifted the default cap in version 30.0 (2025)"
  - "Used for timestamping, token protocols such as Omni, Counterparty and Runes, and commitments from other chains"
sources:
  - { label: "Bitcoin Core 0.9.0 release notes - OP_RETURN outputs relayed as standard", url: "https://bitcoin.org/en/release/v0.9.0" }
  - { label: "bitcoin/bitcoin PR #3737 - standard OP_RETURN relay limit set to 40 bytes", url: "https://github.com/bitcoin/bitcoin/pull/3737" }
  - { label: "Bitcoin Core 0.11.0 release notes - default maximum OP_RETURN size raised to 80 bytes (#5286)", url: "https://bitcoincore.org/en/releases/0.11.0/" }
  - { label: "Bitcoin Core 30.0 release notes - datacarriersize default 100,000 bytes, multiple OP_RETURN outputs relayed", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Knots README (development generally takes place as part of Bitcoin Core and is merged into Knots for each release)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots 21.2.knots20210629 source, script/standard.h (MAX_OP_RETURN_RELAY 42 bytes)", url: "https://github.com/bitcoinknots/bitcoin/blob/v21.2.knots20210629/src/script/standard.h" }
  - { label: "Bitcoin Knots 29.2.knots20251010 source, policy.h (MAX_OP_RETURN_RELAY still 42 bytes: 40 bytes of data, +1 for OP_RETURN, +1 for the pushdata opcode)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.2.knots20251010/src/policy/policy.h" }
  - { label: "Bitcoin Knots v29.2.knots20251110 release notes (November 10, 2025) - the default datacarriersize increased to allow 83 bytes", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.2.knots20251110" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, policy.h (default data-carrier limit of 83 bytes, 80 bytes of data, applied by default to all known data-carrier methods)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/policy/policy.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, init.cpp (-acceptnonstddatacarrier: relay and mine non-OP_RETURN datacarrier injection)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/init.cpp" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, kernel/mempool_options.h (DEFAULT_ACCEPT_NON_STD_DATACARRIER false: that setting is off by default)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, validation.cpp (with that setting off, a transaction carrying data outside OP_RETURN outputs is refused as txn-datacarrier-nonstandard)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/validation.cpp" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, script.cpp (counts the bytes inside an OP_FALSE OP_IF envelope as data carried outside an OP_RETURN output)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/script/script.cpp" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this release includes the RDTS soft fork, BIP-110", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
  - { label: "Counterparty protocol specification - data in multisig, OP_RETURN or fake pubkeyhash outputs", url: "https://docs.counterparty.io/docs/advanced/protocol/" }
  - { label: "Blockchain Research Lab - Dominating OP Returns: The Impact of Omni and Veriblock on Bitcoin (2020)", url: "https://www.blockchainresearchlab.org/wp-content/uploads/2020/03/BRL-Working-Paper-No-7-Dominating-OP-Returns.pdf" }
  - { label: "VeriBlock Proof-of-Proof white paper (2018)", url: "https://www.veriblock.org/wp-content/uploads/2018/03/PoP-White-Paper.pdf" }
  - { label: "Ordinals documentation - Runes: runestones are OP_RETURN outputs", url: "https://docs.ordinals.com/runes.html" }
  - { label: "ChainQuery - OP_RETURN: Bitcoin's Data Layer", url: "https://chainquery.com/stories/op-return" }
relatedTerms:
  - bitcoin-script
  - op-code-operation-code
  - opreturn-based-tokens
  - script
  - scriptless-scripts
  - inscriptions
  - bitcoin-knots
liveWidget: ~
---

**OP_RETURN** is a [Bitcoin Script](/glossary/bitcoin-script) opcode that makes its output deliberately unspendable. The "spending" path is a guaranteed-fail, so an output starting with OP_RETURN never enters the UTXO set - giving you a way to embed arbitrary data into a Bitcoin transaction without bloating the unspent-output database.

The basic structure: `OP_RETURN <data>`. The output usually carries zero satoshis, since nothing can ever spend it. The data sits in the chain history forever but doesn't burden the UTXO set.

How much data nodes will relay is policy, not a consensus rule. Bitcoin Core started relaying OP_RETURN outputs with up to 40 bytes of data in version 0.9 (2014) and raised that to 80 bytes in 0.11 (2015). The 80-byte limit stood for a decade. Version 30.0 (October 2025) raised the default to 100,000 bytes, which leaves the transaction size limit as the real cap, and started relaying transactions with more than one OP_RETURN output. [Bitcoin Knots](/glossary/bitcoin-knots), node software built from Core's code, is stricter by default. For years it relayed only 40 bytes of OP_RETURN data, and a November 2025 release raised that to 80. By default it also won't relay transactions that carry data outside OP_RETURN outputs, such as inscriptions. Nodes running Knots releases from May 9, 2026 on left Bitcoin's main chain in August 2026. Miners have always been free to put larger OP_RETURN outputs in their own blocks.

What OP_RETURN is used for:

- **Proof-of-existence / timestamping.** Hash a document, embed the hash, prove later that the document existed before that block height. Used by OpenTimestamps and similar services.
- **Token protocols.** The Omni Layer, where Tether first issued USDT, and Runes carry their token messages in OP_RETURN outputs. Counterparty uses them for smaller messages.
- **Commitments from other chains.** VeriBlock's miners published that chain's state in Bitcoin OP_RETURN outputs to borrow Bitcoin's proof of work.
- **Layer-2 anchoring.** Some second-layer protocols anchor state commitments via OP_RETURN.
- **[Inscriptions](/glossary/inscriptions) (sort of).** Inscriptions use Taproot witness data rather than OP_RETURN, so the 80-byte limit never applied to them, but the data-embedding question is the same and OP_RETURN gets caught up in the debate.

The community debate around OP_RETURN:

- **Pro-data view:** the chain is for whatever its users want to pay fees for. Embedding data has legitimate uses (timestamping, sidechain commitments, etc.) and the fee market handles abuse.
- **Anti-data view:** Bitcoin's primary purpose is monetary; non-monetary data uses inflate fees for everyone, push out legitimate financial transactions, and shouldn't be relayed or mined. Some nodes ([Bitcoin Knots](/glossary/bitcoin-knots)) deliberately filter such transactions from their mempools.

Both positions are defensible; the live argument in 2024-2026 is *which* node relay policy is appropriate. The protocol itself accepts OP_RETURN; node-level policy is where the contest happens.

See [OP_RETURN-based Tokens](/glossary/opreturn-based-tokens) for the early token-experiment use case. For the full history, from data hidden in fake addresses to Core 30.0, with the RPC calls to find OP_RETURN outputs in a block yourself, read ChainQuery's [OP_RETURN: Bitcoin's Data Layer](https://chainquery.com/stories/op-return).
