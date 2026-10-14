---
title: "Agrupación de direcciones (address clustering)"
slug: agrupacion-de-direcciones
draft: false
published: "2026-10-15"
shortDefinition: "Un método de análisis de cadena que asocia varias direcciones a un mismo usuario o entidad a partir de los patrones de sus transacciones."
keyTakeaways:
  - "Agrupa direcciones bajo un mismo controlador"
  - "Las empresas de análisis de cadena la usan para seguir el comportamiento de los usuarios"
  - "Reduce la privacidad cuando las direcciones comparten patrones de transacción"
aliases:
  - "agrupación de direcciones"
  - "agrupamiento de direcciones"
  - "clustering de direcciones"
  - "clustering"
  - "address clustering"
avoid:
  - "clusterización de direcciones"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10, Privacy (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Meiklejohn et al. - A Fistful of Bitcoins: Characterizing Payments Among Men with No Names, IMC 2013 (October 2013)", url: "https://cseweb.ucsd.edu/~smeiklejohn/files/imc13.pdf" }
  - { label: "BIP-78 - A Simple Payjoin Proposal: the common-input, change-scriptpubkey and change-round-amount heuristics", url: "https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki" }
  - { label: "Bitcoin Optech - Output linking topic", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Wiki - Privacy: common-input-ownership heuristic, change address detection, timing correlation, coin control", url: "https://en.bitcoin.it/wiki/Privacy" }
relatedTerms:
  - address
  - address-indexing
  - address-reuse
  - chain-analysis
  - coin-control
  - coinjoin
  - fungibility
liveWidget: ~
translationOf: address-clustering
sourceHash: "87b38c37ea95"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La agrupación de direcciones (address clustering) es la técnica de [análisis de cadena](/es/glosario/analisis-de-cadena) que consiste en agrupar [direcciones](/es/glosario/direccion) de Bitcoin que probablemente comparten dueño. Es la pieza básica sobre la que se construye casi toda la vigilancia de la cadena de bloques.

Las heurísticas principales:

- **Propiedad común de las entradas.** Si una sola [transacción](/es/glosario/transaccion) gasta UTXOs de varias direcciones, esas direcciones casi con seguridad comparten dueño (la única entidad que pudo firmar por todas ellas). Es, de lejos, la heurística de agrupación más fuerte, y la razón de que [PayJoin](/es/glosario/payjoin) trastorne tanto el análisis: viola ese supuesto a propósito.
- **Detección de la salida de cambio.** Una transacción suele tener dos salidas: el pago y el cambio. El cambio normalmente vuelve a quien envía. Detectar cuál salida es el cambio revela más sobre la propiedad. Varias heurísticas (pagos con cifras redondas, patrones de direcciones nuevas, coincidencia del tipo de script) sirven, de forma imperfecta, para identificar las salidas de cambio.
- **Reutilización de direcciones.** Si la dirección A ya se vio antes en cualquier contexto, cada transacción nueva que toque A queda vinculada a ese historial previo.
- **Correlación temporal.** Las transacciones transmitidas más o menos a la misma hora, desde la misma dirección de red o con la misma huella de billetera (patrones de comisión y otros valores por defecto) se atribuyen a un mismo usuario.
- **Anclaje externo.** Los exchanges con KYC tienen registros de clientes que vinculan direcciones con identidades. En cuanto se identifica una dirección del grupo, queda identificado el grupo entero.

La defensa de la privacidad consiste en violar a propósito estas heurísticas:

- No combines en una misma transacción UTXOs de contextos de identidad distintos.
- Usa el [control de monedas](/es/glosario/control-de-monedas) para elegir qué UTXOs gastar.
- Haz [CoinJoin](/es/glosario/coinjoin) o [PayJoin](/es/glosario/payjoin) para romper el supuesto de la entrada común.
- Evita la [reutilización de direcciones](/es/glosario/reutilizacion-de-direcciones).
- Usa [Lightning](/es/glosario/lightning-network) para los pagos que no necesitan pasar por la cadena.

La agrupación no es un momento único de detección: es un conjunto de indicios que se acumula y se vuelve más fuerte con el tiempo. La defensa también es continua: la privacidad en Bitcoin es una práctica, no un arreglo de una sola vez.

Consulta [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para conocer las dos heurísticas que construyen la mayoría de los grupos y el registro del exchange que les pone nombre.
