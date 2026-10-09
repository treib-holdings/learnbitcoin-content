---
title: "Be Your Own Bank"
slug: be-your-own-bank
draft: false
updated: "2026-10-09"
status: live
published: "2026-05-15"
order: 4
goDeeper: ["mt-gox-ftx-graveyard", "seed-backup-strategies", "key-space"]
estimatedMinutes: 35
tagline: "If your keys live on an exchange, you don't own Bitcoin. You own an IOU. This chapter teaches you to own actual Bitcoin."
prerequisites: ["how-bitcoin-works"]
relatedTerms: ["seed-phrase", "private-key", "hardware-wallet", "custodial-wallet", "address", "deterministic-wallet", "watch-only-wallet", "paper-wallet", "multisig", "shamir-secret-sharing", "hierarchical-multisig"]
legacyUrls: ["/be-your-own-bank"]
ogImage: "/diagrams/og/hd-wallet-tree.png"
ogImageAlt: "One seed, every address. A 12-word seed phrase at the top derives a master key, which deterministically derives every child key and address the wallet will ever use. Back up the seed once and the whole tree is recoverable forever."
sources:
  - { label: "BIP 39 - Mnemonic seed phrases, word checksum and the optional passphrase (Bitcoin Improvement Proposal)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP 32 - Hierarchical deterministic wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP 141 - a native SegWit (bc1q) address commits to the hash of a public key", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 84 - derivation scheme for native SegWit (P2WPKH) wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki" }
  - { label: "BIP 86 - derivation scheme for single-key Taproot (P2TR) wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
  - { label: "Trezor Safe 5 FAQ - Bitcoin-only firmware, secure element, 20-word SLIP-39 backup as the default, 12 or 24 words as a legacy option", url: "https://trezor.io/guides/trezor-devices/trezor-safe-5/trezor-safe-5-faqs" }
  - { label: "Trezor firmware changelog - first releases for Model One (2014), Model T (2018), Safe 3 (2023), Safe 5 (2024)", url: "https://trezor.io/learn/a/firmware-changelog" }
  - { label: "BlueWallet - a Bitcoin-only, free and open-source wallet", url: "https://bluewallet.io/" }
  - { label: "Keystone - Keystone 3 Pro product page (4-inch touchscreen, fingerprint authentication)", url: "https://keyst.one/shop/products/keystone-3-pro" }
  - { label: "Keystone 3 Pro firmware 1.7.4 release notes (October 2024) - BTC signing over a USB connection", url: "https://github.com/KeystoneHQ/keystone3-firmware/releases/tag/1.7.4" }
  - { label: "Keystone 3 Pro firmware 2.0.8 release notes (April 2025) - separate BTC Only firmware", url: "https://github.com/KeystoneHQ/keystone3-firmware/releases/tag/2.0.8" }
  - { label: "Blockstream - Jade is open source, for Bitcoin and Liquid, with a virtual secure element", url: "https://blockstream.com/jade/" }
  - { label: "Coinkite - Coldcard security advisory: affected firmware, fixed versions and migration steps (2026)", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "CoinDesk - Coldcard flaw drains 594 BTC in a 25-minute sweep (July 31, 2026)", url: "https://www.coindesk.com/tech/2026/07/31/major-bitcoin-wallet-flaw-drains-594-btc-in-25-minute-sweep" }
  - { label: "Jameson Lopp - metal seed backup stress tests (as of October 2026, 10 of 75 products got an F for heat)", url: "https://jlopp.github.io/metal-bitcoin-storage-reviews/" }
  - { label: "Bitcoin Core v31.1 - 10-minute block target (nPowTargetSpacing)", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core v31.1 (July 2026, the latest release as of October 2026) - verifymessage only accepts legacy (1...) addresses", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/common/signmessage.cpp" }
  - { label: "BIP 322 - generic signed messages; the original format only works for 1... addresses", url: "https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki" }
  - { label: "BIP 137 - message signatures for SegWit addresses", url: "https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" }
  - { label: "Mt. Gox - application for civil rehabilitation (February 28, 2014)", url: "https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf" }
  - { label: "Mt. Gox Rehabilitation Trustee - first repayments in bitcoin and Bitcoin Cash (July 5, 2024)", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "Bitcoin Privacy Best Practices (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/bitcoin-privacy-best-practices.pdf" }
  - { label: "12-word seed backup form (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/seed-backup-12-word.pdf" }
  - { label: "24-word seed backup form (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/seed-backup-24-word.pdf" }
---

> **Where you're going:** By the end of this chapter, you'll have generated a wallet you control, backed up the seed properly, received a real (small) Bitcoin transaction, and cross-checked it on a block explorer. You'll have done self-custody. Optional: do it for real.

## 1. The Promise You Make to Yourself

Up until this chapter, you've been *learning about* Bitcoin. From here on, you can *use* it - but only if you're willing to take on the responsibility that comes with sovereign money.

The bargain is this: **you, and only you, hold the keys. Nobody can take them. Nobody can freeze them. And nobody is going to help you if you lose them.**

That's not a marketing line. It's how the math works. A Bitcoin address is derived from a private key, by way of its public key. The private key is a 256-bit number. Whoever has the number can sign transactions that spend the coins. There is no second factor. There is no recovery email. There is no customer service.

This is the deal. This chapter is about taking it seriously without being scared of it.

## 2. Custodial vs Self-Custody

Most people who "own Bitcoin" don't, technically.

When you buy bitcoin on an exchange - Coinbase, Kraken, Binance, Cash App - the exchange holds the keys. You hold a number in their database that says "you are owed X bitcoin." It's an IOU. It looks like Bitcoin on your screen, but legally and technically it's a claim against the exchange.

This is fine for some uses (trading, beginners, very small amounts). It is **not Bitcoin's value proposition.** Custodial bitcoin can be frozen by the custodian, seized by a government, lost in a hack, lost in a bankruptcy, withheld for KYC reasons, or simply unavailable when their servers are down.

You can't have the properties from chapter 2 - *portable, scarce, sovereign* - and trust a third party with your keys. The whole point was to remove the third party.

**Self-custody** means you generate and hold the private keys yourself. Your wallet software does this - it generates a random number, derives the keys, and shows you addresses. The number lives on your device (and a backup), not in anyone's database.

The trade-off is symmetric: with custody comes risk (not your keys, not your coins), and with self-custody comes responsibility (lose your keys, lose your coins). Bitcoin lets you choose; most other systems don't even give you the option.

## 3. Keys, Not Coins

The mental shift that matters most: **you don't own coins. You own keys.**

Bitcoin doesn't exist as files on your computer. It exists as UTXOs (see chapter 3) on the global ledger. Your wallet doesn't "contain" bitcoin in any meaningful sense - it contains the keys that authorize spending specific UTXOs on the ledger.

This is why:
- A wallet on a hardware device with no internet can still "have" bitcoin
- You can have the same wallet open on multiple devices (they're showing the same UTXOs)
- Restoring a wallet on a new device brings back the same balance once the wallet has scanned the chain for your addresses (the chain is the truth; the device just reads it)

When you "back up your wallet," you're backing up the *keys* - specifically, the seed they're derived from. If you have the seed, you can reconstruct all the keys, on any device, forever.

<figure>
  <img src="/diagrams/hd-wallet-tree.svg" alt="A hierarchical deterministic wallet tree: a 12-word seed phrase at the top derives a master key, which in turn derives a practically unlimited sequence of child keys and addresses. Five sample bc1q addresses branch from the master key, with the implication that millions more follow the same derivation." />
  <figcaption>One seed encodes a deterministic tree of keys and addresses. Back up the seed once; the whole tree is recoverable forever.</figcaption>
</figure>

This is one of Bitcoin's most powerful properties and one of the easiest to underestimate.

## 4. The Seed Phrase

Modern Bitcoin wallets don't make you back up individual private keys. They give you a **seed phrase** - usually 12 or 24 English words.

It looks like this (don't use this one - it's a public example):

```
abandon abandon abandon abandon abandon abandon
abandon abandon abandon abandon abandon about
```

Those words encode a number. The number seeds a deterministic generator (defined in [BIP 39](/glossary/bip-39) and [BIP 32](/glossary/bip-32)) that produces every key and address your wallet will ever need. From one seed, you get a tree of millions of addresses. They're all derived; only one secret matters.

**A few facts that should change your behavior:**

- **Anyone with your seed phrase has your bitcoin.** There is no second factor. There is no recovery. There is no "but they'd need your password too" - a wallet's password or PIN only locks that one app or device, and the words restore the wallet anywhere without it. The one exception is an optional [passphrase](/glossary/mnemonic-password), sometimes called the "25th word," that is mixed into the seed. If you set one, back it up as carefully as the words, because the words alone open a different, usually empty, wallet.
- **12 vs 24 words.** Both are secure. 12 words = 128 bits of entropy; 24 words = 256 bits. Both are well beyond brute-force range. The choice is a matter of preference. (Defaults vary by device. As of October 2026, the Trezor Safe 5 defaults to a 20-word backup under a different standard, [SLIP-39](/glossary/shamir-secret-sharing), and offers 12 or 24 words as a legacy option.)
- **Never type your seed into a website. Never. Ever.** Not your wallet provider's site. Not a help page. Not anywhere. The only places the seed should live are on your wallet device and on physical backups *you* created.
- **Do not memorize it.** Brains forget seeds, even ones you were sure you'd remember. Steel does not.
- **Do not photograph it.** Phones back up to clouds. Clouds get breached.

The seed phrase is not a password. It is the *root* of your entire Bitcoin existence. Treat it accordingly.

## 5. Wallet Types - When to Use Each

A "wallet" is just software that manages keys. The categories matter more than the brands:

- **Hot wallet** - keys live on an internet-connected device (phone, laptop). Convenient. Higher attack surface. Best for small, working-balance amounts.
- **Cold wallet** - keys live on a device that's never connected to the internet. More effort to use. Much harder to compromise. Best for long-term holdings.
- **Hardware wallet** - a small dedicated device (pocket-sized, some no bigger than a USB stick) that holds keys and signs transactions, while a companion app on your phone or laptop handles everything else. The keys never leave the hardware. **This is the standard recommendation for any amount you'd be sad to lose.**
- **Paper wallet** - keys written on paper, no device at all. Cheap. Easy to mess up. We don't recommend it as a primary backup anymore (lots of subtle ways to get it wrong) but as a *secondary* backup of a seed, it's useful.
- **Multisig** - a wallet where spending requires multiple keys, often held in different places. Eliminates single-point-of-failure. The right answer for serious balances. We'll get to it in chapter 6.

**The right pattern for most people:**

- A hot wallet on your phone for small everyday amounts
- A hardware wallet for the rest
- A multisig setup once your stack justifies the complexity

You can mix and match. Wallets are just tools.

## 6. Picking Your First Wallet

We don't sell wallets. We don't take affiliate commissions. The names below are examples of what exists as of October 2026, not endorsements. Whatever you consider, check it against the "Why Bitcoin-only matters" and "What to avoid" notes further down.

<figure>
  <img src="/photos/hardware-wallet-ecosystem.jpg" alt="Four Bitcoin hardware wallets from four different vendors on a light wood surface, left to right: Trezor Safe 5 (vertical touchscreen with secure element), Blockstream Jade (compact stick with a small color screen and a select button), Coldcard Mk4 (transparent case showing the circuit board and physical numeric keypad), and Keystone 3 Pro (large 4-inch touchscreen, shown on its side, with fingerprint sensor, signing mostly by QR code). Four different design philosophies for the same problem: keeping a private key off an internet-connected device." />
  <figcaption>The hardware wallet ecosystem. Four vendors, four design philosophies, one job: keep the private key off the internet.</figcaption>
</figure>

**Free, open-source mobile wallets (hot, beginner-friendly), for example:**
- **BlueWallet** (iOS, Android) - Bitcoin-only, open source

**Hardware wallets (cold, serious balances), for example:**
- **Trezor Safe 5** - multi-coin by default, also sold with Bitcoin-only firmware, which any Safe 5 can run

<figure>
  <img src="/photos/trezor-safe-5-pin.jpg" alt="The Trezor Safe 5 hardware wallet powered on, displaying its scrambled PIN entry screen. The number positions are randomized on each unlock to prevent shoulder-surfing and smudge-pattern attacks. The device sits on dark leather, with the embossed Trezor lock icon visible below the screen." />
  <figcaption>Trezor Safe 5 in PIN entry. Numbers shuffle on every unlock - shoulder-surfing and smudge attacks don't work when the layout changes.</figcaption>
</figure>

- **Keystone 3 Pro** - multi-coin by default, with a separate Bitcoin-only firmware; signs mostly by QR code, though it can also connect over USB to some wallet apps; fingerprint sensor, large 4-inch touchscreen

<figure>
  <img src="/photos/keystone-3-pro-box.jpg" alt="The Keystone 3 Pro hardware wallet resting on its side on its blue retail packaging. The device's 4-inch touchscreen is dark; the box shows the Keystone wordmark and product name. Light wood surface in the background." />
  <figcaption>Keystone 3 Pro arrives in this box. It has a 4-inch touchscreen and signs mostly by QR code, though it can also connect to some wallet apps over USB.</figcaption>
</figure>

- **Jade** by Blockstream - open source, supports only Bitcoin and Blockstream's [Liquid](/glossary/liquid-network) sidechain

<figure>
  <img src="/photos/jade-unlock.jpg" alt="The Blockstream Jade hardware wallet powered on, displaying its unlock screen. The compact device shows 'Unlock Jade' on a small color screen, with status indicators for initialization and firmware version. The JADE wordmark is embossed on the side." />
  <figcaption>Blockstream Jade at unlock. Small color screen and a select button. Instead of a secure-element chip, Jade relies on a PIN server that Blockstream calls a virtual secure element.</figcaption>
</figure>

*Coldcard was on this list until July 2026, when a firmware entropy flaw left seeds guessable and wallets were drained at scale ([CoinDesk's report](https://www.coindesk.com/tech/2026/07/31/major-bitcoin-wallet-flaw-drains-594-btc-in-25-minute-sweep) has the details). We removed it the week the drains began.*

*Coinkite, which makes Coldcard, says in its [advisory](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/) that the flaw affects seeds generated on Mk2 and Mk3 firmware 4.0.1 (March 2021) through 4.1.9, and on Mk4, Mk5 and Q firmware older than the fixed versions. If your seed came from one of those and you didn't mix in at least 50 dice rolls of your own, rolled in private, treat it as compromised. Move the funds to a new seed made on a second device or on the same Coldcard once its firmware is updated, following the advisory's steps.*

**Why "Bitcoin-only" matters:** a wallet that supports 50 cryptocurrencies carries code and libraries for all 50, and every one of them is another place where things can go wrong. Bitcoin-only firmware has fewer features but a smaller codebase that is easier to audit. If you're using a hardware wallet for Bitcoin, run Bitcoin-only firmware. (Most of the above support it.)

**What to avoid for self-custody:**
- Any wallet that asks you to upload your seed for "backup"
- Any wallet without published source code
- Any "wallet" that's actually a custodial account inside a brokerage or payments app
- Browser extensions, for any serious amount - too much attack surface

The wallet ecosystem moves quickly, so the example names above will date faster than the wallet categories in section 5.

<figure>
  <img src="/photos/trezor-evolution.jpg" alt="Four Trezor hardware wallets in chronological order on a light wood surface, left to right: Trezor One (2014), Trezor Model T (2018), Trezor Safe 3 (2023), Trezor Safe 5 (2024). The shapes and screen sizes show a decade of progression - from the original two-button monochrome design to the 2024 touchscreen Safe 5 with a secure element." />
  <figcaption>Ten years of Trezor hardware wallets. The Trezor One on the left shipped in 2014, and the Safe 5 on the right shipped in 2024.</figcaption>
</figure>

## 7. Backing Up Properly

Your seed phrase needs to survive: fire, flood, theft, loss, your own forgetfulness, and a moderately determined adversary. That sounds dramatic until you realize it has to last decades.

**The standard approach:**

1. **Write the seed on paper, then transcribe to metal.** Stamped or engraved steel plates (sold under many brand names, or a do-it-yourself washer-and-stamp setup) hold up to fire and water far better than paper, but not every metal product does. In [Jameson Lopp's stress tests](https://jlopp.github.io/metal-bitcoin-storage-reviews/), 10 of the 75 products tested as of October 2026 got an F for heat, so look up how a product did before you buy it. Keep the paper copy as a secondary backup, never as your only one.
2. **Store backups in at least two physically separate locations.** A safe at home plus a safe-deposit box, or two homes, or one location plus a trusted family member's. The goal is that no single fire or burglary loses both copies.
3. **Verify the backup.** Before you put any meaningful amount in the wallet, wipe the device and restore from your seed. If the restored wallet shows the same addresses, the backup is good. This is the only way to *know* the backup works.
4. **Document for inheritance.** Write a sealed letter for your heirs that explains where the backups are, what software to install, and what addresses to expect. Don't put the seed itself in the letter; put instructions for finding it.

We've made printable seed-backup forms for both [12-word](/downloads/seed-backup-12-word.pdf) and [24-word](/downloads/seed-backup-24-word.pdf) seeds, available on this site. Use them or your own format - what matters is consistency and durability.

**One more thing.** Do not split your seed phrase across multiple locations as a security measure ("first 6 words here, last 6 words there"). This is called *seed splitting* and it provides much less security than you'd expect - losing one location loses everything, *and* whoever finds one half has far less left to guess. Half of a 12-word seed leaves about 2^62 possibilities instead of 2^128 ([the math](/rabbit-hole/seed-backup-strategies)). If you want geographic redundancy for advanced setups, use [multisig](/glossary/multisig) (chapter 6) or [Shamir's Secret Sharing](/glossary/shamir-secret-sharing), not seed splitting.

## 8. Receiving Your First Transaction

This is the moment.

1. **Open your wallet** (we'll assume you picked one from section 6 and set it up).
2. **Generate a fresh address.** Every wallet has a "Receive" button. Click it. The wallet derives a new address from your seed and shows it to you, usually as a QR code and a string starting with `bc1`.
3. **Send a small amount to that address.** From an exchange, another wallet, anywhere. Five or ten dollars worth of sats. Don't send your life savings to a brand-new wallet you've never used.
4. **Watch the mempool.** Your wallet will show "unconfirmed" as soon as the sender broadcasts the transaction and it enters the mempool. Blocks arrive every 10 minutes on average, but the gap between them is random. If the fee is high enough for the next block, the first confirmation usually comes within 20 minutes, and occasionally takes longer. Six confirmations take about an hour on average.
5. **Cross-check the receive address externally.** Open [ChainQuery.com/address/](https://chainquery.com/address) and paste your address. You should see the same balance and the same incoming transaction. Two independent views of the same chain. This is a cross-check, not full verification, because you are still trusting someone else's node, and the explorer learns which address you looked up. Running your own node (chapter 6) is how you verify without trusting anyone.

Congratulations. You just did self-custody.

The bitcoin you just received is yours in a way that custodial bitcoin never was. No exchange can freeze it. No government can seize it without your private key. You can move it anywhere, anytime, on a Sunday at 3 a.m., for any reason. That's the whole point.

## 9. Sign a Message - Prove You Own It

Here's a useful trick: you can prove you control an address *without* moving any coins.

Bitcoin supports **message signing**. Your wallet uses your private key to produce a signature on an arbitrary text message. Anyone with the signature, the message, and your address can verify the signature is valid - proving you have the key.

How:

1. In your wallet, find "Sign message." (Many wallets have it, sometimes behind an advanced setting; some mobile wallets leave it out.)
2. Enter a message: *"I control address bc1qexampleaddress. Today's date is YYYY-MM-DD."*
3. Sign. You get a base64 blob.
4. Anyone can paste the (message, signature, address) triple into a verifier, such as a wallet's "Verify message" feature, and they will see "valid" or "invalid." The original signing format only covers old-style addresses that start with 1, though, and as of October 2026 Bitcoin Core's [verifymessage](https://chainquery.com/rpc/verifymessage) RPC accepts only those. Wallets sign for bc1 addresses in other formats, such as [BIP 137](https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki) or [BIP 322](https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki), and not every wallet uses the same one, so check the signature with a wallet that supports the format it was signed in.

This is how you prove ownership of an address to an insurance company, an inheritance lawyer, or a future suspicious you. No coins move and no fee is paid. The signature is portable, but it carries no timestamp. A date typed into the message is only a claim, because whoever holds the key can sign the same words at any time.

## 10. The Common Ways People Lose Bitcoin

Honest list, ordered by what shows up most often in incident postmortems and exchange compromise reports. The ordering is editorial - exact frequencies aren't published anywhere reliable.

1. **Leaving funds with an exchange or lender.** The company goes bankrupt (Mt. Gox, FTX, Celsius, BlockFi). Withdrawals freeze, and customers wait months or years for whatever the bankruptcy returns. Mt. Gox collapsed in February 2014 and began repaying creditors in bitcoin in July 2024 ([the full story](/rabbit-hole/mt-gox-ftx-graveyard)).
2. **Phishing the seed.** Fake support reps, fake wallet updates, fake "verify your wallet" pages. **No legitimate wallet, ever, asks you to type your seed online.** If it does, it's a scam.
3. **Losing the seed.** Single backup, single location, single fire.
4. **Buggy or malicious wallet software.** Use audited, open-source wallets. Verify download signatures from the publisher when possible.
5. **Wrong derivation path / address type.** You restore to a wallet using a different default than the one that generated it, see "0 BTC," panic. Less common with modern wallets but happens. Solution: try restoring with each common standard (BIP 84 for native SegWit, BIP 86 for Taproot, etc.) before assuming theft.
6. **Sending to the wrong address.** Bitcoin transactions are irreversible. Always check the first and last several characters of an address before sending. Better, send a small test first.
7. **Inheritance failure.** Owner dies, heirs have no idea where the seed is. Common; preventable; document.

The pattern is mostly **operational, not technical**. The cryptography is not the failure point. You are. So is everyone. Plan accordingly.

## 11. Your Milestone

Before you move on to chapter 5, do these four things:

- [ ] Pick a wallet (mobile is fine for now; hardware once you've got hands-on confidence)
- [ ] Generate a seed and back it up on paper *and* metal
- [ ] Receive a small amount (a few dollars' worth of sats; not your savings)
- [ ] Sign a message proving you control the receiving address (if your wallet offers message signing; see section 9)

That's it. You've done self-custody. You're no longer dependent on an exchange or a custodian to hold the keys to your money. Whether or not you go bigger from here is your call.

> **Pro tip:** The hardest part of self-custody isn't technical, it's psychological. The first time you hold a real seed you're solely responsible for, it feels heavy. That weight is the actual product of Bitcoin - sovereign ownership. People who claim self-custody is "too hard" mostly mean it feels heavy. They're not wrong. They're just not seeing the trade.
