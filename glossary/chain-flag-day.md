---
title: "Chain Flag Day"
slug: chain-flag-day
draft: false
shortDefinition: "A chosen date or block height when nodes begin enforcing new consensus rules, often seen in user-activated forks."
keyTakeaways:
  - "Sets a deadline for enforcing consensus changes"
  - "Popular in user-activated soft fork strategies"
  - "Can unify the network or risk a chain split"
sources: []
relatedTerms:
  - bip-148-uasf
  - chain-bulletin-board
  - chain-split
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

A chain flag day is like setting a time on the calendar when everyone agrees to adopt a new policy. In Bitcoin, this might be a specific block height after which nodes enforce new rules, ignoring blocks that don't comply. This approach was notably used in BIP 148 (UASF) to activate SegWit.
By coordinating around a future date, users and miners can upgrade their software in advance, ensuring a smoother transition. If enough of the network enforces the new rules, dissenting miners risk creating invalid blocks. Thus, a flag day can catalyze community-driven upgrades while avoiding lengthy activation mechanisms-or it can spark a chain split if consensus is lacking.
