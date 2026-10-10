---
title: "Pruning Mode"
slug: pruning-mode
draft: false
updated: "2026-10-10"
shortDefinition: "A feature in Bitcoin Core that discards older block data after validation, minimizing disk usage while preserving node security."
keyTakeaways:
  - "Enables running a full node with reduced disk space"
  - "Fully validates once but discards old blocks after syncing"
  - "Ideal for space-limited users but can't provide deep historical data"
sources:
  - { label: "Bitcoin Core 31 - intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored; with pruning on, it adds the prune target to the 14 GB chain state figure and says approximately that much will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 31 - guiconstants.h (default prune target shown in the GUI: 2 GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/guiconstants.h" }
  - { label: "Bitcoin Core 31 - release process (the size figures are a synced node's actual use plus 5-10% overhead)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/doc/release-process.md" }
  - { label: "Bitcoin Core - releases (31.1 is the newest release as of October 10, 2026)", url: "https://bitcoincore.org/en/releases/" }
  - { label: "Bitcoin Core 0.11.0 release notes - block file pruning (fully validating node without the raw block and undo data; minimum 550MB, enough for the last 288 blocks)", url: "https://bitcoincore.org/en/releases/0.11.0/" }
  - { label: "Bitcoin Core 31 - init.cpp (-prune help: target size in MiB, incompatible with -txindex, reverting requires re-downloading the entire blockchain)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/init.cpp" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet disk guidelines 856 and 14, which the setup screen adds up to 870 GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - graph-pruning
liveWidget: ~
---

Pruning mode is a Bitcoin Core option (`-prune=<MB>` in `bitcoin.conf`) that discards historical block data after it's been validated, keeping only enough recent block data to handle reorgs and serve the wallet. A pruned node still verifies every transaction in every block during its initial sync; it just throws the raw blocks away once it no longer needs them.

What pruning preserves:

- **The UTXO set.** The current state of all unspent transaction outputs. This is what wallets actually need to determine balances and build transactions. ~10-15 GB in 2026 and growing slowly.
- **The chain tip and recent blocks.** Up to the prune-target's worth (minimum ~550 MB) of recent block data, in case of reorgs.
- **Block headers.** The full header chain stays. Headers are small (~80 bytes each, ~75 MB total).

What pruning gives up:

- **Serving historical blocks to other peers.** A pruned node can't help other peers' initial sync; the data isn't there to send.
- **Rescan-from-scratch operations.** If you import an old seed and need to scan the chain from a year ago, a pruned node can't do it. You'd need to disable pruning and re-download or use a non-pruned node.
- **Some RPC calls.** `getblock` on old blocks fails; `gettxoutproof` for ancient transactions fails.

As of October 2026, Bitcoin Core 31's setup screen estimates about 16 GB of disk for a pruned node at the default 2 GB prune target, against at least 870 GB for a fully-archival node. Both are Core's own estimates, built from size figures that its release process sets 5-10% above what a synced node actually uses. A bigger prune target keeps more blocks and takes more space. The difference is what makes "running a full node" practical on a Raspberry Pi or laptop with a modest SSD.

Pruning does not weaken consensus enforcement. A pruned node still validates every block, rejects invalid blocks, and behaves identically to a non-pruned node for the wallet and consensus-rule perspective. The only thing it can't do is serve old data to others.

For most users, pruning is the right default. For node operators who want to help bootstrap new nodes or run a block explorer, archival mode (no pruning) is needed. Bitcoin Core lets you switch by editing the config and re-syncing.
