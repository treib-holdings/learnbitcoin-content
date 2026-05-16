---
title: "BIP 339 (WTXID Relay)"
slug: bip-339-wtxid-relay
draft: false
shortDefinition: "P2P negotiation for wtxid-based transaction relay, replacing txid-based INV messages and closing a witness-malleability relay gap."
keyTakeaways:
  - "Peers exchange a `wtxidrelay` message at connection time to opt into wtxid relay"
  - "Distinguishes transactions sharing a txid but with different witnesses, closing a duplicate-detection gap"
  - "Activated in Bitcoin Core 0.21 (January 2021); transparent to wallet users"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-144-segwit-relay
  - bip-152-compact-blocks
  - segwit-segregated-witness-bip-141
  - signature-clipping
  - transaction
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0339.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0339"
liveWidget: ~
---

BIP 339 changed the P2P relay layer so peers can advertise transactions by their witness transaction ID (wtxid) instead of their txid. Negotiation happens via a `wtxidrelay` message exchanged before the version handshake completes; both peers must support it to enable wtxid-based `INV`, `GETDATA`, and `NOTFOUND` traffic. Authored by Suhas Daftuar, deployed in Bitcoin Core 0.21 (January 2021).

The motivation comes from a subtle SegWit detail. SegWit (BIP 141) eliminated txid malleability: the txid commits only to the non-witness data, so witness-level tweaks no longer change the txid. But the witness itself can still be malleated. Two transactions can share a txid while having entirely different witness packages (one valid signature, one different-but-also-valid signature, for example). Pre-BIP 339 relay logic identified transactions by txid, which meant peers might silently drop one as a "duplicate" without ever realizing the two were different.

The practical effects:

- A small DoS vector closes. An attacker who could observe a transaction in flight can no longer flood the network with alternate-witness copies that some peers accept and others treat as already-seen.
- Compact block relay (BIP 152) gets cleaner. Short-IDs in compact blocks are derived from wtxids, so wtxid-aware peers reconstruct blocks more reliably.
- Future P2P transport upgrades (the BIP 324 v2 encrypted transport, etc.) build on the assumption that peers can address transactions by their full identifying hash.

For wallets and users, nothing visible changes. Transactions broadcast and confirm the same way. BIP 339 is one of those plumbing-level upgrades that quietly hardens the P2P layer without ever surfacing in the user experience.

Spec: [BIP-339](https://github.com/bitcoin/bips/blob/master/bip-0339.mediawiki).
