---
title: "HTLC 阻塞检测器"
slug: jammed-htlc-detector
draft: false
shortDefinition: "一种工具或节点功能，用于识别正在进行的闪电网络通道阻塞，让运营者采取补救措施。"
keyTakeaways:
  - "监控 HTLC 活动以发现可疑模式"
  - "帮助闪电网络节点对抗通道拥堵攻击"
  - "可能触发通道关闭或对等方拉黑作为反制措施"
sources: []
relatedTerms:
  - eavesdropping-attack
  - htlc-preimage-manager
  - jamming-attack-ln
  - lightning-network
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

HTLC 阻塞检测器是一种节点端机制，用于监视暗示[闪电阻塞攻击](/glossary/jamming-attack-ln)的模式，并采取防御行动——通常标记违规对等方、限制其未来的路由请求，或在极端情况下强制关闭通道。

检测器实际关注的内容：

- **单个对等方高 HTLC 槽位占用**且无成功结算。
- **快速连续发起的许多小额 HTLC**——阻塞攻击的槽位耗尽变体。
- **长时间挂起的 HTLC**没有进展。
- **特定路由或对等方的失败率飙升。**
- **不对称的进出模式**，暗示蓄意的流动性锁定。

现代闪电网络实现包含各种启发式规则。LND 的"断路器"模式、Core Lightning 的基于插件的监控以及 Charge-LND 等第三方工具都可以配置来检测和响应类似阻塞的模式。

难题在于：区分真实阻塞与以下诚实模式：

- 钱包以指数退避方式重试支付。
- 触及许多通道的小额 HTLC 的多路径支付（AMP）。
- 来自诚实[路由探测](/glossary/lightning-probe)的探测流量。
- 拥堵时段的一般支付失败。

误报——在试图防御阻塞时阻止了诚实支付——是激进检测的真实代价。检测逻辑必须足够保守，以免破坏合法用户的闪电网络体验。

随着闪电网络成熟，检测器变得越来越精密和标准化。它们是对抗阻塞的一部分答案，而非全部答案；完整的解决方案可能结合检测、前置费用和声誉系统。
