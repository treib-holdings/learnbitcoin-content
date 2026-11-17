---
title: "Double-Blind Marketplace"
slug: double-blind-marketplace
draft: false
updated: "2026-11-17"
shortDefinition: "An online market where both buyer and seller have minimal identifying info about each other, often using Bitcoin-based escrow."
keyTakeaways:
  - "Protects buyer and seller identities in trades"
  - "Often uses multisig or LN escrows for trust minimization"
  - "Can be anonymity-friendly but poses regulatory challenges"
sources:
  - { label: "FinCEN - FIN-2019-G001 (May 9, 2019), section 5.1: peer-to-peer trading platforms let buyers and sellers find each other; where the platform is only a forum, the two settle between their own wallets", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }
  - { label: "Bitcoin Wiki - Contract, example 2: escrow and dispute mediation: for a trade with somebody the buyer does not know or trust, buyer, merchant and mediator each provide a key to a 2-of-3 multisig, so a third party decides only if something goes wrong", url: "https://en.bitcoin.it/wiki/Contract" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: scams often start on social media or a dating app, or with an unexpected text, email or call; cryptocurrency payments typically are not reversible", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }
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

Peer-to-peer bitcoin trading is one case: platforms where a buyer and a seller find each other and settle the trade between themselves, with the coins in [escrow](/glossary/escrow) and a mediator to call on if it goes wrong. This site recommends none of them. You would be trading with someone you do not know, which is how many scams begin, and a bitcoin payment typically cannot be reversed: [If You Decide to Hold Some](/journey/using-bitcoin) shows the careful way to buy.

What double-blind marketplaces enable:

- **Privacy from chain analysts.** Transactions don't trivially link to identity.
- **Censorship resistance.** Hard to shut down a marketplace where no participant is identifiable.
- **Access for users without bank accounts.** No KYC requirements means no exclusion based on geography or status.

What they don't avoid:

- **Operator risk.** Even decentralized marketplaces have software, communication channels, and reputation systems that can be attacked or coerced.
- **Counterparty risk in the goods themselves.** A double-blind marketplace can't guarantee the goods are what they're claimed to be; that's still a per-transaction trust question.
- **Legal exposure.** Anonymity helps but isn't perfect, and regulators have increasing tools for chain analysis.

Double-blind marketplaces are a real-world example of what Bitcoin enables that fiat doesn't: commerce without permission, between strangers, with escrow enforced by cryptography. Used for legitimate trade (privacy, jurisdictional flexibility, fiat-rail avoidance) and sometimes for illicit activity. The tools are dual-use, like most privacy infrastructure.
