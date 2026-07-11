---
title: "Nonce"
slug: nonce
draft: false
shortDefinition: "区块头中的 32 位字段，矿工变化它以找到低于网络难度目标的哈希。"
keyTakeaways:
  - "区块哈希工作量证明过程的核心"
  - "仅 4 字节，因此矿工还调整 extranonce/其他字段"
  - "找到有效 nonce 验证区块满足难度"
sources: []
relatedTerms:
  - consensus-parameter
  - difficulty
  - difficulty-retargeting
  - hash
  - nonce-exhaustion
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptographic_nonce"
  - "https://www.wikidata.org/wiki/Q1749235"
  - "https://en.bitcoin.it/wiki/Nonce"
liveWidget: ~
---

Nonce 是[区块头](/glossary/block-header)中的 32 位字段，矿工在搜索有效区块时改变它。"Nonce"是"number used once"的缩写。

[挖矿](/glossary/mining)在最低层面看起来像这样：

```
loop:
  set nonce to next value
  hash = SHA-256(SHA-256(header))
  if hash < target: broadcast block
  else: try again
```

就是这样。没有捷径、没有代数、没有聪明的推导。你只是计算哈希直到一个恰好低于目标。现代 ASIC 每秒每芯片做大约 100 万亿次。

Nonce 字段只有 32 位（约 43 亿个值）。现代 ASIC 在不到一秒内耗尽这个空间。当它耗尽时，矿工调整 coinbase 交易中的"extranonce"——一个更大的空间——这会改变默克尔根，从而改变区块头，给出一个全新的 nonce 空间来搜索。
