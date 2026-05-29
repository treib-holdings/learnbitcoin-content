---
title: "Liquid Network"
slug: liquid-network
draft: false
shortDefinition: "A federated sidechain developed by Blockstream, offering faster settlements, confidential transactions, and a pegged BTC model."
keyTakeaways:
  - "Federated peg secures BTC locked on mainnet in a multi-sig"
  - "Confidential Transactions hide amounts on L-BTC transfers"
  - "Faster settlements but relies on trusted functionaries"
sources: []
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - multisig
  - peg
  - peg-out
  - second-layer
  - sidechain
liveWidget: ~
---

The **Liquid Network** is a federated Bitcoin [sidechain](/glossary/sidechain) developed by Blockstream and operating since September 2018. It offers faster settlements (~1-minute blocks vs Bitcoin's ~10-minute), confidential transactions (amounts and asset types are hidden from chain observers), and a native asset-issuance framework. Pegged BTC on Liquid is called **L-BTC**.

How Liquid works in practice:

- **The [Liquid Federation](/glossary/liquid-federation)** - a consortium of around 65 entities (exchanges, OTC desks, financial firms, Blockstream itself) - runs the sidechain. Block production rotates among federation members.
- **Peg-in** sends BTC to a federation-controlled multisig on mainnet; L-BTC is issued on Liquid 1:1.
- **Peg-out** burns L-BTC on Liquid; federation releases BTC from mainnet back to the user.
- **Confidential Transactions** use cryptographic commitments (homomorphic Pedersen commitments) to hide amounts while letting nodes verify no inflation occurred.
- **Issued Assets.** Liquid supports issuing arbitrary assets (used by Tether USD on Liquid, gold-backed tokens like PAXG, securities tokens, etc.) alongside L-BTC.

What Liquid is used for in 2026:

- **Inter-exchange settlement.** Major Bitcoin exchanges use Liquid for fast moves between each other, avoiding the 60-minute confirmation lag of mainnet transfers.
- **OTC desks.** Confidential transactions matter for large block trades where amounts being moved would otherwise be visible to chain analysts.
- **Stablecoin issuance.** USDT-Liquid is one of the meaningful stablecoin networks for Bitcoin-native settlement.
- **Security token experiments.** Several issuers have launched tokenized securities on Liquid.

What Liquid is not:

- **Not trustless like mainnet.** The federation can technically collude. If a majority of federation members signed a malicious peg-out, they could in principle steal pegged BTC. This is a trust assumption (one held by reasonable people) but materially different from Bitcoin's proof-of-work security model.
- **Not Bitcoin's main scaling solution.** Liquid serves a specific niche (institutional fast settlement, confidential transactions). [Lightning](/glossary/lightning-network) is the general-purpose layer-2.

See [Liquid Federation](/glossary/liquid-federation) for the federation structure and [Sidechain](/glossary/sidechain) for the broader category.
