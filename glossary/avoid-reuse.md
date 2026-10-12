---
title: "Avoid Reuse (Bitcoin Core)"
slug: avoid-reuse
linkText:
  - "avoid_reuse"
draft: false
published: "2026-10-12"
shortDefinition: "A Bitcoin Core wallet flag, added in 0.19.0.1, that tracks which addresses the wallet has already spent from and refuses to spend coins sent to them afterwards. It is the reference wallet's defense against forced address reuse. Off by default, set at wallet creation or with setwalletflag, with no switch in the GUI."
keyTakeaways:
  - "With the flag on, coins are sorted into clean and dirty: dirty means sent to an address the wallet had already spent from, and dirty coins are left out of coin selection; listunspent shows the verdict in a reused field"
  - "Turning it on for an existing wallet requires a rescan, so the wallet can learn which of its addresses were spent from before the flag existed"
  - "It completes -avoidpartialspends (0.17.0), which grouped same-address coins but still picked up later deposits; since 0.21.0 the wallet groups by default when that costs no extra fee, while avoid_reuse itself stays off by default"
sources:
  - { label: "ChainQuery RPC reference - createwallet (avoid_reuse option)", url: "https://chainquery.com/rpc/createwallet" }
  - { label: "ChainQuery RPC reference - listunspent (reused field)", url: "https://chainquery.com/rpc/listunspent" }
  - { label: "Bitcoin Core 0.19.0.1 release notes (avoid_reuse wallet flag)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag (kallewoof, merged 2019-06-18)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "bitcoin-core/gui issue #341 - avoid_reuse in the GUI (opened 2021-05-20, still open)", url: "https://github.com/bitcoin-core/gui/issues/341" }
  - { label: "Bitcoin Core 0.21.0 release notes (partial spend avoidance by default when fee-neutral)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
relatedTerms:
  - forced-address-reuse
  - coin-control
  - address-reuse
  - coin-selection
  - coin-freeze
  - dust-attack
  - dust
  - bitcoin-core
  - bitcoin-core-rpc
  - utxo-unspent-transaction-output
liveWidget: ~
---

`avoid_reuse` is a Bitcoin Core wallet flag, shipped in 0.19.0.1 (2019) from PR #13756. Its job is narrow: remember every address this wallet has spent from, and never spend a coin that arrived at one of those addresses afterwards. The pull request named the threat: without the flag, "a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs", crumbs the wallet would later sweep up alongside real coins. That is [forced address reuse](/glossary/forced-address-reuse), and the flag is the reference wallet's answer to it.

The flag is set when a wallet is created. The [createwallet](https://chainquery.com/rpc/createwallet) call documents it: "avoid_reuse (boolean, optional, default=false) Keep track of coin reuse, and treat dirty and clean coins differently with privacy considerations in mind." Clean coins sit on addresses the wallet has never spent from. Dirty coins arrived at an address after the wallet spent from it: that is what a crumb looks like, and also what a payer who ignored the fresh address you gave them looks like. Dirty coins are left out of [coin selection](/glossary/coin-selection), and [sendtoaddress](https://chainquery.com/rpc/sendtoaddress) skips them while the flag is on. [listunspent](https://chainquery.com/rpc/listunspent) shows the verdict per coin in a `reused` field: "Whether this output is reused/dirty (sent to an address that was previously spent from)".

Two practical limits. First, an existing wallet that turns the flag on with [setwalletflag](https://chainquery.com/rpc/setwalletflag) needs a rescan, so it can work out which of its addresses were spent from before it started keeping track. Second, there is no switch in the graphical wallet. The request for one, bitcoin-core/gui issue #341, has been open since May 2021; Sjors Provoost, a long-time Bitcoin Core contributor, noted that the flag can be set at creation or toggled by RPC, and that the GUI has no per-wallet settings panel to put it in. As of 2026 it is a command-line feature.

It fits with two older behaviours. Version 0.17.0 (2018) added `-avoidpartialspends`, which spends all coins on one address together so separate payments to a reused address are not spent, and linked, one at a time; its release note conceded that coins sent to an address after it was used "will still be included in future coin selections", the exact gap `avoid_reuse` closes. Since 0.21.0 (2021) the wallet avoids partial spends by default whenever that costs no extra fee (PR #14582), and `avoid_reuse` turns partial-spend avoidance on for `sendtoaddress` even without the command-line option. `avoid_reuse` itself stays off by default.

None of this is needed by a wallet that never [reuses an address](/glossary/address-reuse) and whose payers follow instructions. The flag exists because payers do not always follow instructions, and because some of them are hostile. [Coin control](/glossary/coin-control) does the same job by hand.
