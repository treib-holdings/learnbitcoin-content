---
title: "闪电 Sphinx"
slug: lightning-sphinx
draft: false
shortDefinition: "闪电网络使用的洋葱路由协议，用于隐藏每一跳的身份，保护路由隐私。"
keyTakeaways:
  - "实现洋葱式加密以隐藏完整路由详情"
  - "每一跳只能看到足够转发支付的数据"
  - "保护闪电网络用户免受关联和审查"
sources: []
relatedTerms:
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-routing
  - onion-routing-lightning
liveWidget: ~
ogImage: "/diagrams/og/onion-routing.png"
ogImageAlt: "A frame from LearnBitcoin's onion routing animation. Bob (highlighted in orange) is peeling the outermost layer of a three-ring onion with an orange preimage payload at its center. A 'knows: prev = Alice, next = Carol / nothing else' callout sits above the onion, with the caption 'Bob sees: forward to Carol. Nothing else.' below it. Visualizes Sphinx onion routing: each hop sees only its own layer."
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
  <figcaption>Three intermediate hops, three wraps. Each node sees only its own layer.</figcaption>
</figure>

Sphinx 是闪电网络用于[洋葱路由](/glossary/onion-routing-lightning)的特定密码学数据包格式。定义在 [BOLT-4](https://github.com/lightning/bolts/blob/master/04-onion-routing.md) 中，它是随每笔闪电支付传输的数据结构，告诉每个路由跳下一跳的目的地而不揭示完整路径。

Sphinx 数据包是固定大小（标准格式 1,300 字节），无论支付将经过多少跳。这是设计如此：如果数据包大小随跳数变化，观察者可以推断路由长度。填充使每个洋葱保持相同大小。

洋葱的每一层用从对应跳公钥派生的密钥加密。当某一跳收到 Sphinx 数据包时：

1. 它用私钥解密最外层。
2. 它读取转发指令（下一跳、金额、超时）。
3. 它重新填充剩余部分并转发到下一跳。

下一跳看到的洋葱在大小和结构上与第一跳收到的完全相同——它无法判断自己是第 2 跳还是第 5 跳。

Sphinx 最初由 George Danezis 和 Ian Goldberg 于 2009 年设计，用于混合网络和洋葱路由系统。闪电网络采用并适配了它用于支付路由。相同的底层密码学被其他隐私系统使用。

Sphinx 是闪电网络隐私声明的可信基础。这也是为什么闪电网络是相对于链上比特币的严格隐私升级：不仅支付不上公共链，路由路径对除直接邻居外的任何人都隐藏。
