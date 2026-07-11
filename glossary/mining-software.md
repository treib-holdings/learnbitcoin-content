---
title: "挖矿软件"
slug: mining-software
draft: false
shortDefinition: "像 CGMiner 或 BFGMiner 这样的程序，将 ASIC 连接到比特币网络或矿池。"
keyTakeaways:
  - "在挖矿硬件和矿池或独立挖矿设置之间接口"
  - "实现实时监控（算力、份额、温度）"
  - "通常包括故障转移、超频和高级配置功能"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - competitive-mining
  - cpu-mining
  - gui-miner
  - merged-mining
  - miner
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-rig
  - retail-mining
sameAs:
  - "https://en.bitcoin.it/wiki/Mining_software"
liveWidget: ~
---

挖矿软件是位于[比特币节点](/glossary/node)（或[矿池](/glossary/mining-pool)）和实际执行哈希的 [ASIC](/glossary/asic-application-specific-integrated-circuit) 硬件之间的层。它接收工作、分发给芯片、收集有效份额并报告结果。

常见组件：

- **Stratum 协议**——主导的矿池到矿工协议。Stratum V1 自约 2012 年以来一直是标准；**Stratum V2** 是现代继任者，给予个体矿工更多交易选择控制权（而非让渡给矿池）。
- **CGMiner / BFGMiner**——经典开源挖矿客户端，可追溯到 GPU 时代并已更新支持 ASIC 硬件。在独立或小规模设置中仍然常见。
- **厂商固件**——Bitmain 的 S19/S21 系列、MicroBT 的 WhatsMiner 系列等出厂自带固件，处理矿池连接、份额提交和芯片级优化。
- **自定义固件**如 **Braiins OS** 和 **Vnish**——流行 ASIC 的第三方固件，启用更好的性能调优、逐芯片自动调优，以及通过 Stratum V2 实现矿工直接控制的交易选择。

对于独立运营者，挖矿软件处理矿池故障转移、温度监控、算力报告和基本运营仪表板。对于工业运营，技术栈通常集成到更广泛的机队管理平台中。

Stratum V2 过渡是当前最有趣的发展。在 V1 下，矿池决定哪些交易进入矿工哈希的区块。在 V2 下，个体矿工可以指定自己的交易选择，同时仍让矿池聚合算力以平滑方差。这是向个体矿工有意义的权力再分配——也是对[挖矿中心化](/glossary/mining-centralization)担忧的真实的（虽然渐进的）结构性修复。
