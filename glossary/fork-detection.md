---
title: "分叉检测"
slug: fork-detection
draft: false
shortDefinition: "监控节点或网络以发现意外的链分叉或争议性分叉，以保持在期望的链上。"
keyTakeaways:
  - "在链分叉为独立分支时发出警报"
  - "帮助矿工和用户确保跟踪主链"
  - "在争议性升级或意外分裂期间至关重要"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - blockchain
  - chain-split
  - corrupted-chain-state
  - fork
  - fork-watcher
  - reorg-reorganization
liveWidget: ~
---

分叉检测是监控意外链分叉的做法——网络有意或无意产生两条或多条竞争链的时期。

被检测的分叉类型：

- **常规 1-2 区块重组。** 每年发生几次，由近乎同时的区块发现引起。在一两个区块内自动解决；无需运营者干预。
- **软件 bug 分叉。** 节点软件 bug 接受了无效区块；运行有 bug 版本的节点遵循了与运行正确版本节点不同的链。罕见，但 [BIP 50](/glossary/bip-50) 是 2013 年的经典案例。
- **激活分叉。** 软分叉或硬分叉规则变更激活，并非所有节点都升级。有意为之但通过信号阈值和警告期管理。
- **争议性硬分叉。** 派系故意更改共识规则。2017 年 Bitcoin Cash 分叉是典型案例。

分叉检测在实践中的工作方式：

- **Bitcoin Core 内置警告。** `getblockchaininfo` 暴露 `warnings` 字段，显示异常链条件：意外的高难度竞争链、近期许多区块中设置未知软分叉位等。
- **跨来源比较。** 将你的节点尖哈希与多个区块浏览器（mempool.space、blockstream.info、Bitaroo 等）以及几个可信对等方比较。如果它们在任何深度不一致，调查。
- **Forkmonitor.info。** 专用公共服务，并行运行多种比特币节点实现并在分歧时发出警报。经典分叉监控服务。

谁需要这个：

- **交易所、托管人、支付处理器。** 确认逻辑依赖于在正确的链上。如果链分叉则冻结充提。
- **矿工。** 在少数派分叉上挖矿浪费算力。
- **大额链上交易。** 在任何疑似分叉事件期间等待更深确认。

大多数用户在实践中永远不会遇到。Bitcoin Core 透明地处理常规重组。对于"错误的链"代价高昂的高价值系统运营者，这门纪律很重要。
