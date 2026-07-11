---
title: "Full RBF"
slug: full-rbf
draft: false
shortDefinition: "使所有未确认交易默认可替换的提案，在拥堵内存池中简化手续费加价。"
keyTakeaways:
  - "使手续费更新更简单和普遍"
  - "阻止对零确认交易的依赖"
  - "在商户和节点运营者中热烈辩论"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-node
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Full RBF 意味着[节点](/glossary/node)接受未确认[交易](/glossary/transaction)的任何手续费加价替换——无论原始交易是否标记了 [BIP-125 可选 RBF](/glossary/replace-fee-rbf)。换言之，*所有*未确认交易都被视为可替换。

Bitcoin Core 从 v24（2022 年底）开始可选启用 full RBF 行为，在 v26（2023 年底）设为默认。到 2026 年，大部分节点网络运行 full RBF，意味着"未标记交易不会被替换"的实际保证不再成立。

**支持** full RBF 的论点：

- 简化手续费策略。钱包实现不再需要跟踪或关心 RBF 标记位。
- 反映底层现实。矿工总是*可以*挖出支付更多的冲突交易；可选 RBF 是中继层的礼貌，不是共识规则。
- 改善需要加费的发送方用户体验。

**反对**论点：

- 进一步侵蚀[零确认](/glossary/double-spend)支付。依赖"我在内存池中看到了"进行即时结算的商户必须等待一次确认或接受替换尝试的风险。
- 将"这是否安全？"的负担转移到商户和交易所，他们必须等待确认。

2026 年的务实格局：零确认一直安全性弱；full RBF 只是使弱点明显化了。即时支付的实践答案是[闪电网络](/glossary/lightning-network)，它是真正即时和最终的。对于链上，等待一次确认。基于"大多数人不会 RBF 所以我信任未确认交易"的时代正在终结。

可选 RBF 参见[Replace-by-Fee（RBF）](/glossary/replace-fee-rbf)。
