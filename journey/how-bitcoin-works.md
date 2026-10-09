---
title: "How Bitcoin Works"
slug: how-bitcoin-works
draft: false
status: live
published: "2026-05-15"
updated: "2026-10-09"
order: 3
estimatedMinutes: 30
tagline: "Blocks, transactions, mining, fees, UTXOs. The machinery, demystified, without skipping the parts that matter."
prerequisites: ["what-bitcoin-actually-is"]
relatedTerms: ["block", "transaction", "utxo-unspent-transaction-output", "mempool", "transaction-fee", "miner", "merkle-root", "nonce", "difficulty", "difficulty-retargeting", "full-node"]
ogImage: "/diagrams/og/alice-pays-bob.png"
ogImageAlt: "Alice pays Bob 0.5 BTC: a UTXO transaction diagram showing how the 1.0 BTC input is consumed and two new UTXOs are created (0.5 BTC to Bob and 0.499 BTC change to Alice), with 0.001 BTC fee to the miner."
sources:
  - { label: "Bitcoin developer documentation", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "ChainQuery - inspect any block or transaction yourself", url: "https://chainquery.com" }
  - { label: "Bitcoin Wiki - block protocol spec", url: "https://en.bitcoin.it/wiki/Block" }
  - { label: "Mastering Bitcoin, 3rd edition (Andreas M. Antonopoulos and David A. Harding, CC-BY-SA)", url: "https://github.com/bitcoinbook/bitcoinbook" }
  - { label: "Mastering Bitcoin, ch. 9 - fees and fee rates (miners rank transactions by fee per unit of size)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch09_fees.adoc" }
  - { label: "Mastering Bitcoin, ch. 12 - mining (ASICs, the 32-bit nonce and the extra nonce, subsidy plus fees, pool servers that build the candidate block, the 10-minute interval as a design compromise)", url: "https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch12_mining.adoc" }
  - { label: "mempool.space API - mining pools over the past year (named pools found all but 288 of 52,323 blocks, year to 9 October 2026)", url: "https://mempool.space/api/v1/mining/pools/1y" }
  - { label: "mempool.space - a one-input, two-output payment in block 970,600 (222 bytes, 141 virtual bytes)", url: "https://mempool.space/tx/951df0fc57709bd21518c24864826adeef3e7f43399da71f166304239550c9d5" }
  - { label: "mempool.space API - block fee rates over the past year (block median fee rate of 3 sat/vB or less in about 99% of samples, year to 9 October 2026)", url: "https://mempool.space/api/v1/mining/blocks/fee-rates/1y" }
  - { label: "Bitcoin Core source - default mempool size limit of 300 MB (src/kernel/mempool_options.h)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Core source - CalculateNextWorkRequired: the 2016-block retarget and its factor-of-four limit (src/pow.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "BIP 9 - version bits: miners signal soft-fork readiness in the block version field", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "Bitcoin Wiki - block timestamp rules (later than the median of the last 11 blocks, at most 2 hours ahead)", url: "https://en.bitcoin.it/wiki/Block_timestamp" }
  - { label: "mempool.space API - block sizes and weights over the past year (average about 1.58 MB, October 2025 to October 2026; blockchain.com's average-block-size chart agrees)", url: "https://mempool.space/api/v1/mining/blocks/sizes-weights/1y" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: success odds by attacker share and confirmations", url: "https://arxiv.org/abs/1402.2009" }
  - { label: "Bitcoin whitepaper, section 11 - Satoshi's own attacker calculation", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Kraken - cryptocurrency deposit processing times (credits bitcoin deposits after three confirmations)", url: "https://support.kraken.com/articles/203325283-cryptocurrency-deposit-processing-times" }
  - { label: "Bitcoin Core source - RecommendedNumConfirmations is 6; the wallet shows 'Confirming (n of 6 recommended confirmations)' (src/qt/transactionrecord.h)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/qt/transactionrecord.h" }
  - { label: "BitMEX Research - Bitcoin's consensus forks: at least three identifiable chain splits, in 2010, 2013 and 2015 (Wayback Machine)", url: "https://web.archive.org/web/20240110121831/https://blog.bitmex.com/bitcoins-consensus-forks/" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block fork on 4 July, after BIP 66, from miners who were not validating blocks)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
  - { label: "mempool.space API - every difficulty adjustment (summed, about 1.03 x 10^29 hashes of total work through block 970,600)", url: "https://mempool.space/api/v1/mining/difficulty-adjustments/all" }
  - { label: "mempool.space API - network hash rate (about 995 EH/s on 9 October 2026; total work divided by hash rate is about 3.3 years)", url: "https://mempool.space/api/v1/mining/hashrate/1m" }
  - { label: "Cambridge Judge Business School - Cambridge study (April 2025): about 138 TWh a year, roughly 0.5% of global electricity", url: "https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/" }
  - { label: "blockchain.com - total size of the blockchain (774,075 MB on 8 October 2026)", url: "https://www.blockchain.com/explorer/charts/blocks-size" }
  - { label: "Bitcoin Core source - the -assumevalid option (src/init.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/init.cpp" }
---

> **Where you're going:** You'll be able to follow a transaction from "click send" to "it's effectively final." You'll understand what mempool, fees, blocks, and miners actually do, and you'll have a mental model concrete enough to reason about Bitcoin instead of just believing in it.

## 1. The Send Button

Alice has 1 BTC. She wants to send 0.5 BTC to Bob. She opens her wallet, types Bob's address, enters the amount, picks a fee, and taps Send.

A few seconds later, Bob's wallet shows the incoming payment as "unconfirmed." Roughly ten minutes later, it shows "1 confirmation." About an hour after she tapped Send, it's "6 confirmations" - and effectively unrevocable.

This chapter is what happens in between. We'll go layer by layer. By the end, you'll be able to draw it on a napkin.

## 2. There Are No Balances

Here's the first idea most people get wrong:

**Bitcoin does not track account balances.** There is no row anywhere that says *"Alice: 1.00000000 BTC."* That's not what the ledger is.

What the ledger tracks is **transactions** - and each transaction creates **outputs** that can later be spent. An *unspent* output (a UTXO, "unspent transaction output") is the only thing that exists. Your "balance" is just the sum of every UTXO your wallet can spend.

A useful mental model: Bitcoin is **like cash, not like a bank account**.

When you pay $4.30 at a coffee shop with a $5 bill, you don't tell the cashier "deduct $4.30 from my $5." You hand over a discrete bill. The cashier hands you back $0.70 in change as a *new* set of bills. Your wallet contains different physical objects than before.

UTXOs work exactly like this. Alice's "1 BTC" might actually be one UTXO worth 1 BTC, or two UTXOs of 0.5 BTC each, or 100 UTXOs of 0.01 BTC, or any other combination. The wallet hides the difference. The chain doesn't have a choice.

This sounds like a quirk. It's actually the foundation of everything else.

## 3. The Anatomy of a Transaction

Alice's transaction to Bob has three parts:

- **Inputs.** References to UTXOs Alice currently controls. Each input is "I am spending this specific output from this specific past transaction." Each input includes a cryptographic signature - proof that Alice has the private key authorized to spend that UTXO.
- **Outputs.** Where the bitcoin is going. In Alice's case, two outputs: 0.5 BTC to Bob's address, and ~0.499 BTC back to herself as change. (Change goes to a *new* address Alice's wallet generates automatically.)
- **The fee.** The amount left over after inputs minus outputs. This isn't a separate field - it's whatever you didn't claim back as change. Miners take it as the reward for including your transaction.

In Alice's example, inputs total 1.0 BTC, outputs total 0.999 BTC, and the missing 0.001 BTC is the fee.

That fee is a round number to keep the example simple, and far more than a payment like this usually needs. Fees are priced by the transaction's size, not by the amount it moves (more on fee rates in section 4).

A [sat](/glossary/satoshi-unit), short for satoshi, is the smallest unit of bitcoin. One bitcoin is 100 million sats, so Alice's 0.001 BTC fee is 100,000 sats. Size is measured in virtual bytes, which count signature data at a discount. A payment like Alice's is about 141 virtual bytes. In the year to October 2026, the median transaction in a block usually paid 3 sats per virtual byte or less. At that rate, the fee for Alice's payment would come to under 500 sats.

<figure>
  <img src="/diagrams/alice-pays-bob.svg" alt="Alice's 1.0 BTC UTXO is consumed by a transaction that creates two new UTXOs: 0.5 BTC to Bob and 0.499 BTC change to Alice at a new address. The remaining 0.001 BTC is the fee paid to the miner." />
  <figcaption>Alice's 1.0 BTC UTXO is consumed whole. Two new UTXOs are created; the 0.001 BTC fee is the difference between inputs and outputs.</figcaption>
</figure>

The transaction is then **signed** - Alice's wallet uses her private key to produce a signature that proves she's authorized to spend those specific inputs. The signature does not reveal the private key. Anyone can verify it; only Alice could have created it.

What gets broadcast to the network is a little over 200 bytes of data: the inputs, the outputs, the signatures, the metadata. That's it. The whole transaction fits in a thumbnail image's worth of bytes.

## 4. The Mempool - The Waiting Room

Once Alice's wallet broadcasts the transaction, it goes to one of her wallet's connected nodes, which forwards it to its peers, which forward to theirs. Within seconds, nearly every node on the Bitcoin network has heard about Alice's transaction and stored it in its local **mempool** - short for "memory pool" - the queue of valid transactions waiting to be mined.

A few things to notice:

- **The mempool isn't a single global thing.** Every node has its own copy. They're nearly identical but not perfectly - a node in Tokyo and a node in Sao Paulo might have slightly different sets for a few seconds. Some differences last longer, because nodes can choose different settings, such as how much memory the mempool may use (300 MB by default in Bitcoin Core). Two nodes can then hold different waiting transactions until those transactions are mined or dropped. The [mempool rabbit hole](/rabbit-hole/mempool) has the details.
- **Mempool transactions are valid but unconfirmed.** Every node has already checked: signatures are valid, the UTXOs being spent actually exist and are unspent, the math adds up. If any check fails, the transaction is dropped.
- **The mempool is sorted by fee rate.** Miners want to maximize their earnings per block, so they pick the transactions that pay the most per byte of block space first. Your fee rate (sats per virtual byte), not the amount you send, determines your seat in line.

You can [look at a live mempool yourself](https://chainquery.com/reports/mempool) - that page shows one Bitcoin node's mempool at the moment you load it, sorted into fee-rate bands.

## 5. Mining: How a Block Actually Gets Made

A miner is a computer with specialized hashing chips (called ASICs, built to do nothing else) working with a Bitcoin node that keeps a mempool. Almost every block is found by a [mining pool](/glossary/mining-pool), whose node usually builds the block for all the machines in it. Between them, the node and the hashing machines do two things in parallel:

1. **Building candidate blocks.** The node assembles the most profitable subset of transactions from its mempool, adds a coinbase transaction (which pays the miner the [block subsidy](/glossary/block-subsidy) of newly created coins, plus the fees from every transaction in the block), and constructs a block header.
2. **Hashing the header repeatedly with different nonces.** A "nonce" is just a number - a slot in the header where the miner can plug in different values. The miner tries trillions per second, looking for a hash output below the current target. The slot only holds about 4.3 billion values, and modern hardware runs through all of them in a tiny fraction of a second. So miners also tweak other parts of the block, such as spare space in the coinbase transaction, and start the count again.

When a miner finds a nonce that produces a hash below target, they broadcast the block. Every node:

- Receives the block
- Verifies the hash is below target
- Verifies every transaction in the block
- Adds the block to its copy of the chain
- Removes those transactions from its mempool
- If it's a miner, starts mining on top of this new block

This whole cascade - from "miner finds nonce" to "every node on Earth has the block" - takes a few seconds. The block has arrived. Alice's transaction is now in it. Bob's wallet shows "1 confirmation."

## 6. Difficulty: The Self-Regulating Clock

Bitcoin's target block time is **10 minutes**. There's nothing magic about the number. It's a design compromise, long enough that blocks have time to propagate to the whole network before the next one starts and short enough that confirmations don't take forever.

But total hash power on the network goes up and down all the time. If hash power doubles, blocks would start coming every 5 minutes. If it halves, every 20.

To keep blocks coming at ~10-minute average, the protocol adjusts difficulty every **2016 blocks** - roughly every two weeks. If the previous 2016 blocks took less than two weeks, difficulty goes up. If they took more, difficulty goes down. The adjustment is proportional to how far off the timing was, but a single adjustment can't move difficulty by more than a factor of four in either direction.

This is the most beautiful piece of mechanism design in Bitcoin. **No human sets the difficulty.** No committee meets to "raise rates." The network responds to its own conditions, automatically, every two weeks, forever.

You can [watch the next difficulty adjustment counting down](https://chainquery.com/reports/difficulty) on ChainQuery's difficulty page.

## 7. Block Headers and Merkle Trees

A Bitcoin block is two parts: a small header (80 bytes) and a body containing all the transactions (about 1.6 MB on average in the year to October 2026).

The header is dense. It contains:

- **Version** - a number whose bits miners can use to signal readiness for protocol upgrades
- **Previous block hash** - links this block to the one before it
- **Merkle root** - a single 32-byte hash that summarizes *every* transaction in the body
- **Timestamp** - roughly when the miner built it (the rules allow an hour or two of slack)
- **Difficulty target** - what hash output the nonce must beat
- **Nonce** - the number the miner found

The clever part is the **merkle root**. It's the root of a binary tree built by hashing transactions in pairs, then hashing pairs of those hashes, all the way up. The result is a single value that depends on every transaction in the block. Change any transaction, and the merkle root changes, and the block's hash changes, and the chain breaks.

<figure>
  <img src="/diagrams/merkle-tree.svg" alt="A binary Merkle tree. Eight transactions (TX1 through TX8) at the bottom are paired and hashed together to produce four intermediate hashes. Those four are paired and hashed again to produce two more. The final pair is hashed once more to produce the single Merkle root at the top. The block's 80-byte header contains only that root." />
  <figcaption>Eight transactions, hashed pairwise up to a single root. Change any leaf, and every hash on the path to the root changes too.</figcaption>
</figure>

Why does this matter? Because someone who only has the 80-byte header has a cryptographic commitment to all the transactions, without having to download them. This is what makes light wallets (SPV) possible: they can verify that a particular transaction is in a particular block by downloading the merkle path - a handful of hashes - instead of the whole block.

The merkle tree is one of those ideas that, the first time you see it, you think "that's overkill." The hundredth time, you realize it's exactly the right amount of kill.

## 8. Confirmations: Why We Wait

Alice's transaction is in block N. Bob's wallet says "1 confirmation."

Why wait for more? Because nothing is ever truly final on a probabilistic network - only *increasingly* final.

Imagine an attacker who wants to reverse Alice's payment. They'd have to:

1. Build an alternative chain branching off the block *before* Alice's transaction
2. Mine that alternative chain faster than the rest of the world mines the real chain
3. Eventually broadcast their longer chain, causing every honest node to switch

Doable for one block, if the attacker controls enough hash power for one lucky moment. **Doable for six blocks? Nearly impossible, unless the attacker controls a large share of the world's hash power.**

Here's the rough probability math from Meni Rosenfeld's 2012 analysis (Satoshi ran a simpler version in section 11 of the whitepaper), assuming the attacker controls 10% of hash power:

| Confirmations | Probability of successful reversal |
|---|---|
| 1 | ~20% |
| 2 | ~5.6% |
| 3 | ~1.7% |
| 4 | ~0.55% |
| 5 | ~0.18% |
| 6 | ~0.06% |

Six is the first depth where a 10% attacker's odds drop below 0.1%. The attacker's share matters a lot, though. Against an attacker with 30% of the hash power, six confirmations still leave about a 16% chance.

<figure>
  <img src="/diagrams/confirmations-stack.svg" alt="A chain of six Bitcoin blocks. The first block contains Alice's transaction; each subsequent block is a confirmation built on top. Below each block is the probability that a 10 percent attacker reverses the payment given that many confirmations, dropping from 20 percent at one confirmation to about 0.06 percent at six. A use-case axis above maps small purchases (t-shirt) on the left to large purchases (house) on the right; a time axis below shows roughly ten minutes per block, with the full chain settling in about an hour." />
  <figcaption>Each confirmation cuts a 10% attacker's odds of reversing the payment by roughly a factor of three. After six, the chance is about 0.06%, or 1 in 1,700.</figcaption>
</figure>

That's why six confirmations (about an hour) is the conventional "settled" threshold. For very large amounts you might wait longer; for a coffee, one confirmation is plenty. Exchanges set their own thresholds, and some accept fewer than six. Kraken, for example, credits bitcoin deposits after three. Bitcoin Core's wallet shows a payment as "Confirming" until it reaches six.

The deeper a transaction is, the more astronomical the cost of un-doing it becomes. At twelve confirmations, an attacker would have to redo about two hours of the whole network's mining, and do it faster than everyone else keeps extending the real chain. No attacker has ever pulled that off. The only reorgs that deep in Bitcoin's history came from software bugs (see the next section).

## 9. The Chain (and Reorgs)

Each block's header includes the hash of the previous block. This is what makes it a *chain* and not just a list. Changing any block changes its hash, which means the next block's "previous hash" no longer matches, which means every node rejects the change.

To meaningfully alter old history, you'd have to redo the proof-of-work for every block from your target forward to the newest one, then outpace everyone still mining the real chain. The further back you go, the more work there is to redo.

Rewriting the whole chain back to 2009 would keep every mining machine on Earth busy for a little over three years at October 2026 hash rates. For a sense of the cost, a Cambridge study published in April 2025 put Bitcoin mining's electricity use at about 138 terawatt-hours a year, roughly half a percent of the world's total.

Sometimes the network has a *brief* disagreement about which block came first - two miners find valid blocks at nearly the same instant, and different parts of the network see different ones first. This is a temporary fork, and the switch that ends it is called a **reorg**. The fork resolves itself within one or two blocks: the chain that gets the next valid block on top wins, and the orphaned block becomes a "stale block." Transactions that were only in the stale block return to the mempool.

One-block races like this are routine: a public dataset of [stale blocks](/glossary/stale-block) lists between 28 and 93 a year from 2022 through 2025. Two-block reorgs are rare, and longer ones are vanishingly rare.

The deep ones in Bitcoin's history came from software bugs and upgrade trouble, not from ordinary mining. The two deepest were 53 blocks in August 2010, when the [inflation bug](/rabbit-hole/inflation-bug-postmortem) was rolled back, and 25 blocks in March 2013, when two versions of the software [disagreed about a valid block](/rabbit-hole/2013-chain-fork). In July 2015, just after the [BIP 66](/glossary/bip-66) upgrade, miners who skipped checking blocks extended an invalid one into a 6-block chain. Light wallets and pre-upgrade nodes followed that chain until the valid one pulled ahead.

## 10. Verifying Without Trusting

You don't have to take anyone's word for any of this. You can run a **full node** - software that downloads the entire chain (about 775 GB as of October 2026), validates every transaction back to the genesis block, and continues validating every new block forever.

A full node verifies:

- Every signature on every transaction
- Every UTXO reference (does this output actually exist, is it unspent, is the spender authorized?)
- Every block header (is the hash below target?)
- Every consensus rule (no double-spending, no money created from nothing, no rule violations)

Bitcoin Core does take one shortcut by default. To speed up the first sync, it skips the signature checks for every block up to a recent one whose hash is written into each release (the `assumevalid` setting). It still checks everything else, and setting `assumevalid=0` turns the shortcut off.

If a miner produced an invalid block - say, paying themselves more than the schedule allows - every full node on Earth would reject it. The miner's work would be wasted. The block would never become part of the chain.

This is what makes Bitcoin trustless. Not "no one is in charge" in a hand-wavy sense, but "every participant can independently verify every rule." You don't trust the miners. You don't trust the developers. You don't even trust me. You run the software, and the software tells you what's true.

A laptop can run a full node. A Raspberry Pi can run a full node. You don't need permission; you just need software and disk space. Chapter 6 is when you'll actually do it.

> **Pro tip:** Three things stick from this chapter and the rest is detail. **One:** there are no balances, just UTXOs. **Two:** mining is a clock plus a security budget. **Three:** the chain is verifiable end-to-end by anyone with a computer. The next chapter is where you stop reading about Bitcoin and start owning it.
