---
title: "Entropy Mixing Party"
slug: entropy-mixing-party
draft: false
shortDefinition: "A group session where multiple participants combine random data to create a more secure shared seed."
keyTakeaways:
  - "Combines random sources from multiple people"
  - "Prevents any single party from controlling the seed"
  - "Often done offline for high security"
sources: []
relatedTerms:
  - deterministic-wallet
  - key-generation-ceremony
  - key-rotation
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

An entropy mixing party is like a potluck for randomness. Each participant brings their own random input-like dice rolls, coin flips, or hardware-based randomness-then all these inputs are combined to generate a master seed. This collaborative process reduces the risk that any single party can predict or manipulate the final seed, because doing so would require compromising all participants' randomness sources.
In practice, groups sometimes perform these sessions offline, using air-gapped devices or physical randomness to ensure higher security. Once the joint seed is created, it can be split into shares, or used directly as a multisig setup. It's a fun yet serious approach that emphasizes trust minimization: no one person fully controls the final seed, making it harder for attackers to compromise or steal funds.
