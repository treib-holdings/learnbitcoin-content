---
title: "P2PK (pago a clave pública)"
slug: p2pk
aliases:
  - "P2PK"
  - "Pay to Public Key"
  - "pay-to-public-key"
  - "pago a clave pública"
  - "salida P2PK"
  - "salidas P2PK"
avoid:
  - "pago a llave pública"
draft: false
published: "2026-10-15"
shortDefinition: "Un tipo de script antiguo que bloquea las monedas directamente a una clave pública; P2PKH lo reemplazó casi por completo."
keyTakeaways:
  - "Bloquea los fondos a una clave pública en bruto, no al hash de una clave"
  - "Se ve en los primeros bloques que minó Satoshi, pero hoy es poco común"
  - "Menos privado y menos flexible que los formatos de script actuales"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 main.cpp (the first commit in the Bitcoin Core repository, August 2009): the genesis block and every coinbase reward from the built-in miner pay a public key followed by OP_CHECKSIG, and the client uses the same script for payments sent to an IP address and for its own change", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/main.cpp" }
  - { label: "Satoshi Nakamoto - Bitcoin v0.1.5 script.cpp: the two standard templates are 'sender provides pubkey, receiver adds signature' (P2PK) and the 'short account number' form, 'sender provides hash of pubkey, receiver provides signature and pubkey' (P2PKH)", url: "https://github.com/bitcoin/bitcoin/blob/4405b78d6059e536c36974088a8ed4d9f0f29898/script.cpp" }
  - { label: "mempool.space - the genesis block's coinbase transaction (API): a single 50 BTC output of type p2pk, a 65-byte public key followed by OP_CHECKSIG, with no address field", url: "https://mempool.space/api/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" }
  - { label: "mainnet-observer - Output Types by Count (daily CSV read October 14, 2026): P2PK was 99.5% of outputs created in 2009, 30% in 2010, 2.5% in 2011, and rounds to 0% in 2026", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "Sergio Lerner - The Return of the Deniers and the Revenge of Patoshi (April 2019): about 22,000 blocks, close to 1.1M BTC, 99.9% of Patoshi blocks unspent", url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/" }
  - { label: "BIP 360 (Draft, Pay-to-Merkle-Root): P2PK outputs ('e.g. Satoshi's coins, CPU miners') are fundamentally vulnerable to long-exposure quantum attacks, which give an attacker unlimited time as long as funds remain in the output; its table gives P2PK's address prefix as 'Varies' and a hex public key as the example", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "Bitcoin Core - src/script/solver.cpp: a P2PK script is a 65- or 33-byte public key followed by OP_CHECKSIG, still recognized by the script solver as output type 'pubkey'", url: "https://github.com/bitcoin/bitcoin/blob/master/src/script/solver.cpp" }
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - post-quantum-bitcoin
  - shors-algorithm
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: p2pk-pay-public-key
sourceHash: "8018985efc36"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

P2PK ("Pay to Public Key", pago a clave pública) es el formato de script que usaron los primeros bloques de Bitcoin. Bloquea una salida a una [clave pública](/es/glosario/clave-publica) en bruto (no a su hash), y se desbloquea con una firma sobre la transacción que la gasta.

Algo de historia:

- **Se usó en el [bloque génesis](/es/glosario/bloque-genesis).** La primera salida coinbase de Satoshi, de 50 BTC, es una P2PK: una clave pública de 65 bytes seguida de `OP_CHECKSIG`. El formato también domina el primer año de la cadena: más del 99% de las salidas creadas en 2009 fueron P2PK.
- **Lo usó la minería temprana de Satoshi.** El cliente original pagaba cada recompensa coinbase a una clave pública en bruto, así que los cerca de 22,000 bloques de la primera época que el investigador Sergio Lerner atribuye a Satoshi (cerca de 1.1 millones de BTC) están en salidas P2PK, y el 99.9% de ellos nunca se ha gastado.
- **Se fue apagando durante 2010.** Las direcciones de Bitcoin, que bloquean al hash de una clave ([P2PKH](/es/glosario/p2pkh)), también venían en la primera versión; el código de Satoshi las llama la forma de "número de cuenta corto" ("short account number"). El cliente original usaba P2PK para las recompensas coinbase, para los pagos enviados a una dirección IP y para su propio cambio. A medida que las monedas empezaron a cambiar de manos por dirección, P2PK cayó del 99.5% de las salidas nuevas en 2009 al 30% en 2010 y al 2.5% en 2011.

Lo que P2PK tiene en contra:

- **La clave pública queda visible en la cadena desde el principio.** Anula la [defensa en profundidad contra un ataque cuántico](/es/glosario/bitcoin-poscuantico) que dan las direcciones basadas en hash. La clave pública está en la cadena desde que se crea la salida, así que las salidas P2PK quedan expuestas a una futura computadora cuántica capaz de correr el [algoritmo de Shor](/es/glosario/algoritmo-de-shor) mientras las monedas sigan ahí, sin nada que las proteja entretanto.
- **Salidas más grandes.** Una clave pública comprimida de 33 bytes (o la variante sin comprimir de 65 bytes que usaban los primeros bloques) ocupa más que un hash de 20 bytes.
- **No tiene formato de dirección.** P2PK nunca tuvo una dirección con suma de verificación (checksum); los exploradores muestran la salida como la clave pública misma, en hexadecimal. Fácil de teclear mal.

Las salidas P2PK siguen siendo gastables (Bitcoin Core todavía reconoce el tipo de script), pero las billeteras dejaron de crearlas hace mucho: P2PK redondea a 0% de las salidas nuevas en 2026. Sobreviven sobre todo como pieza histórica y como objeto de curiosidad académica. Las P2PK de la era de Satoshi, en particular, salen en toda discusión sobre lo cuántico: el BIP 360 pone "Satoshi's coins" (las monedas de Satoshi) como su primer ejemplo de salidas expuestas.

Lee [P2PKH](/es/glosario/p2pkh) para conocer el formato que lo reemplazó.
