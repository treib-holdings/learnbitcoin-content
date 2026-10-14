---
title: "Subir la comisión (fee bumping)"
slug: subir-la-comision
draft: false
published: "2026-10-13"
shortDefinition: "Aumentar la prioridad de una transacción después de transmitirla, normalmente con Replace-by-Fee (RBF) o Child Pays for Parent (CPFP)."
keyTakeaways:
  - "Evita que una transacción se quede atascada en el mempool con una comisión baja"
  - "RBF reemplaza la transacción original; CPFP usa una transacción hija"
  - "Función muy extendida en las billeteras de Bitcoin modernas"
aliases:
  - "subir la comisión"
  - "aumentar la comisión"
  - "fee bumping"
sources:
  - { label: "Bitcoin Core 28.0 release notes (October 2024) - mempoolfullrbf default changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 30.0 release notes (October 2025) - bumpfee and psbtbumpfee no longer require BIP-125 signaling", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
translationOf: fee-bumping
sourceHash: "65f05022ca34"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

Subir la comisión (fee bumping) es lo que haces cuando tu [transacción](/es/glosario/transaccion) está atascada. El [mempool](/es/glosario/mempool) tiene más transacciones de las que caben en los próximos bloques, los mineros están eligiendo primero las de comisión más alta y la tuya quedó demasiado abajo en la lista de prioridad. Dos mecanismos te permiten elevar la comisión efectiva después de transmitirla:

**Replace-by-Fee (RBF, reemplazo por comisión).** Retransmites la misma transacción con una comisión más alta, y la nueva versión reemplaza a la original en los mempools. Está definido en el [BIP 125 (en inglés)](/glossary/bip-125-replace-fee), donde la transacción original señala que puede ser reemplazada. Desde Bitcoin Core 28.0 (octubre de 2024), los nodos de Core con la configuración por defecto usan [full RBF (en inglés)](/glossary/full-rbf) y aceptan el reemplazo haya señalado la original o no. Una billetera puede negarse de todos modos a subir la comisión de una transacción que no señaló; la propia billetera de Bitcoin Core se negaba hasta la versión 30.0 (octubre de 2025).

**Child Pays for Parent (CPFP, el hijo paga por el padre).** No tocas la transacción atascada. En su lugar, gastas una de sus salidas sin confirmar en una transacción "hija" nueva, con una comisión lo bastante grande para cubrirse a sí misma y lo que le falta a la transacción padre. Los mineros tienen el incentivo económico de incluir las dos: la hija solo se confirma si la transacción padre se confirma. Sirve cuando no puedes usar RBF (tu billetera no reemplaza una transacción que no señaló, o no controlas todas las entradas) pero sí controlas una salida.

Casi todas las billeteras modernas lo hacen por ti con un botón de "Subir comisión". El árbol de decisión real:

- **Eres quien envía y la transacción señaló RBF** -> RBF (más limpio: reemplaza la original directamente).
- **Eres quien recibe una transacción entrante atascada** -> CPFP, gastando la salida sin confirmar a una dirección tuya.
- **Eres quien envía y no se señaló RBF** -> RBF funciona de todos modos en los nodos con Bitcoin Core 28.0 o posterior, si tu billetera acepta construir el reemplazo; si no, CPFP si tienes una salida gastable, o esperar.

Lee [Estimación de comisión](/es/glosario/estimacion-de-comision) para no tener que llegar a esto.
