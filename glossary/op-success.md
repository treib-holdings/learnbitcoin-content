---
title: "OP_SUCCESS"
slug: op-success
draft: false
published: "2026-09-17"
shortDefinition: "A set of opcode values that Tapscript reserves for future upgrades by making any script containing one succeed unconditionally today. Using one now loses funds; giving one a meaning later needs only a soft fork. The covenant proposals target these slots."
keyTakeaways:
  - "Defined in BIP-342 as the byte values 80, 98, 126 to 129, 131 to 134, 137 to 138, 141 to 142, 149 to 153, and 187 to 254; the check runs before execution and covers unexecuted branches too"
  - "Unlike the older OP_NOP reservations, an OP_SUCCESS can be redefined to do anything, including writing to the stack, because a script that currently passes cannot be made to fail by a new rule"
  - "OP_CAT (BIP-347) proposes to redefine OP_SUCCESS126 and OP_CHECKSIGFROMSTACK (BIP-348) OP_SUCCESS204; as of 2026 none has activated, and Bitcoin Core does not relay transactions that use any of them"
sources:
  - { label: "BIP-342 - Validation of Taproot Scripts", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "BIP-347 - OP_CAT in Tapscript", url: "https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" }
  - { label: "BIP-348 - CHECKSIGFROMSTACK", url: "https://github.com/bitcoin/bips/blob/master/bip-0348.md" }
  - { label: "Bitcoin Core source - src/script/script.cpp (IsOpSuccess)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/script.cpp" }
relatedTerms:
  - bip-342-tapscript
  - script-path-spend
  - soft-fork
  - covenants
  - op-code-operation-code
  - taproot
  - bip-bitcoin-improvement-proposal
liveWidget: ~
---

Bitcoin's script has always kept a few opcode values unused so that a later [soft fork](/glossary/soft-fork) could give them meaning. The old reservations were the `OP_NOP` opcodes, which do nothing, and two of them became `OP_CHECKLOCKTIMEVERIFY` and `OP_CHECKSEQUENCEVERIFY`. The limit of that approach is that a redefined NOP can only look at the stack and fail; it cannot change it, because a rule that changed what a script computed would break scripts that were valid before.

[Tapscript](/glossary/bip-342-tapscript) reserves space differently. A list of opcode values, over eighty of them, are designated OP_SUCCESS. If any one of them appears anywhere in a leaf script, the script is valid, full stop, before a single opcode runs and regardless of whether the branch containing it would ever execute. A future upgrade can then redefine one of these to do anything at all, read, write, or verify, because the only scripts it could affect are ones that were already passing unconditionally, and making an always-pass script sometimes fail is exactly what a soft fork is allowed to do.

The obvious consequence is spelled out in BIP-342: using an OP_SUCCESS today is insecure and leads to fund loss, since anyone who can reveal the leaf can spend the coin. It is safe to reserve them this way only because Taproot commits scripts inside the output key; nobody can inject one into a script they do not control. Bitcoin Core adds a belt to the braces by refusing to relay any transaction whose script uses one, so a mistake cannot propagate by accident.

These slots are where the covenant debate lives. [BIP-347](https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki) proposes to redefine OP_SUCCESS126 as `OP_CAT`, restoring an opcode Satoshi disabled in 2010. BIP-348 proposes OP_SUCCESS204 as `OP_CHECKSIGFROMSTACK`. Other proposals in the same family claim other values. As of September 2026 none had activated on mainnet, and the argument over whether and how they should is the one [The BIP Process](/rabbit-hole/bip-process) describes. When someone says a new opcode "just needs a soft fork," this reservation is the mechanism they mean.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the other upgrade hooks Tapscript left open.
