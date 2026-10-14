---
title: "KYC (conoce a tu cliente)"
slug: kyc
draft: false
published: "2026-10-13"
shortDefinition: "Regulaciones que obligan a las empresas a verificar la identidad de sus usuarios, con el fin de prevenir el lavado de dinero y los delitos financieros."
keyTakeaways:
  - "Exige verificar la identidad del usuario antes de prestarle servicios financieros"
  - "Busca combatir el delito, pero invade la privacidad personal"
  - "Impulsa la demanda de alternativas descentralizadas o sin KYC"
aliases:
  - "KYC"
  - "conoce a tu cliente"
  - "know your customer"
sources:
  - { label: "FinCEN - FIN-2013-G001, Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies (2013-03-18)", url: "https://www.fincen.gov/sites/default/files/shared/FIN-2013-G001.pdf" }
  - { label: "FinCEN - FIN-2019-G001, Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies (2019-05-09)", url: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" }
  - { label: "eCFR - 31 CFR 1022.210, Anti-money laundering programs for money services businesses (accessed 2026-10-13)", url: "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-B/section-1022.210" }
  - { label: "EUR-Lex - Directive (EU) 2018/843 (AMLD5), bringing virtual currency exchange and custodian wallet providers under EU anti-money laundering rules (2018-05-30)", url: "https://eur-lex.europa.eu/eli/dir/2018/843/oj" }
  - { label: "U.S. Department of the Treasury - Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash (2022-08-08)", url: "https://home.treasury.gov/news/press-releases/jy0916" }
  - { label: "CNBC - Coinbase says hackers bribed staff to steal customer data and are demanding $20 million ransom (2025-05-15)", url: "https://www.cnbc.com/2025/05/15/coinbase-says-hackers-bribed-staff-to-steal-customer-data-and-are-demanding-20-million-ransom.html" }
relatedTerms:
  - aml-anti-money-laundering
  - bitlicense
  - cbdc-central-bank-digital-currency
  - centralized-exchange-cex
  - chain-analysis
  - custodial-wallet
  - fiat
  - fincen
  - greenlist
  - security
liveWidget: ~
translationOf: kyc-know-your-customer
sourceHash: "c066af81b8d4"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

KYC, siglas de **K**now **Y**our **C**ustomer ("conoce a tu cliente"), es el régimen regulatorio que obliga a los proveedores de servicios financieros a verificar la identidad de sus usuarios. En Estados Unidos nace de la Ley de Secreto Bancario (Bank Secrecy Act): [FinCEN (en inglés)](/glossary/fincen) dijo en su guía de 2013 que cualquiera que cambie bitcoin por dólares como negocio es un negocio de servicios monetarios (money services business), lo que implica registrarse, operar un programa [contra el lavado de dinero (en inglés)](/glossary/aml-anti-money-laundering) que verifique la identidad de los clientes, conservar registros y presentar reportes. La Unión Europea llegó al mismo punto en 2018. Para Bitcoin, esto significa en la práctica que los [exchanges centralizados (en inglés)](/glossary/centralized-exchange-cex), las [billeteras custodiales](/es/glosario/billetera-custodial) y los servicios de entrada (on-ramp) te piden una identificación oficial, fotos, tu domicilio y muchas veces más datos antes de dejarte operar.

La justificación oficial: prevenir el lavado de dinero y el financiamiento del terrorismo. La realidad extraoficial tiene más matices.

Dos observaciones honestas sobre el KYC en la práctica:

- **Encarece el fraude ocasional.** Un estafador que tiene que mostrar un pasaporte para retirar su dinero tiene una cosa más que perder.
- **Es débil contra la delincuencia grave.** Los delincuentes sofisticados le dan la vuelta. Cuando el Tesoro de Estados Unidos sancionó al mezclador Tornado Cash en 2022, dijo que el servicio había lavado más de $7,000 millones (dólares estadounidenses) desde 2019, incluidos más de $455 millones robados por el Grupo Lazarus de Corea del Norte: dinero que nunca pasó por una cuenta verificada a nombre de los propios ladrones. Mientras tanto, las bases de datos de KYC se convierten en un blanco muy atractivo (un honeypot). En mayo de 2025 Coinbase reveló que unos criminales habían sobornado a agentes de soporte en el extranjero para extraer nombres, domicilios, números de teléfono, números parciales de Seguro Social, imágenes de identificaciones oficiales y saldos de cuenta de sus clientes, y luego usaron esos datos en ataques de ingeniería social que engañaron a los clientes para que enviaran fondos a los atacantes; la empresa calculó el costo de la limpieza en hasta $400 millones. Un nombre, un domicilio y un saldo son también la lista de compras para un robo en persona, el llamado ataque de la llave inglesa.

Para los usuarios comunes, el KYC genera varios costos reales:

- **Vigilancia.** Tu historial on-chain queda vinculado a tu identidad real en el momento en que retiras fondos de un servicio con KYC, y ese servicio está obligado a conservar los registros. Una vez vinculado, vinculado se queda.
- **Vector de censura.** Un exchange sujeto a KYC puede congelar tu cuenta, exigirte más verificación al retirar, negarse a liberar tus fondos o cerrarte la cuenta por cualquier motivo.
- **Riesgo de datos.** Las fotos de tu identificación quedan en servidores, y en las pantallas de contratistas de soporte, que sufren filtraciones.
- **Asimetría geográfica.** Las reglas de KYC cambian de un país a otro y con el tiempo. El régimen de Estados Unidos data de 2013, el de la Unión Europea de 2018, y los umbrales y el papeleo varían con ellos.

Existen formas de conseguir bitcoin sin KYC: minarlo, ganarlo como pago por tu trabajo o tus productos, y comprárselo directamente a otra persona. La propia guía de FinCEN deja los casos pequeños fuera de la zona regulada: una persona que obtiene bitcoin y lo gasta en bienes y servicios es un "user" (usuario), no un transmisor de dinero, y lo mismo vale para quien vende un poco de vez en cuando y sin fines de lucro. Los mercados entre pares (P2P) que ponen en contacto directo a compradores y vendedores son la versión organizada de esa última opción. Tienen más fricción que los gigantes, pero conservan las propiedades por las que la mayoría llegó a Bitcoin.

Un enfoque bitcoiner defendible: a veces el KYC es la única puerta de entrada disponible, y usarla a propósito está bien. Pero minimiza qué parte de tus bitcoins llega a tocarlo alguna vez, y evita que un servicio con KYC sea tu punto de custodia a largo plazo.

Lee [Privacidad en Bitcoin (en inglés)](/rabbit-hole/bitcoin-privacy) para ver cómo el registro del exchange se convierte en el ancla que le pone nombre a todo un grupo de direcciones (un clúster).
