---
title: "M-of-n"
slug: m-n
draft: false
shortDefinition: "A generic way to denote multisig, requiring M signatures out of N total possible signers (e.g., 2-of-3)."
keyTakeaways:
  - "General term for threshold signature setups"
  - "Allows flexible security policies based on participants' needs"
  - "Practical for corporate, family, or co-managed funds"
sources: []
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

M-of-N is the standard shorthand for threshold multisig: any M signatures out of N total cosigners are sufficient to spend. The two numbers tune two independent dials:

- M is the security threshold. Larger M means more cosigners must agree, harder to steal.
- N - M is the redundancy. The wallet survives loss of up to N - M cosigners without losing access.

Common configurations:

- 2-of-3: the personal-custody sweet spot. One key with you, one with a trusted backup location, one with a third party (lawyer, friend, custody service). Survives loss of any one. Steal one and you can't spend; steal two and you can.
- 3-of-5: institutional default. Survives loss of two, requires three to spend. Standard for corporate treasuries.
- 4-of-7 or higher: large federations and high-stakes custody. Liquid's functionary set is 11-of-15.

Legacy Bitcoin multisig (pre-Taproot, P2SH or P2WSH) hard-caps at 15 cosigners due to the `OP_CHECKMULTISIG` opcode design. Taproot script-path spends with MAST trees can go much higher. Taproot key-path spends with MuSig2 / FROST aggregation make the M-of-N structure invisible on-chain entirely.

The right choice is rarely "more cosigners." Each cosigner is a real human or device, and each is a failure mode: lost device, dead person, forgotten passphrase, miscommunication during signing. Most retail users do better with 2-of-3 than with anything fancier. Institutional setups generally settle on 3-of-5 unless there's a regulatory reason to go higher.
