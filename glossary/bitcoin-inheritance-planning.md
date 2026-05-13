---
title: "Bitcoin Inheritance Planning"
slug: bitcoin-inheritance-planning
draft: false
shortDefinition: "Strategies ensuring heirs can access your BTC in the event of your death, often involving multisig, trusted executors, or time-lock scripts."
keyTakeaways:
  - "Prevents BTC from becoming inaccessible upon death"
  - "Combines technical solutions (multisig, time-lock) and legal measures"
  - "Requires careful balance of security and usability"
sources: []
relatedTerms:
  - decentralization
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - paper-wallet
  - seed-phrase
liveWidget: ~
---

Bitcoin inheritance planning is the practice of ensuring your heirs can access your BTC if you die or become permanently incapacitated, without giving them premature access while you're alive.

Bitcoin has no probate court, no executor with administrative override, no bank to subpoena. If your heirs don't have a workable path to your [private keys](/glossary/private-key) (or your [seed phrase](/glossary/seed-phrase), or your multisig setup), the BTC is permanently lost. Many real fortunes have been buried this way - the chain doesn't care about your death certificate.

The competing requirements:

1. **Heirs must eventually be able to access the funds.** They need to know the wallet exists, where the materials are stored, and what to do.
2. **Heirs must not access the funds prematurely.** Giving an heir the seed phrase while you're using the wallet means you've given them your money.
3. **Adversaries must not be able to coerce or trick heirs into giving access.** "Your father died, here's how to claim his BTC" is a phishing-script template waiting to be exploited.

Common approaches:

- **Sealed letter with a lawyer.** Document your wallet setup, hardware-device locations, and seed-phrase storage. Lawyer holds the envelope, opens upon death notification. Good for moderate amounts; depends on legal jurisdiction.
- **Multisig with delayed access.** A 2-of-3 setup where you hold 2 keys and a designated heir (or trustee) holds 1, with a time-locked branch letting the heir + trustee spend after a long delay (e.g., 6 months of inactivity). You can override during the delay if you're alive; you can't if you're not.
- **Shamir's Secret Sharing.** Split the seed into N pieces, K-of-N required to reconstruct. Distribute to trustees. Useful but adds complexity.
- **Dedicated services** like Casa, Unchained, Theya, Nunchuk, AnchorWatch - collaborative-custody inheritance plans that integrate with their multisig products.

Testing matters enormously. **Have your heir (or a stand-in) walk through the recovery procedure** with a tiny test wallet. Update the plan whenever your custody setup changes. A plan you've never rehearsed is a plan you don't have.

See [Inheritance Seed Backup](/glossary/inheritance-seed-backup) for backup mechanics and [Hierarchical Multisig](/glossary/hierarchical-multisig) for the multisig patterns underlying most modern plans.
