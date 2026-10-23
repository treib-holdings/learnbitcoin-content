---
title: "Great Consensus Cleanup"
slug: great-consensus-cleanup
linkText:
  - "Great Consensus Cleanup"
  - "Consensus Cleanup"
  - "BIP-54"
  - "BIP 54"
draft: false
published: "2026-10-19"
shortDefinition: "A proposed soft fork, BIP-54, that bundles fixes for four old defects in Bitcoin's consensus rules: the time warp attack, blocks built to take minutes to validate, 64-byte transactions that confuse Merkle proofs, and the duplicate-coinbase check nodes still carry for BIP-30. Matt Corallo drafted it in 2019; Antoine Poinsot revived it in 2024 and the finished text was numbered in 2025. Not activated."
keyTakeaways:
  - "Four rules: the first block of a difficulty window may not be stamped more than two hours before the previous block, and the last block not before the window's first; a transaction may count at most 2,500 signature operations across its inputs' scripts; a transaction whose witness-stripped size is exactly 64 bytes is invalid; a coinbase must set nLockTime to the block height minus one"
  - "Every rule only narrows what is valid, so nodes that never upgrade stay on the same chain; Bitcoin Core 29.0 already refuses to build a template that breaks the timestamp rules, 30.0 the signature-operation limit, and the reference implementation (PR #35793) carries the rules without a mainnet activation"
  - "Corallo's 2019 version stalled on script restrictions that would have invalidated some pre-signed legacy spends; the 2025 text replaces them with a signature-operation budget that no ordinary transaction reaches and cuts the worst-case validation time by a factor of 40"
sources:
  - { label: "BIP-54 - Consensus Cleanup (Antoine Poinsot and Matt Corallo; assigned 2025-04-11, status Complete, changelog 1.0.0 dated 2026-05-22): the four rules, the 38-day timewarp figure, the 2,500 limit as the tightest value no non-pathological standard transaction reaches, the factor-of-40 improvement, block 1,983,702, the 0.13.0 to 0.13.2 Merkle caching bug, Core 29.0 and 30.0 template behaviour, 64-byte transactions unrelayed since 0.16.1", url: "https://github.com/bitcoin/bips/blob/master/bip-0054.md" }
  - { label: "Matt Corallo - bitcoin-dev, BIP Proposal: The Great Consensus Cleanup (6 March 2019): asks the BIP editor for a number; the 600-second timewarp allowance; disabling non-standard sighash types", url: "https://www.learnbitcoin.com/archive/m/bf96c2fb-2e2e-a47f-e59f-87e56d83eca3%40mattcorallo.com" }
  - { label: "Matt Corallo - draft BIP, The Great Consensus Cleanup (created 2019-01-28): push-only scriptSigs, OP_CODESEPARATOR and FindAndDelete failing in legacy scripts, canonical sighash bytes, transactions under 65 bytes invalid, 600-second timewarp rule, BIP9 deployment on bit 3 from August 2019", url: "https://github.com/TheBlueMatt/bips/blob/cleanup-softfork/bip-XXXX.mediawiki" }
  - { label: "Bitcoin Core PR #15482 - Implement BIPXXX's new softfork rules (The Great Consensus Cleanup): opened 25 February 2019, closed 12 November 2019 unmerged", url: "https://github.com/bitcoin/bitcoin/pull/15482" }
  - { label: "Antoine Poinsot - Delving Bitcoin, Great Consensus Cleanup Revival (24 March 2024): the worst block found takes about three minutes on a 16-core laptop and an hour and a half on a Raspberry Pi 4, five seconds under the proposed rules; confiscation concerns called reasonable; BIP-30 validation unnecessary until block 1,983,702", url: "https://delvingbitcoin.org/t/great-consensus-cleanup-revival/710" }
  - { label: "Mark Erhardt (Murch) - Delving Bitcoin, Zawy's Alternating Timestamp Attack (9 August 2024): alternating future and past stamps on the last blocks of difficulty periods, found during testnet4 review", url: "https://delvingbitcoin.org/t/zawy-s-alternating-timestamp-attack/1062" }
  - { label: "Bitcoin Core PR #35793 - Implement BIP 54 (Consensus Cleanup) without mainnet activation (opened 24 July 2026, open as of October 2026)", url: "https://github.com/bitcoin/bitcoin/pull/35793" }
  - { label: "Bitcoin Core - src/consensus/params.h (master, October 2026): the deployment lists carry no Consensus Cleanup activation", url: "https://github.com/bitcoin/bitcoin/blob/master/src/consensus/params.h" }
  - { label: "BIP-30 - Duplicate transactions (Wuille, 2012): the duplicate coinbases at heights 91,842 and 91,880 and the rule against transactions whose txid still has unspent outputs", url: "https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki" }
  - { label: "BIP-34 - Block v2, Height in Coinbase (Andresen, 2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki" }
  - { label: "BIP-94 - Testnet 4 (Jahr, 2024): the 600-second timewarp rule adopted from the Great Consensus Cleanup", url: "https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki" }
