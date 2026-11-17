---
title: "Bitcoin Inheritance Planning"
slug: bitcoin-inheritance-planning
draft: false
updated: "2026-11-17"
shortDefinition: "Ways to make sure heirs can reach your BTC after your death, often involving multisig, a letter that says where the backup is, or time-lock scripts."
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
  - { label: "ABA Journal - Next generation: Cryptocurrency and estate lawyers (November 1, 2018): coins held at an exchange can be reached through the normal probate process; for coins the owner holds, the plan must tell heirs where to find the devices and the seed phrases", url: "https://www.abajournal.com/magazine/article/cryptocurrency_estate_lawyers_caution" }
  - { label: "Superior Court of California, County of Orange - Wills and trusts: property passes under a will, through a living trust, or to heirs under state law when there is no will; a will that has been filed is likely to be open to the public", url: "https://www.occourts.org/self-help/self-help-probate/wills-trusts" }
  - { label: "FBI - public service announcement of August 11, 2023: recovery schemes charge a fee up front and then stop answering or ask for more", url: "https://www.ic3.gov/PSA/2023/PSA230811" }
  - { label: "US Internal Revenue Service - Publication 551, Basis of Assets (December 2025): the basis of inherited property is generally its fair market value at the date of death", url: "https://www.irs.gov/publications/p551" }
  - { label: "US Internal Revenue Service - Digital assets: for US tax purposes digital assets are property, not currency", url: "https://www.irs.gov/filing/digital-assets" }
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

The Bitcoin network has no probate court, no executor with administrative override, no bank to subpoena. If your heirs don't have a workable path to your [private keys](/glossary/private-key) (or your [seed phrase](/glossary/seed-phrase), or your [multisig](/glossary/multisig) setup), the BTC is permanently lost. Nobody knows how many coins have been buried this way; a 2017 Chainalysis estimate put all lost coins, from every cause combined, at 2.8 to 3.8 million BTC - the chain doesn't care about your death certificate. That is true of coins whose keys you hold yourself. Coins left at an exchange are different: in the United States an heir can generally claim them through the ordinary probate process, as with a bank account, for as long as the exchange itself is standing. That claim goes through the court and the exchange itself, never through anyone who offers to recover the coins for a fee paid first.

The competing requirements:

1. **Heirs must eventually be able to access the funds.** They need to know the wallet exists, where the materials are stored, and what to do.
2. **Heirs must not access the funds prematurely.** Giving an heir the seed phrase while you're using the wallet means you've given them your money.
3. **Adversaries must not be able to coerce or trick heirs into giving access.** "Your father died, here's how to claim his BTC" is a phishing-script template waiting to be exploited.

None of the approaches below decides who inherits. A will or a trust does that, or the law where there is neither. The plan only makes sure the person named can reach the coins. Keep the seed words out of the will itself: once a will is filed with a court, it is likely to be open to the public.

Common approaches:

- **Sealed letter with a lawyer.** Document your wallet setup, where the hardware devices are, and where the seed phrase is stored, never the words themselves. The lawyer holds the envelope and opens it on notice of your death. An envelope that lists every location is a map for whoever opens it, so this plan rests on that office.
- **Multisig with a time-locked branch.** You hold the keys that spend day to day. A second branch of the script lets a designated heir (alone, or together with a second key holder) spend only after the coins have sat untouched for a set delay, say six months, enforced by a [relative locktime](/glossary/bip-68-relative-locktime) that [CheckSequenceVerify](/glossary/checksequenceverify-csv) checks inside the script. The clock runs for each coin from the block that confirmed it and restarts only when that coin moves. So you have to move every coin before its deadline, paying a fee each time, to keep the heir's branch from maturing; once you stop, it matures. The delay cannot be more than about 15 months, the most a relative locktime can express. Bitcoin Core's [output descriptor](/glossary/output-descriptor) language can express such a branch directly, with Miniscript's `older()` for the delay.
- **[Shamir's Secret Sharing](/glossary/shamir-secret-sharing).** Split the seed into N shares, any M of which reconstruct it; SLIP-39 is the standard form. Distribute to people you know in person; M of them together can take the coins. A share is handed over in person. It is never read out, photographed or typed into a message, whoever asks. Useful but adds complexity, and unlike multisig the reconstructed seed ends up whole in one place.
- **Collaborative custody.** If a company holds one key of your multisig, check what its inheritance procedure actually requires. The plan then depends on the company still existing and on its identity checks: a trust decision, not a technical one.

Testing matters enormously. **Have your heir (or a stand-in) walk through the recovery procedure** with a tiny test wallet. Update the plan whenever your custody setup changes. A plan you've never rehearsed is a plan you don't have.

Tax is a separate question. In the United States an heir's cost for tax purposes generally starts again at the value on the date of death, so the heir needs that day's price. Elsewhere, your tax office's own website is the place to check.

See [Inheritance Seed Backup](/glossary/inheritance-seed-backup) for backup mechanics and [Hierarchical Multisig](/glossary/hierarchical-multisig) for layered multisig designs.
