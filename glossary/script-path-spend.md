---
title: "Script-path Spend"
slug: script-path-spend
draft: false
published: "2026-09-17"
shortDefinition: "Spending a Taproot output by revealing one leaf of its script tree, proving with a control block that the leaf was committed in the output key, and satisfying that script under Tapscript rules. The other leaves stay hidden."
keyTakeaways:
  - "The witness holds the script's inputs, then the leaf script, then a control block of 33 + 32m bytes: leaf version and parity, the internal key, and m sibling hashes up to the root"
  - "A node recomputes the leaf hash, walks the Merkle path with siblings in sorted order, recomputes the tweak from the internal key and root, and checks it equals the output key before running the script"
  - "It reveals one script, the internal key, and the leaf's depth; it hides every other branch; and it signals that the key path was not used, usually because the parties did not agree"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "Bitcoin Core source - src/script/interpreter.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/interpreter.cpp" }
  - { label: "mainnet.observer - P2TR key-path versus script-path inputs", url: "https://mainnet.observer/charts/inputs-p2tr-paths/" }
relatedTerms:
  - taproot
  - key-path-spend
  - control-block
  - taproot-tweak
  - bip-342-tapscript
  - merkleized-abstract-syntax-tree-mast
  - nums-point
  - op-checksigadd
  - op-success
liveWidget: ~
---

The script path is the second door on a [Taproot](/glossary/taproot) output, the one used when the [key path](/glossary/key-path-spend) is not available: the participants could not agree, a timelock branch is being exercised, or the output was built with an unspendable internal key so that scripts are the only way in.

The witness for a script-path spend has three parts. First come whatever the script needs, such as one or more signatures. Then the leaf script itself, in full. Last comes the [control block](/glossary/control-block), which is the proof that this script was one of the leaves committed to when the output was created. The control block's first byte holds the leaf version and one bit for the parity of the output key's Y coordinate, the next 32 bytes are the internal key, and the rest is the Merkle path: one 32-byte sibling hash per level between the leaf and the root, so 33 + 32m bytes for a leaf at depth m, with depth capped at 128.

Verification runs the construction backwards. The node hashes the revealed script with its leaf version to get a leaf hash, combines that with each sibling in the path, always hashing the smaller of the two first so no direction markers are needed, and arrives at a root. It then computes the [tweak](/glossary/taproot-tweak) from the internal key and that root and checks that the result, with the recorded parity, equals the output key. If it does, the script is genuine, and the node executes it under [Tapscript](/glossary/bip-342-tapscript) rules. If the leaf version is not the Tapscript one, the script passes unconditionally, a slot reserved for a future script language.

What the chain learns from a script-path spend is one script, the internal key, and the leaf's depth. What it does not learn is the rest of the tree: BIP-341's own five-leaf example spends one leaf by revealing three hashes and nothing about the other four scripts. The depth does leak a little about the tree's shape, which is why the BIP suggests wallets vary their tree layouts. And the choice of door is itself information. Using the script path announces that the key path was not used, and the usual reason is that the people behind the internal key did not all sign.

Script-path spends were about one in ten Taproot spends in the 30 days to 17 September 2026, though they were nearly half in the first quarter of that year, with one large exception. During the inscription waves of 2023 and early 2024 they were the majority, because inscriptions store their data inside a leaf script that is revealed exactly this way.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the construction and what each door reveals.
