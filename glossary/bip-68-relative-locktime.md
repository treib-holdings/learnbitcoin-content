---
title: "BIP 68（相对锁定时间）"
slug: bip-68-relative-locktime
draft: false
shortDefinition: "使交易能基于输入年龄定义时间锁，与 OP_CHECKSEQUENCEVERIFY 配合使用。"
keyTakeaways:
  - "基于输入存在时间锁定资金"
  - "与 BIP 112 的 OP_CHECKSEQUENCEVERIFY 配合"
  - "对高级二层合约逻辑至关重要"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-65-opchecklocktimeverify
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0068"
  - "https://en.bitcoin.it/wiki/Timelock"
liveWidget: ~
---

[BIP-68](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki)（与 BIP 112 和 113 一起）为比特币引入了**相对锁定时间**。2016 年 7 月作为[软分叉](/glossary/soft-fork)激活，它让交易基于其消耗输入的*年龄*来延迟花费，而非绝对区块高度或墙上时钟时间。

与[绝对锁定时间](/glossary/absolute-locktime)（[BIP-65](/glossary/bip-65-opchecklocktimeverify)）的对比：

- **绝对：**"这个输出可以在区块 900,000 之后"或"2027 年 1 月 1 日之后"被花费。时间或链历史中的特定时刻。
- **相对：**"这个输出在其被确认后 144 个区块（约 1 天）后可以被花费"或"上链后 30 天"。从输入成熟度开始计算的持续时间。

BIP-68 重新解释了交易输入中现有的 `nSequence` 字段来编码此信息。与配套的 [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv)（CSV）操作码（定义于 BIP-112）结合，脚本可以强制花费交易必须等待被花费输入确认后至少 N 个区块或秒。

相对锁定时间的使用场景：

- **[闪电网络](/glossary/lightning-network)通道。**撤销密钥惩罚机制使用 CSV：单方面关闭有延迟，关闭方在此延迟后才能花费其份额，给对手方时间用撤销来挑战作弊尝试。
- **金库构造。**用户控制的 UTXO 可以设计为提款需要延迟窗口，在此窗口内如果被入侵，警报脚本可以重定向资金。
- **Eltoo（提议）。**更简单的闪电通道状态模型，依赖相对锁定时间实现其对称设计。

BIP-65（CLTV / 绝对）和 BIP-68/112（CSV / 相对）共同构成比特币二层生态系统所依赖的基于时间的脚本工具包。参见 [Locktime](/glossary/locktime)了解交易字段视角。
