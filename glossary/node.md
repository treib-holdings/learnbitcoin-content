---
title: "节点"
slug: node
draft: false
shortDefinition: "运行比特币软件的计算机，验证和中继区块/交易，执行网络共识规则。"
keyTakeaways:
  - "根据共识验证交易/区块"
  - "可以是全节点（完整链）或 SPV（部分验证）"
  - "比特币去中心化安全模型的关键"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - full-validation
  - headless-node
  - hidden-service-node
  - i2p-invisible-internet-project
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
sameAs:
  - "https://en.wikipedia.org/wiki/Node_(networking)"
  - "https://www.wikidata.org/wiki/Q173106"
liveWidget: ~
---

比特币节点是参与点对点网络的运行比特币软件的计算机。它接收[交易](/glossary/transaction)和[区块](/glossary/block)，根据共识规则验证它们，并将有效的中继给对等方。

节点有两种实际类型：

- **[全节点](/glossary/full-node)**从[创世区块](/glossary/genesis-block)开始下载并验证每个区块，维护完整的 UTXO 集并独立执行每条共识规则。这是无信任的黄金标准。
- **SPV 节点**（[简化支付验证](/glossary/spv-simplified-payment-verification)）只下载区块头并使用默克尔证明来检查特定交易。更轻、更快，但信任矿工执行共识规则而非自己验证一切。

全节点是比特币安全模型的基础。网络的去中心化来自数万个独立运营者各自验证一切——没有任何中心化权威决定规则是什么或交易是否有效。
