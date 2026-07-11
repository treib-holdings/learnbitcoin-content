---
title: "挖矿前端"
slug: mining-front-end
draft: false
shortDefinition: "作为挖矿硬件（ASIC）与 Stratum 或 getblocktemplate 等协议之间桥梁的软件或 UI。"
keyTakeaways:
  - "协调 ASIC 任务、矿池设置和工作分配"
  - "显示性能指标和配置选项"
  - "对大规模挖矿管理至关重要"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - miner
  - mining-pool
  - mining-software
  - proprietary-mining-firmware
liveWidget: ~
---

挖矿前端是位于挖矿硬件（ASIC）和向它们交付工作的协议之间的软件层：来自矿池的 Stratum，或独立挖矿的 [getblocktemplate](/glossary/bip-22-getblocktemplate)。前端处理连接管理、工作分配、份额提交和面向运营者的控制。

对于单个家庭矿工，"前端"就是 ASIC 上运行的固件。对于拥有数百或数千台设备的工业运营，前端是在某处服务器上运行的独立层，通常称为机队管理器或农场控制器。

前端的功能：

- **矿池连接。** 维护与一个或多个矿池的 Stratum 连接，在一个矿池连接断开时自动故障转移。
- **工作分发。** 从矿池接收区块模板作业并将其路由到各个 ASIC（或路由到执行分发的 Stratum 代理）。
- **份额提交。** 从 ASIC 获取找到的份额并提交回矿池。
- **监控和控制。** 跟踪每个 ASIC 的算力、温度、电压、频率、风扇速度；过热时警报或自动关机；远程重启异常设备。
- **固件管理。** 在整个机队中推送固件更新，对 [BraiinsOS](/glossary/proprietary-mining-firmware) 或 LuxOS 等专有固件特别重要。

2026 年该类别的常见产品：

- **Awesome Miner**：付费的以 Windows 为中心的机队管理器，受中型运营欢迎。
- **Hive OS**：云管理的基于 Linux 的挖矿操作系统，带有 Web 仪表板。
- **Braiins Farm Proxy + Farm Manager**：来自 Braiins（原 Slush Pool 背后的团队）的开源 Stratum V2 技术栈。
- **Foreman**：大型挖矿运营的 SaaS 机队管理。
- **MiningCore / NOMP / 开源矿池软件**：矿池运营者运行的协议另一端。

对于运行一两台 ASIC 的爱好者，前端大部分不可见。对于运行数千台的运营者，前端是盈利与否的区别。
