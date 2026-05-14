---
title: "Pruning Mode"
slug: pruning-mode
draft: false
shortDefinition: "A feature in Bitcoin Core that discards older block data after validation, minimizing disk usage while preserving node security."
keyTakeaways:
  - "Enables running a full node with reduced disk space"
  - "Fully validates once but discards old blocks after syncing"
  - "Ideal for space-limited users but can't provide deep historical data"
sources: []
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

Disk usage with pruning enabled is typically 15-25 GB total (UTXO set + recent blocks + headers + indexes), vs ~600 GB for a fully-archival node. The difference is what makes "running a full node" practical on a Raspberry Pi or laptop with a modest SSD.

Pruning does not weaken consensus enforcement. A pruned node still validates every block, rejects invalid blocks, and behaves identically to a non-pruned node for the wallet and consensus-rule perspective. The only thing it can't do is serve old data to others.

For most users, pruning is the right default. For node operators who want to help bootstrap new nodes or run a block explorer, archival mode (no pruning) is needed. Bitcoin Core lets you switch by editing the config and re-syncing.
