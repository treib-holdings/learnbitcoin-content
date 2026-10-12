---
title: "Public Key Exposure"
slug: public-key-exposure
draft: false
published: "2026-10-13"
shortDefinition: "The state of a coin whose public key is out in the open, on the chain or in someone else's hands, so that anyone with a way to break the key, such as a future quantum computer, could spend it. Exposed is not the same as stolen. Some script types show the key from creation; hashed types show it on their first spend, which is why address reuse is the main way modern coins end up exposed."
keyTakeaways:
  - "Two classes: always-exposed (P2PK, bare multisig, Taproot) show the key from creation; reuse-exposed (P2PKH, P2SH, P2WPKH, P2WSH) hide it behind a hash until the first spend, after which every later deposit to that address sits behind a public key"
  - "BIP-360 splits the threat into long exposure attacks on keys left public for years and short exposure attacks on keys in the mempool for minutes; wallet hygiene prevents the first class and cannot prevent the second"
  - "ChainQuery's count at block 970,878 (snapshot 2026-10-11): about 35 percent of supply exposed, 7,105,243 BTC, of which 5,172,596 BTC is reuse-exposed, about one coin in four; the largest bucket is P2WPKH at 2,081,021 BTC"
sources:
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): long exposure and short exposure attacks", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "BIP-141 - Segregated Witness (P2WPKH and P2SH-P2WPKH: the key is in the witness)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-341 - Taproot (the witness program is the tweaked public key)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "ChainQuery - Quantum exposure report (figures from snapshot 2026-10-11, block 970,878)", url: "https://chainquery.com/reports/quantum-exposure" }
  - { label: "Project Eleven - Bitcoin Risq List", url: "https://bitcoin-risq-list.projecteleven.com/" }
  - { label: "Glassnode Research - Measuring Bitcoin's Quantum-Exposed Supply (20 May 2026)", url: "https://research.glassnode.com/measuring-bitcoins-quantum-exposed-supply/" }
relatedTerms:
  - address-reuse
  - post-quantum-bitcoin
  - bip-360
  - bip-361
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2wpkh-pay-witness-public-key-hash
  - p2sh-p2wsh-nested-segwit
  - p2wsh-pay-witness-script-hash
  - taproot
  - public-key
  - x-only-public-key
  - xpub-extended-public-key
  - nonce-reuse
  - crqc-cryptographically-relevant-quantum-computer
  - shors-algorithm
liveWidget: ~
---

"Exposed" means the [public key](/glossary/public-key) that controls a coin is out of your hands: on the chain, where everyone can read it, or handed to someone else, as a shared [xpub](/glossary/xpub-extended-public-key) hands over every key under it. The counts on this page cover the on-chain case only. Exposed does not mean stolen. There is no known way to work a private key out of a public key on its own, and no cryptographically relevant quantum computer exists. Signing bugs such as [nonce reuse](/glossary/nonce-reuse) are a different problem: they leak the key through flawed signatures, not through the public key. What matters here is whether a hash still stands in front of the key.

Two classes:

- Always-exposed, from creation: [P2PK](/glossary/p2pk-pay-public-key), where the key is in the output itself; bare multisig, where all the keys are; and [Taproot](/glossary/taproot) (bc1p), where the address is the tweaked key.
- Reuse-exposed: P2PKH (1...), P2WPKH (bc1q, 42 characters), P2SH (3...) and P2WSH (bc1q, 62 characters) put a hash of the key or script in the output. The key stays hidden until the first spend, when it appears in the scriptSig or witness. A P2SH multisig reveals its keys in the redeem script; the common nested-segwit "3..." address reveals its key in the witness, not the redeem script. The key is then on the chain forever, and every later deposit to that address sits behind it for as long as it stays unspent.

Exposure follows the key, not the address string. One private key yields a P2PKH, a P2WPKH and a nested-segwit address; reveal it through any one and all three are exposed. Switching address type is not moving to a fresh key.

[BIP-360](/glossary/bip-360) names the two cases. A long exposure attack "Attempts to derive private keys from public keys that are exposed for an extended period of time; that is, longer than the window of time that a public key is generally exposed in the mempool while waiting to be confirmed." Short exposure attacks "cannot be prevented through wallet hygiene, as revealing a public key is necessary for spending." And the line that puts the job on users: "Protection from long exposure quantum attacks does not depend on the activation of post-quantum signatures in Bitcoin, but requires that users do not expose their public keys to attackers via public key reuse or other unsafe practices."

How much is exposed depends on the counting rule. ChainQuery's quantum-exposure report at block 970,878 (snapshot 2026-10-11) put the total at about 35 percent of supply, 7,105,243 BTC. Of that, 5,172,596 BTC was reuse-exposed, about one coin in four, and the largest bucket was P2WPKH at 2,081,021 BTC: segwit-era wallets, not Satoshi's. Project Eleven's Risq List and Glassnode count under different rules, so the three figures bracket each other rather than agree to the coin.

The way out is the oldest advice in Bitcoin: use each address once, and if you already spent from a reused address, move everything there to a fresh hashed address in one transaction. See [Address Reuse](/glossary/address-reuse), [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) and the [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin).
