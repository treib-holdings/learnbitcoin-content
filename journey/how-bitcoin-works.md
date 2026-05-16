---
title: "How Bitcoin Works"
slug: how-bitcoin-works
draft: false
status: live
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
  - { label: "Mastering Bitcoin (Andreas Antonopoulos, CC-BY-SA)", url: "https://github.com/bitcoinbook/bitcoinbook" }
---

> **Where you're going:** You'll be able to follow a transaction from "click send" to "it's irreversible." You'll understand what mempool, fees, blocks, and miners actually do, and you'll have a mental model concrete enough to reason about Bitcoin instead of just believing in it.

## 1. The Send Button

Alice has 1 BTC. She wants to send 0.5 BTC to Bob. She opens her wallet, types Bob's address, enters the amount, picks a fee, and taps Send.

A few seconds later, Bob's wallet shows the incoming payment as "unconfirmed." Roughly ten minutes later, it shows "1 confirmation." An hour after that, it's "6 confirmations" - and effectively unrevocable.

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

<figure>
  <img src="/diagrams/alice-pays-bob.svg" alt="Alice's 1.0 BTC UTXO is consumed by a transaction that creates two new UTXOs: 0.5 BTC to Bob and 0.499 BTC change to Alice at a new address. The remaining 0.001 BTC is the fee paid to the miner." />
  <figcaption>Alice's 1.0 BTC UTXO is consumed whole. Two new UTXOs are created; the 0.001 BTC fee is the difference between inputs and outputs.</figcaption>
</figure>

The transaction is then **signed** - Alice's wallet uses her private key to produce a signature that proves she's authorized to spend those specific inputs. The signature does not reveal the private key. Anyone can verify it; only Alice could have created it.

What gets broadcast to the network is roughly 250 bytes of data: the inputs, the outputs, the signatures, the metadata. That's it. The whole transaction fits in a thumbnail image's worth of bytes.

## 4. The Mempool - The Waiting Room

Once Alice's wallet broadcasts the transaction, it goes to one of her wallet's connected nodes, which forwards it to its peers, which forward to theirs. Within seconds, every node on the Bitcoin network has heard about Alice's transaction and stored it in its local **mempool** - short for "memory pool" - the queue of valid transactions waiting to be mined.

A few things to notice:

- **The mempool isn't a single global thing.** Every node has its own copy. They're nearly identical but not perfectly - a node in Tokyo and a node in São Paulo might have slightly different sets for a few seconds. Eventually they converge.
- **Mempool transactions are valid but unconfirmed.** Every node has already checked: signatures are valid, the UTXOs being spent actually exist and are unspent, the math adds up. If any check fails, the transaction is dropped.
- **The mempool is sorted by fee rate.** Miners want to maximize their earnings per block, so they pick the highest-fee transactions first. Your fee determines your seat in line.

