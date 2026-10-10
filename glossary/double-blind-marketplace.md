---
title: "Double-Blind Marketplace"
slug: double-blind-marketplace
draft: false
updated: "2026-10-10"
shortDefinition: "An online market where both buyer and seller have minimal identifying info about each other, often using Bitcoin-based escrow."
keyTakeaways:
  - "Protects buyer and seller identities in trades"
  - "Often uses multisig or LN escrows for trust minimization"
  - "Can be anonymity-friendly but poses regulatory challenges"
sources:
  - { label: "Bisq wiki - Frequently asked questions: 2-of-2 multisig escrow in the v1 protocol, all P2P traffic over Tor, no registration or KYC, mediation then arbitration for disputes", url: "https://bisq.wiki/Frequently_asked_questions" }
  - { label: "Bisq on GitHub - peer-to-peer networking and multi-signature escrow, non-custodial, with human arbitration", url: "https://github.com/bisq-network/bisq" }
  - { label: "Bisq on GitHub - releases (v1.10.9, October 1, 2026)", url: "https://github.com/bisq-network/bisq/releases" }
  - { label: "RoboSats on GitHub - Lightning hold invoices to minimize custody and trust, generated robot avatars, Tor onion address", url: "https://github.com/RoboSats/robosats" }
  - { label: "RoboSats on GitHub - releases (v0.8.7-alpha, September 9, 2026)", url: "https://github.com/RoboSats/robosats/releases" }
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

- **Identity layer:** participants connect only via pseudonymous handles (random usernames, generated avatars, public keys). No KYC, no real-name accounts.
- **Network layer:** traffic runs over Tor to hide IP addresses.
- **Settlement layer:** Bitcoin (and especially [Lightning](/glossary/lightning-network)) handles payment without requiring traditional financial-system identifiers.
- **Escrow layer:** [multisig](/glossary/escrowed-lightning-channel) or HTLC-based escrow holds funds during the trade. A trusted (but not custodial) third party can mediate disputes.

Two Bitcoin-native examples, both still putting out new releases as of October 2026:

- **Bisq** - peer-to-peer trading software. In its original protocol each trade's bitcoin sits in a 2-of-2 multisig escrow held by the two traders, all network traffic goes over Tor, and no registration or KYC is needed.
- **RoboSats** - peer-to-peer trading over Lightning, using hold invoices to keep custody to a minimum, and built to be used through Tor.

What double-blind marketplaces enable:

- **Privacy from chain analysts.** Transactions don't trivially link to identity.
- **Censorship resistance.** Hard to shut down a marketplace where no participant is identifiable.
- **Access for users without bank accounts.** No KYC requirements means no exclusion based on geography or status.

What they don't avoid:

- **Operator risk.** Even decentralized marketplaces have software, communication channels, and reputation systems that can be attacked or coerced.
- **Counterparty risk in the goods themselves.** A double-blind marketplace can't guarantee the goods are what they're claimed to be; that's still a per-transaction trust question.
- **Legal exposure.** Anonymity helps but isn't perfect, and regulators have increasing tools for chain analysis.

Double-blind marketplaces are a real-world example of what Bitcoin enables that fiat doesn't: commerce without permission, between strangers, with escrow enforced by cryptography. Used for legitimate trade (privacy, jurisdictional flexibility, fiat-rail avoidance) and sometimes for illicit activity. The tools are dual-use, like most privacy infrastructure.
