---
title: "Salida de cambio"
slug: salida-de-cambio
aliases:
  - "salida de cambio"
  - "salidas de cambio"
  - "dirección de cambio"
draft: false
published: "2026-10-14"
shortDefinition: "La salida que una transacción le devuelve a quien gasta cuando las entradas seleccionadas superan el pago más la comisión. Las monedas de Bitcoin se gastan enteras, como los billetes, y el cambio es la diferencia."
keyTakeaways:
  - "Las billeteras mandan el cambio a una dirección interna nueva, en una rama de derivación aparte (el BIP 44 reserva la cadena 1 para el cambio), así que una dirección de cambio nunca aparece en una solicitud de pago"
  - "El cambio es el punto débil de la privacidad on-chain: los montos irregulares, el tipo de script y los patrones de direcciones nuevas permiten a los analistas adivinar cuál salida es tuya y seguirla hasta tu siguiente transacción"
  - "Una salida de cambio demasiado pequeña como para que valga la pena gastarla es polvo (dust); las billeteras no la crean y pagan el sobrante como comisión"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Bitcoin Wiki - Privacy (change address detection)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Bitcoin Wiki - Change", url: "https://en.bitcoin.it/wiki/Change" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Bitcoin Core PR #23789 - wallet: strictly match tx change type to improve privacy (merged December 2021, shipped in 23.0)", url: "https://github.com/bitcoin/bitcoin/pull/23789" }
relatedTerms:
  - utxo-unspent-transaction-output
  - output-transaction-output
  - coin-selection
  - changeless-transaction
  - branch-and-bound-bnb
  - hierarchical-deterministic-wallet
  - address-reuse
  - address-clustering
  - dust
  - coin-control
sameAs:
  - "https://en.bitcoin.it/wiki/Change"
liveWidget: ~
translationOf: change-output
sourceHash: "8665fc8678f8"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Un [UTXO](/es/glosario/utxo) de Bitcoin no se puede gastar por partes. Si tienes una moneda de 0.75 BTC y le debes 0.5 a alguien, la transacción consume los 0.75 completos, manda 0.5 a quien cobra y devuelve el resto, menos la comisión, a una dirección que tú controlas. Ese resto es la salida de cambio. Funciona exactamente igual que pagar en caja una compra de doce dólares con un billete de veinte, salvo que los "ocho dólares" vuelven como una moneda nueva, con su propia dirección y su propio lugar en el registro.

Las billeteras modernas manejan el cambio de forma automática y con cuidado. Una [billetera HD (jerárquica determinista)](/es/glosario/billetera-hd) deriva las direcciones de cambio de una rama interna aparte del árbol de claves; el BIP 44 le reserva el índice de cadena 1, junto a la cadena 0 para las direcciones que entregas para recibir pagos. Esa separación hace que una dirección de cambio siempre sea nueva, nunca reutilizada y nunca una que le hayas dado a alguien. Si miras tu propia transacción en un explorador de bloques y ves una salida que no reconoces, casi siempre es tu cambio, que fue a parar a una dirección que tu billetera generó en silencio.

El problema de privacidad es que el cambio suele ser fácil de detectar desde afuera. Los [analistas de cadena](/es/glosario/analisis-de-cadena) aplican un puñado de heurísticas: el pago suele ser una cifra redonda mientras que el cambio es un decimal largo e irregular; el cambio va a una dirección nunca vista mientras que la dirección de quien cobra puede tener historial; la salida de cambio tiende a compartir el tipo de script de las entradas, porque la misma billetera creó ambas cosas, y por eso Bitcoin Core, desde la versión 23.0, iguala el tipo del cambio al tipo del destino cuando puede. Adivina bien el cambio y habrás enlazado las entradas del remitente con una dirección nueva, que enlaza con la siguiente transacción del remitente, y así sucesivamente, cadena abajo. Este es el mecanismo que convierte una sola dirección identificada en un historial. Por eso algunas estrategias de selección de monedas buscan a propósito [transacciones sin cambio (en inglés)](/glossary/changeless-transaction), y por eso las billeteras varían la derivación y el orden de las salidas para desdibujar las pistas.

El cambio también tiene un piso. Si el sobrante fuera tan pequeño que gastarlo después costaría más de lo que vale, es [polvo (dust)](/es/glosario/polvo), y una billetera bien hecha elimina esa salida y deja que el minero se quede con la diferencia antes que crear una moneda que nadie va a gastar jamás. Entre ese piso y el punto en que una salida de cambio claramente vale la pena está la tolerancia que [Branch and Bound](/es/glosario/branch-and-bound) usa para decidir si una comisión un poco más alta de lo necesario es mejor que una moneda un poco inútil.

El cambio de un [CoinJoin](/es/glosario/coinjoin) es la excepción a todo lo anterior. Por definición no está mezclado, y gastarlo junto con las salidas mezcladas deshace la mezcla. Las billeteras enfocadas en la privacidad lo etiquetan, lo ponen en cuarentena y te avisan cuando lo tocas, lo cual es el instinto correcto para el cambio en general.
