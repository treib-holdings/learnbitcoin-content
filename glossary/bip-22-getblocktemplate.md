---
title: "BIP 22（getblocktemplate）"
slug: bip-22-getblocktemplate
draft: false
shortDefinition: "一种 RPC 方法提案，给矿工原始区块数据来组装自己的候选区块，而非依赖 getwork。"
keyTakeaways:
  - "提供对区块构建的完全控制"
  - "取代更简单但灵活性较低的 getwork"
  - "增强交易选择中的去中心化"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - block
  - block-header
  - mining-centralization
  - mining-rig
  - mining-software
liveWidget: ~
---

BIP 22 规定了 `getblocktemplate`（GBT），矿工用来向全节点请求待挖区块的 RPC。节点返回一个完整模板：前一个区块哈希、coinbase 脚手架、节点希望包含的交易以及区块必须满足的共识规则。矿工可以照单全收、重新排序交易、替换交易或从零开始构建自己的模板。

它取代了旧的 `getwork` 调用，后者只返回一个部分哈希的区块头。在 `getwork` 下，矿池选择每笔交易，矿工只是旋转随机数——对矿工来说没问题，但对去中心化不利，因为区块包含什么的选择权完全在矿池。GBT 如果正确使用，将这个权力还给运行节点的人。

实践中，大多数算力仍然通过预构建模板并通过 Stratum V1 发送的矿池路由，因此去中心化好处在很大程度上是理论性的。Stratum V2 和"去中心化作业协商"规范旨在将模板构建推回给单个矿工，但采用缓慢。结果是 GBT 作为协议是健康的，作为实践则使用不足，这正是当今[挖矿中心化](/glossary/mining-centralization)的结构性形态。

规范：[BIP-22](https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki)。与 BIP 23 配合使用，后者对模板提交做了细化。
