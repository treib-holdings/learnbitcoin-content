---
title: "Adónde ir después"
slug: soberania
translationOf: sovereignty
sourceHash: "94f3582f44ba"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 7
goDeeper: ["bitcoin-privacy", "run-your-own-node", "multisig-and-inheritance"]
estimatedMinutes: 6
tagline: "Un mapa de lo que viene después de lo básico, y seis reglas para tener presentes. También puedes parar aquí."
prerequisites: ["using-bitcoin"]
relatedTerms: ["hardware-wallet", "lightning-network", "full-node", "multisig", "bitcoin-inheritance-planning", "address-reuse"]
sources:
  - { label: "FBI Internet Crime Complaint Center - 2025 report: $11.37 billion lost in complaints involving cryptocurrency. Its table of crime types (page 55) gives $7.3 billion for investment fraud (the report's text says $7.2 billion); the twelve types in which the owner is deceived into paying add up to about $9.8 billion, which is this site's own sum", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
  - { label: "TRM Labs (October 2026) - the theft from the exchange Binance on October 29, 2026, the largest on record", url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10: the record is public, and a new key should be used for each payment", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Address reuse: wallets make it easy and safe to use many addresses", url: "https://en.bitcoin.it/wiki/Address_reuse" }
  - { label: "ABA Journal - an inheritance plan has to tell an heir where the seed words can be found", url: "https://www.abajournal.com/magazine/article/cryptocurrency_estate_lawyers_caution" }
  - { label: "Superior Court of California, County of Orange - Wills and trusts: a will that has been filed is likely to be open to the public", url: "https://www.occourts.org/self-help/self-help-probate/wills-trusts" }
  - { label: "Swiss National Cyber Security Centre (August 18, 2026) - letters about an urgent update lead to a page that asks for the seed words; no wallet maker will ever ask for them", url: "https://www.bacs.admin.ch/en/26w33-en" }
  - { label: "US Cybersecurity and Infrastructure Security Agency - Update software: many updates fix security risks", url: "https://www.cisa.gov/secure-our-world/update-software" }
  - { label: "US Securities and Exchange Commission, Office of Investor Education and Assistance - Crypto Asset Custody Basics for Retail Investors (December 12, 2025): a seed phrase restores a wallet that is lost; it is stored safely and shared with nobody; a device that is not connected to the internet is generally more secure from online threats, and can still be lost, damaged or stolen", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/crypto-asset-custody-basics-retail-investors-investor-bulletin-0" }
  - { label: "Coinkite - advisory of July 30, 2026: a firmware bug weakened the making of seed words, and attackers worked the keys out and stole funds", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 14, 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Lightning specification (BOLTs) - a protocol for making fast payments with Bitcoin over a network of channels", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "LND documentation - recovery: bringing a Lightning wallet back takes the seed words and a channel backup file as well", url: "https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md" }
  - { label: "Bitcoin Wiki - Clearing Up Misconceptions About Full Nodes: a full node checks every rule itself", url: "https://en.bitcoin.it/wiki/Clearing_Up_Misconceptions_About_Full_Nodes" }
  - { label: "Bitcoin Core 32.1, chainparams.cpp - the program expects the record to take about 900 GB of disk", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Core - multisig tutorial: a wallet that needs two of three keys to spend", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/multisig-tutorial.md" }
  - { label: "BIP 87 - to restore a multisig wallet, every key holder's public key is needed as well as the seeds", url: "https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki" }
  - { label: "Sparrow Wallet - best practices: a wallet uses a public server unless it is pointed at a node of your own; one key for amounts up to US$100,000, several keys above that", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "US Internal Revenue Service - Digital assets: selling them, or paying with them, has to be reported", url: "https://www.irs.gov/filing/digital-assets" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: only scammers demand payment in cryptocurrency, and only scammers guarantee profits; never click a link in an unexpected message", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams" }
  - { label: "FBI - public service announcement of March 14, 2023: do not pay any additional fees or taxes to withdraw your money", url: "https://www.ic3.gov/PSA/2023/PSA230314" }
  - { label: "US Federal Trade Commission - Bitcoin ATMs: A payment portal for scammers (September 3, 2024): slow down, and talk with someone you trust before you do anything else", url: "https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2024/09/bitcoin-atms-payment-portal-scammers" }
  - { label: "Jameson Lopp - Bitcoin Address Poisoning Attacks (April 6, 2025): check the entire address", url: "https://blog.lopp.net/bitcoin-address-poisoning-attacks/" }
  - { label: "US Code of Federal Regulations, 12 CFR 1005.2 - the payments a bank must put right are those made without the customer's authority", url: "https://www.ecfr.gov/current/title-12/chapter-X/part-1005/subpart-A/section-1005.2" }
  - { label: "Bitcoin Core, validation.cpp - a block that pays its maker more than the fees plus the scheduled amount is rejected", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L2608-L2611" }
---

> **Adónde vas:** Este es el último capítulo, y es un mapa. Muestra lo que viene después de lo básico, cuándo se vuelve importante cada cosa y en qué parte de este sitio puedes leer más. Termina con seis reglas que vale la pena tener presentes, hagas lo que hagas después.

**Primero, adivina.** ¿Qué les cuesta más a los dueños de bitcoin: los hackers que se meten en sus billeteras, o los desconocidos que los convencen de enviar sus monedas?

## ¿Tienes que ir más lejos?

No. Sabes qué es Bitcoin, cómo funciona un pago y cómo se guardan las claves. Eso basta para tener un monto pequeño con cuidado. También basta para decidir no hacerlo, con buenas razones.

## El mapa

**Desde tus primeras monedas de verdad**

**Privacidad.** El registro es público, como viste cuando leíste el bloque 0. Cualquiera que sepa que una dirección es tuya puede ver lo que se pagó a esa dirección, y adónde va después. Por eso, usa una dirección nueva cada vez que te paguen. La mayoría de las billeteras te ofrecen una nueva por sí solas. [Leer más](/es/a-fondo/privacidad-en-bitcoin).

**Quién debería saberlo.** Si te pasa algo, ¿puede alguien llegar a tus monedas? La forma más simple es que una persona que conoces en persona sepa que el papel existe, dónde está y qué abren sus palabras. Una carta corta, escrita junto con esa persona, puede decirlo. La carta nunca lleva las palabras, y un testamento tampoco debería llevarlas. [Leer más](/es/glosario/planificacion-de-la-herencia).

**Tu celular.** Mantén tu billetera actualizada. Una actualización que te pide tus palabras es un robo. Antes de cambiar de celular, trae la billetera de vuelta en el nuevo, desde el papel y en la misma app, y mira que tus monedas estén ahí. Solo entonces borra el viejo. Si un celular se pierde o te lo roban, haz lo mismo en otro, y después mueve las monedas a una billetera nueva con palabras nuevas.

**Más adelante, o quizá nunca**

**Una billetera de hardware.** Un dispositivo pequeño que mantiene tus claves lejos de internet. Importa cuando tienes más de lo que guardarías con tranquilidad en un celular. Un dispositivo se puede perder o se puede romper, así que el respaldo en papel importa tanto como antes. Y un dispositivo puede tener una falla: en 2026 se descubrió que los dispositivos de un fabricante habían creado claves que se podían adivinar, y se robaron monedas. [Leer más](/es/glosario/billetera-de-hardware).

**Lightning.** Una segunda red que funciona sobre Bitcoin, hecha para pagos pequeños y rápidos. Importa cuando quieres pagar cosas con bitcoin, y no solo tenerlo. Con Lightning, o te ocupas tú de más cosas, o dejas que una empresa lo maneje por ti. [Leer más](/es/glosario/lightning-network).

**Tu propio nodo.** Un nodo, como leíste antes, es una computadora que guarda una copia del registro y revisa cada bloque. Como lo revisa todo por su cuenta, se le llama **nodo completo**, y puedes correr uno en casa. Normalmente, una billetera le pregunta a una computadora que es de otra persona. Con un nodo propio, una billetera que te deja elegir puede preguntarle al tuyo. Suele hacer falta una computadora que se deja encendida, y mucho espacio en disco. [Leer más](/es/glosario/nodo-completo).

**Multisig.** Una billetera que necesita más de una clave para gastar: por ejemplo, dos de tres, sin importar cuáles. Si pierdes una clave, todavía puedes gastar, siempre que también hayas guardado los datos de cómo se configuró la billetera. Un ladrón con una sola clave no puede. Para un monto que te cambiaría la vida, muchos asesores la sugieren, aunque no todos, y es mucho más difícil de manejar. [Leer más](/es/glosario/multisig).

**Impuestos.** Vender bitcoin de verdad, o pagar con él, es asunto de la oficina de impuestos de tu país. Su propio sitio web es por donde hay que empezar.

## Seis reglas para tener presentes

La mayor parte del dinero que pierden los dueños no se la llevan los hackers. Lo envía el dueño, a alguien que lo ha engañado. Del dinero que la gente le dijo al FBI que había perdido en 2025 en casos relacionados con bitcoin y monedas parecidas, más de cuatro quintas partes se fueron así. Las inversiones falsas, por sí solas, se llevaron casi dos tercios. Por eso la mayoría de estas reglas tratan de personas.

1. **Tu frase semilla vive en papel, en más de un lugar.** Solo se teclea en tu propia billetera, y no se le muestra ni se le dice a nadie.
2. **Nunca empieces por un desconocido, un anuncio ni un enlace en un mensaje.**
3. **Quien exige un pago en bitcoin, o garantiza una ganancia, es un estafador.**
4. **Nunca envíes más dinero para que te liberen tu propio dinero.** Una comisión de verdad se descuenta del dinero que ya tienes ahí.
5. **Revisa la dirección completa cada vez.** Antes de un pago grande, envía uno pequeño.
6. **Si alguien te está apurando, detente.** Habla con alguien que conoces en persona antes de hacer cualquier cosa.

Los robos de hackers a exchanges, en su mayoría, no están en las cifras del FBI. Pueden ser muy grandes, y son el riesgo de dejar monedas con una empresa.

## Hazlo

Para este paso hace falta una tarjeta en blanco o un pedazo de papel, y nada más.

- [ ] Copia ahí las seis reglas. Solo las reglas, nunca tu frase semilla. Déjalo donde lo veas.
- [ ] Elige un lugar del mapa sobre el que quieras leer después. O no elijas ninguno: esa también es una buena respuesta.
- [ ] ¿Alguien te envió este Recorrido? Dile que lo terminaste.

## Una objeción razonable

"Siete capítulos, y todas estas reglas. Si hace falta tanto cuidado, ¿vale la pena?".

Para mucha gente no vale la pena, y parar ahí es razonable. Una cuenta de banco es más fácil, y un banco puede deshacer un pago que no hiciste.

Lo que ganas con ese cuidado es limitado: dinero que ninguna empresa guarda por ti, del que nadie puede crear más de lo que permiten las reglas, y que ningún banco tiene que aprobar. Viene con un precio que sube y baja. Algunas personas lo necesitan mucho. La mayoría de la gente rara vez lo necesita.

Decidas lo que decidas, ya conoces los engaños comunes, y puedes juzgar por tu cuenta. Y si ya tienes un poco, sabes cómo cuidarlo.

## Ponte a prueba

<details>
<summary>Lo que adivinaste al principio: ¿hackers, o desconocidos que convencen al dueño?</summary>

Desconocidos que convencen al dueño, con mucha diferencia. En las cifras del FBI de 2025, más de cuatro quintas partes del dinero que los dueños dijeron haber perdido se fueron así. Vuelve a leer "Seis reglas para tener presentes".

</details>

<details>
<summary>Un amigo conoce una de tus direcciones. ¿Qué puede ver?</summary>

Lo que se pagó a esa dirección, y adónde va después. Por eso usas una dirección nueva cada vez que te pagan. Vuelve a leer "El mapa".

</details>

<details>
<summary>Alguien llama de "tu exchange" y dice que tu cuenta está congelada, y que un pago la desbloqueará hoy. ¿Qué reglas se aplican?</summary>

La regla 4: nunca envíes más dinero para que te liberen tu propio dinero. Y la regla 6: alguien te está apurando, así que detente y habla con alguien que conoces en persona.

</details>

## Palabras que ya conoces

- **Lightning.** Una red que funciona sobre Bitcoin, para pagos pequeños y rápidos.
- **Nodo completo.** Un nodo que guarda su propia copia del registro y revisa cada bloque por su cuenta. Puedes correr uno en casa.
- **Multisig.** Una billetera que necesita más de una clave para gastar.

Ese es el Recorrido. Ya puedes decir qué es Bitcoin, enviar y recibir un pago, guardar un respaldo y reconocer las estafas comunes. Cuando surja una pregunta, el glosario explica las palabras, y las páginas más largas llamadas temas a fondo profundizan más.

Una última cosa. Este sitio no tiene servicio de ayuda, y nadie de este sitio te va a pedir nunca tus palabras, tus monedas ni dinero.
