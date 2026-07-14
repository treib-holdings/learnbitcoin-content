---
title: "BIP (Bitcoin Improvement Proposal)"
slug: bip-bitcoin-improvement-proposal
draft: false
updated: "2026-07-14"
shortDefinition: "A design document suggesting changes or additions to Bitcoin's protocol and ecosystem standards."
keyTakeaways:
  - "Formal proposals for Bitcoin protocol or standards"
  - "Undergo community review and testing"
  - "Some BIPs become major upgrades like SegWit or Taproot"
sources: []
relatedTerms:
  - bip-9-versionbits
  - p2sh
  - bip-22-getblocktemplate
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - bitcoin-governance
  - psbt
  - taproot
  - bip-342-tapscript
  - bolt-11
sameAs:
  - "https://en.bitcoin.it/wiki/BIP"
  - "https://github.com/bitcoin/bips"
liveWidget: ~
---

A BIP - **B**itcoin **I**mprovement **P**roposal - is a formal design document proposing a change or addition to Bitcoin's protocol, software, or standards. The BIP system, modeled on Python's PEP process, is how Bitcoin's open-source development actually proposes, debates, and codifies changes.

Anyone can write a BIP. The process, first defined in [BIP-1](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki) and [BIP-2](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki) and updated by [BIP-3](https://github.com/bitcoin/bips/blob/master/bip-0003.md) in January 2026:

1. **Draft.** Author writes the proposal in the standard BIP format - abstract, motivation, specification, rationale, backwards compatibility, etc.
2. **Discussion.** The draft is shared on the bitcoin-dev mailing list and Github. Anyone interested - developers, miners, users, researchers - reviews and comments.
3. **Assignment.** If the proposal is well-formed and worth a number, the BIP editors assign it a permanent BIP number.
4. **Iteration.** The author revises based on feedback. Many BIPs never make it past this stage.
5. **Status progression.** Under BIP-3 (since January 2026): Draft, then Complete when the spec is finished, then Deployed once it is used in the real world - or Closed if withdrawn, rejected, or superseded. (The older BIP-2 scheme used nine statuses, including Proposed and Final.)
6. **Actual deployment.** Acceptance into Bitcoin Core (or other implementations) is a separate decision. Activation on the network requires voluntary adoption by node operators and, for consensus changes, signaling by miners.

BIP types:

- **Standards Track** - changes to the protocol itself (consensus rules, network protocol, peer-to-peer messaging). Examples: BIP-141 ([SegWit](/glossary/segwit-segregated-witness-bip-141)), BIP-340/341/342 ([Schnorr](/glossary/schnorr-signature) / [Taproot](/glossary/taproot)), BIP-352 ([Silent Payments](/glossary/silent-payments)).
- **Informational** - design guidelines or implementation notes, no consensus impact.
- **Process** - changes to the BIP process itself.

The BIP process is intentionally slow, conservative, and adversarial - the formal end of [Bitcoin governance](/glossary/bitcoin-governance), where developers, miners, node operators, users, and long-term holders each hold de facto veto power. A consensus-affecting change typically takes years from initial proposal to network activation - and many proposals never make it. This is a feature: a global monetary protocol with $1-2T in value should be very, very hard to change accidentally. See [SegWit](/glossary/segwit-segregated-witness-bip-141) and [Taproot](/glossary/taproot) for two BIPs that did make it all the way through.

Go deeper in [The BIP Process](/rabbit-hole/bip-process) - what the editors actually control, the lifecycle, and how activation works.
