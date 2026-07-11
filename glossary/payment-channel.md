---
title: "支付通道（Payment Channel）"
slug: payment-channel
draft: false
shortDefinition: "一种链下机制（如闪电网络），允许两方之间反复交易而无需每次都上链。"
keyTakeaways:
  - "支持频繁交易而无需多次链上手续费"
  - "使用多签输出，仅在开启/关闭时在链上结算"
  - "构成二层扩展（如闪电网络）的基础"
sources: []
relatedTerms:
  - delayed-payment-channel
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - locktime
  - submarine-swap
liveWidget: ~
---

支付通道是两方将比特币锁定在一个共享的链上输出中，然后在彼此之间交换已签名的余额更新——链下进行——而不广播每一笔。链上只看到两笔交易——一笔开启、一笔关闭——而中间可能发生数千笔转账。

这个机制解决了比特币的扩展性权衡。链上，每笔支付消耗区块空间，确认需要约 10 分钟，还要付手续费。通道内链下，每笔支付即时，链上零成本，通过密码学而非[工作量证明](/glossary/proof-work-pow)链来执行。

支付通道的最小构建块：

1. **一个 2-of-2 多签输出**锁定双方资金，用一笔链上[交易](/glossary/transaction)开启。
2. **承诺交易**——已签名但未广播的交易，每笔代表当前的余额分配。每次新转账创建一个新承诺，取代前一个。
3. **撤销机制**使广播旧承诺（对自己有利的）受到严厉惩罚。没有这个，各方可以通过回退到自己更喜欢的状态来作弊。
4. **超时机制**确保如果一方离线，另一方不会被永久困住。

闪电网络的具体实现使用 [HTLC](/glossary/htlc-hashed-time-locked-contract) 和非对称撤销密钥使其无需信任。参见 [Lightning Channel](/glossary/lightning-channel) 了解闪电网络的具体细节。

其他支付通道设计也存在或已被提出——**Eltoo** 是一个值得注意的提案，使用 `SIGHASH_ANYPREVOUT` 简化通道状态模型，需要软分叉。截至 2026 年，BOLT 规范的闪电通道设计是实际大规模部署的方案。

支付通道是比特币在不扩大基础链的情况下实现扩展的方式。[闪电网络](/glossary/lightning-network)是这一思想的实际实现。
