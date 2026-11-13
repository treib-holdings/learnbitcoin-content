---
title: "Brain wallet"
slug: brain-wallet
draft: false
published: "2026-11-12"
shortDefinition: "Una clave privada de Bitcoin hecha a partir de una frase que una persona eligió y memorizó. Hay programas que adivinan esas frases y vacían las billeteras, así que el esquema está obsoleto. La forma clásica pasaba la frase una vez por SHA-256, y a menudo se llevan los depósitos en el mismo bloque que los confirma. La reemplazó la frase semilla que genera la billetera."
keyTakeaways:
  - "La receta clásica es una línea: clave privada = SHA-256(frase). La misma frase le da la misma clave a todo el mundo, así que un solo intento se prueba contra todas las direcciones de la cadena a la vez. No hay sal (el valor aleatorio que un sitio web mezcla en cada contraseña que guarda) ni límite de intentos"
  - "Un estudio de 2016 identificó 884 brain wallets probando unos 300,000 millones de frases candidatas; todas menos 21 se habían drenado, la mitad en los 21 minutos siguientes a recibir fondos"
  - "La frase semilla del BIP 39 reemplazó a la idea: la billetera saca de 128 a 256 bits aleatorios y los muestra como 12 a 24 palabras. El BIP dice que es 'not a way to process user-created sentences (also known as brainwallets) into a wallet seed' (no una manera de convertir oraciones creadas por el usuario, también conocidas como brainwallets, en la semilla de una billetera)"
  - "Si todavía tienes monedas detrás de una frase que inventaste, trata esa clave como pública y muévelas a una billetera que haya generado su propia semilla"
aliases:
  - "brain wallets"
  - "brainwallet"
  - "brainwallets"
  - "billetera cerebral"
  - "billeteras cerebrales"
sources:
  - { label: "Bitcoin Wiki - Brainwallet (read November 2026): the passphrase scheme is filed under 'Obsolete brainwallet style' and 'should not be used'; the word covers memorizing a wallet-generated seed phrase", url: "https://en.bitcoin.it/wiki/Brainwallet" }
  - { label: "brainwallet.github.io - js/brainwallet.js at the site's last working commit (August 1, 2015): the key is one SHA-256 of the passphrase box", url: "https://github.com/brainwallet/brainwallet.github.io/blob/f7679dd03f39a04edced641960a7c3df1116fea9/js/brainwallet.js" }
  - { label: "brainwallet.github.io - the last commit, 'closed permanently', August 7, 2015", url: "https://github.com/brainwallet/brainwallet.github.io/commit/fa462be9af74da30ae7e78203c11b94a0f887539" }
  - { label: "Ryan Castellucci - Cracking Cryptocurrency Brainwallets, slides as delivered at DEF CON 23 on August 7, 2015 (Wayback Machine copy): 'Brainwallets make the Blockchain a public password hash database'", url: "https://web.archive.org/web/20260114163757/https://rya.nc/files/cracking_cryptocurrency_brainwallets.pdf" }
  - { label: "Vasek, Bonneau, Castellucci, Keith and Moore - The Bitcoin Brain Drain (Financial Cryptography 2016, preproceedings PDF): 884 wallets, 1,806 BTC, all but 21 drained, half within 21 minutes", url: "https://fc16.ifca.ai/preproceedings/36_Vasek.pdf" }
  - { label: "Milk Sad - research update 16, Investigating Weak Brainwallets (January 6, 2026): 20,397 known one-round SHA-256 addresses, 'a lower bound'", url: "https://milksad.info/posts/research-update-16/" }
  - { label: "LearnBitcoin - every payment to 39 brain wallet addresses, 1,150 rows, read November 9, 2026: all 112 payments of 2025 and 2026 were spent in the block that confirmed them (CSV)", url: "https://www.learnbitcoin.com/downloads/brain-wallets-deposits.csv" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys: computer-generated randomness, 128 to 256 bits, 'not a way to process user-created sentences (also known as brainwallets) into a wallet seed'", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Bonneau and Schechter - Towards Reliable Storage of 56-bit Secrets in Human Memory (USENIX Security 2014, paper PDF, section 5.4): 88 percent recalled a random 56-bit secret in a first follow-up, 59 percent in a second", url: "https://www.usenix.org/system/files/conference/usenixsecurity14/sec14-paper-bonneau.pdf" }
relatedTerms:
  - private-key
  - seed-phrase
  - bip-39
  - mnemonic-entropy-bits
  - mnemonic-password
  - hash
  - paper-wallet
  - vanity-address
  - bloom-filter
  - mempool
