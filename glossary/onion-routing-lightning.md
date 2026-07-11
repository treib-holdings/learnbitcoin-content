---
title: "洋葱路由（闪电网络）"
slug: onion-routing-lightning
draft: false
shortDefinition: "闪电网络的隐私技术，使用加密层使每个路由跳只知道下一跳，隐藏完整路径。"
keyTakeaways:
  - "每个节点剥离一层，转发到下一跳"
  - "保护闪电支付路由中的发送方和接收方身份"
  - "以 Tor 的洋葱加密概念为模型"
sources: []
relatedTerms:
  - eavesdropping-attack
  - gossip-protocol-lightning
  - i2p-invisible-internet-project
  - lightning-network
  - lightning-node
  - lightning-routing
  - lightning-sphinx
  - tor-hidden-service
liveWidget: ~
ogImage: "/diagrams/og/onion-routing.png"
ogImageAlt: "A frame from LearnBitcoin's onion routing animation. Bob (highlighted in orange) is peeling the outermost layer of a three-ring onion with an orange preimage payload at its center. A 'knows: prev = Alice, next = Carol / nothing else' callout sits above the onion, with the caption 'Bob sees: forward to Carol. Nothing else.' below it. Visualizes Lightning onion routing: each hop sees only its own layer."
---

<figure>
  <video
    src="/videos/onion-routing.mp4"
    poster="/videos/posters/onion-routing.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated walkthrough of Lightning's Sphinx onion routing protocol. Alice constructs a four-layer onion inside out: an orange preimage payload for Dave at the center, then a wrap for Eve, a wrap for Carol, and an outermost wrap for Bob. Each route node flashes orange as Alice writes its layer. The onion travels Alice to Bob; Bob peels his outer layer with a callout 'knows: prev = Alice, next = Carol, nothing else.' Then Carol peels, then Eve peels, each with their own privacy callout showing what they can and cannot see. Dave receives just the payload and reveals the preimage. Closes with the pillars 'Onion routing. The privacy is the peeling.'"
  ></video>
  <figcaption>三个中间跳，三层包装。每个节点只看到自己的层。</figcaption>
</figure>

洋葱路由是[闪电网络](/glossary/lightning-network)使用的隐私技术，使中间路由节点不知道支付正在走的完整路径。每个路由跳只知道前一跳和下一跳，不知道原始发送方或最终接收方。

机制：发送钱包将支付指令包装在嵌套的加密层中，像洋葱一样。每个路由节点解密（剥离）一层以了解下一步转发到哪里，但无法看到洋葱更深处。转发后，节点只知道"我从 X 收到了这个，转发给了 Y"——不知道链的任何一端是谁。

这与 **Tor** 匿名网络的一般理念相同（实际上启发了闪电网络的选择）。闪电网络的具体协议称为 **[Sphinx](/glossary/lightning-sphinx)**，定义在 [BOLT-4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md) 中。

洋葱路由实现的功能：

- **发送方隐私。** 目的节点不知道谁发送了支付——只知道*某个*上游跳发送了。
- **从发送方图视角的接收方隐私。** 发送方不向中间跳透露最终接收方是谁。
- **跳不可链接性。** 中间跳无法判断它们在转发的是 2 跳还是 7 跳支付，除了适度的时间分析提示。

它未完全实现的：

- **完全隐私。** 运行多个闪电节点的精明对手可以关联网络中的时间和金额数据。
- **对发送方的接收方匿名性。** 发送方知道他们在付给谁（他们解码了发票）。
- **对通道对手方的保护。** 发送方的直接通道伙伴看到你发起了*某笔*支付，即使不知道目的地。

洋葱路由是闪电网络相对于链上比特币的有意义的隐私优势之一。结合闪电网络的链下性质（支付根本不公开广播），这是一个实质性改善——尽管在严格意义上不是匿名的。
