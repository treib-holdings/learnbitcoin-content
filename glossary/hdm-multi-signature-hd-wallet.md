---
title: "HDM (Multi-Signature HD Wallet)"
slug: hdm-multi-signature-hd-wallet
draft: false
shortDefinition: "Combines HD derivation with multisig, so each cosigner has an extended key tree for multiple accounts or addresses."
keyTakeaways:
  - "Deploys multiple HD seeds in a single multisig arrangement"
  - "Each cosigner’s extended keys generate coordinated addresses"
  - "Improves security, redundancy, and scaling for multi-signature wallets"
sources: []
relatedTerms:
  - byzantine-fault-tolerance
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - wallet
liveWidget: ~
---

HDM stands for Hierarchical Deterministic Multisig. It’s where multiple cosigners each use their own HD seed to form a multisig wallet. Rather than storing a single private key offline, you distribute keys among different devices or people, requiring multiple signatures to spend. Each cosigner’s HD path can generate countless addresses, and as long as each cosigner has their seed, you can add or rotate addresses without additional setup.
This approach greatly enhances security and flexibility. For instance, a 2-of-3 setup might involve one key on a hardware device, another on your phone, and the third with a trusted relative. Because each is an HD seed, you can manage numerous addresses with consistent xpub coordination-ideal for businesses or families handling large BTC holdings.
