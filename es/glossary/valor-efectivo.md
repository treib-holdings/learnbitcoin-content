---
title: "Valor efectivo"
slug: valor-efectivo
aliases:
  - "effective value"
  - "valores efectivos"
draft: false
published: "2026-10-22"
shortDefinition: "El monto de una moneda menos la comisión que costará gastarla como entrada a la tasa de comisión de la transacción que se está construyendo. La selección de monedas suma valores efectivos, no valores nominales, así que el objetivo se queda fijo mientras la billetera busca; una moneda cuyo valor efectivo es cero o negativo no vale la pena gastarla a esa tasa."
keyTakeaways:
  - "valor efectivo = monto - (tamaño de la entrada en vbytes x tasa de comisión); una moneda de 10,000 sats detrás de una entrada de segwit nativo de 68 vbytes vale 9,932 sats a 1 sat/vB y 3,200 sats a 100 sat/vB"
  - "Viene de la tesis de 2016 de Mark Erhardt (ecuación 5.1), implementada en Bitcoin Core para Branch and Bound en la 0.17.0 y para toda la selección en la 22.0 (PR #17331), que acabó con el viejo bucle de comisiones que podía sobrestimarlas hasta en un 30 por ciento"
  - "Desde la 26.0, al valor efectivo de una moneda sin confirmar también se le resta lo que cuesta subirle la comisión a sus transacciones madre sin confirmar hasta la misma tasa (PR #26152)"
sources:
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016), section 5.3, equation 5.1", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
  - { label: "Bitcoin Core - src/wallet/coinselection.h (struct COutput: effective_value, fee, long_term_fee, ancestor_bump_fees)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/wallet/coinselection.h" }
  - { label: "Bitcoin Core PR #10637 - Coin Selection with Murch's algorithm (effective values inside Branch and Bound, 0.17.0)", url: "https://github.com/bitcoin/bitcoin/pull/10637" }
  - { label: "Bitcoin Core PR #17331 - Use effective values throughout coin selection (22.0)", url: "https://github.com/bitcoin/bitcoin/pull/17331" }
  - { label: "Bitcoin Core PR #26152 - Bump unconfirmed ancestor transactions to target feerate (26.0)", url: "https://github.com/bitcoin/bitcoin/pull/26152" }
  - { label: "Bitcoin Core 22.0 release notes", url: "https://bitcoincore.org/en/releases/22.0/" }
  - { label: "Bitcoin Core 26.0 release notes (coin selection accounts for unconfirmed low-feerate ancestors)", url: "https://bitcoincore.org/en/releases/26.0/" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes, a P2PKH input 148)", url: "https://bitcoinops.org/en/tools/calc-size/" }
relatedTerms:
  - coin-selection
  - waste-metric
  - utxo-unspent-transaction-output
  - dust
  - transaction-fee
  - fee-estimation
  - branch-and-bound-bnb
  - coingrinder
liveWidget: ~
translationOf: effective-value
sourceHash: "2275e1511b3f"
sourceCommit: "ded4695"
sourceUpdated: "2026-10-22"
translation:
  method: "llm-draft"
---

El valor efectivo de una moneda es su valor nominal menos la comisión que su entrada le agregará a la transacción que la gaste. Es el número que suma la [selección de monedas](/es/glosario/seleccion-de-monedas) de [Bitcoin Core](/es/glosario/bitcoin-core), así que el objetivo se queda fijo mientras la billetera busca: cada moneda ya carga con su propia comisión. La idea viene de la tesis de 2016 de Mark Erhardt, que dio la fórmula como el valor de la moneda menos la comisión por byte multiplicada por los bytes de una entrada, con el ejemplo de una moneda de 100,000 satoshis que vale 98,520 satoshis a 10 satoshis por byte detrás de una entrada legacy de 148 bytes. En términos de segwit nativo una entrada son 68 vbytes, así que una moneda de 10,000 sats vale 9,932 sats a 1 sat/vB y 3,200 a 100 sat/vB; a unos 147 sat/vB no vale nada.

Antes de los valores efectivos, la billetera de referencia escogía las monedas primero y estimaba la comisión después, y entonces volvía a escoger con la comisión sumada al objetivo, un bucle que la tesis demostró que podía acumular comisiones hasta en un 30 por ciento. [Branch and Bound](/es/glosario/branch-and-bound) usó valores efectivos desde la 0.17.0 (2018), y el PR #17331 hizo que todos los algoritmos los usaran en la 22.0 (2021). Desde la 26.0 también se resta la comisión necesaria para subirle la tasa a las transacciones madre sin confirmar de una moneda, así que una moneda sin confirmar cuya madre pagó una comisión baja vale para la billetera menos de lo que sugiere su valor nominal.

Tres de los cuatro algoritmos solo consideran monedas cuyo valor efectivo es positivo; el más viejo, Knapsack, todavía gasta una moneda a pérdida, un vestigio de su comportamiento de 2012 que el cambio de la 22.0 conservó a propósito. Una moneda cuyo valor efectivo es negativo a la tasa vigente es [polvo (dust)](/es/glosario/polvo) en el sentido amplio, el que se mueve con la tasa de comisión; el límite de polvo es el sentido estrecho.

Profundiza en [¿Qué monedas gasta tu billetera?](/es/a-fondo/seleccion-de-monedas): los tres costos de una elección, los cuatro algoritmos, la métrica de desperdicio que los juzga y cuándo conviene consolidar.
