---
title: "Inflation Bug"
slug: inflation-bug
draft: false
shortDefinition: "A critical software flaw that allows minting more BTC than the 21 million cap (e.g., CVE-2018-17144)."
keyTakeaways:
  - "Threatens Bitcoin's core scarcity feature if unpatched"
  - "Highlight of why rapid fixes and community diligence matter"
  - "Historically rare but extremely serious vulnerability"
sources: []
relatedTerms:
  - bip-42
  - block-reward
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation
  - mining-subsidy
liveWidget: ~
---

An inflation bug is the most severe class of Bitcoin software vulnerability: a flaw that would let an attacker create more BTC than the protocol's 21-million-coin cap allows, by tricking validators into accepting invalid transactions or invalid coinbase outputs.

The canonical example is CVE-2018-17144, disclosed September 18, 2018.

What the bug was:

- A specific class of double-spend - submitting two transactions in the same block that both spent the same UTXO - had been a known impossibility. Bitcoin Core checked for this in the block-validation path.
- An optimization in Bitcoin Core 0.14.0 (2017) accidentally removed that specific check for transactions that didn't pass other earlier checks. The relevant code path could be triggered by a carefully-constructed block.
- An attacker who produced such a block could double-spend an output. Iterated, this is inflation.

How it got found and fixed:

- Awemany (a developer working on Bitcoin Cash software) discovered the bug while reviewing inherited Bitcoin Core code.
- They disclosed it privately to Bitcoin Core maintainers.
- Bitcoin Core 0.16.3 shipped the fix within 24 hours of disclosure, with patched versions for older supported branches.
- Mining pools and exchanges upgraded within hours.
- No one is known to have exploited the bug in the wild before the fix.

Why this matters:

- **Bitcoin's monetary integrity nearly broke.** If exploited and not detected, the 21M cap would have been silently violated, which would have been catastrophic for trust in Bitcoin's monetary properties.
- **The patch worked because the social process works.** Private disclosure, fast review, fast deployment by infrastructure operators. The same coordination would be needed for any future critical bug.
- **It's a reminder that "the code is the constitution" requires the code to actually be right.** Bitcoin's monetary commitments depend on Bitcoin Core (and its compatible implementations) actually enforcing the rules. Subtle bugs in optimization paths can undermine the commitments.

CVE-2018-17144 remains the most cited example when developers argue for conservative changes to the validation code path, more test coverage on consensus-critical functions, and minimum review periods on optimizations.
