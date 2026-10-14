---
title: "Gobernanza de Bitcoin"
slug: gobernanza-de-bitcoin
aliases:
  - "gobernanza"
  - "proceso de gobernanza"
  - "Bitcoin governance"
  - "Bitcoin's governance"
avoid:
  - "gobierno de Bitcoin"
draft: false
published: "2026-10-15"
shortDefinition: "El proceso informal con el que Bitcoin toma decisiones. No hay una autoridad central. Los cambios ocurren por consenso aproximado entre varios grupos de interés, cada uno de los cuales tiene un poder de veto de facto."
keyTakeaways:
  - "Bitcoin no tiene un órgano de votación formal, ni fundación, ni consejo de gobernanza"
  - "Desarrolladores, mineros, quienes operan nodos completos, usuarios y empresas tienen, cada uno, un poder de veto informal"
  - "El sistema es lento a propósito: ser difícil de cambiar es parte de lo que hace creíble a Bitcoin como dinero"
sources:
  - { label: "BIP 101 - Increase maximum block size, by Gavin Andresen (a hard fork from 1 MB to 8 MB that then keeps growing, to activate once 750 of 1,000 blocks signal; status: Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki" }
  - { label: "BIP 109 - Two million byte size limit with sigop and sighash limits, by Gavin Andresen (a hard fork from 1 MB to 2 MB, to activate once 750 of 1,000 blocks signal; status: Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0109.mediawiki" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): the Segwit2x organizers suspend the planned 2MB block size increase, writing that they had not built sufficient consensus for it", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment, by Shaolin Fry (from midnight August 1, 2017, by median time past, blocks that do not signal for SegWit on bit 1 are rejected, until SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in on August 9 signal for SegWit on bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - soft-fork
  - chain-split
  - miner-signaling
  - consensus-parameter
  - bip-148-uasf
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0003.md"
ogImage: "/diagrams/og/bitcoin-governance-vetoes.png"
ogImageAlt: "Diagrama en forma de pentágono con los cinco grupos de interés de la gobernanza de Bitcoin (Desarrolladores, Mineros, Nodos, Usuarios, Hodlers), cada uno con una leyenda de cómo veta, alrededor de una insignia central que dice CONSENSO. Título: Cinco vetos. Un consenso. Lema: Nadie manda. Todos pueden negarse."
liveWidget: ~
translationOf: bitcoin-governance
sourceHash: "cf8d68068bd6"
sourceCommit: "659e6f9"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Bitcoin no tiene jefe. No hay una fundación que vote los cambios de reglas, ni un CEO que decida la hoja de ruta de funciones, ni una junta de accionistas. Y sin embargo el protocolo evoluciona: despacio, con polémica y mediante un proceso que nadie diseñó pero que todo el mundo ha llegado a reconocer. A ese proceso se refiere la gente cuando habla de *gobernanza de Bitcoin*.

El resumen honesto: la gobernanza de Bitcoin es un consenso aproximado (rough consensus) entre varios grupos de interés, cada uno de los cuales puede vetar un cambio, en la práctica, con solo negarse a adoptarlo.

## Los grupos de interés

Cinco grupos tienen influencia práctica sobre lo que Bitcoin hace en realidad:

- **Desarrolladores**: quienes escriben [Bitcoin Core](/es/glosario/bitcoin-core) y las demás implementaciones de nodo. Pueden proponer, diseñar, revisar e integrar código. No pueden obligar a nadie a correrlo.
- **Mineros**: producen bloques y señalizan la activación de reglas nuevas mediante la [señalización de los mineros (en inglés)](/glossary/miner-signaling). Tienen un papel estructural en la activación de un [soft fork](/es/glosario/soft-fork), pero no pueden imponer reglas que los nodos no hayan adoptado.
- **Quienes operan nodos completos**: hacen cumplir las reglas de consenso. Rechazan cualquier bloque que viole las reglas que aplican. Un cambio que mineros y desarrolladores quieran está muerto en la práctica si los nodos económicos se niegan a actualizar.
- **Usuarios y empresas**: exchanges, billeteras, custodios, comercios. Eligen qué cadena reconocer como "Bitcoin" si ocurre una división, y su decisión determina qué bifurcación conserva el valor.
- **Hodlers**: la mayoría económica de largo plazo. No firman bloques ni escriben código, pero su disposición a conservar (o a vender) define lo que los mineros ganan de verdad y qué cadena tiene la escasez que el mercado reconoce.

