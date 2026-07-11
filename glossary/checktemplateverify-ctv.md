---
title: "CheckTemplateVerify（CTV）"
slug: checktemplateverify-ctv
draft: false
shortDefinition: "BIP-119 提议的操作码，允许'模板契约'，限制输出在未来的交易中如何被花费。"
keyTakeaways:
  - "允许限制未来交易的形状（模板契约）"
  - "对金库或批量支付功能有潜在益处"
  - "因可能限制币的可替代性而存在争议"
sources: []
relatedTerms:
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - covenants
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

`OP_CHECKTEMPLATEVERIFY`（CTV）是 [BIP-119](/glossary/bip-119-ctv) 核心提议的比特币脚本操作码。其功能：强制花费交易与预先承诺的*模板*匹配——一组特定的输入、输出、序列和锁定时间。

CTV 在脚本层面的工作方式：

1. 当你为一个 UTXO 提供资金时，锁定脚本承诺一个交易模板的哈希值——"要花费此输出，花费交易的哈希必须等于值 H。"
2. 模板指定了诸如：有多少输出、什么金额、这些输出使用什么脚本、花费需要什么相对锁定时间等。
3. 当有人尝试花费时，CTV 根据该模板检查花费交易。如果匹配，允许花费。如果不匹配，拒绝。

这是一种向比特币添加[契约](/glossary/covenants)的具体方式。它有意受限：CTV 不允许脚本读取花费交易的*任意*属性，只能根据预计算的模板哈希进行检查。这种限制是 CTV 比一些替代方案表面积更小的部分原因。

如果激活后的实际应用：

- 具有强制多步提款路径的**金库**。
- 从一笔链上交易开启多个[闪电通道](/glossary/lightning-channel)的**通道工厂**。
- 用于高效批量处理多个接收者的**支付池**。
- 防止热钱包灾难性妥协的**冷存储保护**。

CTV 是正在讨论的多种契约设计之一。替代方案包括 OP_VAULT、OP_CAT（重新启用）、OP_CSFS、ANYPREVOUT（Eltoo 的原语）以及基于 Taproot 树的方法。不同提案在表达力、复杂性和未来灵活性方面有不同的权衡。

截至 2026 年，没有契约操作码被激活。更广泛的争论参见[契约](/glossary/covenants)，具体提案参见 [BIP-119](/glossary/bip-119-ctv)。
