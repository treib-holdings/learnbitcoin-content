---
title: "Forced Address Reuse"
slug: forced-address-reuse
draft: false
published: "2026-10-12"
updated: "2026-10-20"
shortDefinition: "An attack in which someone pays a small amount to an address you have already used, betting that your wallet will later spend that crumb together with your other coins and link them all. It is the Bitcoin Wiki's name for what the press calls a dust attack, and it only works against an address that has been used before."
keyTakeaways:
  - "The crumb itself is harmless; the damage comes when it is spent in the same transaction as your other coins, because common-input ownership then ties them together"
  - "The split rule: a crumb on an address you have already emptied is never spent (lock it); a crumb on an address that still holds coins is spent together with everything there, in one transaction, with no other inputs"
  - "Bitcoin Core answered in three steps: -avoidpartialspends (0.17.0), the avoid_reuse wallet flag (0.19.0.1, off by default), and grouping same-address coins by default when it costs no extra fee (0.21.0)"
sources:
  - { label: "Bitcoin Wiki - Privacy: Forced address reuse", url: "https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse" }
  - { label: "Bitcoin Optech - Output linking topic", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Core 0.17.0 release notes (-avoidpartialspends)", url: "https://bitcoincore.org/en/releases/0.17.0/" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag (kallewoof, merged 2019-06-18)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "Bitcoin Core source at v31.1 - src/wallet/rpc/spend.cpp line 311: sendtoaddress is the one RPC that asks coin selection to skip dirty coins (confirmed on regtest, 2026-10-20)", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/wallet/rpc/spend.cpp#L311" }
  - { label: "Bitcoin Core 0.21.0 release notes (partial spend avoidance by default when fee-neutral)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core PR #23065 - persistent option for lockunspent (merged 2021-09-26, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/23065" }
  - { label: "Matt Corallo, bitcoin-dev - PQC: What is our Goal, Even? (19 April 2026): dusting attacks could trigger many wallets to reveal a public key too soon", url: "https://mirror.b10c.me/lists/bitcoindev/39f3c26e-2cb5-4dcb-a269-78c793174b2a@mattcorallo.com/" }
  - { label: "Matt Corallo, bitcoin-dev - PQC: What is our Goal, Even? (19 April 2026), the thread on Google Groups", url: "https://groups.google.com/g/bitcoindev/c/Qy4gwAGTK2w" }
relatedTerms:
  - dust-attack
  - dust
  - dust-limit
  - address-reuse
  - address-clustering
  - coin-control
  - coin-selection
  - coin-freeze
  - avoid-reuse
  - chain-analysis
  - public-key-exposure
  - utxo-unspent-transaction-output
liveWidget: ~
---

Forced address reuse is the Bitcoin Wiki's name for a tracking trick that only works on an address you have used before. An adversary sends a small payment, a few hundred satoshis of [dust](/glossary/dust), to addresses that have already appeared on the chain. Nothing happens yet. The bet is on your next spend: if your wallet picks up the crumb as an input alongside your real coins, the transaction declares that every input has one owner, and the adversary's [address clustering](/glossary/address-clustering) grows to match. The Wiki says this "is sometimes incorrectly called a dust attack"; the [dust attack](/glossary/dust-attack) entry covers the press name.

A wallet that hands out a fresh address for every payment has no used-and-still-receiving address for a crumb to land on. The attack manufactures [address reuse](/glossary/address-reuse) you did not choose, so the defense is about what you do next. It splits in two, as the Wiki splits it:

- If the crumb landed on an address you had already emptied, never spend it. Freeze it with [coin control](/glossary/coin-control). Bitcoin Core's [lockunspent](https://chainquery.com/rpc/lockunspent) gained a `persistent` option in PR #23065 (merged 2021, shipped in 23.0 in 2022) so the lock survives a restart.
- If it landed on an address that still holds your coins, spend everything at that address together, crumb included, in one transaction with no inputs from anywhere else. Those coins were already linked by sharing an address, so spending them together adds nothing new; leaving the crumb behind keeps the trap armed.

Bitcoin Core's answer came in three releases. Version 0.17.0 (2018) added `-avoidpartialspends`, which spends all coins on one address together even at a higher fee; its release note admitted the gap: "If someone were to send coins to an address after it was used, those coins will still be included in future coin selections." Version 0.19.0.1 (2019) answered with the `avoid_reuse` wallet flag, which marks every address the wallet has spent from and flags coins sent there afterwards as dirty; `sendtoaddress` skips them by default, while Core's other send commands and its GUI do not (checked on a Core 31.1 regtest node). PR #13756 gave the reason: without it "a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs". The flag is off by default; see [Avoid Reuse (Bitcoin Core)](/glossary/avoid-reuse). Since 0.21.0 (2021) the wallet groups same-address coins by default whenever that costs no extra fee (PR #14582).

There is a newer reason to care. On bitcoin-dev on 19 April 2026, discussing post-quantum output types, Matt Corallo noted that "dusting attacks could trigger many wallets to reveal a public key too soon": a crumb that provokes a spend from a hash-protected address puts its key on the chain for good. See [Public Key Exposure](/glossary/public-key-exposure) for why that matters, and [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for the clustering it feeds.
