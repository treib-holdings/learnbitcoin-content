---
title: "自动驾驶（闪电网络）"
slug: autopilot-lightning
draft: false
shortDefinition: "闪电网络的一项功能，根据连接性和容量启发式自动开启和管理通道。"
keyTakeaways:
  - "自动化通道创建和管理"
  - "使用启发式选择理想对等节点"
  - "帮助新用户无需深入了解闪电网络即可上手"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - core-lightning-c-lightning
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-node
  - lightning-node-alias
  - lightning-routing
liveWidget: ~
---

闪电网络自动驾驶是某些[闪电网络](/glossary/lightning-network)实现中的功能，基于图连接性启发式而非手动选择自动选择通道对等节点并代你开启通道。它的存在是为了降低新闪电节点运营商的运营门槛。

最初的自动驾驶功能出现在 [LND](/glossary/lightning-network-daemon-lnd) 中，尝试：

- **识别 gossip 图中连接良好的节点**，可以提供好的路由路径。
- **根据配置预算和网络条件选择通道大小。**
- **定期再平衡或关闭**效果不佳的通道。

对自动驾驶实际效果的诚实评估：

- **对新用户来说，还行。**上手从"手动选通道，希望路由好"变成"点一个按钮，得到通道"。这是真正的用户体验改善。
- **启发式不太好。**自动驾驶倾向于选择大的、连接良好的节点，这虽然可行但加剧了中心化压力——每个人都连接到相同的几个枢纽，创造了星型拓扑。
- **认真的运营商不用它。**关心赚取手续费的路由节点运营商根据自己的分析精心选择通道。只想发送支付的普通用户越来越多地由[托管钱包](/glossary/custodial-lightning-wallet)或基于 LSP 的钱包（Phoenix、Mutiny）服务，这些钱包在 UI 背后完全处理通道管理。

2026 年自动驾驶的位置：面向自托管运营商的中间地带工具，他们运行自己的闪电节点但不想主动管理。现代基于 LSP 的上线方式已在很大程度上取代了它对非技术用户的作用；手动通道选择已取代了它对认真运营商的作用。

诚实地说：自动驾驶是自动化闪电通道管理的有用首次尝试。它既不是最差的方法也不是最好的方法。如果你运行自己的 LND 节点且对通道没有强烈意见，自动驾驶是合理的默认选项。如果你有强烈意见，你会绕过它。
