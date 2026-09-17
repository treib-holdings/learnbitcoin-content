---
title: "OP_CHECKSIGADD"
slug: op-checksigadd
draft: false
published: "2026-09-17"
shortDefinition: "The Tapscript opcode that replaced OP_CHECKMULTISIG. Each public key gets its own signature check, a counter goes up by one per valid signature, and a final comparison enforces the threshold. Built so that Schnorr signatures can be verified in batches."
keyTakeaways:
  - "Opcode 0xba (186), defined in BIP-342; OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY are disabled in Tapscript and fail if executed"
  - "A k-of-n script reads <key1> CHECKSIG <key2> CHECKSIGADD ... <keyn> CHECKSIGADD k NUMEQUAL, and the witness supplies a signature or an empty slot for every key"
  - "OP_CHECKMULTISIG could not say which signature matched which key, so a verifier could not batch its checks; CHECKSIGADD fixes that and raises the key limit from 20 to 999"
sources:
  - { label: "BIP-342 - Validation of Taproot Scripts", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "Bitcoin Optech Newsletter #201 - why OP_CHECKMULTISIG is incompatible with batch verification (2022)", url: "https://bitcoinops.org/en/newsletters/2022/05/25/" }
  - { label: "Bitcoin Core source - src/script/interpreter.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/interpreter.cpp" }
relatedTerms:
  - bip-342-tapscript
  - script-path-spend
  - multisig
  - schnorr-signature
  - bip-340
  - taproot
  - op-success
  - op-code-operation-code
liveWidget: ~
---

Legacy Bitcoin script does [multisig](/glossary/multisig) with one opcode, `OP_CHECKMULTISIG`, which takes a pile of keys, a pile of signatures, and a threshold, and works out which signature goes with which key by trial. That design has a flaw that only mattered once Schnorr signatures arrived: because the script never states the pairing, a verifier cannot line up key, message, and signature ahead of time, and batch verification needs exactly that. Pieter Wuille explained the problem in a 2022 Optech Q and A, and [BIP-342](/glossary/bip-342-tapscript) had already designed around it.

Tapscript disables `OP_CHECKMULTISIG` outright; executing it fails the script the way `OP_RETURN` does. In its place is `OP_CHECKSIGADD`, opcode 0xba. It pops a public key, a number, and a signature. If the signature is empty, it pushes the number back unchanged. If the signature is valid for that key, it pushes the number plus one. If the signature is present and invalid, the script fails. That is the whole opcode; it is a one-byte shorthand for rotate, swap, check, and add.

A k-of-n policy is then written as a chain. The first key uses a plain `OP_CHECKSIG`, each further key uses `OP_CHECKSIGADD`, and the script ends by comparing the count with k:

```
<key1> OP_CHECKSIG <key2> OP_CHECKSIGADD <key3> OP_CHECKSIGADD 2 OP_NUMEQUAL
```

The witness has to supply something for every key, either a signature or an empty element, in reverse order. Every check is therefore an explicit key-signature pair, which is what batching needs. Because the count lives on the stack, the practical ceiling on keys became the 1,000-element stack limit rather than the old cap of 20; Bitcoin Core's descriptor for these scripts, `multi_a`, allows up to 999.

BIP-342 notes that this is not always the cheapest way to express a threshold under [Taproot](/glossary/taproot). For small thresholds it can be better to give each valid combination of signers its own leaf holding a single aggregated key, which keeps the number of keys and the fact of a threshold off the chain entirely. The opcode is for the cases where the tree of combinations would be too large.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the rest of what Tapscript changed.
