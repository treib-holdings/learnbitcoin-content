---
title: "Lightning Network"
slug: lightning-network
draft: false
updated: "2026-11-17"
shortDefinition: "A layer-2 system on top of Bitcoin enabling fast, low-fee payments through off-chain channels, settling on-chain only when necessary."
keyTakeaways:
  - "Solves high on-chain fees and slow confirmations for everyday payments"
  - "Uses payment channels to batch transactions off-chain"
  - "Relies on a global network of LN nodes interconnected by routes"
sources:
  - { label: "BOLT #12 - Negotiation Protocol for Lightning Payments (offers)", url: "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md" }
  - { label: "BOLTs PR #798 - Offers (merged September 2024)", url: "https://github.com/lightning/bolts/pull/798" }
  - { label: "Bitcoin Optech - Offers (topic page and implementation history)", url: "https://bitcoinops.org/en/topics/offers/" }
  - { label: "LND 0.22.0 release notes (in development) - first BOLT 12 code", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.22.0.md" }
  - { label: "LNDK - standalone daemon that adds BOLT 12 offers to LND (experimental)", url: "https://github.com/lndk-org/lndk" }
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 14, 2016): the design is conditional on a signature change that addresses malleability", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "BIP 141 - Segregated Witness: fixes transaction malleability, which lets chains of unconfirmed transactions be built without trust, as the Lightning Network needs", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BOLT 0 - Lightning is a protocol for making fast payments with Bitcoin using a network of channels", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "BOLT 2 - a mutual close, unlike a unilateral one, gives both nodes their funds immediately and can cost less in fees; to_self_delay is how long a node waits for its own funds after closing alone", url: "https://github.com/lightning/bolts/blob/master/02-peer-protocol.md" }
  - { label: "BOLT 5 - a node that publishes its own commitment transaction has to wait to claim its funds; if a node publishes an outdated one, the other node can claim all the funds in the channel", url: "https://github.com/lightning/bolts/blob/master/05-onchain.md" }
  - { label: "LND - sample-lnd.conf: the delay it asks of a channel partner by default runs from 144 to 2,016 blocks, scaled to the size of the channel", url: "https://github.com/lightningnetwork/lnd/blob/master/sample-lnd.conf" }
  - { label: "LND documentation - watchtowers: a second line of defense when a node is offline or unable to respond at the time of a breach", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/watchtower.md" }
  - { label: "LND documentation - recovery: getting funds back takes the 24-word seed and the channel backup file as well", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md" }
  - { label: "bLIP 52 (LSPS2) - a channel opened in response to an incoming payment lets a wallet with no channels start receiving, with the cost of the inbound liquidity deducted from the first payment received", url: "https://github.com/lightning/blips/blob/master/blip-0052.md" }
  - { label: "mempool.space API - Lightning network statistics: in its latest record, dated July 13, 2026, the median channel fee rate was 100 parts per million and the median base fee 100 millisatoshis, a tenth of a satoshi (read November 16, 2026; the record this address serves changed during that day)", url: "https://mempool.space/api/v1/lightning/statistics/latest" }
  - { label: "Lightning specification - extension BOLT, Simple Taproot Channels (merged May 4, 2026): the funding output becomes a taproot output with a MuSig2 key", url: "https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md" }
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
  - micropayment
  - off-chain
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

1. **Open a [channel](/glossary/lightning-channel).** Two parties lock coins in an on-chain Bitcoin output that needs both their signatures (a 2-of-2 multisig in a standard channel, one combined key in a Taproot channel), funded by one or both. This is a normal on-chain transaction, pays a normal fee.
2. **Transact [off-chain](/glossary/off-chain).** The two parties exchange signed "balance updates" - cryptographically valid claims about the current allocation of channel funds. These updates are not broadcast; they live only between the two participants.
3. **Route through the network.** Most channels aren't between you and your final recipient directly. The Lightning Network is a mesh of channels; payments hop through intermediate nodes using [Hash Time-Locked Contracts (HTLCs)](/glossary/htlc-hashed-time-locked-contract) so that each hop is atomic - the whole payment succeeds, or none of it does.
4. **Close the channel.** The normal close is one both parties sign, and it pays each side at once. Either party can also close alone at any time by broadcasting the latest signed state. That usually costs more in on-chain fees and locks the closer's own share for a delay agreed when the channel opened: from 144 blocks, about a day, to 2,016, about two weeks, in the defaults of LND, one common implementation. An older state can be broadcast too. The other side can then claim the whole channel, but only if it, or a watchtower acting for it, is watching in time.

What this buys you:

- **Speed.** A payment does not wait for a block. The specification calls Lightning a protocol for "fast payments", and the paper that proposed it has "Instant Payments" in its title.
- **Cost.** Routing fees are small: by mempool.space's network statistics for mid-2026, the median fee rate among channels was 100 parts per million of the amount, a hundredth of one percent, and the median fixed fee a tenth of a satoshi. Wallets and service providers can charge on top of that. You can actually use Bitcoin for [micropayments](/glossary/micropayment).
- **Privacy.** Lightning payments are *not* broadcast on the public chain. Only channel opens and closes appear; the payments in between are between the participants and the routing nodes.
- **Scalability.** Each channel supports unlimited transactions between its two parties without bloating the base chain.

Limitations are real:

- **Liquidity.** A channel can only route as much as it has on the relevant side. Inbound liquidity is a real concept and a real problem for new nodes. A new wallet has none: its first incoming payment needs a channel opened to it, and a service that opens one takes the cost out of that payment. It does not ask you to send money first.
- **Online requirement.** Nodes must be online to send, receive, and (importantly) watch for fraud attempts from a channel counterparty.
- **Operational complexity.** Running your own Lightning node requires more attention than just holding Bitcoin. The seed words alone may not bring channel money back: LND needs its channel backup file as well. Custodial Lightning wallets take the work away and, as with custodial on-chain wallets, trade self-custody for convenience.

Lightning is how Bitcoin scales without putting every payment on the base layer. It needed one change there first: the paper that proposed Lightning made the design conditional on a fix for transaction malleability, which SegWit supplied. The base layer optimizes for settlement security across decades; Lightning optimizes for instant payments. The two are complementary by design.

**A note on BOLT-12 offers.** The legacy invoice format is [BOLT-11](/glossary/bolt-11) - single-use, point-in-time payment requests. BOLT-12 ("offers") is the modern successor. An offer is reusable, because each payer's wallet uses it to request a fresh invoice over Lightning, and blinded paths let the recipient keep its node hidden. It was merged into the Lightning specification in September 2024, without the built-in recurring payments of earlier drafts.

As of November 2026 Core Lightning, eclair and LDK support offers natively. LND's released versions do not, though work has started in its development branch, and the separate LNDK project, still experimental, adds offers to an LND node.

See [Lightning Channel](/glossary/lightning-channel) for the building block, and [Lightning routing](/rabbit-hole/lightning-routing) for how a payment finds its way.
