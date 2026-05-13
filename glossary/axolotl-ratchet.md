---
title: "Axolotl Ratchet"
slug: axolotl-ratchet
draft: false
shortDefinition: "A cryptographic ratcheting protocol (used by Signal), sometimes likened to LN HTLCs but more advanced in complexity."
keyTakeaways:
  - "Enables forward secrecy in messaging via frequent key updates"
  - "Often referenced for its advanced cryptographic design"
  - "Lightning uses simpler HTLC-based updates, not full ratcheting"
sources: []
relatedTerms:
  - onion-routing-lightning
  - security
liveWidget: ~
---

The Axolotl Ratchet is a method of continuously updating encryption keys to ensure past and future messages remain secure, even if current keys are compromised. While used primarily in secure messaging apps like Signal, it's sometimes compared (albeit loosely) to the way Bitcoin's Lightning Network updates payment states via HTLCs.
However, Lightning's hash timelocks and incremental channel updates don't exactly match the complexity of a full ratchet protocol. The analogy highlights the shared principle of rolling forward keys and states to minimize the risk of compromise. But if Axolotl Ratchet is an exotic sports car of secure key exchange, Lightning's simpler approach is more like a reliable sedan-each has its place.
