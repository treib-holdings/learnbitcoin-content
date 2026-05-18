---
title: "Be Your Own Bank"
slug: be-your-own-bank
draft: false
status: live
order: 4
estimatedMinutes: 35
tagline: "If your keys live on an exchange, you don't own Bitcoin. You own an IOU. This chapter teaches you to own actual Bitcoin."
prerequisites: ["how-bitcoin-works"]
relatedTerms: ["seed-phrase", "private-key", "hardware-wallet", "custodial-wallet", "address", "deterministic-wallet", "watch-only-wallet", "paper-wallet", "multisig", "shamir-secret-sharing", "hierarchical-multisig"]
legacyUrls: ["/be-your-own-bank"]
ogImage: "/diagrams/og/hd-wallet-tree.png"
ogImageAlt: "One seed, every address. A 12-word seed phrase at the top derives a master key, which deterministically derives every child key and address the wallet will ever use. Back up the seed once and the whole tree is recoverable forever."
sources:
  - { label: "BIP 39 - Mnemonic seed phrases (Bitcoin Improvement Proposal)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP 32 - Hierarchical deterministic wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Privacy Best Practices (PDF, this site)", url: "/downloads/bitcoin-privacy-best-practices.pdf" }
  - { label: "12-word seed backup form (PDF, this site)", url: "/downloads/seed-backup-12-word.pdf" }
  - { label: "24-word seed backup form (PDF, this site)", url: "/downloads/seed-backup-24-word.pdf" }
---

> **Where you're going:** By the end of this chapter, you'll have generated a wallet you control, backed up the seed properly, received a real (small) Bitcoin transaction, and verified it from a second device. You'll have done self-custody. Optional: do it for real.

## 1. The Promise You Make to Yourself

Up until this chapter, you've been *learning about* Bitcoin. From here on, you can *use* it - but only if you're willing to take on the responsibility that comes with sovereign money.

The bargain is this: **you, and only you, hold the keys. Nobody can take them. Nobody can freeze them. And nobody is going to help you if you lose them.**

That's not a marketing line. It's how the math works. A Bitcoin address is just a public form of a private key. The private key is a 256-bit number. Whoever has the number can sign transactions that spend the coins. There is no second factor. There is no recovery email. There is no customer service.

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
- Restoring a wallet on a new device shows the same balance instantly (the chain is the truth; the device just reads it)

When you "back up your wallet," you're backing up the *keys* - specifically, the seed they're derived from. If you have the seed, you can reconstruct all the keys, on any device, forever.

<figure>
  <img src="/diagrams/hd-wallet-tree.svg" alt="A hierarchical deterministic wallet tree: a 12-word seed phrase at the top derives a master key, which in turn derives an unlimited sequence of child keys and addresses. Five sample bc1q addresses branch from the master key, with the implication that millions more follow the same derivation." />
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

- **Anyone with your seed phrase has your bitcoin.** Period. There is no second factor. There is no recovery. There is no "but they'd need your password too" - the password is part of the wallet software, not the chain.
- **12 vs 24 words.** Both are secure. 12 words = 128 bits of entropy; 24 words = 256 bits. Both are well beyond brute-force range. The choice is a matter of preference. (24-word is the default for most hardware wallets.)
- **Never type your seed into a website. Never. Ever.** Not your wallet provider's site. Not a help page. Not anywhere. The only places the seed should live are on your wallet device and on physical backups *you* created.
- **Do not memorize it.** Brains forget seeds, even ones you were sure you'd remember. Steel does not.
- **Do not photograph it.** Phones back up to clouds. Clouds get breached.

The seed phrase is not a password. It is the *root* of your entire Bitcoin existence. Treat it accordingly.

## 5. Wallet Types - When to Use Each

A "wallet" is just software that manages keys. The categories matter more than the brands:

- **Hot wallet** - keys live on an internet-connected device (phone, laptop). Convenient. Higher attack surface. Best for small, working-balance amounts.
- **Cold wallet** - keys live on a device that's never connected to the internet. More effort to use. Much harder to compromise. Best for long-term holdings.
- **Hardware wallet** - a small dedicated device (about the size of a USB stick) that holds keys and signs transactions, while a companion app on your phone or laptop handles everything else. The keys never leave the hardware. **This is the standard recommendation for any amount you'd be sad to lose.**
- **Paper wallet** - keys written on paper, no device at all. Cheap. Easy to mess up. We don't recommend it as a primary backup anymore (lots of subtle ways to get it wrong) but as a *secondary* backup of a seed, it's useful.
- **Multisig** - a wallet where spending requires multiple keys, often held in different places. Eliminates single-point-of-failure. The right answer for serious balances. We'll get to it in chapter 6.

**The right pattern for most people:**

- A hot wallet on your phone for small everyday amounts
- A hardware wallet for the rest
- A multisig setup once your stack justifies the complexity

You can mix and match. Wallets are just tools.

## 6. Picking Your First Wallet

We don't sell wallets. We don't take affiliate commissions. Here's the unvarnished filter:

