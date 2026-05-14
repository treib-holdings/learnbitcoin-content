---
title: "BIP 170 (TxOut Proof)"
slug: bip-170-txout-proof
draft: false
shortDefinition: "Proposed a standard for proving a transaction's inclusion in a block via merkle proofs, aiding SPV validation."
keyTakeaways:
  - "Formalizes merkle proofs for transaction inclusion"
  - "Aids lightweight verification of specific UTXOs"
  - "Hasn't become a universal practice but remains useful"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

BIP 170, drafted by Mark Friedenbach in 2013, proposed a standardized merkle proof format demonstrating that a specific transaction output exists in a particular block. Conceptually similar to BIP 37's merkleblock messages but as a standalone data structure rather than a P2P protocol message.

It never activated as a network-level standard. The functionality survived in a different form: Bitcoin Core implements the proofs as RPC commands. `gettxoutproof` produces a proof for one or more transactions, and `verifytxoutproof` validates one. Wallets and explorers use these RPCs for SPV-style verification against a trusted full node.

For modern light-client work, the dominant pattern isn't TxOut proofs sent peer-to-peer; it's [BIP 158](/glossary/bip-158) compact block filters. Filters let a client decide locally what to fetch without telling any peer what addresses it cares about. The privacy story is dramatically better than asking peers for proofs.

BIP 170 is mostly interesting now as another point in the evolution from "early SPV ideas" to "modern compact block filter design."

Spec: [BIP-170](https://github.com/bitcoin/bips/blob/master/bip-0170.mediawiki).
