---
title: "Peg-in"
slug: peg
draft: false
shortDefinition: "Locking BTC on the main chain to receive pegged tokens on a sidechain (e.g., Liquid's L-BTC)."
keyTakeaways:
  - "Transfers BTC from mainnet to a sidechain address"
  - "Federation or functionaries validate the lock, issue pegged assets"
  - "Enables sidechain features like faster blocks or privacy"
sources: []
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - liquid-network
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
---

A **peg** in the Bitcoin context is the mechanism that ties units on a [sidechain](/glossary/sidechain) (or other separate system) to BTC on mainnet at a fixed 1:1 ratio. Pegging is the process of moving BTC across that mechanism.

The two operations:

- **Peg-in:** lock BTC on mainnet, receive equivalent sidechain tokens. The mainnet BTC is locked in a multisig or script controlled by the sidechain's peg infrastructure.
- **[Peg-out](/glossary/peg-out):** burn or move sidechain tokens, receive equivalent BTC on mainnet from the peg's locked reserve.

The result: sidechain tokens are economically indistinguishable from BTC (1 L-BTC = 1 BTC), but they live on a separate chain with different properties.

Peg architectures vary by trust model:

- **Federated peg** (most common, used by [Liquid](/glossary/liquid-network)). A consortium of trusted operators controls the locked BTC via multisig. Peg-in is permissionless (anyone can lock BTC); peg-out requires a federation threshold to sign.
- **Drivechain peg** (proposed, [BIP-300](/glossary/bip-300-drivechains)). Bitcoin miners vote on peg-out withdrawals over a long period. Not yet active.
- **SPV peg.** Sidechain validators check mainnet SPV proofs to verify peg operations. Used in some research designs; not in widespread production.
- **One-way peg** ([proof-of-burn](/glossary/one-way-peg)). BTC moves to the sidechain via verifiable destruction; there's no return path.
- **Trustless peg via covenants.** Future option if covenants like [CTV](/glossary/checktemplateverify-ctv) activate; would enable more trustless peg constructions.

The peg mechanism is the trust hotspot for any sidechain. A federated peg is only as good as the federation's honesty and operational security. A drivechain peg is only as good as miner alignment. Different users will value different trade-offs.

See [Peg-out](/glossary/peg-out), [Peg-Guard](/glossary/peg-guard), [Sidechain](/glossary/sidechain), and [Liquid Network](/glossary/liquid-network) for related concepts.
