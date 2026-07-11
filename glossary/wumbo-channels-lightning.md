---
title: "Wumbo 通道（闪电网络）"
slug: wumbo-channels-lightning
draft: false
shortDefinition: "超过先前默认容量限制（约 0.1677 BTC）的闪电网络通道，允许更大容量以支持高 volume 交易。"
keyTakeaways:
  - "为高级用户或大流量闪电网络移除通道大小限制"
  - "需要通道双方明确启用 wumbo"
  - "更大金额处于风险中，因此闪电网络可靠性至关重要"
sources: []
relatedTerms:
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
liveWidget: ~
---

"Wumbo"通道是[闪电网络通道](/glossary/lightning-channel)，其[容量](/glossary/lightning-channel-capacity)超过原始默认限制 0.1677 BTC（16,777,215 聪——能用 3 字节表示的最大值，因此是上限）。

这个上限在闪电网络早期出于防御性原因存在：协议实现还很新，边缘情况理解不足，限制任何单个通道的敞口就限制了 bug 造成的最坏情况损失。随着实现成熟和通道处理代码经过审计，上限不再起保护作用，而变成了纯粹的摩擦。

"Wumbo"一词来自《海绵宝宝》中的梗（"I wumbo, you wumbo, he/she/me wumbo..."）。以卡通命名严肃基础设施的密码学传统依然坚挺。

Wumbo 支持于 2020 年左右在主要实现中到来。截至 2026 年，wumbo 基本上是通用的——问题很少是"你的节点支持 wumbo 吗"，而是"实际的上限是多少"。1+ BTC 的通道在路由运营者中很常见；主要的交易所间通道可以大得多。

Wumbo 启用了什么：

- **路由节点可以承载有意义的流动性。** 0.16 BTC 的限制使严肃的路由经济学不可能；5+ BTC 的通道更像真正的基础设施。
- **大额定期支付。** 交易所提现、商户付款、工资级别的流水。
- **无需通过 [AMP](/glossary/atomic-multi-path-payment-amp) 拆分的直接大额转账。** 一个大通道可以处理以前需要多路径支付的场景。

风险面并没有消失——更大的通道意味着 bug 或入侵的潜在损失更大。但闪电网络在 2026 年的审计成熟度使 wumbo 成为知道自己在做什么的运营者的合理默认。
