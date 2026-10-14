---
title: "Altcoin"
slug: altcoin
draft: false
published: "2026-10-13"
shortDefinition: "Cualquier criptomoneda que no sea Bitcoin; abarca una enorme variedad de monedas con características y objetivos diversos."
keyTakeaways:
  - "Incluye miles de criptomonedas distintas de Bitcoin"
  - "A menudo introducen funciones o casos de uso nuevos"
  - "Son el segmento más riesgoso del mercado cripto"
sources:
  - { label: "GitHub - litecoin-project/litecoin: the Litecoin source tree is a fork of bitcoin/bitcoin (repository created June 2012)", url: "https://github.com/litecoin-project/litecoin" }
  - { label: "Ledger - Shen Noether and Adam Mackenzie, Ring Confidential Transactions: the original Monero protocol was based on CryptoNote, which uses ring signatures and one-time keys to hide the destination and origin of transactions (2016)", url: "https://ledger.pitt.edu/ojs/ledger/article/view/34" }
  - { label: "Gavin Wood - Ethereum: A Secure Decentralised Generalised Transaction Ledger (yellow paper): a blockchain with a Turing-complete language, first proposed by Buterin in November 2013", url: "https://ethereum.github.io/yellowpaper/paper.pdf" }
  - { label: "Zcash - Protocol Specification: Zcash is an implementation of the Decentralized Anonymous Payment scheme Zerocash, with a shielded payment scheme secured by zk-SNARKs", url: "https://zips.z.cash/protocol/protocol.pdf" }
  - { label: "BIP-341 - Taproot, Motivation: Schnorr signatures (BIP340) and Merkle branches (MAST, BIP114, BIP117) were among the ideas previously proposed for improving Bitcoin's scripting (2020)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "Google Patents - US4995082A, Claus P. Schnorr, method for generating and verifying electronic signatures: filed 1990-02-23, published 1991-02-19", url: "https://patents.google.com/patent/US4995082A/en" }
relatedTerms:
  - alt-season
  - bitcoin-bridge
  - bitcoin-cash
  - bitcoin-dominance
  - fork
  - rug-pull
liveWidget: ~
aliases:
  - "altcoins"
translationOf: altcoin
sourceHash: "76d0b756225f"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una "altcoin" es cualquier criptomoneda que no sea Bitcoin. El término abarca desde proyectos de investigación genuinamente novedosos (Monero, para la privacidad), pasando por bifurcaciones (forks) del código o de la cadena de Bitcoin con unos pocos parámetros cambiados (Litecoin, [Bitcoin Cash (en inglés)](/glossary/bitcoin-cash)), hasta puros ejercicios de marketing sin ninguna sustancia técnica (la mayor parte de la larga cola).

Este sitio es solo Bitcoin. Es una decisión editorial deliberada, no un desprecio a la curiosidad. Las razones por las que no cubrimos altcoins:

- **Las propiedades monetarias de Bitcoin son distintas en naturaleza, no en grado.** Una capa base de oferta fija, sin permiso, neutral y asegurada por mineros es aquello con lo que toda alternativa compite implícitamente. La mayoría o bien renuncia a una de esas propiedades (emisión centralizada, oferta modificable, conjuntos de validadores controlados) o nunca la tuvo. Las excepciones son interesantes; el grueso, no.
- **La mayoría de las altcoins son acciones financiadas con capital de riesgo, disfrazadas.** Los fundadores conservan grandes asignaciones preminadas. Los lanzamientos de tokens suelen parecerse más a una salida a bolsa (IPO) que a una innovación monetaria. El modelo económico premia primero a los de adentro. La peor versión del patrón (fundadores que descargan sobre el público la oferta preminada después del lanzamiento) es el [rug pull (en inglés)](/glossary/rug-pull) canónico, repetido en cada ciclo en la plataforma de turno que haga barato emitir un token nuevo.
- **El tiempo de adopción es finito.** Dedicar tiempo a aprender Bitcoin a fondo paga dividendos compuestos. Dedicarlo a saltar de altcoin en altcoin, no.

Lo que sí reconocemos:

- **Parte de la ingeniería de las altcoins es genuinamente novedosa.** Las firmas de anillo de Monero, la plataforma de contratos inteligentes de Ethereum, los zk-SNARKs de Zcash: todo eso hizo avanzar el estado del arte. Bitcoin incorpora ideas de afuera solo donde menos degradan sus propiedades, y despacio. Ni siquiera las dos grandes piezas de [Taproot](/es/glosario/taproot) fueron importaciones de altcoins: las [firmas Schnorr (en inglés)](/glossary/schnorr-signature) se remontan a la solicitud de patente que Claus Schnorr presentó en 1990, y los árboles de scripts vienen de las propuestas anteriores de [MAST (en inglés)](/glossary/merkleized-abstract-syntax-tree-mast) del propio Bitcoin.
- **La etiqueta "altcoin" esconde un supuesto.** Muchas cosas que se venden como "cripto" no pretenden ser *dinero* alternativo; son vehículos de especulación, experimentos de gobernanza o mercados de cómputo distribuido. Llamarlas altcoins las mete en el mismo saco que las alternativas monetarias, una competencia en la que en realidad no participan.

Los puentes que conectan BTC con cadenas de altcoins - [puentes de Bitcoin (en inglés)](/glossary/bitcoin-bridge), BTC envuelto (wrapped BTC), peg-ins custodiales - heredan los supuestos de confianza y las superficies de ataque de esas cadenas. BTC en Bitcoin es BTC. BTC en Ethereum es un pagaré.

Si estás aprendiendo Bitcoin y te preguntas si conviene diversificarte hacia las altcoins: la respuesta honesta es "después, si acaso, y solo cuando hayas entendido por qué las propiedades de Bitcoin son difíciles de replicar". La mayoría de quienes se diversifican demasiado pronto terminan con menos de todo.
