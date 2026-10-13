---
title: "Sé tu propio banco"
slug: se-tu-propio-banco
translationOf: be-your-own-bank
sourceHash: "db7541f5ddfe"
sourceCommit: "d5353d2"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-13"
order: 4
goDeeper: ["mt-gox-ftx-graveyard", "seed-backup-strategies", "key-space"]
estimatedMinutes: 35
tagline: "Si tus claves viven en un exchange, no tienes bitcoin: tienes un pagaré. Este capítulo te enseña a tener bitcoin de verdad."
prerequisites: ["how-bitcoin-works"]
relatedTerms: ["seed-phrase", "private-key", "hardware-wallet", "custodial-wallet", "address", "deterministic-wallet", "watch-only-wallet", "paper-wallet", "multisig", "shamir-secret-sharing", "hierarchical-multisig"]
ogImage: "/diagrams/og/hd-wallet-tree.png"
ogImageAlt: "Una semilla, todas las direcciones. Una frase semilla de 12 palabras en la parte superior deriva una clave maestra, que a su vez deriva de forma determinista cada clave hija y cada dirección que la billetera usará jamás. Respalda la semilla una vez y el árbol completo se puede recuperar para siempre."
sources:
  - { label: "BIP 39 - Mnemonic seed phrases, word checksum and the optional passphrase (Bitcoin Improvement Proposal)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP 32 - Hierarchical deterministic wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "BIP 141 - a native SegWit (bc1q) address commits to the hash of a public key", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 84 - derivation scheme for native SegWit (P2WPKH) wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki" }
  - { label: "BIP 86 - derivation scheme for single-key Taproot (P2TR) wallets", url: "https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki" }
  - { label: "Trezor Safe 5 FAQ - Bitcoin-only firmware, secure element, 20-word SLIP-39 backup as the default, 12 or 24 words as a legacy option", url: "https://trezor.io/guides/trezor-devices/trezor-safe-5/trezor-safe-5-faqs" }
  - { label: "Trezor firmware changelog - first releases for Model One (2014), Model T (2018), Safe 3 (2023), Safe 5 (2024)", url: "https://trezor.io/learn/a/firmware-changelog" }
  - { label: "BlueWallet - a Bitcoin-only, free and open-source wallet", url: "https://bluewallet.io/" }
  - { label: "Keystone - Keystone 3 Pro product page (4-inch touchscreen, fingerprint authentication)", url: "https://keyst.one/shop/products/keystone-3-pro" }
  - { label: "Keystone 3 Pro firmware 1.7.4 release notes (October 2024) - BTC signing over a USB connection", url: "https://github.com/KeystoneHQ/keystone3-firmware/releases/tag/1.7.4" }
  - { label: "Keystone 3 Pro firmware 2.0.8 release notes (April 2025) - separate BTC Only firmware", url: "https://github.com/KeystoneHQ/keystone3-firmware/releases/tag/2.0.8" }
  - { label: "Blockstream - Jade is open source, for Bitcoin and Liquid, with a virtual secure element", url: "https://blockstream.com/jade/" }
  - { label: "Coinkite - Coldcard security advisory: affected firmware, fixed versions and migration steps (2026)", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "CoinDesk - Coldcard flaw drains 594 BTC in a 25-minute sweep (July 31, 2026)", url: "https://www.coindesk.com/tech/2026/07/31/major-bitcoin-wallet-flaw-drains-594-btc-in-25-minute-sweep" }
  - { label: "Jameson Lopp - metal seed backup stress tests (as of October 2026, 10 of 75 products got an F for heat)", url: "https://jlopp.github.io/metal-bitcoin-storage-reviews/" }
  - { label: "Bitcoin Core v31.1 - 10-minute block target (nPowTargetSpacing)", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core v31.1 (July 2026, the latest release as of October 2026) - verifymessage only accepts legacy (1...) addresses", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/src/common/signmessage.cpp" }
  - { label: "BIP 322 - generic signed messages; the original format only works for 1... addresses", url: "https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki" }
  - { label: "BIP 137 - message signatures for SegWit addresses", url: "https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" }
  - { label: "Mt. Gox - application for civil rehabilitation (February 28, 2014)", url: "https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf" }
  - { label: "Mt. Gox Rehabilitation Trustee - first repayments in bitcoin and Bitcoin Cash (July 5, 2024)", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "Bitcoin Privacy Best Practices (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/bitcoin-privacy-best-practices.pdf" }
  - { label: "12-word seed backup form (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/seed-backup-12-word.pdf" }
  - { label: "24-word seed backup form (PDF, this site)", url: "https://www.learnbitcoin.com/downloads/seed-backup-24-word.pdf" }
