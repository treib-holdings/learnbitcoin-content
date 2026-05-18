---
title: "SPV (Simplified Payment Verification)"
slug: spv-simplified-payment-verification
draft: false
shortDefinition: "A lightweight client model verifying transactions using block headers and Merkle proofs instead of the full blockchain."
keyTakeaways:
  - "Stores only block headers, relying on Merkle proofs"
  - "Less resource-intensive than a full node, but more trust in peers"
  - "Privacy concerns arise unless advanced methods (e.g., Neutrino) are used"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - bitcoin-client
  - chain-analysis
  - eclipse-attack
  - full-validation
  - merkle-root
  - race-attack
  - replay-attack
liveWidget: ~
---

SPV - **S**implified **P**ayment **V**erification - is the lightweight client model described in section 8 of the [Bitcoin whitepaper](/glossary/whitepaper). It lets a wallet verify its own transactions without storing the full chain.

How it works:

1. The wallet downloads just the **80-byte [block headers](/glossary/block-header)** for every block from genesis to now. That's ~4 MB per year, totaling well under 100 MB after sixteen years.
2. The wallet validates the chain of headers by checking each one's [proof-of-work](/glossary/proof-work-pow) and that each links correctly to its predecessor.
3. For a specific transaction the wallet cares about, it asks a [full node](/glossary/full-node) for a [Merkle proof](/glossary/merkle-proof) - a short list of hashes proving the transaction is included in some block's [Merkle tree](/glossary/merkle-tree-merkle-root).
4. The wallet recomputes the Merkle root from the transaction and the proof, and checks it matches the root stored in that block's header.

If the proof checks out, the transaction is provably in the chain at the depth specified. The wallet has confirmed inclusion without downloading the rest of the block's data.

What SPV trades off:

- **You learn nothing about the rest of the block.** You can't verify that other transactions in the block obey consensus rules; you have to trust that the [miners](/glossary/miner) and full nodes you're talking to aren't lying about the chain's validity.
- **Privacy leakage.** Naive SPV asks "what's the proof for transaction X?" - which tells the queried node that you care about X. Better protocols ([BIP-157/158](/glossary/bip-158) compact block filters) let clients download filters and check for matches locally without revealing which addresses are theirs.
- **Eclipse-attack vulnerability.** If an attacker isolates your SPV client from honest peers, they can feed you a fork. A [full node](/glossary/full-node) is more resistant because it independently validates every rule.

Most lightweight mobile wallets use SPV-style logic, often combined with compact block filters for privacy. It's a reasonable tradeoff for everyday use. For high-value or high-stakes use, run a [full node](/glossary/full-node).
