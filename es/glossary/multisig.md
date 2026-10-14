---
title: "Multisig"
slug: multisig
draft: false
published: "2026-10-14"
shortDefinition: "Una configuración de billetera en la que gastar exige firmas de más de una clave (M de N, por ejemplo 2 de 3), de modo que ninguna clave ni ninguna persona que la tenga puede mover los fondos por sí sola."
keyTakeaways:
  - "Gastar exige las firmas de M de N cofirmantes (por ejemplo, 2 de 3)"
  - "Elimina el punto único de falla de una sola frase semilla"
  - "Patrón estándar: cada clave de cofirmante en un dispositivo distinto, muchas veces en lugares distintos"
sources:
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts (OP_CHECKMULTISIG disabled, OP_CHECKSIGADD added)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "BIP-341 - Taproot deployment: activated at block 709632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "mempool.space - block 709,632, the Taproot activation block (14 November 2021)", url: "https://mempool.space/block/0000000000000000000687bca986194dc2c1f949318629b44bb54ec0a94d8244" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "BIP-445 (Draft as of October 2026) - FROST Signing Protocol for BIP340 Signatures", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "BOLT 3 - Lightning funding output is a 2-of-2 multisig", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#funding-transaction-output" }
relatedTerms:
  - hierarchical-multisig
  - interactive-multi-sig
  - k-k-multisig
  - hdm-multi-signature-hd-wallet
  - m-n
  - key-aggregation
  - musig
  - musig2
  - partial-signature
  - psbt
  - quorum-signatures
  - shamir-secret-sharing
sameAs:
  - "https://en.wikipedia.org/wiki/Multisignature"
  - "https://www.wikidata.org/wiki/Q22907108"
  - "https://en.bitcoin.it/wiki/Multi-signature"
liveWidget: ~
ogImage: "/diagrams/og/multisig.png"
ogImageAlt: "BITCOIN MULTISIG en letras grandes y en negrita, con el subtítulo 'Umbral de claves, no punto único de falla'. El primer cuadro de la animación de 35 segundos con la que LearnBitcoin explica la multisig 2 de 3."
translationOf: multisig
sourceHash: "5ccc54925e86"
sourceCommit: "375acfd"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

<figure>
  <video
    src="/videos/multisig.mp4"
    poster="/videos/posters/multisig.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animación explicativa de una billetera multisig 2 de 3. Tres claves, cada una en su propio dispositivo de hardware, aparecen en fila con la etiqueta 'Umbral: 2 de 3' y la leyenda 'Tres fabricantes distintos. Un bug en una no puede romper las otras.' Una transacción se firma con dos claves y se transmite. Escenario de pérdida: la clave B se vuelve gris con la etiqueta 'perdida'; las otras dos claves firman igual y el gasto se completa. Escenario de robo: una figura encapuchada agarra la clave A, que se pone verde y queda marcada como 'robada'; el intento del ladrón de firmar por su cuenta se queda en una de las dos firmas necesarias. Pilares de cierre: Multisig. Umbral de claves. Fabricantes distintos."
  ></video>
  <figcaption>Tres claves. Firman dos cualesquiera. Si pierdes una, todavía puedes gastar. Si te roban una, el ladrón sigue sin poder.</figcaption>
</figure>

Una multisig es una estructura de billetera en la que la salida exige varias firmas para gastarse, no solo una. El script codifica "deben firmar M de N cofirmantes": puedes tener 3 claves de cofirmantes (N=3) y exigir que firmen 2 cualesquiera de ellas para que un gasto sea válido (M=2). Esa es la clásica 2 de 3.

El objetivo es eliminar el punto único de falla de una billetera normal de una sola firma (single-sig). Con una sola frase semilla (también llamada frase de recuperación), cualquiera que la encuentre o la copie puede vaciarte la billetera. Con una multisig 2 de 3 repartida en tres lugares o tres dispositivos, un atacante tiene que comprometer dos de las tres claves, una barrera mucho más alta. Las dos no tienen que caer al mismo tiempo. Una clave robada meses atrás sigue contando, a menos que primero muevas los fondos a claves nuevas.

Patrones comunes:

- **Custodia personal 2 de 3.** Una clave en una billetera de hardware (hardware wallet) en casa, otra en un servicio de custodia o en una caja de seguridad en un banco, otra con un familiar de confianza o un abogado. Sobrevive a la pérdida de cualquiera de ellas. Si te roban una, el ladrón igual no puede gastar. El punto ideal para tenencias personales serias.
- **3 de 5 para grupos y empresas.** Sobrevive a la pérdida de dos y exige tres firmas. Las cinco claves pueden estar en manos de distintos directivos, en distintas oficinas o en módulos de seguridad de hardware (HSM).
- **Canales Lightning 2 de 2.** Todo canal Lightning es, técnicamente, una salida multisig 2 de 2 entre tú y tu contraparte en el canal. La mayoría de los usuarios nunca lo ve; el protocolo simplemente usa multisig por debajo para la salida de financiamiento del canal.

Bitcoin tiene dos maneras de expresar una multisig on-chain:

- **Multisig clásica** (`OP_CHECKMULTISIG`, anterior a Taproot). Envuelta en P2SH o P2WSH. El script queda visible en la cadena al gastarse, así que cualquier observador puede ver "esto fue un gasto 2 de 3". El opcode acepta hasta 20 claves. P2SH tiene un tope de 15 claves comprimidas porque todo su script debe caber en un solo elemento de datos de 520 bytes; P2WSH lleva el script en el witness (el testigo), donde ese límite de tamaño no existe, así que admite el máximo de 20.
- **Multisig con Taproot** (desde que Taproot se activó en noviembre de 2021). En un gasto por la ruta de script (script path), Tapscript reemplaza `OP_CHECKMULTISIG` por `OP_CHECKSIGADD`, lo que elimina el tope de 20 claves. En un gasto por la ruta de clave (key path), los cofirmantes comparten una sola clave pública combinada, así que el gasto se ve como cualquier gasto Taproot de una sola firma y los observadores no pueden saber que fue una multisig. La agregación de claves de MuSig2 lo hace cuando firman los N cofirmantes. FROST lo hace para cualquier M de N, aunque su especificación para Bitcoin sigue siendo un BIP en borrador a octubre de 2026. Una sola firma también hace el gasto más pequeño y más barato.

El flujo de firma suele usar [PSBT](/es/glosario/psbt). Un cofirmante arma la transacción, firma su parte y se la pasa al siguiente, que agrega su firma, y así hasta alcanzar el umbral. Con billeteras de hardware y herramientas de coordinación como Sparrow, Nunchuk o Specter, es sencillo, pero más laborioso que con una sola firma.

Cuándo usar multisig: cuando el valor justifica la complejidad operativa. Para saldos pequeños, una billetera de hardware de una sola firma con un buen respaldo es más segura que una multisig que no vas a saber manejar bien. Para montos que no puedes permitirte perder y que no vas a mover a diario, la multisig es la respuesta correcta.