sameAs:
  - "https://en.bitcoin.it/wiki/Brainwallet"
liveWidget: ~
translationOf: brain-wallet
sourceHash: "81a03e684cbb"
sourceCommit: "e722e85"
sourceUpdated: "2026-11-12"
translation:
  method: "llm-draft"
---

Una brain wallet (billetera cerebral) es una [clave privada](/es/glosario/clave-privada) de Bitcoin que no está guardada en ningún lado. Quien la tiene memoriza una frase y vuelve a calcular la clave a partir de ella cada vez que la necesita. En la forma clásica, popular más o menos de 2011 a 2015, la frase se pasa una vez por SHA-256, una función [hash](/es/glosario/hash), y el resultado de 256 bits es la clave. La misma frase da la misma clave en cualquier computadora, así que no hay ningún archivo que respaldar ni nada que llevar encima.

Ese diseño falla por razones que no tienen nada que ver con la criptografía de Bitcoin. La frase es el único secreto, y la gente elige frases de un conjunto pequeño: nombres, letras de canciones, citas, contraseñas viejas. Un atacante calcula el hash de frases candidatas en hardware propio y comprueba cada dirección resultante contra todas las direcciones que alguna vez han tenido monedas. No hay sal, el valor aleatorio que un sitio web cuidadoso mezcla en cada contraseña que guarda, así que la misma frase es la misma clave para todo el mundo y un solo intento pone a prueba a todos los usuarios a la vez. Nada limita el número de intentos, y el hash es rápido. Los blancos son públicos, cada uno con su saldo al lado. Ryan Castellucci, especialista en seguridad que en 2015 publicó un programa rápido para adivinar frases, lo resumió ese año: "Brainwallets make the Blockchain a public password hash database" (las brainwallets convierten la cadena de bloques en una base de datos pública de hashes de contraseñas).

Un estudio de 2016 de Vasek, Bonneau, Castellucci, Keith y Moore midió el resultado. Probó unos 300,000 millones de frases candidatas y encontró 884 brain wallets. Todas menos 21 se habían drenado, la mitad en los 21 minutos siguientes a recibir fondos, y para septiembre de 2013 el tiempo típico había bajado a minutos y segundos. Hay programas que vigilan los pagos a frases que ya conocen y gastan las monedas antes de que el pago se confirme, así que el depósito y el gasto suelen caer en el mismo bloque.

La herramienta más conocida, brainwallet.org, cerró el 7 de agosto de 2015 con un último cambio que borró su código, el día en que Castellucci presentó ese programa en DEF CON, una conferencia de hackers. A noviembre de 2026, la Bitcoin Wiki archiva el esquema de la frase bajo "Obsolete brainwallet style" (estilo de brainwallet obsoleto) y dice que "should not be used" (no debería usarse). En 2026 las frases viejas seguían vigiladas. El grupo de investigación Milk Sad listó 20,397 direcciones conocidas de este tipo ese enero, y los pagos pequeños enviados a frases muy conocidas en 2025 y 2026 se gastaron en el bloque que los confirmó.

Lo que la reemplazó es la [frase semilla](/es/glosario/frase-semilla). Con el [BIP 39](/es/glosario/bip-39), la billetera saca de 128 a 256 bits aleatorios y te los muestra como 12 a 24 palabras. La billetera elige las palabras y tú las copias. Doce palabras así tienen unas 3.4 x 10^38 posibilidades, y cada combinación es tan probable como cualquier otra, así que no hay una lista de las más probables para probar. Hacer más lento el hash, como hicieron algunas herramientas posteriores, sube el costo de cada intento, pero no puede rescatar una frase que esté cerca del principio de la lista de un atacante.

A noviembre de 2026, la Bitcoin Wiki usa la palabra en un sentido más acotado: memorizar una frase semilla que generó una billetera. Eso nadie lo puede adivinar, pero la memoria falla a su manera. En un estudio, el 88 por ciento de quienes participaron todavía podía escribir un secreto aleatorio de 56 bits, menos de la mitad del tamaño de una frase semilla de doce palabras, unos días después de aprenderlo, y el 59 por ciento podía dos semanas más tarde. Un secreto guardado solo en la memoria también se pierde cuando muere quien lo guarda. Usa la memoria, como mucho, como segunda copia. Si todavía tienes monedas detrás de una frase que inventaste alguna vez, trata esa clave como pública y muévelas a una dirección de una billetera que haya generado su propia semilla. La historia completa, con los datos de la cadena que la respaldan, está en el capítulo a fondo [Brain wallets](/es/a-fondo/brain-wallets).
