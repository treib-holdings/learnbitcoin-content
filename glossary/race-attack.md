---
title: "竞争攻击（Race Attack）"
slug: race-attack
draft: false
shortDefinition: "通过快速广播一笔冲突的、更高手续费的交易，尝试对零确认交易进行双花。"
keyTakeaways:
  - "通过发送冲突交易利用零确认接受"
  - "依赖矿工优先处理更高手续费或更快广播的交易"
  - "商户可通过要求确认或使用闪电网络支付来避免"
sources: []
relatedTerms:
  - double-spend
  - double-spend-relay
  - eavesdropping-attack
  - eclipse-attack
  - griefing-attack
  - jamming-attack-ln
  - reorg-reorganization
  - replay-attack
  - spv-simplified-payment-verification
liveWidget: ~
---

竞争攻击是对零确认交易的双花。攻击者快速连续发送两笔冲突交易：一笔给商户（或商户钱包对网络的视图），另一笔付给自己，第二笔被设计为在到矿工的竞争中获胜。

两种形式：

- 普通竞争攻击：大致同时向商户广播 tx-A，向网络其余部分广播 tx-B，希望矿工先看到 tx-B。
- RBF 式竞争：向商户广播 tx-A（标记 RBF），然后以更高手续费广播 tx-B。由于手续费替换是对替换的诚实机制，这不算真正的"攻击"，而是协议按文档工作；商户只是没等确认。

商户侧的缓解措施：

- 等至少一个确认。慢，但密码学上是正确答案。
- 使用闪电网络进行即时结算。闪电网络支付在第二跳级别立即最终，无零确认风险。
- 运行双花监控，监控内存池中的冲突交易并实时标记。降低但不消除风险。

许多商户仍对小金额接受零确认，因为攻击执行有一定难度（需要技术能力、较好的时机和低手续费的初始交易本身就是信号）。风险是真实的但实际发生率低。对于超过几美元的金额，等确认或使用闪电网络。
