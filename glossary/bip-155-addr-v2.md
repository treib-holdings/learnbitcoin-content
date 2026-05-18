---
title: "BIP 155 (Addr v2)"
slug: bip-155-addr-v2
draft: false
shortDefinition: "Extended the network address format to support longer addresses (e.g., Tor v3) in P2P messages."
keyTakeaways:
  - "Supports new address types like Tor v3"
  - "Modernizes the addr message for flexible formats"
  - "Improves Bitcoin's network interoperability"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - node
  - peer-bookmark
  - peer-discovery
  - peer-management
liveWidget: ~
---

[BIP-155](https://github.com/bitcoin/bips/blob/master/bip-0155.mediawiki) updated Bitcoin's peer-to-peer protocol to support extended network address types - specifically Tor v3 (the modern Tor onion addresses, which are longer than v2), [I2P](/glossary/i2p-invisible-internet-project), and CJDNS.

The problem: the legacy `addr` message format in Bitcoin's P2P protocol only supported 16-byte network identifiers. That fit IPv4 (4 bytes), IPv6 (16 bytes), and Tor v2 (10 bytes, deprecated). It did *not* fit Tor v3 (32-byte ed25519 keys), I2P (32-byte base32 destinations), or CJDNS (16-byte identifiers in some configurations).

When Tor v3 deprecated and replaced Tor v2 in 2021, Bitcoin needed a way to share Tor v3 addresses across the network. BIP-155 provided it.

The technical change: a new `addrv2` message replaces `addr` for nodes that signal support. Each address entry now includes a type byte (IPv4, IPv6, Tor v2 [legacy], Tor v3, I2P, CJDNS) and a variable-length payload. Old nodes that don't support `addrv2` fall back to the legacy `addr` message and never receive these address types.

Bitcoin Core has shipped BIP-155 support since version 0.21 (2021). It's the foundation that lets [Tor hidden services](/glossary/tor-hidden-service) and I2P nodes integrate into the gossip-driven [peer discovery](/glossary/peer-discovery) process as first-class network participants rather than as a kludge.

Mostly invisible to users; load-bearing for the privacy networks Bitcoin nodes increasingly run over.
