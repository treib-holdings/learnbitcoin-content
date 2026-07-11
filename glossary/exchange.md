---
title: "交易所"
slug: exchange
draft: false
shortDefinition: "用于交易 BTC 的服务或市场，无论是中心化（CEX）还是去中心化（DEX）。"
keyTakeaways:
  - "实现法币到 BTC 或加密货币之间的交易"
  - "中心化平台持有用户资金；去中心化平台则不持有"
  - "流动性、用户体验和监管特性差异很大"
sources: []
relatedTerms:
  - centralized-exchange-cex
  - clearing-price
  - decentralized-exchange-dex
  - exchange-api-key
  - futures
  - market-depth
  - price-discovery
  - price-slippage
liveWidget: ~
---

交易所是任何让用户将比特币交易为其他资产（法币、稳定币或其他加密货币）的服务。两个结构性类别比品牌更重要：

- **中心化交易所（CEX）。** 一家公司持有客户资金，在内部订单簿上撮合订单，并在自己的账本上结算交易。交易所持有私钥；客户持有交易所数据库中的欠条。Coinbase、Kraken、Binance、Bitstamp、Bitfinex 等数十家。
- **去中心化交易所（DEX）。** 交易通过智能合约或点对点撮合协议发生；用户在整个过程中保持自己资金的保管。在比特币上，原子交换和 Bisq 等协议属于此类；大部分"DEX"交易量发生在其他链上（Uniswap 等），不直接是比特币交易。

信任模型是分界线。CEX 是托管人：你信任他们不会丢失、冻结或窃取你的币。DEX（严格意义上）是场所：你信任协议，但你保管密钥。

CEX 失败记录是新比特币用户应该学习的最重要内容之一。主要历史崩盘：

- **Mt. Gox（2014年）**：东京交易所，处理约 70% 的全球比特币交易量；丢失或被盗约 850,000 BTC。客户十多年后仍在部分偿还中。
- **QuadrigaCX（2019年）**：加拿大交易所，CEO 去世（或"去世"）时唯一持有冷钱包访问权限；约 1.9 亿美元客户资金消失。
- **Celsius（2022年）**：加密借贷平台冻结提现，宣布破产。客户资金被锁定数年。
- **FTX（2022年）**：巅峰时全球第二大加密交易所；在挪用客户资金的披露后几天内崩塌。约 80 亿美元客户缺口。
- **BlockFi、Voyager、Genesis、Gemini Earn（2022-2023年）**：加密借贷平台和借贷产品在 2022 年连锁暴雷期间冻结提现。

模式一致：CEX 的安全性仅相当于其运营者的能力和诚信。大多数用户为方便起见在 CEX 上开始（KYC 法币入金通道、简单 UI、客户服务），但第四章的宣言规则仍然成立：不是你的密钥，就不是你的币。对你重要的任何金额，提取到自托管。
