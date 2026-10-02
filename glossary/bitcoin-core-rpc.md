---
title: "Bitcoin Core RPC"
slug: bitcoin-core-rpc
draft: false
updated: "2026-10-02"
shortDefinition: "The JSON-RPC interface allowing developers and applications to interact programmatically with a Bitcoin Core node."
keyTakeaways:
  - "Provides programmatic access to node functionality"
  - "Supports sending, receiving, and querying transactions"
  - "Essential for building robust Bitcoin services and apps"
sources:
  - { label: "Bitcoin Core - JSON-RPC interface documentation", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/JSON-RPC-interface.md" }
  - { label: "Bitcoin Core - RPC API reference by version", url: "https://bitcoincore.org/en/doc/" }
  - { label: "Bitcoin Core 28.0 release notes - JSON-RPC 2.0 support", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 0.20.0 release notes - rpcwhitelist", url: "https://bitcoincore.org/en/releases/0.20.0/" }
relatedTerms:
  - bip-22-getblocktemplate
  - bitcoin-client
  - bitcoin-core
  - json-rpc-over-tor
  - rpc-whitelist
liveWidget: ~
---

The Bitcoin Core RPC is the JSON-RPC interface that a Bitcoin Core node exposes for programmatic access; it is on by default in `bitcoind`, while the GUI needs `server=1`. Wallets, block explorers, Lightning nodes, Electrum servers, and basically every Bitcoin service runs against an RPC connection to a backing Bitcoin Core node.

Connection basics:

- **Default port** is 8332 for mainnet, 18332 for testnet, 38332 for signet. Configurable via `rpcport` in `bitcoin.conf`.
- **Authentication** is via either a generated cookie file in the data directory (the default, and the method Bitcoin Core's docs prefer) or an `rpcauth` line in the config, which stores a salted hash of the password. Username / password in cleartext is supported but discouraged.
- **Format** is JSON-RPC over HTTP. Since Bitcoin Core 28.0 the server answers in JSON-RPC 2.0 when a request asks for it, and uses the older 1.1-style protocol otherwise. Each call is a single HTTP POST with a method name and parameters.

The standard CLI driver is `bitcoin-cli`, which wraps RPC in a shell-friendly interface. `bitcoin-cli getblockchaininfo` is roughly equivalent to `curl -X POST -d '{"jsonrpc":"1.0","method":"getblockchaininfo","params":[]}' http://user:pass@localhost:8332/`.

The RPC surface is enormous. Categories you'll see in practice:

- **Blockchain queries.** `getblock`, `getblockhash`, `getblockchaininfo`, `getbestblockhash`, `getrawtransaction`.
- **Wallet operations.** `sendtoaddress`, `getbalance`, `listunspent`, `listtransactions`, `signrawtransactionwithwallet`, `walletprocesspsbt`.
- **Mempool inspection.** `getmempoolinfo`, `getrawmempool`, `getmempoolentry`.
- **Network state.** `getpeerinfo`, `getconnectioncount`, `getnetworkinfo`.
- **Mining helpers.** `getblocktemplate`, `submitblock`, `getmininginfo`.
- **Diagnostic.** `getmemoryinfo`, `gettxoutsetinfo`, `validateaddress`.

Security: the RPC is by default bound to localhost only. It has no built-in encryption (Bitcoin Core dropped RPC SSL in version 0.12), and Bitcoin Core's docs say not to expose it to the public internet, warning that even a Tor onion service could open it to attacks it was never hardened against. For remote management of a home node, the docs point to a VPN or an SSH tunnel. [JSON-RPC over Tor](/glossary/json-rpc-over-tor) covers the onion setup some operators use anyway. The `rpcwhitelist` setting (added in Bitcoin Core 0.20) lets operators restrict each authenticated user to a specific subset of methods (a block explorer doesn't need wallet RPC access), but the docs warn not to treat it as a hard security boundary.

For users of Bitcoin-on-top services, the RPC is invisible plumbing. For anyone running infrastructure - exchanges, payment processors, Lightning routing nodes - it's the daily working surface of Bitcoin Core.
