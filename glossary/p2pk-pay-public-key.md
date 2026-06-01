---
title: "P2PK (Pay to Public Key)"
slug: p2pk-pay-public-key
draft: false
shortDefinition: "An older script type locking coins directly to a public key, mostly replaced by P2PKH."
keyTakeaways:
  - "Locks funds to a raw public key, not a key hash"
  - "Visible in Satoshi's early mined blocks but now uncommon"
  - "Less private and flexible than current script forms"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - post-quantum-bitcoin
  - shors-algorithm
  - utxo-unspent-transaction-output
liveWidget: ~
---

P2PK - "Pay to Public Key" - is Bitcoin's original script format, used in the earliest blocks of the chain. It locks an output to a raw [public key](/glossary/public-key) (not a hash of one), and unlocks via a signature over the spending transaction.

Notable history:

- **Used in the [genesis block](/glossary/genesis-block).** Satoshi's first 50 BTC coinbase output is a P2PK. The format also dominates the first several thousand blocks.
- **Used by Satoshi's early mining.** Most of the ~1.1M BTC Satoshi mined sits at P2PK outputs.
- **Mostly abandoned by ~2010.** [P2PKH](/glossary/p2pkh-pay-public-key-hash) replaced it for new receives once the community recognized that revealing the public key only at spend time (rather than at receive time) was strictly better.

What P2PK has against it:

- **Public key visible on-chain immediately.** Defeats the [quantum-defense-in-depth](/glossary/post-quantum-bitcoin) that hash-based addresses provide. The public key is on chain from output creation, meaning P2PK outputs are exposed to a future [Shor's-algorithm-capable](/glossary/shors-algorithm) quantum computer with no migration window.
- **Bigger outputs.** A 33-byte compressed pubkey (or 65-byte uncompressed) is larger than a 20-byte hash.
- **Address ergonomics never developed.** P2PK was usually displayed as raw hex, not a checksummed address format. Easy to fat-finger.

P2PK outputs are still spendable - any Bitcoin Core node can validate them - but no wallet you'd want to use generates new P2PK addresses. They mostly live on as a historical artifact and a vector for academic curiosity. The Satoshi P2PKs, in particular, are the most-watched unspent outputs in cryptocurrency.

See [P2PKH](/glossary/p2pkh-pay-public-key-hash) for the format that replaced it.
