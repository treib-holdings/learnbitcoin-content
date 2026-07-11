---
title: "地址索引"
slug: address-indexing
draft: false
shortDefinition: "按地址跟踪和组织比特币交易的服务或功能，支持快速查询或区块浏览器搜索。"
keyTakeaways:
  - "按地址组织交易数据"
  - "Bitcoin Core 默认不启用"
  - "加快查询速度但可能影响隐私"
sources: []
relatedTerms:
  - address
  - address-clustering
  - address-derivation-path
  - address-reuse
  - transaction-index-txindex
liveWidget: ~
---

地址索引是构建和维护一个数据库的做法，该数据库将每个比特币地址映射到所有向其支付或从其花费的交易。Bitcoin Core 默认不这样做；这是由外部服务和少数特殊节点分叉提供的功能。

Bitcoin Core 不做地址索引的原因：

- **隐私立场。** 地址索引让查询任何地址的完整交易历史变得轻而易举。Bitcoin Core 的钱包只跟踪自己拥有的地址；大规模地址索引是给外部观察者用的工具，不是给自托管用户用的。
- **资源开销。** 完整的地址索引会增加数十 GB 的磁盘使用量，并减慢初始区块下载速度。
- **使用场景在外部。** 区块浏览器、链上分析公司和支付处理商需要它。个人钱包不需要。

地址索引存在于：

- **Electrum 服务器**（Romanz 的 Electrs、kyuupichan 的 ElectrumX、cculianu 的 Fulcrum）。与 Bitcoin Core 全节点一起运行，构建自己的地址索引，向 Electrum 协议客户端（Sparrow、BlueWallet、Electrum 桌面版等）提供查询。
- **公共区块浏览器**（mempool.space、blockstream.info、mempool.observer、Bitaroo）。内部运行从全节点派生的地址索引数据库。
- **链上分析公司**（Chainalysis、Elliptic、TRM、CipherTrace）。地址索引是入门级能力；真正的产品是将地址聚类为实体的启发式方法。

隐私影响：

- **对用户**：你复用的任何地址都会将你的完整交易历史暴露给任何能查询地址索引的人。这是结构性的；协议允许这样做。防御方法是地址轮换（每笔交易使用新地址，HD 钱包会自动完成）。
- **对自托管者**：运行自己的 Electrum 服务器让你的钱包查询地址索引而无需与外部服务共享你的地址。Sparrow + 自己的 Electrs + 自己的 Bitcoin Core = 现代尊重隐私的自托管方案。

地址索引是这样一种功能：同样的能力服务于截然不同的目的。对合法的浏览器和自托管钱包有用；对监控来说是基础设施工具。诚实的说法是它就是一个工具，重要的是谁在运行它、针对谁运行。
