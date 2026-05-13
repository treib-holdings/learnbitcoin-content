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
  - api-application-programming-interface
  - bip-22-getblocktemplate
  - bitcoin-client
  - bitcoin-core
  - rpc-whitelist
liveWidget: ~
---

Bitcoin Core’s RPC (Remote Procedure Call) interface is like an interpreter that speaks Bitcoin on your behalf. Through JSON-based commands, you can query blockchain data, create transactions, and manage your node’s settings. For example, the ‘getblockchaininfo’ call retrieves synchronization status, while ‘sendtoaddress’ broadcasts a transaction.
This interface enables wallets, explorers, and various services to build on top of Bitcoin without rewriting node logic. Developers can integrate these commands into their applications, automating tasks like transaction tracking or cold storage management. Although advanced usage requires some technical know-how, the RPC is a cornerstone of Bitcoin’s flexible, programmable infrastructure.
