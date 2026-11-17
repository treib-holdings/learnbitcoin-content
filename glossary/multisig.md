---
title: "Multisig"
slug: multisig
draft: false
updated: "2026-11-17"
shortDefinition: "A wallet setup where spending requires signatures from more than one key (M-of-N, such as 2-of-3), so no single key or key holder can move the funds alone."
keyTakeaways:
  - "Spending requires M of N cosigner signatures (e.g., 2-of-3)"
  - "Removes the single point of failure of one seed, and adds a set-up record that must be kept"
  - "Standard pattern: each cosigner key on a different device, often in different locations"
sources:
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts (OP_CHECKMULTISIG disabled, OP_CHECKSIGADD added)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "BIP-341 - Taproot deployment: activated at block 709632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "mempool.space - block 709,632, the Taproot activation block (November 14, 2021)", url: "https://mempool.space/block/0000000000000000000687bca986194dc2c1f949318629b44bb54ec0a94d8244" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "BIP-445 (Draft as of November 2026; its pull request to the BIPs repository, number 2070, was still open on November 16) - FROST Signing Protocol for BIP340 Signatures", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "BOLT 3 - Lightning funding output is a 2-of-2 multisig", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#funding-transaction-output" }
  - { label: "BIP 87 - Hierarchy for Deterministic Multisig Wallets: cosigners must back up the descriptor as well as their private keys, because every cosigner's public key is needed, in addition to M seeds, to restore an M-of-N wallet", url: "https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki" }
  - { label: "BitBox - The pitfalls of multisig when using hardware wallets (December 3, 2019, archived copy): without every cosigner's public keys in the backup, losing one seed loses the funds; check a receive address on more than one device; flaws reported to three makers; a multisig setup can end up less secure than an ordinary single-key wallet", url: "https://web.archive.org/web/20250719224348/https://blog.bitbox.swiss/en/the-pitfalls-of-multisig-when-using-hardware-wallets/" }
  - { label: "Sparrow Wallet - Best practices: a single-key wallet for amounts up to US$100,000 and multisig above that; multisig takes more time and resources", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "FDIC - Five Things to Know About Safe Deposit Boxes, Home Safes and Your Valuables: the contents of a safe deposit box are not insured by the FDIC, and who may open one after a death depends on state law", url: "https://www.fdic.gov/consumer-resource-center/five-things-know-about-safe-deposit-boxes-home-safes-and-your-valuables" }
  - { label: "Lightning specification - extension BOLT, Simple Taproot Channels (merged May 4, 2026): the funding output becomes a taproot output with a MuSig2 key", url: "https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md" }
relatedTerms:
  - hierarchical-multisig
  - interactive-multi-sig
  - k-k-multisig
  - hdm-multi-signature-hd-wallet
  - m-n
  - key-aggregation
  - musig
  - musig2
  - partial-signature
  - psbt
  - quorum-signatures
  - shamir-secret-sharing
sameAs:
  - "https://en.wikipedia.org/wiki/Multisignature"
  - "https://www.wikidata.org/wiki/Q22907108"
  - "https://en.bitcoin.it/wiki/Multi-signature"
liveWidget: ~
ogImage: "/diagrams/og/multisig.png"
ogImageAlt: "BITCOIN MULTISIG in large bold type, with the subtitle 'Threshold-of-keys, not single-key-of-failure.' The opening frame of LearnBitcoin's 35-second animated walkthrough of 2-of-3 multisig."
---

<figure>
  <video
    src="/videos/multisig.mp4"
    poster="/videos/posters/multisig.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated walkthrough of a 2-of-3 multisig wallet. Three hardware keys appear in a row with a 'Threshold: 2 of 3' label and the caption 'Three different makers. A bug in one can't break the others.' A transaction signs with two keys and broadcasts. Loss scenario: Key B fades to gray with a 'lost' label; the other two keys still sign and the spend goes through. Theft scenario: a hooded figure grabs Key A, which turns green and is marked 'stolen'; the thief's attempt to sign alone halts at one of two signatures. Closing pillars: Multisig. Threshold-of-keys. Vendor-diverse."
  ></video>
  <figcaption>Three keys. Any two sign. Lose one and you can still spend, if you kept the wallet's set-up record. Steal one and you still can't.</figcaption>
