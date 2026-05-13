---
title: "Mnemonic Password"
slug: mnemonic-password
draft: false
shortDefinition: "An optional passphrase appended to a BIP 39 seed, acting like a ‘25th word’ for extra protection."
keyTakeaways:
  - "Enhances security beyond the base seed phrase"
  - "A second factor that must be remembered or backed up securely"
  - "If lost, the wallet becomes impossible to recover"
sources: []
relatedTerms: []
liveWidget: ~
---

Many wallets let you set an additional passphrase on top of the generated words-sometimes referred to as a ‘salt’ or ‘25th word.’ This passphrase modifies the final seed, meaning someone who steals just the mnemonic phrase still can’t access your funds without the correct passphrase. Conversely, losing or forgetting this passphrase renders the wallet irrecoverable. It’s a powerful extra layer if you fear physical seed backups might be compromised. However, it also introduces a single point of failure if the passphrase isn’t memorized or stored as carefully as the mnemonic.
