---
title: "链上分析"
slug: chain-analysis
draft: false
shortDefinition: "通过检查链上交易、地址和模式来识别或关联用户活动。"
keyTakeaways:
  - "利用公开账本追踪资金流向"
  - "被公司和执法部门使用"
  - "推动了隐私保护方案的发展以避免地址聚类"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - block-explorer
  - chain-visualization
  - coinjoin
  - miner-extractable-value-mev
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

链上分析是一门行业和技艺，旨在从公开的比特币区块链中提取关于真实身份和行为的信息。专业公司（Chainalysis、Elliptic、CipherTrace、TRM Labs 等）将这种分析出售给交易所、执法部门、政府和合规团队。

其方法依赖于比特币区块链完全公开且永不遗忘这一事实。常见技术：

- **[地址聚类](/glossary/address-clustering)。** 利用交易模式（共同输入、找零地址启发式、时间相关性）将可能属于同一所有者的地址分组。
- **交易所/KYC 锚定。** 将聚类地址与已知的入金平台（Coinbase、Kraken 等）匹配，并在需要时要求提供客户记录。
- **OFAC/制裁标记。** 标记与勒索软件、受制裁实体或被盗资金调查相关的特定地址。
- **行为画像。** 识别混币模式、[CoinJoin](/glossary/coinjoin) 参与情况、交易所到冷存储的资金流等。
- **网络层关联。** 将链上分析与对等网络的[窃听](/glossary/eavesdropping-attack)结合，将广播与 IP 地址关联。

链上分析*擅长*什么：

- 追踪被盗资金到可以冻结它们的交易所。
- 识别勒索软件支付及其背后的钱包。
- 合规：交易所检查入金是否在制裁名单上。

链上分析*还被用于*什么：

- 对普通用户金融活动的大规模监控。
- "污染币"判定，侵蚀[可替代性](/glossary/fungibility)并造成分层市场。
- 在压制性地区针对活动人士、记者和异见人士进行去匿名化。

防御手段是本词汇表中其他地方介绍的隐私技术：[避免地址复用](/glossary/address-reuse)、在适用时使用 [CoinJoin](/glossary/coinjoin) 或 [PayJoin](/glossary/payjoin)、支付时优先使用[闪电网络](/glossary/lightning-network)、通过 [Tor](/glossary/tor-hidden-service) 运行节点、尽可能避免 KYC 瓶颈。

链上分析不会消失。保护隐私的比特币使用是一种纪律，而不是默认状态。