---

> **Adónde vas:** Al terminar este capítulo habrás generado una billetera que controlas, respaldado la semilla como se debe, recibido una transacción de Bitcoin real (y pequeña) y la habrás cotejado en un explorador de bloques. Habrás hecho autocustodia. Opcional: hacerlo de verdad.

## 1. La promesa que te haces

Hasta este capítulo has estado *aprendiendo sobre* Bitcoin. De aquí en adelante puedes *usarlo*, pero solo si aceptas la responsabilidad que viene con el dinero soberano.

El trato es este: **tú, y solo tú, tienes las claves. Nadie puede quitártelas. Nadie puede congelarlas. Y nadie va a ayudarte si las pierdes.**

No es una frase de marketing. Así funcionan las matemáticas. Una dirección de Bitcoin se deriva de una clave privada, pasando por su clave pública. La clave privada es un número de 256 bits. Quien tenga ese número puede firmar transacciones que gasten las monedas. No hay segundo factor. No hay correo de recuperación. No hay servicio al cliente.

Ese es el trato. Este capítulo trata de tomárselo en serio sin tenerle miedo.

## 2. Custodia de terceros vs autocustodia

La mayoría de quienes "tienen bitcoin" no lo tienen, en términos técnicos.

Cuando compras bitcoin en un exchange (Coinbase, Kraken, Binance, Cash App), el exchange guarda las claves. Tú tienes un número en su base de datos que dice "se te deben X bitcoins". Es un pagaré. En tu pantalla parece bitcoin, pero legal y técnicamente es un derecho de cobro contra el exchange.

Para algunos usos está bien (trading, principiantes, montos muy pequeños). Pero **no es la propuesta de valor de Bitcoin.** El bitcoin en custodia de un tercero puede ser congelado por el custodio, incautado por un gobierno, perdido en un hackeo, perdido en una quiebra, retenido por razones de KYC o simplemente no estar disponible cuando sus servidores se caen.

No puedes tener las propiedades del capítulo 2 (*portátil, escaso, soberano*) y a la vez confiarle tus claves a un tercero. El objetivo era precisamente eliminar al tercero.

**Autocustodia** significa que las claves privadas las generas y las guardas tú. Lo hace el software de tu billetera: genera un número aleatorio, deriva las claves y te muestra direcciones. El número vive en tu dispositivo (y en un respaldo), no en la base de datos de nadie.

El trato es simétrico: la custodia trae riesgo (no son tus claves, no son tus monedas) y la autocustodia trae responsabilidad (si pierdes tus claves, pierdes tus monedas). Bitcoin te deja elegir; la mayoría de los otros sistemas ni siquiera te dan la opción.

## 3. Claves, no monedas

El cambio mental que más importa: **no tienes monedas. Tienes claves.**

Bitcoin no existe como archivos en tu computadora. Existe como UTXOs (ver capítulo 3) en el registro global. Tu billetera no "contiene" bitcoin en ningún sentido real: contiene las claves que autorizan gastar ciertos UTXOs de ese registro.

Por eso:
- Una billetera en un dispositivo de hardware sin internet puede "tener" bitcoin igual
- Puedes tener la misma billetera abierta en varios dispositivos (están mostrando los mismos UTXOs)
- Restaurar una billetera en un dispositivo nuevo devuelve el mismo saldo en cuanto la billetera termina de escanear la cadena en busca de tus direcciones (la cadena es la verdad; el dispositivo solo la lee)

Cuando "respaldas tu billetera", lo que respaldas son las *claves*; en concreto, la semilla de la que se derivan. Si tienes la semilla, puedes reconstruir todas las claves, en cualquier dispositivo, para siempre.

<figure>
  <img src="/diagrams/hd-wallet-tree.svg" alt="Árbol de una billetera HD (jerárquica determinista): una frase semilla de 12 palabras en la parte superior deriva una clave maestra, que a su vez deriva una secuencia prácticamente ilimitada de claves hijas y direcciones. Cinco direcciones bc1q de ejemplo se ramifican desde la clave maestra, dando a entender que millones más siguen la misma derivación." />
  <figcaption>Una semilla codifica un árbol determinista de claves y direcciones. Respalda la semilla una vez; el árbol completo se puede recuperar para siempre.</figcaption>
