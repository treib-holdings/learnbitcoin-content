---
title: "OP_RETURN"
slug: opreturn
draft: false
shortDefinition: "一种脚本操作码，允许在交易输出中包含任意数据，实际上使该输出不可花费。"
keyTakeaways:
  - "允许嵌入数据而不使代币可花费"
  - "通常限制在约 80 字节以节约链资源"
  - "用于公证、存在证明或有限的'染色币'数据"
sources: []
relatedTerms:
  - bitcoin-script
  - op-code-operation-code
  - opreturn-based-tokens
  - script
  - scriptless-scripts
liveWidget: ~
---

**OP_RETURN** 是一种[比特币脚本](/glossary/bitcoin-script)操作码，使其输出故意不可花费。"花费"路径是保证失败的，所以任何以 OP_RETURN 开头的输出立即从 UTXO 集中移除——给你一种在比特币交易中嵌入任意数据而不膨胀未花费输出数据库的方式。

基本结构：`OP_RETURN <data>`，其中 `<data>` 最多 80 字节（标准性限制）。输出的值通常为零或接近零聪。数据永远留在链历史中但不给 UTXO 集增加负担。

OP_RETURN 的用途：

- **存在证明/时间戳。** 哈希文档、嵌入哈希、之后证明文档在该区块高度之前存在。被 OpenTimestamps 等服务使用。
- **跨链承诺。** [Liquid](/glossary/liquid-network) 等侧链和 Counterparty 等协议在 OP_RETURN 输出中嵌入跨系统元数据。
- **第二层锚定。** 一些第二层协议通过 OP_RETURN 锚定状态承诺。
- **[Ordinals/铭文](/glossary/opreturn-based-tokens)（某种程度）。** 铭文技术上使用 Taproot 见证脚本而非 OP_RETURN，但数据嵌入问题在结构上相同，OP_RETURN 也被卷入辩论。

围绕 OP_RETURN 的社区辩论：

- **支持数据观点：** 链是为用户愿意付费的任何东西服务的。嵌入数据有合法用途（时间戳、侧链承诺等），费率市场处理滥用。
- **反对数据观点：** 比特币的主要目的是货币；非货币数据为所有人膨胀手续费、挤出合法金融交易，不应被中继或挖矿。一些节点（[Bitcoin Knots](/glossary/bitcoin-knots)）刻意从内存池中过滤此类交易。

两种立场都站得住脚；2024-2026 年的实时争论是*哪种*节点中继策略合适。协议本身接受 OP_RETURN；节点层面策略才是争论发生的地方。

请参阅[基于 OP_RETURN 的代币](/glossary/opreturn-based-tokens)了解早期代币实验用例。
