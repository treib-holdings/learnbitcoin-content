---
title: "软分叉"
slug: soft-fork
draft: false
shortDefinition: "对比特币共识规则的向后兼容变更，如果有多数矿工/节点执行则生效。"
keyTakeaways:
  - "向后兼容的规则变更收紧或添加新约束"
  - "依赖矿工/节点多数支持来激活"
  - "未升级的节点仍能运行，但会遗漏新规则的细节"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - bip-148-uasf
  - bitcoin-governance
  - chain-split
  - consensus-parameter
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

软分叉是收紧规则的比特币共识变更：以前有效的东西在新规则下变得无效，但新规则下有效的任何东西在旧规则下也有效。未升级的旧节点仍然认为新区块是合法的；它们只是不执行新约束本身。

这是比特币协议演进的*向后兼容*方式。与硬分叉相对，后者放松规则并创建旧节点会拒绝的不兼容链。

值得注意的比特币软分叉：

- **[BIP-16（P2SH）](/glossary/p2sh)**——2012 年。添加了 [P2SH](/glossary/p2sh) 地址格式。
- **[BIP-65（CLTV）](/glossary/bip-65-opchecklocktimeverify)**——2015 年。添加了 `OP_CHECKLOCKTIMEVERIFY`，用于脚本中的[绝对时间锁](/glossary/absolute-locktime)。
- **[BIP-68/112/113（CSV）](/glossary/checksequenceverify-csv)**——2016 年。添加了相对时间锁。
- **[BIP-141（SegWit）](/glossary/segwit-segregated-witness-bip-141)**——2017 年。大事件；重构见证数据，修复延展性，有效翻倍区块容量。
- **[BIP-340/341/342（Taproot）](/glossary/taproot)**——2021 年。添加了 [Schnorr 签名](/glossary/schnorr-signature)、Taproot 和 Tapscript。

激活通常涉及矿工信号：足够多的矿工必须在区块头中信号表示准备好接受新规则，然后软分叉"锁定"并开始执行。机制定义在 [BIP-9](/glossary/bip-9-versionbits)及其后继者中。激活后，未升级的节点继续工作，但可能接受违反新规则的区块——这就是为什么真正有多数支持的软分叉本质上是安全的，而有争议的可能导致链分裂。

软分叉方式是保守的：比特币可以在不强迫所有人同时升级的情况下添加功能。这也是比特币演进缓慢的部分原因——任何提案都需要满足社区 + 矿工 + 经济节点共识的高门槛才能真正激活。完整的多方利益相关者动态就是[比特币治理](/glossary/bitcoin-governance)所描述的；软分叉是这一过程以添加能力而不分裂网络为目标时最常见的形态。
