---
title: "CheckSequenceVerify（CSV）"
slug: checksequenceverify-csv
draft: false
shortDefinition: "用于相对锁定时间的操作码，使交易输出在确认后经过一定数量的区块或时间才能花费。"
keyTakeaways:
  - "在 UTXO 层面实现相对时间锁"
  - "用于支付通道和高级合约逻辑"
  - "需要在确认后等待指定的区块数或时间"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

**OP_CHECKSEQUENCEVERIFY**（CSV）是比特币脚本中在脚本内部执行[相对锁定时间](/glossary/bip-68-relative-locktime)的操作码。它是 [`OP_CHECKLOCKTIMEVERIFY`](/glossary/checklocktimeverify-cltv) 绝对时间对应的相对时间版本。

区别很重要：

- **CLTV（绝对）：** "此输出可以在区块 900,000 之后花费"——一个特定时刻。
- **CSV（相对）：** "此输出可以在该 UTXO 确认后 144 个区块（约 1 天）之后花费"——从 UTXO 进入链上时开始计算的持续时间。

CSV 通过 [BIP-112](https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki)（操作码）和 [BIP-68](/glossary/bip-68-relative-locktime)（底层 `nSequence` 语义）以及 [BIP-113](/glossary/bip-113)（基于时间延迟的中位时间过去）引入，于 2016 年 7 月作为[软分叉](/glossary/soft-fork)激活。

CSV 的关键应用场景：

- **[闪电网络](/glossary/lightning-network)通道关闭。** 当一方强制关闭通道时，其份额的资金会受到 CSV 延迟（通常 144-1008 个区块）的限制。在此窗口内，如果关闭方通过广播旧状态作弊，对手方可以发布撤销交易。
- **金库构造。** 提款可以被强制通过多步延迟，在此期间如果提款未经授权，报警脚本可以重定向资金。
- **Eltoo（提案）。** 将使用 CSV 实现其简化的状态替换模型。
- **HTLC 超时。** 一些 HTLC 变体使用基于 CSV 的超时，锚定到 HTLC 的广播时间而非挂钟时间。

CSV 与 CLTV 配对，就像相对时间与绝对时间配对。两者一起使比特币的二层生态系统成为可能。底层 `nSequence` 语义参见 [BIP-68](/glossary/bip-68-relative-locktime)，绝对时间对应物参见 [CLTV](/glossary/checklocktimeverify-cltv)。
