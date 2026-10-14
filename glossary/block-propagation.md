---
title: "Block Propagation"
slug: block-propagation
draft: false
updated: "2026-10-13"
shortDefinition: "The process by which newly mined blocks are transmitted among Bitcoin nodes worldwide."
keyTakeaways:
  - "Miners broadcast newly found blocks to peers"
  - "Efficient relay methods cut bandwidth and stale-block rates"
  - "Rapid propagation maintains global network consensus"
sources:
  - { label: "BIP 152 - Compact Block Relay (Matt Corallo, 2016; 80-byte header plus 6-byte short transaction IDs; high-bandwidth mode to at most three peers, relayed before full validation once the header checks out)", url: "https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki" }
  - { label: "Bitcoin Core 0.13.0 release notes - Compact Block support (BIP 152) (August 23, 2016)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "Christian Decker and Roger Wattenhofer - Information Propagation in the Bitcoin Network (IEEE P2P 2013; median 6.5 seconds and mean 12.6 seconds for a node to receive a block; propagation delay as the primary cause of blockchain forks)", url: "https://tik-old.ee.ethz.ch/file//49318d3f56c1d525aabf7fda78b23fc0/P2P2013_041.pdf" }
  - { label: "KIT DSN Research Group - Bitcoin Network Monitor, current block propagation delay distribution (raw file data/curblock.gpd as served on 13 October 2026: half of peer announcements within 0.84 seconds of the first, 90% within 2.5 seconds, 99% within 10.4 seconds)", url: "https://www.dsn.kastel.kit.edu/bitcoin/" }
  - { label: "FIBRE - The Fast Internet Bitcoin Relay Engine (UDP transport, forward error correction and compact blocks; the original network sat in stasis for almost a decade before Localhost Research revived a public network)", url: "https://bitcoinfibre.org/" }
  - { label: "Blockstream - Blockstream Satellite (broadcasts the Bitcoin blockchain worldwide 24/7 for free from geosynchronous satellites, so a node is not cut off when its internet connection fails)", url: "https://blockstream.com/satellite/" }
relatedTerms:
  - bip-152-compact-blocks
  - bitcoin-satellite
  - block
  - block-explorer
  - block-header
  - block-height
  - block-time
  - blockchain
  - competitive-block-propagation
  - competitive-mining
  - reorg-reorganization
  - stale-block
liveWidget: ~
---

Block propagation is how a newly-mined block travels from the miner who found it to every other node on the network. Speed matters: until a peer hears about the new block, they're potentially still mining or building on the previous tip, and the longer that takes, the higher the chance that a second miner finds a competing block and one of the two ends up a [stale block](/glossary/stale-block).

The protocol-level optimizations:

- **[Compact Blocks (BIP 152)](/glossary/bip-152-compact-blocks).** Instead of sending the full block, the sender transmits the 80-byte header plus a 6-byte short ID for each transaction. The receiver rebuilds the block from transactions it already has in its mempool and requests only the ones it is missing. Bandwidth drops to a small fraction of a full block, and blocks arrive sooner as a side effect. In Bitcoin Core since 0.13 (August 2016).
- **High-bandwidth mode.** A node asks up to three peers to push compact blocks to it unsolicited, as soon as the header checks out and before the block has been fully validated. Lower latency, at the cost of some extra bandwidth from those peers.
- **FIBRE and similar relay networks.** FIBRE is a patchset on Bitcoin Core that combines UDP transport, forward error correction and compact blocks to move blocks between its nodes at close to the speed of light in fiber. Matt Corallo's original network, the successor to his Bitcoin Relay Network, sat dormant for most of a decade before Localhost Research revived a public FIBRE network and invited others to run their own.
- **Bitcoin Satellite.** Blockstream's satellite broadcast (covered in [Bitcoin Satellite](/glossary/bitcoin-satellite)) broadcasts the blockchain around the world for free, a redundant non-internet path for block data.

Why all the engineering: every additional second of propagation delay adds to the chance of a stale block, roughly in proportion, for whichever miner is downstream. That is lost revenue, and in stale-block races the largest mining operations hold an asymmetric advantage. The protocol level keeps improving so the playing field doesn't tilt entirely toward the best-connected.

How fast it is: in 2013, before compact blocks, a measurement covering the reachable network found a median of 6.5 seconds for a node to receive a new block, with a mean of 12.6 seconds. The KIT network monitor in Germany, which records when each of its peers announces a new block, saw half of the announcements arrive within about 0.8 seconds of the first and 90% within about 2.5 seconds in October 2026; the slowest 1% took more than ten seconds.
