---
title: "Greenlist"
slug: greenlist
draft: false
shortDefinition: "A contentious practice of labeling certain BTC addresses as 'approved,' conflicting with Bitcoin's permissionless nature."
keyTakeaways:
  - "Approves certain addresses as 'safe' or 'compliant'"
  - "Threatens Bitcoin's open-access design and fungibility"
  - "Represents a regulatory approach to controlling transaction flows"
sources: []
relatedTerms:
  - address-reuse
  - aml-anti-money-laundering
  - bitlicense
  - fincen
  - kyc-know-your-customer
liveWidget: ~
---

A greenlist is the policy of permitting transactions only to or from a pre-approved set of addresses. It's the inverse of a blacklist (which forbids specific addresses while allowing everything else). In Bitcoin context, the term mostly comes up in regulatory discussions about KYC compliance.

How greenlisting would work in practice:

- A custodian builds a list of addresses it considers "clean" - addresses tied to other KYC-verified entities, addresses from known-legitimate sources, etc.
- The custodian only allows withdrawals to greenlisted addresses, refusing requests to send to addresses without sufficient compliance pedigree.
- Receiving from non-greenlisted addresses might trigger holds, additional verification, or rejection.

Why this matters as a debate:

- **Fungibility threat.** A foundational property of money is that every unit is interchangeable with every other unit. Greenlisting creates a structural difference between "good coins" (from approved addresses, smoothly accepted) and "bad coins" (from non-approved addresses, refused or held up). That's two-tier money.
- **Censorship risk.** A coin whose acceptability depends on a custodian's policy is a coin the custodian can selectively reject. The censorship can be made arbitrary; the user has no recourse other than choosing a different custodian.
- **Compliance pressure.** Regulators have pushed in this direction (FATF travel rule, EU AMLD provisions, US OFAC sanctions enforcement). Some custodians have implemented partial greenlisting voluntarily; others have resisted.

Real examples:

- **Coinbase**: scores incoming deposits via Chainalysis-driven risk analysis; high-risk deposits can be frozen.
- **Various European exchanges** under MiCA increasingly restrict withdrawals to "verified beneficiary" addresses for amounts above thresholds.
- **OFAC SDN list compliance** is universal among regulated custodians; sending to a listed address is functionally impossible from a major exchange.

The honest framing for Bitcoiners: greenlisting at the custodian layer is real and growing. Bitcoin's base layer remains permissionless - the network doesn't know or care about a greenlist - but the on-ramps and off-ramps are increasingly gated. Self-custody plus peer-to-peer trading is the structural answer: greenlisting only constrains people who depend on custodians.
