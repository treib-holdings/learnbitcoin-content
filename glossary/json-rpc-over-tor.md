---
title: "通过 Tor 的 JSON-RPC"
slug: json-rpc-over-tor
draft: false
shortDefinition: "在 Tor 隐藏服务后面运行远程 Bitcoin Core 节点的 RPC 接口，为节点控制增加匿名性和抗审查性。"
keyTakeaways:
  - "通过 Tor 的匿名性保护节点控制接口"
  - "防止远程 RPC 使用时直接暴露 IP"
  - "需要额外配置但显著提升隐私"
sources: []
relatedTerms:
  - bitcoin-core
  - bitcoin-core-rpc
  - hidden-service-node
  - node-operator
  - tor-hidden-service
liveWidget: ~
---

通过 Tor 的 JSON-RPC 是指通过 Tor 隐藏服务（.onion 地址）而非（或除了）明网 IP 来暴露 Bitcoin Core 节点的 RPC 接口。它让你可以从任何地方管理远程节点，而不暴露节点的 IP 或你自己的 IP。

为什么这很重要：

- **Bitcoin Core 的 RPC 端口（8332）永远不应暴露在公共互联网上。** 任何拥有正确凭证的人都可以签署交易、掏空钱包或停止节点。标准建议：仅绑定到 localhost。
- **家庭 NAT 后面的自托管节点**通常无法从旅行中的手机或笔记本电脑访问，除非你在防火墙上打洞（糟糕）或使用 VPN（可行但多了一层维护）。
- **隐藏服务翻转了这个模式**：将 RPC 绑定到 Tor v3 onion 地址。该地址不可猜测，只能通过 Tor 访问，你不需要任何防火墙更改。手机或笔记本电脑运行 Tor 并连接到 onion 地址。

设置大致如下：

1. 在与 Bitcoin Core 相同的机器上安装 Tor。
2. 配置 HiddenServiceDir 和 HiddenServicePort 8332 指向 Bitcoin Core 的 RPC 端口。
3. 设置 Bitcoin Core 的 `-rpcbind=127.0.0.1` 和 `-rpcallowip` 为 Tor SocksPort。
4. 将生成的 .onion URL 用于你的钱包客户端（Sparrow、BlueWallet 的连接自己的节点功能等）。

安全性保持稳固，因为：

- onion 地址只与你分享的人知道。
- RPC 认证（bitcoin.conf 中的 rpcauth 或 cookie 文件）在 onion 之上仍然适用。
- Tor 增加了匿名性：即使知道 .onion 的对手也看不到你的 IP。

这不是最简单的设置。但对于想要自有基础设施而不暴露它的比特币自主运营者来说，这是正确的模式。Umbrel、Start9 和 RaspiBlitz 等工具自动化了大部分配置。
