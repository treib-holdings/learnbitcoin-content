---
title: "Key Pool"
slug: key-pool
draft: false
shortDefinition: "A cache of pre-generated addresses (and keys) in Bitcoin Core wallets to avoid address reuse and speed new address creation."
keyTakeaways:
  - "Ensures unique addresses without generating them on demand"
  - "Prevents inadvertent address reuse affecting privacy"
  - "Part of older or internal wallet logic, now usually hidden by HD frameworks"
sources: []
relatedTerms: []
liveWidget: ~
---

In older Bitcoin Core implementations, the wallet generates a set of future addresses (a key pool) during startup. When you request a new receiving address, the wallet pulls from this pool instead of generating it on the fly. This reduces the chance of address reuse, which erodes privacy. If the key pool is exhausted, Bitcoin Core automatically creates more addresses in the background. Modern HD wallet approaches also maintain a similar concept, though behind the scenes, they derive fresh keys from the master seed instead of storing them individually. Still, the 'key pool' notion remains an internal wallet mechanism preventing accidental reuse and ensuring quick address generation.
