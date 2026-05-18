---
title: "Silent Payments"
slug: silent-payments
draft: false
shortDefinition: "Chris Belcher's proposed enhancement of BIP 47 Payment Codes, letting senders create unique addresses on behalf of the receiver without address reuse."
keyTakeaways:
  - "Generates new addresses for each payment without an explicit handshake"
  - "Hides payment code usage from chain observers"
  - "Proposed by Chris Belcher, refining the BIP 47 model"
sources: []
relatedTerms:
  - address
  - address-derivation-path
  - address-reuse
  - fungibility
  - stealth-address
liveWidget: ~
---

Silent Payments is a privacy mechanism specified in [BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) that lets a receiver publish one reusable "silent payment address" without sacrificing the privacy benefit of fresh addresses per transaction.

The mechanism, simplified:

1. The receiver publishes a single long-term silent-payment public key (encoded as an `sp1...` address).
2. A sender constructs a payment by combining their own private key with the receiver's silent-payment key (an ECDH-style operation), deriving a unique on-chain destination per payment.
3. The receiver scans the chain for outputs matching the derivation pattern, and finds their payments.

What this buys, compared to the alternatives:

- **No address reuse on-chain.** Each payment lands at a unique [Taproot](/glossary/taproot) output. Chain observers see normal-looking single-use addresses.
- **No notification transaction.** Older payment-code systems like [BIP-47](/glossary/bip-47-payment-codes) required a separate on-chain "notification" that publicly outed the user as using payment codes. Silent Payments has no such handshake; the sender's derivation is invisible.
- **No protocol change required.** Silent Payments uses existing Bitcoin script primitives. It's a wallet-layer protocol, not a soft fork.

The tradeoff is receiver-side scanning cost. To find payments, the receiver's wallet must check every Taproot transaction on the chain against their silent-payment key. This is workable on a full node or a beefy server, less ideal on a light wallet.

BIP-352 was formally adopted in 2023. As of 2026, several wallets and node implementations ship Silent Payments support; broader adoption is in progress. It's the most credible practical "stealth address" mechanism on Bitcoin today.

See [Stealth Address](/glossary/stealth-address) for the historical context, and [Address Reuse](/glossary/address-reuse) for the problem this solves.
