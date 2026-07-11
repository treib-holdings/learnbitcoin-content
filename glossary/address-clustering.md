---
title: "地址聚类"
slug: address-clustering
draft: false
shortDefinition: "一种链上分析方法，根据交易模式将多个地址关联到同一用户或实体。"
keyTakeaways:
  - "将地址归组到同一控制者名下"
  - "被链上分析用于追踪用户行为"
  - "当地址共享交易模式时会降低隐私"
sources: []
relatedTerms:
  - address
  - address-indexing
  - address-reuse
  - chain-analysis
  - coin-control
  - coinjoin
  - fungibility
liveWidget: ~
---

地址聚类是一种[链上分析](/glossary/chain-analysis)技术，用于将可能属于同一所有者的比特币[地址](/glossary/address)归组。它是大多数区块链监控的 foundational 原语。

主要启发式方法：

- **共同输入所有权。** 如果一笔[交易](/glossary/transaction)花费了来自多个地址的 UTXO，这些地址几乎肯定属于同一所有者（唯一能为所有输入签名的实体）。这是最强的聚类启发式方法，也是 [PayJoin](/glossary/payjoin) 对分析如此具有破坏性的原因——它故意违反了这个假设。
- **找零输出检测。** 一笔交易通常有两个输出：支付和找零。找零通常返回给发送方。检测哪个输出是找零会揭示更多所有权信息。多种启发式方法（整数倍支付、新地址模式、脚本类型匹配）在不同程度上可以识别找零输出。
- **地址复用。** 如果你以前在任何上下文中见过地址 A，那么涉及 A 的每笔新交易都与之前的历史关联。
- **时间相关性。** 大约同一时间、从同一网络位置广播、具有类似费率模式的交易——这些都指向同一用户。
- **外部锚定。** 有 KYC 的交易所拥有将地址映射到身份的客户记录。一旦聚类中的某个地址被识别，整个聚类就被识别了。

隐私防御方法就是故意违反这些启发式：

- 不要在单笔交易中合并来自不同身份上下文的 UTXO。
- 使用[币控制](/glossary/coin-control)来选择花费哪些 UTXO。
- 运行 [CoinJoin](/glossary/coinjoin) 或 [PayJoin](/glossary/payjoin) 来打破共同输入假设。
- 避免[地址复用](/glossary/address-reuse)。
- 使用[闪电网络](/glossary/lightning-network)进行不需要上链的支付。

聚类不是一次性的检测；它是一组不断积累的证据，随时间推移越来越强。防御也是持续的：比特币上的隐私是一种实践，不是一次性的修复。
