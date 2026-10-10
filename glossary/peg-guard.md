---
title: "Peg-Guard"
slug: peg-guard
draft: false
updated: "2026-10-10"
shortDefinition: "A security measure in sidechain peg systems preventing exploit or double-spend of pegged BTC, often requiring federation consent."
keyTakeaways:
  - "Prevents pegged BTC from being withdrawn illegitimately"
  - "Federation or multi-sig typically verifies legitimate peg-outs"
  - "Crucial to sidechain security where two-way pegs are used"
sources:
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (the HSM signs a peg-out only if outputs go back to the federation or to a whitelisted address)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Liquid docs - Technical Overview (peg-outs only to addresses under a Peg-out Authorization Key; the PAK list takes three days to update)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: no separate reserve check at peg-out time; charter says keep the peg-out receiving wallet offline; range-proof cache bug created about 4,000 unbacked L-BTC; 3,996.02 BTC released; SideSwap kept its key online and forwarded payouts automatically; 3,400 BTC returned (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "SideSwap - Statement on the Liquid Network incident of 6 September 2026: peg-out key kept online, payouts automatic (September 9, 2026)", url: "https://sideswap.io/news/statement-on-the-liquid-network-incident-of-6-september-2026/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: slow, auditable withdrawals that need 13,150 miner ACKs, at most one per block", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-out
  - sidechain
liveWidget: ~
---

A **peg-guard** is a security mechanism in a [sidechain](/glossary/sidechain) peg system designed to prevent fraudulent withdrawals - especially the catastrophic failure mode where a bug or attack lets someone "print" pegged BTC out of thin air, creating sidechain tokens that aren't backed by actual mainnet BTC reserves.

What a peg-guard needs to protect against:

- **Sidechain consensus bugs.** A bug that lets invalid blocks pass could create sidechain tokens that shouldn't exist. If those tokens then get peg-out approval, real BTC drains from the locked reserve.
- **Inflation in sidechain code.** Software bugs that issue more sidechain tokens than were locked via peg-ins.
- **Collusion among peg operators.** Federation members signing peg-outs not backed by valid peg-ins.

Common peg-guard implementations:

- **Multi-signature thresholds on peg-out.** Requiring 11 of 15 functionary signatures means a single rogue operator can't drain funds. Used by [Liquid](/glossary/liquid-network).
- **Independent validation.** Each signer checks the sidechain state and the peg-out request before signing. This catches a bad peg-out only if the checking software itself is sound. If every signer runs the same flawed code, they can all accept the bad coins.
- **Audit reserves.** Some sidechains publish proof-of-reserves regularly so users can verify the peg backing matches the issued tokens. Liquid's peg wallet is public, and mempool's Liquid explorer shows its BTC next to the L-BTC in circulation.
- **Slow withdrawal windows** (drivechain style). Long delays before peg-outs finalize give time to detect anomalies.

In Liquid specifically, the "peg-guard" framing isn't formally branded, but several layers do the job. Each functionary's hardware module signs a peg-out only if the coins go back to the federation or to an address registered under a member's peg-out authorization key (PAK), and changes to the PAK list take three days. The federation's charter tells members to keep the wallet that receives their peg-out BTC offline, so a payout against bad coins can still be caught before it moves on. There is no separate check that the reserve still matches the L-BTC in circulation; the functionaries rely on the sidechain's own validation. In September 2026 that validation failed: a bug let an attacker create about 4,000 unbacked L-BTC, the functionaries signed a peg-out of about 3,996 BTC, and the member whose service processed it had kept its peg-out key online and forwarded the BTC automatically. The attacker later returned 3,400 BTC (see [Liquid Network](/glossary/liquid-network)).

For users, the peg-guard isn't directly visible but is part of what makes a sidechain peg trustworthy enough to use at scale. A sidechain with a strong peg-guard is one where consensus bugs don't immediately drain the BTC reserve.
