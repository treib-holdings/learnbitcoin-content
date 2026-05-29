---
title: "Mnemonic Password"
slug: mnemonic-password
draft: false
shortDefinition: "An optional passphrase appended to a BIP 39 seed, acting like a '25th word' for extra protection."
keyTakeaways:
  - "Enhances security beyond the base seed phrase"
  - "A second factor that must be remembered or backed up securely"
  - "If lost, the wallet becomes impossible to recover"
sources: []
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - mnemonic-entropy-bits
  - private-key
  - seed-phrase
liveWidget: ~
---

The BIP 39 passphrase, sometimes called the "25th word," is an optional string mixed in during seed derivation. Same 12 or 24 words plus a different passphrase yields a completely different wallet. The math is straightforward: BIP 39 derives the master seed via PBKDF2(mnemonic, "mnemonic" + passphrase), so any change to the passphrase changes everything downstream.

What it buys you:

- Defense against seed theft. If someone finds your written mnemonic, they get nothing without the passphrase. The 12 words alone derive a (possibly empty) decoy wallet.
- Plausible deniability. The decoy wallet at passphrase = "" can hold a small amount; the real wallet behind a non-trivial passphrase holds the rest. Coercion targets see only the decoy.
- An extra "factor" if you treat the passphrase as something you memorize while the seed is written on metal.

What it costs you:

- Lose the passphrase, lose the wallet. There is no recovery path. The seed words alone are useless. People have permanently locked themselves out of significant balances by forgetting a passphrase or by writing it down somewhere that later got lost or destroyed.
- Operational complexity. The passphrase must be backed up separately from the seed (otherwise both are lost in the same fire), backed up reliably (otherwise it's lost), and recoverable to your heirs if inheritance matters (otherwise the wallet dies with you).
- Footguns: a typo in the passphrase derives a silent alternative wallet. The wallet doesn't tell you the passphrase is "wrong"; it just opens a different empty wallet.

For most users, a properly stored seed without a passphrase is more secure than a seed with a passphrase that they're at non-trivial risk of mishandling. Add the passphrase only if you've thought carefully about how it gets backed up, recovered, and inherited.
