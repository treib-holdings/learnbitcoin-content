---
title: "Peg-Guard"
slug: peg-guard
draft: false
shortDefinition: "A security measure in sidechain peg systems preventing exploit or double-spend of pegged BTC, often requiring federation consent."
keyTakeaways:
  - "Prevents pegged BTC from being withdrawn illegitimately"
  - "Federation or multi-sig typically verifies legitimate peg-outs"
  - "Crucial to sidechain security where two-way pegs are used"
sources: []
relatedTerms: []
liveWidget: ~
---

When BTC are pegged into a sidechain (like Liquid), the sidechain must ensure users can't withdraw more BTC than was locked. A 'peg-guard' might require multiple signers from a federation to validate each peg-out, or monitor the sidechain's state to confirm no double spends or invalid blocks are sneaking extra coins. This reduces the risk of a sidechain bug or consensus fault letting malicious actors 'print' pegged BTC. While not trustless like mainnet, a robust peg-guard design helps sidechains remain secure and transparent.
