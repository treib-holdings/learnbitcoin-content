---
title: "专用 IP（节点）"
slug: dedicated-ip-nodes
draft: false
shortDefinition: "在唯一、静态的 IP 地址上运行比特币节点，提高连接性但可能暴露你的身份或位置。"
keyTakeaways:
  - "允许稳定的入站连接，提升节点实用性"
  - "可能暴露你的位置或身份"
  - "替代方案：通过 Tor/VPN 运行以权衡隐私"
sources: []
relatedTerms:
  - asmap
  - bitcoin-satellite
  - i2p-invisible-internet-project
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

比特币节点的"专用 IP"意味着在稳定、公开、可达的 IP 地址上运行——一个不变且不在 NAT（网络地址转换）或动态住宅 IP 后面的地址。使用专用 IP，你的节点可以接受来自对等方的*入站*连接，这使它对网络更有用，但可见性也更高。

权衡：

**对网络而言：** 更多可达入站的节点 = 更强的整体网络韧性。比特币 gossip 层受益于健康数量的监听节点；只做出站连接的节点仍在验证，但不直接中继给寻找新对等方的其他节点。

**对你而言：** 在专用 IP 上运行使你的节点可识别。任何扫描网络的人都能看到你的 IP、软件版本、连接模式。如果该 IP 与个人身份信息（你的家庭地址、你的企业、你的名字）关联，你的比特币活动更难保持隐私。

选择梯度：

- **专用公共 IP，明网。** 最大化网络实用性，最小化隐私。适合企业、面向公众的服务、专用中继运营商。
- **反向代理后的专用 IP。** 公共 IP 但在第三方基础设施上（VPS、专用服务器）。用服务提供商可见性换取家庭 IP 暴露。
- **[Tor](/glossary/tor-hidden-service) onion 服务。** 不暴露明网 IP；通过 `.onion` 可达。性能开销比你想的小；隐私增益有意义。
- **NAT 后，仅出站。** 你的节点连接到他人但不接受入站。对网络用处较小，但不暴露你的 IP 给扫描。

对于大多数自托管用户，正确的答案是"NAT 后的 Tor（或 I2P）"——你只通过 onion 接受入站，真实 IP 不直接暴露。对于有面向公众服务的商业运营商，专用公共 IP 是默认选择。两者都有效；选择映射到你的威胁模型。

最常见的隐私保护替代方案参见 [Tor 隐藏服务](/glossary/tor-hidden-service)，无论入站模型如何的出站连接多样化参见 [Asmap](/glossary/asmap)。
