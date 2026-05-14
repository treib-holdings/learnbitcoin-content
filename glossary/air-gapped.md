---
title: "Air-gapped"
slug: air-gapped
draft: false
shortDefinition: "Refers to a device completely isolated from any network, used for securely generating or storing private keys offline."
keyTakeaways:
  - "Prevents remote network attacks on private keys"
  - "Requires offline devices or computers"
  - "Used by individuals and organizations valuing maximum security"
sources: []
relatedTerms:
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - paper-wallet
  - security
liveWidget: ~
---

"Air-gapped" describes a device that has no network connection of any kind: no Wi-Fi, no Ethernet, no Bluetooth, no cellular, no NFC. The only way data crosses to or from the device is through a deliberate, physical, single-use channel: a QR code shown on the screen, a microSD card carried over, or in extreme cases manual entry.

For Bitcoin self-custody, air-gap is a security strategy: the device that holds private keys never sees the public internet, so remote attackers have no network path to the seed.

What an air-gapped setup looks like in practice:

- **Hardware wallets done right.** Coldcard, Foundation Passport, SeedSigner, and similar devices are designed for air-gap operation. Transactions are passed in as PSBTs via SD card or QR; signed PSBTs come back the same way. The signing device never touches the network.
- **Old laptop, network hardware removed.** A dedicated machine with the Wi-Fi card physically removed (or never installed), running an offline signing tool. Common for advanced multisig setups.
- **Faraday-shielded signing rooms.** Institutional cold-storage operations sometimes do signing inside a room shielded against radio emissions, defeating both network attacks and side-channel attacks like keystroke-EM monitoring.

What air-gap doesn't protect against:

- **Supply-chain attacks.** A compromised device that arrives already malicious can leak the seed via subtle side channels (timing, micro-modulated screen output, etc.). Buy hardware wallets from the manufacturer directly when possible.
- **Physical theft and coercion.** Air-gap is a network defense, not a physical one. Pair it with appropriate physical security.
- **PSBT tampering.** The signing device must independently verify that the transaction it's signing matches what the user intended. A compromised online machine could send a malicious PSBT to the air-gapped device; if the device's display doesn't show the actual destination, the user signs the attack. This is why hardware wallets have screens.

For most users, a single hardware wallet (which is air-gapped by design for the key material) is the practical answer. Dedicated air-gapped computers with PSBT shuffling are for higher-value or institutional setups where the marginal security justifies the operational overhead.
