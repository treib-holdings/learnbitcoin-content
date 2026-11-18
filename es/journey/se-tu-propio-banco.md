---
title: "Las claves: lo que tienes en realidad"
slug: se-tu-propio-banco
translationOf: be-your-own-bank
sourceHash: "dd35d32e86d4"
sourceCommit: "8a5e37a"
sourceUpdated: "2026-11-18"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-18"
reviewedAt: "2026-11-16"
order: 5
goDeeper: ["mt-gox-ftx-graveyard", "brain-wallets", "seed-backup-strategies"]
estimatedMinutes: 6
tagline: "Doce palabras son el camino de vuelta a tus monedas. Aprende a guardarlas, primero con palabras de práctica."
prerequisites: ["how-bitcoin-works"]
relatedTerms: ["seed-phrase", "private-key", "wallet", "self-custody", "custodial-wallet", "exchange"]
sources:
  - { label: "BIP 39 - how a wallet turns random numbers into 12 to 24 words, and the words into the seed its keys are made from", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP 32 - how every key in a wallet is made, in a fixed order, from one seed", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Trezor - How to use a wallet backup: no digital copies, screenshots and photographs included; the maker never asks for it; whoever has it can reach the coins from another wallet", url: "https://trezor.io/guides/backups-recovery/general-standards/how-to-use-a-wallet-backup" }
  - { label: "Trezor - Best practices for securing your wallet backup: a lost backup cannot be recovered by anyone; several copies in separate places, away from the eyes of guests", url: "https://trezor.io/blog/security/best-practices-for-securing-your-wallet-backup" }
  - { label: "Trezor - What to do if your wallet backup goes missing: move the coins to a new wallet with a new backup", url: "https://trezor.io/blog/security/what-to-do-if-your-trezor-or-wallet-backup-goes-missing" }
  - { label: "Trezor - Check backup: a backup is tested inside the wallet itself, before it is relied on", url: "https://trezor.io/guides/backups-recovery/general-standards/check-backup-on-trezor-safe-5" }
  - { label: "US Securities and Exchange Commission, Office of Investor Education and Assistance - Crypto Asset Custody Basics for Retail Investors (December 12, 2025): store the seed phrase in a secure place and share it with nobody; a wallet that is lost, stolen or damaged may be lost for good; a company that holds coins for you controls the keys", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/crypto-asset-custody-basics-retail-investors-investor-bulletin-0" }
  - { label: "Kaspersky Securelist (February 5, 2025) - apps in both app stores that searched photo galleries for recovery phrases", url: "https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385/" }
  - { label: "FBI Internet Crime Complaint Center - 2025 report: $11.37 billion lost in complaints involving cryptocurrency, about $7.2 billion of it to investment fraud; the figures are what people reported, for every cryptocurrency", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
  - { label: "Mt. Gox - announcement that it had applied to a Tokyo court for civil rehabilitation, with about 750,000 of its customers' bitcoins missing (February 28, 2014)", url: "https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf" }
  - { label: "Mt. Gox - bankruptcy proceedings begin (April 24, 2014)", url: "https://www.mtgox.com/img/pdf/20140424_announce_qa_en.pdf" }
  - { label: "Christian Decker and Roger Wattenhofer - Bitcoin Transaction Malleability and MtGox (2014): Mt. Gox had been the largest Bitcoin exchange", url: "https://arxiv.org/abs/1403.6676" }
  - { label: "In re FTX Trading Ltd., declaration of John J. Ray III (November 17, 2022): FTX.com was among the largest exchanges in the world", url: "https://storage.courtlistener.com/recap/gov.uscourts.deb.188450/gov.uscourts.deb.188450.24.0.pdf" }
  - { label: "Coinkite - advisory of July 30, 2026: a flaw in a wallet maker's devices weakened the making of seed words, and funds were stolen", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "Mt. Gox trustee - repayments in bitcoin begin (July 5, 2024), ten years after the collapse", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "FTX - bankruptcy case record (filed November 11, 2022; the repayment plan took effect January 3, 2025)", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "US Bankruptcy Court, District of Delaware - In re FTX Trading Ltd., opinion of June 26, 2024: customers' claims for coins are valued in dollars at the prices of the day the company filed", url: "https://www.deb.uscourts.gov/sites/deb/files/opinions/FTX%20Opinion%20and%20Order%20Digital%20Asset%20Estimation.pdf" }
  - { label: "European Union - Regulation (EU) 2023/1114 on markets in crypto-assets, Article 59: companies that hold or trade crypto-assets for customers need an authorisation", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1114" }
  - { label: "New York State Department of Financial Services - virtual currency businesses: the state's license", url: "https://www.dfs.ny.gov/virtual_currency_businesses" }
  - { label: "FDIC - Understanding deposit insurance: at least $250,000 for each depositor at each insured bank", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }
  - { label: "US Code of Federal Regulations, 12 CFR 1005.6 - a customer's loss from a payment they did not authorize is limited", url: "https://www.ecfr.gov/current/title-12/chapter-X/part-1005/subpart-A/section-1005.6" }
---

> **Adónde vas:** Al terminar sabrás qué son las 12 palabras, las cuatro reglas para guardarlas y las dos formas principales en que la gente tiene bitcoin. También habrás hecho una copia en papel de las palabras de tu billetera de práctica y habrás comprobado que funciona. Ten a mano un bolígrafo y papel.

**Primero, adivina.** Mañana tu celular se cae a un lago, con una billetera de bitcoin dentro. ¿Qué pasa con las monedas?

## ¿Qué son las 12 palabras?

Cuando creaste tu billetera de práctica, te mostró 12 palabras. Juntas se llaman **frase semilla**. (Las billeteras de verdad también la llaman frase de recuperación, y algunas usan 24 palabras.) De esas palabras sale cada clave y cada dirección de la billetera, siempre en el mismo orden.

<figure>
  <img src="/diagrams/journey-seed-words-es.svg" alt="Bajo el título '12 palabras. Cada clave. Cada dirección.', un recuadro arriba contiene la frase semilla de 12 palabras, dibujadas como doce barras cortas. De él bajan flechas hasta una fila de recuadros: clave 1 con dirección 1, clave 2 con dirección 2, clave 3 con dirección 3, y luego tres puntos por las que siguen. Abajo: 'Siempre en el mismo orden.'" width="800" height="420" />
  <figcaption>Cada clave y cada dirección de tu billetera sale de la frase semilla de 12 palabras que está arriba. Los números muestran el orden, que es siempre el mismo.</figcaption>
</figure>

Por eso cada clave y cada dirección puede volver a salir de las palabras. Pon las mismas palabras en el mismo tipo de billetera en un celular nuevo, y aparecen las mismas claves, las mismas direcciones y las mismas monedas. Las monedas nunca estuvieron en el celular viejo. Están en el registro, y las palabras son la forma de llegar a ellas.

Así que el celular en el lago te cuesta un celular. Te cuesta las monedas solo si las palabras se fueron con él.

## ¿Qué consecuencias tiene eso?

Quien tenga las palabras tiene las monedas. En una billetera como esta no hay ninguna contraseña detrás de ellas, ni una segunda comprobación.

Y si las palabras se pierden, junto con el celular, nadie puede volver a llegar a las monedas. Ninguna empresa puede restablecer las palabras, porque ninguna empresa las tiene.

Una copia de las palabras, bien guardada, se llama **respaldo**.

## ¿Cómo se guardan las palabras?

Cuatro reglas.

1. **En papel, a mano.** No en una foto, ni en una nota en tu celular, ni en un correo electrónico, ni en un archivo. En 2025, unos investigadores informaron que en las dos grandes tiendas de apps había apps que buscaban estas palabras en las fotos de la gente.
2. **Nunca se teclean en un sitio web, en un correo ni en un mensaje.** Trata como una estafa cualquier página que pida palabras de verdad, sin ninguna excepción. Las únicas palabras que vas a teclear alguna vez en una página web son las que creó la billetera de práctica de este sitio.
3. **Nunca se dan, se muestran ni se leen en voz alta a nadie.** Ninguna empresa ni nadie que te ayude necesita tus palabras, ni siquiera tres de ellas. Quien te las pide intenta quitarte tus monedas, por muy amable u oficial que suene.
4. **En más de un lugar.** Así, un solo incendio o un solo robo no se lleva la única copia. Quien encuentre el papel tiene las monedas, así que guárdalo donde una visita no pueda verlo, y no en un cuaderno que sacas a menudo.

Las palabras de verdad se teclean en un solo lugar: tu propia billetera, en su propia pantalla, cuando eres tú quien la configura o la trae de vuelta. Y no uses una página web como una billetera para bitcoin de verdad.

Hay una cosa que las reglas dejan sin resolver. Si nadie más sabe que el papel existe, nadie podrá llegar a tus monedas cuando ya no estés. Pero quien sepa dónde está puede llevárselas. El próximo capítulo vuelve sobre esto.

## Haz un respaldo

Ahora haz un respaldo de tu billetera de práctica. El paso te pide teclear tres de las palabras, para comprobar tu papel. Eso es seguro por una sola razón: estas palabras protegen monedas de práctica que no valen nada. Si todavía no tienes una billetera de práctica, el paso te ayuda a crear una primero.

La billetera de práctica está en practice.learnbitcoin.com y en ningún otro lugar. Mira la dirección web en la barra de direcciones de tu navegador antes de teclear una sola palabra.

**Hazlo:** [La semilla](https://practice.learnbitcoin.com/es/do/the-seed). Pasa a papel las 12 palabras de tu billetera de práctica, en orden. Después el paso te pide tres de ellas, para comprobar tu papel.

Escribe "práctica" en ese papel, y nunca uses estas 12 palabras para bitcoin de verdad: estuvieron en una página web. Una billetera para bitcoin de verdad crea sus propias palabras.

¿Tomaste una captura de pantalla en vez de pasarlas a papel? Con palabras de práctica no pasa nada. Con palabras de verdad, borrarla no basta: la solución es una billetera nueva con palabras nuevas, y mover las monedas a ella. Así que practica ahora el hábito de verdad, que es solo papel.

## ¿Funciona el respaldo?

No sabes si un respaldo funciona hasta que lo pruebas. Una palabra mal escrita, o dos palabras en el orden equivocado, pueden pasar desapercibidas hasta el día en que las necesites.

Una prueba que no deja dudas es traer la billetera de vuelta solo con el papel. En el siguiente paso quitas la billetera de práctica de tu navegador. Después la **restauras**, que significa traerla de vuelta, tecleando las 12 palabras.

No se puede perder nada de valor. Ten el papel en la mano antes de empezar. Si las palabras del papel resultan estar mal, la billetera de práctica se pierde y creas una nueva. (Una billetera creada con una llave de acceso, o passkey, todavía se puede abrir con la llave de acceso. El paso te pide usar el papel.)

Con bitcoin de verdad, esta prueba se hace antes de que entre una sola moneda en la billetera, nunca después.

**Hazlo:** [Comprueba el respaldo](https://practice.learnbitcoin.com/es/do/prove-the-backup). Quita la billetera de práctica de tu navegador y luego tráela de vuelta, con sus monedas, desde las 12 palabras de tu papel.

Si las monedas volvieron, ya viste la idea completa. El navegador no tenía tus monedas. El papel tiene la forma de llegar a ellas. Tú tienes claves, no monedas.

## ¿Quién debería guardar las claves?

Hay dos formas principales de tener bitcoin. La diferencia es quién guarda las claves, y a guardarlas se le llama **custodia**.

**Las guarda una empresa.** Esto es una cuenta en un exchange. Recibes un nombre de usuario, una contraseña que se puede restablecer y un servicio de ayuda. En muchos países esas empresas necesitan una licencia. La empresa tiene las claves, así que lo que tú tienes es su promesa de entregarte las monedas.

Esa promesa solo vale lo que vale la empresa. Uno de los exchanges más grandes de 2014 quebró y faltaban monedas de sus clientes, y lo mismo pasó con uno de los más grandes de 2022. Los clientes esperaron años, y un tribunal decidió qué recuperaban. Para algunos fueron dólares, no monedas.

**Las guardas tú.** Esto es una billetera propia, como la de práctica. Ninguna empresa tiene tus monedas, así que ninguna puede congelarlas ni prestarlas. De lo que queda te cuidas tú: de una billetera defectuosa, de un papel perdido, de un ladrón, de un engaño, y de lo que pase con las monedas cuando mueras.

Ninguna de las dos formas es segura por sí sola, y hay un peligro que es el mismo en las dos: que te engañen. Del dinero que la gente le dijo al FBI que había perdido en 2025 en casos relacionados con bitcoin y monedas parecidas, la mayor parte la enviaron sus dueños a alguien que los había engañado.

## Una objeción razonable

"¿Doce palabras en un pedazo de papel? Eso suena menos seguro que mi banco, no más".

Contra las cosas que suelen salir mal, un banco es más seguro. Una contraseña olvidada se puede restablecer. Una tarjeta robada se puede cancelar. En Estados Unidos el gobierno asegura los depósitos hasta un límite, y un pago que no hiciste normalmente se puede deshacer.

Guardar tus propias claves protege contra otras cosas: una empresa que quiebra, una cuenta que te congelan, un banco que no quiere enviar tu pago. Lo hace quitando también las protecciones. Algunas personas quieren eso, y otras no. También por eso este curso te hace practicar primero, con monedas que no valen nada.

## Ponte a prueba

<details>
<summary>Tu celular se perdió. ¿Qué necesitas para recuperar tus monedas?</summary>

Las 12 palabras. Puestas en el mismo tipo de billetera en un celular nuevo, traen de vuelta las mismas claves y las mismas monedas. Sin un respaldo, nada puede hacerlo. Vuelve a leer "¿Qué son las 12 palabras?".

</details>

<details>
<summary>Alguien de "soporte de la billetera" te envía un mensaje y te pide tres de tus palabras, para arreglar un problema. ¿Qué haces?</summary>

Nada de lo que pide. Ninguna empresa necesita tus palabras, ni siquiera tres de ellas, y cualquiera que te las pida intenta quitarte tus monedas. Vuelve a leer "¿Cómo se guardan las palabras?".

</details>

<details>
<summary>¿Dónde no se debe guardar el papel?</summary>

En un cuaderno que sacas a menudo. En cualquier lugar donde una visita pueda mirar. Y tampoco en un solo lugar. Las palabras mismas nunca van en una foto ni en un archivo. Vuelve a leer las cuatro reglas.

</details>

## Palabras que ya conoces

- **Frase semilla.** Las palabras, 12 aquí y 24 en algunas billeteras, de las que sale cada clave de una billetera. También se llama frase de recuperación.
- **Respaldo.** Una copia de la frase semilla, bien guardada.
- **Restaurar.** Traer una billetera de vuelta desde su frase semilla.
- **Custodia.** Quién guarda las claves: tú, o una empresa por ti.

Hasta aquí todo se hizo con monedas de práctica. Lo que sigue trata de bitcoin de verdad.
