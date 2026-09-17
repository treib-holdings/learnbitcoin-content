---
title: "Taproot Tweak"
slug: taproot-tweak
draft: false
published: "2026-09-17"
shortDefinition: "The step that folds a Taproot output's script tree into its key: hash the internal key and the tree's Merkle root, multiply by the curve's base point, and add the result to the internal key. The output key that lands on the chain commits to everything and reveals nothing."
keyTakeaways:
  - "Q = P + hash_TapTweak(P || merkle_root) * G, where P is the internal key and Q is the 32-byte key in the bc1p address; with no scripts, the hash is taken over P alone"
  - "The spender of the key path signs with the internal private key plus the tweak, so no separate proof is needed; the script path proves the tweak by revealing the internal key and a Merkle path"
  - "Even script-free outputs are tweaked, because an untweaked aggregate key lets one participant hide a script inside a key the others believe is plain"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Gregory Maxwell - Taproot: Privacy preserving switchable scripting, bitcoin-dev (2018)", url: "https://www.mail-archive.com/bitcoin-dev@lists.linuxfoundation.org/msg06673.html" }
  - { label: "Bitcoin Optech - Taproot topic", url: "https://bitcoinops.org/en/topics/taproot/" }
relatedTerms:
  - taproot
  - bip-341
  - x-only-public-key
  - key-path-spend
  - script-path-spend
  - control-block
  - nums-point
  - merkle-root
  - merkleized-abstract-syntax-tree-mast
liveWidget: ~
---

The tweak is the idea at the center of [Taproot](/glossary/taproot), and it is older than the BIP. Gregory Maxwell's 2018 mailing-list post described it in one line: take a public key, add to it a hash of the script you want to commit to, and publish the sum. The sum is an ordinary-looking key. Anyone holding the original private key can still sign for it, because they know the hash and can add the same value to their secret. Anyone who wants to use the script instead can reveal it, and the world can check that the published key really was the original key plus that hash.

[BIP-341](/glossary/bip-341) makes this exact. The internal key P is a 32-byte [x-only key](/glossary/x-only-public-key). The script tree, if there is one, is hashed down to a [Merkle root](/glossary/merkle-root). The tweak value is a tagged hash of P followed by that root, and the output key Q is P plus the tweak times the curve's base point:

```
t = hash_TapTweak(P || merkle_root)
Q = P + t*G
```

Q is what the output script holds and what the `bc1p` address encodes. Since Q is just a point, the chain cannot tell whether a root went into the hash or how large the tree behind it was.

Two details are easy to miss. First, an output with no script tree at all is still tweaked, with the hash taken over P alone. The BIP requires this because an untweaked key would let one participant in an aggregate key quietly bake a script path into the key while the others believed no script existed. Second, the signer of a [key-path spend](/glossary/key-path-spend) never proves anything about the tree; it simply signs with the private key for P plus t, negating the private key first if P's Y coordinate is odd. The proof only appears in a [script-path spend](/glossary/script-path-spend), where the [control block](/glossary/control-block) reveals P and a Merkle path, and a verifying node recomputes t and checks that it lands on Q.

The tweak is also why Taproot outputs are "always exposed" in post-quantum terms. Q is a public key, not a hash of one, so it is visible from the moment the output is created. BIP-341 accepted that on purpose, and the proposed post-quantum output type, [BIP-360](/glossary/bip-360), is essentially the same tree with the key path removed.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for the whole construction with a diagram.
