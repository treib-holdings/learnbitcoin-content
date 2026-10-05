---
title: "Inflation Bug"
slug: inflation-bug
draft: false
updated: "2026-10-05"
shortDefinition: "A critical software flaw that allows minting more BTC than the 21 million cap (e.g., CVE-2018-17144)."
keyTakeaways:
  - "Threatens Bitcoin's core scarcity feature if unpatched"
  - "Highlight of why rapid fixes and community diligence matter"
  - "Historically rare but extremely serious vulnerability"
sources:
  - { label: "Inflation Bug Postmortem rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/inflation-bug-postmortem" }
  - { label: "Bitcoin Core - Disclosure of CVE-2018-17144 (20 September 2018)", url: "https://bitcoincore.org/en/2018/09/20/notice/" }
  - { label: "NVD - CVE-2018-17144", url: "https://nvd.nist.gov/vuln/detail/CVE-2018-17144" }
  - { label: "Bitcoin Core 0.15.2 release notes - the older-branch patch (28 September 2018)", url: "https://bitcoincore.org/en/releases/0.15.2/" }
  - { label: "NVD - CVE-2010-5139, the 2010 value overflow", url: "https://nvd.nist.gov/vuln/detail/CVE-2010-5139" }
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

The one that actually minted coins came first. In August 2010 a value-overflow bug (CVE-2010-5139) let a single transaction create about 184 billion BTC, and the network rolled the chain back to remove it within a day. The most cited example is CVE-2018-17144, reported privately on 17 September 2018, patched on 18 September, and fully disclosed on 20 September.

What the 2018 bug was:

- A specific class of double-spend - one transaction listing the same coin as an input twice - had been a known impossibility. Bitcoin Core had checked for it during block validation since 2012.
- An optimization in Bitcoin Core 0.14.0 (2017) skipped that check, so a carefully constructed block could crash a node. A redesign in 0.15.0, later in 2017, made it worse: versions 0.15.0 through 0.16.2 would accept such a block when the coin being spent twice came from an earlier block.
- An attacker who produced such a block could double-spend an output. Iterated, this is inflation.

How it got found and fixed:

- Awemany (a developer working on Bitcoin Cash software) discovered the bug while reviewing inherited Bitcoin Core code.
- They reported it privately, as a crash bug, to developers of Bitcoin Core and two other node projects. Within three hours a Core developer had worked out that it was also an inflation bug.
- Bitcoin Core 0.16.3 shipped the fix on 18 September, the day after the report; patched releases for the two older branches followed on 28 September.
- One large mining pool had upgraded within six hours of the report. By the full disclosure on 20 September, Bitcoin Core estimated that over half of the hash rate had upgraded.
- No one is known to have exploited the bug in the wild before the fix.

Why this matters:

- **Bitcoin's monetary integrity nearly broke.** If exploited and not detected, the 21M cap would have been silently violated, which would have been catastrophic for trust in Bitcoin's monetary properties.
- **The patch worked because the social process works.** Private disclosure, fast review, fast deployment by infrastructure operators. The same coordination would be needed for any future critical bug.
- **It's a reminder that "the code is the constitution" requires the code to actually be right.** Bitcoin's monetary commitments depend on Bitcoin Core (and its compatible implementations) actually enforcing the rules. Subtle bugs in optimization paths can undermine the commitments.

CVE-2018-17144 remains the most cited example when developers argue for conservative changes to the validation code path, more test coverage on consensus-critical functions, and minimum review periods on optimizations.

See the [Inflation Bug Postmortem rabbit hole](/rabbit-hole/inflation-bug-postmortem) for the full story of the 2010 overflow bug, and Bitcoin Core's [disclosure](https://bitcoincore.org/en/2018/09/20/notice/) for the 2018 timeline.