<figure>
  <img src="/photos/hardware-wallet-ecosystem.jpg" alt="Four Bitcoin hardware wallets from four different vendors on a light wood surface, left to right: Trezor Safe 5 (vertical touchscreen with secure element), Blockstream Jade (compact single-button stick), Coldcard Mk4 (transparent case showing the circuit board and physical numeric keypad), and Keystone 3 Pro (large landscape touchscreen with fingerprint sensor and QR-only air-gapped operation). Four different design philosophies for the same problem: keeping a private key off an internet-connected device." />
  <figcaption>The hardware wallet ecosystem. Four vendors, four design philosophies, one job: keep the private key off the internet.</figcaption>
</figure>

**For a free, open-source mobile wallet (hot, beginner-friendly):**
- **BlueWallet** (iOS, Android) - Bitcoin-only, open source, works fine for everyday amounts
- **Phoenix** - Bitcoin + Lightning, very low friction; runs an embedded LN node
- **Mutiny** - newer, web-first Lightning wallet

**For a hardware wallet (cold, serious balances):**
- **Trezor Safe 5** - widely used, established brand; multi-coin by default but supports Bitcoin-only firmware

<figure>
  <img src="/photos/trezor-safe-5-pin.jpg" alt="The Trezor Safe 5 hardware wallet powered on, displaying its scrambled PIN entry screen. The number positions are randomized on each unlock to prevent shoulder-surfing and smudge-pattern attacks. The device sits on dark leather, with the embossed Trezor lock icon visible below the screen." />
  <figcaption>Trezor Safe 5 in PIN entry. Numbers shuffle on every unlock - shoulder-surfing and smudge attacks don't work when the layout changes.</figcaption>
</figure>

- **Coldcard** (Mk4 or Q) - Bitcoin-only, fully open-source firmware, designed for paranoid users

<figure>
  <img src="/photos/coldcard-mk4-pin.jpg" alt="The Coldcard Mk4 hardware wallet mid-PIN-entry. The transparent case reveals the circuit board and secure element chip. A small green status LED indicates the device is powered. The OLED screen displays 'Enter PIN Prefix' with a numeric counter. A physical 12-button keypad is below the screen." />
  <figcaption>Coldcard Mk4 in PIN-prefix entry. The transparent case is intentional - anyone can verify the chip on the device matches the public spec.</figcaption>
</figure>

- **Foundation Passport** - Bitcoin-only, fully air-gapped (no USB data, uses QR codes and microSD); US-made
- **Keystone 3 Pro** - Bitcoin-friendly, fully air-gapped (no USB data, QR-only), fingerprint sensor, large landscape touchscreen

<figure>
  <img src="/photos/keystone-3-pro-box.jpg" alt="The Keystone 3 Pro hardware wallet resting on its blue retail packaging. The device's landscape touchscreen is dark; the box shows the Keystone wordmark and product name. Light wood surface in the background." />
  <figcaption>Keystone 3 Pro arrives in this box. Landscape touchscreen, QR-only operation - no USB data, no Bluetooth.</figcaption>
</figure>

- **Jade** by Blockstream - affordable, Bitcoin-focused

<figure>
  <img src="/photos/jade-unlock.jpg" alt="The Blockstream Jade hardware wallet powered on, displaying its unlock screen. The compact device shows 'Unlock Jade' on a small color screen, with status indicators for initialization and firmware version. The JADE wordmark is embossed on the side." />
  <figcaption>Blockstream Jade at unlock. Single button, color screen, secure element - the budget-conscious entry into self-custody.</figcaption>
</figure>

**Why "Bitcoin-only" matters:** wallets that support 50 cryptocurrencies have 50× the attack surface. Every supported coin is more code, more libraries, more places things can go wrong. Bitcoin-only firmware has fewer features but a smaller, more thoroughly audited codebase. If you're using a hardware wallet for Bitcoin, run Bitcoin-only firmware. (Most of the above support it.)

**What to avoid for self-custody:**
- Any wallet that asks you to upload your seed for "backup"
- Any wallet without published source code
- Any "wallet" that's actually a custodial app pretending (Robinhood, PayPal "crypto," etc.)
- Browser extensions, for any serious amount - too much attack surface

The wallet ecosystem moves quickly. The specific brand may shift over the next few years. The *category* recommendations won't.

<figure>
  <img src="/photos/trezor-evolution.jpg" alt="Four Trezor hardware wallets in chronological order on a light wood surface, left to right: Trezor One (2014), Trezor Model T (2018), Trezor Safe 3 (2023), Trezor Safe 5 (2024). The shapes and screen sizes show a decade of progression - from the original two-button monochrome design to the current touchscreen flagship with a secure element." />
  <figcaption>Ten years of Bitcoin hardware wallets. The Trezor One on the left shipped in 2014 as the first hardware wallet ever made. The Safe 5 on the right shipped in 2024. The category has matured. The specifics will keep changing; the idea won't.</figcaption>
</figure>

