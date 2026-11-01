---
title: "Por qué el dinero está roto"
slug: por-que-el-dinero-esta-roto
translationOf: why-money-is-broken
sourceHash: "69d43c32583c"
sourceCommit: "9838a39"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
order: 1
goDeeper: ["supply", "halvings", "bitcoin-units"]
estimatedMinutes: 22
tagline: "La inflación no es una fuerza de la naturaleza. Es una política. Cuando ves cómo funciona en realidad el dinero fiat (fiduciario), Bitcoin deja de parecer raro."
prerequisites: []
relatedTerms: ["fiat", "inflation", "disinflation", "cbdc-central-bank-digital-currency", "satoshi-nakamoto"]
ogImage: "/diagrams/og/dollar-purchasing-power.png"
ogImageAlt: "Lo que compra un dólar, de 1970 a 2026: una gráfica de líneas en la que el poder adquisitivo de un dólar cae hasta unos 12 centavos a lo largo de más de medio siglo de inflación compuesta, con un IPC anual de alrededor de 4 por ciento."
sources:
  - { label: "FRED - M2 Money Stock (St. Louis Fed)", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "BLS CPI Inflation Calculator", url: "https://www.bls.gov/data/inflation_calculator.htm" }
  - { label: "Federal Reserve - why the Fed aims for 2 percent inflation over the longer run", url: "https://www.federalreserve.gov/faqs/economy_14400.htm" }
  - { label: "University of Warwick - Research team sheds light on Roman financial crisis (April 2022): the denarius was deliberately alloyed with copper by 87 BC", url: "https://warwick.ac.uk/news/pressreleases/research_team_sheds/" }
  - { label: "Michael D. Bordo - Gold Standard, Concise Encyclopedia of Economics (2008): US inflation averaged 0.1 percent a year from 1880 to 1914", url: "https://www.econlib.org/library/Enc/GoldStandard.html" }
  - { label: "Federal Reserve History - Creation of the Bretton Woods System (November 2013)", url: "https://www.federalreservehistory.org/essays/bretton-woods-created" }
  - { label: "Federal Reserve History - Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls (November 2013): early in the Bretton Woods era the US held about three-quarters of the world's official gold reserves", url: "https://www.federalreservehistory.org/essays/gold-convertibility-ends" }
  - { label: "Federal Reserve History - The Great Inflation (November 2013)", url: "https://www.federalreservehistory.org/essays/great-inflation" }
  - { label: "Foreign Relations of the United States, 1964-1968, Vol. VIII, Document 99 - Treasury Secretary Fowler to President Johnson on France's gold conversions (21 June 1966)", url: "https://history.state.gov/historicaldocuments/frus1964-68v08/d99" }
  - { label: "Nixon's August 15, 1971 Address (full text)", url: "https://www.presidency.ucsb.edu/documents/address-the-nation-outlining-new-economic-policy-the-challenge-peace" }
  - { label: "Federal Reserve Board - Greenbook, part IV: gold sale to France (18 August 1971)", url: "https://www.federalreserve.gov/monetarypolicy/files/FOMC19710824greenbook19710818.pdf" }
  - { label: "Lyn Alden - What Is Money, Anyway? (March 2022)", url: "https://www.lynalden.com/what-is-money/" }
  - { label: "Cantillon - Essay on the Nature of Trade in General (1755), Liberty Fund edition", url: "https://oll.libertyfund.org/titles/essay-on-the-nature-of-trade-in-general-lf-ed" }
  - { label: "BLS - Common Misconceptions about the Consumer Price Index: Questions and Answers (the 1983 and 1999 method changes)", url: "https://www.bls.gov/cpi/factsheets/common-misconceptions-about-cpi.htm" }
  - { label: "BLS - CPI-U, all items (annual average 160.5 in 1997, 321.943 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SA0?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "BLS - CPI-U, hospital services (annual average 101.7 in 1997, 433.655 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SEMD01?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "BLS - CPI-U, college tuition and fees (annual average 294.1 in 1997, 955.326 in 2025)", url: "https://data.bls.gov/timeseries/CUUR0000SEEB01?from_year=1997&to_year=2025&annualAveragesRequested=true" }
  - { label: "Federal Reserve - Changes in U.S. Family Finances from 2022 to 2025 (October 2026): 56 percent of all families, and 31 percent of families in the bottom half by income, held stock directly or indirectly", url: "https://www.federalreserve.gov/publications/files/scf26.pdf" }
  - { label: "mempool.space - the genesis block, dated 3 January 2009", url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Wiki - Value overflow incident (August 2010)", url: "https://en.bitcoin.it/wiki/Value_overflow_incident" }
  - { label: "mempool.space - block 74,691 (16 August 2010, 08:20 UTC), where the corrected chain overtook the bad one", url: "https://mempool.space/block/00000000005c22d199706df1c38b38d76f8401920dcbe91edf3417f8847da707" }
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "mempool.space - block 225,455 (12 March 2013, 06:20 UTC), where the chain every version could follow overtook the one only version 0.8 accepted", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
---

> **Adónde vas:** Al terminar este capítulo podrás explicar, en palabras sencillas y a tu papá, por qué el dólar estadounidense ha perdido la mayor parte de su poder adquisitivo desde 1971, y por qué eso no es un accidente. Todavía no te habrás topado con Bitcoin. Solo verás la forma del problema que intenta resolver.

<figure>
  <video
    src="/videos/purchasing-power.mp4"
    poster="/videos/posters/purchasing-power.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Gráfica de líneas animada: lo que compra un dólar, medido en dólares de 1970, cae década tras década de $1 en 1970 a unos $0.12 en 2026, mientras unas monedas verdes de un dólar se van desvaneciendo conforme se erosiona el poder adquisitivo."
  ></video>
  <figcaption>Medio siglo de inflación, década por década. En 2026 un dólar compraba más o menos lo que compraban 12 centavos en 1970.</figcaption>
</figure>

## 1. La sensación de que algo anda mal

Ganas más dinero que antes. Tu alquiler es más alto. El súper te sale más caro. La cifra de tu sueldo subió; el número de bolsas del súper que te alcanza para llevar a casa, no.

La mayoría de la gente lo siente. A la mayoría también le dicen, de distintas maneras educadas, que se lo está imaginando. *La inflación es normal. La economía está fuerte. Mete tu dinero en la bolsa y ya.*

La verdad es esta: no te lo estás imaginando. El dólar que llevas en el bolsillo vale, por diseño, un poco menos que el año pasado, y mucho menos que cuando tus abuelos tenían tu edad. No es una falla. Así se construyó el sistema.

Este capítulo recorre cómo llegó a construirse así, quién se beneficia y por qué importa.

## 2. Para qué sirve el dinero en realidad

Quítale las marcas y los símbolos de las monedas, y el dinero tiene tres trabajos:

- **Medio de intercambio**: puedes cambiarlo por cosas. Mejor que andar cargando gallinas.
- **Reserva de valor**: puedes guardarlo hoy y gastarlo después sin perder poder adquisitivo.
- **Unidad de cuenta**: puedes usarlo para medir y comparar precios.

El dólar es excelente en el primer trabajo. Es aceptable en el tercero (los precios en dólares confunden cuando se comparan entre décadas, pero sirven). Es pésimo en el segundo en cualquier horizonte de tiempo que importe.

Esa falla en el segundo trabajo es todo el tema de este capítulo.

## 3. Una breve historia del dinero

Esta es la versión que puedes contar en una cena.

1. **La gente hacía trueque.** Funcionaba mal. Tenías que encontrar a alguien que tuviera lo que querías *y* que quisiera lo que tenías. Los economistas lo llaman la "coincidencia de necesidades". La mayoría de la gente lo llama una molestia.

2. **Dinero mercancía.** Las comunidades se pusieron de acuerdo en cosas escasas y duraderas: sal, conchas, ganado, cuentas de collar, cobre, plata, oro. El oro ganó la mayoría de las rondas porque es portátil, divisible, duradero, verificable y escaso. Se ganó el puesto.

3. **Monedas.** Los gobiernos acuñaban el metal en pesos estándar para que no tuvieras que pesarlo cada vez. También descubrieron que podían poner un poco menos de plata o de oro en cada moneda y quedarse con la diferencia. A esto se le llama *degradación de la moneda*, y Roma ya se lo hacía a su denario de plata en el año 87 a. C.

4. **Papel moneda con respaldo.** Los orfebres, y después los bancos, emitían billetes de papel que prometían "canjeable por X gramos de oro en el momento en que lo pidas". El papel pesa menos que el metal, así que fue una mejora. Mientras el emisor de verdad tuviera el oro, funcionaba.

5. **Papel moneda con respaldo parcial.** Los bancos se dieron cuenta de que no todo el mundo canjea al mismo tiempo. Podían emitir más billetes que el oro que tenían, mientras nadie sacara las cuentas.

6. **El patrón oro clásico (aproximadamente de 1870 a 1914).** La mayoría de las grandes economías fijaron sus monedas a pesos específicos de oro. El comercio internacional se liquidaba en oro. La inflación fue casi cero durante décadas.

7. **Bretton Woods (1944).** Después de que dos guerras mundiales destrozaran el viejo sistema, el mundo se reconstruyó alrededor de un dólar estadounidense fijado al oro a $35 la onza, con todas las demás monedas fijadas al dólar. Al principio, Estados Unidos tenía cerca de tres cuartas partes del oro oficial del mundo, y los demás gobiernos tenían dólares que podían canjear por él.

8. **15 de agosto de 1971.** Nixon salió en televisión y cerró la última vía para convertir dólares en oro, una vía que para entonces solo podían usar los gobiernos extranjeros y los bancos centrales. Se suponía que la suspensión sería temporal. Esa vía nunca se reabrió. Desde entonces vivimos en el mundo monetario posterior a 1971.

Esa es la historia. La siguiente sección es sobre qué cambió en 1971 y por qué importa.

## 4. El shock de Nixon

A finales de los años sesenta, Estados Unidos había gastado muchísimo (Vietnam, la Gran Sociedad, la carrera espacial) y había impreso dólares para pagarlo. Los gobiernos extranjeros que tenían esos dólares canjeaban cada vez más de ellos por el oro que la paridad prometía. Para 1966, Francia ya tenía como política convertir en oro todos sus dólares nuevos, al menos $34 millones al mes. A principios de agosto de 1971 compró otros $191 millones en oro estadounidense.

No había suficiente oro para cumplir las promesas.

El [15 de agosto de 1971](/es/glosario/que-paso-en-1971), Nixon anunció una suspensión "temporal" de la conversión de dólares a oro. Les dijo a los estadounidenses:

> "...if you are among the overwhelming majority of Americans who buy American-made products in America, your dollar will be worth just as much tomorrow as it is today."
>
> *(Es decir: "...si usted está entre la inmensa mayoría de los estadounidenses que compran en Estados Unidos productos hechos en Estados Unidos, su dólar valdrá mañana exactamente lo mismo que hoy".)*

Según el índice de precios al consumidor (IPC) de Estados Unidos, en 2025 un dólar compraba más o menos lo que compraban **13 centavos** en 1971. Puedes comprobarlo por tu cuenta en la [calculadora de inflación del BLS](https://www.bls.gov/data/inflation_calculator.htm), la Oficina de Estadísticas Laborales de Estados Unidos. El 87% del poder adquisitivo del dólar se borró en cincuenta y cuatro años.

Agosto de 1971 fue el momento en que el dólar dejó de estar atado a algo escaso. A partir de entonces, la oferta monetaria podía expandirse cada vez que fuera políticamente conveniente, y resulta que casi siempre lo es.

## 5. El efecto Cantillon (sin jerga)

Aquí va una pregunta que la mayoría de los cursos introductorios de economía evita:

**Cuando entra dinero nuevo en una economía, ¿quién lo recibe primero?**

No a todos, ni al mismo tiempo, ni por igual. El dinero nuevo fluye por canales específicos (el gasto público, los préstamos bancarios, los mercados financieros), y quienes están más cerca de esos canales lo reciben antes de que los precios tengan tiempo de ajustarse.

Para cuando el dinero nuevo llega a tu sueldo, los precios ya subieron para reflejar la mayor oferta monetaria. No tienes más riqueza. Solo tienes más dólares que compran lo mismo, o menos.

A esto se le llama el **efecto Cantillon**, por Richard Cantillon, un banquero del siglo XVIII que lo describió en su ensayo de 1755 sobre el comercio. No es una teoría de la conspiración. Es una consecuencia estructural de cómo funciona en realidad la expansión monetaria.

Quién se beneficia, en orden aproximado de cercanía al dinero nuevo:

1. **El gobierno**, que lo gasta primero
2. **Los operadores primarios y los grandes bancos**, que lo prestan después
3. **Las empresas** que piden prestado a tasas bajas y usan el efectivo para recomprar sus acciones y empujar al alza los precios de los activos
4. **Los dueños de activos** (bienes raíces, acciones, oro), cuyo patrimonio sube conforme el dinero los persigue
5. **Los trabajadores**, al final, a través de los sueldos, pero con retraso

Si tienes activos, la expansión monetaria te resulta más o menos neutral, o incluso te beneficia. Si vives de quincena en quincena y ahorras en efectivo, la expansión monetaria es un impuesto continuo y silencioso.

## 6. Las matemáticas del efecto compuesto

"Dos por ciento de inflación" suena inofensivo. Acumulado año tras año, no lo es.

| Inflación anual | 10 años | 20 años | 40 años |
|---|---|---|---|
| 2% | -18% | -33% | -55% |
| 3% | -26% | -45% | -69% |
| 5% | -39% | -62% | -86% |
| 7% | -49% | -74% | -93% |

El IPC oficial de Estados Unidos promedió alrededor de 4% al año de 1971 a 2025. Eso es toda una vida laboral de erosión.

<figure>
  <img src="/diagrams/dollar-purchasing-power.svg" alt="Lo que compra un dólar, de 1970 a 2026: una gráfica de líneas en la que el poder adquisitivo de un dólar cae hasta unos 12 centavos a lo largo de más de medio siglo de inflación compuesta, con un IPC anual de alrededor de 4 por ciento." />
  <figcaption>Contado de 1970 a 2026, un dólar conservó unos 12 centavos de su poder adquisitivo de 1970. La sección 4, en cambio, cuenta de 1971 a 2025, lo que da unos 13 centavos.</figcaption>
</figure>

Y el IPC tiene sus críticos. Dicen que los cambios en la forma de medirlo desde los años ochenta mantienen baja la cifra que sale en los titulares. La Oficina de Estadísticas Laborales (BLS), que lo publica, dice que el efecto es menor de lo que ellos afirman. Según sus números, un cambio de 1999 que toma en cuenta que los compradores se pasan a productos más baratos le quita menos de 0.3 puntos porcentuales a la tasa de inflación anual. Un cambio de 1983 en la forma de contar los costos de vivienda de los propietarios hizo que la parte de vivienda del índice subiera más rápido cuando recién entró en vigor.

El IPC también es solo un promedio, y el promedio esconde las cuentas grandes. De 1997 a 2025, los precios al consumidor en general más o menos se duplicaron, mientras que los precios de los servicios hospitalarios subieron a unas 4.3 veces su nivel de 1997, y las matrículas y cuotas universitarias a unas 3.2 veces el suyo.

## 7. Quién paga y quién se beneficia

Aquí es donde queda clara la política del asunto.

**Quién paga el impuesto de la inflación:**

- Quienes ahorran en efectivo
- Quienes viven de ingresos fijos
- Quienes viven de un sueldo (porque los sueldos van detrás de los precios)
- Los jóvenes (que tienen que comprar activos a precios inflados)
- Los pobres (en 2025 solo el 31 por ciento de las familias de la mitad con menos ingresos tenía alguna acción, directamente o a través de un fondo o una cuenta de retiro)

**Quién se beneficia de la inflación:**

- Los deudores que pagan préstamos por una cantidad fija de dólares (sobre todo los gobiernos, que son los mayores deudores de la historia)
- Los dueños de activos: acciones, bienes raíces, oro, empresas
- Quienes reciben el dinero nuevo primero (ver la sección 5)
- Cualquiera cuyos ingresos suban y bajen con los precios de los activos

El consejo de siempre (*invierte tus ahorros y ya*) solo funciona si tienes ahorros que invertir, el conocimiento para invertirlos y el estómago para aguantar las caídas. En 2025, el 44 por ciento de las familias estadounidenses no tenía ni una acción, ni siquiera a través de una cuenta de retiro.

La inflación, en la práctica, es una transferencia de riqueza de quienes tienen dólares a quienes tienen activos. La ha aplicado casi todo gobierno de la historia moderna, y no hay un renglón para ella en tu declaración de impuestos.

## 8. El impuesto silencioso

La inflación no se vota.

Cuando suben los impuestos, hay un debate. Hay un proyecto de ley. Alguien tiene que defenderlo. Cuando se expande la oferta monetaria, hay un comunicado de prensa de la Reserva Federal, y la mayoría de la gente no lo lee.

La transferencia ocurre en silencio, sin pausa, año tras año. En 2025 un dólar compraba más o menos lo que compraban 80 centavos en 2020: una pérdida de alrededor del 20% de su poder adquisitivo en cinco años.

Si un político propusiera un impuesto del 20% a las cuentas de ahorro, habría disturbios. La misma reducción del 20% en poder adquisitivo, cuando llega por la vía de la expansión monetaria, se describe como "normal" y como "parte del costo de hacer negocios".

Esto no es una conspiración. Así funciona el sistema. Quienes lo diseñaron, en su mayoría, tenían buenas intenciones. Las consecuencias son las que son.

## 9. La pregunta sin responder

Así que esta es la pregunta que este capítulo plantea pero no responde:

**¿Cómo sería el dinero si nadie pudiera expandir su oferta?**

Imagina un dinero que fuera:

- **Portátil**: fácil de mover a través de las fronteras, al instante
- **Divisible**: en partes tan pequeñas como haga falta para cualquier compra
- **Duradero**: no se pudre, no se oxida, no depende de un banco
- **Verificable**: imposible de falsificar
- **Escaso**: y no solo "escaso porque así lo acordamos", sino *escaso porque las matemáticas lo dicen*
- **Soberano**: fuera del control de cualquier gobierno o empresa

Ese dinero haría los tres trabajos (medio de intercambio, reserva de valor, unidad de cuenta), y haría el segundo *tan bien como lo hacía el oro antes de 1971*, sin ninguna de las desventajas del oro.

Tendría que ser algo de un tipo nuevo. Tendría que usar criptografía para que la escasez fuera demostrable. Tendría que usar una red en lugar de una bóveda. Tendría que ser un protocolo, no un producto.

Ese dinero existe. Lleva funcionando desde enero de 2009. Dos veces, en 2010 y en 2013, un error de software obligó a la red a descartar un tramo de su registro de transacciones, y las dos veces volvió a un único registro acordado en menos de un día; cada episodio tiene su tema a fondo, [el de 2010 (en inglés)](/rabbit-hole/inflation-bug-postmortem) y [el de 2013](/es/a-fondo/bifurcacion-de-2013). El siguiente capítulo trata de qué es en realidad.

> **Consejo pro:** Si solo te quedas con una cosa de este capítulo, que sea esta: la inflación es una *política*, no una fuerza de la naturaleza. Una vez que lo ves, ya no puedes dejar de verlo. Todo lo que hace Bitcoin responde a un sistema que se construyó, con intención o por descuido, para ir perdiendo valor con el tiempo.
