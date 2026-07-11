---
title: "nSequence"
slug: nsequence
draft: false
shortDefinition: "最初用于部分交易更新，被 BIP 68 重新用于在 OP_CSV 脚本中强制相对锁定时间。"
keyTakeaways:
  - "从部分替换机制转变为相对锁定时间指示器"
  - "BIP 68 + OP_CSV 使用 nSequence 实现高级通道逻辑"
  - "对需要基于时间输出的第二层解决方案至关重要"
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
  - nlocktime
  - time-locked-contract
  - transaction
liveWidget: ~
---

`nSequence` 是比特币中每个[交易输入](/glossary/input-transaction-input)的 32 位字段。最初在比特币最早的设计中用作部分替换机制，后来被 [BIP-68](/glossary/bip-68-relative-locktime) 重新利用（并作为 [BIP-125 RBF](/glossary/replace-fee-rbf) 的信号）编码：

- **相对锁定时间。** 低 16 位编码自输入 UTXO 确认以来的区块数或时间延迟。
- **类型标志。** 第 22 位选择基于区块还是基于时间的解释。
- **禁用标志。** 第 31 位设置时禁用该输入的相对锁定时间强制。
- **RBF 信号。** 任何低于 `0xfffffffe` 的 `nSequence` 值信号 [BIP-125](/glossary/replace-fee-rbf) 选择性加入 RBF。

当前默认值是 `0xfffffffd`（启用 BIP-125 RBF 信号）或 `0xffffffff`（无相对锁定时间，无 RBF 信号），取决于钱包。

语义在用户实际遇到的几种情况中重要：

- **支持 RBF 的钱包**将 `nSequence` 设为 `0xfffffffd`，使交易可通过 [BIP-125](/glossary/replace-fee-rbf) 替换。
- **使用相对锁定时间的交易**（如闪电通道承诺交易中的 CSV 延迟）在相关输入中设置适当的 `nSequence` 值。
