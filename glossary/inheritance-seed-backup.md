---
title: "Inheritance Seed Backup"
slug: inheritance-seed-backup
draft: false
shortDefinition: "Guidelines and mechanisms (e.g., multisig) ensuring heirs can access a deceased owner's BTC without compromising security."
keyTakeaways:
  - "Prevents permanent loss of BTC upon death"
  - "Often involves documentation, multisig, or legal oversight"
  - "Carefully balances accessibility and ongoing security"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-phrase
  - security
liveWidget: ~
---

Inheritance seed backup is the practice of ensuring that someone else can recover your Bitcoin if you die or become permanently incapacitated, without compromising the security of your wallet while you're still alive.

Bitcoin has no customer service, no executor, no recovery mechanism. If your heirs don't know your [seed phrase](/glossary/seed-phrase) (or can't reconstruct your multisig setup), the BTC is permanently lost. The chain doesn't care about probate. Real fortunes have been buried this way.

The competing requirements:

- **Heirs must be able to access the funds eventually.** They need to know the seed exists, where it is, what to do with it.
- **Heirs must not access the funds prematurely.** If your nephew gets your seed phrase while you're still using the wallet, you've just given him your money.
- **Adversaries must not be able to coerce or trick heirs into giving access.** "Your aunt died, here's the protocol for claiming her BTC" is a phishing script waiting to happen.

Common approaches, from simple to sophisticated:

- **Sealed letter with a lawyer.** Document your wallet setup, list of [hardware devices](/glossary/hardware-wallet), and where the seed phrase backups are stored. Lawyer holds the envelope, opens it on death. Good for moderate amounts; relies on legal jurisdiction holding up.
- **Multisig with delayed access.** A 2-of-3 setup where you hold 2 keys and a trusted custodian holds 1, with a time-locked branch that lets the custodian + designated heir spend after a long delay (e.g., 6 months). You can override during the delay if you're alive; if you're not, the inheritance branch eventually unlocks.
- **Shamir's Secret Sharing.** Split the seed into N pieces such that any K of them can reconstruct it. Distribute pieces to family members or trustees. Useful but adds complexity.
- **Dedicated inheritance services.** Casa, Unchained, Nunchuk, Theya, and others offer collaborative-custody inheritance plans that integrate with their existing multisig products.

Whatever approach you choose, **test it**. Have your heir (or a stand-in) walk through the recovery procedure with a tiny test wallet. A plan you've never rehearsed is a plan you don't have. Update it whenever your custody setup changes.

See [Hierarchical Multisig](/glossary/hierarchical-multisig) for some of the more sophisticated approaches.
