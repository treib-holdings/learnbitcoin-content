---
title: "Bitcoin Client"
slug: bitcoin-client
draft: false
updated: "2026-10-10"
shortDefinition: "Software that implements the Bitcoin protocol, such as Bitcoin Core, enabling nodes to validate and broadcast transactions."
keyTakeaways:
  - "Implements consensus rules for validating transactions"
  - "Options include full nodes, SPV wallets, or specialized versions"
  - "Ensures your transactions comply with Bitcoin's protocol"
sources:
  - { label: "Bitcoin Knots - official site (names Luke Dashjr as lead maintainer)", url: "https://bitcoinknots.org/" }
  - { label: "Bitcoin Knots README (development generally takes place in Bitcoin Core and is merged into Knots for each release)", url: "https://github.com/bitcoinknots/bitcoin" }
  - { label: "Bitcoin Knots 29.3.knots20260507 source, policy.h (Knots-only relay settings such as -rejectparasites and -datacarrierfullcount, both on by default)", url: "https://github.com/bitcoinknots/bitcoin/blob/v29.3.knots20260507/src/policy/policy.h" }
  - { label: "Bitcoin Knots v29.3.knots20260507 release notes (May 8, 2026) - this version does not support BIP-110", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260507" }
  - { label: "Bitcoin Knots v29.3.knots20260508 release notes (May 9, 2026) - this version applies BIP-110 (RDTS) after the user confirms", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.3.knots20260508" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (temporarily limits data fields; blocks 961,632 to 963,647 that do not signal bit 4 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, 2026); notes Knots released it on mainnet and on August 8 its nodes began rejecting non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - dates the split to August 8 and ships a backward-incompatible switch to a BLAKE2b proof of work", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
  - { label: "bitcoin-blake2b.org, the page Knots' v29.4.1 release notes link for more information (nodes enforcing BIP-110 stopped accepting non-signaling blocks on August 8, 2026; proof of work later changed to BLAKE2b)", url: "https://bitcoin-blake2b.org/" }
  - { label: "Bitcoin Core - About (an open-source project and a direct descendant of the original Bitcoin client released by Satoshi Nakamoto; a large developer community)", url: "https://bitcoincore.org/en/about/" }
  - { label: "Luke Dashjr - Bitcoin node software chart, listening nodes plus his estimate of non-listening ones (at 15:00 UTC on October 10, 2026: Bitcoin Core 87% and Bitcoin Knots 13% of about 106,000; its per-version list puts about 7,900 of about 13,700 Knots nodes on builds that enforce BIP-110)", url: "https://luke.dashjr.org/programs/bitcoin/files/charts/software.html" }
  - { label: "btcd README (an alternative full node Bitcoin implementation written in Go)", url: "https://github.com/btcsuite/btcd" }
  - { label: "lnd README (pluggable chain back ends: btcd, a full node; bitcoind; and Neutrino, a light client)", url: "https://github.com/lightningnetwork/lnd" }
  - { label: "Libbitcoin Node on GitHub (Bitcoin full node built on the Libbitcoin development library)", url: "https://github.com/libbitcoin/libbitcoin-node" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 8, Simplified Payment Verification (keep only block headers and get the Merkle branch for a transaction)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-157 - Client Side Block Filtering (a light client protocol in which full nodes serve compact block filters)", url: "https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki" }
  - { label: "Neutrino README (a Bitcoin light client that uses compact block filters)", url: "https://github.com/lightninglabs/neutrino" }
  - { label: "Bitcoin Fork Monitor (forkmonitor.info) - on October 10, 2026 it runs several versions of Bitcoin Core plus btcd and bcoin side by side and compares their chain tips", url: "https://forkmonitor.info/" }
relatedTerms:
  - bitcoin-core
  - bitcoin-core-rpc
  - bitcoin-knots
  - node
  - node-operator
  - node-synchronization
  - spv-simplified-payment-verification
liveWidget: ~
---

A Bitcoin client is any software that implements the Bitcoin protocol - speaks the P2P protocol, validates blocks and transactions, and (usually) manages a wallet. "Client" is the broad umbrella; specific implementations have names.

The major implementations as of 2026:

- **Bitcoin Core.** A direct descendant of the original Bitcoin software that Satoshi Nakamoto released, maintained as an open-source project with a large developer community. Luke Dashjr's node estimate put about 87% of nodes on it in October 2026.
- **Bitcoin Knots.** A fork of Bitcoin Core whose lead maintainer is Luke Dashjr, with extra relay-policy options and different defaults. Releases up to May 8, 2026 do not include BIP-110. Releases from May 9, 2026 on enforce BIP-110, a temporary limit on data in transactions, and nodes running them left Bitcoin's main chain on August 8, 2026. In September 2026 Knots shipped a hard fork that gave that split-off chain a different proof of work, BLAKE2b. The same estimate put about 13% of nodes on Knots, more than half of them on the newer releases.
- **btcd.** A separately written full node in the Go language. The lnd Lightning node can use it as its link to the blockchain.
- **Libbitcoin.** A separately written Bitcoin development library, with a full node built on it.
- **Light clients.** Many wallets check their own payments without validating every block. The Bitcoin white paper describes [simplified payment verification](/glossary/spv-simplified-payment-verification): keep only the block headers and get proof that a transaction sits in a block. BIP-157 describes a newer light-client protocol in which full nodes serve compact block filters, and Neutrino is a light client that uses such filters. Either way, the wallet relies on full nodes for the data it does not check itself.

Why implementation diversity matters:

- **Bug resilience.** A bug in one client's validation that lets an invalid transaction through can be caught by other implementations that don't share the bug. [Fork watcher](/glossary/fork-watcher) sites such as forkmonitor.info run several implementations side by side and compare the chains they follow.
- **Decentralization of development.** Multiple independent teams reduce the risk of any single party being a chokepoint for the protocol.
- **Resistance to monoculture vulnerabilities.** A 0-day vulnerability in Core wouldn't immediately compromise the entire network if alternative implementations exist.

Why monoculture persists anyway:

- **Network effects.** Most nodes run Bitcoin Core, so another implementation has to match its consensus behavior exactly to stay on the same chain. Alternative implementations have a higher trust burden to justify their adoption.
- **Consensus risk.** A subtle consensus difference in an alternative implementation could fork its users off the chain. That's a real risk even with extensive testing.

For most users, "the Bitcoin client" effectively means Bitcoin Core. For the protocol's long-term health, more implementations being viable is a structural good.
