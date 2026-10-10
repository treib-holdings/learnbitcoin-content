---
title: "Block Time"
slug: block-time
updated: "2026-10-10"
draft: false
shortDefinition: "The average interval between consecutive blocks, targeted around 10 minutes for Bitcoin."
keyTakeaways:
  - "Aims for ~10 minutes per new block on average"
  - "Difficulty adjusts to maintain stable intervals"
  - "A core design choice balancing security and throughput"
sources:
  - { label: "Bitcoin Core source - chainparams.cpp: mainnet nPowTargetSpacing of 10 * 60 seconds and a two-week nPowTargetTimespan (2,016 blocks)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper: difficulty targets an average number of blocks per hour; blocks generated every 10 minutes (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Difficulty: adjusted every 2016 blocks toward one block each 10 minutes", url: "https://en.bitcoin.it/wiki/Difficulty" }
  - { label: "Decker and Wattenhofer - Information Propagation in the Bitcoin Network: proof-of-work is a Poisson process with exponential block intervals; propagation delay causes forks (2013)", url: "https://tik-db.ee.ethz.ch/file/49318d3f56c1d525aabf7fda78b23fc0/P2P2013_041.pdf" }
  - { label: "Gervais et al. - On the Security and Performance of Proof of Work Blockchains: block interval trades performance against security (2016)", url: "https://eprint.iacr.org/2016/555" }
  - { label: "Bitcoin Wiki - Confirmation: the often-cited default of 6 blocks", url: "https://en.bitcoin.it/wiki/Confirmation" }
  - { label: "Litecoin Core source - chainparams.cpp: mainnet nPowTargetSpacing of 2.5 * 60 seconds", url: "https://github.com/litecoin-project/litecoin/blob/master/src/chainparams.cpp" }
  - { label: "ethereum.org - The Merge: since September 15, 2022, proof-of-stake slots occur every 12 seconds", url: "https://ethereum.org/roadmap/merge/" }
  - { label: "Ethereum consensus specs - mainnet config: SLOT_DURATION_MS 12000, no later fork scheduled (October 2026)", url: "https://github.com/ethereum/consensus-specs/blob/master/configs/mainnet.yaml" }
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-header
  - block-height
  - block-propagation
  - blockchain
  - difficulty-retargeting
  - mtp-median-time-past
sameAs:
  - "https://en.bitcoin.it/wiki/Block_timestamp"
  - "https://en.bitcoin.it/wiki/Confirmation"
liveWidget: ~
---

Bitcoin's target block time is 10 minutes. That's the *average* interval [difficulty](/glossary/difficulty) tries to maintain by adjusting how hard the mining puzzle is. It's not the time you should expect to wait for any individual block.

Mining is a [Poisson process](/glossary/poisson-process). Each second, every miner in the world is independently trying random nonces. There's no "due" block. The actual interval between blocks is exponentially distributed: many blocks land in 1-5 minutes, some take 20-40 minutes, and about 130 blocks a year, two or three a week, take over an hour (at a 10-minute average, the chance of an hour-long wait is e^-6, about 0.25%). The 10-minute number is just the mean over a long window.

The choice of 10 minutes (rather than, say, 2.5 minutes like Litecoin, or 12 seconds like Ethereum as of October 2026) was a deliberate tradeoff:

- **Long enough** to let a new block propagate to virtually every node on Earth before the next one is found. This minimizes [orphan blocks](/glossary/orphan-block) and chain forks.
- **Long enough** that the [proof-of-work](/glossary/proof-work-pow) per block is meaningful security.
- **Short enough** that confirmations accumulate at a useful rate. Six confirmations (the conventional "settled" threshold for large amounts) is about an hour.

The [difficulty retarget](/glossary/difficulty-retargeting) every 2,016 blocks pulls the average back toward 10 minutes when global hash rate has grown (or shrunk). See the [Mining rabbit hole section 4](/rabbit-hole/mining) for the long version.
