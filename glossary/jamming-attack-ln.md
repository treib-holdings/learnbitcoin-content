---
title: "阻塞攻击（闪电网络）"
slug: jamming-attack-ln
draft: false
shortDefinition: "恶意行为，通过挂起永不完成的 HTLC 来锁定闪电网络通道流动性，阻碍正常路由。"
keyTakeaways:
  - "通过将 HTLC 保持在挂起状态来恶意阻塞闪电通道"
  - "破坏诚实用户的支付路由能力"
  - "前置费用或启发式规则等策略旨在减少阻塞"
sources: []
relatedTerms:
  - eavesdropping-attack
  - griefing-attack
  - htlc-hashed-time-locked-contract
  - jammed-htlc-detector
  - lightning-network
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
  - race-attack
  - replay-attack
liveWidget: ~
---

对[闪电网络](/glossary/lightning-network)的阻塞攻击是指攻击者故意通过发起设计好在最后一刻失败的支付来占用通道流动性——将 [HTLC](/glossary/htlc-hashed-time-locked-contract) 锁定在挂起状态直到超时。攻击者不损失资金（支付会回退），但在阻塞窗口期间，通过这些通道的合法支付无法通过。

攻击机制：

1. 攻击者沿着目标路由发起[闪电支付](/glossary/lightning-payment)，使用伪造或不可赎回的[支付哈希](/glossary/htlc-invoice)。
2. 路由上的每一跳将相关通道容量锁定在挂起的 HTLC 中。
3. 支付无法完成（接收方无法提供他们没有的原像）。
4. HTLC 保持锁定直到超时——通常几十分钟到几小时。
5. 在锁定期间，试图通过这些通道路由的合法用户看到"容量不足"的失败。

变体：

- **慢速阻塞。** 使用许多小额 HTLC 来耗尽通道的 *HTLC 数量*限制（每个通道方向通常 483 个在途 HTLC）。通道在 HTLC 槽位方面达到容量，而非 BTC 方面。
- **快速阻塞。** 使用较大的 HTLC 来耗尽 BTC 容量。
- **定向阻塞。** 攻击特定路由以干扰竞争对手或获取其他运营优势。

正在研究和部署的防御措施：

- **前置费用。** 使路由尝试产生一定成本（小但非零），让阻塞有真实成本。在闪电网络社区讨论多年；部署是渐进的。
- **声誉系统。** 节点跟踪频繁发起未完成支付的对等方，并降级或断开这些连接。
- **通道阻塞检测器。** 实时监控 HTLC 模式以识别可能的攻击。请参阅[HTLC 阻塞检测器](/glossary/jammed-htlc-detector)。

阻塞是闪电网络中尚未解决的安全问题之一。不是理论性的——已在野外观察到——但也不是灾难性的。防御措施在改进。协议在加固。猫鼠游戏仍在继续。
