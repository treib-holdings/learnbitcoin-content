---
title: "Fiat"
slug: fiat
draft: false
published: "2026-10-14"
shortDefinition: "Dinero emitido por un gobierno, como el dólar (USD) o el euro (EUR), sin respaldo en ninguna mercancía física y cuyo valor depende de la autoridad del Estado."
keyTakeaways:
  - "Lo emiten y regulan los gobiernos"
  - "No tiene respaldo en ninguna mercancía: su valor descansa en la confianza y en la política monetaria"
  - "Bitcoin se cotiza con frecuencia contra monedas fiat, por liquidez y por adopción"
aliases:
  - "dinero fiat"
  - "moneda fiat"
  - "dinero fiduciario"
  - "moneda fiduciaria"
sources:
  - { label: "Federal Reserve - Is U.S. currency still backed by gold? (FAQ: Federal Reserve notes are not redeemable in gold, silver, or any other commodity)", url: "https://www.federalreserve.gov/faqs/currency_12770.htm" }
  - { label: "Federal Reserve - Is it legal for a business to refuse cash? (FAQ quoting 31 U.S.C. 5103: coins and currency are legal tender for all debts, public charges, taxes, and dues)", url: "https://www.federalreserve.gov/faqs/currency_12772.htm" }
  - { label: "BLS - CPI Inflation Calculator ($100 in January 1913 has the same buying power as $3,418.16 in August 2026)", url: "https://data.bls.gov/cgi-bin/cpicalc.pl?cost1=100&year1=191301&year2=202608" }
  - { label: "INDEC - Indice de precios al consumidor, serie historica, sheet 'Indices IPC Cobertura Nacional' (national general index, December 2016 = 100: 126.99 in January 2018, 12,276.77 in August 2026)", url: "https://www.indec.gob.ar/ftp/cuadros/economia/sh_ipc_09_26.xls" }
  - { label: "Satoshi Nakamoto - Bitcoin open source implementation of P2P currency, P2P Foundation, 11 February 2009 (the central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust)", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/" }
  - { label: "Bitcoin Core source - GetBlockSubsidy, the fixed issuance schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
relatedTerms:
  - bitcoin-atm
  - bitcoin-bond
  - cbdc-central-bank-digital-currency
  - fincen
  - kyc-know-your-customer
  - price-discovery
  - price-floor-btc
  - price-slippage
  - volatility
liveWidget: ~
translationOf: fiat
sourceHash: "1d9eb1614c9c"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

El dinero fiat (fiduciario) es dinero que vale porque un gobierno lo decreta, no porque tenga respaldo físico. El dólar estadounidense, el euro, el yen: todos son fiat. No hay oro en ninguna bóveda que los canjee; su valor descansa por completo en las leyes de curso legal y en la confianza en el banco central que los emite.

El fiat tiene dos superpoderes que Bitcoin no tiene. Primero, la autoridad de un Estado puede obligar a la gente a aceptarlo: intenta pagar tus impuestos en Estados Unidos con BTC. Segundo, el emisor puede crear más cuando quiera. Ese segundo poder es también la razón por la que el fiat pierde poder adquisitivo, sin falta, década tras década. El dólar estadounidense ha perdido cerca del 97% de su valor de 1913: lo que $100 compraban en enero de 1913 costaba $3,418 en agosto de 2026, según la propia calculadora del BLS, la oficina de estadísticas laborales de Estados Unidos. El peso argentino ha perdido cerca del 99% de su valor de 2018 en menos de una década: el índice de precios al consumidor del INDEC se multiplicó por 97 entre enero de 2018 y agosto de 2026.

Bitcoin se diseñó como una alternativa directa: sin emisor, sin política discrecional, con una oferta fija. Eso no significa que el fiat vaya a desaparecer mañana. La mayoría de las personas del planeta cobran en fiat, pagan el alquiler en fiat y convierten a BTC por una "rampa de entrada" (fiat on-ramp): un exchange, un cajero automático de Bitcoin o un intercambio entre pares (P2P). Los dos sistemas coexisten. El papel de Bitcoin es ser la opción que no se puede diluir.

Consulta [Inflación](/es/glosario/inflacion) para el mecanismo concreto por el que el fiat pierde poder adquisitivo, y el [capítulo 1 del Recorrido](/es/recorrido/por-que-el-dinero-esta-roto) para la versión larga de por qué esto importa.
