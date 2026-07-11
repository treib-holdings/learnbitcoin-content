---
title: "重放攻击（Replay Attack）"
slug: replay-attack
draft: false
shortDefinition: "分叉后在一链上签名的有效交易在另一链上被重放，可能导致意外的资金转移。"
keyTakeaways:
  - "分叉后两链共享交易格式和地址时产生"
  - "可能在多个网络上花费同一 UTXO"
  - "通过重放保护或不同地址格式来缓解"
sources: []
relatedTerms:
  - double-spend
  - double-spend-relay
  - eavesdropping-attack
  - eclipse-attack
  - griefing-attack
  - jamming-attack-ln
  - race-attack
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

重放攻击在链分叉后发生：在链 A 上签名并广播的交易在链 B 上也有效，因为两条链共享 UTXO、地址和签名规则。攻击者（或仅仅是自然的 P2P 网络）可以在另一条链上重新广播你的交易，在未经你同意的情况下花费对应的"双胞胎"币。

典型的历史案例是 2017 年 8 月的 Bitcoin Cash 分叉。最初 BCH 有部分重放保护；Bitcoin Cash 后来通过自定义 `SIGHASH_FORKID` 标志添加了强重放保护，使 BCH 交易在比特币上无效，反之亦然。Bitcoin SV 后来从 BCH 分叉时添加了自己的重放保护。

分叉链上的缓解措施：

- 强重放保护：分叉引入链特定的签名变更（不同的 sighash、链 ID 式承诺等），使交易不能跨链验证。
- 分离花费：在广播之前，将每一边的币花到一个新地址，使用只在一链上有效的输入。
- "分离器"服务：可信的辅助工具，产生明确只在一链上有效的交易。

2026 年，普通比特币用户的实际重放攻击风险基本为零。任何有意义的争议分叉都会附带重放保护，因为 2017 年没有它的体验太痛苦了，没有未来的分叉会跳过它。
