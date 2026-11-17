---
title: "Hardware Wallet"
slug: hardware-wallet
draft: false
updated: "2026-11-17"
shortDefinition: "A physical device that stores private keys offline and signs transactions in a secure environment."
keyTakeaways:
  - "Keeps keys off internet-connected computers, where malware could copy them"
  - "User verifies transaction details on a secure screen"
  - "A middle ground between pure paper wallets and online wallets"
sources:
  - { label: "BIP-174 - Partially Signed Bitcoin Transaction Format (lets offline signers such as air-gapped wallets and hardware wallets sign without direct access to the UTXO set and without risk of being defrauded)", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "Bitcoin Optech - Hardware wallet interface (HWI): a library and command-line tool that talks to hardware wallets using PSBTs and output script descriptors", url: "https://bitcoinops.org/en/topics/hwi/" }
  - { label: "Bitcoin Wiki - Hardware wallet (keys cannot be transferred out of the device in plaintext; malware on the PC can still swap the recipient address, so confirm it out of band)", url: "https://en.bitcoin.it/wiki/Hardware_wallet" }
  - { label: "Dmitry Nedospasov, Thomas Roth, Josh Datko - wallet.fail: hacking the most popular cryptocurrency hardware wallets, 35C3 (December 2018; some bugs fixable in firmware, some needing new hardware)", url: "https://media.ccc.de/v/35c3-9563-wallet_fail" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic wallets (the phrase is converted into the seed that regenerates every key)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Coinkite - Coldcard security advisory (published July 30, 2026): a firmware bug weakened seed generation, and attackers regenerated the keys offline and stole funds; updating the firmware does not change or repair an existing seed", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "Coinkite - technical backgrounder on the flaw (July 30, 2026): the Coldcard source code had always been open and publicly available; the faulty generator entered seed generation in March 2021", url: "https://blog.coinkite.com/entropy-technical-backgrounder/" }
  - { label: "Trail of Bits - 10 Rules for the Secure Use of Cryptocurrency Hardware Wallets (November 27, 2018): buy the device from a trusted source, preferably direct from its maker, new and unopened; never use a pre-initialized device or pre-selected recovery words", url: "https://blog.trailofbits.com/2018/11/27/10-rules-for-the-secure-use-of-cryptocurrency-hardware-wallets/" }
  - { label: "BitBox - Check your BitBox before first use (updated November 6, 2026): never use recovery words supplied with a device to create a new wallet; do not set up a device you suspect has been tampered with", url: "https://support.bitbox.swiss/en_US/verifying-the-bitbox02-packaging" }
  - { label: "Singapore Police Force - advisory of October 28, 2026: hardware wallets bought from some retail stores in Singapore contained malicious hardware components that could capture recovery phrases; at least two cases since September 10, 2026, with losses of about S$3.5 million", url: "https://www.police.gov.sg/Media-Hub/News/2026/10/20261028_police_advisory_on_tampered_cryptocurrency_hardware_wallets" }
  - { label: "FBI - public service announcement of December 21, 2022: criminals buy search advertisements that imitate real companies; type the company's address into the browser yourself", url: "https://www.ic3.gov/PSA/2022/PSA221221" }
  - { label: "Sparrow Wallet - Best practices: a single-key wallet for amounts up to US$100,000 and multisig above that; multisig takes more time and resources", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "BitBox - The pitfalls of multisig when using hardware wallets (December 3, 2019, archived copy): a multisig setup can end up less secure than an ordinary single-key wallet", url: "https://web.archive.org/web/20250719224348/https://blog.bitbox.swiss/en/the-pitfalls-of-multisig-when-using-hardware-wallets/" }
relatedTerms:
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - security
  - wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Hardware_wallet"
liveWidget: ~
---

A hardware wallet is a small, dedicated device whose only job is to store [private keys](/glossary/private-key) and sign [transactions](/glossary/transaction). The keys are generated inside the device and never leave it. When you want to spend, the unsigned transaction is sent in (as a [PSBT](/glossary/psbt), the standard format for exactly this hand-off), you verify the destination and amount on the device's built-in screen, you confirm, and a signed transaction comes back out. Your laptop never sees the key.

The threat model this defends against: a fully compromised PC. If your computer is running malware that watches every keystroke and reads every file, a hot wallet's keys are toast - the attacker can just sign transactions to themselves at will. With a hardware wallet, the malware can show you a fake "Send to your friend" screen on the PC, but when the actual transaction goes to the hardware device, the device shows you the *real* destination address and amount on its trusted screen. You see the malware's substituted address, you reject the transaction, you're safe. That only works if you actually read the device screen and compare it with an address you got through a channel the malware doesn't control; the device can show you where the coins are going, not where you meant them to go.

What to look for when picking one:

- **Open-source firmware.** Closed-source signing devices ask you to trust the manufacturer's word that the device does what it claims. Open firmware lets the broader community audit the code that runs on the chip. Several mature open-source signing devices are widely available; prefer them.
- **Bitcoin-only firmware, if offered.** Multicoin firmware adds attack surface for support you'll never use. A simpler codebase is an easier-to-audit codebase.
- **An [air-gapped](/glossary/air-gapped) workflow, ideally.** Devices that sign via QR code or microSD card never connect to a computer at all - even via USB - which closes off another category of attacks.
- **Active development and a credible security history.** Hardware-wallet vulnerabilities are routinely discovered and patched; you want a vendor that ships fixes promptly and publicly.

None of these is a guarantee. In July 2026 Coinkite disclosed that its Coldcard devices had been making weak seed words since 2021, through a firmware bug in the step that generates them, and that attackers had worked out the keys and stolen funds. The source code of that firmware had always been public, by the maker's own account, and the bug sat in it for more than five years. Fixed firmware followed, but in the maker's words updating it "does not change or repair an existing seed": owners of affected seeds had to make new ones and move their coins. That move is made on the device, by an ordinary payment to the new wallet. Nobody who offers to check or migrate a seed needs the words, old or new.

Recommendations rot fast, so this page recommends no products. The dated [wallets page](/rabbit-hole/wallets) links to each maker's own website. Follow that link or type the address yourself, and never buy from a search result or an advertisement. Buy the device from its maker, new and unopened. One that arrives already set up, or with recovery words supplied in the box, is not to be used: the words have to be made by your device, in front of you.

A hardware wallet is not magic. The [seed phrase](/glossary/seed-phrase) it generates is still the master backup; if someone gets that phrase, they don't need the device. The device's job is to keep the keys offline during day-to-day use, not to replace good phrase hygiene.

A hardware wallet matters once you hold more than you would be happy to keep on a phone. For much larger amounts many advisers suggest [multisig](/glossary/multisig), though not all, and it is much harder to manage: see [Multisig and Inheritance](/rabbit-hole/multisig-and-inheritance). For devices, see the [wallets page](/rabbit-hole/wallets).
