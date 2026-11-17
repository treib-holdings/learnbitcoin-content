---
title: "Multisig"
slug: multisig
draft: false
published: "2026-10-14"
updated: "2026-11-17"
shortDefinition: "Una configuración de billetera en la que gastar exige firmas de más de una clave (M de N, por ejemplo 2 de 3), de modo que ninguna clave ni ninguna persona que la tenga puede mover los fondos por sí sola."
keyTakeaways:
  - "Gastar exige las firmas de M de N cofirmantes (por ejemplo, 2 de 3)"
  - "Elimina el punto único de falla de una sola frase semilla, y añade unos datos de configuración que hay que guardar"
  - "Patrón estándar: cada clave de cofirmante en un dispositivo distinto, muchas veces en lugares distintos"
sources:
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-342 - Validation of Taproot Scripts (OP_CHECKMULTISIG disabled, OP_CHECKSIGADD added)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" }
  - { label: "BIP-341 - Taproot deployment: activated at block 709632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "mempool.space - block 709,632, the Taproot activation block (November 14, 2021)", url: "https://mempool.space/block/0000000000000000000687bca986194dc2c1f949318629b44bb54ec0a94d8244" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-327 - MuSig2 for BIP340-compatible Multi-Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki" }
  - { label: "BIP-445 (Draft as of November 2026; its pull request to the BIPs repository, number 2070, was still open on November 16) - FROST Signing Protocol for BIP340 Signatures", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "BOLT 3 - Lightning funding output is a 2-of-2 multisig", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md#funding-transaction-output" }
  - { label: "BIP 87 - Hierarchy for Deterministic Multisig Wallets: cosigners must back up the descriptor as well as their private keys, because every cosigner's public key is needed, in addition to M seeds, to restore an M-of-N wallet", url: "https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki" }
  - { label: "BitBox - The pitfalls of multisig when using hardware wallets (December 3, 2019, archived copy): without every cosigner's public keys in the backup, losing one seed loses the funds; check a receive address on more than one device; flaws reported to three makers; a multisig setup can end up less secure than an ordinary single-key wallet", url: "https://web.archive.org/web/20250719224348/https://blog.bitbox.swiss/en/the-pitfalls-of-multisig-when-using-hardware-wallets/" }
  - { label: "Sparrow Wallet - Best practices: a single-key wallet for amounts up to US$100,000 and multisig above that; multisig takes more time and resources", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "FDIC - Five Things to Know About Safe Deposit Boxes, Home Safes and Your Valuables: the contents of a safe deposit box are not insured by the FDIC, and who may open one after a death depends on state law", url: "https://www.fdic.gov/consumer-resource-center/five-things-know-about-safe-deposit-boxes-home-safes-and-your-valuables" }
  - { label: "Lightning specification - extension BOLT, Simple Taproot Channels (merged May 4, 2026): the funding output becomes a taproot output with a MuSig2 key", url: "https://github.com/lightning/bolts/blob/master/bolt-simple-taproot.md" }
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
sourceHash: "55ee9bb886ff"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
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
  <figcaption>Tres claves. Firman dos cualesquiera. Si pierdes una, todavía puedes gastar, siempre que hayas guardado los datos de configuración de la billetera. Si te roban una, el ladrón sigue sin poder.</figcaption>
</figure>

Una multisig es una estructura de billetera en la que la salida exige varias firmas para gastarse, no solo una. El script codifica "deben firmar M de N cofirmantes": puedes tener 3 claves de cofirmantes (N=3) y exigir que firmen 2 cualesquiera de ellas para que un gasto sea válido (M=2). Esa es la clásica 2 de 3.

El objetivo es eliminar el punto único de falla de una billetera normal de una sola firma (single-sig). Con una sola frase semilla (también llamada frase de recuperación), cualquiera que la encuentre o la copie puede vaciarte la billetera. Con una multisig 2 de 3 repartida en tres lugares o tres dispositivos, un atacante tiene que comprometer dos de las tres claves, una barrera mucho más alta. Las dos no tienen que caer al mismo tiempo. Una clave robada meses atrás sigue contando, a menos que primero muevas los fondos a claves nuevas.

Las frases semilla no son todo el respaldo. Una billetera multisig tiene además unos datos de configuración, por lo general un [descriptor de salida](/es/glosario/descriptor-de-salida): una línea de texto que enumera la clave pública de cada cofirmante y la regla 2 de 3. Restaurar la billetera exige todas esas claves públicas además de las frases semilla que firman. Si pierdes una clave sin tener esos datos, las dos frases semilla que todavía tienes no pueden encontrar ni gastar las monedas, así que guarda una copia de ellos con cada respaldo de frase semilla.

Los dispositivos de fabricantes distintos reducen el riesgo de que una sola falla alcance a todas las claves. No lo eliminan: en 2019 un fabricante rival reportó fallas en la forma en que los dispositivos de tres fabricantes manejaban la multisig.

Patrones comunes:

- **Custodia personal 2 de 3.** Una clave en una billetera de hardware (hardware wallet) en casa, otra en un servicio de custodia o en una caja de seguridad en un banco (cuyo contenido, en Estados Unidos, el seguro de depósitos no cubre), otra con una persona que conoces en persona y a quien se la confiarías. Dos de quienes guardan una clave pueden gastar juntos, así que elige con cuidado. Sobrevive a la pérdida de una clave cualquiera, siempre que se guarden los datos de configuración. Una empresa o una persona que guarda una clave crea la suya propia. Nadie necesita nunca la frase semilla de una clave que guardas tú.
- **3 de 5 para grupos y empresas.** Sobrevive a la pérdida de dos y exige tres firmas. Las cinco claves pueden estar en manos de distintos directivos, en distintas oficinas o en módulos de seguridad de hardware (HSM).
- **Canales Lightning 2 de 2.** Un canal Lightning estándar se financia con una salida multisig 2 de 2 entre tú y tu contraparte en el canal. La mayoría de los usuarios nunca lo ve; el protocolo simplemente usa multisig por debajo para la salida de financiamiento del canal. Los canales Taproot, añadidos a la especificación de Lightning como una extensión en mayo de 2026, usan en su lugar una sola clave combinada.

Bitcoin tiene dos maneras de expresar una multisig on-chain:

- **Multisig clásica** (`OP_CHECKMULTISIG`, anterior a Taproot). Envuelta en P2SH o P2WSH. El script queda visible en la cadena al gastarse, así que cualquier observador puede ver "esto fue un gasto 2 de 3". El opcode acepta hasta 20 claves. P2SH tiene un tope de 15 claves comprimidas porque todo su script debe caber en un solo elemento de datos de 520 bytes; P2WSH lleva el script en el witness (el testigo), donde ese límite de tamaño no existe, así que admite el máximo de 20.
- **Multisig con Taproot** (desde que Taproot se activó en noviembre de 2021). En un gasto por la ruta de script (script path), Tapscript reemplaza `OP_CHECKMULTISIG` por `OP_CHECKSIGADD`, lo que elimina el tope de 20 claves. En un gasto por la ruta de clave (key path), los cofirmantes comparten una sola clave pública combinada, así que el gasto se ve como cualquier gasto Taproot de una sola firma y los observadores no pueden saber que fue una multisig. La agregación de claves de MuSig2 lo hace cuando firman los N cofirmantes. FROST lo hace para cualquier M de N, aunque su especificación para Bitcoin sigue siendo un BIP en borrador a noviembre de 2026. Una sola firma también hace el gasto más pequeño y más barato.

El flujo de firma suele usar [PSBT](/es/glosario/psbt). Un cofirmante arma la transacción, firma su parte y se la pasa al siguiente, que agrega su firma, y así hasta alcanzar el umbral. Con billeteras de hardware y herramientas de coordinación como Sparrow, Nunchuk o Specter, es viable, pero más laborioso que con una sola firma. Cada dispositivo debería comprobar, o dejarte comprobar, la lista de claves de los cofirmantes, y una dirección de recepción debería comprobarse en la propia pantalla de más de un dispositivo antes de enviarle monedas.

Cuándo usar multisig: cuando el valor justifica la complejidad operativa. Para saldos pequeños, una billetera de hardware de una sola firma con un buen respaldo es más segura que una multisig que no vas a saber manejar bien. Para montos que no puedes permitirte perder y que no vas a mover a diario, muchos asesores sugieren la multisig, aunque no todos.
