---
title: "K-of-K Multisig"
slug: k-k-multisig
draft: false
shortDefinition: "A multisignature scheme requiring all signers (e.g., a 3-of-3) to approve a transaction, maximizing security but reducing flexibility."
keyTakeaways:
  - "Demands unanimous approval from all cosigners"
  - "Greatly boosts security at the cost of redundancy"
  - "Requires careful backup to prevent permanent lockups"
sources: []
relatedTerms:
  - hierarchical-multisig
  - m-n
  - multisig
  - musig
  - musig2
liveWidget: ~
---

K-of-K multisig (more commonly written n-of-n) is the multi-signature configuration where every single cosigner must sign for a transaction to be valid. A 2-of-2 setup needs both keys; 3-of-3 needs all three. No threshold flexibility.

The security/redundancy tradeoff:

- **Security: maximum.** No subset of cosigners can spend without unanimous consent. Compromising any subset short of the full set yields nothing.
- **Redundancy: minimum.** Losing access to any single key permanently locks the funds. There's no fallback.

Where k-of-k makes sense:

- **Lightning channels.** Every Lightning channel is a 2-of-2 multisig between the two channel partners. Both keys are required to spend the channel funds (under normal cooperative-close conditions); the penalty mechanism handles dispute resolution if one party tries to cheat with an old state.
- **Atomic swaps and HTLCs.** Often constructed as 2-of-2 with timelock fallbacks.
- **High-security institutional treasuries** where the operational requirement is "no single point of failure including any cosigner" and the institution maintains redundant backup procedures for every key.
- **Joint accounts** between two specific entities (business partners, spouses) where the intent is "neither of us can spend without the other."

Where k-of-k is the wrong choice:

- **Personal long-term self-custody.** A 2-of-3 (allowing recovery if any one of three keys is lost) is dramatically more resilient than a 2-of-2 (where any key loss locks the funds).
- **Inheritance scenarios.** Heirs need a path to the funds. K-of-k with all keys held by the original owner means no path.
- **Cross-team operational use.** If even one cosigner is offline or unavailable, transactions can't happen. Threshold multisig (m-of-n with m < n) avoids this.

The rule of thumb: use k-of-k only when the security requirement is unanimous-consent-or-nothing AND you have separate robust procedures to ensure no cosigner ever permanently loses access. For most uses, the m-of-n variant where m < n (typically 2-of-3 or 3-of-5) is the right answer. The cost of one extra cosigner key is much lower than the cost of losing funds to a single-cosigner failure.