</figure>

Es una de las propiedades más poderosas de Bitcoin y una de las más fáciles de subestimar.

## 4. La frase semilla

Las billeteras de Bitcoin modernas no te obligan a respaldar claves privadas una por una. Te dan una **frase semilla** (también llamada frase de recuperación): normalmente 12 o 24 palabras en inglés.

Se ve así (no uses esta: es un ejemplo público):

```
abandon abandon abandon abandon abandon abandon
abandon abandon abandon abandon abandon about
```

Esas palabras codifican un número. Ese número alimenta un generador determinista (definido en el [BIP 39](/es/glosario/bip-39) y el [BIP 32](/es/glosario/bip-32)) que produce cada clave y cada dirección que tu billetera necesitará jamás. De una sola semilla sale un árbol de millones de direcciones. Todas son derivadas; solo un secreto importa.

**Unos cuantos hechos que deberían cambiar tu comportamiento:**

- **Quien tenga tu frase semilla tiene tus bitcoins.** No hay segundo factor. No hay recuperación. No hay "pero también necesitarían tu contraseña": la contraseña o el PIN de una billetera solo bloquea esa app o ese dispositivo, y las palabras restauran la billetera en cualquier otro lado sin necesitarlos. La única excepción es una [passphrase](/es/glosario/passphrase) opcional, la llamada "palabra 25", que se mezcla con la semilla. Si configuras una, respáldala con el mismo cuidado que las palabras, porque las palabras solas abren una billetera distinta, normalmente vacía.
- **12 vs 24 palabras.** Las dos opciones son seguras. 12 palabras = 128 bits de entropía; 24 palabras = 256 bits. Ambas están muy lejos del alcance de la fuerza bruta. La elección es cuestión de preferencia. (Los valores por defecto varían según el dispositivo. A octubre de 2026, la Trezor Safe 5 usa por defecto un respaldo de 20 palabras bajo otro estándar, [SLIP-39](/es/glosario/secreto-compartido-de-shamir), y ofrece 12 o 24 palabras como opción tradicional.)
- **Nunca escribas tu frase semilla en un sitio web. Nunca. Jamás.** Ni en el sitio del proveedor de tu billetera. Ni en una página de ayuda. En ningún lado. Los únicos lugares donde debe vivir la frase semilla son tu dispositivo de billetera y los respaldos físicos que *tú* creaste.
- **No la memorices.** El cerebro olvida frases semilla, incluso las que jurabas que recordarías. El acero no.
- **No le tomes foto.** Los celulares se respaldan en la nube. Y las nubes sufren filtraciones.

La frase semilla no es una contraseña. Es la *raíz* de toda tu existencia en Bitcoin. Trátala como tal.

## 5. Tipos de billetera: cuándo usar cada uno

Una "billetera" no es más que software que administra claves. Las categorías importan más que las marcas:

- **Billetera caliente** (hot wallet): las claves viven en un dispositivo conectado a internet (celular, laptop). Cómoda. Mayor superficie de ataque. Ideal para montos pequeños, de uso diario.
- **Billetera fría** (cold wallet): las claves viven en un dispositivo que nunca se conecta a internet. Más trabajo para usarla. Mucho más difícil de comprometer. Ideal para lo que vas a guardar a largo plazo.
- **Billetera de hardware** (hardware wallet): un dispositivo pequeño y dedicado (cabe en el bolsillo; algunos no son más grandes que una memoria USB) que guarda las claves y firma transacciones, mientras una app complementaria en tu celular o laptop se encarga de todo lo demás. Las claves nunca salen del hardware. **Es la recomendación estándar para cualquier monto que te dolería perder.**
- **Billetera de papel**: claves escritas en papel, sin ningún dispositivo. Barata. Fácil de arruinar. Ya no la recomendamos como respaldo principal (hay muchas formas sutiles de hacerlo mal), pero como respaldo *secundario* de una frase semilla es útil.
- **Multisig**: una billetera donde gastar requiere varias claves, a menudo guardadas en lugares distintos. Elimina el punto único de falla. La respuesta correcta para saldos serios. Llegaremos a ella en el capítulo 6.

