---
title: "区块"
slug: block
draft: false
shortDefinition: "将交易分组的数据结构，引用前一个区块的哈希以形成比特币区块链。"
keyTakeaways:
  - "以结构化数据格式分组有效交易"
  - "每个区块引用前一个区块的哈希"
  - "工作量证明保护链并防止篡改"
sources: []
relatedTerms:
  - bip-22-getblocktemplate
  - bip-30
  - bip-34
  - bip-102-2mb-block-size
  - bip-152-compact-blocks
  - block-explorer
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - block-size
  - block-subsidy
  - block-time
  - blockchain
sameAs:
  - "https://en.wikipedia.org/wiki/Blockchain"
  - "https://www.wikidata.org/wiki/Q20514253"
  - "https://en.bitcoin.it/wiki/Block"
liveWidget: liveBlockHeight
---

区块是一批经过验证、由工作量证明密封、大约每 10 分钟打上时间戳的比特币交易。把它想象成世界上每个人都有一份副本的账本中的一页——每个人都在与彼此的副本对照检查。

每个区块在其头中包含前一个区块的哈希。这就是使它成为*链*的原因：篡改区块 800,000，它之后的每个区块都指向错误的哈希。你的伪造在毫秒内对地球上每个节点都显而易见。

[矿工](/glossary/miner)竞争找到下一个区块的有效工作量证明。第一个成功者获得新的[区块奖励](/glossary/block-subsidy)（目前 3.125 BTC，每 210,000 个区块减半）加上其打包的每笔交易的手续费。这就是保持链增长的整个激励结构。详细机制见[挖矿 rabbit hole](/rabbit-hole/mining)。

上方是 [ChainQuery](https://chainquery.com) 驱动的比特币节点接受的最新区块。大约 10 分钟后刷新此页面，数字应该会变。