## 7. Backing Up Properly

Your seed phrase needs to survive: fire, flood, theft, loss, your own forgetfulness, and a moderately determined adversary. That sounds dramatic until you realize it has to last decades.

**The standard approach:**

1. **Write the seed on paper, then transcribe to metal.** Stamped or engraved steel plates (Cryptosteel, Seedplate, Blockmit, or a do-it-yourself washer-and-stamp setup) survive fire and water. Paper does not. Use paper *only* as a working copy while you make the steel one. Then burn the paper.
2. **Store backups in at least two physically separate locations.** A safe at home plus a safe-deposit box, or two homes, or one location plus a trusted family member's. The goal is that no single fire or burglary loses both copies.
3. **Verify the backup.** Before you put any meaningful amount in the wallet, wipe the device and restore from your seed. If the restored wallet shows the same addresses, the backup is good. This is the only way to *know* the backup works.
4. **Document for inheritance.** Write a sealed letter for your heirs that explains where the backups are, what software to install, and what addresses to expect. Don't put the seed itself in the letter; put instructions for finding it.

We've made printable seed-backup forms for both [12-word](/downloads/seed-backup-12-word.pdf) and [24-word](/downloads/seed-backup-24-word.pdf) seeds, available on this site. Use them or your own format - what matters is consistency and durability.

**One more thing.** Do not split your seed phrase across multiple locations as a security measure ("first 6 words here, last 6 words there"). This is called *seed splitting* and it provides much less security than you'd expect - losing one location loses everything, *and* the second location is easier to attack. If you want geographic redundancy for advanced setups, use [multisig](/glossary/multisig) (chapter 6) or [Shamir's Secret Sharing](/glossary/shamir-secret-sharing), not seed splitting.

## 8. Receiving Your First Transaction

This is the moment.

1. **Open your wallet** (we'll assume you picked one from section 6 and set it up).
2. **Generate a fresh address.** Every wallet has a "Receive" button. Click it. The wallet derives a new address from your seed and shows it to you, usually as a QR code and a string starting with `bc1`.
3. **Send a small amount to that address.** From an exchange, another wallet, anywhere. Five or ten dollars worth of sats. Don't send your life savings to a brand-new wallet you've never used.
4. **Watch the mempool.** Your wallet will show "unconfirmed" almost immediately as the transaction enters the mempool. Within ~10 minutes you should see 1 confirmation. After about an hour, 6.
5. **Verify the receive address externally.** Open [ChainQuery.com/address/](https://chainquery.com/address) and paste your address. You should see the same balance and the same incoming transaction. Two independent views of the same chain. This is the verify-don't-trust step.

Congratulations. You just did self-custody.

The bitcoin you just received is yours in a way that custodial bitcoin never was. No exchange can freeze it. No government can seize it without your private key. You can move it anywhere, anytime, on a Sunday at 3 a.m., for any reason. That's the whole point.

## 9. Sign a Message - Prove You Own It

Here's a useful trick: you can prove you control an address *without* moving any coins.

Bitcoin supports **message signing**. Your wallet uses your private key to produce a signature on an arbitrary text message. Anyone with the signature, the message, and your address can verify the signature is valid - proving you have the key.

How:

1. In your wallet, find "Sign message." (Most wallets have it; some require an advanced settings toggle.)
2. Enter a message: *"I control address bc1qexampleaddress. Today's date is YYYY-MM-DD."*
3. Sign. You get a base64 blob.
4. Anyone can paste the (message, signature, address) triple into a verifier - try the [Bitcoin Core signature verification RPC](https://chainquery.com/rpc/verifymessage) or your wallet's "Verify message" feature - and they will see "valid" or "invalid."

This is how you prove ownership of an address to an insurance company, an inheritance lawyer, or a future suspicious you. No coins move. No fees pay. The signature is portable and timestamps anchor it in time.

## 10. The Common Ways People Lose Bitcoin

Honest list, ordered by what shows up most often in incident postmortems and exchange compromise reports. The ordering is editorial - exact frequencies aren't published anywhere reliable.

1. **Leaving funds on an exchange.** Exchange goes bankrupt (Mt. Gox, FTX, Celsius, BlockFi…). Funds gone.
2. **Phishing the seed.** Fake support reps, fake wallet updates, fake "verify your wallet" pages. **No legitimate wallet, ever, asks you to type your seed online.** If it does, it's a scam.
3. **Losing the seed.** Single backup, single location, single fire. The 1% of seed-loss events that aren't theft.
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
- [ ] Sign a message proving you control the receiving address

That's it. You've done self-custody. You're no longer dependent on an exchange or a custodian to hold the keys to your money. Whether or not you go bigger from here is your call.

> **Pro tip:** The hardest part of self-custody isn't technical, it's psychological. The first time you hold a real seed you're solely responsible for, it feels heavy. That weight is the actual product of Bitcoin - sovereign ownership. People who claim self-custody is "too hard" mostly mean it feels heavy. They're not wrong. They're just not seeing the trade.
