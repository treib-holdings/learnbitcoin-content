---
title: "P2PK (Pay to Public Key)"
slug: p2pk-pay-public-key
draft: false
updated: "2026-10-15"
shortDefinition: "An older script type locking coins directly to a public key, mostly replaced by P2PKH."
keyTakeaways:
  - "Locks funds to a raw public key, not a key hash"
  - "Visible in Satoshi's early mined blocks but now uncommon"
  - "Less private and flexible than current script forms"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 main.cpp (the first commit in the Bitcoin Core repository, August 2009): the genesis block and every coinbase reward from the built-in miner pay a public key followed by OP_CHECKSIG, and the client uses the same script for payments sent to an IP address and for its own change", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/main.cpp" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 script.cpp: the two standard templates are 'sender provides pubkey, receiver adds signature' (P2PK) and the 'short account number' form, 'sender provides hash of pubkey, receiver provides signature and pubkey' (P2PKH)", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/script.cpp" }
  - { label: "mempool.space - the genesis block's coinbase transaction (API): a single 50 BTC output of type p2pk, a 65-byte public key followed by OP_CHECKSIG, with no address field", url: "https://mempool.space/api/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" }
  - { label: "mainnet-observer - Output Types by Count (daily CSV read October 14, 2026): P2PK was 99.5% of outputs created in 2009, 30% in 2010, 2.5% in 2011, and rounds to 0% in 2026", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "Sergio Lerner - The Return of the Deniers and the Revenge of Patoshi (April 2019): about 22,000 blocks, close to 1.1M BTC, 99.9% of Patoshi blocks unspent", url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root): P2PK outputs ('e.g. Satoshi's coins, CPU miners') are fundamentally vulnerable to long-exposure quantum attacks, which give an attacker unlimited time as long as funds remain in the output; its table gives P2PK's address prefix as 'Varies' and a hex public key as the example", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "Bitcoin Core - src/script/solver.cpp: a P2PK script is a 65- or 33-byte public key followed by OP_CHECKSIG, still recognized by the script solver as output type 'pubkey'", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/solver.cpp" }
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

P2PK - "Pay to Public Key" - is the script format Bitcoin's earliest blocks used. It locks an output to a raw [public key](/glossary/public-key) (not a hash of one), and unlocks via a signature over the spending transaction.

Notable history:

- **Used in the [genesis block](/glossary/genesis-block).** Satoshi's first 50 BTC coinbase output is a P2PK: a 65-byte public key followed by `OP_CHECKSIG`. The format also dominates the chain's first year; more than 99% of the outputs created in 2009 were P2PK.
- **Used by Satoshi's early mining.** The original client paid every coinbase reward to a raw public key, so the roughly 22,000 early blocks that researcher Sergio Lerner attributes to Satoshi (close to 1.1M BTC) sit at P2PK outputs, and 99.9% of them have never been spent.
- **Faded during 2010.** Bitcoin addresses, which lock to a key hash ([P2PKH](/glossary/p2pkh-pay-public-key-hash)), were part of the first release too; Satoshi's code calls them the "short account number" form. The original client used P2PK for coinbase rewards, for payments sent to an IP address, and for its own change. As coins started changing hands by address, P2PK fell from 99.5% of new outputs in 2009 to 30% in 2010 and 2.5% in 2011.

What P2PK has against it:

- **Public key visible on-chain immediately.** Defeats the [quantum-defense-in-depth](/glossary/post-quantum-bitcoin) that hash-based addresses provide. The public key is on chain from output creation, meaning P2PK outputs are exposed to a future [Shor's-algorithm-capable](/glossary/shors-algorithm) quantum computer for as long as the coins sit there, with nothing protecting them in the meantime.
- **Bigger outputs.** A 33-byte compressed pubkey (or the 65-byte uncompressed kind the early blocks used) is larger than a 20-byte hash.
- **No address format.** P2PK never got a checksummed address; explorers show the output as the public key itself in hex. Easy to fat-finger.

P2PK outputs are still spendable - Bitcoin Core still recognizes the script type - but wallets stopped creating them long ago: P2PK rounds to 0% of new outputs in 2026. They mostly live on as a historical artifact and a vector for academic curiosity. The Satoshi-era P2PKs, in particular, come up in every quantum discussion: BIP 360 names "Satoshi's coins" as its first example of exposed outputs.

See [P2PKH](/glossary/p2pkh-pay-public-key-hash) for the format that replaced it.
