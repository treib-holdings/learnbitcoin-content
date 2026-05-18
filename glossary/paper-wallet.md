---
title: "Paper Wallet"
slug: paper-wallet
draft: false
shortDefinition: "A printed private key (and address) used for offline BTC storage. Secure if generated correctly but physically vulnerable."
keyTakeaways:
  - "Entire security depends on proper offline generation and key safeguarding"
  - "Physical damage or theft is a major risk"
  - "Largely supplanted by hardware wallets or more robust cold storage"
sources: []
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

A paper wallet is a [private key](/glossary/private-key) (and matching [address](/glossary/address)) printed onto paper - often as a QR code - and stored physically rather than digitally. Once the most common form of cold storage in 2012-2014; mostly obsoleted today.

The original appeal: no digital attack surface. A piece of paper can't be hacked over the internet, can't run malware, can't be remotely exfiltrated. Generate it offline, store it somewhere safe, you're done.

Why paper wallets fell out of favor:

- **Single-key fragility.** A paper wallet typically backs up *one* private key. Spend any portion of it, and you have to sweep the entire balance to a new address (because Bitcoin Script doesn't allow partial spends of a UTXO). Most "I lost BTC to paper wallet mistakes" stories trace back to people sending change to nowhere by misunderstanding this.
- **Generation hazards.** A paper wallet is only as good as the entropy used to generate it. Online "paper wallet generators" have repeatedly been backdoored; offline tools require careful air-gapping.
- **Physical fragility.** Paper burns, gets wet, fades, gets thrown out by mistake. The medium isn't archival.
- **No mature ecosystem.** Modern wallets don't import single-key paper wallets cleanly; you'll fight with sweeps, fee management, and compatibility.

The modern replacement is a [seed phrase](/glossary/seed-phrase) backup stored on metal (steel plates, washers, etched titanium), combined with a [hardware wallet](/glossary/hardware-wallet) for active use. Functionally similar to a paper wallet's air-gapped property, vastly better in every practical dimension.

If you find an old paper wallet, sweep it carefully (whole-UTXO, not partial), retire the address, and migrate to a modern HD setup. Don't generate new ones.