**El patrón correcto para la mayoría de la gente:**

- Una billetera caliente en tu celular para montos pequeños del día a día
- Una billetera de hardware para el resto
- Una multisig cuando lo que has acumulado justifique la complejidad

Puedes combinarlas. Las billeteras son solo herramientas.

## 6. Elegir tu primera billetera

No vendemos billeteras. No cobramos comisiones de afiliado. Los nombres de abajo son ejemplos de lo que existe a octubre de 2026, no recomendaciones. Sea cual sea la que consideres, contrástala con las notas "Por qué importa que sea solo Bitcoin" y "Qué evitar" más abajo.

<figure>
  <img src="/photos/hardware-wallet-ecosystem.jpg" alt="Cuatro billeteras de hardware de Bitcoin de cuatro fabricantes distintos sobre una superficie de madera clara, de izquierda a derecha: Trezor Safe 5 (pantalla táctil vertical con elemento seguro), Blockstream Jade (dispositivo compacto tipo memoria USB con una pequeña pantalla a color y un botón de selección), Coldcard Mk4 (carcasa transparente que deja ver la placa de circuitos y un teclado numérico físico) y Keystone 3 Pro (pantalla táctil grande de 4 pulgadas, mostrada de lado, con sensor de huella; firma sobre todo por código QR). Cuatro filosofías de diseño distintas para el mismo problema: mantener una clave privada fuera de un dispositivo conectado a internet." />
  <figcaption>El ecosistema de billeteras de hardware. Cuatro fabricantes, cuatro filosofías de diseño, una sola tarea: mantener la clave privada fuera de internet.</figcaption>
</figure>

**Billeteras móviles gratuitas y de código abierto (calientes, aptas para principiantes), por ejemplo:**
- **BlueWallet** (iOS, Android): solo Bitcoin, código abierto

**Billeteras de hardware (frías, para saldos serios), por ejemplo:**
- **Trezor Safe 5**: multimoneda por defecto; también se vende con firmware solo para Bitcoin, que cualquier Safe 5 puede correr

<figure>
  <img src="/photos/trezor-safe-5-pin.jpg" alt="La billetera de hardware Trezor Safe 5 encendida, mostrando su pantalla de ingreso de PIN con los números desordenados. La posición de los números cambia al azar en cada desbloqueo para impedir que alguien mire por encima del hombro o deduzca el PIN por las huellas en la pantalla. El dispositivo descansa sobre cuero oscuro, con el ícono de candado de Trezor grabado en relieve debajo de la pantalla." />
  <figcaption>Trezor Safe 5 en la pantalla de PIN. Los números se barajan en cada desbloqueo: mirar por encima del hombro o leer las huellas en la pantalla no sirve de nada cuando la disposición cambia.</figcaption>
</figure>

- **Keystone 3 Pro**: multimoneda por defecto, con un firmware solo para Bitcoin aparte; firma sobre todo por código QR, aunque también puede conectarse por USB a algunas apps de billetera; sensor de huella, pantalla táctil grande de 4 pulgadas

<figure>
  <img src="/photos/keystone-3-pro-box.jpg" alt="La billetera de hardware Keystone 3 Pro apoyada de lado sobre su caja azul de venta. La pantalla táctil de 4 pulgadas del dispositivo está apagada; la caja muestra el logotipo de Keystone y el nombre del producto. Superficie de madera clara al fondo." />
  <figcaption>La Keystone 3 Pro llega en esta caja. Tiene una pantalla táctil de 4 pulgadas y firma sobre todo por código QR, aunque también puede conectarse a algunas apps de billetera por USB.</figcaption>
</figure>

- **Jade**, de Blockstream: código abierto; solo funciona con Bitcoin y [Liquid](/es/glosario/liquid-network), la sidechain (cadena lateral) de Blockstream

<figure>
  <img src="/photos/jade-unlock.jpg" alt="La billetera de hardware Blockstream Jade encendida, mostrando su pantalla de desbloqueo. El dispositivo compacto muestra 'Unlock Jade' en una pequeña pantalla a color, con indicadores de estado de inicialización y versión de firmware. El logotipo JADE está grabado en relieve en el costado." />
  <figcaption>Blockstream Jade en la pantalla de desbloqueo. Pantalla pequeña a color y un botón de selección. En lugar de un chip de elemento seguro, Jade depende de un servidor de PIN que Blockstream llama elemento seguro virtual.</figcaption>
