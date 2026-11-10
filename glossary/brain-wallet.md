---
title: "Brain Wallet"
slug: brain-wallet
linkText:
  - "brain wallet"
  - "brain wallets"
  - "brainwallet"
  - "brainwallets"
draft: true
published: "2026-11-12"
shortDefinition: "A Bitcoin private key made from a passphrase a person chose and memorized. Programs guess such phrases and empty the wallets, so the scheme is obsolete. The classic form hashed the phrase once with SHA-256, and deposits are often taken in the block that confirms them. A seed phrase made by the wallet replaced it."
keyTakeaways:
  - "The classic recipe is one line: private key = SHA-256(passphrase). The same phrase gives the same key to everyone, so one guess is tested against every address on the chain at once. There is no salt (the random value a website mixes into each stored password) and no limit on guesses"
  - "A 2016 study identified 884 brain wallets by testing about 300 billion candidate phrases; all but 21 had been drained, half of them within 21 minutes of being funded"
  - "A seed phrase under BIP-39 replaced the idea: the wallet draws 128 to 256 random bits and shows them as 12 to 24 words. The BIP says it is 'not a way to process user-created sentences (also known as brainwallets) into a wallet seed'"
  - "If you still hold coins behind a phrase you made up, treat that key as public and move them to a wallet that generated its own seed"
sources:
  - { label: "Bitcoin Wiki - Brainwallet (read November 2026): the passphrase scheme is filed under 'Obsolete brainwallet style' and 'should not be used'; the word covers memorizing a wallet-generated seed phrase", url: "https://en.bitcoin.it/wiki/Brainwallet" }
  - { label: "brainwallet.github.io - js/brainwallet.js at the site's last working commit (1 August 2015): the key is one SHA-256 of the passphrase box", url: "https://github.com/brainwallet/brainwallet.github.io/blob/f7679dd03f39a04edced641960a7c3df1116fea9/js/brainwallet.js" }
  - { label: "brainwallet.github.io - the last commit, 'closed permanently', 7 August 2015", url: "https://github.com/brainwallet/brainwallet.github.io/commit/fa462be9af74da30ae7e78203c11b94a0f887539" }
  - { label: "Ryan Castellucci - Cracking Cryptocurrency Brainwallets, slides as delivered at DEF CON 23 on 7 August 2015 (Wayback Machine copy): 'Brainwallets make the Blockchain a public password hash database'", url: "https://web.archive.org/web/20260114163757/https://rya.nc/files/cracking_cryptocurrency_brainwallets.pdf" }
  - { label: "Vasek, Bonneau, Castellucci, Keith and Moore - The Bitcoin Brain Drain (Financial Cryptography 2016, preproceedings PDF): 884 wallets, 1,806 BTC, all but 21 drained, half within 21 minutes", url: "https://fc16.ifca.ai/preproceedings/36_Vasek.pdf" }
  - { label: "Milk Sad - research update 16, Investigating Weak Brainwallets (6 January 2026): 20,397 known one-round SHA-256 addresses, 'a lower bound'", url: "https://milksad.info/posts/research-update-16/" }
  - { label: "LearnBitcoin - every payment to 39 brain wallet addresses, 1,150 rows, read 9 November 2026: all 112 payments of 2025 and 2026 were spent in the block that confirmed them (CSV)", url: "https://www.learnbitcoin.com/downloads/brain-wallets-deposits.csv" }
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
---

A brain wallet is a Bitcoin [private key](/glossary/private-key) that is stored nowhere. Its owner memorizes a passphrase and recomputes the key from it whenever the key is needed. In the classic form, popular from about 2011 to 2015, the phrase is run once through SHA-256, a [hash](/glossary/hash) function, and the 256-bit result is the key. The same phrase gives the same key on any computer, so there is no file to back up and nothing to carry.

That design fails for reasons that have nothing to do with Bitcoin's cryptography. The phrase is the only secret, and people pick phrases from a small set: names, lyrics, quotations, old passwords. An attacker hashes candidate phrases on private hardware and checks each resulting address against every address that has ever held coins. There is no salt, the random value a careful website mixes into each stored password, so the same phrase is the same key for everyone and one guess tests every user at once. Nothing limits the number of guesses, and the hash is fast. The targets are public, each with its balance beside it. Ryan Castellucci, a security researcher who released a fast phrase-guessing program in 2015, summed it up that year: "Brainwallets make the Blockchain a public password hash database".

A 2016 study by Vasek, Bonneau, Castellucci, Keith and Moore measured the result. It tested about 300 billion candidate phrases and found 884 brain wallets. All but 21 had been drained, half of them within 21 minutes of being funded, and by September 2013 the typical time was down to minutes and seconds. Programs watch for payments to phrases they already know and spend the coins before the payment has confirmed, so the deposit and the spend often land in the same block.

The best-known tool, brainwallet.org, closed on 7 August 2015 with a final change that deleted its code, the day Castellucci presented that program at DEF CON, a hacker conference. As of November 2026 the Bitcoin Wiki files the passphrase scheme under "Obsolete brainwallet style" and says it "should not be used". Old phrases were still being watched in 2026. The Milk Sad research group listed 20,397 known addresses of this kind that January, and small payments sent to well-known phrases in 2025 and 2026 were spent in the block that confirmed them.

What replaced it is a [seed phrase](/glossary/seed-phrase). Under [BIP-39](/glossary/bip-39) the wallet draws 128 to 256 random bits and shows them to you as 12 to 24 words. It picks the words and you copy them down. Twelve such words have about 3.4 x 10^38 possibilities, and every combination is as likely as any other, so there is no list of likely ones to try. Making the hash slower, as some later tools did, raises the cost of each guess but cannot rescue a phrase near the top of an attacker's list.

As of November 2026 the Bitcoin Wiki uses the word in a narrower sense, for memorizing a seed phrase that a wallet generated. Nobody can guess that, but memory fails in its own ways. In one study 88 percent of participants could still type a random 56-bit secret, less than half the size of a twelve-word seed phrase, a few days after learning it, and 59 percent could two weeks later. A secret kept only in memory is also lost when its owner dies. Use memory as a second copy at most. If you still hold coins behind a phrase you once made up, treat that key as public and move them to an address from a wallet that generated its own seed.
