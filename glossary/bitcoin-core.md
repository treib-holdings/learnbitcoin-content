---
title: "Bitcoin Core"
slug: bitcoin-core
draft: false
shortDefinition: "The reference implementation of the Bitcoin protocol, originally started by Satoshi Nakamoto, now maintained by community developers."
keyTakeaways:
  - "Sets the standard for Bitcoin's rule enforcement"
  - "Maintained by a decentralized group of developers"
  - "Offers the most thorough blockchain validation"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core-rpc
  - bitcoin-knots
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

Bitcoin Core is the reference implementation of the Bitcoin protocol. It's the codebase [Satoshi](/glossary/satoshi-nakamoto) originally wrote in 2008 (under the name "Bitcoin"), renamed in 2014 when Bitcoin-the-software needed to be distinguished from Bitcoin-the-network. It powers the large majority of publicly reachable [full nodes](/glossary/full-node) and is what most other wallets and libraries quietly defer to.

The codebase lives at **[github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)**, maintained by a rotating cast of contributors with no formal governance structure. Changes go through:

1. A **Bitcoin Improvement Proposal (BIP)** spec for anything user-facing or consensus-affecting.
2. A pull request to the codebase, reviewed by anyone who wants to (and many serious reviewers do).
3. Integration by maintainers - a small group with merge access. They don't set the rules; they merge what passes review.
4. A release tagged by the release manager, signed by multiple key holders.
5. **Adoption is voluntary.** Every node operator chooses whether to upgrade. A change ships only when enough operators run the new version that the network has effectively migrated.

The combination of open review and voluntary adoption is what makes Bitcoin's protocol genuinely hard to change. A hostile maintainer can't sneak in a change; reviewers will spot it. A hostile group can't fork the rules; nodes won't run their version. The system optimizes for *not making mistakes*, even at the cost of slow evolution.

Bitcoin Core releases roughly every 6 months. Major versions have brought SegWit (2017), Taproot signaling (2021), and incremental improvements to mempool policy, networking, and validation performance. It's the most-reviewed cryptocurrency codebase in existence, and the de facto standard for "what Bitcoin actually is."

See [Full Node](/glossary/full-node) for what running it means, and [Sovereignty Journey](/journey/sovereignty) for why you might want to.
