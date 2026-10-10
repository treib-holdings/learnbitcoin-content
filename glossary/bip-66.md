---
title: "BIP 66"
slug: bip-66
draft: false
updated: "2026-10-10"
shortDefinition: "Enforces strict DER-encoded signatures, mitigating certain transaction malleability and parsing issues."
keyTakeaways:
  - "Makes signatures conform to a single DER standard"
  - "Reduces malleability by removing alternate encodings"
  - "Improves network stability and wallet compatibility"
sources:
  - { label: "BIP 66 - strict DER signatures: removes the consensus rules' reliance on OpenSSL's signature parsing, with reduced malleability as an added benefit (deployment reuses the BIP 34 switchover)", url: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki" }
  - { label: "BIP 68 - deployed by BIP 9 version bits, starting May 2016", url: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block invalid chain on July 4, 2015)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "BIP 146 - the signature malleability left after BIP 66 (negating S); LOW_S relay policy since Bitcoin Core 0.11.1; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki" }
  - { label: "BIP 62 - known sources of malleability, including changes to the scriptSig (status Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki" }
  - { label: "BIP 141 - Segregated Witness: signature data is no longer part of the txid", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 9 deployments table - csv (BIPs 68, 112, 113) from May 2016, then segwit, active since block 481,824", url: "https://github.com/bitcoin/bips/blob/master/bip-0009/assignments.mediawiki" }
  - { label: "mempool.space - block 481,824, mined August 24, 2017", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Christian Decker and Roger Wattenhofer - Bitcoin Transaction Malleability and MtGox (ETH Zurich, March 2014): no widespread malleability attacks; at most about 386 BTC taken", url: "https://arxiv.org/abs/1403.6676" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - schnorr-signature
  - signature-aggregation
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0066"
liveWidget: ~
---

[BIP-66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki) tightened Bitcoin's signature encoding rules to require strict **Distinguished Encoding Rules (DER)** format. Activated as a [soft fork](/glossary/soft-fork) in July 2015, its main aim was to stop Bitcoin's consensus rules from depending on how the OpenSSL library happened to read signatures. It also cut down one kind of transaction malleability, which the BIP lists as an added benefit.

The problem: before BIP-66, Bitcoin accepted any signature that OpenSSL accepted, and OpenSSL was loose. The same logical [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) signature could be encoded multiple ways - leading zeros, varying integer encodings, padded buffers. Each encoding parsed to the same actual signature, but the *bytes* differed, which meant the transaction's [txid](/glossary/transaction) (computed over those bytes) differed.

This was a form of transaction malleability: someone could intercept a broadcast transaction, re-encode the signature in a different valid way, and rebroadcast with a different txid. The original sender's wallet would lose track of the transaction even though it eventually confirmed. Mt. Gox famously blamed malleability in February 2014 for the losses that ended the exchange, which it later put at about 850,000 BTC. Christian Decker and Roger Wattenhofer of ETH Zurich studied more than a year of network data and found no widespread use of malleability attacks before then. By their count, at most about 386 BTC could have been taken that way, from Mt. Gox or anyone else.

BIP-66's fix: require signatures to be in canonical DER format - one specific byte layout per logical signature. Anything else gets rejected by every node.

That closed off the encoding tricks. It did not stop every way of altering a signature. An ECDSA signature still verifies if its S value is swapped for its mirror image in the other half of the allowed range, so anyone relaying a transaction could turn a "low-S" signature into a "high-S" one and change the txid. BIP-66 left that alone. Bitcoin Core has refused to relay high-S signatures since version 0.11.1, but that is only relay policy. BIP 146, which proposed making it a consensus rule, was closed without being deployed. Some changes to a transaction's unlocking script also stayed valid.

The fix at the root came with [SegWit](/glossary/segwit-segregated-witness-bip-141), enforced from block 481,824 in August 2017. When a transaction spends SegWit outputs, its signatures sit in a separate witness section that the txid does not cover, so changing them no longer changes the txid. Transactions spending older, non-SegWit outputs remain malleable in principle. BIP-66 was a useful intermediate step.

BIP-66 reused the version-number switchover from [BIP-34](/glossary/bip-34): once 950 of the previous 1,000 blocks were version 3, version 2 blocks became invalid. The [BIP-9](/glossary/bip-9-versionbits) version-bits mechanism came later, and its first deployment was the CSV soft fork of 2016 ([BIP-68](/glossary/bip-68-relative-locktime), BIP-112 and BIP-113).

Enforcement began on July 4, 2015. Shortly after, a small miner that had not upgraded produced an invalid block, and miners who were not fully validating extended it into a 6-block chain before the valid chain pulled ahead. [How Bitcoin Works](/journey/how-bitcoin-works) puts that fork alongside the other deep reorgs in Bitcoin's history.
