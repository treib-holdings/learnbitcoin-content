---
title: "PSBT (transacción de Bitcoin parcialmente firmada)"
slug: psbt
draft: false
published: "2026-10-13"
shortDefinition: "Formato estándar del BIP 174 para pasar una transacción que todavía no está firmada del todo entre varios dispositivos o cofirmantes sin exponer las claves privadas. El estándar de flujo de trabajo que hace que la autocustodia moderna sea viable de verdad."
keyTakeaways:
  - "Un solo objeto binario (normalmente codificado en base64) que lleva el esqueleto de la transacción sin firmar y, por cada entrada, los datos del UTXO, las rutas de derivación y las firmas parciales"
  - "Permite que las billeteras de hardware firmen por USB, o sin conexión (air-gapped) por microSD, QR o NFC, sin exponer nunca la semilla"
  - "Funciona entre fabricantes: un PSBT construido por una billetera BIP 174 puede ser firmado y finalizado por otra, siempre que ambas admitan el tipo de script y los campos involucrados"
  - "PSBT v2 (BIP 370) permite agregar entradas y salidas después de la creación; los campos de Taproot vienen de una especificación aparte (BIP 371) que funciona con cualquiera de las dos versiones, y la compatibilidad con v2 todavía se está extendiendo"
aliases:
  - "PSBT"
  - "PSBTs"
  - "transacción de Bitcoin parcialmente firmada"
  - "transacción parcialmente firmada"
sources:
  - { label: "BIP-174 - Partially Signed Bitcoin Transaction Format", url: "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki" }
  - { label: "BIP-370 - PSBT Version 2", url: "https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki" }
  - { label: "BIP-371 - Taproot Fields for PSBT", url: "https://github.com/bitcoin/bips/blob/master/bip-0371.mediawiki" }
  - { label: "Bitcoin Core 0.17.0 release notes - BIP 174 PSBT support", url: "https://bitcoincore.org/en/releases/0.17.0/" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - hardware-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - transaction
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0174"
  - "https://en.bitcoin.it/wiki/PSBT"
  - "https://bitcoinops.org/en/topics/psbt/"
liveWidget: ~
translationOf: psbt
sourceHash: "3721f2c47802"
sourceCommit: "fa94f44"
sourceUpdated: "2026-10-02"
translation:
  method: "llm-draft"
---

PSBT, siglas en inglés de **P**artially **S**igned **B**itcoin **T**ransaction (transacción de Bitcoin parcialmente firmada), es un formato estandarizado ([BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki), escrito por Ava Chow e integrado en Bitcoin Core 0.17 en 2018) para pasar una transacción que todavía no está firmada del todo entre varios dispositivos o cofirmantes. Es el estándar de flujo de trabajo que hace que la autocustodia moderna sea viable de verdad.

El problema que PSBT resuelve: en cualquier esquema de firma que no sea trivial, sueles tener un dispositivo que *conoce el estado de la billetera* (qué UTXOs existen, qué direcciones son tuyas) pero no tiene las [claves privadas](/es/glosario/clave-privada), y otro dispositivo aparte que *tiene las claves* pero no conoce el estado de la billetera. La transacción sin firmar, pero descrita por completo, es el objeto que tiene que viajar entre los dos.

## El formato

Un PSBT es un solo objeto binario (normalmente codificado como una cadena en base64), dividido en secciones por entrada y por salida, más una sección global. Contiene:

- El esqueleto de la transacción sin firmar
- Los datos del UTXO de cada entrada (para que quienes firman puedan verificar los montos por su cuenta)
- Las rutas de derivación y las claves públicas de cada entrada
- Las firmas parciales, a medida que cada cofirmante las agrega
- Las huellas (fingerprints) de la clave maestra BIP 32

## Un flujo PSBT típico

1. **Un coordinador** (Sparrow, Bitcoin Core, Specter, Nunchuk, etc.) construye la [transacción](/es/glosario/transaccion): selecciona los UTXOs, fija el destinatario y el monto, calcula la comisión. Exporta el resultado como PSBT, ya sea un archivo binario o una cadena en base64.
2. **El firmante**, normalmente una [billetera de hardware](/es/glosario/billetera-de-hardware) (hardware wallet), recibe el PSBT por USB, microSD, código QR o NFC. El firmante muestra los detalles de la transacción en su pantalla confiable, el usuario los verifica, el firmante firma y devuelve el PSBT actualizado.
3. **Si es multisig**, se repite el paso 2 con cada cofirmante. Cada uno agrega su firma parcial a la sección de la entrada que corresponde y lo pasa al siguiente.
4. **El coordinador** finaliza el PSBT y lo convierte en una transacción completa cuando hay firmas suficientes para satisfacer el script de cada entrada, y la transmite a la red.

## Por qué importa

- **La firma sin conexión (air-gapped) funciona.** Las billeteras de hardware que nunca tocan un cable USB pueden firmar por códigos QR. La semilla nunca toca un dispositivo conectado a internet.
- **La multisig es portable.** Los cofirmantes pueden usar hardware de fabricantes distintos, software distinto, estar en jurisdicciones distintas, y aun así cooperar mediante un formato de archivo estandarizado.
- **Las claves se quedan en sus dispositivos.** Cada firmante conserva su clave en su propio equipo; solo la firma parcial sale del dispositivo.

## PSBT v2

PSBT v2 (BIP 370) permite modificar los conjuntos de entradas y salidas después de crear el PSBT. La compatibilidad con [Taproot](/es/glosario/taproot) viene de una especificación aparte, el BIP 371, cuyos campos funcionan en PSBTs de cualquiera de las dos versiones. La compatibilidad con v2 todavía es desigual. Sparrow, la app de Bitcoin de Ledger y el firmware reciente de Coldcard lo manejan, y Bitcoin Core lo integró en 2026 para la versión 32.0. Algunas billeteras de hardware, como Trezor y BitBox02, nunca llegan a ver un PSBT, porque la app de escritorio lo traduce al protocolo propio del dispositivo.

PSBT es la infraestructura silenciosa de la autocustodia seria. Si tu configuración de billetera usa dispositivos de hardware o multisig, casi seguro usa PSBT por debajo.

Consulta [Billetera de hardware](/es/glosario/billetera-de-hardware) para el caso de uso más común, y [Multisig jerárquica (en inglés)](/glossary/hierarchical-multisig) para el patrón multidispositivo que PSBT hace posible.
