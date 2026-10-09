---
title: "Multisig"
slug: multisig
draft: false
updated: "2026-10-09"
shortDefinition: "A wallet setup where spending requires signatures from more than one key (M-of-N, such as 2-of-3), so no single key or key holder can move the funds alone."
keyTakeaways:
  - "Spending requires M of N cosigner signatures (e.g., 2-of-3)"
  - "Eliminates the single-point-of-failure problem of a single seed"
  - "Standard pattern: each cosigner key on a different device, often in different locations"
sources:
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts (OP_CHECKMULTISIG disabled, OP_CHECKSIGADD added)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "BIP-341 - Taproot deployment: activated at block 709632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "mempool.space - block 709,632, the Taproot activation block (14 November 2021)", url: "https://mempool.space/block/0000000000000000000687bca986194dc2c1f949318629b44bb54ec0a94d8244" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "BIP-445 (Draft as of October 2026) - FROST Signing Protocol for BIP340 Signatures", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "BOLT 3 - Lightning funding output is a 2-of-2 multisig", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#funding-transaction-output" }
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
  <figcaption>Three keys. Any two sign. Lose one and you still spend. Steal one and you still can't.</figcaption>
</figure>

Multisig is a wallet structure where the output requires multiple signatures to spend, not just one. The script encodes "M of N cosigners must sign" - you might have 3 cosigner keys (N=3) and require any 2 of them to sign for a spend to be valid (M=2). That's the classic [2-of-3](/glossary/m-n).

The point is to remove the single-point-of-failure problem of a normal single-sig wallet. With one seed, anyone who finds or copies it can drain you. With 2-of-3 multisig spread across three locations or three devices, an attacker has to compromise two of the three keys, which is a much harder bar. The two don't have to fall at the same time. A key stolen months earlier still counts unless you move the funds to new keys first.

Common patterns:

- **2-of-3 personal custody.** One key on a hardware wallet at home, one with a custody service or in a safe deposit box, one with a trusted family member or attorney. Survives loss of any one. Steal one and you still can't spend. The sweet spot for serious personal holdings.
- **3-of-5 for groups and companies.** Survives loss of two, requires three to sign. The five keys can sit with different officers, in different offices, or in hardware security modules.
- **2-of-2 Lightning channels.** Every Lightning channel is technically a 2-of-2 multisig output between you and your channel partner. Most users never see this; the protocol just uses multisig under the hood for the channel's funding output.

Bitcoin has two ways to express multisig on-chain:

- **Classical multisig** (`OP_CHECKMULTISIG`, pre-Taproot). Wrapped in [P2SH](/glossary/p2sh) or [P2WSH](/glossary/p2wsh-pay-witness-script-hash). The script is visible on-chain when spent, so observers can see "this was a 2-of-3 spend." The opcode accepts up to 20 keys. P2SH tops out at 15 compressed keys because its whole script must fit in a single 520-byte data element; P2WSH carries the script in the witness, where that size limit does not apply, so it allows the full 20.
- **Taproot multisig** (since Taproot activated in November 2021). In a script-path spend, Tapscript replaces `OP_CHECKMULTISIG` with [`OP_CHECKSIGADD`](/glossary/op-checksigadd), which lifts the 20-key cap. In a key-path spend, the cosigners share one combined public key, so the spend looks like any single-sig Taproot spend and observers can't tell it was multisig. MuSig2 [key aggregation](/glossary/key-aggregation) does this when all N sign. FROST does it for any M of N, though its Bitcoin spec is a draft BIP as of October 2026. A single signature also makes the spend smaller and cheaper.

The signing flow usually uses [PSBT](/glossary/psbt). One cosigner builds the transaction, signs their part, passes it to the next, who adds their signature, and so on until the threshold is met. With hardware wallets and coordination tools like Sparrow, Nunchuk, or Specter, this is straightforward but more involved than single-sig.

When to use multisig: when the value justifies the operational complexity. For small balances, a well-backed-up single-sig hardware wallet is more secure than a multisig you'll fumble. For amounts you can't afford to lose and won't move daily, multisig is the right answer.
