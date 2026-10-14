---
title: "Xpub (clave pública extendida)"
slug: xpub
draft: false
published: "2026-10-13"
shortDefinition: "Una función del BIP 32 que permite derivar claves públicas hijas sin exponer la clave privada maestra."
keyTakeaways:
  - "Permite derivar muchas direcciones hijas a partir de una sola raíz"
  - "Conserva la seguridad del gasto si la clave privada maestra se mantiene bien guardada"
  - "Se usa en billeteras de solo lectura, en contabilidad y para coordinar multisig"
aliases:
  - "xpub"
  - "xpubs"
  - "clave pública extendida"
  - "claves públicas extendidas"
  - "extended public key"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: knowing an extended public key allows reconstruction of all descendant non-hardened public keys; an xpub plus any non-hardened child private key equals the parent extended private key", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): extended public keys and wallet descriptors also reveal quantum vulnerable public key information", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - bip-32
  - bip-44
  - bip-85
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - output-descriptor
  - public-key
  - public-key-exposure
  - watch-only-wallet
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
translationOf: xpub-extended-public-key
sourceHash: "d1751b2933c2"
sourceCommit: "b4fda3b"
sourceUpdated: "2026-10-12"
translation:
  method: "llm-draft"
---

Una xpub es una clave pública extendida del [BIP 32](/es/glosario/bip-32): una clave pública padre empaquetada junto con su código de cadena, el [chaincode (en inglés)](/glossary/chaincode). Con esas dos piezas, cualquiera puede derivar todas las claves públicas hijas no endurecidas (non-hardened) de esa rama del árbol de la billetera, y por lo tanto todas sus direcciones, sin ver jamás una clave privada. Cada hija recibe un chaincode propio, calculado a partir del de su padre, y eso es lo que permite que la derivación siga bajando por la rama.

Lo que puedes hacer con la xpub de alguien:

- **Vigilar su billetera.** Importa la xpub en Sparrow, Specter, BlueWallet, etc., y verás cada dirección de recepción, cada gasto y cada cambio de saldo en tiempo real. Sin necesidad de ninguna clave privada.
- **Generar direcciones de recepción nuevas en su nombre.** El servidor de un comercio puede entregar una dirección nueva a cada cliente sin tener ninguna capacidad de gasto.
- **Participar como cofirmante de solo lectura.** Combina una xpub de cada cofirmante para armar una billetera multisig de solo lectura.

Lo que pierdes si se te filtra una xpub:

- **Privacidad.** Todas las direcciones presentes y futuras de esa rama quedan a la vista de quien tenga la xpub. Ya no hace falta ningún análisis de cadena: quien tiene la xpub ve el saldo entero y el grafo completo de transacciones.
- **La confidencialidad de tu actividad futura.** Aunque nunca vuelvas a compartir la xpub, quien la tenga puede derivar, recorriendo el árbol, todas las direcciones no endurecidas que vayan a existir bajo esa rama, no solo las próximas. No hay forma de dar marcha atrás.
- **Quizá también las claves de gasto.** La advertencia del propio BIP 32: "knowledge of a parent extended public key plus any non-hardened private key descending from it is equivalent to knowing the parent extended private key" (conocer una clave pública extendida padre más cualquier clave privada no endurecida que descienda de ella equivale a conocer la clave privada extendida padre). Exporta una sola clave privada hija de una rama cuya xpub anda suelta por el mundo y habrás entregado todas las claves de esa rama. La conclusión del BIP es que "extended public keys must be treated more carefully than regular public keys" (las claves públicas extendidas deben tratarse con más cuidado que las claves públicas corrientes).
- **Claves públicas, en el sentido cuántico.** Una dirección basada en un hash oculta su clave pública hasta el primer gasto; una xpub entrega de entrada las claves públicas que hay detrás de cada dirección que cuelga de ella. El BIP 360 señala que las xpubs y los descriptores de billetera "also reveal quantum vulnerable public key information" (también revelan información de clave pública vulnerable a la computación cuántica), así que compartir una con un servidor es [exposición de la clave pública (en inglés)](/glossary/public-key-exposure) para toda la rama, incluidas las direcciones que nunca se han usado.

Trata una xpub como un balance contable, no como una dirección.

Variantes de formato que verás en billeteras más antiguas:

- `xpub...` - la forma original del BIP 32, ligada por convención a las derivaciones P2PKH legacy (anteriores a SegWit).
- `ypub...` - SegWit envuelto en P2SH (BIP 49).
- `zpub...` - P2WPKH nativo (BIP 84).
- `Ypub` / `Zpub` - variantes multisig.

En 2026, las variantes de prefijo son más que nada cosa del pasado: las [billeteras con descriptores](/es/glosario/descriptor-de-salida) modernas llevan explícita la información del tipo de script, así que una sola `xpub` más una plantilla de descriptor lo cubre todo limpiamente.
