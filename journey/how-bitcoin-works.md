---
title: "How a Payment Works"
slug: how-bitcoin-works
draft: false
status: live
published: "2026-05-15"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 4
goDeeper: ["utxos", "mempool", "mining"]
estimatedMinutes: 5
tagline: "One payment, followed from the tap to final. You send one yourself, with practice coins, and watch."
prerequisites: ["fair-questions"]
relatedTerms: ["transaction", "transaction-fee", "utxo-unspent-transaction-output", "change-output", "mempool", "miner", "transaction-finality"]
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System: section 1 (payments that cannot be reversed), section 2 (a coin is a chain of signatures), section 4 (making a block takes work), section 5 (how the network takes a payment in), section 6 (what a payment leaves over is the fee), section 9 (coins are spent whole, and change comes back to the sender), section 11 (why later blocks make a payment harder to undo)", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "Dotan, Pignolet, Schmid, Tochner and Zohar - Survey on Cryptocurrency Networking (2020), section 4.1, reporting measurements by Till Neudecker: a payment reaches half the nodes in about 5 seconds and nine in ten in about 15", url: "https://arxiv.org/pdf/2008.08412" }
  - { label: "Bitcoin Core 31.0 release notes (April 2026) - the mempool is kept in the order payments are expected to be mined, by fee rate", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "mempool.space API - fee rates over the last year, in eight-hour averages: the middle payment of a block paid 3 sats per unit of size or less in about 99 of every 100", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/1y" }
  - { label: "mempool.space API - the blocks after number 840,000 (April 20, 2024); read on through block 840,064, an ordinary payment cost $45 or more in every one, for about ten hours", url: "https://mempool.space/api/v1/blocks/840014" }
  - { label: "Visa Core Rules and Visa Product and Service Rules (October 2026) - a card payment is approved within seconds and can be disputed for 120 days in most cases", url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf" }
  - { label: "Bitcoin Core, chainparams.cpp - blocks are aimed at one every ten minutes", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/kernel/chainparams.cpp#L128" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double-spending (December 2012): the chance of undoing a payment falls with each block and depends on the attacker's share of the mining power; six blocks is a custom, not a guarantee", url: "https://arxiv.org/abs/1402.2009" }
---

> **Where you're going:** By the end you will have sent a payment, seen what it spent, and watched it become final. The chapter comes in three short parts, each with a step in the practice wallet. Reading takes about five minutes and the steps about ten. You can stop after any part and come back: the page marks the steps you have done.

**A guess first.** After you send bitcoin, how long until nobody can undo it: a second, ten minutes, an hour, or a week?

## Part 1. What happens when you tap Send?

Alice wants to pay Bob. She opens her wallet, puts in Bob's address and an amount, and taps Send.

Her wallet writes a short message. The message says: these coins of mine now belong to that address. The wallet signs it with her key.

The **signature** proves that the message comes from whoever holds the key, and it does so without showing the key. It is the same kind of mathematics that protects your bank's website.

The wallet hands the signed message to the nodes, the computers that keep the record. Each one checks it against the rules and passes it to the others. Within ten seconds or so, most of them have it. No bank had to approve it.

There the payment waits, with other new payments, for a block to take it in. This place is called the mempool you can think of it as **the waiting room**. Part 3 is about it.

Every payment also includes a **fee**: usually a small amount, for the miner who puts it in a block. Most wallets suggest one and let you change it. In a quiet week it is a few cents. On one very busy day in 2024 it was more than $45 for hours.

Now send one. In this step you pay some practice sats into "the pot". The pot is the practice wallet's own store: what you pay in is handed on to a learner who comes after you.

The step fills in the pot's address for you, it takes about a minute. The practice wallet shows the fee as a rate, and you can leave it as it is. If you have no practice wallet yet, the step helps you make one first.

**Do it:** [Pass it on](https://practice.learnbitcoin.com/do/pass-it-on). Your turn to tap Send: pay some practice sats into the pot for a learner who comes after you, and watch the payment get its first confirmation.

## Part 2. What did the payment spend?

Your wallet shows one number. It gets that number by adding up your coins. On the record itself there are no balances, only coins.

A **coin** here is one amount that was paid to one of your addresses. If you were paid three times, you have three coins, much as you might have three bills of different values in your pocket.

A coin is spent whole, like a bill. Say you have one coin of 10,000 sats and you pay someone 6,000. Your wallet uses up the whole coin and makes two new ones: 6,000 for them, and about 3,800 that comes back to you.

The part that comes back is called **change**. With a bill, the shop gives you change. Here your own wallet makes it.

The 200 sats left over are the fee. And if no single coin is big enough, the wallet uses up two or more together.

In the next step you count your own coins. Do not be surprised if there is only one. The payment you just made used up the coin you were given, and the change is what is left.

**Do it:** [There are no balances](https://practice.learnbitcoin.com/do/no-balances). Count the coins in your own practice wallet, then read what one of your payments did to them: what it spent, what went where, the change and the fee.

One thing follows that surprises people. The fee pays for room in a block, and a payment takes more room the more coins it uses up. So the fee depends on the coins in the payment, not on how much money it moves.

## Part 3. When is it final?

A payment that the nodes have passed around is not on the record yet. It is in the waiting room, a queue whose technical name is the mempool.

Miners fill each new block from the waiting room. They are paid the fees on top of the new coins. So when more is waiting than a block can hold, the payments that offer the most for the room they take go first. Offer too little on a busy day, and your payment waits longer.

A block comes about every ten minutes on average. Some come within a minute, and some take an hour.

The block that takes your payment in is its first confirmation. To undo the payment, someone would have to make that block again, and every block after it, faster than all the other miners together. Making a block takes a huge amount of computing, and the electricity to run it, so that is costly from the first block and grows with each one.

After six blocks, about an hour on average, undoing a payment would take a large share of all the mining power there is. That is why six is the usual point at which people call a payment final. It is a custom, not a rule of the system.

Nobody can undo a payment for you, either. No bank will reverse one that went to the wrong address, or to someone who tricked you. The habit that guards against a wrong address: check the whole address before you send, and send a small amount first.

Watch it happen. Blocks come much faster on the practice version of Bitcoin, so six of them take a few minutes, not an hour.

**Do it:** [The waiting room](https://practice.learnbitcoin.com/do/waiting-room). Send a payment and watch it wait, get into a block, and reach six confirmations.

## A fair objection

"An hour to be sure, and no way to undo a mistake. My bank card is faster and safer."

For buying a coffee, it is. A card payment is approved in seconds, and for months afterwards the bank can reverse it if something was wrong. That protects the buyer.

Bitcoin offers the opposite: a payment that no bank or government has to approve and that, once final, nobody can reverse. For someone whose bank has frozen their account, or will not send their payment, that can matter more than speed. For a mistake or a fraud it is exactly the wrong property. The next two chapters are about the care that takes.

Faster ways to pay with bitcoin exist, and they rest on this one. The final chapter points to them.

## Check yourself

<details>
<summary>What does a signature prove?</summary>

That the payment was approved by whoever holds the key. It proves this without showing the key. Reread Part 1.

</details>

<details>
<summary>You have two coins of 5,000 sats each and pay someone 6,000. What is on the record afterwards?</summary>

Both old coins are used up. There are two new coins: 6,000 for them, and a little under 4,000 for you as change. The small difference went to a miner as the fee. Reread Part 2.

</details>

<details>
<summary>Your guess at the start: how long until nobody can undo it?</summary>

About an hour, which is six blocks. No rule says six. By then, undoing the payment would take a large share of all the mining power there is. Reread Part 3.

</details>

## Words you now know

- **Signature.** Proof, made with a key, that a payment was approved by whoever holds that key.
- **Fee.** What a payment pays the miner who puts it in a block.
- **Coin.** One amount received in one payment. A wallet's total is its coins added up.
- **Change.** The part of a spent coin that comes back to you as a new coin.
- **The waiting room.** Where new payments wait for a block. Its technical name is the mempool.

What do you actually hold, then?
