---
title: "Peg-out"
slug: peg-out
aliases:
  - "peg out"
  - "pegout"
draft: false
published: "2026-10-14"
shortDefinition: "Devolver los tokens de una sidechain a BTC en la cadena principal, después de que la federación o la multisig verifica que la transacción es válida."
keyTakeaways:
  - "Los tokens de la sidechain se canjean por BTC reales en la cadena principal"
  - "La multisig de la federación o sus funcionarios confirman que no hay doble gasto"
  - "Cierra el ciclo del peg bidireccional, de la sidechain de vuelta a Bitcoin"
sources:
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs, one key per functionary)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Liquid docs - Technical Overview (peg-outs processed in batches, expected 11 to 35 minutes; federation members peg out with a Peg-out Authorization Key (PAK); the general public cannot peg out on its own and goes through a functionary or participant)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Rootstock docs - PowPeg (peg-out waits 4,000 Rootstock blocks before PowHSMs sign)", url: "https://dev.rootstock.io/concepts/foundations/powpeg/" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work, need 13,150 miner ACKs at most one per block", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: SPV proofs to move coins back to Bitcoin need a soft fork; federated peg as an interim option (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: range-proof cache bug created about 4,000 unbacked L-BTC; 3,996.02 BTC released through a normal peg-out; no key compromised; 3,400 BTC returned; network halted September 6, 2026, including peg-outs, and blocks resumed with peg-outs paused (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-guard
  - sidechain
liveWidget: ~
translationOf: peg-out
sourceHash: "666d0a75055f"
sourceCommit: "659e6f9"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Un **peg-out** es la operación de convertir los tokens de una sidechain (cadena lateral) de vuelta en BTC de la cadena principal (mainnet), con lo que se completa el viaje de ida y vuelta que empezó con un [peg-in](/es/glosario/peg). Es la mitad del ciclo de vida del [peg (anclaje) bidireccional](/es/glosario/peg) que exige más supuestos de confianza, porque alguien tiene que autorizar que se liberen en la cadena principal los BTC que se bloquearon al principio.

La mecánica depende de la arquitectura del peg:

- **[Peg federado](/es/glosario/liquid-network) (por ejemplo, Liquid):** los L-BTC se queman en Liquid; la [federación](/es/glosario/federacion-de-liquid) verifica la quema, y un umbral de sus funcionarios (11 de 15) firma una transacción que libera BTC desde la multisig que la federación tiene en la cadena principal. En Liquid, solo los miembros de la federación que tienen una clave de autorización de peg-out (PAK) pueden hacer un peg-out, así que los demás usuarios pasan por uno de ellos. Los supuestos de confianza críticos son que la federación ejecuta los peg-outs con honestidad y que el software que usa rechaza las monedas que no deberían existir.
- **Drivechain ([BIP 300 (en inglés)](/glossary/bip-300-drivechains)):** las propuestas de retiro se someten al voto de los [mineros](/es/glosario/minero) durante un periodo largo (unos 3 meses). Si aprueban suficientes mineros, se liberan los BTC. Esto traslada la confianza a la mayoría de la minería.
- **Peg validado por SPV:** el paper de sidechains de 2014 propuso que fuera Bitcoin mismo quien liberara las monedas bloqueadas al recibir una prueba SPV de que se habían devuelto en la sidechain. El script de Bitcoin no puede verificar esas pruebas sin un soft fork, así que el mismo paper sugirió un peg federado mientras tanto.

Qué puede salir mal con los peg-outs:

- **Negativa de la federación.** Si una federación decide censurar un peg-out (por cumplimiento de sanciones, por una disputa, por mala fe), el usuario se queda atascado con tokens de la sidechain que no puede canjear.
- **Federación comprometida.** Una federación hackeada o coaccionada podría aprobar un peg-out falso y vaciar los BTC bloqueados.
- **Errores de software.** Un error en la propia validación de la sidechain puede permitir que alguien cree tokens sin respaldo que una federación honesta luego canjea. Eso pasó en Liquid en septiembre de 2026: unos 3,996 BTC salieron del peg sin que se comprometiera ninguna clave, 3,400 BTC se devolvieron después, y los peg-outs, detenidos el 6 de septiembre de 2026, seguían pausados al 10 de octubre de 2026 (ver [Liquid Network](/es/glosario/liquid-network)).
- **Procesamiento lento.** Los peg-outs al estilo drivechain son lentos a propósito (meses). Los peg-outs federados son más rápidos: la documentación de Liquid prevé de 11 a 35 minutos, mientras que Rootstock espera 4,000 de sus propios bloques antes de firmar.
- **Falla de la sidechain.** Si la sidechain misma falla (un error, un cierre, una toma hostil), los peg-outs pueden volverse imposibles.

Para quien mueve valor real por una sidechain, la ruta del peg-out es el riesgo clave que hay que evaluar. Una vez que tus BTC entraron por el peg-in, quedas atado a lo que el mecanismo de peg-out entregue de verdad bajo presión.

Consulta [Peg](/es/glosario/peg) para el peg-in y el contexto más amplio, y [Peg-Guard (en inglés)](/glossary/peg-guard) para los mecanismos de seguridad.
