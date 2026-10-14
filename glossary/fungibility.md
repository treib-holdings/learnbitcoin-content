---
title: "Fungibility"
slug: fungibility
draft: false
updated: "2026-10-15"
shortDefinition: "The property that all units of a currency are interchangeable with no differing 'identity' or history attached."
keyTakeaways:
  - "Crucial to a currency's acceptance and utility"
  - "Blockchain tracing can threaten pure fungibility"
  - "Privacy techniques aim to keep BTC 'one coin = one coin'"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10 Privacy: the necessity to announce all transactions publicly; the public can see that someone is sending an amount to someone else; a new key pair should be used for each transaction (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Privacy: units of bitcoin are not watermarked within a transaction; if you can meaningfully distinguish one coin from another, their fungibility is weak; block chain analysis companies fingerprint particular spenders, and the surveillance company Chainalysis is used to find the ownership of addresses; CoinJoin lets multiple people cooperate on a single transaction involving all their inputs (accessed 2026-10-14)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "US Treasury, OFAC - FAQ 563: digital currency addresses listed on the SDN List, including Bitcoin (XBT) addresses, carry their unique alphanumeric identifier (accessed 2026-10-14)", url: "https://ofac.treasury.gov/faqs/563" }
  - { label: "US Treasury, OFAC - FAQ 562: OFAC may add digital currency addresses to the SDN List to alert the public; parties who identify wallets associated with an SDN and hold such property should block the digital currency and file a report with OFAC (19 March 2018)", url: "https://ofac.treasury.gov/faqs/562" }
  - { label: "BIP-352 - Silent Payments: static payment addresses without on-chain linkability of payments; each silent payment goes to a unique address, avoiding accidental address reuse (2023)", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "BOLT #0 - Introduction and Index: a layer-2 protocol for off-chain bitcoin transfer by mutual cooperation, relying on on-chain transactions for enforcement if necessary (accessed 2026-10-14)", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - disinflation
  - double-blind-marketplace
  - security
  - shielded-coinjoin
  - silent-payments
  - stealth-address
liveWidget: ~
---

Fungibility is the property that any one unit of a currency is interchangeable with any other. A dollar from your wallet and a dollar from the cash register are the same dollar; nobody asks where it's been.

Bitcoin is fungible *in protocol*: 1 BTC always equals 1 BTC, and the consensus rules don't distinguish between coins based on history. But Bitcoin is also fully *transparent* - every transaction is publicly visible forever, which means coins can be traced to past activity, including illicit activity. Blockchain analytics firms exploit this. The US Treasury lists specific Bitcoin addresses on its sanctions list and expects anyone holding coins tied to them to block the coins and report to OFAC, and some exchanges or counterparties refuse coins they associate with hacks, ransomware, or sanctioned addresses. That practical reality erodes pure fungibility.

Several tools push back. [CoinJoin](/glossary/coinjoin) breaks transaction-graph linkage by combining inputs from many users in a single transaction. [Silent Payments](/glossary/silent-payments) and [stealth addresses](/glossary/stealth-address) reduce on-chain address reuse. [Lightning](/glossary/lightning-network) routes payments off-chain, where they aren't individually broadcast.

The deeper argument is that fungibility is a property a community has to defend, not just one a protocol enforces. The protocol can't prevent a third party from deciding some coins are "tainted." Bitcoiners can - by refusing to accept that framing and by using privacy tools as a matter of course. A currency where coins have memory eventually becomes a currency where coins have permission.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for how exchange risk scoring erodes fungibility in practice.
