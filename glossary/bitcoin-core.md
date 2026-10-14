---
title: "Bitcoin Core"
slug: bitcoin-core
draft: false
updated: "2026-10-13"
shortDefinition: "The reference implementation of the Bitcoin protocol, originally started by Satoshi Nakamoto, now maintained by community developers."
keyTakeaways:
  - "Sets the standard for Bitcoin's rule enforcement"
  - "Maintained by a decentralized group of developers"
  - "Fully validates every block and transaction against the consensus rules"
sources:
  - { label: "Bitcoin Core - About: an open source project that maintains and releases the Bitcoin Core client, a direct descendant of the original Bitcoin software client released by Satoshi Nakamoto; full-node software for fully validating the blockchain", url: "https://bitcoincore.org/en/about/" }
  - { label: "Bitcoin Core - 0.9.0 release notes: to reduce confusion between Bitcoin-the-network and Bitcoin-the-software, the reference client was renamed to Bitcoin Core (tagged 2014-03-18)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md" }
  - { label: "Bitcoin Core - CONTRIBUTING.md: an open contributor model with no privileged Bitcoin Core developers; repository maintainers merge pull requests and run the release cycle; patches that change consensus rules must be preceded by extensive mailing list discussion and have a numbered BIP", url: "https://github.com/bitcoin/bitcoin/blob/master/CONTRIBUTING.md" }
  - { label: "Bitcoin Core - Lifecycle: we aim to make a major release every 6 months; proposals to change consensus rules are always shipped first in maintenance versions", url: "https://bitcoincore.org/en/lifecycle/" }
  - { label: "Bitcoin Core - doc/bips.md: BIP 141 defined for mainnet as of v0.13.1; BIP 340, 341 and 342 with mainnet activation as of v0.21.1", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/bips.md" }
  - { label: "BTC Nodes API - snapshot of October 13, 2026, 23:37 UTC: 25,452 reachable nodes, 21,257 reporting a Bitcoin Core (Satoshi) user agent and 4,115 a Bitcoin Knots user agent", url: "https://btcnodes.io/api/v1/snapshots/1791934676/" }
  - { label: "bitcoin/bitcoin - pull request 16432, qt: Add privacy to the Overview page (Settings, Mask Values), by Hennadii Stepanov, merged 2020-05-29; a reviewer notes it works like the lurking wife mode of Wasabi Wallet", url: "https://github.com/bitcoin/bitcoin/pull/16432" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core-rpc
  - bitcoin-knots
  - lurking-wife-mode
  - node
  - node-autoban
  - node-operator
  - node-synchronization
  - spv-simplified-payment-verification
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_Core"
  - "https://www.wikidata.org/wiki/Q18198917"
  - "https://en.bitcoin.it/wiki/Bitcoin_Core"
liveWidget: ~
---

Bitcoin Core is the reference implementation of the Bitcoin protocol. It's the direct descendant of the client [Satoshi](/glossary/satoshi-nakamoto) released under the name "Bitcoin", renamed in 2014 to reduce confusion between Bitcoin-the-network and Bitcoin-the-software. It runs on about five of every six publicly reachable [full nodes](/glossary/full-node) (October 2026), with most of the rest on [Bitcoin Knots](/glossary/bitcoin-knots), and is what most other wallets and libraries quietly defer to.

The codebase lives at **[github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)**, maintained by a rotating cast of contributors with no formal governance structure. Changes go through:

1. A [BIP](/glossary/bip-bitcoin-improvement-proposal) and extensive mailing-list discussion for anything that changes consensus rules.
2. A pull request to the codebase, reviewed by anyone who wants to (and many serious reviewers do).
3. Integration by maintainers - a small group with merge access. They don't set the rules; they merge what passes review.
4. A release, cut by the maintainers, who also run the release cycle.
5. **Adoption is voluntary.** Every node operator chooses whether to upgrade. A consensus change takes hold only when enough operators run the new version that the network has effectively migrated.

The combination of open review and voluntary adoption is what makes Bitcoin's protocol genuinely hard to change. A hostile maintainer can't sneak in a change; reviewers will spot it. A hostile group can't fork the rules; nodes won't run their version. The system optimizes for *not making mistakes*, even at the cost of slow evolution.

Bitcoin Core aims for a major release every six months, each with incremental improvements to mempool policy, networking, and validation performance. Consensus changes ship first in maintenance releases rather than major versions: SegWit's mainnet parameters came in 0.13.1 and Taproot's activation parameters in 0.21.1. It's the de facto standard for "what Bitcoin actually is."

The codebase has its quirks too. The GUI's "Mask Values" toggle, which hides balances and amounts from anyone looking over your shoulder, was merged in 2020; during review someone compared it to [Wasabi Wallet](/glossary/wasabi-wallet)'s version of the same idea, known as [Lurking Wife Mode](/glossary/lurking-wife-mode) - a small reminder that real humans write this software.

See [Full Node](/glossary/full-node) for what running it means, and [Sovereignty Journey](/journey/sovereignty) for why you might want to.

For why changes near validation are treated so conservatively, see [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork), the night a database swap turned out to be a consensus change.
