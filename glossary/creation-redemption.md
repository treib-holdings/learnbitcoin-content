---
title: "Creation / Redemption (Cash vs In-Kind)"
slug: creation-redemption
draft: true
shortDefinition: "The process by which ETF shares are minted (creation) or destroyed (redemption) through Authorized Participants, in exchange for either cash or the underlying asset. The core arbitrage mechanism that keeps ETFs tracking their NAV."
keyTakeaways:
  - "Cash creation: AP delivers USD, issuer executes the BTC trade"
  - "In-kind creation: AP delivers BTC directly to the issuer"
  - "US spot Bitcoin ETFs launched cash-only at SEC insistence; in-kind was subsequently approved"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - authorized-participant
  - nav-net-asset-value
  - premium-discount-to-nav
  - tracking-error
liveWidget: ~
---

Creation and redemption are how ETF shares are minted and destroyed. The process happens between the fund issuer and an [Authorized Participant](/glossary/authorized-participant), not on the open market. It is the mechanism that lets ETFs track their [Net Asset Value](/glossary/nav-net-asset-value) so closely.

**Creation (shares get minted):**

1. AP wants to create a creation unit - a large block of shares, typically 5,000 to 40,000 depending on issuer.
2. AP delivers the agreed basket to the issuer.
3. Issuer credits AP with the new shares.
4. AP sells shares into the market or holds as inventory.

**Redemption (shares get destroyed):**

1. AP wants to redeem.
2. AP delivers the shares back to the issuer.
3. Issuer delivers the basket (cash or underlying) back to the AP.
4. Shares are destroyed; share count drops.

The "basket" can take two forms:

**Cash creation/redemption:**

The AP delivers USD equal to NAV times unit size. The issuer (or its custodian) executes the spot BTC trade to deploy the cash. Redemption runs in reverse: issuer sells BTC, delivers USD to AP.

- **Pro:** simpler for APs that lack their own BTC trading desk.
- **Con:** execution price may differ from the NAV strike, introducing slippage and [tracking error](/glossary/tracking-error). Realized gains/losses from the issuer's BTC trades flow through the fund, with tax consequences.

**In-kind creation/redemption:**

The AP delivers BTC directly to the issuer. Issuer accepts the BTC into custody and credits the AP with shares. Redemption is the reverse.

- **Pro:** no execution risk inside the fund. Tax-efficient: the issuer never realizes capital gains because BTC moves in and out at cost basis. This is the standard mechanic for most commodity ETFs.
- **Con:** AP needs the operational capability to handle BTC custody, transfers, and settlement at institutional scale.

The Bitcoin-specific history:

- **January 2024 launch - cash-only.** When the US SEC approved the first eleven [spot Bitcoin ETFs](/glossary/spot-bitcoin-etf), it required cash-only creation/redemption. Gary Gensler's stated rationale was that broker-dealers (APs) were not registered to handle BTC directly. Critics argued this was a friction the SEC imposed to keep the wrapper one step removed from BTC itself; under cash-only, only the issuer's custodian (typically Coinbase Custody) touched the asset.
- **Subsequent in-kind approval.** After leadership changes at the SEC, in-kind creation/redemption was approved for spot Bitcoin ETFs, bringing them into line with traditional commodity ETF mechanics.

Why this matters:

- **Tracking quality.** In-kind tracking is structurally tighter than cash. The fund avoids execution slippage on flow days.
- **Tax efficiency.** In-kind creation/redemption is the central reason ETFs are more tax-efficient than mutual funds in the US. Cash-only Bitcoin ETFs gave up that advantage.
- **AP economics.** Cash creation is easier to operate but pays APs less because the arbitrage is partly captured by execution costs the issuer absorbs. In-kind shifts execution risk to the AP and rewards APs that can source BTC efficiently.

For a retail buyer, the mechanism is invisible. For tax-sensitive long-term holders, an in-kind Bitcoin ETF is structurally closer to the original ETF design that made the wrapper tax-efficient in the first place.
