---
title: "M-of-n"
slug: m-n
draft: false
shortDefinition: "A generic way to denote multisig, requiring M signatures out of N total possible signers (e.g., 2-of-3)."
keyTakeaways:
  - "General term for threshold signature setups"
  - "Allows flexible security policies based on participants’ needs"
  - "Practical for corporate, family, or co-managed funds"
sources: []
relatedTerms:
  - bip-174-psbt
  - bitcoin-vault
  - fidelity-bond
  - green-address
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - musig
  - musig2
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
liveWidget: ~
---

Multisignature addresses aren’t limited to 2-of-3 or 3-of-5. Any combination M-of-N can be used, where M is the threshold of signatures needed to spend funds. This provides granular control over security and redundancy. For instance, a corporation might adopt 3-of-5 for board approvals, or a family might use 2-of-2 to require both spouses’ agreement. Bitcoin’s standard script supports up to 15-of-15, though storing and coordinating that many keys can be impractical. M-of-N is the backbone of advanced custody, forging trustless cooperation between signers.
