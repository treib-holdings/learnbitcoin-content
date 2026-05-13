---
title: "Partially Signed Bitcoin Transaction (PSBT)"
slug: partially-signed-bitcoin-transaction-psbt
draft: false
shortDefinition: "A BIP 174 standard for collaboratively building/signing transactions across multiple devices or cosigners without exposing private keys."
keyTakeaways:
  - "Enables secure multi-step transaction signing workflows"
  - "Prevents direct exposure of private keys in collaborative setups"
  - "Central to modern hardware wallet and multi-sig best practices"
sources: []
relatedTerms:
  - bip-174-psbt
  - green-address
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - p2sh-pay-script-hash
  - partial-signature
  - quorum-signatures
  - schnorr-signature
liveWidget: ~
---

PSBT separates a transaction's creation from its signing. Wallets or hardware devices exchange a PSBT file containing inputs, outputs, and metadata (e.g., UTXO details) that each participant needs. Partial signatures get appended as cosigners add their approval, all while private keys remain safely on their respective hardware or software vaults. PSBT has become a key standard for hardware wallets, multi-sig coordinators, and advanced Bitcoin flows-ensuring that no single participant must reveal their private keys to the others or rely on a single insecure environment for signing.
