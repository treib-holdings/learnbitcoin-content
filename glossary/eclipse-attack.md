---
title: "日食攻击"
slug: eclipse-attack
draft: false
shortDefinition: "一种网络层攻击，将节点与诚实对等方隔离，并向其提供被操纵的区块链视图。"
keyTakeaways:
  - "切断节点与诚实对等方的连接，控制其整个网络视图"
  - "使操纵区块/交易数据进行双花成为可能"
  - "通过对等方多样化和稳健的节点配置来缓解"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - i2p-invisible-internet-project
  - node
  - race-attack
  - replay-attack
  - resource-exhaustion-attack
  - tor-hidden-service
sameAs:
  - "https://bitcoinops.org/en/topics/eclipse-attacks/"
liveWidget: ~
---

日食攻击是攻击者垄断目标[节点](/glossary/node)的所有对等连接，将其与诚实网络隔离并向其提供伪造链视图的情况。被日食的节点可以被欺骗接受无效区块、错过真实区块，或将已撤销的交易视为已确认。

机制：

1. 攻击者在廉价 VPS 基础设施上创建大量女巫对等身份。
2. 他们操纵目标节点的[对等发现](/glossary/peer-discovery)过程——用他们自己的对等地址淹没、耗尽其连接槽，或利用对等方被驱逐和替换方式的弱点。
3. 最终，目标的所有出站连接都指向攻击者控制的对等方。
4. 攻击者现在可以向目标展示他们想要的任何链版本。

日食攻击可以实现什么：

- **对受害者的双花。** 攻击者接受受害者的支付，让其在被日食的假链上看到确认，然后提供商品/服务——而在真实链上，交易实际上从未发生。
- **扣留真实区块。** 让受害者相信链停滞了。
- **强制链重组**（仅针对受害者的视图），通过在分叉之间切换。

为什么日食在实践中很难：

- **Bitcoin Core 认真对待对等方多样性。** 对等选择算法尝试使用 [asmap](/glossary/asmap) 拓扑数据将连接分散到不同 IP 范围。
- **出站连接受保护。** 即使所有入站槽被攻击者占据，到随机发现对等方的出站连接通常会打破日食。
- **通过 [Tor](/glossary/tor-hidden-service) 运行**使针对你特定节点的定位更加困难。

最初的学术比特币日食攻击论文（Heilman 等人，2015 年）演示了该技术。Bitcoin Core 此后发布了多个缓解措施。配置良好且对等方多样化的节点很难被日食，但配置较少的默认设置节点仍然是可行目标。此处重要的防御设置参见[全节点](/glossary/full-node)。
