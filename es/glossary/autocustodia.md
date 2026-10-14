---
title: "Autocustodia"
slug: autocustodia
draft: false
published: "2026-10-14"
shortDefinition: "Tener en tus manos las claves privadas de tus propios bitcoins, de modo que ningún exchange, banco ni custodio se interponga entre tú y tus monedas. Lo que Bitcoin se construyó para hacer posible."
keyTakeaways:
  - "En autocustodia controlas las claves privadas directamente: no hay ningún tercero que pueda congelar, prestar o perder tus monedas"
  - "Elimina el riesgo de contraparte, pero añade el riesgo de la responsabilidad personal: si pierdes tus claves, las monedas se pierden sin recurso alguno"
  - "Ajusta el esquema a lo que está en juego: una billetera de hardware para la mayoría de quienes guardan bitcoin, multisig cuando el monto ya te cambiaría la vida"
avoid:
  - "auto custodia"
  - "custodia propia"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 2, Transactions (2008): an electronic coin is defined as a chain of digital signatures, and each owner transfers it by signing it over to the next", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "bitcoin.org - Securing your wallet: when a third party controls your keys you rely entirely on their security and honesty, and exchanges and online wallets have been hacked, failed, or frozen access to funds; keep a backup in more than one place; forget your password and your funds are permanently lost; multi-signature protects against theft", url: "https://bitcoin.org/en/secure-your-wallet" }
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): 850,000 bitcoins missing, about 100,000 of them the exchange's own", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "Kroll, FTX case information: FTX Trading Ltd. and 101 affiliated debtors filed for Chapter 11 on November 11 and 14, 2022", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "Mt. Gox Rehabilitation Trustee - notice of repayment in bitcoin and Bitcoin Cash (July 5, 2024): the first repayments went to some creditors that day, a decade after the 2014 bankruptcy, with the rest to follow", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "In re FTX Trading (D. Del. 22-11068), Doc 36154 - FTX Recovery Trust financial report, Q2 2026 (filed August 17, 2026): after the July 31, 2026 distribution all allowed interest-bearing claims had received, or been reserved, at least a 100 percent cumulative recovery on their dollar claims", url: "https://restructuring.ra.kroll.com/FTX/ExternalCall-DownloadPDF?id1=NDA5NDM1MQ%3D%3D&id2=0" }
relatedTerms:
  - not-your-keys-not-your-coins
  - counterparty-risk
  - seed-phrase
  - private-key
  - mt-gox
  - ftx
  - hardware-wallet
  - multisig
liveWidget: ~
translationOf: self-custody
sourceHash: "eff1a112aa9e"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La autocustodia consiste en tener en tu poder las [claves privadas](/es/glosario/clave-privada) de tus propios bitcoins, de modo que ningún exchange, custodio ni banco se interponga entre tú y tus monedas. Bitcoin es un activo al portador: quien controla las claves controla el dinero. La autocustodia no es más que tomar ese control por tu cuenta, en lugar de entregárselo a alguien más.

Es la respuesta directa al [riesgo de contraparte (en inglés)](/glossary/counterparty-risk). Cuando tus claves están en tus manos, no hay empresa que pueda quebrar y dejarte en el aire, ni saldo que en realidad sea un préstamo disfrazado, ni nadie que pueda suspenderte los retiros. Cada nombre del cementerio de la custodia, de Mt. Gox a FTX, fue la falla de un custodio, no de Bitcoin. Las monedas se perdieron porque las claves las tenía otra persona.

Eso sí, la autocustodia no es gratis. Mueve el riesgo en lugar de eliminarlo. Pierde tu [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) y las monedas se van para siempre, sin nada de la recuperación parcial que una quiebra quizá termine produciendo. La habilidad principal que exige, respaldar bien una frase semilla, se aprende en una tarde, y puedes ajustar el esquema al monto. Una sola [billetera de hardware](/es/glosario/billetera-de-hardware) (hardware wallet) ya es una gran mejora frente a un saldo en un exchange, y la [multisig](/es/glosario/multisig) vale el esfuerzo cuando perder el dinero dolería de verdad. Para la mayoría de quienes guardan bitcoin a largo plazo, cambiar riesgo de contraparte por responsabilidad personal es un buen trato.

Lee [De Mt. Gox a FTX: el cementerio de la custodia (en inglés)](/rabbit-hole/mt-gox-ftx-graveyard) para ver la década de pruebas que hay detrás de esto.
