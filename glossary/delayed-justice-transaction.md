---
title: "Delayed Justice Transaction"
slug: delayed-justice-transaction
draft: false
shortDefinition: "An LN penalty mechanism with a waiting period before seizing a dishonest channel peer’s funds, reducing false positives."
keyTakeaways:
  - "Adds a grace period before penalizing cheaters"
  - "Minimizes risk of accidental channel-state penalties"
  - "Maintains LN’s deterrent against fraudulent broadcasts"
sources: []
relatedTerms:
  - absolute-fee
  - bip-125-replace-fee
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

In some Lightning Network designs, the punishment for cheating—trying to broadcast an old channel state—doesn’t happen instantly. Instead, there’s a ‘delayed justice’ window, giving the honest participant time to react and claim the cheater’s balance if cheating is confirmed.
This delay helps avoid accidental or mis-timed penalties, ensuring only truly malicious attempts are punished. It’s akin to receiving an official warning before losing everything, making LN dispute resolution a bit more forgiving while still deterring dishonesty. The concept underscores LN’s complexity, balancing fairness and security in a trust-minimized environment.
