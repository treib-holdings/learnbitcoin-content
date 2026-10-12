---
title: "Dust Attack"
slug: dust-attack
draft: false
updated: "2026-10-12"
shortDefinition: "Paying tiny amounts of bitcoin to addresses that have already been used, hoping the owner's wallet will later spend the crumb together with other coins and link them all. The Bitcoin Wiki's name for it is forced address reuse."
keyTakeaways:
  - "Only works against an address that has already been used, and only pays off if you spend the crumb together with your other coins"
  - "The split rule: dust on an address you already emptied, never spend it (lock it); dust on an address that still holds your coins, spend everything at that address together, in one transaction, with nothing from elsewhere"
  - "Bitcoin Core's avoid_reuse wallet flag (0.19, off by default) skips coins paid to an address you already spent from; coin control and freezing do the same job by hand"
sources:
  - { label: "Bitcoin Optech - Output linking topic (address reuse and dust attacks)", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Wiki - Privacy: forced address reuse (sometimes incorrectly called a dust attack; the never-spend / spend-together rule)", url: "https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse" }
  - { label: "Bitcoin Optech Newsletter #391 - Discussion of dust attack mitigations (February 2026)", url: "https://bitcoinops.org/en/newsletters/2026/02/06/#discussion-of-dust-attack-mitigations" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag: a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs (merged June 2019)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "Bitcoin Core 0.19.0.1 release notes - the avoid_reuse wallet flag, off by default; listunspent gains a reused field (November 2019)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core 0.17.0 release notes - the -avoidpartialspends flag; coins sent to an address after it was used will still be included in future coin selections (2018)", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core 0.21.0 release notes - partial spend avoidance on by default when it costs no extra fee (-maxapsfee, January 2021)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core PR #23065 - persistent parameter for lockunspent, so a locked dust output stays locked across restarts (merged September 2021)", url: "https://github.com/bitcoin/bitcoin/pull/23065" }
relatedTerms:
  - address-reuse
  - avoid-reuse
  - coin-control
  - discard-threshold
  - dust
  - dust-limit
  - dust-sweeping
  - forced-address-reuse
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

A dust attack is a privacy-degradation tactic where an adversary sends tiny amounts of BTC (dust) to many addresses they want to track. When the recipient eventually consolidates those dust outputs with other coins in a transaction, the adversary can link all the inputs together as belonging to the same wallet. The Bitcoin Wiki files the tactic under [forced address reuse](/glossary/forced-address-reuse) and says it "is sometimes incorrectly called a dust attack": the crumb is a forced payment to an address you already used, and the damage is the address reuse it coerces, not the dust itself. The popular name stuck anyway, so this entry uses both.

How the attack works:

1. The attacker sends a few hundred sats, just above the [dust limit](/glossary/dust-limit), to thousands of addresses that have already appeared on the chain and look interesting (from chain analysis, leaked databases, etc.).
2. Some recipients ignore the dust; some don't notice; some intentionally sweep it up later thinking it's "free money."
3. Whenever the recipient signs a transaction that includes the dust as one of the inputs, the wallet has effectively declared "these inputs belong to the same entity." Chain analysis algorithms cluster the inputs into a single owner's wallet.
4. The attacker now knows the cluster's other addresses, can track its activity, and potentially identify the real-world owner.

The precondition is easy to miss: the attack only works against an address that has already been used. The payoff only comes if you spend the crumb alongside coins the address was not yet linked to. Your unused addresses cannot be targeted at all, which is one more reason to hand out a fresh one for every payment.

Modern defenses:

- **Coin control.** Bitcoin Core and most serious self-custody wallets let users select which UTXOs to spend. Excluding suspicious dust from a transaction preserves the privacy boundary.
- **UTXO labels and freezing.** Some wallets automatically flag small payments that land on addresses you have already used, and most self-custody wallets let you freeze such a UTXO so it is never spent.
- **The split rule.** What to do depends on where the crumb landed, and the Wiki splits it in two. On an address you already emptied: never spend it. Lock it (Bitcoin Core's [lockunspent](https://chainquery.com/rpc/lockunspent) gained a `persistent` option in PR #23065, merged 2021 and shipped in 23.0 in 2022, so the lock survives a restart), freeze it, forget it; it is worth little more than the fee anyway. On an address that still holds your coins: the next time you spend from that address, spend everything on it together, crumb included, in one transaction with no inputs from elsewhere. The crumb then adds no link the address did not already carry. Core's `-avoidpartialspends` grouping does exactly this, and has been on by default whenever it costs no extra fee since 0.21.0 (2021).
- **Or burn it.** If you want it gone, a crumb can be spent by itself, entirely to fees, so it never shares a transaction with your other coins.
- **Core's built-in answer.** Bitcoin Core 0.19.0.1 (2019) added the [avoid_reuse](/glossary/avoid-reuse) wallet flag. The wallet marks every address it has spent from and skips any coins paid to those addresses afterwards, because, in the words of the pull request, "a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs". It is off by default: set it when you create a wallet ([createwallet](https://chainquery.com/rpc/createwallet), `avoid_reuse`) or later with [setwalletflag](https://chainquery.com/rpc/setwalletflag), and [listunspent](https://chainquery.com/rpc/listunspent) will then mark such coins `reused`.

The attack is old and keeps coming back. The defense isn't difficult once you know to look; the attack succeeds against users who don't.

For ordinary users: don't sweep random small UTXOs into your main wallet. If you didn't send it to yourself or recognize the source, treat it as a tracking attempt, and if it landed on an address that still holds your coins, apply the split rule above.
