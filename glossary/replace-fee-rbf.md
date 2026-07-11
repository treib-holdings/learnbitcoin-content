---
title: "手续费替换（Replace-by-Fee，RBF）"
slug: replace-fee-rbf
draft: false
shortDefinition: "一种机制，允许发送方以更高手续费重新广播未确认交易，替换内存池中的原始交易。"
keyTakeaways:
  - "允许对未确认交易进行手续费加价"
  - "在内存池拥堵时增强用户控制"
  - "降低零确认支付的可靠性"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - delayed-justice-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - transaction
  - transaction-fee
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - "https://bitcoinops.org/en/topics/replace-by-fee/"
liveWidget: ~
---

手续费替换（RBF）是一种[内存池](/glossary/mempool)策略，允许发送方以更高[手续费](/glossary/fee-estimation)重新广播卡住的[交易](/glossary/transaction)，替换原始交易。

由 [BIP-125](/glossary/bip-125-replace-fee) 定义，可选 RBF 的工作方式：原始交易通过设置低于最大值的 `nSequence` 来信号可替换。如果拥堵使你的交易停滞，你可以构建一笔新交易：

- 花费至少一个相同的 UTXO。
- 支付比原始交易更高的绝对手续费。
- 支付比原始交易更高的手续费*率*。

遵循 BIP-125 的节点会从内存池中丢弃旧交易并接受新交易。矿工寻找最高手续费率，更有可能捡起你的新交易。

RBF 给你带来什么：

- **从手续费低估中恢复。** 你在平静期算错了手续费，结果遇到拥堵；加价继续。
- **紧急程度变化时加快确认。** 你本来需要便宜确认，突然需要立即确认。

代价：

- **零确认可靠性。** 看到"内存池中未确认"的接收方不能再假设交易不会被替换。RBF 信号交易明确承认这一点。（非 RBF 交易历史上曾有更强的零确认保证，但参见 [Full RBF](/glossary/full-rbf) 了解为何这些保证正在侵蚀。）

大多数现代钱包默认启用 RBF 交易。一些接受零确认支付的商户要求非 RBF 交易或直接等第一个确认。参见 [Fee Bumping](/glossary/fee-bumping) 了解更广泛的概念（RBF 是一种方法；CPFP 是另一种）。
