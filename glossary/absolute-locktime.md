---
title: "绝对锁定时间"
slug: absolute-locktime
draft: false
shortDefinition: "一种引用特定区块高度或时间戳的约束，用于限制交易或脚本在何时才能被有效执行。"
keyTakeaways:
  - "限制在特定时间或区块高度之前无法花费"
  - "通过 nLocktime 或 OP_CLTV（BIP-65）实现"
  - "支持托管和时间延迟支付功能"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

绝对锁定时间意味着一笔交易或脚本只有在特定的日历时刻之后才可花费——可以是区块高度或 Unix 时间戳。这就是"从 UTC 时间 12 月 1 日午夜起才能被打包"的模式。

比特币通过两种方式实现绝对锁定时间：

- **交易级 [`nLockTime`](/glossary/nlocktime) 字段。** 防止整笔交易在阈值之前被打包。适用于你已预签名一笔交易但想延迟其生效时间的场景。
- **脚本级 `OP_CHECKLOCKTIMEVERIFY`（CLTV）操作码**，定义于 [BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki)。允许 [Bitcoin Script](/glossary/bitcoin-script) 要求花费交易的锁定时间至少为某个值，直接嵌入 UTXO 的锁定脚本中。

与**相对**锁定时间（通过 `nSequence` 和 [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv) / CSV 实现）的区别在于"之后"的锚点是什么：

- **绝对：**"区块 900,000 之后"或"2027 年 1 月 1 日之后"。以墙上时钟或链高度为参考。
- **相对：**"自该 UTXO 被确认后经过 144 个区块"或"确认后 1 天"。从输入的确认时间开始计算的延迟。

当你有特定的日期或高度时用绝对锁定时间。用于 UTXO 存在*之后*才触发的延迟时用相对锁定时间。

绝对锁定时间与相对锁定时间的组合是[支付通道](/glossary/payment-channel)和[闪电网络](/glossary/lightning-network)的构建基础之一。 practical view。
