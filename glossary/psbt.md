---
title: "PSBT"
slug: psbt
draft: false
shortDefinition: "Acronym for Partially Signed Bitcoin Transaction (BIP 174), enabling multi-device or multi-signer workflows."
keyTakeaways:
  - "Streamlines multi-signature or offline signing processes"
  - "Safeguards private keys by limiting exposed data"
  - "Adopted widely by wallets, hardware devices, and advanced scripts"
sources: []
relatedTerms: []
liveWidget: ~
---

PSBT is the Partially Signed Bitcoin Transaction format, defined in [BIP 174](/glossary/bip-174-psbt) and extended in BIP 370 / 371. It's a serializable blob that captures everything needed for multiple parties or devices to cooperate on signing a Bitcoin transaction without ever sharing private keys.

For day-to-day Bitcoin users, PSBT is the plumbing that makes hardware wallets work. When you tap "send" in a hardware-wallet-paired app:

1. The app builds a PSBT with the unsigned transaction and all the metadata the device needs (input amounts, derivation paths, change-script types).
2. The app hands the PSBT to the hardware wallet via USB, QR code, microSD, or NFC.
3. The hardware wallet shows you the amount and destination on its trusted display, asks for confirmation, and signs.
4. The hardware wallet returns the signed PSBT.
5. The app finalizes the PSBT into a complete transaction and broadcasts it.

What makes PSBT load-bearing for sovereignty:

- **Air-gapped signing.** A PSBT can travel by QR code or SD card; the signing device never connects to a network.
- **Multisig coordination.** The PSBT moves between cosigners (each on their own hardware wallet, possibly in different cities) until enough signatures are present.
- **Software interoperability.** Sparrow, Specter, Nunchuk, BlueWallet, Bitcoin Core, and every modern hardware wallet speak PSBT. You can build a transaction in one tool and sign it in another.

A PSBT is binary by default but typically displayed as a base64-encoded string or rendered as a QR code. The format is verbose by design: it carries all the metadata signers need to verify amounts and destinations independently, so an offline device can confirm what it's signing without trusting the coordinator.

See [BIP 174](/glossary/bip-174-psbt) for the formal spec.
