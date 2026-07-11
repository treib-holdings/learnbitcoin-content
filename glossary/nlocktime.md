---
title: "nLocktime"
slug: nlocktime
draft: false
shortDefinition: "一个字段，指定交易可被确认的最早区块高度或时间戳。"
keyTakeaways:
  - "在某个区块/时间之前阻止确认"
  - "被高级脚本用于定时释放或托管"
  - "零或过去的值意味着立即可用"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - delayed-justice-transaction
  - locktime
  - mtp-median-time-past
  - nsequence
  - time-locked-contract
  - transaction
liveWidget: ~
---

`nLocktime` 是比特币[锁定时间](/glossary/locktime)字段的协议级名称——每笔交易中的 32 位值，指定交易可被包含在区块中的最早区块高度或 Unix 时间戳。

`n` 前缀是中本聪原始 C++ 代码的遗留，其中整数字段通常以 `n` 开头。你会在源代码、BIP 和协议文档中看到它；在交流中，人们只说"locktime"。

值语义：

- **0**——立即可用（默认）。
- **1 至 499,999,999**——解释为区块高度。
- **500,000,000 及以上**——解释为 Unix 时间戳（自纪元以来的秒数）。

`nLocktime` 与每个输入的 `nSequence` 字段配对。如果每个输入的 `nSequence` 都是 `0xffffffff`，`nLocktime` 被*忽略*——无论字段值如何，交易被视为没有时间锁。将任何 `nSequence` 设为低于最大值使 `nLocktime` 可执行。
