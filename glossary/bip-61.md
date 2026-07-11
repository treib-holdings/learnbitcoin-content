---
title: "BIP 61"
slug: bip-61
draft: false
shortDefinition: "规定无效交易或区块的 reject 消息协议，后在较新 Bitcoin Core 版本中被移除。"
keyTakeaways:
  - "允许节点向对等节点发送 'reject' 通知"
  - "被认为不必要，因隐私/安全原因移除"
  - "展示了比特币 P2P 协议的持续改进"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-autoban
  - node-synchronization
liveWidget: ~
---

BIP 61 规定了 `reject` P2P 消息：当节点拒绝一笔交易或区块时，告诉发送方原因。听起来有用。实际不是。

两个问题。拒绝原因是建议性的且容易伪造，所以依赖它的钱包是在信任来自匿名对等节点的不可靠信号。而且广播拒绝会泄露节点的内存池策略（费用下限、标准性规则、版本偏好），这些最好保持私密。Bitcoin Core 在 0.18（2019 年）中默认禁用了 `reject`，在 0.20（2020 年）中完全移除了代码。

现代钱包从缺失中推断拒绝。如果交易在合理窗口后未出现在区块浏览器或对等内存池中，假设它被丢弃并以更高手续费重新广播，最好信号 [Replace-by-Fee (RBF)](/glossary/replace-fee-rbf) 使提升明确无歧义。

规范：[BIP-61](https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki)。
