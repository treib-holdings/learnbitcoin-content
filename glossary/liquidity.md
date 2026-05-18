---
title: "Liquidity"
slug: liquidity
draft: false
shortDefinition: "The ease of buying/selling BTC with minimal price impact (in markets) or channel capacity (in LN)."
keyTakeaways:
  - "BTC markets: volume and order book depth for stable trades"
  - "LN channels: inbound/outbound capacity for successful routing"
  - "Vital to both exchange usage and off-chain LN payment flow"
sources: []
relatedTerms: []
liveWidget: ~
---

"Liquidity" means different things in Bitcoin's market context and its Lightning context. Both matter; conflating them confuses everything.

**Market liquidity** is about exchange order books and over-the-counter venues: how much you can buy or sell before moving the price. High liquidity means tight bid/ask spreads, large orders fill without slippage, and the price discovery process is robust. Low liquidity means thin order books, large spreads, and sharp price moves on modest volume. Major exchange spot markets for BTC/USD are deeply liquid (billions in daily volume, sub-cent spreads); smaller venues or exotic pairs are not.

**Lightning liquidity** is about channel balance distribution. Every Lightning channel has a total capacity (the amount in the funding output) split between local balance (yours, available to send) and remote balance (your peer's, available for them to send to you, i.e. your inbound capacity).

- **Outbound liquidity.** The balance on your side of your channels, available to send.
- **Inbound liquidity.** The balance on the other side of your channels, available for others to send to you. A new channel you funded has zero inbound liquidity; you can't receive until balance flows in.

Lightning users without enough inbound liquidity can't receive payments larger than what's already on the remote side. Lightning users without enough outbound can't send. Routing nodes need balanced channels (substantial liquidity on both sides) to forward in either direction.

Getting inbound liquidity:

- Spend your existing outbound first (every payment you send shifts balance to the other side, increasing your inbound).
- Buy inbound liquidity from a routing-node service ([liquidity ads](/glossary/liquidity-ads), Lightning Labs' Pool, etc.).
- Splice or open a channel where the other side commits the capital.
- Earn inbound by receiving payments (which is circular if you can't receive in the first place).

The asymmetry is one of Lightning's persistent UX challenges. New users routinely hit the inbound-liquidity wall on their first receive attempt and don't know why.
