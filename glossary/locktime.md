---
title: "锁定时间"
slug: locktime
draft: false
shortDefinition: "比特币交易中的一个字段，指定交易可被包含在区块中的最早区块高度或时间戳。"
keyTakeaways:
  - "充当'在此日期或区块高度之前不要确认'的角色"
  - "常与基于时间的操作码一起用于托管/支付通道"
  - "nLocktime 设为 0 表示交易立即可用"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-payment-channel
  - nlocktime
  - nsequence
  - payment-channel
  - time-locked-contract
liveWidget: ~
---

锁定时间是每笔比特币[交易](/glossary/transaction)中的一个字段（技术上称为 `nLockTime`），指定交易可被包含在区块中的最早时刻。在该阈值通过之前，[节点](/glossary/node)拒绝该交易。

该字段根据值有两种解释：

- **小于 500,000,000：** 解释为**区块高度**。交易只能在等于或高于该高度的区块中确认。
- **500,000,000 或更大：** 解释为 **Unix 时间戳**。交易只能在当前网络时间（具体来说，最近 11 个区块的中位时间）等于或晚于该时间戳时确认。

如果锁定时间为 0（大多数钱包的默认值），交易立即可用并可在下一个区块中确认。

在哪些场景重要：

- **[支付通道](/glossary/payment-channel)和[闪电网络](/glossary/lightning-network)。** 通道承诺交易使用锁定时间来执行争议期间的提款延迟。
- **托管和定时释放。** 交易可以预签名但不广播（或广播但不可挖矿），直到特定的未来区块或日期。
- **[手续费狙击](/glossary/fee-sniping)预防。** 许多现代钱包在构建交易时将锁定时间设为当前区块高度。这阻止了一种矿工故意重组以捕获旧高费交易的攻击。

对于更复杂的基于时间的逻辑，锁定时间与 [CHECKLOCKTIMEVERIFY](/glossary/checklocktimeverify-cltv) 操作码（让脚本自己检查锁定时间）以及相关的 [CSV](/glossary/checksequenceverify-csv) / [nSequence](/glossary/nsequence) 字段（提供*相对*而非绝对计时）协同工作。

请参阅[绝对锁定时间](/glossary/absolute-locktime)了解更广泛的概念，[nLocktime](/glossary/nlocktime)了解字段级别的同义词。
