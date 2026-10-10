---
title: "Peg-out"
slug: peg-out
draft: false
updated: "2026-10-10"
shortDefinition: "Returning tokens from a sidechain to mainnet BTC after federation or multi-sig checks the transaction's validity."
keyTakeaways:
  - "Sidechain tokens are redeemed for real BTC on mainnet"
  - "Federation multi-sig or functionaries confirm no double spends"
  - "Closes the loop on two-way pegging from sidechain to Bitcoin"
sources:
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs, one key per functionary)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Liquid docs - Technical Overview (peg-outs processed in batches, expected 11 to 35 minutes)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Rootstock docs - PowPeg (peg-out waits 4,000 Rootstock blocks before PowHSMs sign)", url: "https://dev.rootstock.io/concepts/foundations/powpeg/" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work, need 13,150 miner ACKs at most one per block", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: SPV proofs to move coins back to Bitcoin need a soft fork; federated peg as an interim option (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: range-proof cache bug created about 4,000 unbacked L-BTC; 3,996.02 BTC released through a normal peg-out; no key compromised; 3,400 BTC returned (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-guard
  - sidechain
liveWidget: ~
---

A **peg-out** is the operation of converting sidechain tokens back into mainnet BTC, completing the round trip that began with a [peg-in](/glossary/peg). It's the half of the [two-way peg](/glossary/peg) lifecycle that requires the most trust assumption, because someone has to authorize releasing the originally-locked BTC on mainnet.

The mechanics depend on the peg architecture:

- **[Federated peg](/glossary/liquid-network) (e.g., Liquid):** the user burns L-BTC on Liquid; the [federation](/glossary/liquid-federation) verifies the burn, and a threshold of its functionaries (11 of 15) signs a transaction releasing BTC from the federation's mainnet multisig. The critical trust assumptions are that the federation executes peg-outs honestly and that the software it runs rejects coins that should not exist.
- **Drivechain ([BIP-300](/glossary/bip-300-drivechains)):** withdrawal proposals are voted on by [miners](/glossary/miner) over a long period (~3 months). If enough miners approve, BTC is released. This shifts the trust to the mining majority.
- **SPV-validated peg:** the 2014 sidechains paper proposed that Bitcoin itself release the locked coins when shown an SPV proof that they were sent back on the sidechain. Bitcoin's script can't check such proofs without a soft fork, so the same paper suggested a federated peg in the meantime.

What can go wrong with peg-outs:

- **Federation refusal.** If a federation decides to censor a peg-out (sanctions compliance, dispute, malicious behavior), the user is stuck with sidechain tokens they can't redeem.
- **Federation compromise.** A hacked or coerced federation could approve a fake peg-out, draining the locked BTC.
- **Software bugs.** A bug in the sidechain's own validation can let someone create unbacked tokens that an honest federation then redeems. That happened on Liquid in September 2026: about 3,996 BTC left the peg with no keys compromised, 3,400 BTC was later returned, and peg-outs were still paused as of October 10, 2026 (see [Liquid Network](/glossary/liquid-network)).
- **Slow processing.** Drivechain-style peg-outs are intentionally slow (months). Federated peg-outs are faster: Liquid's documentation expects 11 to 35 minutes, while Rootstock waits for 4,000 of its own blocks before signing.
- **Sidechain failure.** If the sidechain itself fails (bug, shutdown, hostile takeover), peg-outs may become impossible.

For users moving real value via sidechains, the peg-out path is the key risk to evaluate. Once your BTC is pegged in, you're committed to whatever the peg-out mechanism actually delivers under stress.

See [Peg](/glossary/peg) for peg-in and broader context, [Peg-Guard](/glossary/peg-guard) for security mechanisms.
