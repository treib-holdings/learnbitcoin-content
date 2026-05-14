---
title: "Partial Signature"
slug: partial-signature
draft: false
shortDefinition: "In multisig or PSBT workflows, a single participant's signature, awaiting more signatures to finalize spending."
keyTakeaways:
  - "Represents one cosigner's authorization in a multisig transaction"
  - "Many partial signatures combine to meet the M-of-N threshold"
  - "Employed in distributed/PSBT setups for secure multi-party approvals"
sources: []
relatedTerms:
  - bip-174-psbt
  - hierarchical-multisig
  - m-n
  - musig
  - musig2
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
liveWidget: ~
---

A partial signature is one cosigner's contribution to a multi-party signed transaction. It isn't a complete signature on its own; the transaction is only valid once enough partial signatures combine to meet the script's threshold.

There are two flavors in modern Bitcoin:

- Classical multisig. Each cosigner produces a full ECDSA or Schnorr signature against the same sighash. The script combines M of them on-chain (e.g., 2-of-3 P2WSH or a Taproot script-path leaf). Partial signatures are tracked through the [PSBT](/glossary/partially-signed-bitcoin-transaction-psbt) workflow: each signer adds their signature to the PSBT and passes it on until the threshold is met, then anyone finalizes the transaction.

- Aggregated signatures (MuSig2, FROST). Each cosigner produces a partial signature that's a fragment of a single Schnorr signature. None of them is a valid signature on its own; the protocol combines them into one signature, and one signature is what ends up on-chain. To outside observers it's indistinguishable from single-sig.

The first kind has been Bitcoin standard since P2SH multisig in 2012 and is what most hardware-wallet multisig flows use today. The second is newer (post-Taproot, 2021+) and underpins modern Lightning channels and emerging vault designs where privacy and on-chain footprint matter.
