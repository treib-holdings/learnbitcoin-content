---
title: "Bitcoin Core RPC"
slug: bitcoin-core-rpc
draft: false
shortDefinition: "The JSON-RPC interface allowing developers and applications to interact programmatically with a Bitcoin Core node."
keyTakeaways:
  - "Provides programmatic access to node functionality"
  - "Supports sending, receiving, and querying transactions"
  - "Essential for building robust Bitcoin services and apps"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bitcoin-client
  - bitcoin-core
  - rpc-whitelist
liveWidget: ~
---

The Bitcoin Core RPC is the JSON-RPC interface that every modern Bitcoin Core node exposes for programmatic access. Wallets, block explorers, Lightning nodes, Electrum servers, and basically every Bitcoin service runs against an RPC connection to a backing Bitcoin Core node.

Connection basics:

- **Default port** is 8332 for mainnet, 18332 for testnet, 38332 for signet. Configurable via `rpcport` in `bitcoin.conf`.
- **Authentication** is via either an `rpcauth` line in the config (preferred, hashes the password) or a generated cookie file in the data directory. Username / password in cleartext is supported but discouraged.
- **Format** is JSON-RPC 1.0 over HTTP. Each call is a single HTTP POST with a method name and parameters.

The standard CLI driver is `bitcoin-cli`, which wraps RPC in a shell-friendly interface. `bitcoin-cli getblockchaininfo` is roughly equivalent to `curl -X POST -d '{"jsonrpc":"1.0","method":"getblockchaininfo","params":[]}' http://user:pass@localhost:8332/`.

The RPC surface is enormous. Categories you'll see in practice:

- **Blockchain queries.** `getblock`, `getblockhash`, `getblockchaininfo`, `getbestblockhash`, `getrawtransaction`.
- **Wallet operations.** `sendtoaddress`, `getbalance`, `listunspent`, `listtransactions`, `signrawtransactionwithwallet`, `walletprocesspsbt`.
- **Mempool inspection.** `getmempoolinfo`, `getrawmempool`, `getmempoolentry`.
- **Network state.** `getpeerinfo`, `getconnectioncount`, `getnetworkinfo`.
- **Mining helpers.** `getblocktemplate`, `submitblock`, `getmininginfo`.
- **Diagnostic.** `getmemoryinfo`, `gettxoutsetinfo`, `validateaddress`.

Security: the RPC is by default bound to localhost only. Exposing it to the network without TLS and strong authentication is a fast way to lose any wallet attached to the node. The `rpcwhitelist` setting in modern versions lets operators restrict each authenticated user to a specific subset of methods, which is the right pattern for multi-tenant setups (a block explorer doesn't need wallet RPC access; restrict accordingly).

For users of Bitcoin-on-top services, the RPC is invisible plumbing. For anyone running infrastructure - exchanges, payment processors, Lightning routing nodes - it's the daily working surface of Bitcoin Core.
