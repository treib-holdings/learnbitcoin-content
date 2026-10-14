---
title: "Key Rotation"
slug: key-rotation
draft: false
updated: "2026-10-15"
shortDefinition: "Regularly replacing or generating new cryptographic keys to minimize exposure if an old key is compromised."
keyTakeaways:
  - "Helps mitigate risks if a key is compromised or leaked"
  - "Avoids tying too many transactions to a single address"
  - "Standard practice in enterprise key management, where every key gets a cryptoperiod"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10 Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: a system for deriving a tree of keypairs from a single seed (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "NIST - SP 800-57 Part 1 Rev. 5, Recommendation for Key Management, section 5.3: a cryptoperiod is the time span during which a specific key is authorized for use; limiting it limits the amount of exposure if a single key is compromised (May 2020)", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf" }
  - { label: "bitcoin.org - Android Security Vulnerability alert: key rotation is necessary, generating a new address with a repaired random number generator and sending all the money in your wallet back to yourself; do not send bitcoins back to your old insecure addresses (11 August 2013)", url: "https://bitcoin.org/en/alert/2013-08-11-android" }
  - { label: "Bitcoin Core - sendall RPC (29.0.0): spend the value of all confirmed UTXOs and unconfirmed change in the wallet to one or more recipients (accessed 2026-10-14)", url: "https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/sendall/" }
relatedTerms:
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - key-generation-ceremony
  - key-split
  - key-wiping
  - paper-wallet
  - security
  - stealth-address
liveWidget: ~
---

"Key rotation" has two distinct meanings in Bitcoin, and conflating them is a common source of confusion:

- Address rotation: using a fresh address for every receive. HD wallets do this automatically, and the keys for each address are derived from the same master seed. The seed itself doesn't rotate. This is privacy hygiene, not security rotation; the whitepaper recommended it in 2008 and HD wallets made it free.

- True key rotation: moving funds from one set of keys to a brand new set, then destroying or retiring the old keys. This is what corporate security policy means by "rotate the keys": NIST's key-management guidance gives every key a cryptoperiod, partly to limit the exposure if a single key is compromised. In Bitcoin it's a deliberate, manual operation: spend everything to fresh addresses derived from a new seed (Bitcoin Core's `sendall` RPC does the sweep in one call).

True key rotation makes sense when:

- A cosigner in a multisig leaves and you don't want them holding even a now-insufficient share of the quorum.
- You suspect a key has been compromised but aren't sure (cold backup that was briefly exposed, for example).
- A long-running setup has accumulated enough operational history that you'd rather start fresh than audit every past touchpoint.

The textbook case was the August 2013 Android random-number bug. bitcoin.org's alert said "key rotation is necessary", told users to generate new addresses with a repaired generator and send all their coins back to themselves, and warned them not to send anything back to the old addresses.

For most individual users, periodic key rotation in this stronger sense is overkill. The seed sitting in your hardware wallet is not at higher risk this year than it was last year. Address rotation (automatic) handles the privacy story; rotating the underlying seed without cause just introduces opportunities for human error during the migration.