You can [look at the live mempool yourself](https://chainquery.com/reports/data/mempool.json) - that's a JSON feed from a live Bitcoin node, updated every few seconds.

## 5. Mining: How a Block Actually Gets Made

A miner is just a computer running specialized software, doing two things in parallel:

1. **Building candidate blocks.** It assembles the most profitable subset of transactions from its mempool, adds a coinbase transaction (which pays itself the block reward + accumulated fees), and constructs a block header.
2. **Hashing the header repeatedly with different nonces.** A "nonce" is just a number - a slot in the header where the miner can plug in different values. The miner tries trillions per second, looking for a hash output below the current target.

When a miner finds a nonce that produces a hash below target, they broadcast the block. Every node:

- Receives the block
- Verifies the hash is below target
- Verifies every transaction in the block
- Adds the block to its copy of the chain
- Removes those transactions from its mempool
- Starts mining on top of this new block

This whole cascade - from "miner finds nonce" to "every node on Earth has the block" - takes a few seconds. The block has arrived. Alice's transaction is now in it. Bob's wallet shows "1 confirmation."

## 6. Difficulty: The Self-Regulating Clock

Bitcoin's target block time is **10 minutes**. Not because 10 minutes is special, but because Satoshi picked it as a compromise: long enough that blocks have time to propagate to the whole network before the next one starts, short enough that confirmations don't take forever.

But total hash power on the network goes up and down all the time. If hash power doubles, blocks would start coming every 5 minutes. If it halves, every 20.

To keep blocks coming at ~10-minute average, the protocol adjusts difficulty every **2016 blocks** - roughly every two weeks. If the previous 2016 blocks took less than two weeks, difficulty goes up. If they took more, difficulty goes down. The adjustment is exact: it scales by the ratio of actual time to expected time.

This is the most beautiful piece of mechanism design in Bitcoin. **No human sets the difficulty.** No committee meets to "raise rates." The network responds to its own conditions, automatically, every two weeks, forever.

You can [watch the next difficulty adjustment counting down](https://chainquery.com/reports/data/mining.json) on the live node feed.

## 7. Block Headers and Merkle Trees

A Bitcoin block is two parts: a small header (80 bytes) and a body containing all the transactions (currently averaging ~1.5 MB).

The header is dense. It contains:

- **Version** - software-version bits
- **Previous block hash** - links this block to the one before it
- **Merkle root** - a single 32-byte hash that summarizes *every* transaction in the body
- **Timestamp** - when the miner constructed it
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

Doable for one block, if the attacker controls enough hash power for one lucky moment. **Doable for six blocks? Nearly impossible.**

Here's the rough probability math, assuming the attacker controls 30% of hash power:

| Confirmations | Probability of successful reversal |
|---|---|
| 1 | ~17.5% |
| 2 | ~4.4% |
| 3 | ~1.2% |
| 4 | ~0.3% |
| 5 | ~0.1% |
| 6 | ~0.025% |

<figure>
  <img src="/diagrams/confirmations-stack.svg" alt="A chain of six Bitcoin blocks. The first block contains Alice's transaction; each subsequent block is a confirmation built on top. Below each block is the probability that a 30 percent attacker reverses the payment given that many confirmations, dropping from 17.5 percent at one confirmation to effectively 0 percent at six. A use-case axis above maps small purchases (t-shirt) on the left to large purchases (house) on the right; a time axis below shows roughly ten minutes per block, with the full chain settling in about an hour." />
  <figcaption>Each confirmation drops the reversal probability roughly an order of magnitude. After six, the chance is effectively zero - practically irreversible.</figcaption>
</figure>

That's why six confirmations (about an hour) is the conventional "settled" threshold. For very large amounts you might wait longer; for a coffee, one confirmation is plenty. Exchanges typically want six. Hardware wallets default to six.

The deeper a transaction is, the more astronomical the cost of un-doing it becomes. At twelve confirmations, you'd need to outpace the entire global hash rate for two hours straight. That's not "hard," it's "this has not happened in 16 years."

## 9. The Chain (and Reorgs)

Each block's header includes the hash of the previous block. This is what makes it a *chain* and not just a list. Changing any block changes its hash, which means the next block's "previous hash" no longer matches, which means every node rejects the change.

To meaningfully alter old history, you'd have to rebuild every block from your target backward - at modern hash rates, this is roughly the energy budget of a small country, sustained for as long as the chain has been running. The further back you go, the more expensive it gets, geometrically.

Sometimes the network has a *brief* disagreement about which block came first - two miners find valid blocks at nearly the same instant, and different parts of the network see different ones first. This is called a **reorg**. It resolves itself within one or two blocks: the chain that gets the next valid block on top wins, and the orphaned block becomes a "stale block." Transactions that were only in the stale block return to the mempool.

Reorgs of 1-2 blocks happen a few times a year. Reorgs of more than 2 are vanishingly rare. The deepest accidental reorg in Bitcoin's history was 4 blocks, in 2010. It hasn't happened since.

## 10. Verifying Without Trusting

You don't have to take anyone's word for any of this. You can run a **full node** - software that downloads the entire chain (currently ~600 GB), validates every transaction back to the genesis block, and continues validating every new block forever.

A full node verifies:

- Every signature on every transaction
- Every UTXO reference (does this output actually exist, is it unspent, is the spender authorized?)
- Every block header (is the hash below target?)
- Every consensus rule (no double-spending, no money created from nothing, no rule violations)

If a miner produced an invalid block - say, paying themselves more than the schedule allows - every full node on Earth would reject it. The miner's work would be wasted. The block would never become part of the chain.

This is what makes Bitcoin trustless. Not "no one is in charge" in a hand-wavy sense, but "every participant can independently verify every rule." You don't trust the miners. You don't trust the developers. You don't even trust me. You run the software, and the software tells you what's true.

A laptop can run a full node. A Raspberry Pi can run a full node. You don't need permission; you just need software and disk space. Chapter 6 is when you'll actually do it.

> **Pro tip:** Three things stick from this chapter and the rest is detail. **One:** there are no balances, just UTXOs. **Two:** mining is a clock plus a security budget. **Three:** the chain is verifiable end-to-end by anyone with a computer. The next chapter is where you stop reading about Bitcoin and start owning it.
