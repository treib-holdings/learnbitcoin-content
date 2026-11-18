---
title: "Adónde ir después"
slug: soberania
translationOf: sovereignty
sourceHash: "7d4c02d6a1f2"
sourceCommit: "a51ea1e"
sourceUpdated: "2026-11-18"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-18"
reviewedAt: "2026-11-18"
order: 7
goDeeper: ["bitcoin-privacy", "run-your-own-node", "multisig-and-inheritance"]
estimatedMinutes: 6
tagline: "Seguiste un pago y recuperaste una billetera. Adónde vas ahora depende de lo que quieras hacer con bitcoin."
prerequisites: ["using-bitcoin"]
relatedTerms: ["hardware-wallet", "lightning-network", "full-node", "multisig", "bitcoin-inheritance-planning", "address-reuse"]
sources:
  - { label: "FBI Internet Crime Complaint Center - 2025 report: $11.37 billion lost in complaints involving cryptocurrency. Its table of crime types (page 55) gives $7.3 billion for investment fraud (the report's text says $7.2 billion); the twelve types in which the owner is deceived into paying add up to about $9.8 billion, which is this site's own sum", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
  - { label: "TRM Labs (October 2026) - the theft from the exchange Binance on October 29, 2026, the largest on record", url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10: the record is public, and a new key should be used for each payment", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Address reuse: wallets make it easy and safe to use many addresses", url: "https://en.bitcoin.it/wiki/Address_reuse" }
  - { label: "Swiss National Cyber Security Centre (August 18, 2026) - letters about an urgent update lead to a page that asks for the seed words; no wallet maker will ever ask for them", url: "https://www.bacs.admin.ch/en/26w33-en" }
  - { label: "US Securities and Exchange Commission, Office of Investor Education and Assistance - Crypto Asset Custody Basics for Retail Investors (December 12, 2025): a seed phrase restores a wallet that is lost; it is stored safely and shared with nobody; a device that is not connected to the internet is generally more secure from online threats, and can still be lost, damaged or stolen", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/crypto-asset-custody-basics-retail-investors-investor-bulletin-0" }
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (January 14, 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Lightning specification (BOLTs) - a protocol for making fast payments with Bitcoin over a network of channels", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "Bitcoin Wiki - Clearing Up Misconceptions About Full Nodes: a full node checks every rule itself", url: "https://en.bitcoin.it/wiki/Clearing_Up_Misconceptions_About_Full_Nodes" }
  - { label: "Bitcoin Core - multisig tutorial: a wallet that needs two of three keys to spend", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/multisig-tutorial.md" }
  - { label: "BIP 87 - to restore a multisig wallet, every key holder's public key is needed as well as the seeds", url: "https://github.com/bitcoin/bips/blob/master/bip-0087.mediawiki" }
  - { label: "Sparrow Wallet - best practices: a wallet uses a public server unless it is pointed at a node of your own", url: "https://sparrowwallet.com/docs/best-practices.html" }
  - { label: "US Federal Trade Commission - What To Know About Cryptocurrency and Scams: only scammers demand payment in cryptocurrency, and only scammers guarantee profits; never click a link in an unexpected message", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams" }
  - { label: "FBI - public service announcement of March 14, 2023: do not pay any additional fees or taxes to withdraw your money", url: "https://www.ic3.gov/PSA/2023/PSA230314" }
  - { label: "US Federal Trade Commission - Bitcoin ATMs: A payment portal for scammers (September 3, 2024): slow down, and talk with someone you trust before you do anything else", url: "https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2024/09/bitcoin-atms-payment-portal-scammers" }
  - { label: "Jameson Lopp - Bitcoin Address Poisoning Attacks (April 6, 2025): check the entire address", url: "https://blog.lopp.net/bitcoin-address-poisoning-attacks/" }
  - { label: "US Federal Trade Commission - Scammers Use Fake Emergencies To Steal Your Money: use a phone number you know is right to call the family member or friend who supposedly contacted you; resist the pressure to send money immediately", url: "https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money" }
  - { label: "BlueWallet - Wallet details: the option Export/Backup shows a wallet's recovery phrase again (one wallet app's way of doing it)", url: "https://bluewallet.io/docs/wallet-details/" }
  - { label: "Trezor - What to do if your wallet backup goes missing: move the coins to a new wallet with a new backup", url: "https://trezor.io/blog/security/what-to-do-if-your-trezor-or-wallet-backup-goes-missing" }
  - { label: "US Federal Trade Commission - Refund and recovery scams: someone who asks for a fee up front to get your money back is a scammer; where to report", url: "https://consumer.ftc.gov/articles/refund-and-recovery-scams" }
  - { label: "FBI - public service announcement of August 11, 2023: recovery companies charge a fee up front; law enforcement does not charge victims; report to ic3.gov", url: "https://www.ic3.gov/PSA/2023/PSA230811" }
---

> **Adónde vas:** Este es el último capítulo. Responde las preguntas que la gente se hace después, te da seis hábitos que vale la pena conservar hagas lo que hagas, y termina con algo para hacer por la próxima persona. También puedes parar aquí.

En el capítulo 1 viste llegar tus primeras monedas de práctica. En el capítulo 4 enviaste algunas para quien viene a aprender después de ti. Has estado de los dos lados de un pago de Bitcoin. Con esa experiencia alcanza para ayudar a otra persona a hacer el primero suyo, aunque nunca hayas comprado nada.

**Primero, adivina.** Un amigo te escribe: "Estoy por borrar mi celular viejo. Instalé la app de billetera en el nuevo. Dice cero. ¿Adónde se fue mi bitcoin?". ¿Qué le preguntarías antes de que borre nada?

## ¿Qué pasó con la billetera de tu amigo?

El bitcoin sigue en el registro público. Instalar la app de nuevo puede darle a tu amigo una billetera nueva, perfectamente buena. Sus pagos anteriores pertenecen a direcciones de la billetera vieja. Por eso un saldo en cero en un celular nuevo te dice tan poco.

Pregúntale si restauró la billetera vieja desde su respaldo o si tocó Crear. Dile que conserve el celular viejo hasta que vea en el nuevo una dirección para recibir que reconozca y las transacciones que espera. Puede hacerlo en privado. Tú puedes explicarle la diferencia sin ver nunca una sola palabra de su papel.

A veces no hay papel. Entonces el celular viejo guarda la única copia de las palabras. La mayoría de las apps de billetera puede mostrarlas de nuevo, en la configuración de la billetera, y van al papel, a mano, antes de borrar nada.

Un celular perdido o robado necesita el papel, y con apuro. Trae la billetera de vuelta desde el papel en otro celular, y después mueve las monedas a una billetera nueva con palabras nuevas. Sin el papel, nada trae las monedas de vuelta.

## Elige la pregunta que es tuya

**"Si le doy a alguien una dirección, ¿qué puede ver?"** Puede buscarla en el mismo registro público donde encontraste el titular del periódico en el primer bloque de Bitcoin. Si cinco personas pagan a la misma dirección, cada una puede buscar los cinco pagos. Dale a cada persona una dirección nueva desde Recibir. La billetera muestra una nueva cuando ya se pagó a la anterior. Eso ayuda a mantener separados esos pagos, aunque más adelante, al gastarlos, todavía se pueden relacionar. [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin)

**"Guardaría unos pocos dólares en mi celular. ¿Y mis ahorros?"** Una billetera de hardware guarda las claves en un dispositivo aparte. Tu celular o tu computadora pueden preparar un pago. Tú revisas el monto y la dirección en la pantalla del propio dispositivo antes de aprobarlo. Igual necesitas un respaldo por si el dispositivo se rompe. [Billeteras de hardware, con nombres](/es/a-fondo/billeteras)

<figure>
  <img src="/photos/journey-hardware-wallet.jpg" alt="Una billetera de hardware apoyada sobre una superficie oscura. Es un dispositivo plano, y casi todo su frente es una pantalla. La pantalla está encendida y dice, en inglés, 'Enter PIN' (escribe el PIN) y '10 tries left' (quedan 10 intentos), encima de los dígitos del 0 al 9, desordenados. Debajo de la pantalla hay un pequeño candado grabado en la carcasa." width="1000" height="750" />
  <figcaption>Esta es una billetera de hardware: un dispositivo pequeño con pantalla propia.</figcaption>
</figure>

**"Un café cuesta menos que la comisión en un día de mucho movimiento. ¿Cómo lo paga la gente?"** Algunas tiendas aceptan Lightning. Deja que la gente haga pagos pequeños en bitcoin sin poner cada pago en una transacción propia en el registro público. Necesitas una billetera que lo admita. Pregunta quién controla las claves antes de poner dinero. [Lightning](/es/glosario/lightning-network)

**"¿Quién le dice a mi billetera que un pago se confirmó?"** Una billetera de celular normalmente le pregunta por el registro a la computadora de otra persona. Conociste la alternativa en el capítulo 3. Un nodo completo revisa los bloques por su cuenta. Conecta una billetera compatible a tu propio nodo y puedes comprobar los pagos contra tu propia copia del registro. [Nodo completo](/es/glosario/nodo-completo)

**"¿Podría perder una clave y aun así recuperar mis ahorros?"** Una billetera puede exigir dos de tres claves, sin importar cuáles, para gastar. A ese arreglo se le llama multisig. Si falta una clave, te quedan dos. También necesitas un registro de cómo encajan las claves entre sí, y las personas que algún día hereden la billetera tienen que saber usarla. Es un tema para estudiar antes de cambiar la forma en que guardas tus ahorros. [Multisig](/es/glosario/multisig)

## Seis hábitos para conservar

La mayor parte del dinero que pierden los dueños no se la llevan los hackers. Lo envía el dueño, a alguien que lo ha engañado. Del dinero que la gente le dijo al FBI que había perdido en 2025 en casos relacionados con bitcoin y monedas parecidas, más de cuatro quintas partes se fueron así. Por eso la mayoría de estos hábitos tratan de personas.

Los robos de hackers a exchanges, en su mayoría, no están en las cifras del FBI. Pueden ser muy grandes, y son el riesgo de dejar monedas con una empresa.

1. Escribe la frase semilla a mano. Guarda copias en lugares separados y seguros. Cualquiera que lea una copia puede gastar desde la billetera. Las palabras van a tu propia billetera cuando la restauras, y a ningún otro lado. Nadie más las necesita nunca.
2. Llega al fabricante de una billetera o a un exchange por una dirección que conoces. Cierra los mensajes inesperados que te piden iniciar sesión, instalar una actualización o compartir tus palabras.
3. Toma de la billetera una dirección nueva para recibir, y revisa el destino completo antes de enviar. Para una transferencia grande, una prueba pequeña primero puede atrapar un error. Revisa también la transferencia grande.
4. Aléjate de las ganancias garantizadas. Sáltate las ofertas de desbloquear tu saldo enviando más dinero.
5. Antes de borrar o reemplazar un dispositivo, asegúrate de que puedes llegar a la billetera correcta en el nuevo.
6. Cuando alguien te ponga un plazo, date tiempo. Quien exige un pago en bitcoin es un estafador, diga ser quien diga. Si el pedido parece venir de alguien que conoces, llama a esa persona a un número que ya tenías.

Si alguna vez te roban, denúncialo. En Estados Unidos, escribe ic3.gov en tu navegador, y avisa a tu policía local. Ellos no cobran. Quien te ofrece recuperar tu dinero a cambio de una comisión por adelantado es un estafador más.

## Hazlo una vez por la próxima persona

Imagina que la persona que te envió este curso se ofreció a enviarte unos sats. Te escribe: "¿Qué tienes que darme, y cómo vas a saber que funcionó?".

Dale tu respuesta con tus propias palabras. Si quieres mostrárselo, abre tu billetera de práctica y busca la dirección que compartirías para un pago de práctica. Después abre un pago de una lección anterior y muestra dónde aparecen sus confirmaciones. Puedes hacer las dos partes por tu cuenta, con las monedas de práctica que ya usaste.

Si estás ayudando a alguien nuevo, deja que sostenga su propio celular. Pídele que te muestre dónde recibiría un pago. Cuando encuentre la dirección, puede mostrarte esa pantalla. Dale privacidad cada vez que maneje su respaldo.

## Una objeción razonable

"Entiendo cómo funciona. Igual prefiero mi banco".

¿Qué valoras de tu banco? Quizá alguien puede restablecer tu contraseña, ayudarte con un cargo que no reconoces o contestar el teléfono cuando una transferencia sale mal. Esas son buenas razones para usarlo. Quizá también conoces a alguien a quien le rechazaron un pago o le congelaron una cuenta. Para esa persona, poder pagarle a alguien directamente puede importar muchísimo. Puedes entender las dos experiencias y decidir distinto para ti.

## Ponte a prueba

<details>
<summary>Lo que adivinaste al principio: ¿qué le preguntas a tu amigo antes de que borre el celular viejo?</summary>

Si restauró la billetera vieja desde su respaldo, o si tocó Crear e hizo una nueva. El celular viejo se queda como está hasta que el nuevo muestre una dirección para recibir que reconozca y los pagos que espera. Vuelve a leer "¿Qué pasó con la billetera de tu amigo?".

</details>

<details>
<summary>Un amigo conoce una de tus direcciones. ¿Qué puede ver?</summary>

Todos los pagos hechos a esa dirección. Por eso le das a cada persona una nueva. Vuelve a leer "Elige la pregunta que es tuya".

</details>

<details>
<summary>Alguien llama de "tu exchange" y dice que tu cuenta está congelada, y que un pago la desbloqueará hoy. ¿Qué hábitos se aplican?</summary>

El hábito 4: sáltate las ofertas de desbloquear tu saldo enviando más dinero. El hábito 6: alguien te puso un plazo, así que date tiempo. Y el hábito 2: llega tú al exchange, por una dirección que conoces.

</details>

## Palabras que ya conoces

- **Billetera de hardware.** Un dispositivo pequeño que mantiene tus claves lejos de internet.
- **Lightning.** Una red que funciona sobre Bitcoin, para pagos pequeños y rápidos.
- **Nodo completo.** Un nodo que guarda su propia copia del registro y revisa cada bloque por su cuenta. Puedes correr uno en casa.
- **Multisig.** Una billetera que necesita más de una clave para gastar.

En el capítulo 4 dejaste unos sats de práctica en un fondo común para alguien que quizá nunca conozcas. Si ahora te viene a la mente alguien que conoces, envíale [el primer capítulo](/es/recorrido/que-es-bitcoin-en-realidad). Cuando llegue al capítulo 6, quizá te pida el equivalente a unos pocos dólares en bitcoin, o solo que le des una mano. Vas a saber qué hacer.

Una última cosa. Este sitio no tiene servicio de ayuda, y nadie de este sitio te va a pedir nunca tus palabras, tus monedas ni dinero.
