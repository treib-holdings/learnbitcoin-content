---
title: "交易索引（txindex）"
slug: transaction-index-txindex
draft: false
shortDefinition: "一种可选的节点设置，创建所有交易的完整索引，可通过 TXID 直接查询。"
keyTakeaways:
  - "存储从 TXID 到区块文件位置的直接映射"
  - "便于快速交易查询，但需额外存储空间"
  - "对浏览器或深度链分析有用，标准使用非必需"
sources: []
relatedTerms:
  - block-explorer
  - chain-analysis
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

`txindex` 是 Bitcoin Core 的一个配置选项（在 `bitcoin.conf` 中 `-txindex=1`），用于构建和维护一个数据库，将每个交易 ID 映射到其在区块文件中的位置。启用后，`getrawtransaction <txid>` 可以立即返回链历史中的任何交易。不启用时，该 RPC 只对内存池中或钱包已知集合中的交易有效。

`txindex` 的代价：

- **磁盘。** 2026 年大约需要额外 50-70 GB 存储空间，随链增长。与约 600 GB 的归档区块数据相比不是最大头，但也不可忽略。
- **初始同步时间。** 索引在初始验证过程中构建；IBD 会稍慢。索引建成后，日常运行不受影响。
- **与修剪不兼容。** `txindex` 需要归档模式。修剪节点无法维护完整交易索引，因为它们不保留所有区块。

谁需要它：

- **区块浏览器。** Mempool.space、Blockstream Explorer 等工具需要按需查找任意交易。它们对归档节点运行 `txindex=1`（或使用自己从链派生的自定义数据库）。
- **链分析工具**，需要处理任意历史交易。
- **某些专用钱包**，需要遍历历史 UTXO 图（罕见；现代描述符钱包通常只跟踪自己的输出）。
- **闪电节点运营者**，某些配置需要，但大多数 LN 后端不严格要求 txindex。

谁不需要：每个标准钱包用户。钱包只跟踪属于自己的 UTXO；它们在自有钱包数据库中有所需的全部交易。在浏览器式工作流之外，用户几乎不会查找任意不相关的交易。

默认关闭。只有确实需要时才开启。如果你运行节点仅为个人钱包使用加可选的对等服务，关闭 `txindex` 可省磁盘并允许在需要时运行修剪模式。
