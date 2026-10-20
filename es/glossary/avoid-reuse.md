---
title: "Avoid Reuse (Bitcoin Core)"
slug: avoid-reuse
draft: false
published: "2026-10-15"
updated: "2026-10-20"
shortDefinition: "Una opción (flag) de la billetera de Bitcoin Core, añadida en la versión 0.19.0.1, que lleva registro de las direcciones desde las que la billetera ya gastó, marca como sucias las monedas que lleguen a ellas después e impide que sendtoaddress las gaste; los demás comandos de envío de Core y su interfaz gráfica no aplican el filtro. Es la defensa de la billetera de referencia contra la reutilización forzada de direcciones. Desactivada por defecto; se fija al crear la billetera o con setwalletflag, y no tiene interruptor en la interfaz gráfica."
keyTakeaways:
  - "Con la opción activada, las monedas se clasifican en limpias y sucias: sucia es la que llegó a una dirección desde la que la billetera ya había gastado; listunspent muestra el veredicto en un campo reused, y sendtoaddress deja las monedas sucias fuera de la selección de monedas. send, sendmany, sendall, fundrawtransaction, walletcreatefundedpsbt y la interfaz gráfica no aplican el filtro y las gastan (comprobado en un nodo regtest con Core 31.1)"
  - "Activarla en una billetera ya existente exige volver a escanear la cadena (rescan), para que la billetera sepa desde cuáles de sus direcciones se gastó antes de que la opción existiera"
  - "Es el complemento de -avoidpartialspends (0.17.0), que agrupaba las monedas de una misma dirección pero seguía recogiendo los depósitos posteriores; desde la 0.21.0 la billetera agrupa por defecto cuando eso no cuesta comisión extra, mientras que avoid_reuse sigue desactivada por defecto"
aliases:
  - "avoid_reuse"
  - "avoid reuse"
  - "la opción avoid_reuse"
