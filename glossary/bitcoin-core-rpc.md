---
title: "Bitcoin Core RPC"
slug: bitcoin-core-rpc
draft: false
shortDefinition: "允许开发者和应用以编程方式与 Bitcoin Core 节点交互的 JSON-RPC 接口。"
keyTakeaways:
  - "提供对节点功能的编程访问"
  - "支持发送、接收和查询交易"
  - "构建健壮比特币服务和应用的基础"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bitcoin-client
  - bitcoin-core
  - json-rpc-over-tor
  - rpc-whitelist
liveWidget: ~
---

Bitcoin Core RPC 是每个现代 Bitcoin Core 节点为编程访问而暴露的 JSON-RPC 接口。钱包、区块浏览器、闪电节点、Electrum 服务器以及基本上每个比特币服务都通过 RPC 连接到后端 Bitcoin Core 节点。

连接基础：

- **默认端口**主网 8332，测试网 18332，signet 38332。可通过 `bitcoin.conf` 中的 `rpcport` 配置。
- **认证**通过配置中的 `rpcauth` 行（首选，密码被哈希）或数据目录中生成的 cookie文件。明文用户名/密码支持但不鼓励。
- **格式**为 HTTP 上的 JSON-RPC 1.0。每次调用是一个带方法名和参数的 HTTP POST。

标准 CLI 驱动是 `bitcoin-cli`，将 RPC 包装为 shell 友好接口。`bitcoin-cli getblockchaininfo` 大致等同于 `curl -X POST -d '{"jsonrpc":"1.0","method":"getblockchaininfo","params":[]}' http://user:pass@localhost:8332/`。

RPC 面非常庞大。实践中你会看到的类别：

- **区块链查询。**`getblock`、`getblockhash`、`getblockchaininfo`、`getbestblockhash`、`getrawtransaction`。
- **钱包操作。**`sendtoaddress`、`getbalance`、`listunspent`、`listtransactions`、`signrawtransactionwithwallet`、`walletprocesspsbt`。
- **内存池检查。**`getmempoolinfo`、`getrawmempool`、`getmempoolentry`。
- **网络状态。**`getpeerinfo`、`getconnectioncount`、`getnetworkinfo`。
- **挖矿辅助。**`getblocktemplate`、`submitblock`、`getmininginfo`。
- **诊断。**`getmemoryinfo`、`gettxoutsetinfo`、`validateaddress`。

安全：RPC 默认只绑定到 localhost。在不带 TLS 和强认证的情况下暴露到网络是丢失附加到节点的钱包的快速方式。对于家庭节点的远程管理，标准模式是 [JSON-RPC over Tor](/glossary/json-rpc-over-tor)——不可猜测的 `.onion` 地址、加密传输、无防火墙洞。现代版本中的 `rpcwhitelist` 设置让运营商将每个认证用户限制到特定方法子集，这是多租户设置的正确模式（区块浏览器不需要钱包 RPC 访问；相应限制）。

对于比特币上层服务的用户，RPC 是不可见的管道。对于运行基础设施的任何人——交易所、支付处理商、闪电路由节点——它是 Bitcoin Core 的日常工作面。
