---
title: "延迟正义交易"
slug: delayed-justice-transaction
draft: false
shortDefinition: "闪电网络的惩罚机制，在扣押不诚实通道对等方资金前设有等待期，减少误判。"
keyTakeaways:
  - "在惩罚作弊者之前增加宽限期"
  - "最小化意外通道状态惩罚的风险"
  - "维持闪电网络对欺诈性广播的威慑"
sources: []
relatedTerms:
  - absolute-fee
  - bip-125-replace-fee
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

"延迟正义交易"描述了闪电网络[惩罚交易](/glossary/penalty-transaction)系统的时间窗口机制。作弊者在单方面广播通道关闭时的自有余额被 CSV 时间锁锁定（通常 144 个区块，约一天），然后作弊者才能花费。在该窗口内，诚实方可以广播正义交易，将整个通道余额席卷一空。

"延迟"不是给作弊者的宽限期——而是给受害者检测和响应的窗口。流程：

1. Alice 广播一个过时的承诺交易，夸大了她的余额。
2. 承诺进入内存池并确认。
3. Alice 声称的余额现在被 `OP_CHECKSEQUENCEVERIFY 144` 锁定——她约 24 小时内无法动用。
4. Bob（或 Bob 的瞭望塔）看到链上广播，认出过时状态，组装正义交易，使用 Alice 在更新状态时交出的撤销密钥。
5. Bob 的正义交易在 CSV 到期前花费 Alice 承诺的双方余额。
6. Alice 失去一切。

CSV 延迟使惩罚机制在现实世界中可行。没有它，作弊者可以在任何人注意到之前广播并立即花费欺诈输出。有了它，防御者有明确的响应窗口。

"通常 144 个区块"在实践中实际意味着：

- 通道在开启时通过 `to_self_delay` 参数设置 CSV 延迟。常见值为 144-2016 个区块（1 天到 2 周）。
- 更大的通道通常使用更长的延迟（给防御者更多反应时间，代价是合法强制关闭时锁定资金更久）。
- 设置是每通道每侧的；你设置对等方的延迟，他们设置你的。

这是使闪电通道对不警觉的操作者默认安全的设计选择之一——只要[瞭望塔](/glossary/lightning-network-penalty)在 CSV 窗口期间替你监控，睡过作弊尝试不会让你失去通道。
