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

Bitcoin Core's JSON-RPC interface can control various node functions-like sending transactions, stopping the node, or changing wallet settings. An RPC whitelist ensures only designated IP addresses or authenticated users can run sensitive commands. This helps prevent malicious remote usage if the RPC port is accidentally exposed. Operators can tailor which methods are available to which users, implementing a principle of least privilege. The feature is essential when deploying Bitcoin nodes in cloud environments or multi-user contexts, reducing the attack surface for Node hijacking or unauthorized operations.
