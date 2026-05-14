---
title: "Hardware Wallet"
slug: hardware-wallet
draft: false
shortDefinition: "A physical device (e.g., Ledger, Trezor) storing private keys offline, signing transactions in a secure environment."
keyTakeaways:
  - "Offline key storage prevents software-based theft"
  - "User verifies transaction details on a secure screen"
  - "A middle ground between pure paper wallets and online wallets"
sources: []
relatedTerms:
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - security
  - wallet
liveWidget: ~
---

A hardware wallet is a small, dedicated device whose only job is to store [private keys](/glossary/private-key) and sign [transactions](/glossary/transaction). The keys are generated inside the device and never leave it. When you want to spend, the unsigned transaction is sent in, you verify the destination and amount on the device's built-in screen, you confirm, and a signed transaction comes back out. Your laptop never sees the key.

The threat model this defends against: a fully compromised PC. If your computer is running malware that watches every keystroke and reads every file, a hot wallet's keys are toast - the attacker can just sign transactions to themselves at will. With a hardware wallet, the malware can show you a fake "Send to your friend" screen on the PC, but when the actual transaction goes to the hardware device, the device shows you the *real* destination address and amount on its trusted screen. You see the malware's substituted address, you reject the transaction, you're safe.

What to look for when picking one:

- **Open-source firmware.** Closed-source signing devices ask you to trust the manufacturer's word that the device does what it claims. Open firmware lets the broader community audit the code that runs on the chip. Several mature open-source signing devices are widely available; the Bitcoin community generally recommends these over closed-source alternatives.
- **Bitcoin-only firmware, if offered.** Multicoin firmware adds attack surface for support you'll never use. A simpler codebase is an easier-to-audit codebase.
- **An air-gapped workflow, ideally.** Devices that sign via QR code or microSD card never connect to a computer at all - even via USB - which closes off another category of attacks.
- **Active development and a credible security history.** Hardware-wallet vulnerabilities are routinely discovered and patched; you want a vendor that ships fixes promptly and publicly.

Recommendations rot fast. Rather than name specific products here, search "open-source bitcoin hardware wallet" or check what experienced self-custody-focused Bitcoiners are currently endorsing.

A hardware wallet is not magic. The [seed phrase](/glossary/seed-phrase) it generates is still the master backup; if someone gets that phrase, they don't need the device. The device's job is to keep the keys offline during day-to-day use, not to replace good phrase hygiene.

For amounts above casual-spending size, a hardware wallet is the floor. Multisig with multiple hardware devices is the next level up. See [Journey: Be Your Own Bank](/journey/be-your-own-bank) for the walkthrough.