relatedTerms:
  - bip-30
  - bip-34
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block-timestamp-rules
  - coinbase-transaction
  - difficulty-retargeting
  - merkle-proof
  - merkle-tree-merkle-root
  - soft-fork
  - testnet
  - time-warp-attack
liveWidget: ~
---

Bitcoin's consensus rules carry a few known defects that nobody has fixed, because fixing them means a [soft fork](/glossary/soft-fork) and soft forks are expensive to organize. The Great Consensus Cleanup is the idea of paying that cost once for several fixes together. Matt Corallo posted the first version to the bitcoin-dev list on March 6, 2019, with a draft [BIP](/glossary/bip-bitcoin-improvement-proposal) and a [Bitcoin Core](/glossary/bitcoin-core) pull request. It never got a number. The script restrictions it proposed, disabling `OP_CODESEPARATOR` in legacy scripts, limiting scriptSigs to pushes and rejecting non-standard sighash bytes, were meant to cap how long a hostile block can take to validate, but they would also have invalidated some pre-signed transactions that could not be signed again, and that objection stuck. The pull request was closed in November 2019.

Antoine Poinsot reopened the question on Delving Bitcoin in March 2024 with measurements: how bad each bug is, how much each fix buys, and whether five more years of experience suggested better ones. The BIP that came out of it was assigned number 54 in April 2025, with Poinsot and Corallo as authors, and its text was marked complete in May 2026. It has four rules.

**Time warp.** The first block of each 2,016-block difficulty window must be stamped no earlier than two hours before the previous block, and the last block of a window no earlier than its first. The first rule closes the [time warp attack](/glossary/time-warp-attack). The second forbids a window from measuring a negative length, which closes a variant Zawy and Murch described during testnet4 review in 2024, with alternating future and past stamps on the last blocks of windows. Corallo had proposed a ten-minute grace, which testnet4 adopted in [BIP-94](/glossary/testnet); BIP-54 went to two hours after testnet4 showed pool software producing blocks that broke the shorter one, at a cost the BIP puts at about two seconds per block under attack.

**Worst-case validation time.** Legacy (pre-SegWit) scripts can be arranged so that a block takes minutes to validate on a fast machine and over an hour on a Raspberry Pi. Poinsot built one and kept the recipe among protocol developers. Rather than disable opcodes, BIP-54 counts the `CHECKSIG` and `CHECKMULTISIG` operations in each input's scriptSig, in the output script it spends and in any P2SH redeem script, whether or not a branch runs, and invalidates a transaction whose inputs total more than 2,500. The limit is the tightest value that no non-pathological standard transaction reaches, and the BIP says it cuts the worst case by a factor of 40.

**64-byte transactions.** A transaction that serializes to exactly 64 bytes without witness data is the same length as two hashes side by side, so it can be read as an inner node of the block's [Merkle tree](/glossary/merkle-tree-merkle-root) as well as a leaf. That lets an attacker fake an [inclusion proof](/glossary/merkle-proof) for a light client, at the cost of a large brute-force search, and the same ambiguity once tricked Bitcoin Core 0.13.0 through 0.13.2 into caching the wrong verdict for a block. Bitcoin Core has not relayed such transactions since 0.16.1, and none has been mined since 2016. BIP-54 makes them invalid.

**Duplicate coinbases.** Two early blocks, 91,842 and 91,880, repeated the [coinbase](/glossary/coinbase-transaction) of an earlier block byte for byte, and [BIP-30](/glossary/bip-30) added a check that no transaction may reuse a txid whose outputs are still unspent. [BIP-34](/glossary/bip-34) put the block height in the coinbase, which rules out a repeat until block 1,983,702, where a pre-BIP-34 coinbase happens to encode that height. BIP-54 requires every coinbase to set `nLockTime` to the block height minus one and `nSequence` to anything but 0xffffffff, so the time lock itself guarantees the transaction could not have been valid in an earlier block. Nodes can then drop the BIP-30 lookup for good, which also matters for designs like Utreexo that keep no full UTXO set to look things up in.

Every rule narrows what counts as a valid block, so nodes that never upgrade stay on the same chain. Miners are already most of the way there. Bitcoin Core has refused to build a template that violates the timestamp rules since version 29.0 and the signature-operation limit since 30.0, and has not relayed 64-byte transactions since 0.16.1. Activation is the part nobody has scheduled. The reference implementation, Bitcoin Core pull request #35793, carries the rules without a mainnet activation, and as of October 2026 the chain parameters hold no activation for it.
