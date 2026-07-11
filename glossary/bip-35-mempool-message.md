---
title: "BIP 35（mempool 消息）"
slug: bip-35-mempool-message
draft: false
shortDefinition: "允许对等节点请求节点的内存池交易，但在现代 Bitcoin Core 中很少使用。"
keyTakeaways:
  - "让对等节点请求节点的未确认交易列表"
  - "现在不常被实现或允许"
  - "早期公开分享内存池数据的尝试"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - mempool
  - node
  - node-synchronization
  - transaction
liveWidget: ~
---

BIP 35 添加了 `mempool` P2P 消息：对等节点发送 `mempool`，节点回复一个 `inv`，列出其内存池中当前的所有 txid。在 2012 年左右有用，当时新兴的区块浏览器和钱包想快速从任何愿意的对等节点查看未确认活动。

后来它变成了隐患。按请求转储整个内存池让观察者可以指纹化节点的策略、传播时间，并探测其他对等节点尚未看到的交易。Bitcoin Core 现在将响应限制在 `NODE_BLOOM` 服务位（或对等白名单）之后，因此更广泛的 P2P 网络实际上已停止服务它。2026 年，公开的内存池数据通过区块浏览器和专用内存池基础设施流通，而非机会性 `mempool` 查询。

规范：[BIP-35](https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki)。仍然定义，几乎从不在实际中使用。
