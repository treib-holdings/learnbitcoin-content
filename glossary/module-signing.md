---
title: "Module Signing"
slug: module-signing
draft: false
shortDefinition: "Ensuring plugins or modules for Bitcoin/LN software are cryptographically signed, preventing tampering or malicious code injection."
keyTakeaways:
  - "Prevents malicious or tampered modules from loading"
  - "Relies on cryptographic signatures (PGP, etc.)"
  - "Crucial for extensible node or LN software"
sources: []
relatedTerms:
  - difficulty
  - mono-signature
  - quorum-signatures
liveWidget: ~
---

When a Bitcoin node or Lightning implementation supports add-ons (like c-lightning plugins or external modules), verifying they're authentic is crucial. Module signing uses a developer's PGP key or another signature scheme to confirm the downloaded plugin matches the legitimate release. If an attacker uploaded a trojan module, the signature check would fail. Similar to kernel module signing in operating systems, it's a security measure preventing untrusted code from running in a sensitive wallet or LN environment. Uptake depends on the developer ecosystem and user best practices.
