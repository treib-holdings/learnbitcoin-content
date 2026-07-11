---
title: "手续费狙击"
slug: fee-sniping
draft: false
shortDefinition: "矿工重组区块以收集更高交易手续费的假设场景，在区块补贴低时可能更常见。"
keyTakeaways:
  - "涉及重新挖出近期区块以获取更高手续费"
  - "在补贴后时代手续费占奖励主导时可能更可能发生"
  - "孤块的高风险阻止了广泛的狙击尝试"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - miner-extractable-value-mev
  - replace-fee-rbf
  - resource-exhaustion-attack
  - transaction
  - transaction-fee
liveWidget: ~
---

手续费狙击是一种理论挖矿策略，刚找到区块的矿工决定*不*在其之上构建，而是尝试重新挖出同一区块高度以获取高手续费交易。这是一种小众攻击，随着[区块补贴](/glossary/block-subsidy)减少、交易手续费成为矿工收入主导份额而变得更相关。

假设情况下如何运作：

1. 区块 N 被挖出，收集手续费比如 0.5 BTC。
2. 另一个矿工看到这些并计算："如果我重新挖区块 N 并使用相同交易集，我可以收集那 0.5 BTC 手续费。这比在现有区块上构建区块 N+1 的预期奖励更值。"
3. 他们尝试挖替代区块 N。如果在有人挖出 N+1 之前成功，网络可能重组到他们的链。

为什么这很少见且有风险：

- **需要大量算力**才能有实际机会超过现有区块。小矿工成功概率接近零。
- **失败成本。** 如果重新挖矿尝试失败（其他人先挖出 N+1），他们失去了本可以挖 N+1 的时间。机会成本。
- **声誉成本。** 可见的手续费狙击行为向其他矿工表明该运营商不可靠，可能使他们不太愿意协调。

已有的防御措施：

- **`nLockTime` 设为当前高度。** 现代钱包将交易锁定时间设为当前区块高度。这使这些交易对任何*更早*的区块无效，因此手续费狙击者不能将它们包含在同一高度的重新挖出区块中——只能在 N 或更后。
- **快速区块传播。** 通过[紧凑区块中继（BIP-152）](/glossary/bip-152-compact-blocks)在毫秒内传播新区块，竞争区块可被组装的窗口极小。

手续费狙击更多是一个开放的理论担忧而非当前问题。随着比特币接近手续费主导时代（2140 年后），数学变化，策略可能变得更有吸引力。社区知晓并持续关注。到目前为止，没有观察到案例。更广泛的策略类别参见[矿工可提取价值（MEV）](/glossary/miner-extractable-value-mev)。
