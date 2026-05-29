---
title: "Lightning Node Alias"
slug: lightning-node-alias
draft: false
shortDefinition: "A nickname a Lightning node broadcasts in the gossip protocol, not a trusted identity but a user-friendly label."
keyTakeaways:
  - "Adds a friendly label for LN nodes but can be spoofed"
  - "Helps human users differentiate nodes in gossip data"
  - "Public key remains the true unique identifier for LN routes"
sources: []
relatedTerms:
  - bolt
  - gossip-protocol-lightning
  - lightning-node
  - node-operator
liveWidget: ~
---

A Lightning node alias is a human-readable nickname a [Lightning node](/glossary/lightning-node) advertises via the [gossip protocol](/glossary/gossip-protocol-lightning) as part of its `node_announcement` message. It's a label, not an identity.

Examples: "ACINQ", "WalletOfSatoshi.com", "Bitfinex", "Satoshi's Coffee Shop", "🌩️ Lightning Bot 🌩️". Aliases are whatever the operator chooses, plus a 24-bit color value for UI rendering.

The important caveat: **aliases are not authenticated**. Anyone can advertise any alias. Multiple nodes can claim the same alias. Aliases can be impersonations of well-known nodes. The cryptographic identity of a Lightning node is its **public key** (33-byte secp256k1 pubkey); the alias is just a UX convenience.

What aliases are good for:

- **Lightning explorer displays.** When you see a routing graph visualization, aliases make it readable.
- **Node-list UIs in wallets.** "Connect to which peer?" is easier to answer if peers have meaningful aliases.
- **Casual identification.** "I opened a channel with WalletOfSatoshi" is shorter than the corresponding pubkey.
- **Operator branding.** Lightning node operators with public infrastructure (custodial wallets, exchanges, businesses) use aliases as part of their public-facing identity.

What aliases are not good for:

- **Trust decisions.** Never trust a node based on its alias alone. The pubkey is what matters cryptographically.
- **Routing safety.** A scam node calling itself "Coinbase" can't actually intercept Coinbase's payments because routing uses pubkeys.
- **Long-term identity.** Operators sometimes change aliases; aliases by themselves carry no historical accountability.

Treat aliases like Twitter display names: useful for human communication, but the underlying handle (public key) is the actual identity.
