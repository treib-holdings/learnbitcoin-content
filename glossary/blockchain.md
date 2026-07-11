---
title: "区块链"
slug: blockchain
draft: false
shortDefinition: "通过密码学哈希将交易批次（区块）链接起来的分布式账本，确保防篡改的数据历史。"
keyTakeaways:
  - "每个区块通过密码学链接到前一个"
  - "形成按时间排序的防篡改交易记录"
  - "支撑比特币去中心化信任模型"
sources: []
relatedTerms:
  - bip-152-compact-blocks
  - block
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-size
  - block-time
  - fork-detection
  - genesis-block
  - market-depth
  - reorg-reorganization
  - stale-block
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
liveWidget: ~
---

区块链是每笔比特币交易的公开账本，组织为一系列[区块](/glossary/block)，每个区块通过密码学与前一个绑定。它是使比特币工作的数据结构。

构造很简单。每个区块在其头中包含前一个区块头的 SHA-256 [哈希](/glossary/hash)。所以区块 800,000 通过哈希引用区块 799,999；区块 799,999 引用 799,998；一直追溯到[创世区块](/glossary/genesis-block)。如果你改变任何历史区块的一个字节，其哈希改变，意味着之后的每个区块现在引用了错误的前任，意味着每个后续区块需要重新挖。以比特币的[工作量证明](/glossary/proof-work-pow)负担，这很快变得不可能负担。

每个比特币全节点存储整个链——目前约 600 GB，每年增长约 150 GB——并独立验证每个区块是否符合每条共识规则。没有主账本；有数万份相同副本，每份都与其他副本验证。要重写比特币的历史，你需要说服这些节点的多数接受你的假版本。他们不会。

"区块链"一词已被泛化为指任何只追加的哈希链接数据结构，该技术被嫁接到无数可信度各异的项目上。比特币的区块链是重要的那条：第一条、最大的、最安全的，也是唯一真正解决其设计问题的那条。

参见[挖矿 rabbit hole](/rabbit-hole/mining)了解为什么链如此难以重写，[区块](/glossary/block)了解每个链接内部的内容。
