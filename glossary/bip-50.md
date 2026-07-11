---
title: "BIP 50"
slug: bip-50
draft: false
shortDefinition: "记录网络如何解决 2013 年 3 月重大链分叉的文档。"
keyTakeaways:
  - "回顾一次重大分叉及其解决过程"
  - "展示比特币早期的共识构建"
  - "促成了改进的发布流程以避免未来分叉"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block
  - fork
  - reorg-reorganization
liveWidget: ~
---

BIP 50 不是协议变更。它是一份事后分析。

2013 年 3 月 11 日，网络分裂了。Bitcoin 0.7 使用 Berkeley DB，对每个区块的数据库锁有硬上限；0.8 已迁移到 LevelDB，没有等效限制。一个 0.8 矿工产生的比平常大的区块超过了 0.7 节点上的 BDB 锁计数，0.7 节点拒绝它为无效。链分叉了：0.8+ 跟随新区块，0.7 跟随另一条链。

解决花了六个小时的紧急 IRC 协调。运行 0.8 的矿工自愿降级回 0.7 规则，使较短的（0.7 兼容）链超过较长的链，网络重新合并。窗口期间一笔双花命中了一个 OKPay 存款；其余一切干净恢复。

教训深刻。Bitcoin Core 的发布流程对涉及共识的变更变得极度谨慎，这一事件仍被引用为"非共识"实现细节实际上并非非共识的经典案例。任何改变节点接受哪些区块的东西都是共识变更，即使规范说它不应该是。

规范：[BIP-50](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki)。
