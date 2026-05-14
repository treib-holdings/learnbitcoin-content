---
title: "BIP 40 (Alerts Avoid Replay)"
slug: bip-40-alerts-avoid-replay
draft: false
shortDefinition: "Addressed potential replay of old alert messages, part of the now-deprecated alert system in Bitcoin."
keyTakeaways:
  - "Stopped reuse of older network alerts"
  - "Part of a now-retired alert mechanism"
  - "Demonstrates the iterative security focus in Bitcoin"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-37
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-synchronization
liveWidget: ~
---

BIP 40 was a one-line patch on the old Bitcoin alert system: prevent replay of stale alert messages. The whole alert system has since been removed, which makes BIP 40 doubly retired.

The alert mechanism let a handful of early developers broadcast network-wide warnings signed by a master key. By 2016 it was obvious that one signing key gating an emergency channel was a centralization risk - even if the holders were trustworthy, the key itself was a target, and there was no clean way to rotate it. Bitcoin Core deprecated alerts in 0.12.1 (April 2016), removed them entirely in 0.13 (August 2016), and the alert private key was then deliberately published so no one could revive the system maliciously.

Spec: [BIP-40](https://github.com/bitcoin/bips/blob/master/bip-0040.mediawiki). Today the equivalent function (urgent operational signal) lives on mailing lists, IRC, and the bitcoin-dev / bitcoin-core-dev community channels - decentralized, slow, and impossible to silently capture.
