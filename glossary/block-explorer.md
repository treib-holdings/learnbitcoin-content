---
title: "Block Explorer"
slug: block-explorer
draft: false
shortDefinition: "An online tool letting users search blockchain data-transactions, addresses, blocks, and more."
keyTakeaways:
  - "Publicly displays transaction histories and block info"
  - "A common way to verify confirmations or address balances"
  - "Potential privacy trade-offs if relying on third-party services"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - block
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - blockchain
  - chain-visualization
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Block_explorer"
liveWidget: ~
---

A block explorer is a web interface for browsing the Bitcoin chain. Type in an [address](/glossary/address), [transaction](/glossary/transaction) ID, or block height; get back the on-chain data associated with it: balances, transaction history, confirmations, fees, mempool status.

Block explorers are universally useful and universally a privacy compromise. Every search you make tells the operator which addresses or transactions you care about. For casual lookups this is fine; for queries related to your own wallet it's a privacy leak that gets correlated with your IP, your browser fingerprint, and any cookies in play.

Popular explorers in 2026:

- **[mempool.space](https://mempool.space)** - open-source, Tor mirror available, runs against your own node if you self-host (the canonical reference for fee market visualization).
- **[ChainQuery.com](https://chainquery.com)** - the Bitcoin explorer this site is paired with. Honest UI, no tracking, fed by an independent node.
- **blockchain.com**, **blockchair**, **blockstream.info** - older or commercial alternatives with varying privacy practices.

For privacy-sensitive use cases, run your own node and use a local explorer (mempool.space self-hosted, BTC RPC Explorer, btc-rpc-explorer). A [full node](/glossary/full-node) plus a local explorer means *you* see the chain data and *only* you - no third party logs your queries.

For everyday "did my transaction confirm" or "what's the current fee market" type questions, public explorers are fine. Just don't paste your savings address into a search box on every site you visit.
