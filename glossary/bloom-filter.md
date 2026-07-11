---
title: "布隆过滤器"
slug: bloom-filter
draft: false
shortDefinition: "一种概率数据结构，使 SPV 钱包能仅请求相关交易——但已知存在隐私缺陷。"
keyTakeaways:
  - "帮助 SPV 钱包通过过滤交易减少带宽"
  - "可能泄露用户地址信息"
  - "大部分被更私密的方法（BIP 157/158）取代"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - merkle-block
  - merkle-tree-merkle-root
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
sameAs:
  - "https://en.wikipedia.org/wiki/Bloom_filter"
  - "https://www.wikidata.org/wiki/Q885373"
liveWidget: ~
---

布隆过滤器是一种概率数据结构，让你廉价地检查"这个项在集合中吗？"——没有假阴性，有可调的假阳性率。在比特币中，布隆过滤器由 [BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)（2012 年）引入，作为 [SPV](/glossary/spv-simplified-payment-verification)客户端仅请求可能匹配其地址的交易的方式。

原始工作流：

1. SPV 客户端构建一个编码其地址的布隆过滤器（通过假阳性引入一些故意模糊）。
2. 客户端将过滤器发送给[全节点](/glossary/full-node)。
3. 全节点仅返回匹配过滤器的区块/交易（加上一些不相关的假阳性匹配）。
4. 客户端在本地检查每个结果看哪些是真实匹配。

致命的隐私缺陷：通过检查过滤器，恶意或好奇的全节点可以概率性地反向工程出 SPV 客户端关心哪些地址。假阳性率本应提供掩护，但实践中当客户端用重叠过滤器重复查询时提取模式太容易了。

到 2010 年代后期这已被广泛理解，许多 Bitcoin Core 节点完全禁用了 BIP-37 布隆过滤器中继（在 Core v0.19 中变为可选，然后默认禁用）。

继任者是 [BIP-158](/glossary/bip-158)紧凑区块过滤器，其中*全节点*生成过滤器，*客户端*在本地下载和查询——所以节点不了解客户端关心哪些地址。相同的原始想法，相反的信息流，好得多的隐私。现代 SPV 式移动钱包使用 BIP-157/158，而非 BIP-37。

布隆过滤器作为通用数据结构在许多其他上下文中仍然有用（数据库、缓存、分布式系统）。在比特币中，它是一个历史遗物，你主要会在旧文档中遇到。
