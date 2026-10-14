---
title: "SPV (verificación simplificada de pagos)"
slug: spv
draft: false
published: "2026-10-14"
shortDefinition: "Un modelo de cliente ligero que verifica transacciones con los encabezados de los bloques y pruebas de Merkle, en lugar de la cadena de bloques (blockchain) completa."
keyTakeaways:
  - "Guarda solo los encabezados de los bloques y se apoya en pruebas de Merkle"
  - "Consume menos recursos que un nodo completo, pero confía más en los pares"
  - "Plantea problemas de privacidad, salvo que se usen métodos más avanzados (como Neutrino)"
aliases:
  - "SPV"
  - "verificación simplificada de pagos"
  - "billetera ligera"
  - "billeteras ligeras"
  - "cliente ligero"
  - "clientes ligeros"
sources:
  - { label: "mempool.space - block 970,676, mined October 9, 2026", url: "https://mempool.space/block/00000000000000000000af0a39d26d4c26c7dc955385fd5b3f996a7cdda03a6f" }
relatedTerms:
  - bip-37
  - bip-158
  - bitcoin-client
  - chain-analysis
  - eclipse-attack
  - full-validation
  - merkle-root
  - neutrino
  - race-attack
  - replay-attack
liveWidget: ~
translationOf: spv-simplified-payment-verification
sourceHash: "c7d461e01160"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

SPV, por **S**implified **P**ayment **V**erification (verificación simplificada de pagos), es el modelo de cliente ligero descrito en la sección 8 del [whitepaper de Bitcoin](/es/glosario/whitepaper). Permite que una billetera verifique sus propias transacciones sin almacenar la cadena completa.

Cómo funciona:

1. La billetera descarga solo los **[encabezados de bloque](/es/glosario/encabezado-del-bloque) de 80 bytes** de cada bloque, desde el bloque génesis hasta el más reciente. Son unos 4 MB al año, cerca de 78 MB en total para los aproximadamente 970,000 bloques minados hasta octubre de 2026.
2. La billetera valida la cadena de encabezados comprobando la [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) de cada uno y que cada uno enlace correctamente con su predecesor.
3. Para una transacción concreta que le interesa, la billetera le pide a un [nodo completo](/es/glosario/nodo-completo) una [prueba de Merkle (en inglés)](/glossary/merkle-proof): una lista corta de hashes que demuestra que la transacción está incluida en el [árbol de Merkle (en inglés)](/glossary/merkle-tree-merkle-root) de algún bloque.
4. La billetera recalcula la raíz de Merkle a partir de la transacción y la prueba, y comprueba que coincida con la raíz guardada en el encabezado de ese bloque.

Si la prueba cuadra, queda demostrado que la transacción está en la cadena, a la profundidad indicada. La billetera ha confirmado la inclusión sin descargar el resto de los datos del bloque.

Lo que SPV sacrifica a cambio:

- **No aprendes nada sobre el resto del bloque.** No puedes verificar que las demás transacciones del bloque obedezcan las reglas de consenso; tienes que confiar en que los [mineros](/es/glosario/minero) y los nodos completos con los que hablas no te mienten sobre la validez de la cadena.
- **Fuga de privacidad.** El SPV ingenuo pregunta "¿cuál es la prueba de la transacción X?", lo que le dice al nodo consultado que X te importa. Protocolos mejores (los filtros de bloque compactos del [BIP 157/158 (en inglés)](/glossary/bip-158), implementados en producción como [Neutrino (en inglés)](/glossary/neutrino)) permiten que los clientes descarguen filtros y busquen coincidencias localmente, sin revelar qué direcciones son suyas.
- **Vulnerabilidad a ataques de eclipse.** Si un atacante aísla tu cliente SPV de los pares honestos, puede hacerte seguir una bifurcación. Un [nodo completo](/es/glosario/nodo-completo) resiste mejor porque valida cada regla por su cuenta.

La mayoría de las billeteras ligeras para celular usan una lógica de tipo SPV, muchas veces combinada con filtros de bloque compactos para la privacidad. Es un intercambio razonable para el uso diario. Para montos altos o situaciones en las que hay mucho en juego, corre un [nodo completo](/es/glosario/nodo-completo).
