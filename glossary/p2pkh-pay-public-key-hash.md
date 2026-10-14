---
title: "P2PKH (Pay to Public Key Hash)"
slug: p2pkh-pay-public-key-hash
draft: false
updated: "2026-10-15"
shortDefinition: "The dominant legacy script format (addresses starting with '1') that locks BTC to a hashed public key."
keyTakeaways:
  - "Most recognizable format for legacy BTC addresses"
  - "Requires the spender's public key and signature to unlock"
  - "Less fee-efficient than SegWit or Taproot scripts"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 script.cpp (the first commit in the Bitcoin Core repository, August 2009): the two standard templates are 'sender provides pubkey, receiver adds signature' (P2PK) and the 'short account number' form, 'sender provides hash of pubkey, receiver provides signature and pubkey' (P2PKH)", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/script.cpp" }
  - { label: "Bitcoin Core - src/script/solver.cpp: a P2PKH script is the 25-byte pattern OP_DUP OP_HASH160 <20 bytes> OP_EQUALVERIFY OP_CHECKSIG; a P2PK script carries a 65- or 33-byte public key", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/solver.cpp" }
  - { label: "Bitcoin 0.6.0 release notes: new wallets created with this version use 33-byte 'compressed' public keys instead of 65-byte public keys, resulting in smaller transactions", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.6.0.md" }
  - { label: "mainnet-observer - Output Types by Count (daily CSV read October 14, 2026): P2PKH was 0.5% of outputs created in 2009, 70% in 2010, 97.5% in 2011, 99.5% in 2014, 80% in 2017 and 5.7% in 2026", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "BIP 141 - Segregated Witness: compared with a traditional P2PKH output, the P2WPKH equivalent occupies 3 less bytes in the scriptPubKey and moves the signature and public key from scriptSig to witness", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core 0.20.0 release notes (June 3, 2020): the wallet now uses bech32 addresses by default", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root): P2PKH (prefix 1, example 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa) is not vulnerable to long-exposure quantum attacks until a spend reveals the public key; reused outputs are", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Invoice_address"
liveWidget: ~
---

P2PKH - "Pay to Public Key Hash" - is the original mainstream Bitcoin script format. Its [addresses](/glossary/address) start with `1` (e.g. `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`).

The locking script is straightforward: "to spend this UTXO, provide a [public key](/glossary/public-key) that hashes to a specific 20-byte value, and a valid signature over the spending transaction." The recipient publishes only the hash (the address); the actual public key isn't revealed until the funds are spent.

P2PKH shipped in Bitcoin's first release alongside [P2PK](/glossary/p2pk-pay-public-key); Satoshi's code calls it the "short account number" form. Two reasons it won out once coins started changing hands (P2PKH went from under 1% of new outputs in 2009 to 70% in 2010 and 97.5% in 2011):

- **Shorter addresses.** A hash is 20 bytes; the public keys of the era were 65 bytes (the 33-byte compressed form arrived with Bitcoin 0.6.0). Easier to copy, share, and read aloud.
- **Defense-in-depth.** If the underlying elliptic-curve cryptography were ever broken (the [post-quantum scenario](/glossary/post-quantum-bitcoin)), funds at unspent P2PKH addresses would still be protected by the hash. Public keys only get exposed when the user spends. Reused addresses lose this protection on the first spend.

P2PKH has been Bitcoin's workhorse for over a decade. It's still fully supported and fully secure, but it's more expensive in fees than newer formats. Modern wallets default to [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) (SegWit, `bc1q...`) or [P2TR](/glossary/taproot) (Taproot, `bc1p...`) for new receives; Bitcoin Core's wallet switched its default to `bc1q` in 2020. P2PKH's share of new outputs fell from over 99% in 2014 to under 6% in 2026, so the supply is slowly migrating as old outputs get spent into newer formats.

See [Address](/glossary/address) for the full lineup of address formats coexisting on Bitcoin today.
