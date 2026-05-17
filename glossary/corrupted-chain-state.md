---
title: "Corrupted Chain State"
slug: corrupted-chain-state
draft: false
shortDefinition: "A node's local blockchain data becomes invalid or inconsistent, often requiring a re-index or full sync."
keyTakeaways:
  - "Results from hardware, file system, or software issues"
  - "Causes invalid or incomplete local blockchain data"
  - "Often resolved by re-indexing or re-downloading the chain"
sources: []
relatedTerms:
  - bitcoin-vault
  - blockchain
  - chain-split
  - fork-detection
  - full-node
  - full-validation
  - node-synchronization
  - reorg-reorganization
  - safe-mode-bitcoin-core
liveWidget: ~
---

Corrupted chain state is the operational failure mode where a node's local database (block files, UTXO set, indexes) becomes internally inconsistent. The cryptographic chain itself is fine; the *local copy* is broken.

Common causes:

- **Power loss or hard shutdown** during a database write. LevelDB and Bitcoin Core handle most of these gracefully but not all.
- **Disk corruption** (failing SSD, bad sectors, RAID rebuild bug).
- **Filesystem-level issues**, especially over networked storage (NFS, sshfs - never run a node off these).
- **Bitcoin Core software bugs** during major version upgrades, occasionally.
- **Out-of-memory kills** mid-write.

Symptoms: the node refuses to start, reports "corrupted block database," fails to validate new blocks, or shows wildly wrong balances.

The fix ladder, easiest first:

- **`-reindex-chainstate`.** Rebuilds the UTXO set from the existing on-disk blocks. Fast if blocks are intact; cleans most corruption in the chainstate database.
- **`-reindex`.** Rebuilds both the block index and the chainstate by re-reading and re-validating every block file. Takes longer (hours), but doesn't require re-downloading.
- **Delete `chainstate/` and reindex.** If `-reindex-chainstate` fails, manually remove the chainstate directory before reindexing.
- **Delete and resync from scratch.** Delete `blocks/` and `chainstate/`, start fresh. Last resort; takes a full IBD time (12+ hours on good hardware).

Prevention is mostly operational: run on reliable hardware (consumer SSD with power-loss protection, ECC RAM if you're paranoid), use an uninterruptible power supply, don't run nodes on networked filesystems, and back up the wallet (not the chain state - the chain state is reproducible from the network).
