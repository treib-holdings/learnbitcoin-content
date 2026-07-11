---
title: "托管钱包"
slug: custodial-wallet
draft: false
shortDefinition: "由第三方代用户持有私钥的钱包，类似于银行持有客户资金。"
keyTakeaways:
  - "资金由第三方实体控制"
  - "方便但引入显著的交易对手风险"
  - "与比特币的自托管原则相对"
sources: []
relatedTerms:
  - counterparty-risk
  - custodial-lightning-wallet
  - deterministic-wallet
  - escrow
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
liveWidget: ~
---

托管钱包是第三方持有[私钥](/glossary/private-key)、你持有账户余额的钱包。Coinbase、Binance、Cash App、Robinhood——任何你"有 BTC"但从未看到助记词的服务都是托管的。

这实际意味着：你不拥有比特币。你拥有的是对公司持有的比特币的*索取权*，记录在该公司的内部数据库中。如果他们有偿付能力且配合，该索取权就像拥有比特币一样运作。如果他们不是，就不行。

托管方失败的频率比加密推广者承认的要高。Mt. Gox 在 2014 年丢失了 850,000 BTC。QuadrigaCX 在 2019 年因 CEO 去世而丢失了密钥。2022 年的连锁暴雷在同一年内带走了 Celsius、BlockFi、Voyager、Genesis 和 FTX，仅 FTX 就有 80 亿美元的客户缺口。客户回收需要数年且通常是不完整的。

即使正常运营的托管方也可以冻结你的账户、要求额外 KYC、在波动期间限制提现，或因内部妥协而悄悄失去对自己热钱包的访问。风险模式是结构性的，不是理论性的。

"不是你的密钥，就不是你的币"就是回应。这不是口号；这是技术现实。比特币只在实际密钥持有者手中提供其核心特性——抗审查、抗没收、抗贬值的货币。其他人只是在用一家高摩擦的银行。

托管钱包有合法用途：作为法币入金通道（你必须从某个地方开始），作为主动交易的场所，作为偶尔的支付通道。只是不要把它们与拥有比特币混淆。把你真正想保留的东西转移到自托管（参见[钱包](/glossary/wallet)、[硬件钱包](/glossary/hardware-wallet)）。