</figure>

Multisig is a wallet structure where the output requires multiple signatures to spend, not just one. The script encodes "M of N cosigners must sign" - you might have 3 cosigner keys (N=3) and require any 2 of them to sign for a spend to be valid (M=2). That's the classic [2-of-3](/glossary/m-n).

The point is to remove the single-point-of-failure problem of a normal single-sig wallet. With one seed, anyone who finds or copies it can drain you. With 2-of-3 multisig spread across three locations or three devices, an attacker has to compromise two of the three keys, which is a much harder bar. The two don't have to fall at the same time. A key stolen months earlier still counts unless you move the funds to new keys first.

The seed words are not the whole backup. A multisig wallet also has a set-up record, usually an [output descriptor](/glossary/output-descriptor): a line of text that lists every cosigner's public key and the 2-of-3 rule. Restoring the wallet takes all of those public keys as well as the seeds that sign. Lose one key without that record and the two seeds you still hold cannot find or spend the coins, so keep a copy of it with each seed backup.

Devices from different makers lower the risk that one flaw reaches every key. They do not remove it: in 2019 a rival maker reported flaws in the way three makers' devices handled multisig.

Common patterns:

- **2-of-3 personal custody.** One key on a hardware wallet at home, one with a custody service or in a bank's safe deposit box (whose contents, in the United States, deposit insurance does not cover), one with a person you know in person and would trust with it. Two holders together can spend, so choose with care. Survives the loss of any one key, as long as the set-up record is kept. A company or a person that holds a key makes its own. Nobody ever needs the seed words of a key that you hold.
- **3-of-5 for groups and companies.** Survives loss of two, requires three to sign. The five keys can sit with different officers, in different offices, or in hardware security modules.
- **2-of-2 Lightning channels.** A standard Lightning channel is funded by a 2-of-2 multisig output between you and your channel partner. Most users never see this; the protocol just uses multisig under the hood for the channel's funding output. Taproot channels, added to the Lightning specification as an extension in May 2026, use one combined key instead.

Bitcoin has two ways to express multisig on-chain:

- **Classical multisig** (`OP_CHECKMULTISIG`, pre-Taproot). Wrapped in [P2SH](/glossary/p2sh) or [P2WSH](/glossary/p2wsh-pay-witness-script-hash). The script is visible on-chain when spent, so observers can see "this was a 2-of-3 spend." The opcode accepts up to 20 keys. P2SH tops out at 15 compressed keys because its whole script must fit in a single 520-byte data element; P2WSH carries the script in the witness, where that size limit does not apply, so it allows the full 20.
- **Taproot multisig** (since Taproot activated in November 2021). In a script-path spend, Tapscript replaces `OP_CHECKMULTISIG` with [`OP_CHECKSIGADD`](/glossary/op-checksigadd), which lifts the 20-key cap. In a key-path spend, the cosigners share one combined public key, so the spend looks like any single-sig Taproot spend and observers can't tell it was multisig. MuSig2 [key aggregation](/glossary/key-aggregation) does this when all N sign. FROST does it for any M of N, though its Bitcoin spec is a draft BIP as of November 2026. A single signature also makes the spend smaller and cheaper.

The signing flow usually uses [PSBT](/glossary/psbt). One cosigner builds the transaction, signs their part, passes it to the next, who adds their signature, and so on until the threshold is met. With hardware wallets and coordination tools like Sparrow, Nunchuk, or Specter, this is workable but more involved than single-sig. Each device should check, or let you check, the list of cosigner keys, and a receive address should be checked on more than one device's own screen before coins are sent to it.

When to use multisig: when the value justifies the operational complexity. For small balances, a well-backed-up single-sig hardware wallet is more secure than a multisig you'll fumble. For amounts you can't afford to lose and won't move daily, many advisers suggest multisig, though not all.
