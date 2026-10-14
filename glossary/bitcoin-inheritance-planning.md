---
title: "Bitcoin Inheritance Planning"
slug: bitcoin-inheritance-planning
draft: false
updated: "2026-10-13"
shortDefinition: "Strategies ensuring heirs can access your BTC in the event of your death, often involving multisig, trusted executors, or time-lock scripts."
keyTakeaways:
  - "Prevents BTC from becoming inaccessible upon death"
  - "Combines technical solutions (multisig, time-lock) and legal measures"
  - "Requires careful balance of security and usability"
sources:
  - { label: "BIP-112 - CHECKSEQUENCEVERIFY, Escrow with Timeout: the clock does not start ticking until the payment confirms (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki" }
  - { label: "BIP-68 - Relative lock-time using consensus-enforced sequence numbers: an input stays invalid for a set period after the output it spends confirms (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki" }
  - { label: "BIP-65 - OP_CHECKLOCKTIMEVERIFY: absolute time-locks in script (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md: Miniscript older() and after(), and the decaying multisig example (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "Bitcoin Optech - Timelocks topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/timelocks/" }
  - { label: "SatoshiLabs - SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes (2017)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0039.md" }
  - { label: "Fortune - Exclusive: Nearly 4 Million Bitcoins Lost Forever, New Study Says (2017-11-25)", url: "https://fortune.com/crypto/2017/11/25/lost-bitcoins/" }
relatedTerms:
  - bip-68-relative-locktime
  - checksequenceverify-csv
  - decentralization
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - multisig
  - output-descriptor
  - paper-wallet
  - seed-phrase
  - shamir-secret-sharing
liveWidget: ~
---

Bitcoin inheritance planning is the practice of ensuring your heirs can access your BTC if you die or become permanently incapacitated, without giving them premature access while you're alive.

The Bitcoin network has no probate court, no executor with administrative override, no bank to subpoena. If your heirs don't have a workable path to your [private keys](/glossary/private-key) (or your [seed phrase](/glossary/seed-phrase), or your [multisig](/glossary/multisig) setup), the BTC is permanently lost. Nobody knows how many coins have been buried this way; a 2017 Chainalysis estimate put all lost coins, from every cause combined, at 2.8 to 3.8 million BTC - the chain doesn't care about your death certificate.

The competing requirements:

1. **Heirs must eventually be able to access the funds.** They need to know the wallet exists, where the materials are stored, and what to do.
2. **Heirs must not access the funds prematurely.** Giving an heir the seed phrase while you're using the wallet means you've given them your money.
3. **Adversaries must not be able to coerce or trick heirs into giving access.** "Your father died, here's how to claim his BTC" is a phishing-script template waiting to be exploited.

Common approaches:

- **Sealed letter with a lawyer.** Document your wallet setup, hardware-device locations, and seed-phrase storage. Lawyer holds the envelope, opens upon death notification. Good for moderate amounts; depends on legal jurisdiction.
- **Multisig with a time-locked branch.** You hold the keys that spend day to day. A second branch of the script lets a designated heir (alone, or together with a trustee) spend only after the coins have sat untouched for a set delay, say six months, enforced by a [relative locktime](/glossary/bip-68-relative-locktime) that [CheckSequenceVerify](/glossary/checksequenceverify-csv) checks inside the script. The clock restarts every time you move the coins, so the heir's branch never matures while you are around to spend; once you are not, it does. Bitcoin Core's [output descriptor](/glossary/output-descriptor) language can express such a branch directly, with Miniscript's `older()` for the delay.
- **[Shamir's Secret Sharing](/glossary/shamir-secret-sharing).** Split the seed into N shares, any M of which reconstruct it; SLIP-39 is the standard form. Distribute to trustees. Useful but adds complexity, and unlike multisig the reconstructed seed ends up whole in one place.
- **Collaborative custody.** If a company holds one key of your multisig, check what its inheritance procedure actually requires. The plan then depends on the company still existing and on its identity checks: a trust decision, not a technical one.

Testing matters enormously. **Have your heir (or a stand-in) walk through the recovery procedure** with a tiny test wallet. Update the plan whenever your custody setup changes. A plan you've never rehearsed is a plan you don't have.

See [Inheritance Seed Backup](/glossary/inheritance-seed-backup) for backup mechanics and [Hierarchical Multisig](/glossary/hierarchical-multisig) for layered multisig designs.
