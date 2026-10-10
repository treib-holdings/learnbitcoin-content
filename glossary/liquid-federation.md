---
title: "Liquid Federation"
slug: liquid-federation
draft: false
updated: "2026-10-10"
shortDefinition: "The group of companies behind the Liquid sidechain; 15 functionaries run by its members sign blocks and hold the multisig keys to the pegged BTC."
keyTakeaways:
  - "Federated multi-sig group securing the Liquid sidechain peg"
  - "Requires a threshold of signers to release pegged BTC"
  - "Provides quicker block times and confidential features, but not fully trustless"
sources:
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key in its HSM; Blockstream holds emergency backup keys usable after a 4,032-block timelock that is refreshed in normal operation)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (15 functionaries take turns proposing blocks and 11 of 15 sign each one; each functionary is run by a single federation member; HSM signing rules; functionaries dispersed around the world)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Liquid docs - Technical Overview (a block every minute; blocks stop if a third or more of functionaries are offline; other federation members can peg in and out without a direct role in securing the network; amounts and asset types hidden by default)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: 87 federation members; DePix, a Brazilian-real stablecoin, on Liquid; Boltz runs Liquid-Lightning swaps; new tokenized securities (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network launch press release: chain live September 27, 2018 with 23 members, mostly exchanges, including Bitfinex and BTSE (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid Network homepage - member logos include Bull Bitcoin, SideSwap and Boltz; footer names Blockstream as technology provider to the Liquid Federation; banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: range-proof cache bug, about 4,000 unbacked L-BTC, 3,996.02 BTC released via SideSwap's peg-out, no key compromised, two causes (the Elements consensus bug and SideSwap's online peg-out key with automatic payouts), 3,400 BTC returned, USDt and DePix unaffected (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper: all transactions publicly announced; blocks assumed every 10 minutes (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - liquid-network
  - multisig
  - peg
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
---

The **Liquid Federation** is the group of companies that oversee the [Liquid Network](/glossary/liquid-network) sidechain. Fifteen functionaries, each run by a single member, sign Liquid blocks and hold the 15 keys to the multisig wallet behind the [two-way peg](/glossary/peg) with Bitcoin's mainnet. A functionary is a server paired with a hardware security module (HSM). The other members can peg in and out and validate the chain, but play no direct role in securing it.

The structure as of 2026:

- **87 federation members, as of May 2026.** Most of the 23 launch members in 2018 were exchanges, such as Bitfinex and BTSE. Later members include wallet, payment and swap companies such as Bull Bitcoin, SideSwap and Boltz. Blockstream, which built Liquid, is the federation's technology provider.
- **Block signing rotates.** The 15 functionaries take turns proposing blocks, and a block joins the chain once 11 of the 15 have checked and signed it. Blocks come every ~1 minute.
- **Peg-out approval requires a threshold.** Moving BTC from Liquid back to Bitcoin's mainnet via peg-out requires signatures from 11 of the 15 functionaries that hold the federation wallet's keys, as of October 2026.
- **Keys in dedicated hardware.** Each functionary keeps its keys in its HSM, which won't sign a block that would reorganize the chain by more than one block, and signs a peg-out only if the coins go back to the federation or to a whitelisted address. The functionaries are spread around the world.

The trust assumption: if 11 of the 15 functionaries colluded, or had their keys stolen, they could sign away the pegged BTC. If five or more went offline or stopped signing, the sidechain would halt. Spreading the functionaries across operators and countries makes this hard but not impossible. As a backstop, Blockstream holds a set of emergency backup keys that can spend the pegged coins once a timelock of up to 4,032 blocks (about 28 days) runs out. The federation keeps refreshing those timelocks while the network runs normally, so the emergency keys only come into play if it stops working. The peg also depends on the software every functionary runs, as the 2026 exploit described below showed.

What this trust gets in exchange:

- **Fast settlement.** ~1-minute blocks vs Bitcoin's ~10-minute.
- **Confidential transactions.** Bitcoin's transparent chain can't hide amounts; Liquid's does.
- **Issued assets.** Stablecoins such as USDT and DePix, and tokenized securities, are issued on the same chain.

**The September 2026 exploit.** On September 6, 2026, an attacker used a bug in how Elements, the software every functionary runs, caches range-proof checks, and created about 4,000 L-BTC with no bitcoin behind it. The functionaries accepted those coins as valid, and when the attacker redeemed them through SideSwap's peg-out service, they signed the release of about 3,996 BTC. According to Blockstream, no keys were compromised. It traced the loss to two weak points: the shared software the functionaries rely on to reject fake coins, and the way SideSwap ran its peg-out service, paying out automatically instead of holding the BTC for a manual check. The attacker returned 3,400 BTC the next day, and as of October 10, 2026, peg-outs were still paused and the peg wallet held about 600 BTC less than the L-BTC in circulation. See [Liquid Network](/glossary/liquid-network) for more on the incident.

Whether the trade is worth it depends on how far you trust the 15 functionary operators and the software they run. If you don't, you have to look elsewhere - mainnet, Lightning, or watch what [BIP-300 drivechains](/glossary/bip-300-drivechains) eventually become.

See [Liquid Network](/glossary/liquid-network) for the sidechain itself.
