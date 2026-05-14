---
title: "Fraud Proof"
slug: fraud-proof
draft: false
shortDefinition: "A cryptographic proof in layer-2 or sidechain systems indicating a block/transaction is invalid, letting honest nodes reject it."
keyTakeaways:
  - "Prevents invalid states in layer-2 or sidechain designs"
  - "Requires watchers to detect and prove fraudulent data"
  - "Protects users without each having to validate every detail"
sources: []
relatedTerms:
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - merkle-inclusion-proof
  - merkle-proof
  - penalty-transaction
  - spv-simplified-payment-verification
liveWidget: ~
---

A fraud proof is a compact cryptographic demonstration that a specific transaction or block violates a chain's consensus rules. The receiver of the proof can independently verify the violation without needing to download or validate everything else.

The use cases:

- **SPV / light clients.** A full node could send a fraud proof to a light client showing "this block your trusted peer told you about contains an invalid transaction, here's the proof." The client gets full-validation-level security without running a full node. This was a key motivation in early SPV design but never fully shipped for Bitcoin's mainline P2P.
- **Optimistic rollups (mostly other chains).** Rollups assume layer-2 state transitions are valid by default; anyone can challenge with a fraud proof during a contestation window. If no proof appears, the state is finalized. Used heavily on Ethereum L2s (Optimism, Arbitrum); proposed but not yet deployed for Bitcoin layer-2 designs.
- **Drivechain proposals (BIP 300/301).** Sidechain withdrawals could be challenged via fraud proofs during the multi-month withdrawal period.
- **BitVM and related Bitcoin-side-chain experiments.** Bridge constructions where one party posts a claim and the counterparty has time to disprove it with a fraud proof.

The pattern is always the same: an optimistic assumption ("the state is valid"), a challenge window, and a mechanism for any honest party to disprove a false claim. The trust assumption shifts from "every participant verifies everything" to "at least one honest participant is willing to challenge." That's a much weaker assumption to satisfy, which is what makes fraud-proof designs attractive for scaling.

The downside: someone has to actually be watching and willing to spend the resources to challenge. If the contestation window passes without a challenge, the false state finalizes. Reliable fraud-proof systems need either economic incentives for watchers or trusted committees willing to monitor.
