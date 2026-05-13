---
title: "Hierarchical Multisig"
slug: hierarchical-multisig
draft: false
shortDefinition: "A layered multi-signature approach where each 'key' in a multisig can itself be multi-party or structured."
keyTakeaways:
  - "Each 'key' slot in multisig can be an additional multisig itself"
  - "Improves security and governance for larger organizations"
  - "Requires careful planning to avoid excessive complexity"
sources: []
relatedTerms:
  - bip-174-psbt
  - custodial-lightning-wallet
  - green-address
  - hd-wallet-hierarchical-deterministic-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - m-n
  - mono-signature
  - musig
  - musig2
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
  - wallet
liveWidget: ~
---

In hierarchical multisig, you break down a multi-signature arrangement (like 2-of-3) into layered sub-keys. For example, one of the 'keys' might be governed by multiple individuals within an organization, requiring several internal approvals. Another key could be a hardware device, and the third might be a time-locked key stored offline. This provides flexibility and redundancy, ensuring that decisions (like spending funds) can reflect the input of an entire group or department. While more complex to set up, hierarchical multisig can significantly enhance security for enterprises or collaborative custody solutions.
