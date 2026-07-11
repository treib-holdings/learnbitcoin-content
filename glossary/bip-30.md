---
title: "BIP 30"
slug: bip-30
draft: false
shortDefinition: "一条规则，防止创建具有相同 txid 且花费相同输出的新交易，阻断双花边缘情况。"
keyTakeaways:
  - "防止具有相同 txid 的交易"
  - "关闭一个边缘双花漏洞"
  - "持续改进交易有效性的一部分"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-34
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

[BIP-30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)是一条共识规则，防止比特币历史中出现两笔具有相同交易 ID（txid）且都有未花费输出的交易。它在 2012 年 3 月作为[软分叉](/glossary/soft-fork)引入，此前研究者发现原始 Bitcoin Core 实现存在一个微妙的边缘情况，重复 txid 交易可能发生碰撞。

具体来说，2012 年之前的两个[coinbase 交易](/glossary/coinbase-transaction)（区块 91722/91812 和 91842/91880）具有相同的 txid（因为它们的 coinbase 输入结构完全相同）。BIP-30 通过要求节点拒绝任何 txid 与现有未花费交易匹配的交易，使这种情况在未来不再可能。

配套修复是 [BIP-34](/glossary/bip-34)，它使未来的 coinbase 交易在其输入脚本中显式包含区块高度——即使其他一切与前一个区块的 coinbase 相同，也能保证每个 coinbase 有唯一的 txid。一旦 BIP-34 被深入执行（约 2013 年区块 227,930），BIP-30 的检查实际上只对非常旧的区块有意义。现代 Bitcoin Core 将其视为历史正确性的遗留规则，而非主动预防。

这个故事是比特币历史中的一个小脚注，但清晰地展示了维护纪律：识别微妙的边缘情况，发布软分叉修复，接受一些"不应该发生"的场景确实发生过一次并需要清理。
