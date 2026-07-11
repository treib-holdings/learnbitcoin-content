---
title: "BIP 125（费用替换）"
slug: bip-125-replace-fee
draft: false
shortDefinition: "允许发送方用更高费率的版本替换未确认交易，以加速确认。"
keyTakeaways:
  - "支持对未确认交易进行手续费提升"
  - "改善网络拥堵时的确认速度"
  - "影响实时支付的零确认假设"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 125 规定了可选的费用替换（RBF）：一笔交易通过将至少一个输入的 `nSequence` 设为小于 `0xfffffffe` 的值来信号其可被替换。遵守该信号的钱包和矿工随后接受满足特定策略规则的替换交易。

替换必须满足的五个"BIP 125 条件"：

1. 替换交易支付比原始交易更高的绝对手续费。
2. 替换交易支付更高的费率（每 vbyte 聪数）。
3. 替换交易至少支付最低增量中继费。
4. 替换交易不添加原始交易中不可见（未确认）的输入。
5. 替换交易最多驱逐 100 笔交易（包括后代）。

这是可选 RBF，是 Bitcoin Core 0.12（2016 年）到 23.x 版本的默认行为。可选妥协是 2016 年的让步：希望继续接受零确认支付的商户可以拒绝接受 RBF 标记的交易，而想要手续费提升能力的用户可以选择加入。

2024 年，Bitcoin Core 28.0 将默认改为全量 RBF：每笔未确认交易无论 `nSequence` 信号如何都可替换。最终获胜的理由：零确认从未真正安全（参见[竞态攻击](/glossary/race-attack)），所以可选妥协在保护一个不存在的安全模型。依赖零确认的商户迁移到闪电网络或开始要求确认。

现在的实践：每个现代钱包都支持 RBF，每个现代节点都会中继全量 RBF 替换，"我忘了设足够高的手续费"不再是卡住的交易。一键提升手续费即可。

规范：[BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki)。
