---
title: "Tor 隐藏服务"
slug: tor-hidden-service
draft: false
shortDefinition: "通过 Tor 托管比特币节点或服务，隐藏真实 IP 地址，增强隐私和抗审查能力。"
keyTakeaways:
  - "隐藏节点位置，阻止直接 IP 关联"
  - "对匿名性很重要，可避免某些 ISP 或国家级封锁"
  - "由于 Tor 的分层加密和中继跳转，可能较慢"
sources: []
relatedTerms:
  - hidden-service-node
  - i2p-invisible-internet-project
  - json-rpc-over-tor
  - lightning-node
  - onion-routing-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Tor_(network)"
  - "https://www.wikidata.org/wiki/Q202044"
  - "https://en.wikipedia.org/wiki/.onion"
  - "https://www.wikidata.org/wiki/Q848715"
  - "https://en.bitcoin.it/wiki/Setting_up_a_Tor_hidden_service"
liveWidget: ~
---

Tor 隐藏服务——现在官方称为**洋葱服务**——是一个只能通过 Tor 网络访问的网络端点，以 `.onion` 地址标识。端点的真实 IP 位置对用户和整个互联网都是隐藏的。

对于[比特币节点](/glossary/node)，作为 Tor 洋葱服务运行提供：

- **网络层隐私。** 你的真实 IP 不出现在对等节点列表中，链上分析公司扫描 gossip 网络时看不到，也不会被其他节点运营者记录。
- **抗审查。** 试图封锁比特币的政府或 ISP 可以封锁 IP 段，但封锁 Tor 本身难得多（而且跨越了更高的政治红线）。
- **防止[窃听攻击](/glossary/eavesdropping-attack)。** 没有你的 IP，观察者很难将你的广播与物理位置或身份关联。
- **防止[日食攻击](/glossary/eclipse-attack)。** Tor 的随机电路选择使攻击者更难预测或定向你的特定出站对等节点。

代价是延迟。Tor 由于三跳中继结构，在正常互联网路由上增加约 200-500 毫秒往返时间。对比特币的需求——每约 10 分钟传播一次区块，交易在几秒内传播——这种延迟实际上不可见。通过 Tor 的区块和交易传播工作正常。

Bitcoin Core 自 2014 年起就内置了一流 Tor 支持。在节点后运行 Tor 只需一个配置文件改动（`proxy=127.0.0.1:9050` 加几个相关选项）。许多一体化节点产品（Umbrel、Start9、RaspiBlitz）默认启用 Tor。同样的隐藏服务模式也可以暴露[远程管理 RPC](/glossary/json-rpc-over-tor)，让你从任何地方控制家里的节点而无需开放任何防火墙端口。

对于运行[全节点](/glossary/full-node)的自托管用户，通过 Tor 运行是你在网络层能做的最大的隐私升级。强烈推荐给任何关心链上活动与家庭 IP 关联的人。
