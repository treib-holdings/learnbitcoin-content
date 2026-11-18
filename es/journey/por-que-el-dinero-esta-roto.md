---
title: "Por qué se creó"
slug: por-que-el-dinero-esta-roto
translationOf: why-money-is-broken
sourceHash: "a60e9a3bf39c"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
draft: false
status: live
published: "2026-10-14"
updated: "2026-11-18"
reviewedAt: "2026-11-16"
order: 2
goDeeper: ["supply", "halvings"]
estimatedMinutes: 5
tagline: "Qué le pasa a un dólar con el tiempo, quién decide, y la regla distinta que sigue Bitcoin."
prerequisites: ["what-bitcoin-actually-is"]
relatedTerms: ["halving-halvening", "satoshi-nakamoto", "genesis-block"]
sources:
  - { label: "US Bureau of Labor Statistics - Consumer Price Index for All Urban Consumers, all items: 40.5 on average in 1971, 337.511 in October 2026, so what cost $100 in 1971 costs about $833; up about 2.7% a year since January 2012", url: "https://data.bls.gov/timeseries/CUUR0000SA0?from_year=1971&to_year=2026&annualAveragesRequested=true" }
  - { label: "US Bureau of Labor Statistics - CPI Inflation Calculator", url: "https://www.bls.gov/data/inflation_calculator.htm" }
  - { label: "Federal Reserve - statement of January 25, 2012: inflation of 2 percent a year, measured by the price index for personal consumption, is the rate most consistent with its mandate", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20120125c.htm" }
  - { label: "Federal Reserve - Why does the Federal Reserve aim for 2 percent inflation over time? (answer last updated January 26, 2015, as archived July 1, 2019): a lower rate would raise the chance of falling into deflation", url: "https://web.archive.org/web/20190701071438/http://www.federalreserve.gov/faqs/economy_14400.htm" }
  - { label: "Federal Reserve - Monetary policy: what are its goals, how does it work? (room to cut interest rates when the economy weakens)", url: "https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm" }
  - { label: "Federal Reserve History - The Great Inflation, 1965 to 1982 (Michael Bryan, 2013): its origins were Federal Reserve policies that let the supply of money grow too fast", url: "https://www.federalreservehistory.org/essays/great-inflation" }
  - { label: "Bank of England - Money creation in the modern economy (March 2014): banks create money when they make loans, and a central bank can add to it by buying assets", url: "https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" }
  - { label: "FRED - M2 money stock (M2SL): $7.51 trillion in January 2008, $23.41 trillion in September 2026, about three times as much", url: "https://fred.stlouisfed.org/series/M2SL" }
  - { label: "FRED - Federal Reserve total assets (WALCL): $0.92 trillion at the start of 2008, $6.76 trillion in late 2026", url: "https://fred.stlouisfed.org/series/WALCL" }
  - { label: "Federal Reserve History - Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls (August 15, 1971)", url: "https://www.federalreservehistory.org/essays/gold-convertibility-ends" }
  - { label: "Federal Reserve History - The Smithsonian Agreement: by the 1960s the dollars held abroad had passed the US gold stock", url: "https://www.federalreservehistory.org/essays/smithsonian-agreement" }
  - { label: "Federal Reserve History - Federal Reserve Reform Act of 1977: the law tells the Fed to promote maximum employment, stable prices and moderate long-term interest rates", url: "https://www.federalreservehistory.org/essays/fed-reform-act-of-1977" }
  - { label: "Michael Bordo - Gold Standard, Concise Encyclopedia of Economics: inflation averaged 0.1% a year from 1880 to 1914", url: "https://www.econlib.org/library/Enc/GoldStandard.html" }
  - { label: "Federal Reserve History - Banking Panics of the Gilded Age, 1863 to 1913 (Gary Richardson and Tim Sablik, 2015): eight panics, three of them nationwide", url: "https://www.federalreservehistory.org/essays/banking-panics-of-the-gilded-age" }
  - { label: "mempool.space API - block 0, stamped January 3, 2009", url: "https://mempool.space/api/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f" }
  - { label: "Bitcoin Core, chainparams.cpp, line 71 - the text written into block 0: that day's headline from The Times about a second bailout for banks", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/kernel/chainparams.cpp#L71" }
  - { label: "Satoshi Nakamoto - Bitcoin open source implementation of P2P currency, P2P Foundation forum (February 11, 2009)", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/" }
  - { label: "Satoshi Nakamoto - P2P Foundation forum (February 18, 2009): nobody acts as a central bank to adjust the supply, so the supply is set in advance and the value moves instead", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/3/" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1 released (January 8, 2009): 21,000,000 coins in total, the new amount cut in half every 4 years", url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html" }
  - { label: "Bitcoin Core, validation.cpp - a block that pays its maker more than the fees plus the scheduled amount is rejected", url: "https://github.com/bitcoin/bitcoin/blob/4bacf21a13c2ed25ef9362ca38f26bf0a67d22c9/src/validation.cpp#L2608-L2611" }
  - { label: "Board of Governors of the Federal Reserve System - Economic Well-Being of U.S. Households in 2025 (May 2026), table 33: 9% of adults held cryptocurrency as an investment, 2% used it to buy something or make a payment", url: "https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-banking.htm" }
  - { label: "Coin Metrics - BTC daily reference price since 2010: falls of more than half from a record high in 2011, twice between 2013 and 2015, in 2017 to 2018, twice between 2021 and 2022, and from October 2025 to June 2026; a buyer on December 16, 2017 was down 15% five years later", url: "https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=PriceUSD&frequency=1d&start_time=2010-07-18&page_size=10000" }
  - { label: "US Census Bureau - historical income tables, Table H-5: median household income in 2025 dollars, $59,970 in 1971 and $87,460 in 2025", url: "https://www2.census.gov/programs-surveys/cps/tables/time-series/historical-income-households/h05.xlsx" }
  - { label: "FRED - 3-month Treasury bill rate (TB3MS): a dollar kept in Treasury bills since 1971 grew at least 28% more than prices rose, before tax; it fell behind prices in the 1970s, and since 2009 it has lost about 19% against prices; the smallest bill cost $10,000 from 1970", url: "https://fred.stlouisfed.org/series/TB3MS" }
---

> **Adónde vas:** Al terminar sabrás qué problema se quiso resolver con Bitcoin y qué cuesta su respuesta. También habrás comprobado un número que corresponde a los años de tu propia vida.

**Primero, adivina.** Piensa en el año en que naciste. ¿Cuánto haría falta hoy para comprar lo que entonces se compraba con 100 dólares? Recuerda tu número. Al final de la página te toca comprobarlo.

## ¿Qué le pasa a un dólar con el tiempo?

Que compra menos. Lo que costaba $100 en 1971 hoy cuesta más de $800. (¿Por qué 1971? Ese año vuelve a aparecer más abajo.)

Esto se llama **inflación**: los precios suben, año tras año, y por eso cada dólar compra un poco menos. En la mayoría de los años es tan lenta que no se nota. Fue rápida en los años setenta, y otra vez de 2021 a 2023.

<figure>
  <img src="/diagrams/journey-dollar-since-1971-es.svg" alt="Gráfica de líneas titulada 'Lo que compra un dólar, de 1971 a 2026'. La línea empieza en $1.00 en 1971, cae rápido hasta cerca de la mitad en 1980, luego sigue bajando más despacio y termina en $0.12 en 2026. Debajo de la gráfica, una línea de texto dice: 'Cada dólar compra un poco menos.'" width="800" height="420" />
  <figcaption>Lo que costaba $100 en 1971 hoy cuesta más de $800, así que un dólar compra ahora lo que entonces compraban unos 12 centavos. La parte empinada son los años setenta.</figcaption>
</figure>

## ¿Eso es a propósito?

En parte. Desde 2012 la Reserva Federal (la Fed), el banco central de Estados Unidos, tiene como meta que los precios suban cerca de un 2 por ciento al año. Han subido un poco más rápido. Incluso al 2 por ciento, un dólar pierde cada diez años cerca de una quinta parte de lo que compra.

La Fed ha dado sus razones. Con una meta más baja, dice, es más probable que la economía entre en una caída de precios, que la Fed asocia con economías muy débiles. Una inflación un poco por encima de cero también le deja margen para bajar las tasas de interés cuando la economía anda mal.

Los años en que la inflación fue rápida no fueron a propósito. Un ensayo del sitio de historia de la propia Fed les echa la culpa de los años setenta a las políticas de la Fed. Durante la mayor parte de los cuarenta años siguientes, la inflación se mantuvo baja.

## ¿Quién decide cuánto dinero hay?

Lo deciden personas. La Fed maneja lo fácil que es pedir prestado. Los bancos crean dinero nuevo cuando prestan: un préstamo aparece como dinero nuevo en la cuenta de quien lo pidió. Y desde 2008 la propia Fed ha creado billones de dólares, para comprar bonos.

El total se llama **oferta monetaria**. En el caso del dólar, se ha triplicado desde 2008. Los precios no se triplicaron con ella. Subieron un poco más de un 50 por ciento.

Hasta 1971 se suponía que había un límite externo. Otros países podían entregarle dólares a Estados Unidos y recibir oro a cambio, a un precio fijo. En los años sesenta eso ya estaba fallando: había más dólares en el extranjero que oro para cubrirlos. En agosto de 1971 el presidente Nixon le puso fin.

Desde entonces el límite ha sido el criterio de las personas a cargo, bajo una ley que les dice que mantengan estables los precios. El criterio tiene algo a su favor: se puede agregar dinero durante un pánico, como se hizo en 2008 y en 2020. El oro no evitó los pánicos. Antes de 1914 los precios se mantuvieron estables, pero cada pocos años llegaba un pánico bancario.

## ¿Qué quería, en cambio, quien creó Bitcoin?

El primer objetivo ya lo conoces: pagos sin un banco de por medio. El segundo era un dinero con una oferta que no dependiera del criterio de nadie.

Bitcoin empezó en enero de 2009, en medio de una crisis bancaria. Su primer bloque lleva escrito un titular de periódico de ese día, sobre un segundo rescate a los bancos. Un mes después, quien lo creó, Satoshi Nakamoto, escribió que el dinero normal necesita un banco central y que "hay que confiar en que no degrade la moneda". Degradar una moneda es hacer que cada unidad valga menos al crear más unidades.

Por eso la oferta de Bitcoin sigue una regla fijada al principio. Habrá como máximo 21 millones de monedas. Ese límite se llama **el tope**, y nunca se ha subido.

Con cada bloque salen monedas nuevas. Más o menos cada cuatro años, el número de monedas nuevas por bloque se recorta a la mitad. Cada recorte se llama **halving**. Cualquiera puede leer el calendario, y las computadoras que llevan el registro lo hacen cumplir.

La esperanza detrás de la regla es simple. Si más gente quiere una cosa y nadie puede hacer más, cada parte de ella compra más. Esa es la apuesta, y nadie puede prometer que saldrá bien.

## ¿Qué cuesta esa regla?

A lo que renuncia es a un precio estable. Nadie puede crear más bitcoin cuando de pronto la gente lo quiere, ni menos cuando no lo quiere. Así que cada vez que la gente lo quiere más o lo quiere menos, se nota en el precio. Lo que más dicen sus dueños es que lo tienen como inversión, así que el precio también se mueve con sus esperanzas y sus miedos.

El precio ha caído más de la mitad al menos siete veces. El poder adquisitivo del dólar nunca ha caído tan rápido. Ha habido periodos de cinco años en los que un comprador terminó con menos de lo que tenía al principio.

Así que los dos diseños renuncian a cosas opuestas. El dólar renuncia al valor a largo plazo para mantenerse estable de un mes a otro. Bitcoin renuncia a la estabilidad para mantener fija su oferta.

Todavía no se sabe si una oferta fija conserva su valor a lo largo de décadas. Bitcoin tiene menos de veinte años de precios en los que basarse, no cien.

## Hazlo

Para este paso no hace falta billetera. Te lleva un par de minutos.

- [ ] Abre la [calculadora de inflación](https://www.bls.gov/data/inflation_calculator.htm) de la Oficina de Estadísticas Laborales de Estados Unidos, en bls.gov. La página está en inglés. Te pide un monto y dos fechas, y nada más.
- [ ] Escribe 100 en el recuadro, sin el signo de dólar. En el primer par de listas, elige el año en que naciste. Deja la segunda fecha como está, y toca Calculate (calcular).
- [ ] Lee el monto que aparece. Eso es lo que hace falta hoy para comprar lo que entonces se compraba con $100. Compáralo con lo que adivinaste.

La diferencia entre los dos números es la inflación a lo largo de tu vida. ¿No estás en Estados Unidos? En muchos países, el banco central o la oficina de estadísticas tiene la misma herramienta para su propio dinero, y en algunos países la diferencia es mucho mayor que la del dólar.

## Una objeción razonable

"Los sueldos también suben, y los ahorros ganan intereses. Entonces, ¿dónde está el daño?".

Es verdad, hasta cierto punto. Los ingresos del hogar estadounidense típico han crecido más rápido que los precios desde 1971. Quien tenía lo suficiente para comprar letras del Tesoro, que son préstamos a corto plazo al gobierno, se mantuvo por delante de los precios si se mira todo ese tiempo en conjunto, antes de impuestos. No fue así en los años setenta, y después de impuestos queda más o menos a la par, en el mejor de los casos.

El daño cae sobre el dinero que gana poco o nada: el efectivo, y los ahorros normales en los años en que el interés es más bajo que la inflación. Eso ha sido lo habitual desde 2009. Y el sistema no funciona mejor que las personas que están a cargo. En los años setenta no funcionó bien.

La respuesta de Bitcoin es una regla en lugar del criterio de las personas. Su costo es el que viste más arriba. Bitcoin tampoco paga intereses, y su precio sube y baja mucho más que el de un dólar.

## Ponte a prueba

<details>
<summary>¿Qué es la inflación?</summary>

La subida de los precios con el tiempo, que hace que cada dólar compre menos. Vuelve a leer "¿Qué le pasa a un dólar con el tiempo?".

</details>

<details>
<summary>¿Qué limita cuántos dólares hay? ¿Y cuántos bitcoins?</summary>

En el caso de los dólares, el criterio del banco central, y cuánto prestan los bancos. En el caso de bitcoin, una regla fijada al principio: el tope de 21 millones. Vuelve a leer "¿Quién decide cuánto dinero hay?" y la sección que le sigue.

</details>

<details>
<summary>¿A qué renuncia Bitcoin por tener una oferta fija?</summary>

A un precio estable. Nadie puede agregar ni quitar monedas para calmar las cosas, así que el precio sube y baja. Vuelve a leer "¿Qué cuesta esa regla?".

</details>

## Palabras que ya conoces

- **Inflación.** La subida de los precios con el tiempo, que hace que cada dólar compre menos.
- **Oferta monetaria.** Todo el dinero que hay de un mismo tipo.
- **El tope.** El límite de 21 millones de monedas que tiene Bitcoin.
- **Halving.** El recorte, más o menos cada cuatro años, en la cantidad de monedas nuevas que salen con cada bloque.

Si a estas alturas tienes dudas, es que estás leyendo con atención.
