---
title: "Keys: What You Actually Hold"
slug: be-your-own-bank
draft: false
status: live
published: "2026-05-15"
updated: "2026-11-17"
reviewedAt: "2026-11-16"
order: 5
goDeeper: ["mt-gox-ftx-graveyard", "brain-wallets", "seed-backup-strategies"]
estimatedMinutes: 6
tagline: "Twelve words are the way back to your coins. Learn to keep them, with practice words first."
prerequisites: ["how-bitcoin-works"]
relatedTerms: ["seed-phrase", "private-key", "wallet", "self-custody", "custodial-wallet", "exchange"]
legacyUrls: ["/be-your-own-bank"]
sources:
  - { label: "BIP 39 - how a wallet turns random numbers into 12 to 24 words, and the words into the seed its keys are made from", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "BIP 32 - how every key in a wallet is made, in a fixed order, from one seed", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Trezor - How to use a wallet backup: no digital copies, screenshots and photographs included; the maker never asks for it; whoever has it can reach the coins from another wallet", url: "https://trezor.io/guides/backups-recovery/general-standards/how-to-use-a-wallet-backup" }
  - { label: "Trezor - Best practices for securing your wallet backup: a lost backup cannot be recovered by anyone; several copies in separate places, away from the eyes of guests", url: "https://trezor.io/blog/security/best-practices-for-securing-your-wallet-backup" }
  - { label: "Trezor - What to do if your wallet backup goes missing: move the coins to a new wallet with a new backup", url: "https://trezor.io/blog/security/what-to-do-if-your-trezor-or-wallet-backup-goes-missing" }
  - { label: "Trezor - Check backup: a backup is tested inside the wallet itself, before it is relied on", url: "https://trezor.io/guides/backups-recovery/general-standards/check-backup-on-trezor-safe-5" }
  - { label: "US Securities and Exchange Commission, Office of Investor Education and Assistance - Crypto Asset Custody Basics for Retail Investors (December 12, 2025): store the seed phrase in a secure place and share it with nobody; a wallet that is lost, stolen or damaged may be lost for good; a company that holds coins for you controls the keys", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/crypto-asset-custody-basics-retail-investors-investor-bulletin-0" }
  - { label: "Kaspersky Securelist (February 5, 2025) - apps in both app stores that searched photo galleries for recovery phrases", url: "https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385/" }
  - { label: "FBI Internet Crime Complaint Center - 2025 report: $11.37 billion lost in complaints involving cryptocurrency, about $7.2 billion of it to investment fraud; the figures are what people reported, for every cryptocurrency", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" }
  - { label: "Mt. Gox - announcement that it had applied to a Tokyo court for civil rehabilitation, with about 750,000 of its customers' bitcoins missing (February 28, 2014)", url: "https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf" }
  - { label: "Mt. Gox - bankruptcy proceedings begin (April 24, 2014)", url: "https://www.mtgox.com/img/pdf/20140424_announce_qa_en.pdf" }
  - { label: "Christian Decker and Roger Wattenhofer - Bitcoin Transaction Malleability and MtGox (2014): Mt. Gox had been the largest Bitcoin exchange", url: "https://arxiv.org/abs/1403.6676" }
  - { label: "In re FTX Trading Ltd., declaration of John J. Ray III (November 17, 2022): FTX.com was among the largest exchanges in the world", url: "https://storage.courtlistener.com/recap/gov.uscourts.deb.188450/gov.uscourts.deb.188450.24.0.pdf" }
  - { label: "Coinkite - advisory of July 30, 2026: a flaw in a wallet maker's devices weakened the making of seed words, and funds were stolen", url: "https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/" }
  - { label: "Mt. Gox trustee - repayments in bitcoin begin (July 5, 2024), ten years after the collapse", url: "https://www.mtgox.com/img/pdf/20240705_01_announcement_en.pdf" }
  - { label: "FTX - bankruptcy case record (filed November 11, 2022; the repayment plan took effect January 3, 2025)", url: "https://restructuring.ra.kroll.com/FTX/" }
  - { label: "US Bankruptcy Court, District of Delaware - In re FTX Trading Ltd., opinion of June 26, 2024: customers' claims for coins are valued in dollars at the prices of the day the company filed", url: "https://www.deb.uscourts.gov/sites/deb/files/opinions/FTX%20Opinion%20and%20Order%20Digital%20Asset%20Estimation.pdf" }
  - { label: "European Union - Regulation (EU) 2023/1114 on markets in crypto-assets, Article 59: companies that hold or trade crypto-assets for customers need an authorisation", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1114" }
  - { label: "New York State Department of Financial Services - virtual currency businesses: the state's license", url: "https://www.dfs.ny.gov/virtual_currency_businesses" }
  - { label: "FDIC - Understanding deposit insurance: at least $250,000 for each depositor at each insured bank", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }
  - { label: "US Code of Federal Regulations, 12 CFR 1005.6 - a customer's loss from a payment they did not authorize is limited", url: "https://www.ecfr.gov/current/title-12/chapter-X/part-1005/subpart-A/section-1005.6" }
---

> **Where you're going:** By the end you will know what the 12 words are, the four rules for keeping them, and the two main ways people hold bitcoin. You will also have made a paper copy of your practice wallet's words and proved that it works. Have a pen and paper ready.

**A guess first.** Your phone falls into a lake tomorrow, with a bitcoin wallet on it. What happens to the coins?

## What are the 12 words?

When you made your practice wallet, it showed you 12 words. They are called **seed words**. (Real wallets also call them a recovery phrase, and some use 24 words.) Every key and every address in the wallet is made from them, in the same order every time.

So every key and every address can be made again from the words. Put the same words into the same kind of wallet on a new phone, and the same keys, the same addresses and the same coins appear. The coins were never on the old phone. They are on the record, and the words are how you reach them.

So the phone in the lake costs you a phone. It costs you the coins only if the words went with it.

## What follows from that?

Whoever has the words has the coins. In a wallet like this one there is no password behind them and no second check.

And if the words are lost, along with the phone, nobody can reach the coins again. No company can reset them, because no company has them.

A copy of the words, kept safe, is called a **backup**.

## How do you keep the words?

Four rules.

1. **On paper, by hand.** Not in a photo, a note on your phone, an email or a file. In 2025 researchers reported apps in both big app stores that searched people's photos for these words.
2. **Never typed into a website, an email or a message.** Treat any page that asks for real words as a scam, with no exception. The only words you ever type into a web page are the ones this site's practice wallet made.
3. **Never given, shown or read out to anyone.** No company and no helper needs your words, not even three of them. Someone who asks is trying to take your coins, however kind or official they sound.
4. **In more than one place.** Then one fire or one burglary does not take the only copy. Whoever finds the paper has the coins, so keep it out of a visitor's sight, and not in a notebook you take out often.

Real words go into one place only: your own wallet, on its own screen, when you set it up or bring it back yourself. And do not use a web page as a wallet for real bitcoin.

One thing the rules leave open. If nobody else knows the paper exists, nobody can reach your coins after you. But whoever knows where it is can take them. The next chapter comes back to this.

## Make a backup

Now make a backup of your practice wallet. The step has you type three of the words, to check your paper. That is safe for one reason only: they guard practice coins that are worth nothing. If you have no practice wallet yet, the step helps you make one first.

The practice wallet is at practice.learnbitcoin.com and nowhere else. Look at the web address in your browser's address bar before you type a word.

**Do it:** [The seed](https://practice.learnbitcoin.com/do/the-seed). Put the 12 words of your practice wallet on paper, in order. Then the step asks you for three of them, to check your paper.

Write "practice" on that paper, and never use these 12 words for real bitcoin: they have been on a web page. A wallet for real bitcoin makes its own words.

Did you take a screenshot instead? With practice words no harm is done. With real words, deleting it is not enough: the fix is a new wallet with new words, and the coins moved to it. So practice the real habit now, which is paper only.

## Does the backup work?

You do not know that a backup works until you have tested it. A misspelled word, or two words in the wrong order, can sit unnoticed until the day you need them.

One sure test is to bring the wallet back from the paper alone. In the next step you remove the practice wallet from your browser. Then you **restore** it, which means bringing it back, by typing the 12 words.

Nothing of value can be lost. Have the paper in your hand before you start. If the words on it turn out to be wrong, the practice wallet is gone and you make a new one. (A wallet made with a passkey can still be opened with the passkey. The step asks you to use the paper.)

With real bitcoin, this test is done before any coins go into the wallet, never after.

**Do it:** [Prove the backup](https://practice.learnbitcoin.com/do/prove-the-backup). Remove the practice wallet from your browser, then bring it back, with its coins, from the 12 words on your paper.

If the coins came back, you have seen the whole idea. The browser did not hold your coins. The paper holds the way to reach them. You hold keys, not coins.

## Who should keep the keys?

There are two main ways to hold bitcoin. The difference is who keeps the keys, and the word for keeping them is **custody**.

**A company keeps them.** This is an account at an exchange. You get a login, a password that can be reset, and a help desk. In many countries such companies need a license. The company holds the keys, so what you have is its promise to hand the coins over.

That is only as good as the company. One of the largest exchanges of 2014 went bankrupt with customers' coins missing, and so did one of the largest of 2022. Customers waited years, and a court decided what they got back. For some it was dollars, not coins.

**You keep them.** This is a wallet of your own, like the practice one. No company holds your coins, so none can freeze them or lend them out. What is left is yours to guard against: a faulty wallet, a lost paper, a burglar, a trick, and what happens to the coins when you die.

Neither way is safe by itself, and one danger is the same in both: being deceived. Of the money people told the FBI they lost in 2025 in cases involving bitcoin and coins like it, most was sent by its owners to someone who had tricked them.

## A fair objection

"Twelve words on a piece of paper? That sounds less safe than my bank, not more."

Against the things that usually go wrong, a bank is safer. A forgotten password can be reset. A stolen card can be cancelled. In the United States the government insures deposits up to a limit, and a payment you did not make can usually be undone.

Keeping your own keys protects against different things: a company that fails, an account that is frozen, a bank that will not send your payment. It does that by removing the protections as well. Some people want that, and some do not. It is also why this course has you practice first, with coins that are worth nothing.

## Check yourself

<details>
<summary>Your phone is lost. What do you need to get your coins back?</summary>

The 12 words. Put into the same kind of wallet on a new phone, they bring back the same keys and the same coins. Without a backup, nothing can. Reread "What are the 12 words?"

</details>

<details>
<summary>Someone from "wallet support" messages you and asks for three of your words, to fix a problem. What do you do?</summary>

Nothing they ask. No company needs your words, not even three of them, and anyone who asks is trying to take your coins. Reread "How do you keep the words?"

</details>

<details>
<summary>Where should the paper not be kept?</summary>

In a notebook you take out often. Anywhere a visitor might look. And not in only one place. The words themselves never go into a photo or a file. Reread the four rules.

</details>

## Words you now know

- **Seed words.** The words, 12 here and 24 in some wallets, that every key in a wallet is made from. Also called a recovery phrase.
- **Backup.** A copy of the seed words, kept safe.
- **Restore.** To bring a wallet back from its seed words.
- **Custody.** Who keeps the keys: you, or a company on your behalf.

Everything so far has used practice coins. What follows is about the real thing.
