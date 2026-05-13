---
title: "Partial Signature"
slug: partial-signature
draft: false
shortDefinition: "In multisig or PSBT workflows, a single participant’s signature, awaiting more signatures to finalize spending."
keyTakeaways:
  - "Represents one cosigner’s authorization in a multisig transaction"
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

Multisig transactions require multiple signers. Each cosigner provides a partial signature reflecting their share of the script policy (e.g., 2-of-3). In a PSBT process, participants can sign in sequence, merging partial signatures into the transaction until enough signatures exist to meet the threshold. Partial signatures ensure no single party can spend the funds alone. Once the required number is reached, the transaction becomes valid and can be broadcast. This workflow underpins collaborative spending, from corporate vaults to personal 2FA setups.
