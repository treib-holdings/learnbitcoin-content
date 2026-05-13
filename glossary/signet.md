---
title: "Signet"
slug: signet
draft: false
shortDefinition: "A specialized Bitcoin test network where blocks are signed by a central coordinator, offering more stability than Testnet."
keyTakeaways:
  - "Combines aspects of public test networks with controlled block production"
  - "Eases software testing with stable, low-spam conditions"
  - "Still distinct from mainnet; not for real BTC usage"
sources: []
relatedTerms: []
liveWidget: ~
---

Signet is a Bitcoin test network ([BIP-325](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki)) where blocks are produced on a regular schedule by a designated **block signer** rather than by competitive [mining](/glossary/mining). It's the test environment for serious protocol and wallet development.

What Signet fixes vs [testnet](/glossary/testnet):

- **Predictable block times.** Signet blocks come every ~10 minutes consistently. No 20-minute droughts followed by 30 blocks in 5 minutes.
- **No spam-driven difficulty wars.** The signer controls block production; there's nothing to spam.
- **Realistic-feeling fee market.** With predictable blocks, you can actually test fee estimation and congestion behavior in a way that's hard on chaotic testnet.

What Signet trades for that stability:

- **The signer is a trusted role.** It's appropriate for a test network, but a real attacker controlling the signer could disrupt Signet trivially. The default Signet has a known signer; you can run *your own* Signet with your own signer if you want a controlled environment.
- **Coins are still worthless.** It's a test network; Signet BTC has no economic value.

Custom Signets are increasingly common. A team can spin up their own signer, distribute the network's magic parameters, and have a fully-controlled test environment with whatever block-production cadence they want. This is the default for protocol-development work like Taproot, Drivechains experimentation, and Lightning protocol-spec testing.

For most everyday wallet development, the default Signet is fine. For weird edge-case testing, run your own. See [Testnet](/glossary/testnet) for the older, less-controlled alternative and [Mainnet](/glossary/mainnet) for the real thing.
