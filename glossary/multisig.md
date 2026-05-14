---
title: "Multisig"
slug: multisig
draft: false
shortDefinition: "A wallet setup where spending requires multiple signatures, so no single key (or single key holder) can move funds alone."
keyTakeaways:
  - "Spending requires M of N cosigner signatures (e.g., 2-of-3)"
  - "Eliminates the single-point-of-failure problem of a single seed"
  - "Standard pattern: each cosigner key on a different device, often in different locations"
sources: []
relatedTerms:
  - hierarchical-multisig
  - interactive-multi-sig
  - k-k-multisig
  - hdm-multi-signature-hd-wallet
  - m-n
  - key-aggregation
  - musig
  - musig2
  - partial-signature
  - partially-signed-bitcoin-transaction-psbt
  - quorum-signatures
  - shamir-secret-sharing
liveWidget: ~
---

Multisig is a wallet structure where the output requires multiple signatures to spend, not just one. The script encodes "M of N cosigners must sign" - you might have 3 cosigner keys (N=3) and require any 2 of them to sign for a spend to be valid (M=2). That's the classic [2-of-3](/glossary/m-n).

The point is to remove the single-point-of-failure problem of a normal single-sig wallet. With one seed, anyone who finds or copies it can drain you. With 2-of-3 multisig spread across three locations or three devices, an attacker needs to compromise two simultaneously - a much harder bar.

Common patterns:

- **2-of-3 personal custody.** One key on a hardware wallet at home, one with a custody service or in a safe deposit box, one with a trusted family member or attorney. Survives loss of any one. Steal one and you still can't spend. The sweet spot for serious personal holdings.
- **3-of-5 institutional.** Standard for corporate treasuries and large custodians. Survives loss of two, requires three to sign, often paired with hardware security modules.
- **2-of-2 Lightning channels.** Every Lightning channel is technically a 2-of-2 multisig output between you and your channel partner. Most users never see this; the protocol just uses multisig under the hood for the channel's funding output.

Bitcoin has two ways to express multisig on-chain:

- **Classical multisig** (`OP_CHECKMULTISIG`, pre-Taproot). Wrapped in P2SH or P2WSH. The script is visible on-chain when spent, so observers can see "this was a 2-of-3 spend." Capped at 15 cosigners by opcode design.
- **Taproot multisig** (post-2021). Either the script-path (a MAST tree, can go to many more cosigners) or, with MuSig2 / FROST [key aggregation](/glossary/key-aggregation), the spend looks identical to a single-sig Taproot output. Outside observers can't tell it was multisig at all. Privacy and fees both improve.

The signing flow uses [PSBT](/glossary/partially-signed-bitcoin-transaction-psbt). One cosigner builds the transaction, signs their part, passes it to the next, who adds their signature, and so on until the threshold is met. With hardware wallets and coordination tools like Sparrow, Nunchuk, or Specter, this is straightforward but more involved than single-sig.

When to use multisig: when the value justifies the operational complexity. For small balances, a well-backed-up single-sig hardware wallet is more secure than a multisig you'll fumble. For amounts you can't afford to lose and won't move daily, multisig is the right answer.
