---
title: "Lightning Network Penalty"
slug: lightning-network-penalty
draft: false
shortDefinition: "A punishment mechanism giving the honest peer the cheater's channel balance if an outdated state is broadcast."
keyTakeaways:
  - "Deters channel participants from using old commitment states"
  - "Transfers the cheating party's funds to the honest peer"
  - "Ensures strong incentives for correct channel state updates"
sources: []
relatedTerms: []
liveWidget: ~
---

The Lightning Network penalty mechanism is what makes Lightning channels trustless: if a channel counterparty tries to cheat by broadcasting an outdated channel state (one that allocated more BTC to them), the honest party can claim the *entire* channel balance as a penalty.

How it works mechanically:

1. **Every channel state has a unique revocation key**, derived from a per-state secret.
2. **When a new state is signed**, both parties exchange their revocation secrets for the *previous* state. The old state can still be broadcast, but doing so reveals the revocation secret to the counterparty.
3. **Commitments include a CSV-locked output** for the broadcasting party. They can spend their share, but only after a delay (typically 144-1008 blocks).
4. **During that delay window**, the counterparty can broadcast a **penalty transaction** signed with the revocation key, claiming *all* funds in the channel - the broadcaster's share *and* their own.

The mathematical asymmetry: a cheater who broadcasts an old state tries to steal, say, 0.3 BTC of difference. If caught, they lose the *entire* 1 BTC channel balance. Expected value is strongly negative for cheating, given any reasonable probability the counterparty will be online during the dispute window.

In practice this works because:

- **The honest party has hours to days** (the CSV window) to detect and punish.
- **Watchtowers** can monitor on behalf of users who can't be online 24/7.
- **The penalty is total**, not equal - mass disincentive.

What can still go wrong:

- **Accidental old-state broadcast** (from a wallet backup restore, for example) is treated identically to malicious cheating. The penalty applies regardless of intent.
- **Watchtower failures** can leave you vulnerable during long offline periods.
- **Extreme network congestion** could in principle prevent the penalty from confirming within the CSV window - rare but real edge case.

[Eltoo](/glossary/eltoo) would replace the penalty model with a simpler "newer states override older states" mechanism, eliminating the catastrophic-failure-on-mistake risk. Until [ANYPREVOUT](/glossary/anyprevout) activates, the penalty model is what Lightning channels use, and the operational discipline around state management matters.

See [Fraudulent Channel Close](/glossary/fraudulent-channel-close) for the attack the penalty defends against.
