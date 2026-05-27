---
title: "Bitcoin Script"
slug: bitcoin-script
draft: false
shortDefinition: "The built-in scripting language defining spending conditions (e.g., single-sig, multisig) in Bitcoin transactions."
keyTakeaways:
  - "Specifies the conditions to spend BTC outputs"
  - "Stack-based and deliberately limited for security"
  - "Can form complex contracts with features like multisig or time locks"
sources: []
relatedTerms:
  - adapter-signature
  - p2sh
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bip-342-tapscript
  - bitcoin-pizza-day
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - merkleized-abstract-syntax-tree-mast
  - op-code-operation-code
  - opreturn
  - script
  - scriptless-scripts
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Script"
liveWidget: ~
---

Bitcoin Script is the stack-based language that defines the spending conditions on every Bitcoin [UTXO](/glossary/utxo-unspent-transaction-output). Every output has a **scriptPubKey** (the lock); every input must provide a **scriptSig** or **witness** (the key) that satisfies it.

Script is **intentionally not Turing-complete**. There are no loops. There are no jumps. Execution always terminates. This is a deliberate choice: a more expressive language would mean unbounded execution times, which would mean an attack vector. Bitcoin trades expressiveness for safety. If you want full programmability, that lives off-chain (in tools that compose Script primitives) or on a separate layer like [Lightning](/glossary/lightning-network).

What Script can do natively:

- **Pay to a single public key.** The original P2PK format.
- **Pay to a public-key hash (P2PKH).** Hash the pubkey down to an address; reveal the pubkey only when spending.
- **Multisig.** N-of-M spending - require signatures from any N of M specified keys (legacy "OP_CHECKMULTISIG" or modern Taproot equivalents).
- **Time locks.** Require a transaction be valid only after a specific block height or wall-clock time ([CLTV](/glossary/checklocktimeverify-cltv), [CSV](/glossary/checksequenceverify-csv)).
- **Hash locks.** Require revealing a value that hashes to a specific commitment - the foundation of [HTLCs](/glossary/htlc-hashed-time-locked-contract) for Lightning.
- **Arbitrary combinations of the above**, especially under [Taproot](/glossary/taproot) and Tapscript.

Most Bitcoin users never write Script directly. Wallets construct standard script templates (P2PKH, P2WPKH, P2TR) automatically. But understanding Script is the doorway to understanding what kinds of Bitcoin contracts are possible - and which proposals (covenants, vault scripts, CTV) might or might not be added in future soft forks.

See [Taproot](/glossary/taproot) for the modern script environment, and [HTLC](/glossary/htlc-hashed-time-locked-contract) for one of Script's most useful real-world composites.
