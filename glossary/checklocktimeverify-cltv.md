---
title: "CheckLockTimeVerify（CLTV）"
slug: checklocktimeverify-cltv
draft: false
shortDefinition: "一个操作码（OP_CLTV），允许交易输出在设定的区块高度或时间戳之前保持不可花费状态。"
keyTakeaways:
  - "将输出锁定到特定的未来区块/时间"
  - "适用于基于时间的合约或支付通道"
  - "与 OP_CSV 一起支持高级脚本功能"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bitcoin-script
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

**OP_CHECKLOCKTIMEVERIFY**（CLTV）是比特币脚本中在脚本内部执行[绝对锁定时间](/glossary/absolute-locktime)的操作码。它是交易级 [`nLockTime`](/glossary/nlocktime) 字段的脚本级对应物。

操作码语义：当 CLTV 执行时，它检查花费交易的 `nLockTime` 至少为特定值（CLTV 从堆栈中读取该值）。如果条件满足，脚本继续执行；如果不满足，花费失败。因此锁定脚本可以要求"要花费此输出，花费交易必须声明锁定时间 ≥ X"——有效地将输出锁定到该区块高度或时间戳。

CLTV 通过 [BIP-65](/glossary/bip-65-opchecklocktimeverify) 于 2015 年 12 月引入，是使高级比特币构造变得实用的脚本原语之一。常见用途：

- **[支付通道](/glossary/payment-channel)**——关闭脚本包含基于 CLTV 的延迟，以便在单方花费之前解决争议。
- **[HTLC](/glossary/htlc-hashed-time-locked-contract)**——基于时间的后备方案（"如果在区块 N 之前未揭示原像，发送方可以收回资金"）使用 CLTV。
- **[原子交换](/glossary/atomic-swap)**——跨链交易的超时退款。
- **金库构造**——冷存储安全的强制提款延迟。
- **遗产脚本**——继承人可以在长期不活动后认领资金。

CLTV 通过替换之前被禁用的 `OP_NOP2` 操作码来部署。这是通过软分叉添加新功能的标准比特币模式：取一个什么都不做的 NOP，重新定义它来做有用的事。不认识新含义的旧节点只看到 `OP_NOP2` 什么都不做——脚本对它们来说仍然成功，因此新规则是严格的额外限制，旧节点默认将其视为"有效"。

与 [`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv)（CSV）配对，后者通过 [BIP-68/112](/glossary/bip-68-relative-locktime) 提供相对锁定时间。两者一起构成了使闪电网络和许多其他二层设计成为可能的时间脚本工具包。
