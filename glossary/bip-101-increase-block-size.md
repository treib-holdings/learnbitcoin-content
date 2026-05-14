---
title: "BIP 101 (Increase Block Size)"
slug: bip-101-increase-block-size
draft: false
shortDefinition: "Gavin Andresen's never-activated 2015 proposal to lift Bitcoin's block size cap to 8 MB and double it every two years."
keyTakeaways:
  - "Proposed an 8 MB block size starting January 2016, doubling every 2 years through 2036"
  - "Required 75% miner signaling within a 1000-block window; never reached threshold"
  - "Shipped in the Bitcoin XT client; opening move of the 2015-2017 block size war"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-102-2mb-block-size
  - bitcoin-cash
  - block-size
  - fork
  - segwit-segregated-witness-bip-141
liveWidget: ~
---

BIP 101, drafted by Gavin Andresen in June 2015, proposed a dynamic block size schedule: lift the cap from 1 MB to 8 MB on January 11, 2016, then double every two years through 2036, ending around 8 GB. Activation required 75% miner signaling within a rolling 1000-block window.

It never activated. The proposal shipped in Bitcoin XT (Andresen and Mike Hearn's fork of Bitcoin Core), which briefly attracted some miner support but lost momentum within months. The 75% threshold was never close to met.

BIP 101 is the opening move of the 2015-2017 block size war. The fault lines became clear quickly. Proponents argued that the 1 MB cap was throttling adoption and that a direct on-chain capacity increase was the simplest fix. Opponents argued that hard-forking the block size invited contentious chain splits, that aggressive scaling pressure would centralize node operation (bigger blocks mean more bandwidth and storage), and that better technical solutions (transaction malleability fixes, witness segregation, second-layer protocols) were nearly ready.

What actually shipped was [SegWit (BIP 141)](/glossary/segwit-segregated-witness-bip-141), activated August 2017 as a soft fork. SegWit delivered an effective 1.7-2x capacity increase without a hard fork, fixed transaction malleability (unlocking the Lightning Network), and didn't require unanimous coordination. Big-block proponents who rejected SegWit forked off as Bitcoin Cash later that month, eventually landing on an 8 MB cap of their own.

BIP 101 reads now as a road not taken. The technical merits and the political dynamics were both real; reasonable people held positions in good faith on each side. The result was that Bitcoin chose conservative base-layer scaling plus aggressive second-layer development, and the alternative path ran in parallel as a separate chain. Almost a decade later, Bitcoin's block size is unchanged; the heavy lifting on throughput happens in Lightning.

Spec: [BIP-101](https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki).
