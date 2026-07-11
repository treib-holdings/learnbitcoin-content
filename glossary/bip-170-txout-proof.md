---
title: "BIP 170（TxOut 证明）"
slug: bip-170-txout-proof
draft: false
shortDefinition: "提议通过 merkle 证明标准化地证明交易包含在区块中，辅助 SPV 验证。"
keyTakeaways:
  - "形式化交易包含的 merkle 证明"
  - "辅助特定 UTXO 的轻量验证"
  - "未成为通用实践但仍然有用"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

BIP 170 由 Mark Friedenbach 于 2013 年起草，提议一种标准化的 merkle 证明格式，证明特定交易输出存在于特定区块中。概念上类似于 BIP 37 的 merkleblock 消息，但作为独立数据结构而非 P2P 协议消息。

它从未作为网络级标准激活。功能以不同形式存活：Bitcoin Core 将证明实现为 RPC 命令。`gettxoutproof` 为一笔或多笔交易生成证明，`verifytxoutproof` 验证一个证明。钱包和浏览器使用这些 RPC 对信任的全节点进行 SPV 式验证。

对于现代轻客户端工作，主导模式不是点对点发送的 TxOut 证明；而是 [BIP 158](/glossary/bip-158)紧凑区块过滤器。过滤器让客户端在本地决定获取什么，而不告诉任何对等节点它关心哪些地址。隐私故事比向对等节点请求证明好得多。

BIP 170 现在主要作为从"早期 SPV 想法"到"现代紧凑区块过滤器设计"演进过程中的一个点而有趣。

规范：[BIP-170](https://github.com/bitcoin/bips/blob/master/bip-0170.mediawiki)。
