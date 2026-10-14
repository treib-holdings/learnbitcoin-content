---
title: "Prueba de reservas"
slug: prueba-de-reservas
draft: false
published: "2026-10-15"
shortDefinition: "Una demostración criptográfica de que un exchange o un custodio de verdad tiene las monedas que dice tener. Una mejora real después de FTX, pero prueba activos, no solvencia."
keyTakeaways:
  - "La prueba de reservas usa datos on-chain y criptografía para mostrar que un custodio controla un conjunto concreto de monedas"
  - "Se volvió una exigencia estándar la semana en que cayó FTX, porque FTX es exactamente lo que está pensada para detectar"
  - "Es una señal parcial, no una garantía: prueba activos sin probar pasivos, y una instantánea se puede montar para el día de la auditoría"
aliases:
  - "pruebas de reservas"
  - "prueba de reserva"
  - "proof of reserves"
  - "proof-of-reserves"
sources:
  - { label: "BIP-127 - Simple Proof-of-Reserves Transactions (assigned 2019-01-28): proofs of reserves are a way for companies managing large amounts of bitcoins to prove ownership over a given amount of funds; the BIP formalizes only the de-facto method and notes its privacy shortcomings", url: "https://github.com/bitcoin/bips/blob/master/bip-0127.mediawiki" }
  - { label: "Bitcoin Optech - Proof of reserves topic: a timestamped commitment to a distribution of funds signed by the entity who controls them; it cannot guarantee the funds are available; a merkle-sum tree can show each depositor their own amount and how it contributes to the proven total", url: "https://bitcoinops.org/en/topics/proof-of-reserves/" }
  - { label: "Dagher, Bunz, Bonneau, Clark, Boneh - Provisions: Privacy-preserving proofs of solvency for Bitcoin exchanges (2015): a proof of solvency demonstrates that the exchange controls sufficient reserves to settle each customer's account", url: "https://eprint.iacr.org/2015/1008" }
  - { label: "PCAOB Office of the Investor Advocate - Exercise caution with proof of reserve reports (March 8, 2023): PoR reports purport to verify an asset type at a particular moment in time, likely do not address liabilities or whether the assets were borrowed, and give no assurance about what happens after the report", url: "https://pcaobus.org/resources/information-for-investors/investor-advisories/investor-advisory-exercise-caution-with-third-party-verification-proof-of-reserve-reports" }
  - { label: "CoinDesk - Crypto exchanges scramble to compile proof of reserves as FTX contagion grips markets (November 9, 2022): within 24 hours nine exchanges said they would publish Merkle tree reserve certificates, after Binance's CEO called for proof of reserves on November 8", url: "https://www.coindesk.com/business/2022/11/09/crypto-exchanges-scramble-to-compile-proof-of-reserves-as-ftx-contagion-grips-markets" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): FTX customer funds were diverted to Alameda Research; FTX paused all customer withdrawals on November 8, 2022", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
relatedTerms:
  - ftx
  - counterparty-risk
  - centralized-exchange-cex
  - self-custody
liveWidget: ~
translationOf: proof-of-reserves
sourceHash: "ac2232e5698e"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La prueba de reservas es un intento de que un custodio demuestre, con evidencia on-chain y criptográfica, que de verdad tiene las monedas que dice tener. Las versiones más completas combinan una prueba de activos, en la que el custodio demuestra que controla direcciones concretas (a menudo anclada a un árbol de Merkle con los saldos de los clientes, para que cada usuario pueda comprobar que su propio saldo está incluido), con una prueba de pasivos, un total verificable de lo que el custodio debe. Esa segunda parte es mucho más difícil y mucho más rara.

Se volvió una exigencia estándar la semana en que cayó [FTX (en inglés)](/glossary/ftx), porque FTX es exactamente la situación que está pensada para detectar: un exchange cuyos depósitos de clientes se habían mandado a otra parte sin que nadie lo supiera. A un exchange que puede probar que controla las monedas le cuesta más operar como operaba FTX.

Es una señal parcial, no una garantía. Mostrar tus reservas no es lo mismo que mostrar que eres solvente. Una empresa puede demostrar los activos que tiene sin decir nada de lo que debe, puede pedir monedas prestadas para pasar una auditoría que sabe que viene, y puede arreglárselas para parecer totalmente respaldada el único día en que la revisan. La mayoría de las "pruebas de reservas" publicadas hasta ahora cubren solo el lado de los activos. Es mejor que las promesas de marketing que reemplazó, pero no sustituye la [autocustodia](/es/glosario/autocustodia). El único conjunto de reservas que nunca tienes que dar por bueno a ciegas es el de las monedas cuyas claves tienes tú.

Consulta [De Mt. Gox a FTX: el cementerio de la custodia (en inglés)](/rabbit-hole/mt-gox-ftx-graveyard) para los colapsos que la hicieron necesaria.
