---
title: "I2P（隐形互联网项目）"
slug: i2p-invisible-internet-project
draft: false
shortDefinition: "类似于 Tor 的匿名网络，允许比特币节点私密通信。"
keyTakeaways:
  - "另一个去中心化匿名网络，类似 Tor"
  - "比特币节点使用较少但提供类似隐私好处"
  - "可以减少 IP 级监控或流量关联"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - eavesdropping-attack
  - eclipse-attack
  - hidden-service-node
  - node
  - node-operator
  - onion-routing-lightning
  - tor-hidden-service
liveWidget: ~
---

I2P（隐形互联网项目）是 [Tor](/glossary/tor-hidden-service) 的替代匿名网络。它通过志愿者中继网络路由流量，使用"大蒜路由"（一种将多条消息捆绑在一起的多层洋葱路由变体）来模糊发送者和目的地之间的路径。

Bitcoin Core 自版本 22（2021 年）起支持 I2P 作为对等传输。对于[节点](/glossary/node)运营者，这意味着对等方可以在 Tor `.onion` 和明网 IP 地址之外广告 I2P 地址（以 `.i2p` 结尾或格式化为 base32 目的地）。网络跨所有可用传输发现并连接对等方。

I2P vs Tor 用于比特币：

- **不同威胁模型。** Tor 优化为浏览式流量的低延迟匿名。I2P 优化为高通量点对点应用。比特币在中间；两者都可用。
- **I2P 用户群更小。** Tor 全球有更多中继和出口节点。I2P 的比特币连接性是真实的但更薄。
- **不同攻击面。** Tor 和 I2P 有不同的已知弱点和针对资源充足对手的不同威胁模型。两者都运行（多跳冗余）比仅运行任一更防御性。

对于大多数比特币节点运营者，Tor 是更实际的隐私选择，纯粹因为生态成熟度。I2P 是纵深防御的合理次要选项，特别适用于想要避免专门依赖 Tor 网络的运营者。

一般原则：通过任何匿名网络运行比特币节点比在静态住宅 IP 上运行显著更好。Tor 或 I2P 或两者——边际隐私好处很大。
