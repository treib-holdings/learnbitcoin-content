---
title: "Reserva de claves (keypool)"
slug: reserva-de-claves
aliases:
  - "reserva de claves"
  - "reservas de claves"
  - "keypool"
  - "key pool"
  - "pool de claves"
draft: false
published: "2026-10-15"
shortDefinition: "Un conjunto de claves (y direcciones) generadas de antemano en las billeteras de Bitcoin Core, para que siempre haya direcciones nuevas disponibles al instante y un respaldo siga valiendo para el siguiente lote de ellas."
keyTakeaways:
  - "Garantiza direcciones únicas sin generarlas en el momento"
  - "Mantiene válido un respaldo para las direcciones entregadas después de hacerlo"
  - "Parte de la lógica interna o más antigua de las billeteras, hoy casi siempre oculta por los esquemas HD"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: the reference client caches (by default) 100 keys in a pool of reserve keys to avoid a backup after every transaction; nodes can keep a pool of N look-ahead keys to watch for incoming payments (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - 0.13.0 release notes: newly created wallets use hierarchical deterministic key generation per BIP 32; backups of HD wallets can re-generate all possible private keys, even ones not yet generated at the time of the backup (23 August 2016)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "Bitcoin Core - 0.15.0 release notes: the default keypool increased to 1000 keys to make recovery more robust (14 September 2017)", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: address gap limit is currently set to 20 (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md: ranged descriptors cover child keys in a configurable range, by default 0-1000 (accessed 2026-10-14)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "Bitcoin Core - 30.0 release notes: BDB legacy wallets can no longer be created or loaded and can be migrated to the descriptor wallet format (10 October 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - bitcoin-core
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - output-descriptor
liveWidget: ~
translationOf: key-pool
sourceHash: "6a0ac11a6404"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La reserva de claves (keypool) es un detalle de implementación de la billetera de Bitcoin Core: un conjunto de claves (y direcciones) generadas de antemano y guardadas en espera, para que haya direcciones nuevas disponibles al instante sin generar la clave en el momento, y para que los respaldos sigan siendo válidos durante cierta ventana de creación de direcciones.

En las billeteras legacy originales (las anteriores a HD), la reserva de claves era una pieza estructural. Cada clave generada era aleatoria e independiente de las demás; si el usuario pedía direcciones más rápido de lo que se respaldaba la billetera, el respaldo podía quedar desactualizado y las direcciones creadas después de él no se podían recuperar. La reserva (100 claves por defecto) era un colchón: mientras hicieras el respaldo después de generada la reserva, estabas cubierto para las siguientes 100 direcciones.

Cuando el soporte de billeteras HD llegó a Bitcoin Core 0.13.0 (2016), la reserva de claves dejó de cargar con tanto peso. La derivación HD le permite a la billetera regenerar cualquier clave futura a partir de la semilla, así que un respaldo hecho en cualquier momento cubre claves que todavía no existían. Pero la reserva se quedó, por dos razones. Las direcciones se siguen generando de antemano. Y la reserva funciona también como ventana de anticipación (lookahead): un respaldo restaurado solo detecta los pagos a las claves que ya derivó, así que Bitcoin Core subió el valor por defecto de 100 a 1,000 claves en la 0.15.0 (2017) para hacer más robusta la recuperación. Otras billeteras HD usan una ventana mucho más pequeña, el [gap limit](/es/glosario/gap-limit) del [BIP 44](/es/glosario/bip-44): una billetera en recuperación deja de escanear tras 20 direcciones sin usar seguidas.

Las billeteras de descriptores de Bitcoin Core, las únicas que existen desde que la 30.0 (2025) eliminó las billeteras legacy, conservan la misma idea con otra forma: cada [descriptor de salida](/es/glosario/descriptor-de-salida) cubre un rango de claves, de 0 a 1,000 por defecto, y la billetera deriva por adelantado dentro de él. Para los usuarios es invisible. Las billeteras simplemente producen direcciones nuevas cuando se les piden, y el respaldo es una sola frase semilla. La plomería de la reserva de claves es una de esas cosas que hacen que "usa la billetera y ya" funcione.
