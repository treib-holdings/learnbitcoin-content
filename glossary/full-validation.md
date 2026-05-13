---
title: "Full Validation"
slug: full-validation
draft: false
shortDefinition: "When a node verifies every single block and transaction under Bitcoin's consensus rules, ensuring complete data integrity."
keyTakeaways:
  - "Provides the highest level of security and trustlessness"
  - "Checks every consensus rule from genesis block onward"
  - "Requires more computational resources but enhances network resilience"
sources: []
relatedTerms:
  - corrupted-chain-state
  - double-spend
  - full-node
  - node
  - node-synchronization
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

Full validation is what a Bitcoin [full node](/glossary/full-node) does on every block: independently verify, against every consensus rule, that the block and all its transactions are correct. No shortcuts, no trust in other nodes, no "this looks right."

What gets validated:

- **Block structure.** Header format, timestamp constraints, version number, target/difficulty.
- **[Proof-of-work](/glossary/proof-work-pow).** The block header hashes to a value below the current target.
- **Merkle root commitment.** The header's Merkle root actually corresponds to the transactions in the block.
- **Every transaction.** Inputs reference valid [UTXOs](/glossary/utxo-unspent-transaction-output) that haven't been spent. Signatures verify against the locking scripts. Output values don't exceed input values (no inflation bug). [Block subsidy](/glossary/block-subsidy) doesn't exceed the protocol-defined amount for that height.
- **Script execution.** Every spending script executes to true under Bitcoin's scripting rules.
- **Soft-fork rules.** [SegWit](/glossary/segwit-segregated-witness-bip-141), [Taproot](/glossary/taproot), [CLTV](/glossary/bip-65-opchecklocktimeverify), [CSV](/glossary/checksequenceverify-csv), and others all enforced.

Why this matters more than it sounds:

- **You learn the chain's true state from first principles.** You don't have to trust your network peers, exchanges, block explorers, or chainanalysis firms. The chain says what it says; your node tells you.
- **You enforce the consensus rules.** If a miner ever tried to produce a block with too much subsidy, an invalid signature, or any other rule violation, your node would reject it. Multiplied by tens of thousands of full nodes, this is what makes the rules *real* rather than just suggestions.
- **No 51% attack can compromise your view.** Even if every miner colluded to produce invalid blocks, your full node would reject them. Hash rate alone isn't enough to fool a full validator.

The contrast is [SPV](/glossary/spv-simplified-payment-verification), which checks proof-of-work in block headers and trusts inclusion proofs but doesn't fully validate the contents. SPV is fine for a phone wallet. Full validation is the security model that defines Bitcoin's defense against bad actors. See [Full Node](/glossary/full-node) for what running this costs in practice.
