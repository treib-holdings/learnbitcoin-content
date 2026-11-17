---
title: "Cómo funciona un pago"
slug: como-funciona-bitcoin
translationOf: how-bitcoin-works
sourceHash: "493163e94975"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 4
goDeeper: ["utxos", "mempool", "mining"]
estimatedMinutes: 5
tagline: "Un pago, seguido desde que tocas Enviar hasta que es definitivo. Envías uno tú, con monedas de práctica, y miras."
prerequisites: ["fair-questions"]
relatedTerms: ["transaction", "transaction-fee", "utxo-unspent-transaction-output", "change-output", "mempool", "miner", "transaction-finality"]
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System: section 1 (payments that cannot be reversed), section 2 (a coin is a chain of signatures), section 4 (making a block takes work), section 5 (how the network takes a payment in), section 6 (what a payment leaves over is the fee), section 9 (coins are spent whole, and change comes back to the sender), section 11 (why later blocks make a payment harder to undo)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Dotan, Pignolet, Schmid, Tochner and Zohar - Survey on Cryptocurrency Networking (2020), section 4.1, reporting measurements by Till Neudecker: a payment reaches half the nodes in about 5 seconds and nine in ten in about 15", url: "https://arxiv.org/pdf/2008.08412" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - the mempool is kept in the order payments are expected to be mined, by fee rate", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "mempool.space API - fee rates over the last year, in eight-hour averages: the middle payment of a block paid 3 sats per unit of size or less in about 99 of every 100", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/1y" }
  - { label: "mempool.space API - the blocks after number 840,000 (April 20, 2024); read on through block 840,064, an ordinary payment cost $45 or more in every one, for about ten hours", url: "https://mempool.space/api/v1/blocks/840014" }
  - { label: "Visa Core Rules and Visa Product and Service Rules (October 2026) - a card payment is approved within seconds and can be disputed for 120 days in most cases", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" }
  - { label: "Bitcoin Core, chainparams.cpp - blocks are aimed at one every ten minutes", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp#L128" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double-spending (December 2012): the chance of undoing a payment falls with each block and depends on the attacker's share of the mining power; six blocks is a custom, not a guarantee", url: "https://arxiv.org/abs/1402.2009" }
---

> **Adónde vas:** Al terminar habrás enviado un pago, habrás visto lo que gastó y habrás mirado cómo se vuelve definitivo. El capítulo tiene tres partes cortas, cada una con un paso en la billetera de práctica. La lectura lleva unos cinco minutos y los pasos unos diez. Puedes parar después de cualquier parte y volver: la página marca los pasos que ya hiciste.

**Primero, adivina.** Después de enviar bitcoin, ¿cuánto tiempo pasa hasta que nadie pueda deshacerlo: un segundo, diez minutos, una hora o una semana?

## Parte 1. ¿Qué pasa cuando tocas Enviar?

Alice quiere pagarle a Bob. Abre su billetera, pone la dirección de Bob y un monto, y toca Enviar.

Su billetera escribe un mensaje corto. El mensaje dice: estas monedas mías ahora pertenecen a esa dirección. La billetera lo firma con la clave de Alice.

La **firma** demuestra que el mensaje viene de quien tiene la clave, y lo hace sin mostrar la clave. Es el mismo tipo de matemáticas que protege el sitio web de tu banco.

La billetera les entrega el mensaje firmado a los nodos, las computadoras que llevan el registro. Cada uno revisa que cumpla las reglas y lo pasa a los demás. En unos diez segundos, la mayoría ya lo tiene. Ningún banco tuvo que aprobarlo.

Ahí el pago espera, junto con otros pagos nuevos, a que un bloque lo incluya. Este curso llama a ese lugar **la sala de espera**. La Parte 3 trata de ella.

Cada pago incluye también una **comisión**: por lo general un monto pequeño, para el minero que lo pone en un bloque. La mayoría de las billeteras sugieren una y te dejan cambiarla. En una semana tranquila son unos centavos de dólar. En un día de muchísimo movimiento, en 2024, fue de más de $45 durante horas.

Ahora envía uno. En este paso dejas unos sats de práctica en el "fondo común". El fondo común es la reserva de la propia billetera de práctica: lo que dejas ahí se le pasa a alguien que viene a aprender después de ti.

El paso pone por ti la dirección del fondo común, y lleva unos minutos. La billetera de práctica muestra la comisión como una tasa, y puedes dejarla como está. Si todavía no tienes una billetera de práctica, el paso te ayuda a crear una primero.

**Hazlo:** [Pásala](https://practice.learnbitcoin.com/es/do/pass-it-on). Toca Enviar tú: deja unos sats de práctica en el fondo común para quien viene a aprender después de ti, y mira cómo el pago recibe su primera confirmación.

## Parte 2. ¿Qué gastó el pago?

Tu billetera muestra un solo número. Lo calcula sumando tus monedas. En el registro mismo no hay saldos, solo monedas.

Una **moneda** aquí es un monto que se pagó a una de tus direcciones. Si te pagaron tres veces, tienes tres monedas, así como podrías tener en el bolsillo tres billetes de distinto valor.

Una moneda se gasta entera, como un billete. Digamos que tienes una moneda de 10,000 sats y le pagas 6,000 a alguien. Tu billetera usa la moneda entera y crea dos nuevas: una de 6,000 para esa persona, y una de unos 3,800 que vuelve a ti.

La parte que vuelve se llama **cambio**. Con un billete, la tienda te da el cambio. Aquí lo crea tu propia billetera.

Los 200 sats que sobran son la comisión. Y si ninguna moneda es lo bastante grande por sí sola, la billetera usa dos o más juntas.

En el siguiente paso cuentas tus propias monedas. No te sorprendas si hay una sola. El pago que acabas de hacer usó entera la moneda que te dieron, y el cambio es lo que queda.

**Hazlo:** [No hay saldos](https://practice.learnbitcoin.com/es/do/no-balances). Cuenta las monedas de tu propia billetera de práctica, y luego lee lo que uno de tus pagos hizo con ellas: qué gastó, qué fue adónde, el cambio y la comisión.

De aquí sale algo que sorprende a la gente. La comisión paga el espacio en un bloque, y un pago ocupa más espacio cuantas más monedas usa. Así que la comisión depende de las monedas del pago, no de cuánto dinero mueve.

## Parte 3. ¿Cuándo es definitivo?

Un pago que los nodos se han pasado unos a otros todavía no está en el registro. Está en la sala de espera, una fila que tiene un nombre técnico: el mempool.

Los mineros llenan cada bloque nuevo con pagos de la sala de espera. Cobran las comisiones además de las monedas nuevas. Así que cuando hay más pagos en espera de los que caben en un bloque, los pagos que ofrecen más por el espacio que ocupan van primero. Si ofreces demasiado poco en un día de mucho movimiento, tu pago espera más.

Llega un bloque más o menos cada diez minutos, en promedio. Algunos llegan en menos de un minuto, y otros tardan una hora.

El bloque que incluye tu pago es su primera confirmación. Para deshacer el pago, alguien tendría que hacer ese bloque otra vez, y cada bloque que vino después, más rápido que todos los demás mineros juntos. Hacer un bloque exige una cantidad enorme de cálculos, y la electricidad para hacerlos, así que eso cuesta mucho desde el primer bloque y cuesta más con cada uno.

Después de seis bloques, más o menos una hora en promedio, deshacer un pago exigiría una gran parte de todo el poder de minería que existe. Por eso seis es el punto en el que la gente suele llamar definitivo a un pago. Es una costumbre, no una regla del sistema.

Tampoco hay nadie que pueda deshacer un pago por ti. Ningún banco va a revertir uno que fue a la dirección equivocada, o a alguien que te engañó. El hábito que protege de una dirección equivocada: revisa la dirección completa antes de enviar, y envía primero un monto pequeño.

Míralo pasar. En la versión de práctica de Bitcoin los bloques llegan mucho más rápido, así que seis tardan unos minutos, no una hora.

**Hazlo:** [La sala de espera](https://practice.learnbitcoin.com/es/do/waiting-room). Envía un pago y míralo esperar, entrar en un bloque y llegar a seis confirmaciones.

## Una objeción razonable

"Una hora para tener certeza, y ninguna manera de deshacer un error. Mi tarjeta del banco es más rápida y más segura".

Para comprar un café, lo es. Un pago con tarjeta se aprueba en segundos, y durante los meses siguientes el banco puede revertirlo si algo estuvo mal. Eso protege a quien compra.

Bitcoin ofrece lo contrario: un pago que ningún banco ni gobierno tiene que aprobar y que, una vez definitivo, nadie puede revertir. Para alguien con la cuenta congelada por su banco, o con un banco que no quiere enviar su pago, eso puede importar más que la velocidad. Para un error o un fraude, es justo lo que no conviene. Los dos capítulos siguientes tratan del cuidado que eso exige.

Existen formas más rápidas de pagar con bitcoin, y se apoyan en esta. El último capítulo apunta hacia ellas.

## Ponte a prueba

<details>
<summary>¿Qué demuestra una firma?</summary>

Que quien tiene la clave aprobó el pago. Lo demuestra sin mostrar la clave. Vuelve a leer la Parte 1.

</details>

<details>
<summary>Tienes dos monedas de 5,000 sats cada una y le pagas 6,000 a alguien. ¿Qué hay en el registro después?</summary>

Las dos monedas viejas se usaron enteras. Hay dos monedas nuevas: una de 6,000 para esa persona, y una de un poco menos de 4,000 para ti como cambio. La pequeña diferencia fue para un minero como comisión. Vuelve a leer la Parte 2.

</details>

<details>
<summary>Lo que adivinaste al principio: ¿cuánto tiempo pasa hasta que nadie pueda deshacerlo?</summary>

Más o menos una hora, que son seis bloques. Ninguna regla dice seis. Para entonces, deshacer el pago exigiría una gran parte de todo el poder de minería que existe. Vuelve a leer la Parte 3.

</details>

## Palabras que ya conoces

- **Firma.** Prueba, hecha con una clave, de que quien tiene esa clave aprobó un pago.
- **Comisión.** Lo que un pago le paga al minero que lo pone en un bloque.
- **Moneda.** Un monto recibido en un pago. El total de una billetera es la suma de sus monedas.
- **Cambio.** La parte de una moneda gastada que vuelve a ti como una moneda nueva.
- **La sala de espera.** Donde los pagos nuevos esperan un bloque. Su nombre técnico es el mempool.

Entonces, ¿qué es lo que tienes en realidad?
