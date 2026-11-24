---
title: "Bitcoin Faucet"
slug: bitcoin-faucet
draft: false
updated: "2026-11-24"
shortDefinition: "A website or app that gives a small amount of bitcoin, or of test coins with no value, to anyone who asks. The first, in 2010, paid five bitcoin to each visitor."
keyTakeaways:
  - "Gives a little coin to anyone who asks, so a newcomer can try a real transaction"
  - "The first faucet, Gavin Andresen's in June 2010, paid 5 BTC a visitor, about 2.5 cents at the time"
  - "The faucets that developers rely on hand out test coins that are meant to be worthless"
sources:
  - { label: "BitcoinTalk, Gavin Andresen, June 11, 2010 - 'Get 5 free bitcoins from freebitcoins.appspot.com': the announcement of the first faucet", url: "https://bitcointalk.org/index.php?topic=183.msg1488#msg1488" }
  - { label: "freebitcoins.appspot.com as the Internet Archive saved it on September 11, 2010: 'about a half a US penny each, so five were worth about 2.5 US cents'", url: "https://web.archive.org/web/20100911135321/http://freebitcoins.appspot.com/" }
  - { label: "BitcoinTalk, Gavin Andresen, September 15, 2013 - 'the whole identity-on-the-Internet thing, which nobody has solved'", url: "https://bitcointalk.org/index.php?topic=183.msg3162561#msg3162561" }
  - { label: "LearnBitcoin - The Bitcoin Faucet: its story, and a count of every payment it received and made", url: "https://www.learnbitcoin.com/rabbit-hole/bitcoin-faucet-2010" }
  - { label: "LearnBitcoin - every payout of 5 BTC the first faucet made, and whether it had been spent as of block 976,691 (CSV)", url: "https://www.learnbitcoin.com/downloads/bitcoin-faucet-2010-five-btc.csv" }
  - { label: "Bitcoin Wiki - Bitcoin faucet: sites that 'often fail to deliver or pay such paltry sums as to make the effort itself pointless'; faucets for testnet coins", url: "https://en.bitcoin.it/wiki/Bitcoin_faucet" }
  - { label: "bitcoin.org Developer Examples - Testing Applications: on testnet the satoshis spent have no real-world value; a community faucet gives free testnet satoshis", url: "https://developer.bitcoin.org/examples/testing.html" }
relatedTerms:
  - testnet
  - signet
  - dust
  - satoshi-unit
  - transaction
  - bitcoin-pizza-day
liveWidget: ~
---

A Bitcoin faucet is a website or app that gives a small amount of coin to anyone who asks for it, so that a newcomer can receive a payment and see how one works before spending any money.

The first was Gavin Andresen's. On June 11, 2010, he announced a web page that paid five bitcoin to any visitor who typed in an address: "I want the Bitcoin project to succeed, and I think it is more likely to be a success if people can get a handful of coins to try it out." A bitcoin was then worth about half a cent, so the gift came to about two and a half cents. As the price rose he cut the amount again and again, down to 0.001 BTC a year later, and the faucet made its last payout in October 2012.

By our count of the chain it gave away about 17,577 BTC in about 158,100 payouts, and Andresen's own wallet put in more than everyone else together. Of its 2,448 payouts of five bitcoin, 789 had never been spent as of block 976,691 on November 20, 2026. The story and the count are in [The Bitcoin Faucet: Five Bitcoin for Anyone Who Asked](/rabbit-hole/bitcoin-faucet-2010).

The faucets that developers rely on are of another kind. They give out test coins: coins on separate networks such as [testnet](/glossary/testnet) and [signet](/glossary/signet) that are meant to have no value, so that developers and learners can try things without risking money. Of sites that offer real bitcoin for free, the Bitcoin Wiki says they often fail to deliver, or pay so little that the effort is pointless; and a very small payment can cost more in fees to spend than it is worth (see [dust](/glossary/dust)).

The hard part of running a faucet has not changed since 2010. It is meant to give once to each person, and a website cannot easily tell one person from another. Andresen tried limits on internet addresses, captchas and Google accounts, and wrote in 2013 that the problem was tied to "the whole identity-on-the-Internet thing, which nobody has solved".

LearnBitcoin's own [practice wallet](https://practice.learnbitcoin.com) has a faucet of the test-coin kind. It gives practice coins on a private network that we run, and they have no value.
