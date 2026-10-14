---
title: "Paper Wallet"
slug: paper-wallet
draft: false
updated: "2026-10-13"
shortDefinition: "A printed private key (and address) used for offline BTC storage. Secure if generated correctly but physically vulnerable."
keyTakeaways:
  - "Entire security depends on proper offline generation and key safeguarding"
  - "Physical damage or theft is a major risk"
  - "Largely supplanted by hardware wallets or more robust cold storage"
sources:
  - { label: "Bitcoin Wiki - Paper wallet: an obsolete and unsafe method popular between 2011 and 2016; change addresses are not handled; sweep the entire balance into a deterministic wallet", url: "https://en.bitcoin.it/wiki/Paper_wallet" }
  - { label: "MyCrypto - Disclosure: key generation vulnerability found on WalletGenerator.net, served code did not match GitHub from after 17 August 2018 until 23 May 2019 (24 May 2019)", url: "https://blog.mycrypto.com/disclosure--key-generation-vulnerability-found-on-walletgenerator-net---potentially-malicious-/" }
  - { label: "Bitcoin Wiki - BitcoinPaperWallet: sold in April 2018, later found returning 60 pre-generated keypairs hidden in a fake unit test", url: "https://en.bitcoin.it/wiki/BitcoinPaperWallet" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 9, Combining and Splitting Value: one output for the payment and one returning the change (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bitcoin Core 30.0 release notes - legacy wallets can no longer be created or loaded; importprivkey and the other legacy-only RPCs removed (10 October 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - address
  - bitcoin-inheritance-planning
  - key-rotation
  - key-split
  - key-wiping
  - mixing-service
sameAs:
  - "https://en.bitcoin.it/wiki/Paper_wallet"
liveWidget: ~
---

A paper wallet is a [private key](/glossary/private-key) (and matching [address](/glossary/address)) printed onto paper - often as a QR code - and stored physically rather than digitally. Popular from about 2011 to 2016; obsolete today.

The original appeal: no digital attack surface. A piece of paper can't be hacked over the internet, can't run malware, can't be remotely exfiltrated. Generate it offline, store it somewhere safe, you're done.

Why paper wallets fell out of favor:

- **Single-key fragility.** A paper wallet backs up *one* private key. Spend any portion of it and the whole coin moves, because a transaction spends a UTXO in full: the remainder lands in a [change output](/glossary/change-output) controlled by the wallet that signed, not back on the paper. Many "I lost BTC to a paper wallet" stories trace back to people spending part of one from a software wallet, assuming the rest was still on the paper, when it was sitting at a change address they never backed up.
- **Generation hazards.** A paper wallet is only as good as the entropy used to generate it. Online "paper wallet generators" have been backdoored more than once: WalletGenerator.net served key-generation code that did not match its published source from August 2018 until May 2019, and BitcoinPaperWallet.com was found handing out pre-generated keys after a 2018 change of ownership. Offline tools require careful [air-gapping](/glossary/air-gapped).
- **Physical fragility.** Paper burns, gets wet, fades, gets thrown out by mistake. The medium isn't archival.
- **No mature ecosystem.** Modern wallets are built around seed phrases, not loose keys. Redeeming a paper wallet means sweeping its single key into software that still understands the format; the Bitcoin Wiki records at least one case where a key-format change left funds stuck, and Bitcoin Core 30 (October 2025) removed the old `importprivkey` command along with legacy wallets.

The modern replacement is a [seed phrase](/glossary/seed-phrase) backup stored on metal (steel plates, washers, etched titanium), combined with a [hardware wallet](/glossary/hardware-wallet) for active use. Functionally similar to a paper wallet's air-gapped property, vastly better in every practical dimension.

If you find an old paper wallet, sweep it carefully (whole-UTXO, not partial), retire the address, and migrate to a modern [HD wallet](/glossary/hd-wallet-hierarchical-deterministic-wallet). Don't generate new ones.
