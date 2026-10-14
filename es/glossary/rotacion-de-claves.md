---
title: "Rotación de claves"
slug: rotacion-de-claves
aliases:
  - "rotar claves"
  - "rotar las claves"
  - "rotación de la clave"
  - "rotación de direcciones"
  - "key rotation"
avoid:
  - "rotación de llaves"
  - "rotar llaves"
draft: false
published: "2026-10-15"
shortDefinition: "Reemplazar o generar claves criptográficas nuevas con regularidad para reducir la exposición si una clave vieja se ve comprometida."
keyTakeaways:
  - "Reduce el riesgo si una clave se ve comprometida o se filtra"
  - "Evita atar demasiadas transacciones a una sola dirección"
  - "Es práctica estándar en la gestión de claves empresarial, donde cada clave tiene un criptoperiodo"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10 Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: a system for deriving a tree of keypairs from a single seed (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "NIST - SP 800-57 Part 1 Rev. 5, Recommendation for Key Management, section 5.3: a cryptoperiod is the time span during which a specific key is authorized for use; limiting it limits the amount of exposure if a single key is compromised (May 2020)", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf" }
  - { label: "bitcoin.org - Android Security Vulnerability alert: key rotation is necessary, generating a new address with a repaired random number generator and sending all the money in your wallet back to yourself; do not send bitcoins back to your old insecure addresses (11 August 2013)", url: "https://bitcoin.org/en/alert/2013-08-11-android" }
  - { label: "Bitcoin Core - sendall RPC (29.0.0): spend the value of all confirmed UTXOs and unconfirmed change in the wallet to one or more recipients (accessed 2026-10-14)", url: "https://bitcoincore.org/en/doc/29.0.0/rpc/wallet/sendall/" }
relatedTerms:
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - key-generation-ceremony
  - key-split
  - key-wiping
  - paper-wallet
  - security
  - stealth-address
liveWidget: ~
translationOf: key-rotation
sourceHash: "632469003ec1"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

"Rotación de claves" tiene dos significados distintos en Bitcoin, y mezclarlos es una fuente habitual de confusión:

- Rotación de direcciones: usar una dirección nueva cada vez que recibes fondos. Las billeteras HD lo hacen solas, y las claves de cada dirección se derivan de la misma semilla maestra. La semilla en sí no rota. Esto es higiene de privacidad, no rotación de seguridad; el whitepaper la recomendó en 2008 y las billeteras HD la hicieron gratis.

- Rotación de claves propiamente dicha: mover los fondos de un juego de claves a otro completamente nuevo y después destruir o retirar las claves viejas. Esto es lo que una política de seguridad corporativa quiere decir con "rotar las claves": la guía de gestión de claves del NIST le asigna a cada clave un criptoperiodo, en parte para limitar la exposición si una sola clave se ve comprometida. En Bitcoin es una operación deliberada y manual: gastar todo hacia direcciones nuevas derivadas de una semilla nueva (el RPC `sendall` de Bitcoin Core hace el barrido en una sola llamada).

La rotación de claves propiamente dicha tiene sentido cuando:

- Un cofirmante de una multisig se va y no quieres que se quede ni con una parte del quórum, aunque por sí sola ya no le alcance.
- Sospechas que una clave se vio comprometida, pero no tienes certeza (un respaldo en frío que quedó expuesto por un momento, por ejemplo).
- Una configuración que lleva mucho tiempo en uso acumuló tanto historial operativo que prefieres empezar de cero antes que auditar cada punto de contacto del pasado.

El caso de manual fue el error del generador de números aleatorios de Android en agosto de 2013. La alerta de bitcoin.org decía que "key rotation is necessary" (la rotación de claves es necesaria), pedía a los usuarios generar direcciones nuevas con un generador reparado y enviarse todas sus monedas a sí mismos, y les advertía que no mandaran nada de vuelta a las direcciones viejas.

Para la mayoría de las personas, la rotación periódica de claves en este sentido fuerte es exagerada. La semilla que guarda tu billetera de hardware no corre más riesgo este año que el año pasado. La rotación de direcciones (automática) se encarga de la privacidad; rotar la semilla subyacente sin motivo solo abre la puerta a errores humanos durante la migración.