<figure>
  <img src="/diagrams/bitcoin-governance-vetoes.svg" alt="Diagrama en forma de pentágono con los cinco grupos de interés de la gobernanza de Bitcoin, cada uno capaz de vetar un cambio de consenso. Desarrolladores arriba (vetan al negarse a integrar código), Mineros arriba a la derecha (al negarse a señalizar), Nodos abajo a la derecha (al negarse a actualizar), Usuarios abajo a la izquierda (al reconocer otra cadena) y Hodlers arriba a la izquierda (al vender la cadena nueva). Una insignia central que dice CONSENSO representa el acuerdo al que los cinco deben llegar. Nadie manda; todos pueden negarse." />
  <figcaption>Cinco grupos, cinco vetos. Ninguna autoridad central. Cualquier cambio de reglas tiene que pasar por los cinco.</figcaption>
</figure>

Cualquier cambio a las reglas de consenso de Bitcoin exige, al final, que estos grupos se alineen. Si uno solo se niega, el cambio fracasa o produce una división de la cadena.

## El proceso

El camino habitual se parece a esto:

1. **Discusión**: alguien propone una idea en la lista de correo, en los chats de desarrollo o en un borrador de [BIP](/es/glosario/bip). Se revisa, se critica y se pule durante meses o años.
2. **Implementación**: se escribe el código, se revisa entre pares y se integra en una implementación de nodo.
3. **Lanzamiento**: sale el cliente nuevo. Cada usuario elige si actualiza o no.
4. **Señalización**: para los [soft forks](/es/glosario/soft-fork), los mineros empiezan a [señalizar (en inglés)](/glossary/miner-signaling) su apoyo en sus bloques.
5. **Fijación y activación**: si se alcanza el umbral, la regla queda fijada (locked in) y se activa. Los nodos que corren el cliente nuevo la hacen cumplir.
6. **Adopción**: los nodos económicos siguen reconociendo (o dejan de reconocer) la cadena que sigue la regla nueva. Si una masa crítica de los nodos que manejan valor actualiza, el cambio tuvo éxito.

Esta secuencia se ha repetido con [SegWit](/es/glosario/segwit), con [Taproot](/es/glosario/taproot) y con cada cambio importante desde 2012. De punta a punta suele tomar años. Los cambios propuestos que fracasan, como los hard forks para aumentar el tamaño de bloque que se intentaron de 2015 a 2017, fracasan en uno de estos pasos: no por una votación formal, sino porque no logran alinear a los grupos de interés relevantes. El [BIP 148 (en inglés)](/glossary/bip-148-uasf), el soft fork activado por los usuarios de 2017, fue un caso distinto. Su regla, que los bloques señalizaran SegWit a partir del 1 de agosto de 2017, ya se estaba cumpliendo cuando llegó esa fecha, y SegWit se activó más adelante ese mismo mes.

## Por qué la lentitud es el punto

A la gobernanza de Bitcoin se la critica a menudo por ineficiente. La crítica pasa por alto lo esencial. Un sistema monetario cuyas reglas son fáciles de cambiar no es un sistema monetario creíble. La lentitud no es un defecto: es la propiedad que hace creíble el "tope de 21 millones" de Bitcoin de una manera que una hoja de ruta corporativa nunca podría lograr.

La misma fricción de procedimiento que hizo tan difícil sacar SegWit también hace difícil que cualquiera (un gobierno, una corporación o una camarilla de desarrolladores) cambie el calendario de emisión, altere el modelo de seguridad o debilite en silencio las reglas de consenso. El consenso aproximado es una ventaja, no un accidente.

## Lo que la gobernanza de Bitcoin no es

Conviene decir con claridad lo que la gobernanza de Bitcoin *no* es:

- **No es votar según cuántas monedas tienes.** Bitcoin no tiene un token de gobernanza on-chain.
- **No es la regla de la mayoría de los mineros.** Los mineros pueden señalizar, pero no pueden obligar a los nodos económicos a reconocer bloques bajo reglas distintas.
- **No está controlada por los desarrolladores de Bitcoin Core.** Ellos escriben el código, pero cada línea que escriben tiene que ser aceptada por la gente que lo corre.
- **No es inexistente.** Que no haya gobernanza formal no significa que no haya gobernanza: significa un proceso emergente que, hasta ahora, ha resultado más difícil de capturar que cualquier mecanismo formal que se haya probado en otras formas de dinero.

Para ver con más detalle cómo funciona esto en la práctica, las historias de la [activación de SegWit](/es/glosario/segwit) y de la [guerra del tamaño de bloque (en inglés)](/rabbit-hole/block-size-war) son los casos de estudio canónicos.
