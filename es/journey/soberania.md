---
title: "Soberanía"
slug: soberania
draft: false
status: live
published: "2026-10-13"
order: 6
goDeeper: ["bitcoin-privacy", "decentralization", "seed-backup-strategies"]
estimatedMinutes: 45
tagline: "Corre tu propio nodo. Usa multisig. Blinda tu seguridad operativa. Graduación: no le pides permiso a nadie para usar Bitcoin."
prerequisites: ["using-bitcoin"]
relatedTerms: ["full-node", "node", "hierarchical-multisig", "hardware-security-module-hsm", "tor-hidden-service", "bitcoin-knots", "bitcoin-core", "bitcoin-inheritance-planning", "coin-control", "address-reuse"]
ogImage: "/diagrams/og/verify-dont-trust.png"
ogImageAlt: "Verifica, no confíes: una comparación lado a lado que muestra una billetera hablando con tu propio nodo (que verifica cada bloque y cada regla y da una respuesta definitiva) frente a la misma billetera hablando con un servidor de terceros (que solo afirma una respuesta que no puedes auditar por tu cuenta)."
sources:
  - { label: "Bitcoin Core - official downloads and source", url: "https://bitcoincore.org" }
  - { label: "BIP 174 - Partially Signed Bitcoin Transaction (PSBT)", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "BIP 67 - deterministic public key sorting for multisig", url: "https://github.com/bitcoin/bips/blob/master/bip-0067.mediawiki" }
  - { label: "Bitcoin Privacy - bitcoin.org reference", url: "https://bitcoin.org/en/protect-your-privacy" }
  - { label: "Privacy Best Practices PDF (this site)", url: "https://www.learnbitcoin.com/downloads/bitcoin-privacy-best-practices.pdf" }
  - { label: "Bitnodes - reachable Bitcoin nodes (25,514 counted on October 9, 2026)", url: "https://bitnodes.io" }
  - { label: "Bitcoin Core 31 - reduce-memory.md (default -dbcache 1024 MiB, or 450 MiB if less than 4096 MiB of RAM is detected; -maxmempool 300 MB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/doc/reduce-memory.md" }
  - { label: "Bitcoin Core 31 - caches.cpp (the 1024 MiB cache needs at least 4096 MiB of RAM as reported by the operating system)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/node/caches.cpp" }
  - { label: "Linux kernel docs - /proc/meminfo (MemTotal is physical RAM minus reserved memory and the kernel's own code)", url: "https://docs.kernel.org/filesystems/proc.html" }
  - { label: "bitcoin.org - Running a full node (2 GB RAM minimum; the first download takes at least several days)", url: "https://bitcoin.org/en/full-node" }
  - { label: "Blockchain.com - blockchain size chart (774,075 MB on October 8, 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "mempool.space - block sizes and weights (about 82.5 GB of blocks mined from October 2025 to October 2026)", url: "https://mempool.space/graphs/mining/block-sizes-weights" }
  - { label: "Bitcoin Core 31 - chainparams.cpp (mainnet disk guidelines 856 and 14, which the setup screen adds up to 870 GB)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core 31 - intro.cpp (the setup screen adds the two figures and says at least 870 GB of data will be stored)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/qt/intro.cpp" }
  - { label: "Bitcoin Core 31 - init.cpp help text for -assumevalid and -txindex", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/init.cpp" }
  - { label: "Bitcoin Core 31 - getrawtransaction help (finds confirmed transactions only with -txindex or a block hash)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/src/rpc/rawtransaction.cpp" }
  - { label: "Bitcoin Core - descriptors.md (addr() descriptors and watch-only descriptor wallets)", url: "https://github.com/bitcoin/bitcoin/blob/31.x/doc/descriptors.md" }
  - { label: "Umbrel App Store - Bitcoin Node, powered by Bitcoin Core (its settings toggle Tor, clearnet and I2P connections)", url: "https://apps.umbrel.com/app/bitcoin" }
  - { label: "umbrelOS - runs on Intel or AMD machines, the Raspberry Pi 5 or a virtual machine", url: "https://github.com/getumbrel/umbrel" }
  - { label: "Start9 - Installing StartOS (desktops, laptops and mini PCs; among Raspberry Pi models, the Pi 4 only)", url: "https://github.com/Start9Labs/start-technologies/blob/master/projects/start-os/docs/src/installing-startos.md" }
  - { label: "Start9 - Tor on StartOS (not included by default; installed as a service)", url: "https://github.com/Start9Labs/start-technologies/blob/master/projects/start-os/docs/src/tor.md" }
  - { label: "Sparrow Wallet docs - Quick Start (public server, Bitcoin Core node, or private Electrum server)", url: "https://sparrowwallet.com/docs/quick-start.html" }
  - { label: "Sparrow Wallet docs - Connect to Bitcoin Core (Settings, Server tab)", url: "https://sparrowwallet.com/docs/connect-node.html" }
  - { label: "Sparrow Wallet docs - Best Practices (hardware wallets from multiple vendors)", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "Blockstream - Jade hardware wallet firmware (GitHub)", url: "https://github.com/Blockstream/Jade" }
  - { label: "Foundation Devices - Passport hardware wallet firmware (GitHub)", url: "https://github.com/Foundation-Devices/passport2" }
  - { label: "Coinkite - COLDCARD Security Advisory (July 30, 2026, updated August 2026)", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "COLDCARD Security Status - minimum fixed firmware by model", url: "https://coldcard.com/security/status" }
  - { label: "CoinDesk - Coldcard flaw drains 594 BTC from single-signature wallets (July 31, 2026)", url: "https://www.coindesk.com/tech/2026/07/31/major-bitcoin-wallet-flaw-drains-594-btc-in-25-minute-sweep" }
  - { label: "Bitcoin Core - multisig tutorial (one wsh(sortedmulti(...)) descriptor holds all three xpubs)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/multisig-tutorial.md" }
  - { label: "BIP 87 - an M-of-N restore needs M seeds plus every cosigner's public key, so back up the descriptor", url: "https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki" }
  - { label: "BIP 129 - Bitcoin Secure Multisig Setup (anyone who learns the configuration can monitor the wallet)", url: "https://github.com/bitcoin/bips/blob/master/bip-0129.mediawiki" }
  - { label: "AgoraDesk - closure notice (wound down in 2024)", url: "https://agoradesk.com" }
  - { label: "US DOJ SDNY - Samourai Wallet founders arrested and charged (April 24, 2024)", url: "https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering" }
  - { label: "Wasabi Wallet blog - zkSNACKs ends its coinjoin coordination service on June 1, 2024 (archived copy)", url: "https://web.archive.org/web/20241007122748/https://blog.wasabiwallet.io/zksnacks-is-discontinuing-its-coinjoin-coordination-service-1st-of-june/" }
  - { label: "Satoshi Nakamoto - Bitcoin P2P e-cash paper, cryptography mailing list (October 31, 2008)", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html" }
translationOf: sovereignty
sourceHash: "9f716f8e5ea6"
sourceCommit: "d5353d2"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

> **Adónde vas:** Tu propio nodo de Bitcoin, validando cada transacción. Una billetera multisig que te protege contra el punto único de falla. Una postura de seguridad operativa (op-sec) que te permite tener bitcoin sin convertirte en un blanco. Este es el capítulo de graduación. Al terminarlo, no necesitarás el permiso de nadie para usar Bitcoin.

## 1. La graduación

Este es el capítulo de graduación. El que convierte Bitcoin de "tengo algo de bitcoin" en "formo parte de la red".

Hasta aquí, incluso con autocustodia, has estado *consumiendo* Bitcoin: dependiendo del nodo de alguien más para los datos de las transacciones, del hardware de alguien más para firmar, de la recomendación de alguien más para la seguridad. No está mal. La mayoría de la gente se queda ahí para siempre. El sistema les funciona.

Este capítulo es para quienes no quieren quedarse ahí. Al terminarlo vas a:

- Correr tu propio nodo de Bitcoin y revisar la cadena por tu cuenta en lugar de confiar en el servidor de otro
- Usar una billetera multisig en la que una sola clave comprometida no sea fatal
- Tener una postura de seguridad operativa que te proteja sin caer en la paranoia
- Tener un plan para lo que pasa con tus monedas cuando ya no estés

Toma lo que te sirva. Sáltate lo que no. El objetivo es la soberanía, no una lista de verificación.

## 2. Por qué correr tu propio nodo

Puedes usar Bitcoin sin correr un nodo. Lo estás usando ahora mismo sin uno, si tienes bitcoins en autocustodia desde el capítulo 4. Entonces, ¿para qué?

**Verificación.** La promesa de Bitcoin, "no tienes que confiar en nadie", solo es cierta si *verificas*. Una billetera que se conecta al servidor de alguien más está confiando en que ese servidor dice la verdad sobre tu saldo y el estado de la cadena. El tercero probablemente dice la verdad. Pero "probablemente" no es lo mismo que "con certeza". Tu propio nodo te lo dice con certeza.

<figure>
  <img src="/diagrams/verify-dont-trust.svg" alt="Verifica, no confíes: una comparación lado a lado que muestra una billetera hablando con tu propio nodo (que verifica cada bloque y cada regla y da una respuesta definitiva) frente a la misma billetera hablando con un servidor de terceros (que solo afirma una respuesta que no puedes auditar por tu cuenta)." />
  <figcaption>Tu nodo te lo dice con certeza. El servidor de otros te dice "probablemente". Y "probablemente" no es lo mismo que "con certeza".</figcaption>
</figure>

**Privacidad.** Cuando usas un servidor Electrum público (lo que traen por defecto casi todas las billeteras ligeras), ese servidor ve cada dirección de tu billetera, cada saldo, cada transacción que consultas. Con tu propio nodo, nada de eso se filtra a nadie.

**Resistencia a la censura.** A una billetera que depende de un servicio se le puede cortar ese servicio. A una billetera que habla con tu propio nodo, no: el nodo es tuyo.

**Apoyar la red.** Cada nodo completo adicional refuerza la descentralización de la red. Hay decenas de miles de nodos en el mundo; sumar uno es una contribución real. (No económica: correr un nodo no te paga nada. La recompensa es el sistema mismo.)

**Datos de comisiones, del mempool y de direcciones cuando los necesites.** Con tu propio nodo tienes acceso directo a todo lo que la red sabe. ¿Quieres vigilar una dirección? Agrégala a una billetera de solo lectura en tu nodo. ¿Quieres saber cómo está el mercado de comisiones? Pregúntale a tu nodo. ¿Quieres un feed de datos a tu medida? Pregúntale a tu nodo.

Un nodo completo con la configuración por defecto de Bitcoin Core usa uno o dos gigabytes de RAM. La versión 31 reserva alrededor de 1.4 GB para cachés en una máquina de 8 GB y 0.8 GB en una Raspberry Pi de 4 GB. La cadena de bloques (blockchain) ocupaba unos 775 GB de datos de bloques en octubre de 2026 y crece unos 80 GB al año, y Bitcoin Core 31 pide al menos 870 GB de disco en total.

Corre en cualquier hardware moderno. Una vez en marcha, puedes casi olvidarte de él durante meses.

## 3. Opciones de hardware y de sistema operativo

No le des muchas vueltas. Pon algo a funcionar. Mejóralo después.

**Tres opciones de hardware:**

- **Raspberry Pi 5 con un SSD de 2 TB.** Consume poco, cabe en cualquier parte, funciona 24/7. El hardware clásico para un nodo de Bitcoin. En octubre de 2026, un disco de 1 TB se queda corto, porque la pantalla de instalación de Bitcoin Core 31 pide al menos 870 GB y la cadena suma unos 80 GB al año.
- **Una mini PC reacondicionada (clase Intel NUC o equivalente).** Más margen que la Pi si después quieres agregar Lightning u otros servicios autoalojados.
- **Una laptop o computadora de escritorio que ya tengas.** Gratis, si el hardware es razonable. Lo mejor para quien se siente a gusto instalando software y no quiere comprar nada nuevo.

**Tres formas de correr el software del nodo:**

- **Umbrel.** La entrada fácil. Un sistema operativo para servidor casero con una gran tienda de apps, donde Bitcoin Core corre como su app Bitcoin Node. Interfaz web. Lo mejor si quieres apps de un clic y una experiencia pulida.
- **Start9 (StartOS).** Enfocado en la soberanía. Interfaz web. Corre en computadoras de escritorio, laptops y mini PCs, pero en octubre de 2026 solo es compatible con la Pi 4 entre los modelos de Raspberry Pi. Tor es un servicio opcional que agregas desde su tienda.
- **[Bitcoin Core](https://bitcoincore.org) directamente.** Sin capas intermedias. Edita `bitcoin.conf` por tu cuenta. Lo mejor si te manejas bien en la terminal y quieres cero abstracción.

> **Opciones, no dogmas.** Hay otras, y el ecosistema del autoalojamiento se mueve. Elige algo que te acomode y empieza: no intentes optimizar antes de tener algo corriendo.

## 4. La instalación, paso a paso

No intentes dejarlo perfecto a la primera. Solo pon algo a funcionar. Mejóralo después.

1. **Elige el hardware.** Pi 5 + SSD si vas a comprar algo nuevo. Una laptop que te sobre, si la tienes.
2. **Elige el sistema operativo.** Umbrel para el camino ya armado en una Pi 5. StartOS solo es compatible con la Pi 4 entre los modelos de Raspberry Pi, así que corre Start9 en una mini PC o una laptop. Bitcoin Core directamente si te manejas bien en la terminal.
3. **Graba el sistema operativo** en el SSD o en el disco de arranque. Los proveedores de estos sistemas dan instrucciones claras para grabar la imagen. (Mac: balenaEtcher. Windows: Rufus. Linux: `dd`.)
4. **Enciende el nodo** y conéctate a él por la interfaz web (Umbrel y Start9 te dan una URL `.local` en tu red doméstica).
5. **Espera la sincronización.** La descarga inicial es la parte dolorosa: varios cientos de GB que hay que bajar y validar. En una Pi con un SSD decente, cuenta con varios días. No te preocupes; déjalo corriendo. Por defecto, Bitcoin Core se salta la verificación de firmas y scripts en todos los bloques hasta uno reciente que cada versión da por válido (la opción `assumevalid`). Todas las demás reglas sí las verifica. Pon `assumevalid=0` para verificar también las firmas y los scripts de esos bloques, a cambio de una sincronización más lenta.
6. **Mientras sincroniza,** lee la documentación. Configura Tor (en algunos sistemas para nodos es una opción; en otros, un servicio adicional). Decide si quieres Lightning (sí, con el tiempo).
7. **Cuando termine de sincronizar,** pruébalo. Haz una consulta: pide la altura del último bloque. Busca una transacción por su txid (para transacciones confirmadas que no están en tu billetera, Bitcoin Core necesita `txindex=1` en `bitcoin.conf`). Verifica un saldo.

Ya tienes un nodo de Bitcoin. Te damos la bienvenida.

## 5. Apunta tu billetera a tu nodo

Un nodo solo sirve si tu billetera habla con él en lugar de con un servidor de terceros. Muchas billeteras lo permiten, aunque no todas; es una configuración que se hace una sola vez.

Tres billeteras de escritorio que pueden conectarse a tu propio nodo:

- **Sparrow Wallet.** Settings -> Server (Configuración -> Servidor; la interfaz de Sparrow está en inglés), luego "Bitcoin Core" para una conexión directa o "Private Electrum" (Electrum privado) para el servidor Electrum que corre tu sistema de nodo. Sparrow se convierte en un cliente ligero sobre tu nodo.
- **Specter Desktop.** Habla directamente con tu Bitcoin Core por RPC. Pensada para multisig. Configuración un poco más avanzada.
- **Electrum.** El cliente ligero veterano. Larga trayectoria. Apúntalo al servidor Electrum que expone tu sistema de nodo.

El patrón es el mismo en los tres casos: un ajuste de servidor, hecho una sola vez, que le dice a la billetera que le pregunte a tu nodo y no al de un desconocido.

Para comprobar que funciona: apaga la conexión a internet de tu casa o el DNS, y confirma que tu billetera sigue viendo tu nodo y tu saldo por la red local (LAN). Si es así, no dependes de nada externo. (Si tu billetera llega al nodo por Tor, esta prueba fallará aunque todo esté bien configurado, porque Tor necesita internet. En ese caso, revisa que el ajuste de servidor de la billetera tenga la dirección Tor de tu propio nodo, la que termina en `.onion`.)

## 6. Multisig: lo básico

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
    aria-label="Animación paso a paso de una billetera multisig 2 de 3. Tres claves de hardware aparecen en fila con la etiqueta 'Umbral: 2 de 3' y el pie 'Tres fabricantes distintos. Un error en una no rompe las otras.' Una transacción se firma con dos claves y se transmite a la red. Escenario de pérdida: la clave B se vuelve gris con la etiqueta 'perdida'; las otras dos claves firman y el gasto se completa. Escenario de robo: una figura encapuchada agarra la clave A, que se pone verde y se marca como 'robada'; el intento del ladrón de firmar solo se detiene en una de dos firmas. Pilares de cierre: Multisig. Umbral de claves. Fabricantes diversos."
  ></video>
  <figcaption>Tres claves. Firman dos cualesquiera. Pierde una y todavía puedes gastar. Que te roben una y el ladrón todavía no puede.</figcaption>
</figure>

Una sola frase semilla (también llamada frase de recuperación) es un punto único de falla. Si la pierdes, se van todas las monedas. Si se ve comprometida, se van todas las monedas. Para montos mayores, una billetera de una sola firma (single-sig) no basta.

La **multisig** (firma múltiple) exige varias claves para autorizar un gasto. La configuración más común es **2 de 3**: existen tres claves, dos cualesquiera pueden gastar, ninguna puede sola.

Por qué importa:

- Pierdes una clave: las monedas siguen seguras y recuperables (con las 2 que quedan)
- Una clave se ve comprometida: las monedas siguen seguras (el atacante necesita otra clave)
- Alguien entra a tu casa: quizá encuentre una clave, no las tres
- La herencia se vuelve manejable: tus herederos necesitan la ayuda de varias partes, no solo un disco duro recuperado

La multisig no es solo para ballenas paranoicas. La configuración correcta para $20,000 (dólares estadounidenses) en bitcoin es más o menos la misma que para $200,000. Si tienes un saldo que te importe, 2 de 3 es razonable.

## 7. Multisig en la práctica

Una multisig 2 de 3 necesita tres cosas.

**Tres billeteras de hardware (hardware wallets), de tres fabricantes distintos.** La regla es la diversidad de fabricantes, no marcas concretas. Blockstream (Jade), Foundation (Passport) y Trezor son tres de los muchos fabricantes de billeteras de hardware; elige tres marcas en las que confíes y que puedas verificar. Una vulnerabilidad de hardware en un modelo no debería comprometer más de una de tus claves. El incidente de entropía de Coldcard de julio de 2026 es el caso de estudio: las frases semilla generadas con el firmware afectado se podían adivinar, hubo billeteras vaciadas, y una multisig con una sola clave afectada habría resistido.

Coinkite, la empresa que fabrica la Coldcard, publicó un aviso de seguridad. Si alguna de tus claves se generó en una Coldcard Mk2 o Mk3 con firmware 4.0.1 a 4.1.9, o en una Mk4, Mk5 o Q con un firmware anterior a la versión corregida que indica el aviso, reemplaza esa frase semilla. Luego mueve los fondos a una nueva billetera multisig construida con la clave de reemplazo. La excepción es una frase semilla creada con al menos 50 tiradas de dados justos, hechas en privado.

**Tres frases semilla**, cada una generada en su propia billetera de hardware, cada una respaldada por separado en metal y en lugares físicamente distintos. Guarda una copia del [descriptor](/es/glosario/descriptor-de-salida) de la billetera junto a cada una. El descriptor es una línea de texto que registra las tres claves públicas y la regla 2 de 3; el coordinador te lo entrega en el paso 3 de abajo. Cada dirección multisig se construye a partir de las tres claves públicas, así que dos frases semilla por sí solas no pueden reconstruir la billetera. El descriptor le permite a quien lo tenga ver el saldo, pero no gastarlo.

**Un coordinador**: software que conoce las claves públicas de las tres y arma transacciones que dos cualesquiera pueden firmar. El coordinador *no* guarda tus claves. Solo conoce su parte pública y organiza la firma.

Entre los coordinadores están **Sparrow Wallet**, **Specter Desktop** y **Electrum**. Los tres manejan la creación de billeteras 2 de 3, la generación de PSBT y la combinación de las firmas de tus billeteras de hardware.

El flujo:

1. Genera tres billeteras de hardware, cada una con su propia frase semilla. Respalda cada frase en acero, en tres lugares distintos.
2. Exporta la clave *pública* de cada billetera (la xpub o el descriptor) e impórtala en el coordinador.
3. El coordinador genera direcciones multisig a partir de las tres xpubs. Exporta el descriptor de la billetera que te muestra y guarda una copia con cada respaldo de la frase semilla. Luego recibe bitcoin en esas direcciones.
4. Para gastar: el coordinador arma una transacción, la firmas con dos cualesquiera de tus tres billeteras de hardware (una después de la otra), el coordinador combina las firmas y la transmite a la red.

La primera vez que lo haces toma un par de horas. Después, gastar se siente casi normal, solo con un paso de firma adicional.

**Reparte las claves con cuidado.** Un arreglo común: una en casa, una en casa de un familiar o de alguien de confianza, una en una caja de seguridad en un banco (u otro lugar lejano). La idea es que ningún evento físico (un incendio en la casa, un robo, un desastre natural) se lleve más de una clave.

## 8. Privacidad y seguridad operativa

Bitcoin es *seudónimo*, no anónimo. Cada transacción on-chain es pública para siempre. Cualquiera con tiempo y herramientas de análisis de la cadena puede correlacionar direcciones con identidades. Tu privacidad es tu responsabilidad.

<figure>
  <img src="/diagrams/privacy-leaks.svg" alt="Una matriz que cruza seis hábitos comunes en Bitcoin con cinco tipos de fuga de información. Filas: Usar un servidor Electrum público, Reutilizar direcciones, Mezclar UTXOs con KYC y sin KYC, No usar Tor, Comprar en un exchange con KYC, Hablar en público de lo que tienes. Columnas: Dirección IP, Vínculo con tu identidad, Grafo de direcciones, Saldo, Historial de transacciones. Los puntos naranjas marcan las celdas donde el hábito filtra ese dato; los guiones gris claro marcan donde no. Hablar en público y usar un servidor Electrum público son los que más filtran; no usar Tor y comprar con KYC filtran una cosa concreta cada uno." />
  <figcaption>La mayoría de las fugas de privacidad tienen una sola causa. Correr tu propio nodo, usar Tor y no hablar de lo que tienes resuelven la mayoría con tres hábitos.</figcaption>
</figure>

Lo básico, en orden de esfuerzo:

**1. Nunca reutilices direcciones.** Cada pago que recibas debe ir a una dirección nueva. Las billeteras modernas lo hacen por defecto. No lo cambies.

**2. Usa el control de monedas.** La mayoría de las billeteras te deja elegir qué UTXOs gastar en una transacción. No juntes UTXOs que vienen de fuentes distintas a menos que lo hayas pensado bien. Mezclar UTXOs en una transacción vincula esas fuentes públicamente.

**3. Usa tu billetera a través de Tor.** Internet ve direcciones IP ligadas a transacciones aunque la cadena no las vea. Tor rompe ese vínculo. Los sistemas operativos para nodos ofrecen Tor como una opción o como un servicio adicional.

**4. Evita el KYC en todo lo que puedas.** Comprar bitcoin sin identificarte es bastante más difícil que comprar identificándote, pero la ganancia en privacidad es real. Los mercados entre pares (P2P) como Bisq y RoboSats funcionan. (AgoraDesk, otro mercado entre pares, cerró en 2024.) Los cajeros automáticos de Bitcoin funcionan en algunos lugares. Ganar bitcoin (trabajar como freelance a cambio de bitcoin, etc.) funciona.

**5. No hables en público de lo que tienes.** Ni tu dirección, ni tu saldo, ni tu hardware. El anonimato en los espacios sociales es una forma de defensa propia. (Usa cuentas con seudónimo donde te sirva.)

**6. Mueve por separado las monedas con KYC y las monedas sin KYC.** Si la mitad de tus monedas viene de un exchange regulado (con KYC) y la otra mitad de compras entre pares (sin KYC), tenerlas en billeteras distintas evita que vincules por accidente tu identidad KYC con tus tenencias privadas.

**7. Considera el CoinJoin.** Una técnica para mejorar la privacidad en la que varios usuarios juntan sus transacciones para ocultar qué entradas corresponden a qué salidas. El panorama cambió en 2024. Los fiscales de Estados Unidos acusaron a los dos fundadores de Samourai Wallet, que operaba uno de los dos grandes coordinadores, y fueron arrestados, uno en Estados Unidos y otro en Portugal. La empresa detrás de Wasabi Wallet cerró después el otro gran coordinador. Los diseños descentralizados, que no tienen un coordinador al que acusar ni cerrar, salieron de 2024 intactos. Lee [Privacidad en Bitcoin (en inglés)](/rabbit-hole/bitcoin-privacy) antes de usar cualquiera de ellos.

Preparamos un [PDF de buenas prácticas de privacidad](/downloads/bitcoin-privacy-best-practices.pdf) y una [lista de verificación de privacidad](/downloads/privacy-checklist.pdf) (ambos en PDF, en inglés), descargables desde este sitio. Léelos antes de manejar montos mayores.

## 9. Planificación de la herencia

La parte más difícil de la autocustodia es algo de lo que el marketing no habla: qué pasa cuando mueres.

Si mueres con bitcoin en autocustodia y sin un plan de herencia, lo más probable es que tus monedas se pierdan para siempre. Tus herederos quizá sepan que tenías bitcoin. No sabrán tu frase semilla. No sabrán tu passphrase (la palabra 25). No sabrán qué billetera de hardware buscar. Los bitcoins están en la cadena, pero fuera de alcance.

<figure>
  <img src="/diagrams/inheritance-recovery.svg" alt="Un diagrama de recuperación de herencia, de izquierda a derecha. Un heredero empieza a la izquierda, recoge una carta sellada del abogado, sigue las instrucciones de la carta hasta tres ubicaciones de frases semilla (Semilla 1 en casa, Semilla 2 en el banco, Semilla 3 con un familiar). Se recogen dos de las tres (en naranja) y la tercera queda en gris (no hace falta). Las dos recogidas alimentan al coordinador, que combina las firmas, y los fondos se recuperan." />
  <figcaption>Con un plan, la recuperación es un camino. Sin plan, la cadena queda fuera de alcance aunque los bitcoins estén ahí mismo.</figcaption>
</figure>

Un plan de herencia razonable:

1. **Documenta todo.** Una carta sellada con: dónde están los respaldos de las frases semilla, qué software de billetera instalar, qué esperar (número de UTXOs, saldo aproximado, direcciones aproximadas) e instrucciones paso a paso para la restauración. Actualízala cada año.
2. **No pongas la frase semilla en sí en la carta.** Pon instrucciones para *encontrarla*. La frase semilla está en la caja fuerte, en la placa de metal o en la caja de seguridad del banco; la carta, en tu archivador.
3. **Reparte la información como se debe.** Un familiar de confianza sabe que la carta existe. Un abogado o albacea sabe dónde encontrarla. Quien herede tiene una guía clara por escrito.
4. **Para multisig**, el plan tiene que explicar cómo coordinar varias claves. Guarda una copia del descriptor de la billetera con cada respaldo de frase semilla y otra con la carta. El descriptor muestra el saldo pero no puede gastar las monedas, y sin él dos de las tres frases semilla no pueden reconstruir la billetera. Quien tenga una sola frase semilla no consigue nada por su cuenta; el sistema exige que los herederos reúnan varias piezas.
5. **Practica la recuperación.** Haz que tus herederos (o tu albacea) intenten la restauración *mientras sigas con vida*, en testnet o con un monto mínimo. La primera vez que alguien siga tus instrucciones no debería ser después de tu muerte.

La herencia de bitcoin tiene solución de verdad. La mayoría no la resuelve porque la mayoría no planifica. Sé la excepción.

## 10. El modelo de amenazas

<figure>
  <img src="/diagrams/threat-triangle.svg" alt="Un triángulo con tres esquinas etiquetadas ROBO (alguien encuentra tu frase semilla), PÉRDIDA (incendio, inundación, olvido) y COERCIÓN (llave inglesa, orden judicial, secuestro). En el centro geométrico hay una etiqueta que dice TU SEMILLA. Las tres amenazas que todo respaldo de frase semilla debe prever." />
  <figcaption>Tres amenazas. Defenderse de una suele debilitar la defensa contra otra. El trabajo de la soberanía es equilibrar las tres.</figcaption>
</figure>

Una nota sobre la paranoia: no todas las amenazas son iguales, y tratarlas como si lo fueran es perder el tiempo.

Para la mayoría de la gente con montos modestos:

- **La falla más probable:** perder la frase semilla (un solo respaldo, un incendio, un olvido)
- **La segunda:** phishing (soporte falso, actualización de billetera falsa, sitio falso)
- **La tercera:** la quiebra de un exchange (si no has retirado a autocustodia)
- **La cuarta:** el robo físico (alguien se entera de que tienes bitcoin y entra a tu casa)

Para la mayoría basta con el patrón "respaldo en acero en varios lugares + billetera de hardware + no hablar del tema". No necesitas una jaula de Faraday. No necesitas un HSM de $10,000. No necesitas ser tu propio proveedor de internet. Necesitas no ser el blanco fácil.

Para montos mayores: ajusta la seguridad operativa en proporción. La distribución geográfica importa más. La multisig importa más. Hablar de lo que tienes es todavía peor idea.

Esto no es un deporte de competencia. El objetivo de la soberanía es la calma, no la ansiedad.

## 11. Graduación

Terminaste la primera parte del Recorrido.

Entiendes por qué el dinero está roto. Sabes qué es Bitcoin en realidad. Sabes cómo funciona por dentro. Haces autocustodia. Usas las dos capas. Corres tu propio nodo. Tienes multisig. Tienes un plan para lo que pasa después de ti.

No necesitas permiso. No necesitas un custodio. No necesitas preguntarle a nadie si tu dinero está seguro: puedes verificarlo por tu cuenta, de punta a punta, en cualquier momento.

**Ese es el trato que Bitcoin ofreció en octubre de 2008.** Tomó seis capítulos y quién sabe cuántas horas de tu tiempo, pero lo conseguiste.

Hay más, claro. Nodos de enrutamiento en Lightning. Sidechains (cadenas laterales) como Liquid. Watchtowers. CoinJoin. Discreet Log Contracts. PSBT entre billeteras multisig sin conexión (air-gapped). La computación soberana en general. La privacidad de red en la capa de aplicación. Para eso abrimos una sección llamada **A fondo**: cada tema es una exploración completa sobre un solo asunto. Elige uno cuando tengas ganas. Ninguno es necesario para usar bien Bitcoin.

Tu recorrido apenas empieza. [Los temas a fondo (en inglés)](/rabbit-holes) profundizan más.

> **Consejo pro:** La soberanía no es un destino, es una postura. El trabajo que hiciste en estos seis capítulos no es una línea de llegada: es un cimiento. Los próximos diez años de tu relación con Bitcoin serán más ricos que estos seis capítulos porque pusiste el cimiento ahora. Diviértete. Mantente humilde. Corre un nodo.
