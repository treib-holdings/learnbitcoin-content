---
title: "Teach Bitcoin with a Practice Wallet"
heading: "A practice wallet for your class."
description: "A real Bitcoin wallet your class can use in the browser, with coins that are worth nothing. Six \"Do it\" steps and a plan for one class, free, with no account."
published: "2026-11-19"
updated: "2026-11-19"
---

[The Practice Wallet](https://practice.learnbitcoin.com) is a real Bitcoin wallet that runs in the browser, on our own practice network, where the coins are worth nothing. It is free. Nothing to install, no account.

A student makes a wallet, gets coins from a faucet and sends a payment, then removes the wallet and brings it back from its 12 words on paper. Here a mistake costs nothing.

## What it is not

Not the Bitcoin network: a private regtest network with one operator, us, on one small server. So it proves nothing about Bitcoin by itself. The wallet cannot make a real Bitcoin address and refuses to pay one. Its keys live in a browser. That is acceptable for practice coins and for nothing else.

Typing 12 words into a web page is what you teach students never to do. The wallet says so too, on the screens that ask for them. It calls itself "the one exception", because its words only guard practice coins, and says the words of any other wallet never go into a web page, "this one included".

## A class plan

Run the wallet's six "Do it" steps in order: about an hour, by our estimate. Each works by itself, so a lesson can use just one. Steps 1, 5 and 6 make a backup lesson. One address lists all six, for the board: [practice.learnbitcoin.com/do](https://practice.learnbitcoin.com/do).

1. [Hold some](https://practice.learnbitcoin.com/do/hold-some), 15 minutes. Make a practice wallet: it starts with a choice, with a passkey or without, and either is fine for practice. Write down its 12 words, ask the faucet for practice coins and watch a block take them in. Blocks come about every 30 seconds.
2. [Pass it on](https://practice.learnbitcoin.com/do/pass-it-on), 5 minutes. Send a payment into the pot, for a learner who comes later, and watch its first confirmation.
3. [There are no balances](https://practice.learnbitcoin.com/do/no-balances), 10 minutes. Count the wallet's coins, then read what a payment spent, the change and the fee, and find it on [the block explorer](https://practice-explorer.learnbitcoin.com).
4. [The waiting room](https://practice.learnbitcoin.com/do/waiting-room), 10 minutes. Send a payment and watch it reach six confirmations: about three minutes here, not an hour.
5. [The seed](https://practice.learnbitcoin.com/do/the-seed), 10 minutes. Write the 12 words on paper, then give three of them when asked.
6. [Prove the backup](https://practice.learnbitcoin.com/do/prove-the-backup), 10 minutes. Remove the wallet, then bring it back, with its coins, from the words on paper.

On a shared computer the next person can see the wallet and, if its 12 words are stored there, spend from it. At the end, have each student remove it, under Settings, and choose "Forget my progress" on the Do it screen.

On a student's own phone the wallet stays, but a browser can erase it by itself: Safari does after 7 days without use. Have students keep the paper. The 12 words bring the wallet back.

The steps go with [the Journey](/journey), our seven short chapters for beginners. In Spanish: [the wallet](https://practice.learnbitcoin.com/es) and [the Journey](/es/recorrido).

## Before the class

- Do the first step yourself, on the network and devices your class will use. A network that blocks Cloudflare, as some schools and workplaces do, stops the faucet's check, and a content blocker can too.
- Each student needs a browser, pen and paper. A browser keeps one practice wallet at a time. Students who share a computer share one wallet, or take turns: each removes the wallet, under Settings, and chooses "Forget my progress" on the Do it screen before the next begins.
- After a short "are you human" check, the faucet pays 100,000 practice sats, once per address per day. For more coins, a student shows a new address and asks again.
- It pays about 20 wallets a minute, for everyone together, so a class of 30 has its coins in about two minutes. When it says it is busy, the page asks again by itself, for up to three minutes. If a student still has no coins, pay them from your own practice wallet.

## What is kept, sent and counted

We set no cookies, and the 12 words never leave the browser.

The browser keeps the wallet's record, which can hold the 12 words as plain text, and a note of "Do it" progress.

Our server sees the wallet's addresses and payments, and each request's IP address. The faucet's check is Cloudflare's and examines the browser.

The wallet counts screens opened and a short, fixed list of events. Each count goes to Plausible with the IP address and the browser's name, version and system. No ID is sent with a count. [The wallet's About page](https://practice.learnbitcoin.com/about) says the rest.

## For a more advanced class

The same 12 words restore the same practice wallet in Sparrow, started in its Regtest mode. Sparrow is a desktop program, so this part needs a computer. [The wallet's Sparrow page](https://practice.learnbitcoin.com/sparrow) shows how.

## What you may copy

The site's text is [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/): copy, adapt and translate it, in a paid course too, with credit and under the same license. [The wallet's code](https://github.com/treib-holdings/learnbitcoin-practice) is public under the MIT license.

## If something breaks

Tell us what broke, or what is missing for a class: [hello@learnbitcoin.com](mailto:hello@learnbitcoin.com), or [an issue on GitHub](https://github.com/treib-holdings/learnbitcoin-practice/issues).
