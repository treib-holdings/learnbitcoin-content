---
title: "Control de monedas"
slug: control-de-monedas
aliases:
  - "coin control"
draft: false
published: "2026-10-13"
shortDefinition: "Función de una billetera que te permite elegir a mano qué UTXOs gastar, lo que ayuda a la privacidad y a optimizar las comisiones."
keyTakeaways:
  - "Permite elegir con precisión qué UTXOs entran en una transacción"
  - "Mejora la privacidad al evitar que se junten entradas sin necesidad"
  - "Puede optimizar las comisiones y evitar que se acumule polvo (dust)"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: some linking is still unavoidable with multi-input transactions, which necessarily reveal that their inputs were owned by the same owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Privacy: the common-input-ownership heuristic, and coin control as a feature of some wallets that lets the user choose which coins are spent as inputs", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Bitcoin Optech - Output linking topic (dust attacks, and coin control as a wallet defense against spending the dust)", url: "https://bitcoinops.org/en/topics/output-linking/" }
  - { label: "Bitcoin Core 0.9.0 release notes - Add Coin Control Features (19 March 2014)", url: "https://bitcoin.org/en/release/v0.9.0" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes: 36-byte outpoint, 1-byte scriptSig length, 4-byte sequence and 27 vbytes of witness)", url: "https://bitcoinops.org/en/tools/calc-size/" }
relatedTerms:
  - address-clustering
  - bitcoin-days-destroyed
  - bitcoin-vault
  - clawback-mechanism
  - coin-age
  - coin-freeze
  - coin-selection
  - coinjoin
  - deterministic-wallet
  - difficulty
  - security
  - utxo-unspent-transaction-output
  - vanity-address
  - wallet
liveWidget: ~
translationOf: coin-control
sourceHash: "2e39cbb1d0ba"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

El control de monedas es la función de la billetera que te deja elegir a mano qué [UTXOs](/es/glosario/utxo) gastar al armar una [transacción](/es/glosario/transaccion), en lugar de dejar la [selección de monedas](/es/glosario/seleccion-de-monedas) al algoritmo de la billetera. Es el equivalente, en una billetera de Bitcoin, de elegir a propósito qué billetes sacas de tu billetera física para pagar.

Por qué importa el control de monedas:

- **Privacidad.** Las heurísticas de agrupación de direcciones (address clustering) dependen de la heurística de propiedad común de las entradas: todos los UTXOs gastados en una misma transacción comparten dueño. El propio whitepaper ya señalaba esa fuga. Al elegir a mano qué UTXOs combinas, puedes evitar vincular direcciones que preferirías mantener separadas.
- **Comisiones.** Menos entradas = transacción más pequeña = comisión más baja a cualquier tasa en sat/vB (cada entrada P2WPKH suma unos 68 bytes virtuales). Si tienes muchos UTXOs pequeños y uno grande, a veces gastar solo el grande sale mucho más barato.
- **Manejo del polvo.** Puedes consolidar a propósito los UTXOs pequeños, el [polvo (dust)](/es/glosario/polvo), cuando las comisiones están bajas, o evitar combinarlos con UTXOs valiosos que no quieres ver vinculados a fuentes de polvo.
- **Etiquetado por origen de los fondos.** Si etiquetaste tus UTXOs según su origen (con KYC o sin KYC, del negocio o personales), puedes gastar solo del lote que corresponda sin mezclar uno con otro.

El funcionamiento básico:

1. La billetera muestra tus UTXOs como renglones individuales, con monto, dirección y (a veces) etiqueta.
2. Tú eliges a mano cuáles gastar en la transacción actual.
3. La billetera usa solo esos como entradas.

Bitcoin Core incluye el control de monedas desde la versión 0.9.0 (marzo de 2014). Las demás billeteras varían: algunas lo tienen a un clic, otras lo esconden para mantener simple la interfaz y otras no lo ofrecen, así que revísalo antes de decidirte por una.

La recomendación general: si te importa la privacidad o quieres optimizar comisiones, aprende a usar el control de monedas. Si usas Bitcoin como dinero para gastos cotidianos, la selección automática que trae por defecto está bien. El control está ahí para cuando lo necesites.

Consulta [UTXO](/es/glosario/utxo) para el concepto de fondo y [Agrupación de direcciones (en inglés)](/glossary/address-clustering) para el problema de privacidad que esto resuelve.

Lee [Privacidad en Bitcoin (en inglés)](/rabbit-hole/bitcoin-privacy) para entender por qué juntar monedas es la fuga que el control de monedas existe para evitar.
