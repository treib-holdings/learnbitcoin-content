---
title: "分叉监控器"
slug: fork-watcher
draft: false
shortDefinition: "追踪区块链分叉或异常重组的专用工具/服务，向运营者发出可能的链分叉警报。"
keyTakeaways:
  - "监控链重组或意外分叉"
  - "交易所、矿工和节点运营者常用"
  - "提供实时警报以便快速响应"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-split
  - fork
  - fork-detection
  - reorg-reorganization
liveWidget: ~
---

分叉监控器是作为持续服务执行[分叉检测](/glossary/fork-detection)的专用工具，在链共识层发生异常时向运营者发出警报。

参考实现是 [forkmonitor.info](https://forkmonitor.info)，由 Bitcoin Core 开发者 Sjors Provoost 运营。它同时做几件事：

- 并行运行多种比特币节点实现（Core、Knots、btcd、libbitcoin 等）以及每个的多个版本。
- 监控它们之间的链分歧。
- 追踪孤块事件、深度重组、软分叉激活信号位和通胀 bug 式共识失败。
- 向公开 RSS / Twitter / 邮件列表发布警报。
- 维护"事件 X 期间链实际看起来是什么样"的权威公开记录。

为什么分叉监控基础设施超越任何单一运营者都很重要：

- 在 2018 年通胀 bug（CVE-2018-17144）修补窗口期间，分叉监控器帮助追踪哪些版本已升级以及是否实际存在 bug 链。
- 在软分叉激活期间（SegWit、Taproot），分叉监控器追踪信号和确认激活没有分裂链。
- 在 BCH 分叉（2017 年 8 月）和随后的 BCH 内部分叉（2018 年 11 月）期间，分叉监控器是"每条链当前的尖哈希是什么"的权威公开来源。

商业产品（交易所、托管人）通常在内部运行自己的分叉监控器作为冻结存款触发器。像 forkmonitor.info 这样的公开监控器服务于社区研究功能。两者都存在因为比特币的正确性太重要了，不能假设没有出错——必须有人主动检查。
