---
title: "Whirlpool / Samourai Wallet"
slug: whirlpool-samourai
aliases:
  - "Samourai Wallet"
  - "Samourai"
  - "Whirlpool"
  - "Ricochet"
draft: false
published: "2026-10-15"
shortDefinition: "La billetera móvil de privacidad y su servicio de CoinJoin cuyos fundadores fueron arrestados en abril de 2024 y condenados a prisión en 2025. El caso que redibujó el mapa legal de la mezcla con coordinador."
keyTakeaways:
  - "Los fiscales de Estados Unidos arrestaron a los fundadores Keonne Rodriguez y William Hill el 24 de abril de 2024, alegando más de 2,000 millones de dólares en transacciones ilícitas a través de Whirlpool y Ricochet"
  - "Ambos se declararon culpables en 2025 de conspiración para operar un negocio de transmisión de dinero sin licencia, no del cargo de lavado de dinero, y fueron condenados a 5 y 4 años"
  - "El servicio nunca tuvo en su poder fondos de los clientes; los fiscales trataron de todos modos a un coordinador no custodial como transmisión de dinero, y a eso se le suele atribuir que el coordinador de Wasabi anunciara su propio cierre días después"
sources:
  - { label: "US DOJ SDNY - founders of cryptocurrency mixing service arrested and charged (2024)", url: "https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering" }
  - { label: "US DOJ SDNY - Samourai Wallet founders sentenced (2025)", url: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years" }
relatedTerms:
  - coinjoin
  - wasabi-wallet
  - joinmarket
  - joinstr
  - mixing-service
  - kyc-know-your-customer
sameAs:
  - "https://en.wikipedia.org/wiki/Samourai_Wallet"
liveWidget: ~
translationOf: whirlpool-samourai
sourceHash: "0cf44d316f6c"
sourceCommit: "0ea202c"
sourceUpdated: "2026-07-13"
translation:
  method: "llm-draft"
---

Samourai Wallet era una billetera móvil de Bitcoin construida alrededor de la privacidad. Su función estrella era Whirlpool, una implementación de [CoinJoin](/es/glosario/coinjoin) en la que un coordinador operado por el equipo de Samourai organizaba rondas de mezcla de denominación fija, más Ricochet, que añadía saltos de transacción adicionales para frustrar el [análisis de cadena](/es/glosario/analisis-de-cadena). El software era no custodial: los usuarios tenían sus propias claves, y el coordinador nunca tomó posesión de las monedas de nadie.

Ese último dato es la razón por la que el caso importa. El 24 de abril de 2024, el Departamento de Justicia de Estados Unidos arrestó a los fundadores Keonne Rodriguez y William Lonergan Hill, acusándolos de conspiración para lavar dinero y de conspiración para operar un negocio de transmisión de dinero sin licencia. La acusación formal alegaba que los servicios habían ejecutado más de 2,000 millones de dólares en transacciones ilícitas y facilitado más de $100 millones en lavado de dinero procedente de mercados ilícitos. Los servidores y el dominio de la billetera fueron incautados el mismo día, el coordinador de Whirlpool se apagó para siempre, y una orden de incautación retiró la app de Android de Google Play para los usuarios de Estados Unidos.

En julio de 2025 ambos fundadores se declararon culpables del cargo de transmisión de dinero sin licencia, no del de lavado, que se retiró como parte del acuerdo. Rodriguez fue condenado a cinco años en noviembre de 2025, y Hill a cuatro, y los acuerdos incluyeron un decomiso pactado de unos $238 millones. La precisión importa cuando se discute este caso. Se les acusó de dos cosas y se les condenó por una. El marketing tampoco ayudó: los fundadores habían dado la bienvenida públicamente a fondos criminales en formas que pesaron mucho en el caso. Y como el caso terminó en un acuerdo de culpabilidad, ningún tribunal llegó a decidir si operar un coordinador no custodial es de verdad transmisión de dinero. La pregunta legal que le importaba a toda la industria sigue abierta.

Las consecuencias reconfiguraron las herramientas de privacidad de Bitcoin durante el resto de 2024. Los fiscales habían tratado a un coordinador no custodial, un software que nunca tuvo en su poder una sola moneda de un cliente, como un negocio de transmisión de dinero. Días después, el operador del coordinador de [Wasabi](/es/glosario/wasabi-wallet) anunció su propia salida, un movimiento que todo el mundo leyó como respuesta a exactamente esa teoría legal, y la mezcla con coordinador en Estados Unidos se acabó en la práctica. Lo que sobrevivió fueron los diseños sin un coordinador al que arrestar: [JoinMarket](/es/glosario/joinmarket) y, más tarde, [Joinstr](/es/glosario/joinstr).

Lee [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver la historia completa de 2024 y en qué punto está CoinJoin hoy.