sources:
  - { label: "ChainQuery RPC reference - createwallet (avoid_reuse option)", url: "https://chainquery.com/rpc/createwallet" }
  - { label: "ChainQuery RPC reference - listunspent (reused field)", url: "https://chainquery.com/rpc/listunspent" }
  - { label: "Bitcoin Core 0.19.0.1 release notes (avoid_reuse wallet flag)", url: "https://bitcoincore.org/en/releases/0.19.0.1/" }
  - { label: "Bitcoin Core PR #13756 - avoid_reuse wallet flag (kallewoof, merged 2019-06-18)", url: "https://github.com/bitcoin/bitcoin/pull/13756" }
  - { label: "bitcoin-core/gui issue #341 - avoid_reuse in the GUI (opened 2021-05-20, still open)", url: "https://github.com/bitcoin-core/gui/issues/341" }
  - { label: "Bitcoin Core 0.21.0 release notes (partial spend avoidance by default when fee-neutral)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core source at v31.1 - src/wallet/spend.cpp line 333: the dirty-coin filter runs only when the command building the transaction asks for it", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/wallet/spend.cpp#L333" }
  - { label: "Bitcoin Core source at v31.1 - src/wallet/rpc/spend.cpp line 311: sendtoaddress is the one RPC that asks", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/wallet/rpc/spend.cpp#L311" }
  - { label: "Bitcoin Core issue #17706 - avoid_reuse support for non-sendtoaddress calls (December 2019, closed without a code change)", url: "https://github.com/bitcoin/bitcoin/issues/17706" }
relatedTerms:
  - forced-address-reuse
  - coin-control
  - address-reuse
  - coin-selection
  - coin-freeze
  - dust-attack
  - dust
  - bitcoin-core
  - bitcoin-core-rpc
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: avoid-reuse
sourceHash: "d4f37da580b5"
sourceCommit: "61a633c"
sourceUpdated: "2026-10-20"
translation:
  method: "llm-draft"
---

`avoid_reuse` es una opción (flag) de la billetera de Bitcoin Core, publicada en la versión 0.19.0.1 (2019) a partir del PR #13756. Su trabajo es acotado: recordar cada dirección desde la que esta billetera ha gastado, marcar como sucia cualquier moneda que llegue después a una de esas direcciones e impedir que `sendtoaddress` la gaste. El pull request nombró la amenaza: sin la opción, "a payer could otherwise begin tracking a payee's wallet by regularly peppering a known UTXO with dust outputs" (quien paga podría empezar a rastrear la billetera de quien cobra salpicando con regularidad un UTXO conocido con salidas de polvo), migajas que la billetera barrería más tarde junto con las monedas de verdad. Eso es la [reutilización forzada de direcciones](/es/glosario/reutilizacion-forzada-de-direcciones), y la opción es la respuesta de la billetera de referencia.

La opción se fija al crear la billetera. La llamada [createwallet](https://chainquery.com/rpc/createwallet) la documenta: "avoid_reuse (boolean, optional, default=false) Keep track of coin reuse, and treat dirty and clean coins differently with privacy considerations in mind" (llevar registro de la reutilización de monedas y tratar de forma distinta las monedas sucias y las limpias, pensando en la privacidad). Las monedas limpias están en direcciones desde las que la billetera nunca ha gastado. Las monedas sucias llegaron a una dirección después de que la billetera gastara desde ella: así se ve una migaja, y así se ve también quien te pagó ignorando la dirección nueva que le diste. [listunspent](https://chainquery.com/rpc/listunspent) muestra el veredicto de cada moneda en un campo `reused`: "Whether this output is reused/dirty (sent to an address that was previously spent from)" (si esta salida está reutilizada/sucia, es decir, enviada a una dirección desde la que ya se había gastado). El filtro que deja las monedas sucias fuera de la [selección de monedas](/es/glosario/seleccion-de-monedas) lo aplica un solo comando. [sendtoaddress](https://chainquery.com/rpc/sendtoaddress) las salta mientras la opción esté activada (su propio argumento `avoid_reuse`, true por defecto, permite desactivarlo en cada llamada). Los demás caminos de envío, `send`, `sendmany`, `sendall`, `fundrawtransaction`, `walletcreatefundedpsbt` y la billetera gráfica, nunca piden el filtro: en el código de la billetera, la comprobación de monedas sucias solo se ejecuta cuando el comando que construye la transacción la pide (src/wallet/spend.cpp, línea 333 en la v31.1), y solo `sendtoaddress` la pide (src/wallet/rpc/spend.cpp, línea 311). Una prueba en regtest con Bitcoin Core 31.1, el 20 de octubre del 2026, lo confirmó: con la opción activada y una moneda sucia como única forma de cubrir un pago, `sendtoaddress` respondió "Insufficient funds" (fondos insuficientes), mientras que `send`, `sendmany`, `sendall`, `fundrawtransaction` y `walletcreatefundedpsbt` gastaron la moneda sucia. El texto de ayuda de `sendall` dice que "will respect the avoid_reuse wallet flag" (respetará la opción avoid_reuse de la billetera); en regtest barrió las monedas sucias junto con la limpia.

Dos límites prácticos. Primero, una billetera ya existente que active la opción con [setwalletflag](https://chainquery.com/rpc/setwalletflag) necesita volver a escanear la cadena (un rescan), para averiguar desde cuáles de sus direcciones se gastó antes de que empezara a llevar la cuenta. Segundo, no hay interruptor en la billetera gráfica. La petición de uno, el issue #341 de bitcoin-core/gui, lleva abierta desde mayo de 2021; Sjors Provoost, colaborador de Bitcoin Core desde hace años, señaló que la opción se puede fijar al crear la billetera o cambiar por RPC, y que la interfaz gráfica no tiene un panel de ajustes por billetera donde ponerla. En 2026 sigue siendo una función de línea de comandos.

Encaja con dos comportamientos anteriores. La versión 0.17.0 (2018) añadió `-avoidpartialspends`, que gasta juntas todas las monedas de una misma dirección, para que los pagos separados a una dirección reutilizada no se gasten (y se vinculen) de uno en uno; su nota de versión reconocía que las monedas enviadas a una dirección después de usarla "will still be included in future coin selections" (seguirán entrando en futuras selecciones de monedas), justo el hueco que `avoid_reuse` cierra. Desde la 0.21.0 (2021) la billetera evita los gastos parciales por defecto siempre que eso no cueste comisión extra (PR #14582), y `avoid_reuse` activa esa evitación de gastos parciales para `sendtoaddress` incluso sin la opción de línea de comandos. `avoid_reuse` en sí sigue desactivada por defecto.

Nada de esto le hace falta a una billetera que nunca [reutiliza una dirección](/es/glosario/reutilizacion-de-direcciones) y cuyos pagadores siguen las instrucciones. La opción existe porque quienes pagan no siempre siguen las instrucciones, y porque algunos son hostiles. El [control de monedas](/es/glosario/control-de-monedas) hace el mismo trabajo a mano.
