---
title: "Block Explorer"
slug: block-explorer
draft: false
updated: "2026-10-13"
shortDefinition: "An online tool for looking up blockchain data: transactions, addresses, blocks, and more."
keyTakeaways:
  - "Publicly displays transaction histories and block info"
  - "A common way to verify confirmations or address balances"
  - "Potential privacy trade-offs if relying on third-party services"
sources:
  - { label: "Bitcoin Wiki - Privacy, Blockchain explorer websites: the website can easily link the user's IP address to their bitcoin transaction (accessed 2026-10-13)", url: "https://en.bitcoin.it/wiki/Privacy#Blockchain_explorer_websites" }
  - { label: "EFF - Cover Your Tracks: cookie tracking and browser fingerprinting (accessed 2026-10-13)", url: "https://coveryourtracks.eff.org/learn" }
  - { label: "mempool - The Mempool Open Source Project, README: open source, focused on the fee market, self-hosted on your own hardware (accessed 2026-10-13)", url: "https://github.com/mempool/mempool/blob/master/README.md" }
  - { label: "mempool - docker/README.md: a self-hosted Mempool instance needs your own Bitcoin Core deployed and configured separately (accessed 2026-10-13)", url: "https://github.com/mempool/mempool/blob/master/docker/README.md" }
  - { label: "janoside - BTC RPC Explorer, README: self-hosted explorer driven by RPC calls to your own Bitcoin node (accessed 2026-10-13)", url: "https://github.com/janoside/btc-rpc-explorer/blob/master/README.md" }
  - { label: "ChainQuery - Bitcoin, queried: backed by our own node, not third-party APIs (accessed 2026-10-13)", url: "https://chainquery.com/" }
  - { label: "ChainQuery - Privacy Policy: cookieless Plausible analytics, no cookies, no fingerprinting, no cross-site tracking (accessed 2026-10-13)", url: "https://chainquery.com/privacy-policy" }
relatedTerms:
  - bip-30
  - bip-34
  - bitcoin-core
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

Two explorers worth knowing:

- **[mempool.space](https://mempool.space)** - open-source, built around the fee market, and designed to be self-hosted against your own node.
- **[ChainQuery.com](https://chainquery.com)** - the Bitcoin explorer this site is paired with. Fed by its own full node rather than a third-party API; cookieless analytics, no fingerprinting, no cross-site tracking.

For privacy-sensitive use cases, run your own node and use a local explorer (a self-hosted mempool instance or BTC RPC Explorer, both of which read from your own [Bitcoin Core](/glossary/bitcoin-core) node). A [full node](/glossary/full-node) plus a local explorer means *you* see the chain data and *only* you - no third party logs your queries.

For everyday "did my transaction confirm" or "what's the current fee market" type questions, public explorers are fine. Just don't paste your savings address into a search box on every site you visit.
