---
title: "Descriptor de salida"
slug: descriptor-de-salida
translationOf: output-descriptor
sourceHash: "e1e6bf816dc5"
sourceCommit: "b8304cf"
sourceUpdated: "2026-10-13"
translation: { method: "llm-draft" }
draft: false
published: "2026-10-14"
shortDefinition: "Una notación legible para humanos que describe cómo generar o monitorear determinados scripts y direcciones de Bitcoin."
keyTakeaways:
  - "Simplifica compartir y administrar conjuntos de direcciones y scripts"
  - "Funciona con billeteras de solo lectura y con configuraciones multisig complejas"
  - "Es más claro que los métodos antiguos e improvisados para generar direcciones"
sources:
  - { label: "Bitcoin Core - doc/descriptors.md: Support for Output Descriptors in Bitcoin Core", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "BIP-380 - Output Script Descriptors General Operation (2021)", url: "https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki" }
  - { label: "Bitcoin Core - 0.21.0 release notes: experimental descriptor wallets, not the default type (2021-01-14)", url: "https://bitcoincore.org/en/releases/0.21.0/" }
  - { label: "Bitcoin Core - 23.0 release notes: descriptor wallets are now the default wallet type (2022-04-25)", url: "https://bitcoincore.org/en/releases/23.0/" }
  - { label: "Bitcoin Core - 30.0 release notes: BDB legacy wallets can no longer be created or loaded; legacy-only RPCs including addmultisigaddress removed (2025-10-10)", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Topic: Output script descriptors", url: "https://bitcoinops.org/en/topics/output-script-descriptors/" }
relatedTerms:
  - bitcoin-core
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - p2wpkh-pay-witness-public-key-hash
  - psbt
  - taproot
sameAs:
  - "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md"
  - "https://bitcoinops.org/en/topics/output-script-descriptors/"
liveWidget: ~
---

Un descriptor de salida es un formato de texto compacto que describe cómo derivar un conjunto de scripts y direcciones de Bitcoin. Sustituye las colecciones improvisadas de "direcciones sueltas" por una receta autocontenida que una billetera puede importar y empezar a usar enseguida, sea para monitorear esas direcciones o para gastar desde ellas.

Un descriptor típico se ve así:

```
wpkh([d34db33f/84h/0h/0h]xpub6BosfCnifzxcF.../<0;1>/*)#cm5e6jrn
```

Desglosado:

- `wpkh(...)` - el tipo de script. En este caso, witness public-key hash (P2WPKH, SegWit nativo).
- `[d34db33f/84h/0h/0h]` - el origen BIP 32: la huella (fingerprint) de la clave maestra y la ruta de derivación que lleva hasta esta xpub.
- `xpub6Bos...` - la clave pública extendida.
- `/<0;1>/*` - multipath (varias rutas en una): deriva claves hijas tanto en `/0/*` (recepción) como en `/1/*` (cambio); el `*` representa los índices no endurecidos (unhardened) de esas claves hijas, que la billetera recorre dentro de un rango (de 0 a 1000 por defecto en Bitcoin Core).
- `#cm5e6jrn` - una suma de verificación (checksum), para que un error al copiarlo haga fallar la importación de inmediato.

Por qué importan los descriptores:

- **Autodescriptivos.** Cualquiera que lea el descriptor puede derivar las mismas direcciones sin convenciones acordadas por fuera, del tipo "usamos el BIP 84 con la cuenta 0 y SegWit". El descriptor codifica todo eso de forma explícita.
- **Billeteras de solo lectura.** Pásale un descriptor (sin claves privadas) a un celular o a una laptop y podrá monitorear saldos y armar PSBTs sin firmar.
- **Coordinación multisig.** Una billetera multisig se describe con un solo descriptor, como `wsh(sortedmulti(2,xpub_A/<0;1>/*,xpub_B/<0;1>/*,xpub_C/<0;1>/*))`. Los cofirmantes importan el mismo descriptor y derivan las mismas direcciones de recepción y de cambio.
- **Interoperabilidad entre herramientas.** El lenguaje está estandarizado en el BIP 380 y los BIPs que lo acompañan, así que un descriptor significa lo mismo en Bitcoin Core que en cualquier otra billetera que implemente el estándar. Para mover tu billetera de solo lectura de una herramienta a otra basta con copiar una sola cadena de texto.

Bitcoin Core introdujo las billeteras de descriptores como opción experimental en la versión 0.21 (enero de 2021), las convirtió en la opción por defecto para las billeteras nuevas en la 23.0 (abril de 2022) y en la 30.0 (octubre de 2025) eliminó por completo las billeteras legacy (las del formato anterior): una billetera antigua todavía se puede migrar, pero ya no se puede crear ni cargar. Con ellas se fueron los RPCs que solo existían para ese formato, `addmultisigaddress` entre ellos.

Para la mayoría de los usuarios, los descriptores pasan desapercibidos: la billetera se encarga de ellos. Para las configuraciones multisig, para quienes integran software y para cualquiera que esté depurando una configuración de custodia, son la lengua franca.
