---
title: "Lightning Network"
slug: lightning-network
draft: false
shortDefinition: "A layer-2 system on top of Bitcoin enabling fast, low-fee payments through off-chain channels, settling on-chain only when necessary."
keyTakeaways:
  - "Solves high on-chain fees and slow confirmations for everyday payments"
  - "Uses payment channels to batch transactions off-chain"
  - "Relies on a global network of LN nodes interconnected by routes"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - delayed-payment-channel
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - onion-routing-lightning
  - payment-channel
  - submarine-swap
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Lightning_Network"
liveWidget: ~
---

The Lightning Network is a payment layer built on top of Bitcoin. It enables instant, low-fee payments by routing them through a network of pre-funded payment channels, only settling on the base chain when channels open or close.

The mechanics, simplified:

1. **Open a [channel](/glossary/lightning-channel).** Two parties create a 2-of-2 multisig on-chain Bitcoin output, funded by one or both. This is a normal on-chain transaction, pays a normal fee.
2. **Transact off-chain.** The two parties exchange signed "balance updates" - cryptographically valid claims about the current allocation of channel funds. These updates are not broadcast; they live only between the two participants.
3. **Route through the network.** Most channels aren't between you and your final recipient directly. The Lightning Network is a mesh of channels; payments hop through intermediate nodes using [Hash Time-Locked Contracts (HTLCs)](/glossary/htlc-hashed-time-locked-contract) so that each hop is atomic - the whole payment succeeds, or none of it does.
4. **Close the channel.** Either party can close at any time by broadcasting the latest mutually-signed state on-chain. The funds get distributed according to that final state. Done.

What this buys you:

- **Speed.** Payments confirm in seconds, not minutes.
- **Cost.** Sub-cent fees are typical. You can actually use Bitcoin for small payments.
- **Privacy.** Lightning payments are *not* broadcast on the public chain. Only channel opens and closes appear; the payments in between are between the participants and the routing nodes.
- **Scalability.** Each channel supports unlimited transactions between its two parties without bloating the base chain.

Limitations are real:

- **Liquidity.** A channel can only route as much as it has on the relevant side. Inbound liquidity is a real concept and a real problem for new nodes.
- **Online requirement.** Nodes must be online to send, receive, and (importantly) watch for fraud attempts from a channel counterparty.
- **Operational complexity.** Running your own Lightning node requires more attention than just holding Bitcoin. Many users prefer custodial Lightning wallets - which, as with custodial on-chain wallets, trade self-custody for convenience.

Lightning is how Bitcoin scales without changing the base layer. The base layer optimizes for settlement security across decades; Lightning optimizes for instant payments. The two are complementary by design.

**A note on BOLT-12 offers.** The legacy invoice format is [BOLT-11](/glossary/bolt-11) - single-use, point-in-time payment requests. BOLT-12 ("offers") is the modern successor: reusable, supports recurring payments, smaller, more private. It was officially merged into the Lightning specification in September 2024. Adoption is implementation-dependent as of 2026: Core Lightning, LDK, and eclair/Phoenix support it natively; LND does not yet (workable via the LNDK shim). Services like Strike, Lightspark, and CoinOS have shipped support; most everyday wallets still default to BOLT-11. Expect that to shift over the next few years.

See [Lightning Channel](/glossary/lightning-channel) for the building block, and [Journey: Using Bitcoin](/journey/using-bitcoin) for the practical user view.
