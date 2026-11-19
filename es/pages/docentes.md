---
title: "Enseña Bitcoin con una billetera de práctica"
heading: "Una billetera de práctica para tu clase."
description: "Una billetera de Bitcoin de verdad que tu clase usa en el navegador, con monedas que no valen nada. Seis pasos \"Hazlo\" y un plan de clase, gratis y sin cuenta."
published: "2026-11-19"
updated: "2026-11-19"
translationOf: "teach"
sourceHash: "932735a55f82"
sourceCommit: "4478c78"
sourceUpdated: "2026-11-19"
translation:
  method: "llm-draft"
---

[La billetera de práctica](https://practice.learnbitcoin.com/es) es una billetera de Bitcoin de verdad que funciona en el navegador, en nuestra propia red de práctica, donde las monedas no valen nada. Es gratis. No hay nada que instalar ni cuenta que abrir.

Cada estudiante crea una billetera, recibe monedas de un faucet y envía un pago. Luego quita la billetera y la trae de vuelta con sus 12 palabras en papel. Aquí un error no cuesta nada.

## Lo que no es

No es la red de Bitcoin: es una red regtest privada con un solo operador, nosotros, en un servidor pequeño. Por sí sola no demuestra nada sobre Bitcoin. La billetera no puede crear una dirección de Bitcoin de verdad y se niega a pagarle a una. Sus claves viven en un navegador. Eso es aceptable para monedas de práctica y para nada más.

Teclear 12 palabras en una página web es lo que enseñas a no hacer nunca. La billetera también lo dice, en las pantallas que las piden: esta página es la única excepción, porque sus palabras solo protegen monedas de práctica, y las palabras de cualquier otra billetera nunca van en una página web, incluida esta.

## Un plan de clase

Recorre en orden los seis pasos "Hazlo" de la billetera: cerca de una hora, según nuestro cálculo. Cada uno funciona por sí solo, así que una clase puede usar solo uno. Los pasos 1, 5 y 6 forman una clase sobre el respaldo. Una sola dirección muestra los seis, para la pizarra: [practice.learnbitcoin.com/es/do](https://practice.learnbitcoin.com/es/do).

1. [Ten algunas](https://practice.learnbitcoin.com/es/do/hold-some), 15 minutos. Crear una billetera de práctica: empieza con una elección, con llave de acceso (passkey) o sin ella, y cualquiera de las dos sirve para practicar. Escribir sus 12 palabras en papel, pedirle monedas de práctica al faucet y ver cómo un bloque las incluye. Llega un bloque cada 30 segundos, más o menos.
2. [Pásala](https://practice.learnbitcoin.com/es/do/pass-it-on), 5 minutos. Enviar un pago al fondo común, para quien viene después, y ver su primera confirmación.
3. [No hay saldos](https://practice.learnbitcoin.com/es/do/no-balances), 10 minutos. Contar las monedas de la billetera, luego leer qué gastó un pago, el cambio y la comisión, y buscarlo en [el explorador de bloques](https://practice-explorer.learnbitcoin.com).
4. [La sala de espera](https://practice.learnbitcoin.com/es/do/waiting-room), 10 minutos. Enviar un pago y verlo llegar a seis confirmaciones: unos tres minutos aquí, no una hora.
5. [La semilla](https://practice.learnbitcoin.com/es/do/the-seed), 10 minutos. Escribir las 12 palabras en papel y luego dar tres de ellas cuando la página las pide.
6. [Comprueba el respaldo](https://practice.learnbitcoin.com/es/do/prove-the-backup), 10 minutos. Quitar la billetera y luego traerla de vuelta, con sus monedas, desde las palabras en papel.

En una computadora compartida, la siguiente persona puede ver la billetera y, si sus 12 palabras están guardadas ahí, gastar sus monedas. Al final, pide a cada estudiante que la quite, en Configuración, y que elija "Olvidar mi progreso" en la pantalla Hazlo.

En el celular de cada estudiante la billetera se queda, pero un navegador puede borrarla por sí solo: Safari lo hace tras 7 días sin uso. Pide que guarden el papel. Las 12 palabras traen la billetera de vuelta.

Los pasos acompañan al [Recorrido](/es/recorrido), nuestros siete capítulos cortos para principiantes. En inglés: [la billetera](https://practice.learnbitcoin.com) y [el Recorrido](/journey).

## Antes de la clase

- Haz tú el primer paso antes, en la red y con los dispositivos que usará tu clase. Una red que bloquea a Cloudflare, como pasa en algunas escuelas y trabajos, detiene la comprobación del faucet, y un bloqueador de contenido también puede hacerlo.
- Cada estudiante necesita un navegador, lápiz y papel. Un navegador guarda una sola billetera de práctica a la vez. Quienes comparten una computadora comparten una billetera, o se turnan: se quita una, en Configuración, antes de crear la siguiente.
- Después de una breve comprobación contra bots, el faucet paga 100,000 sats de práctica, una vez por dirección al día. Para tener más monedas, cada estudiante muestra una dirección nueva y vuelve a pedir.
- Paga a unas 20 billeteras por minuto, entre todas las personas que lo usan, así que una clase de 30 tiene sus monedas en unos dos minutos. Cuando dice que está ocupado, la página vuelve a pedir por sí sola, hasta por tres minutos. Si a alguien todavía le faltan monedas, págale desde tu propia billetera de práctica.

## Qué se guarda, qué se envía y qué se cuenta

No ponemos cookies, y las 12 palabras nunca salen del navegador.

El navegador guarda el registro de la billetera, que puede contener las 12 palabras como texto simple, y una nota del progreso de "Hazlo".

Nuestro servidor ve las direcciones y los pagos de la billetera, y la dirección IP de cada solicitud. La comprobación del faucet es de Cloudflare y examina el navegador.

La billetera cuenta las pantallas que se abren y una lista corta y fija de eventos. Cada conteo va a Plausible con la dirección IP y el nombre, la versión y el sistema del navegador. No se envía ningún identificador. [La página "Acerca de" de la billetera](https://practice.learnbitcoin.com/es/about) dice el resto.

## Para una clase más avanzada

Las mismas 12 palabras restauran la misma billetera de práctica en Sparrow, abierto en su modo Regtest. Sparrow es un programa de escritorio, así que esta parte se hace en una computadora. [La página de Sparrow de la billetera](https://practice.learnbitcoin.com/es/sparrow) muestra cómo.

## Lo que puedes copiar

El texto del sitio está bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es): cópialo, adáptalo y tradúcelo, también en un curso de pago, con atribución y bajo la misma licencia. [El código de la billetera](https://github.com/treib-holdings/learnbitcoin-practice) es público bajo la licencia MIT.

## Si algo falla

Cuéntanos qué falló, o qué falta para una clase: [hello@learnbitcoin.com](mailto:hello@learnbitcoin.com), o [un issue en GitHub](https://github.com/treib-holdings/learnbitcoin-practice/issues).
