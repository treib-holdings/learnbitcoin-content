---
title: "M-of-n"
slug: m-n
draft: false
updated: "2026-10-09"
shortDefinition: "A generic way to denote multisig, requiring M signatures out of N total possible signers (e.g., 2-of-3)."
keyTakeaways:
  - "General term for threshold signature setups"
  - "Allows flexible security policies based on participants' needs"
  - "Practical for corporate, family, or co-managed funds"
sources:
  - { label: "BIP-11 - M-of-N Standard Transactions (2011; proposes standardness for up to 3 keys)", url: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): multisig outputs standard since v0.6.0", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "Bitcoin 0.6.0 release notes (30 March 2012): multisignature transactions become standard", url: "https://bitcoin.org/en/release/v0.6.0" }
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-387 - Tapscript Multisig Output Script Descriptors (multi_a, up to 999 keys)", url: "https://github.com/bitcoin/bips/blob/master/bip-0387.mediawiki" }
  - { label: "BIP-445 (Draft as of October 2026) - FROST Signing Protocol for BIP340 Signatures (t-of-n; MuSig2 for n-of-n)", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "Nick, Poelstra, Sanders - Liquid: A Bitcoin Sidechain (Blockstream whitepaper, 2020), 11-of-15 watchman multisig", url: "https://blockstream.com/assets/downloads/pdf/liquid-whitepaper.pdf" }
relatedTerms:
  - psbt
  - bitcoin-vault
  - fidelity-bond
  - green-address
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - musig
  - musig2
  - quorum-signatures
liveWidget: ~
---

M-of-N is the common shorthand for threshold multisig: any M signatures out of N total cosigners are sufficient to spend. BIP 11, written in 2011, used the same notation when it proposed making M-of-N multisig with up to three keys a "standard" transaction, one that nodes relay and miners include in blocks. Version 0.6.0 of the Bitcoin software (now Bitcoin Core) put that into effect in March 2012. M and N tune two independent dials:

- M is the security threshold. Larger M means more cosigners must agree, harder to steal.
- N - M is the redundancy. The wallet survives loss of up to N - M cosigners without losing access.

Common configurations:

- 2-of-3: the personal-custody sweet spot. One key with you, one with a trusted backup location, one with a third party (lawyer, friend, custody service). Survives loss of any one. Steal one and you can't spend; steal two and you can.
- 3-of-5: for groups and companies where more people should have a say. Survives loss of two, requires three to spend.
- 4-of-7 or higher: large federations and high-stakes custody. Blockstream's 2020 whitepaper for the [Liquid](/glossary/liquid-network) sidechain says the bitcoin backing Liquid is locked in an 11-of-15 multisig. Its 15 keys belong to "watchmen," the federation members who sign withdrawals from Liquid back to Bitcoin.

Pre-Taproot multisig uses `OP_CHECKMULTISIG`, which accepts at most 20 keys. In [P2SH](/glossary/p2sh) it tops out at 15 compressed keys, because the whole script has to fit in a single 520-byte data element. [P2WSH](/glossary/p2wsh-pay-witness-script-hash) avoids that limit and allows the full 20. Taproot script-path spends use [`OP_CHECKSIGADD`](/glossary/op-checksigadd) instead, which allows far more keys. Bitcoin Core's `multi_a` [descriptor](/glossary/output-descriptor) (BIP 387) supports up to 999.

Taproot key-path spends can make the M-of-N structure invisible on-chain entirely. [MuSig2](/glossary/musig2) does this when all N cosigners sign. FROST does it for any M of N; its Bitcoin spec is still a draft BIP as of October 2026.

The right choice is rarely "more cosigners." Each cosigner is a real human or device, and each is a failure mode: lost device, dead person, forgotten passphrase, miscommunication during signing. Most retail users do better with 2-of-3 than with anything fancier. For a company or group, 3-of-5 is a reasonable place to start; go higher only for a specific reason, such as more officers who must approve each spend.
