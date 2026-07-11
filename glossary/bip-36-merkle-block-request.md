---
title: "BIP 36（merkle 区块请求）"
slug: bip-36-merkle-block-request
draft: false
shortDefinition: "早期的部分区块请求提案，最终被现代 SPV 方案取代。"
keyTakeaways:
  - "概述了 SPV 客户端的 merkle 区块检索"
  - "先于布隆过滤器和紧凑区块过滤器"
  - "大部分被更新的提案取代"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
liveWidget: ~
---

BIP 36 是 2012 年的一个早期草案，让 SPV 式客户端只拉取区块中相关的部分而非整个区块。从未超过草案状态。

实际发布的是 BIP 37（布隆过滤器请求），它有自己的隐私问题，现在在公共网络上基本被禁用。现代轻客户端使用 BIP 158 紧凑区块过滤器：节点为每个区块发布一个小的确定性过滤器，客户端下载过滤器并在本地决定获取哪些区块。钱包永远不会告诉节点它在找什么。

规范：[BIP-36](https://github.com/bitcoin/bips/blob/master/bip-0036.mediawiki)。纯历史；只作为最终做对了的那条线上的第一次尝试而有用。
