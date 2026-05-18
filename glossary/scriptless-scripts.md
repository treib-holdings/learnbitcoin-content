---
title: "Scriptless Scripts"
slug: scriptless-scripts
draft: false
shortDefinition: "Off-chain contract logic leveraging Schnorr signatures to encode conditions without revealing them on-chain."
keyTakeaways:
  - "Keeps contract details off-chain to enhance privacy"
  - "Works with Schnorr's algebraic properties for signature-based logic"
  - "Reduces on-chain overhead compared to typical Bitcoin scripts"
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - op-code-operation-code
  - script
liveWidget: ~
---

"Scriptless scripts" is a research direction pioneered by Andrew Poelstra and others, where complex Bitcoin contract logic is encoded into the cryptographic structure of signatures themselves rather than into [Bitcoin Script](/glossary/bitcoin-script) opcodes. The on-chain footprint of the contract is just a standard signature; the contract conditions live in the math.

The technical mechanism relies on **[Schnorr signatures](/glossary/schnorr-signature)** and their linear properties. Two parties can structure their joint signing process so that completing the signature also implicitly satisfies a contract condition - like revealing a secret, proving a fact, or settling an oracle outcome. Once the signature is published on-chain, it's indistinguishable from any other Schnorr signature - but the off-chain participants know it encoded a specific contract execution.

Where scriptless scripts apply:

- **Discreet Log Contracts (DLCs).** Conditional payments where an oracle's signature on an outcome decides the winner. The on-chain transaction looks like an ordinary settlement; only the parties (and the oracle) know what was at stake.
- **[Lightning](/glossary/lightning-network) routing improvements.** Various Lightning protocols can move trust assumptions into the signature aggregation layer rather than into per-hop scripts.
- **Atomic swap variants.** Cross-chain swaps where the linking value is encoded in signature scalars rather than hash preimages.
- **Cross-chain Bitcoin Lightning / Liquid swaps** using identical signature-encoded conditions across both chains.

The benefits:

- **Privacy.** Observers can't tell the transaction is part of a complex contract; it looks normal.
- **Smaller on-chain footprint.** No script bytes for the contract logic.
- **No new opcodes needed.** Many scriptless-scripts patterns work on current Bitcoin if the parties use Schnorr/Taproot.

The catch: scriptless scripts require careful protocol design and are not trivial to implement. They're powerful but specialized. Real-world adoption has been limited but growing - particularly in DLCs and advanced Lightning workflows.

See [Schnorr Signature](/glossary/schnorr-signature) for the cryptography underneath and [Taproot](/glossary/taproot) for the Bitcoin upgrade that made this approach practical.
