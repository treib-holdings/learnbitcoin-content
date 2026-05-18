---
title: "Double-Blind Marketplace"
slug: double-blind-marketplace
draft: false
shortDefinition: "An online market where both buyer and seller have minimal identifying info about each other, often using Bitcoin-based escrow."
keyTakeaways:
  - "Protects buyer and seller identities in trades"
  - "Often uses multisig or LN escrows for trust minimization"
  - "Can be anonymity-friendly but poses regulatory challenges"
sources: []
relatedTerms:
  - decentralization
  - decentralized-exchange-dex
  - fungibility
  - security
  - silent-payments
  - stealth-address
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

A double-blind marketplace is one where neither buyer nor seller has personally identifying information about the other beyond what's strictly needed to complete the transaction. Bitcoin's pseudonymous nature, combined with [escrow](/glossary/escrow) primitives and [privacy networks](/glossary/tor-hidden-service) like Tor, makes this kind of marketplace technically practical.

The pattern that makes it work:

- **Identity layer:** participants connect only via pseudonymous handles (random usernames, public keys). No KYC, no real-name accounts.
- **Network layer:** transactions happen over Tor or I2P to hide IPs.
- **Settlement layer:** Bitcoin (and especially [Lightning](/glossary/lightning-network)) handles payment without requiring traditional financial-system identifiers.
- **Escrow layer:** [multisig](/glossary/escrowed-lightning-channel) or HTLC-based escrow holds funds during the trade. A trusted (but not custodial) third party can mediate disputes.

Real Bitcoin-native double-blind marketplaces in 2026:

- **Bisq** - peer-to-peer trading, on-chain multisig escrow, Tor-only. Mature, well-funded.
- **Robosats** - peer-to-peer trading via Lightning, Tor-only, fast settlement.
- **AgoraDesk** (formerly LocalBitcoins clone after that platform shut down) - peer-to-peer fiat-to-BTC exchanges.
- **Private chat-based markets** on Nostr, Tor forums, and similar venues. Less structured but real.

What double-blind marketplaces enable:

- **Privacy from chain analysts.** Transactions don't trivially link to identity.
- **Censorship resistance.** Hard to shut down a marketplace where no participant is identifiable.
- **Access for users without bank accounts.** No KYC requirements means no exclusion based on geography or status.

What they don't avoid:

- **Operator risk.** Even decentralized marketplaces have software, communication channels, and reputation systems that can be attacked or coerced.
- **Counterparty risk in the goods themselves.** A double-blind marketplace can't guarantee the goods are what they're claimed to be; that's still a per-transaction trust question.
- **Legal exposure.** Anonymity helps but isn't perfect, and regulators have increasing tools for chain analysis.

Double-blind marketplaces are a real-world example of what Bitcoin enables that fiat doesn't: commerce without permission, between strangers, with cryptographic dispute resolution. Used for legitimate trade (privacy, jurisdictional flexibility, fiat-rail avoidance) and sometimes for illicit activity. The tools are dual-use, like most privacy infrastructure.
