---
title: "Billetera custodial"
slug: billetera-custodial
aliases:
  - "billeteras custodiales"
  - "custodial wallet"
  - "wallet custodial"
draft: false
published: "2026-10-14"
shortDefinition: "Una billetera en la que un tercero guarda las claves privadas en nombre del usuario, parecido a un banco que guarda los fondos de sus clientes."
keyTakeaways:
  - "Los fondos los controla una entidad externa"
  - "Es cómoda, pero introduce un riesgo de contraparte considerable"
  - "Contrasta con los principios de autocustodia de Bitcoin"
sources:
  - { label: "Coinbase Global - 2025 annual report on Form 10-K (filed February 12, 2026): customer crypto held in omnibus wallets and recorded on its ledger; if technical issues can't be resolved, customer assets may be frozen or lost; theft or loss of private keys may be irreversible; in a bankruptcy, custodied crypto could be treated as estate property and customers as general unsecured creditors", url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000015/coin-20251231.htm" }
  - { label: "Block, Inc. - 2025 annual report on Form 10-K (filed February 26, 2026): Cash App customers can store bitcoin in Block's wallets; Block holds the keys and keeps the records, and its contracts say customers keep legal ownership", url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm" }
  - { label: "Robinhood Markets - 2025 annual report on Form 10-K (filed February 18, 2026): Robinhood holds customers' settled crypto in custody in omnibus hot and cold wallets", url: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm" }
  - { label: "NPR - Mt. Gox files for bankruptcy, nearly $500M of bitcoins lost (February 28, 2014): 850,000 bitcoins missing", url: "https://www.npr.org/sections/thetwo-way/2014/02/28/283863219/mtgox-files-for-bankruptcy-nearly-500m-of-bitcoins-lost" }
  - { label: "NPR - QuadrigaCX says it can't access funds after its CEO died (February 4, 2019): the widow's court affidavit says only Gerald Cotten moved coins out of cold storage, which should hold more than CAD 180 million; he died December 9, 2018", url: "https://www.npr.org/2019/02/04/691296170/cryptocurrency-exchange-says-it-cant-access-millions-after-founder-s-unexpected" }
  - { label: "CBC - Quadriga's cold wallets come up empty (March 1, 2019): the court-appointed monitor, Ernst & Young, found they had been empty since April 2018", url: "https://www.cbc.ca/news/canada/nova-scotia/cryptocurrency-still-missing-quadriga-s-cold-wallets-1.5040099" }
  - { label: "Ontario Securities Commission - QuadrigaCX investigation report (2020): Quadriga operated like a Ponzi scheme; clients were owed CAD 215 million and the trustee recovered or identified CAD 46 million", url: "https://www.osc.ca/quadrigacxreport/" }
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius halted withdrawals on June 12, 2022 and filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "CNBC - Voyager Digital files for Chapter 11 bankruptcy (July 6, 2022): Voyager had paused all withdrawals the week before", url: "https://www.cnbc.com/2022/07/06/crypto-firm-voyager-digital-files-for-chapter-11-bankruptcy-protection.html" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022): BlockFi had already halted withdrawals", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): lending and borrowing paused November 16, 2022", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): FTX paused all customer withdrawals on November 8, 2022; a shortfall at FTX of approximately $8 billion; FTX and affiliates filed for Chapter 11 on November 11, 2022", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
  - { label: "Voyager plan administrator - eighth status report, In re Voyager Digital Holdings (Bankr. S.D.N.Y. 22-10943), Doc 1785 (September 25, 2024): creditors of Voyager Digital, LLC have received 70% of their allowed claims", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.312840/gov.uscourts.nysb.312840.1785.0.pdf" }
relatedTerms:
  - counterparty-risk
  - custodial-lightning-wallet
  - deterministic-wallet
  - escrow
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
liveWidget: ~
translationOf: custodial-wallet
sourceHash: "562b43056374"
sourceCommit: "659e6f9"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

Una billetera custodial es aquella en la que un tercero guarda las [claves privadas](/es/glosario/clave-privada) y tú tienes un saldo en una cuenta. Los bitcoins guardados en una cuenta de Coinbase, Cash App o Robinhood funcionan así: la empresa tiene las claves y tú ves un saldo.

Lo que esto significa en realidad: tú no tienes ningún bitcoin en tus manos. Lo tiene la empresa, por lo general mezclado con las monedas de otros clientes, y anota tu parte en sus propios libros. Sus condiciones pueden decir que las monedas son legalmente tuyas, pero sacarlas depende de la empresa. Si es solvente y coopera, funciona igual que poseer bitcoin. Si no lo es, puede que no. El propio informe anual de Coinbase advierte que, en una quiebra, las criptomonedas que custodia para sus clientes podrían tratarse como parte de la masa de la quiebra, y los clientes, como acreedores ordinarios sin garantía.

Los custodios fallan con más frecuencia de lo que los promotores de "cripto" reconocen. Mt. Gox reportó unos 850,000 BTC desaparecidos en 2014. QuadrigaCX le dijo a un tribunal a principios de 2019 que sus billeteras frías estaban fuera de alcance porque su CEO, que había muerto en diciembre de 2018, era el único que podía abrirlas. El supervisor designado por el tribunal descubrió después que esas billeteras llevaban vacías desde abril de 2018, y la Comisión de Valores de Ontario (Ontario Securities Commission) concluyó más tarde que Quadriga había operado como un esquema Ponzi. En el contagio de 2022, Celsius, Voyager, FTX, BlockFi y Genesis congelaron, todos ellos, los retiros de sus clientes entre junio y noviembre de 2022, con un faltante de 8,000 millones de dólares para los clientes solo en FTX. Las recuperaciones para los clientes tardan años y suelen ser parciales. Los acreedores de Voyager habían recibido el 70 por ciento de sus reclamaciones admitidas para septiembre de 2024, más de dos años después del congelamiento, y el síndico de Quadriga encontró apenas unos 46 millones de dólares canadienses para clientes a los que se les debían 215 millones.

Incluso un custodio que funciona bien tiene las claves, así que un problema técnico de su lado puede dejar tus monedas congeladas, y si le roban o pierde sus claves, la pérdida puede ser permanente. Coinbase enumera ambos riesgos en su propio informe anual.

"No son tus claves, no son tus monedas" (en inglés, "not your keys, not your coins") es la respuesta. No es un eslogan; es la realidad técnica. Bitcoin solo le entrega su propiedad central (dinero resistente a la censura, a la confiscación y a la degradación) a quien de verdad tiene las claves. Cualquier otra persona solo está usando un banco con mucha fricción.

Las billeteras custodiales tienen usos legítimos: como puerta de entrada desde el dinero fiat (fiduciario), porque por algún lado hay que empezar; como lugar para hacer trading activo; como vía de pago ocasional. Eso sí, no las confundas con poseer bitcoin. Pasa a la autocustodia (ver [Billetera](/es/glosario/billetera), [Billetera de hardware](/es/glosario/billetera-de-hardware)) para todo lo que de verdad quieras conservar.
