---
title: "BIP（比特币改进提案）"
slug: bip-bitcoin-improvement-proposal
draft: false
shortDefinition: "提议对比特币协议和生态系统标准进行变更或补充的设计文档。"
keyTakeaways:
  - "比特币协议或标准的正式提案"
  - "经过社区审查和测试"
  - "一些 BIP 成为重大升级如 SegWit 或 Taproot"
sources: []
relatedTerms:
  - bip-9-versionbits
  - p2sh
  - bip-22-getblocktemplate
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - bitcoin-governance
  - psbt
  - taproot
  - bip-342-tapscript
  - bolt-11
sameAs:
  - "https://en.bitcoin.it/wiki/BIP"
  - "https://github.com/bitcoin/bips"
liveWidget: ~
---

BIP——**比特币改进提案**（Bitcoin Improvement Proposal）——是提议对比特币协议、软件或标准进行变更或补充的正式设计文档。BIP 系统模仿 Python 的 PEP 流程，是比特币开源开发实际提出、辩论和编纂变更的方式。

任何人都可以写 BIP。流程定义于 [BIP-1](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki)和 [BIP-2](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki)：

1. **草案。**作者以标准 BIP 格式撰写提案——摘要、动机、规范、理由、向后兼容性等。
2. **讨论。**草案在 bitcoin-dev 邮件列表和 Github 上分享。任何感兴趣的人——开发者、矿工、用户、研究者——审查和评论。
3. **分配。**如果提案格式良好且值得编号，BIP 编辑分配永久 BIP 编号。
4. **迭代。**作者根据反馈修订。许多 BIP 从未超过此阶段。
5. **状态推进。**草案 → 提议 → 最终（如果被广泛接受和实现）或撤回/拒绝/替换。
6. **实际部署。**纳入 Bitcoin Core（或其他实现）是单独的决定。网络上的激活需要节点运营商的自愿采用，对于共识变更还需要矿工信号。

BIP 类型：

- **标准跟踪**——对协议本身的变更（共识规则、网络协议、点对点消息）。示例：BIP-141（[SegWit](/glossary/segwit-segregated-witness-bip-141)）、BIP-340/341/342（[Schnorr](/glossary/schnorr-signature) / [Taproot](/glossary/taproot)）、BIP-352（[Silent Payments](/glossary/silent-payments)）。
- **信息性**——设计指南或实现说明，无共识影响。
- **流程**——对 BIP 流程本身的变更。

BIP 流程有意缓慢、保守和对抗——[比特币治理](/glossary/bitcoin-governance)的正式端，开发者、矿工、节点运营商、用户和长期持有者各自持有事实上的否决权。影响共识的变更通常从初始提案到网络激活需要数年——许多提案从未成功。这是一个特性：一个拥有 1-2 万亿美元价值的全球货币协议应该非常非常难以意外变更。参见 [SegWit](/glossary/segwit-segregated-witness-bip-141)和 [Taproot](/glossary/taproot)了解两个成功走完全程的 BIP。
