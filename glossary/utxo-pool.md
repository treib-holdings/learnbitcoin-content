---
title: "UTXO Pool"
slug: utxo-pool
draft: false
published: "2026-09-08"
shortDefinition: "The set of unspent outputs a wallet controls and can draw on to build transactions. Its shape, a few large coins or many small ones, decides your future fees and how much of your history gets linked when you spend."
keyTakeaways:
  - "Distinct from the global UTXO set, which is every unspent output on the network; your pool is the slice your keys can sign for"
  - "Many small coins means many inputs per payment, so fees scale with fragmentation; consolidate during cheap fee periods, not expensive ones"
  - "Every coin in the pool carries a history, and coin selection decides which of those histories get welded together in public"
sources:
  - { label: "Bitcoin Core RPC - listunspent", url: "https://chainquery.com/rpc/listunspent" }
  - { label: "Bitcoin Core RPC - gettxoutsetinfo", url: "https://chainquery.com/rpc/gettxoutsetinfo" }
  - { label: "Bitcoin Optech - Coin selection topic", url: "https://bitcoinops.org/en/topics/coin-selection/" }
  - { label: "Mark Erhardt - An Evaluation of Coin Selection Strategies (2016)", url: "https://murch.one/wp-content/uploads/2016/11/erhardt2016coinselection.pdf" }
relatedTerms:
  - utxo-unspent-transaction-output
  - coin-selection
  - coin-control
  - consolidation-transaction
  - dust
  - change-output
  - coingrinder
  - branch-and-bound-bnb
  - address-clustering
liveWidget: ~
---

Your wallet's balance is a convenience. Underneath it is a list: every [unspent transaction output](/glossary/utxo-unspent-transaction-output) that your keys can sign for, each with its own amount, its own address, and its own history. That list is your UTXO pool. When you send a payment, [coin selection](/glossary/coin-selection) draws coins from it, and when you receive one, or get [change](/glossary/change-output) back, a new coin drops in. Bitcoin Core will show you the raw pool with the `listunspent` RPC, and it looks nothing like a balance.

The pool is your slice of a much larger structure. The network as a whole maintains the UTXO set, the complete list of every unspent output in existence, which every [full node](/glossary/full-node) keeps in fast storage because validating a new transaction means checking that its inputs are in there. The `gettxoutsetinfo` RPC reports its size and total value. Your pool is the tiny subset of that global set that belongs to you, and the network does not know or care which subset that is.

What matters about a pool is its shape. Two wallets holding the same total can be in very different positions. One holds a single large coin and can pay anyone with one input, cheaply, but will always produce change and can never make a [changeless transaction](/glossary/changeless-transaction). The other holds forty small coins from forty payments and has plenty of options for exact matches, but during a fee spike any sizeable payment will need a dozen inputs, and at high fee rates a dozen inputs can cost more than the smallest of those coins is worth. That is how coins become [dust](/glossary/dust): the pool fragments until some of its pieces are uneconomical to move.

The management advice follows from the shape. Fees on Bitcoin are cyclical, so the cheap weeks are the time to run a [consolidation](/glossary/consolidation-transaction) that sweeps small coins into a few larger ones, leaving the pool ready for the expensive weeks when you want to spend as few inputs as possible. [CoinGrinder](/glossary/coingrinder), the algorithm Bitcoin Core uses at high fee rates, optimizes for light transactions and skips small coins, so sweeping them up is left to you.

There is a privacy dimension too. Each coin in the pool arrived from somewhere, and [chain analysts](/glossary/chain-analysis) assume that every coin spent in the same transaction shares an owner. Consolidating your whole pool into one coin is the cheapest possible transaction and also the most revealing one, since it publicly links every source you ever received from. [Coin control](/glossary/coin-control) exists so that you can decide which parts of the pool are allowed to meet, and a labeled pool, with coins tagged by where they came from, is the difference between managing that and finding out later.
