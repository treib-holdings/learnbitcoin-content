---
title: "SIGHASH_ANYONECANPAY"
slug: sighashanyonecanpay
draft: false
shortDefinition: "A signature flag letting other participants add inputs to a transaction without invalidating the existing signature."
keyTakeaways:
  - "Isolates a signature to the signer's own inputs"
  - "Enables partial signing in multi-input transactions"
  - "Useful for coinjoin-like flows or flexible transaction construction"
sources: []
relatedTerms: []
liveWidget: ~
---

`SIGHASH_ANYONECANPAY` is a modifier flag (OR'd into `SIGHASH_ALL`, `SIGHASH_NONE`, or `SIGHASH_SINGLE`) that tells the signer "commit only to this input, not the other inputs." Anyone can add more inputs to the transaction afterward without invalidating your signature.

It enables patterns where multiple parties contribute to a shared transaction without trusting each other:

- Crowdfunding: a published partial transaction sets the recipient outputs; supporters each add an input signed with `SIGHASH_ALL | SIGHASH_ANYONECANPAY`. Once the inputs cover the outputs, anyone can broadcast.
- PayJoin (BIP 78) style flows, where sender and receiver each contribute inputs and the result looks like an ordinary transaction to outside observers.
- Fee-bumping in pre-Replace-by-Fee designs, though [Replace-by-Fee (RBF)](/glossary/replace-fee-rbf) and CPFP now handle this better.

It's a powerful flag with sharp edges. Sign with `SIGHASH_NONE | SIGHASH_ANYONECANPAY` and you've effectively signed "spend my UTXO however you want," which is rarely what anyone actually means. The safe default for ad-hoc construction is `SIGHASH_ALL | SIGHASH_ANYONECANPAY`: my input is committed, the outputs are fixed, the rest is open.
