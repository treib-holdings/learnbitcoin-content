---
title: "Authorized Participant"
slug: authorized-participant
draft: true
shortDefinition: "A large broker-dealer with a contract to create and redeem ETF shares directly with the issuer. The arbitrage mechanism that keeps an ETF's market price aligned with its Net Asset Value."
keyTakeaways:
  - "Only APs interact directly with the fund; retail trades on the open stock exchange"
  - "APs arbitrage: when market price > NAV they create shares, when market price < NAV they redeem"
  - "For Bitcoin ETFs the AP list includes Jane Street, Virtu, JPMorgan, Goldman Sachs, ABN AMRO, Macquarie, and others"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - liquidity
  - exchange
liveWidget: ~
---

An Authorized Participant (AP) is a large broker-dealer with a contractual relationship with an ETF issuer that lets it create and redeem ETF shares directly with the fund. Retail investors and most institutions trade ETF shares on the open market through a normal broker; APs alone can mint new shares or destroy existing ones in exchange for the underlying assets (or cash, depending on the structure).

Why APs exist:

- **Continuous arbitrage.** When demand pushes an ETF's market price above its [Net Asset Value](/glossary/nav-net-asset-value), an AP can buy the underlying (BTC), deliver it to the issuer in exchange for new shares at NAV, and sell those shares at the elevated market price. Risk-free profit, modulo execution costs. The act of doing this closes the gap. When market price falls below NAV, APs reverse the trade: buy ETF shares at the discount, redeem them for BTC (or cash) at NAV, and sell that. Either way, the [premium or discount](/glossary/premium-discount-to-nav) gets compressed back toward zero.
- **Inventory provision.** APs typically also act as market makers in the ETF shares themselves, quoting bids and offers on the [exchange](/glossary/exchange) and providing intraday [liquidity](/glossary/liquidity).

How a creation works mechanically:

1. AP wants to create a creation unit (typically 5,000 to 40,000 shares for Bitcoin ETFs, varies by issuer).
2. AP delivers the required basket to the issuer. For cash creation: USD equal to NAV times unit size. For in-kind: BTC equal to the BTC backing per share times unit size.
3. Issuer credits the AP with the new shares.
4. AP sells the shares into the market (or holds them as inventory).

Redemption is the same in reverse.

Who APs are for spot Bitcoin ETFs:

The major US spot ETFs disclosed their initial AP lists in their prospectuses. Names that appear across multiple products include:

- **Jane Street** - high-frequency market maker, AP for most major US ETFs across asset classes
- **Virtu Financial** - market maker, very common AP across ETF products
- **JPMorgan Securities** - large broker-dealer, AP for institutional-skewed products
- **Goldman Sachs** - large broker-dealer
- **ABN AMRO Clearing** - European clearing firm with US operations
- **Macquarie Capital** - investment bank, active in commodity ETFs
- **Cantor Fitzgerald, BofA Securities, Barclays Capital** - large broker-dealers also on various AP lists

The Bitcoin-specific wrinkle:

Traditional commodity ETFs (gold, silver) have AP arrangements built around well-understood physical settlement infrastructure. For spot Bitcoin ETFs, APs need access to BTC liquidity to fulfill creations. Some APs run their own BTC trading desks. Others use Coinbase Prime, OTC desks, or futures markets to source. The 2024 [SEC requirement](/glossary/creation-redemption) for cash-only creation initially meant the issuer (typically via Coinbase Custody) handled the spot BTC execution, but the AP still had to deliver USD in size, which is non-trivial for daily flows in the hundreds of millions.

Why this matters for a retail Bitcoin ETF buyer:

- A healthy AP list means tight spreads and tight tracking. If APs are absent or hesitant, the wrapper breaks.
- AP behavior is one reason spot Bitcoin ETFs have tracked the underlying so cleanly since launch - the arbitrage is profitable and many capable firms run it.
- AP concentration risk exists but is generally less acute than custodian concentration: APs compete; custody for 8 of 11 ETFs is at one firm.
