---
title: "Billetera de solo lectura"
slug: billetera-de-solo-lectura
draft: false
published: "2026-10-13"
shortDefinition: "Una billetera que contiene solo claves públicas o direcciones y permite vigilar saldos sin poder gastar."
keyTakeaways:
  - "Da visibilidad de los fondos sin capacidad de gastar"
  - "Suele usar una xpub para la derivación en configuraciones HD"
  - "Útil para auditorías de seguridad, supervisión de custodia o contabilidad"
aliases:
  - "billeteras de solo lectura"
  - "watch-only wallet"
  - "billetera watch-only"
avoid:
  - "billetera de solo observación"
sources:
  - { label: "bitcoin.org - Developer Guide, Wallets: a networked (watching-only) wallet derives child public keys from a parent public key, monitors for outputs, builds unsigned transactions and hands them to a signing-only wallet (accessed 2026-10-13)", url: "https://developer.bitcoin.org/devguide/wallets.html" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets, use case Audits: sharing account public extended keys lets an auditor see all transactions from and to the wallet, but not a single secret key (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - createwallet RPC, 29.0.0 docs: disable_private_keys, only watchonlys are possible in this mode", url: "https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/createwallet/" }
  - { label: "Electrum - Cold Storage guide: an offline wallet plus a watching-only online wallet that views history and creates transactions to be signed offline (accessed 2026-10-13)", url: "https://electrum.readthedocs.io/en/latest/coldstorage.html" }
  - { label: "BIP-174 - Partially Signed Bitcoin Transaction Format: lets offline signers such as air-gapped wallets and hardware wallets sign without direct access to the UTXO set (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md, multisig: every participant creates a watch-only descriptor wallet from the same descriptor and checks they derive the same addresses (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
relatedTerms:
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - wallet-import-format-wif
liveWidget: ~
translationOf: watch-only-wallet
sourceHash: "fa1a7fbd8883"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Una billetera de solo lectura (watch-only) contiene [claves públicas](/es/glosario/clave-publica) o [claves públicas extendidas](/es/glosario/xpub), pero ninguna [clave privada](/es/glosario/clave-privada). Puede mostrarte saldos, seguir las transacciones entrantes, generar direcciones de recepción y construir transacciones sin firmar, pero no puede firmar ni gastar.

El patrón estándar: una [billetera de hardware](/es/glosario/billetera-de-hardware) (hardware wallet) guarda las claves privadas, y tú cargas su **xpub** (clave pública extendida) en una billetera de solo lectura en tu laptop o tu celular. La billetera de solo lectura deriva tus direcciones de recepción y de cambio a partir de esa xpub, las vigila en la cadena y te muestra el estado de la billetera en tiempo real. Cuando quieres enviar, la billetera de solo lectura construye una [PSBT](/es/glosario/psbt) (transacción de Bitcoin parcialmente firmada) y se la pasa a la billetera de hardware para que la firme.

Por qué es útil esta separación:

- **Seguimiento diario sin exposición.** Tu celular te muestra el saldo de tu billetera sin que tus claves pasen nunca por el celular.
- **Auditoría.** Contadores, socios de negocio o auditores pueden verificar la actividad on-chain de una billetera sin necesitar acceso para gastar.
- **Coordinación multisig.** Cada cofirmante puede tener una vista de solo lectura de la billetera compartida mientras sus claves reales viven en hardware aislado.
- **Verificación del respaldo.** Restaura una xpub en otra máquina para confirmar que tus direcciones coinciden: una comprobación de tu respaldo sin exponer tu [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación).

Las billeteras de solo lectura son una función estándar, no una rareza. [Bitcoin Core](/es/glosario/bitcoin-core) crea una cuando haces una billetera con las claves privadas deshabilitadas, la guía de almacenamiento en frío de Electrum recorre la misma separación, y la guía para desarrolladores de bitcoin.org describe la combinación de una billetera que solo firma con otra conectada a la red, de "solo observación" ("watching-only"), como un diseño normal de billetera. Una configuración de autocustodia habitual combina una billetera de hardware con una compañera de solo lectura en el escritorio o el celular: es la separación más limpia entre "saber tu saldo" y "tener las claves".

Consulta [Billetera de hardware](/es/glosario/billetera-de-hardware) para el dispositivo del lado que firma y [PSBT](/es/glosario/psbt) para ver cómo intercambian transacciones en la práctica las billeteras de solo lectura y las que firman.
