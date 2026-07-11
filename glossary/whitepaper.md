---
title: "白皮书"
slug: whitepaper
draft: false
shortDefinition: "中本聪 2008 年发表的原始论文《比特币：一种点对点电子现金系统》，详述了比特币的设计。"
keyTakeaways:
  - "发明了去中心化数字货币的开创性文献"
  - "解释了区块头、PoW 和点对点共识"
  - "被认为是密码学和货币创新的里程碑"
sources: []
relatedTerms:
  - bitcoin-pizza-day
  - genesis-block
  - hal-finneys-running-bitcoin
  - satoshi-nakamoto
liveWidget: ~
---

比特币白皮书是网络的创始文件：一篇九页的 PDF，题为**"Bitcoin: A Peer-to-Peer Electronic Cash System"**（比特币：一种点对点电子现金系统），由[中本聪](/glossary/satoshi-nakamoto)于 2008 年 10 月 31 日发表。它以异常简洁和精确的方式描述了比特币的整个核心理念。

这九页中实际包含的内容：

1. **交易作为链式签名**——币所有权转移的核心机制。
2. **双花问题及其提出的解决方案**——通过[工作量证明](/glossary/proof-work-pow)将交易时间戳记入公开验证的链中。
3. **网络模型**——节点广播、验证并收敛于最长链。
4. **激励**——[区块补贴](/glossary/block-subsidy)加交易手续费作为保护网络的经济引擎。
5. **通过地址轮换实现隐私**——明确讨论；白皮书从一开始就预见到了[地址重用](/glossary/address-reuse)问题。
6. **一个粗略的安全分析**——关于为什么在任何合理的诚实算力份额下工作量证明使双花不切实际的概率论证。

白皮书中*没有*的：闪电网络、SegWit、Taproot、多签设置、高费均衡下的费率市场、HD 钱包。这些在当时都不存在。中本聪描述了底盘；此后的一切都是在上面构建的。

你可以在大约 20 分钟内读完白皮书。它确实是计算历史上最密集、最清晰、最具影响力的九页。如果你从未读过，你应该读——特别是因为它经得起时间的考验。它对系统将如何工作的每一个主张，在十六年的运行中都得到了验证。

本地托管的副本在 [/bitcoin.pdf](/bitcoin.pdf)。另见[中本聪](/glossary/satoshi-nakamoto)了解作者，[创世块](/glossary/genesis-block)了解两个月后的网络启动，以及[旅程第 2 章](/journey/what-bitcoin-actually-is)了解更长的引导阅读。