</figure>

*Coldcard estuvo en esta lista hasta julio de 2026, cuando una falla de entropía en el firmware dejó las semillas adivinables y se vaciaron billeteras a gran escala ([el reportaje de CoinDesk](https://www.coindesk.com/tech/2026/07/31/major-bitcoin-wallet-flaw-drains-594-btc-in-25-minute-sweep) tiene los detalles). La quitamos la semana en que empezaron los vaciados.*

*Coinkite, el fabricante de Coldcard, dice en su [aviso de seguridad](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/) que la falla afecta a las semillas generadas en Mk2 y Mk3 con firmware de la 4.0.1 (marzo de 2021) a la 4.1.9, y en Mk4, Mk5 y Q con firmware anterior a las versiones corregidas. Si tu semilla salió de uno de esos y no mezclaste al menos 50 tiradas de dados propias, lanzadas en privado, dala por comprometida. Mueve los fondos a una semilla nueva creada en un segundo dispositivo o en la misma Coldcard una vez actualizado su firmware, siguiendo los pasos del aviso.*

**Por qué importa que sea "solo Bitcoin":** una billetera que admite 50 criptomonedas carga con código y bibliotecas para las 50, y cada una es un lugar más donde algo puede salir mal. El firmware solo para Bitcoin tiene menos funciones, pero una base de código más pequeña y más fácil de auditar. Si usas una billetera de hardware para Bitcoin, corre firmware solo para Bitcoin. (La mayoría de las de arriba lo admiten.)

**Qué evitar para la autocustodia:**
- Cualquier billetera que te pida subir tu frase semilla como "respaldo"
- Cualquier billetera sin código fuente publicado
- Cualquier "billetera" que en realidad sea una cuenta custodial dentro de una app de inversiones o de pagos
- Extensiones del navegador, para cualquier monto serio: demasiada superficie de ataque

El ecosistema de billeteras cambia rápido, así que los nombres de ejemplo de arriba envejecerán más rápido que las categorías de billetera de la sección 5.

<figure>
  <img src="/photos/trezor-evolution.jpg" alt="Cuatro billeteras de hardware Trezor en orden cronológico sobre una superficie de madera clara, de izquierda a derecha: Trezor One (2014), Trezor Model T (2018), Trezor Safe 3 (2023), Trezor Safe 5 (2024). Las formas y los tamaños de pantalla muestran una década de progreso: del diseño original monocromo de dos botones a la Safe 5 de 2024 con pantalla táctil y elemento seguro." />
  <figcaption>Diez años de billeteras de hardware Trezor. La Trezor One de la izquierda salió en 2014 y la Safe 5 de la derecha salió en 2024.</figcaption>
</figure>

## 7. Respaldar como se debe

Tu frase semilla tiene que sobrevivir a incendios, inundaciones, robos, extravíos, a tu propia mala memoria y a un adversario medianamente decidido. Suena dramático hasta que te das cuenta de que tiene que durar décadas.

**El método estándar:**

1. **Escribe la frase semilla en papel y luego pásala a metal.** Las placas de acero estampadas o grabadas (vendidas bajo muchas marcas, o un montaje casero con arandelas y punzones) resisten el fuego y el agua mucho mejor que el papel, pero no todos los productos de metal lo hacen. En [las pruebas de resistencia de Jameson Lopp](https://jlopp.github.io/metal-bitcoin-storage-reviews/), 10 de los 75 productos probados a octubre de 2026 reprobaron la prueba de calor (calificación F), así que averigua cómo le fue a un producto antes de comprarlo. Conserva la copia en papel como respaldo secundario, nunca como el único.
2. **Guarda los respaldos en al menos dos lugares físicamente separados.** Una caja fuerte en casa más una caja de seguridad en un banco, o dos casas, o un lugar más la casa de un familiar de confianza. La meta es que ningún incendio ni robo, por sí solo, se lleve las dos copias.
3. **Verifica el respaldo.** Antes de poner cualquier monto significativo en la billetera, borra el dispositivo y restáurala desde tu frase semilla. Si la billetera restaurada muestra las mismas direcciones, el respaldo está bien. Es la única forma de *saber* que el respaldo funciona.
4. **Documenta para la herencia.** Escribe una carta sellada para tus herederos que explique dónde están los respaldos, qué software instalar y qué direcciones esperar. No pongas la frase semilla en la carta; pon instrucciones para encontrarla.

Hicimos formularios imprimibles de respaldo de la frase semilla, para frases de [12 palabras](/downloads/seed-backup-12-word.pdf) y de [24 palabras](/downloads/seed-backup-24-word.pdf) (PDF en inglés), disponibles en este sitio. Úsalos o usa tu propio formato: lo que importa es la consistencia y la durabilidad.

**Una cosa más.** No dividas tu frase semilla entre varios lugares como medida de seguridad ("las primeras 6 palabras aquí, las últimas 6 allá"). Esto se llama *dividir la frase semilla* (seed splitting) y da mucha menos seguridad de la que esperarías: si pierdes uno de los lugares, lo pierdes todo, *y* quien encuentre una mitad tiene mucho menos que adivinar. La mitad de una frase de 12 palabras deja unas 2^62 posibilidades en lugar de 2^128 ([las cuentas (en inglés)](/rabbit-hole/seed-backup-strategies)). Si quieres redundancia geográfica en configuraciones avanzadas, usa [multisig](/es/glosario/multisig) (capítulo 6) o el [secreto compartido de Shamir](/es/glosario/secreto-compartido-de-shamir), no la división de la frase semilla.

## 8. Recibir tu primera transacción

Este es el momento.

1. **Abre tu billetera** (supondremos que elegiste una de la sección 6 y la configuraste).
2. **Genera una dirección nueva.** Toda billetera tiene un botón "Recibir". Haz clic ahí. La billetera deriva una dirección nueva desde tu frase semilla y te la muestra, normalmente como un código QR y una cadena de texto que empieza con `bc1`.
3. **Envía un monto pequeño a esa dirección.** Desde un exchange, desde otra billetera, desde donde sea. El equivalente a cinco o diez dólares estadounidenses en sats. No mandes los ahorros de tu vida a una billetera recién creada que nunca has usado.
4. **Observa el mempool.** Tu billetera mostrará "sin confirmar" en cuanto el remitente transmita la transacción y esta entre al mempool. Los bloques llegan cada 10 minutos en promedio, pero el intervalo entre uno y otro es aleatorio. Si la comisión alcanza para el siguiente bloque, la primera confirmación suele llegar en menos de 20 minutos, y de vez en cuando tarda más. Seis confirmaciones toman alrededor de una hora en promedio.
5. **Coteja la dirección de recepción en una fuente externa.** Abre [ChainQuery.com/address/](https://chainquery.com/address) y pega tu dirección. Deberías ver el mismo saldo y la misma transacción entrante. Dos vistas independientes de la misma cadena. Es un cotejo, no una verificación completa, porque sigues confiando en el nodo de otra persona, y el explorador se entera de qué dirección consultaste. Correr tu propio nodo (capítulo 6) es la forma de verificar sin confiar en nadie.

Felicidades. Acabas de hacer autocustodia.

El bitcoin que acabas de recibir es tuyo de una forma en que el bitcoin en custodia de un tercero nunca lo fue. Ningún exchange puede congelarlo. Ningún gobierno puede incautarlo sin tu clave privada. Puedes moverlo a donde sea, cuando sea, un domingo a las 3 de la mañana, por la razón que sea. De eso se trata todo.

## 9. Firma un mensaje: demuestra que la dirección es tuya

Un truco útil: puedes demostrar que controlas una dirección *sin* mover ninguna moneda.

Bitcoin permite la **firma de mensajes**. Tu billetera usa tu clave privada para producir una firma sobre un texto cualquiera. Cualquiera que tenga la firma, el mensaje y tu dirección puede verificar que la firma es válida, lo que demuestra que tienes la clave.

Cómo se hace:

1. En tu billetera, busca "Firmar mensaje". (Muchas billeteras lo tienen, a veces escondido en una opción avanzada; algunas billeteras móviles lo omiten.)
2. Escribe un mensaje: *"Controlo la dirección bc1qexampleaddress. La fecha de hoy es AAAA-MM-DD."*
3. Firma. Obtienes un bloque de texto en base64.
4. Cualquiera puede pegar el trío (mensaje, firma, dirección) en un verificador, como la función "Verificar mensaje" de una billetera, y verá "válida" o "inválida". Eso sí, el formato de firma original solo cubre las direcciones de estilo antiguo que empiezan con 1, y a octubre de 2026 el RPC [verifymessage](https://chainquery.com/rpc/verifymessage) de Bitcoin Core acepta solo esas. Para direcciones bc1, las billeteras firman en otros formatos, como [BIP 137](https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki) o [BIP 322](https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki), y no todas usan el mismo, así que verifica la firma con una billetera que admita el formato con el que se firmó.

Así es como demuestras que una dirección es tuya ante una aseguradora, un abogado de sucesiones o tu propio yo del futuro, el día que desconfíe. No se mueve ninguna moneda y no se paga ninguna comisión. La firma se puede presentar en cualquier parte, pero no lleva marca de tiempo. Una fecha escrita en el mensaje es solo una afirmación, porque quien tenga la clave puede firmar las mismas palabras en cualquier momento.

## 10. Las formas más comunes de perder bitcoin

Lista honesta, ordenada según lo que más aparece en los análisis de incidentes y en los informes sobre exchanges comprometidos. El orden es editorial: las frecuencias exactas no están publicadas en ningún lugar confiable.

1. **Dejar fondos en un exchange o una plataforma de préstamos.** La empresa quiebra (Mt. Gox, FTX, Celsius, BlockFi). Los retiros se congelan y los clientes esperan meses o años por lo que la quiebra devuelva. Mt. Gox colapsó en febrero de 2014 y empezó a devolverles bitcoin a sus acreedores en julio de 2024 ([la historia completa (en inglés)](/rabbit-hole/mt-gox-ftx-graveyard)).
2. **Phishing de la frase semilla.** Falsos agentes de soporte, falsas actualizaciones de la billetera, falsas páginas de "verifica tu billetera". **Ninguna billetera legítima, nunca, te pide escribir tu frase semilla en línea.** Si lo hace, es una estafa.
3. **Perder la frase semilla.** Un solo respaldo, un solo lugar, un solo incendio.
4. **Software de billetera con errores o malicioso.** Usa billeteras auditadas y de código abierto. Cuando se pueda, verifica las firmas de descarga que publica el desarrollador.
5. **Ruta de derivación o tipo de dirección equivocados.** Restauras la frase semilla en una billetera que usa un valor por defecto distinto del de la billetera que la generó, ves "0 BTC" y entras en pánico. Es menos común con billeteras modernas, pero pasa. Solución: intenta restaurar con cada estándar común (BIP 84 para SegWit nativo, BIP 86 para Taproot, etc.) antes de dar por hecho un robo.
6. **Enviar a la dirección equivocada.** Las transacciones de Bitcoin son irreversibles. Revisa siempre varios caracteres del principio y del final de una dirección antes de enviar. Mejor aún, manda primero un monto pequeño de prueba.
7. **Falla en la herencia.** El dueño muere y los herederos no tienen idea de dónde está la frase semilla. Común; evitable; documenta.

El patrón es sobre todo **operativo, no técnico**. La criptografía no es el punto de falla. Lo eres tú. Como todo el mundo. Planifica en consecuencia.

## 11. Tu meta

Antes de pasar al capítulo 5, haz estas cuatro cosas:

- [ ] Elige una billetera (una móvil está bien por ahora; una de hardware cuando la práctica te haya dado confianza)
- [ ] Genera una frase semilla y respáldala en papel *y* en metal
- [ ] Recibe un monto pequeño (unos pocos dólares en sats; no tus ahorros)
- [ ] Firma un mensaje que demuestre que controlas la dirección de recepción (si tu billetera ofrece firma de mensajes; ver sección 9)

Eso es todo. Hiciste autocustodia. Ya no dependes de un exchange ni de un custodio para guardar las claves de tu dinero. Que vayas por más a partir de aquí, o no, es decisión tuya.

> **Consejo pro:** Lo más difícil de la autocustodia no es técnico, es psicológico. La primera vez que tienes en tus manos una frase semilla real de la que solo tú respondes, se siente pesado. Ese peso es el verdadero producto de Bitcoin: la propiedad soberana. Quienes dicen que la autocustodia es "demasiado difícil" en su mayoría quieren decir que se siente pesado. No se equivocan. Solo que no están viendo lo que reciben a cambio.
