---
title: "合并挖矿"
slug: merged-mining
draft: false
shortDefinition: "使用相同的哈希算法同时挖两个 PoW 区块链（如比特币 + Namecoin）。"
keyTakeaways:
  - "允许矿工将哈希重用于多个 SHA-256 币"
  - "帮助较小的链共享比特币算力的安全性"
  - "需要节点软件同时支持两个区块链"
sources: []
relatedTerms:
  - hash
  - miner
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-software
  - retail-mining
liveWidget: ~
---

合并挖矿让矿工同时为两个（或更多）SHA-256 区块链产出有效的工作量证明，而不需要额外哈希。矿工的工作 nonce 同时满足两个链的难度要求；如果满足，两个链都从同一次努力中获得新区块。

典型例子是比特币 + Namecoin，设置于 2011 年 Namecoin 算力太低无法独立安全的时候。Namecoin 的区块头验证接受比特币 coinbase 交易作为工作量证明（其中编码了对 Namecoin 区块的承诺），让比特币矿工基本上免费挖 Namecoin。

机制如何工作：

1. 矿工构建一个 Namecoin 区块（有自己的交易、默克尔根等）。
2. 矿工在其比特币 coinbase 交易中包含对 Namecoin 区块哈希的承诺。
3. 矿工正常哈希比特币区块头。
4. 如果结果哈希满足*比特币*的难度，他们赢得一个比特币区块。如果它也满足*Namecoin*的（较低的）难度，他们也赢得一个 Namecoin 区块。
5. Namecoin 区块构造有证明比特币 coinbase 承诺了它的证据，Namecoin 验证者接受它。

比特币历史上其他合并挖矿的链：Namecoin、Devcoin、Ixcoin、Rootstock（RSK）、Syscoin。都是较小的链，受益于比特币巨大的算力而不与之竞争。

合并挖矿带来的好处：

- **免费算力**，从小链的角度看。
- **更高的安全底线**（现在需要攻击比特币算力的一部分而非仅自己的）。
- **比特币矿工的可选收入**，如果选择包含承诺且小链的奖励值得认领。

它不能解决的：

- 小链仍有自己的共识规则、验证者和信任模型。
- 比特币矿工不*被要求*合并挖矿；如果他们集体决定停止，小链的安全性会下降。
- 小链在矿池运营商层面继承一些比特币挖矿集中化风险。

合并挖矿是一个有趣的技术技巧，但在比特币自身的故事中主要是脚注。它对比特币所依赖的链更重要，而非比特币本身。
