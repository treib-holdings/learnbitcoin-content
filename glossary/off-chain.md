---
title: "Off-Chain"
slug: off-chain
draft: false
updated: "2026-10-13"
shortDefinition: "Any Bitcoin-related activity that doesn't settle directly on the main blockchain, including Lightning channels, sidechains, and custodial bookkeeping."
keyTakeaways:
  - "Lowers mainnet usage; saves block space and fees"
  - "Ranges from trust-minimized (Lightning) to fully trusted (custodial)"
  - "Trust-minimized off-chain still anchors disputes back to the base layer"
sources:
  - { label: "Poon and Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 2016): channels perpetually update balances and defer what is broadcast to the blockchain; payments are real bitcoin exchanged off-chain, enforceable on-chain against uncooperative counterparties", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "BOLT #7 - P2P Node and Channel Discovery: a channel's fee is fee_base_msat, in millisatoshi, plus fee_proportional_millionths", url: "https://github.com/lightning/bolts/blob/master/07-routing-gossip.md" }
  - { label: "Liquid Network documentation - Technical overview: Liquid is a sidechain of Bitcoin with a two-way peg, secured by functionary operators under a federated consensus model", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "BIP-300 - Hashrate Escrows, Consensus layer (2017): a type of L2 whose withdrawals to L1 are governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Coinbase Developer Platform - Send crypto, transfer APIs: funds can be sent to a network address or to a recipient's email; no transaction fees are required for off-blockchain cryptocurrency transactions", url: "https://docs.cdp.coinbase.com/coinbase-app/transfer-apis/send-crypto" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 7 (2008): blocks are generated every 10 minutes", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - layer-1
  - lightning-network
  - second-layer
  - sidechain
  - state-channel
liveWidget: ~
---

"Off-chain" is the catchall for any Bitcoin-related activity that doesn't produce an on-chain transaction. The base layer remains the ultimate source of truth; off-chain systems track state, balances, or commitments somewhere else and (in trust-minimized designs) anchor back to the chain when needed.

The major flavors:

- **Trust-minimized off-chain.** The [Lightning Network](/glossary/lightning-network) is the canonical example. Two parties open a channel with one on-chain funding transaction, exchange unlimited signed off-chain state updates between themselves, and only return to the chain when they close the channel or get into a dispute. The off-chain state is enforceable on-chain if anyone misbehaves.

- **Sidechains.** Liquid, Drivechains-style proposals, and other [sidechain](/glossary/sidechain) designs run a separate chain that pegs into Bitcoin. Activity happens on the sidechain; the base layer only sees the peg events.

- **Custodial off-chain.** Every exchange's internal ledger is off-chain. When you trade BTC on an exchange, or send to another customer of the same exchange, no Bitcoin transaction happens (Coinbase, for one, documents its account-to-account sends as off-blockchain and fee-free). The custodian just updates rows in a database. Fast, free, and exactly as secure as the custodian.

What off-chain lets you do that on-chain can't:

- **Settlement in seconds.** Lightning payments finalize in seconds; an on-chain confirmation takes about ten minutes on average.
- **Sub-cent fees.** Off-chain payments don't compete for block space.
- **Privacy improvements.** Lightning routing doesn't leave a permanent on-chain record of every hop.
- **Throughput.** The off-chain layer can process millions of state updates between two on-chain anchor points.

What you give up:

- **Some trust.** Trust-minimized off-chain (Lightning) has carefully-designed dispute resolution. Custodial off-chain doesn't, and the [exchange failure list](/glossary/exchange) is the warning label.
- **Some liquidity flexibility.** Lightning channel balance is locked between two parties; on-chain UTXOs can be spent to anyone.
- **Some auditability.** Off-chain activity isn't publicly verifiable unless the operator chooses to publish it.

The on-chain / off-chain split is intentional. The base layer optimizes for security and settlement; off-chain layers optimize for volume and speed. The two are meant to serve each other, rather than have a single layer do everything.
