---
title: "时间锁合约"
slug: time-locked-contract
draft: false
shortDefinition: "使用 CLTV（绝对时间）或 CSV（相对时间）来限制在特定区块/时间阈值之前不能花费的合约。"
keyTakeaways:
  - "使用 nLocktime、OP_CHECKLOCKTIMEVERIFY 或 OP_CHECKSEQUENCEVERIFY"
  - "实现延迟支付、通道安全或托管功能"
  - "确保在指定高度/时间到达之前不能花费"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - locktime
  - mtp-median-time-past
  - nlocktime
  - nsequence
liveWidget: ~
---

时间锁合约是任何使用时间作为花费条件的比特币脚本。比特币提供四种时间构建块：

- `nLockTime`（交易级绝对时间）：交易在特定区块高度或 Unix 时间戳之前无效。
- `nSequence`（输入级相对时间）：输入在父输出被确认后 N 个区块（或 N 个时间单位）之前无效。
- `OP_CHECKLOCKTIMEVERIFY`（CLTV，BIP 65）：脚本级检查，在允许花费之前强制执行绝对时间。
- `OP_CHECKSEQUENCEVERIFY`（CSV，BIP 112）：脚本级检查，强制执行自输出创建以来的相对时间。

两种脚本级操作码都使用中位时间过去（MTP，BIP 113）作为时间参考，使比较能抵抗矿工时间戳操纵。

实际应用无处不在：

- 闪电通道：HTLC 使用 CSV 来强制执行一个延迟窗口，在对方作弊时给另一侧时间广播惩罚交易。
- 金库：脚本中的"7 天后花费"分支让用户在被入侵的热密钥下恢复资金而不丢失。
- 继承：一个备用分支在主持有者 N 个月不活动后变为可被指定继承人花费。
- DLC（谨慎日志合约）：预言机证明的超时让双方在预言机不签名时能恢复资金。
- 原子互换和 submarine swap：超时分支让出资方在互换对手在认领前消失时能恢复资金。

时间锁是比特币最强大的原语之一。与多签和哈希锁花费路径结合，它们几乎是所有非平凡的链上或链下协议的基础。
