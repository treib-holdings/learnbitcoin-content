---
title: "隐藏服务节点"
slug: hidden-service-node
draft: false
shortDefinition: "仅通过 Tor 隐藏服务访问的比特币节点，隐藏其真实 IP 地址。"
keyTakeaways:
  - "使用 .onion 地址通过 Tor 网络路由流量"
  - "提高节点运营者匿名性并抵抗 IP 封锁"
  - "与明网节点相比可能降低性能"
sources: []
relatedTerms:
  - headless-node
  - hidden-miner-tax
  - i2p-invisible-internet-project
  - node
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

隐藏服务节点在 Tor v3 onion 地址（56 字符，ed25519 密钥）后运行 Bitcoin Core，而非明网 IP（或在其之外）。其他支持 Tor 的对等方通过 `.onion` 连接；仅明网对等方完全看不到该节点。

你获得的：

- 运营者 IP 对对等方不可见。如果你不想向邻居、ISP 或链上分析者宣传你运行比特币节点，这很有用。
- 节点接受入站连接而无需端口转发或公共 IPv4 地址。在 NAT 后？没关系。
- 抗审查。Tor 的中继模型使"封锁所有比特币对等方"规则比明网封锁列表难以实施得多。

你放弃的：

- 一些延迟。Tor 添加跳数，所以区块和交易传播比明网慢几秒。
- 一些对等方多样性。节点只看到其他 onion 可达对等方，除非你也启用明网出站（典型配置两者都启用）。

BIP 155（addrv2，2021 年部署）给了比特币适当的 P2P 支持来通过地址 gossip 广告 Tor v3、I2P 和 CJDNS 地址。在此之前，隐藏服务节点在对等发现中是二等公民。今天，在安装了 Tor 的主机上运行 Bitcoin Core 自动启用隐藏服务模式，网络中有意义的一部分仅通过 Tor 可达。
