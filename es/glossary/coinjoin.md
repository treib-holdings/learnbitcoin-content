---
title: "CoinJoin"
slug: coinjoin
draft: false
published: "2026-10-13"
shortDefinition: "Método de privacidad que combina las entradas de varios usuarios en una sola transacción, de modo que no se sepa qué salidas corresponden a qué entradas."
keyTakeaways:
  - "Mezcla varias entradas y salidas en una sola transacción"
  - "Debilita los vínculos deterministas entre direcciones"
  - "No es privacidad perfecta, pero sí una mejora notable frente a un envío normal"
sources:
  - { label: "Gregory Maxwell - CoinJoin: Bitcoin privacy for the real world (Bitcointalk, 2013)", url: "https://bitcointalk.org/index.php?topic=279249.0" }
  - { label: "US DOJ SDNY - Samourai Wallet founders sentenced (2025)", url: "https://www.justice.gov/usao-sdny/pr/founders-samourai-wallet-cryptocurrency-mixing-service-sentenced-five-and-four-years" }
  - { label: "Wasabi Wallet v2.0.8 release notes - coordinator selection as the zkSNACKs coordinator ends (June 2024)", url: "https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.0.8" }
  - { label: "JoinMarket - final release of the reference implementation before archiving (April 2026)", url: "https://github.com/JoinMarket-Org/joinmarket-clientserver/releases/tag/v0.9.12" }
relatedTerms:
  - address-clustering
  - address-reuse
  - chain-analysis
  - coin-control
  - joinmarket
  - joinstr
  - mixing-service
  - payjoin
  - shielded-coinjoin
  - stealth-address
  - wasabi-wallet
  - whirlpool-samourai
sameAs:
  - "https://en.bitcoin.it/wiki/CoinJoin"
  - "https://bitcoinops.org/en/topics/coinjoin/"
liveWidget: ~
translationOf: coinjoin
sourceHash: "a0d09c82ee14"
sourceCommit: "c599b9b"
sourceUpdated: "2026-10-02"
translation:
  method: "llm-draft"
---

CoinJoin es una técnica para romper el supuesto de propiedad común que los analistas de cadena usan para agrupar [direcciones de Bitcoin](/es/glosario/direccion). Varios usuarios aportan [UTXOs](/es/glosario/utxo) a una sola [transacción](/es/glosario/transaccion) con salidas del mismo valor, de modo que un observador externo ya no puede saber qué salida corresponde a qué entrada.

La versión más simple: cinco participantes aportan 0.1 BTC cada uno. La transacción tiene cinco salidas de 0.1 BTC, una por participante, que van a direcciones nuevas que cada uno controla. En la cadena, el vínculo entre cualquier entrada y su salida correspondiente desapareció: lo mejor que puede hacer el analista es adivinar, con una probabilidad de 1 entre 5.

CoinJoin es útil de verdad y limitado de verdad. Mejora la fungibilidad de tus monedas al desprenderlas de su agrupación histórica, pero:

- **No es magia.** Las heurísticas siguen encontrando patrones (montos desiguales, ciertas formas de ordenar las salidas, correlaciones entre mezclar y gastar). Un analista sofisticado a veces puede deshacer la mezcla.
- **Solo funciona para las entradas y salidas que participan en la mezcla.** Los demás UTXOs de tu billetera siguen vinculados, a menos que también los mezcles.
- **La transacción en sí es pública.** Quien observe sabe que participaste en un CoinJoin, aunque no pueda decir cuál salida es tuya. Algunos custodios tratan las monedas que pasaron por un CoinJoin como "contaminadas", la peor forma de erosión de la fungibilidad.

El panorama de las implementaciones cambió drásticamente en 2024. **El coordinador de Wasabi** (operado por zkSNACKs) cerró a mediados de 2024 bajo presión regulatoria. **Samourai Whirlpool** se apagó en abril de 2024, cuando el Departamento de Justicia de Estados Unidos arrestó a sus fundadores por cargos de conspiración para lavar dinero y para transmitir dinero sin licencia; en 2025 se declararon culpables solo del cargo de transmisión de dinero y fueron condenados a cinco y cuatro años. En 2026, las opciones que siguen funcionando incluyen **JoinMarket** (entre pares, sin operador central; su código original se archivó en abril de 2026 y el desarrollo continúa en el proyecto independiente joinmarket-ng), **Joinstr** (rondas organizadas a través de relays de Nostr) y la billetera **Wasabi** (que ahora se usa con coordinadores operados de forma independiente).

[PayJoin (en inglés)](/glossary/payjoin) es un enfoque distinto y de menor escala que logra objetivos de privacidad parecidos sin mezclas por lotes.

La privacidad en Bitcoin se puede lograr, pero exige un esfuerzo deliberado. CoinJoin es una herramienta; la disciplina con las direcciones, Tor, [Lightning](/es/glosario/lightning-network) y evitar los puntos de control del KYC son otras.

Lee [Privacidad en Bitcoin (en inglés)](/rabbit-hole/bitcoin-privacy) para ver el panorama completo después de 2024: qué protege CoinJoin y qué no, qué cambiaron los arrestos y qué sobrevivió.
