---
title: "Liquid Federation"
slug: liquid-federation
draft: false
shortDefinition: "The group of functionaries managing the Liquid sidechain's pegged BTC via a multi-sig setup."
keyTakeaways:
  - "Federated multi-sig group securing the Liquid sidechain peg"
  - "Requires a threshold of signers to release pegged BTC"
  - "Provides quicker block times and confidential features, but not fully trustless"
sources: []
relatedTerms: []
liveWidget: ~
---

The **Liquid Federation** is the consortium of organizations that collectively operate the [Liquid Network](/glossary/liquid-network) sidechain. Each member runs a hardware-secured node ("functionary") that participates in block signing and the multi-sig that controls the [two-way peg](/glossary/peg) with Bitcoin's mainnet.

The structure as of 2026:

- **Roughly 65 federation members.** Major Bitcoin exchanges (Bitfinex, BTSE), Bitcoin-native firms (Blockstream itself, Bull Bitcoin), market makers, custodians, and trading firms.
- **Block signing rotates.** A subset of federation members signs each block on a rotating schedule. Blocks come every ~1 minute.
- **Peg-out approval requires a threshold.** Moving BTC from mainnet back to mainnet via peg-out requires signatures from 11-of-15 active block signers (the exact ratio has evolved).
- **Tamper-evident hardware.** Federation members run dedicated functionary hardware in geographically distributed, security-audited locations.

The trust assumption: a malicious majority of the federation could collude to steal pegged BTC, halt the sidechain, or censor transactions. Geographic and organizational diversity makes this hard but not impossible.

What this trust gets in exchange:

- **Fast settlement.** ~1-minute blocks vs Bitcoin's ~10-minute.
- **Confidential transactions.** Bitcoin's transparent chain can't hide amounts; Liquid's does.
- **Issued assets.** USDT, gold tokens, securities, etc. all use the federation's framework.
- **Real adoption.** Liquid carries meaningful institutional Bitcoin volume in 2026.

The Liquid Federation is the most well-funded, well-organized federated Bitcoin sidechain operation in existence. It's the practical answer to "what does a federated peg look like at scale?" If you accept the trust model, Liquid delivers on its promises. If you don't, you have to look elsewhere - mainnet, Lightning, or watch what [BIP-300 drivechains](/glossary/bip-300-drivechains) eventually become.

See [Liquid Network](/glossary/liquid-network) for the sidechain itself.
