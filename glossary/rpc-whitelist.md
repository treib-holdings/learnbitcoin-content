---
title: "RPC Whitelist"
slug: rpc-whitelist
draft: false
shortDefinition: "A Bitcoin Core configuration limiting certain JSON-RPC method access to whitelisted users or IPs for security."
keyTakeaways:
  - "Restricts access to sensitive commands on a per-user/IP basis"
  - "Prevents unauthorized or malicious RPC calls"
  - "Crucial for secure node management in remote or shared setups"
sources: []
relatedTerms:
  - exchange-api-key
  - oracle-based-betting
liveWidget: ~
---

RPC whitelist is Bitcoin Core's mechanism for restricting which JSON-RPC methods each authenticated user can call. It implements the principle of least privilege at the RPC layer: even if a credential is compromised, the damage is bounded by what that credential is allowed to do.

The configuration in `bitcoin.conf`:

```
rpcauth=alice:5e95...$abc...   # bcrypt-hashed credentials for user alice
rpcwhitelist=alice:getblockchaininfo,getblock,getrawtransaction
rpcauth=bob:7f12...$def...
rpcwhitelist=bob:sendrawtransaction,signrawtransactionwithwallet,getbalance
rpcwhitelistdefault=0          # deny anything not explicitly whitelisted
```

In this example, alice can only read chain state; bob can sign and broadcast but can't, say, call `stop` to shut down the node.

Where this matters in practice:

- **Block explorer backends.** A read-only explorer service needs `getblock`, `getrawtransaction`, `getblockchaininfo`. It doesn't need wallet RPCs. Restricting accordingly means an exploit in the explorer can't drain a wallet on the same node.
- **Lightning node backends.** A Lightning daemon needs specific RPCs (broadcasting transactions, checking mempool state). Restricting to just those means a Lightning bug can't trigger arbitrary wallet operations.
- **Monitoring / metrics scrapers.** Read-only RPC access for Prometheus exporters or alerting systems; no need for write access.
- **Multi-user node hosting.** If multiple humans share a node, each gets a credential with only the methods they need.

Defaults: in modern Bitcoin Core, `rpcwhitelistdefault=1` means whitelisted users have access to all RPC methods except those explicitly excluded. Setting `rpcwhitelistdefault=0` flips the model: methods are denied unless explicitly listed. The deny-by-default mode is the secure choice for any non-trivial deployment.

For a single-user home node where only one credential exists, whitelist setup is overkill. For anything serving multiple consumers, it's the standard hardening step.
