---
title: "手续费加价"
slug: fee-bumping
draft: false
shortDefinition: "在交易广播后提高其优先级，通常通过 Replace-by-Fee（RBF）或 Child-Pays-for-Parent（CPFP）。"
keyTakeaways:
  - "防止交易以低手续费在内存池中滞留"
  - "RBF 替换原始交易；CPFP 使用子交易"
  - "现代比特币钱包广泛支持的功能"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

手续费加价是你的[交易](/glossary/transaction)卡住时你要做的操作。[内存池](/glossary/mempool)中的交易多于接下来几个区块能容纳的，矿工优先选手续费高的，你的交易优先级太低。两种机制让你在广播后提高有效手续费：

**Replace-by-Fee（RBF）。** 以更高手续费重新广播同一笔交易，替换内存池中的原始交易。定义在 [BIP 125](/glossary/bip-125-replace-fee) 中，现在大多数钱包默认可选择开启。要求原始交易标记 RBF（或者，使用 **full-RBF**，不要求——运行 full-RBF 的节点无论如何都接受替换）。

**Child-Pays-for-Parent（CPFP）。** 不动卡住的交易。而是花费其一个未确认输出到一笔新的"子"交易，手续费足以覆盖自身和父交易的不足。矿工有经济激励包含两者——子交易只有在父交易确认时才确认。当你无法 RBF（原始未标记，或你不控制所有输入）但你控制一个输出时有用。

大多数现代钱包通过"加价"按钮为你处理这个。实际决策树：

- **你是发送方，RBF 已标记** → RBF（更干净，原地替换）。
- **你是卡住入账交易的接收方** → CPFP，将未确认输出花给自己。
- **发送方，RBF 未标记** → 如果你有可花费的输出则 CPFP，否则等待。

避免一开始就需要这个参见[手续费估计](/glossary/fee-estimation)。
