---
title: "Neutrino"
slug: neutrino
draft: false
shortDefinition: "一种保护隐私的轻量级协议（BIP 157/158），使用区块过滤器替代旧的基于布隆过滤器的 SPV。"
keyTakeaways:
  - "使用 BIP 157/158 紧凑过滤器进行 SPV"
  - "客户端选择性下载仅包含相关交易的区块"
  - "比布隆过滤器改善隐私和带宽效率"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - full-node
  - lightning-network-daemon-lnd
  - spv-simplified-payment-verification
liveWidget: ~
---

Neutrino 是基于 BIP 157 / BIP 158 紧凑区块过滤器的隐私保护 SPV 式轻客户端协议的参考名称（也是 Lightning Labs 的实现）。它取代了有严重隐私问题的旧 BIP 37 布隆过滤器 SPV 方案。

Neutrino 工作原理：

1. 轻客户端下载区块头（小、快、每个约 80 字节）。
2. 客户端从服务全节点下载紧凑区块过滤器。每个过滤器是几个 KB 的压缩摘要，描述该区块中引用的每个脚本（地址）。
3. 客户端在本地检查每个过滤器是否匹配自己钱包的地址。
4. 对于匹配的区块，客户端从任意对等方请求完整区块并扫描实际交易。

隐私属性是杀手级功能：

- **在 BIP 37 布隆过滤器下**，客户端*发送一个过滤器*描述它关心什么。服务节点可以分析过滤器推断出客户端的大部分地址。多次重连后，泄露严重。
- **在 Neutrino / BIP 158 下**，客户端*接收*每个区块的确定性过滤器（每个对等方都会服务的相同过滤器）。客户端永远不告诉服务器它关心哪些地址。服务器无法知道客户端在看到过滤器后实际下载了哪些区块。

Neutrino 的用途：

- **Lightning Labs 的 [LND](/glossary/lightning-network-daemon-lnd)** 支持 Neutrino 作为不想运行自己 Bitcoin Core 全节点的客户端的后端。大多数基于 LND 的钱包的非路由节点闪电用户使用它。
- **许多移动比特币钱包**使用 Neutrino 或类似的基于 BIP 158 的后端，而非连接到受信任的 Electrum 服务器。
- **Lightning Dev Kit（LDK）**将 Neutrino 作为其支持的链数据源之一。
