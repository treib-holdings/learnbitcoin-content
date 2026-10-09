---
title: "Corrupted Chain State"
slug: corrupted-chain-state
draft: false
updated: "2026-10-09"
shortDefinition: "A node's local blockchain data becomes invalid or inconsistent, often requiring a re-index or full sync."
keyTakeaways:
  - "Results from hardware, file system, or software issues"
  - "Causes invalid or incomplete local blockchain data"
  - "Often resolved by re-indexing or re-downloading the chain"
sources:
  - { label: "Bitcoin Core source - src/init.cpp (-reindex and -reindex-chainstate help text, prune-mode limits, disk-space check, recovery prompt)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/init.cpp" }
  - { label: "Bitcoin Core source - src/node/chainstate.cpp ('Corrupted block database detected' error)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/node/chainstate.cpp" }
  - { label: "Bitcoin Core docs - doc/files.md (data directory layout; avoid exFAT on macOS)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/files.md" }
  - { label: "Bitcoin Core 0.15.0 release notes - downgrading requires -reindex-chainstate", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "Jameson Lopp - 2025 Bitcoin Node Performance Tests (Bitcoin Core 30.0 full sync in 12 hours 7 minutes, downloading from a node on his local network)", url: "https://blog.lopp.net/2025-bitcoin-node-performance-tests/" }
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

Corrupted chain state is the operational failure mode where a node's local database (block files, UTXO set, indexes) becomes internally inconsistent. The cryptographic chain itself is fine; the *local copy* is broken. In [Bitcoin Core](/glossary/bitcoin-core) that local copy lives in the `blocks/`, `chainstate/` and `indexes/` folders of the data directory.

Common causes:

- **Power loss or hard shutdown** during a database write. LevelDB and Bitcoin Core handle most of these gracefully but not all.
- **Disk corruption** (failing SSD, bad sectors, RAID rebuild bug).
- **Filesystem-level issues.** Bitcoin Core's documentation says to avoid exFAT-formatted drives on macOS after multiple reports of corruption. Networked storage (NFS, sshfs) is another trouble spot - never run a node off these.
- **Running out of disk space.** Bitcoin Core's developers treat a full disk as a corruption risk, so the software checks free space every five minutes and shuts itself down when space runs low.
- **Version changes and software bugs.** An older Bitcoin Core may not be able to read data a newer one has written. The 0.15.0 release notes, for example, warned that switching back to an older version required `-reindex-chainstate` because the chainstate format had changed. Outright bugs cause corruption occasionally too.
- **Out-of-memory kills** mid-write.

Symptoms: the node refuses to start with an error such as "Error opening block database" or "Corrupted block database detected," or it fails to validate new blocks. The Bitcoin Core desktop app then offers to rebuild the databases. The command-line program, `bitcoind`, instead stops and tells you to restart with `-reindex` or `-reindex-chainstate`.

The fix ladder, easiest first:

- **`-reindex-chainstate`.** Wipes the chainstate (the UTXO set) and rebuilds it from the block files already on disk, keeping the block index. This cleans most corruption in the chainstate database. The option does the wiping itself, so there is no need to delete `chainstate/` by hand first. A [pruned node](/glossary/pruning-mode) can't use this option and has to use `-reindex`.
- **`-reindex`.** Wipes and rebuilds the block index, the chainstate and any optional indexes such as `txindex`, by re-reading and re-validating every block file. Takes longer (hours). On an unpruned node it doesn't require re-downloading; on a pruned node it means downloading the whole chain again.
- **Delete and resync from scratch.** Delete `blocks/`, `chainstate/` and `indexes/` and start fresh. This is the last resort, because it means a full initial block download. In Jameson Lopp's December 2025 test, Bitcoin Core 30.0 took about 12 hours to sync while checking every signature. He used a well-equipped 2018 desktop with a fast SSD and downloaded the blocks from another node on his local network, so a slower computer or internet connection will take longer.

Prevention is mostly operational: run on reliable hardware (an SSD with power-loss protection, ECC RAM if you're paranoid), use an uninterruptible power supply, keep plenty of disk space free, don't run nodes on networked filesystems or macOS exFAT drives, and back up the wallet (not the chain state - the chain state is reproducible from the network).
