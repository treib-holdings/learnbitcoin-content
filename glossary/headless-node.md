---
title: "无头节点"
slug: headless-node
draft: false
shortDefinition: "没有图形界面运行的比特币节点，通过命令行或 JSON-RPC 管理。"
keyTakeaways:
  - "在服务器或嵌入式系统上无 GUI 运行"
  - "通过 RPC 调用、配置文件或 CLI 命令控制"
  - "提供更高的资源效率和自动化潜力"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - full-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

无头节点是没有 `bitcoin-qt` GUI 运行的 `bitcoind`：没有窗口，没有菜单，只有监听 RPC 和 P2P 网络的守护进程。这是标准生产部署。

为什么无头：

- 比 Qt 运行更少 RAM 和 CPU。为实际节点工作释放资源。
- 易于在服务器、树莓派、NAS 或任何嵌入式设备上运行。
- 完全通过 `bitcoin.conf` 可配置。通过 `bitcoin-cli` 或 RPC 驱动，脚本和其他软件可以直接与它交互。
- 作为 systemd 服务或 launchd 作业运行，在重启、重启和 SSH 断开后存活。

这是每个打包节点发行版（Umbrel、Start9、RaspiBlitz、MyNode、Citadel）实际在底层运行 Bitcoin Core 的方式。友好的 Web UI 通过 RPC 与 `bitcoind` 交互。这也是交易所、支付处理器、区块浏览器、Electrum 服务器和闪电节点与比特币交互的方式：不是通过 GUI，而是通过 `getblockchaininfo`、`gettxout`、`sendrawtransaction` 和 RPC 接面的其余部分。

如果你不需要 GUI，无头是正确的默认选择。更少的表面积，更少的资源使用，更容易自动化和监控。
