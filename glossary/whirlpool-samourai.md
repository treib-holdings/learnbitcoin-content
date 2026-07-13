---
title: "Whirlpool / Samourai Wallet"
slug: whirlpool-samourai
draft: false
published: "2026-07-13"
shortDefinition: "The mobile privacy wallet and its CoinJoin service whose founders were arrested in April 2024 and sentenced to prison in 2025. The case that redrew the legal map for coordinator-based mixing."
keyTakeaways:
  - "US prosecutors arrested founders Keonne Rodriguez and William Hill on April 24, 2024, alleging over $2 billion in unlawful transactions through Whirlpool and Ricochet"
  - "Both pleaded guilty in 2025 to conspiracy to operate an unlicensed money transmitting business - not to the money laundering count - and were sentenced to 5 and 4 years"
  - "The service never held customer funds; prosecutors treated a non-custodial coordinator as money transmission anyway, which is widely credited with pushing Wasabi's coordinator to announce its own shutdown days later"
sources:
  - { label: "US DOJ SDNY - founders of cryptocurrency mixing service arrested and charged (2024)", url: "https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering" }
  - { label: "US DOJ SDNY - Samourai Wallet founders sentenced (2025)", url: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years" }
relatedTerms:
  - coinjoin
  - wasabi-wallet
  - joinmarket
  - joinstr
  - mixing-service
  - kyc-know-your-customer
sameAs:
  - "https://en.wikipedia.org/wiki/Samourai_Wallet"
liveWidget: ~
---

Samourai Wallet was a mobile Bitcoin wallet built around privacy. Its flagship feature was Whirlpool, a [CoinJoin](/glossary/coinjoin) implementation in which a coordinator run by the Samourai team arranged fixed-denomination mixing rounds, plus Ricochet, which added extra transaction hops to frustrate [chain analysis](/glossary/chain-analysis). The software was non-custodial: users held their own keys, and the coordinator never took possession of anyone's coins.

That last fact is why the case matters. On April 24, 2024, the US Department of Justice arrested founders Keonne Rodriguez and William Lonergan Hill, charging them with conspiracy to commit money laundering and conspiracy to operate an unlicensed money transmitting business. The indictment alleged the services executed over $2 billion in unlawful transactions and facilitated more than $100 million in money laundering from illicit markets. The wallet's servers and domain were seized the same day, the Whirlpool coordinator went dark for good, and a seizure warrant pulled the Android app from Google Play for US users.

In July 2025 both founders pleaded guilty to the unlicensed money transmitting count, not to the laundering charge, which was dropped in the deal. Rodriguez was sentenced to five years in November 2025, Hill to four, and the pleas included an agreed forfeiture of about $238 million. The precision matters when this case gets argued about. They were charged with two things and convicted of one. The marketing did not help either: the founders had publicly welcomed criminal funds in ways that featured heavily in the case. And because the case ended in a plea, no court ever ruled on whether running a non-custodial coordinator actually is money transmission. The legal question the whole industry cared about remains open.

The fallout reshaped Bitcoin privacy tools for the rest of 2024. Prosecutors had treated a non-custodial coordinator, software that never held a single customer coin, as a money transmitting business. Days later, [Wasabi's](/glossary/wasabi-wallet) coordinator operator announced its own exit, a move universally read as a response to exactly that legal theory, and coordinator-based mixing in the US effectively ended. What survived were the designs with no coordinator to arrest: [JoinMarket](/glossary/joinmarket) and, later, [Joinstr](/glossary/joinstr).
