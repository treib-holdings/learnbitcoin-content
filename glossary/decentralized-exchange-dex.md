---
title: "去中心化交易所（DEX）"
slug: decentralized-exchange-dex
draft: false
shortDefinition: "没有中央托管人的交易平台，通常使用链上订单簿或原子交换进行点对点交易。"
keyTakeaways:
  - "用户直接交易，无需交出私钥"
  - "交易对手风险更低但流动性通常也更低"
  - "实现复杂度因链而异"
sources: []
relatedTerms:
  - bitlicense
  - centralized-exchange-cex
  - decentralization
  - exchange
  - exchange-api-key
liveWidget: ~
---

去中心化交易所（DEX）是没有中央方持有用户资金的交易场所。交易点对点发生，由密码协议而非信任运营商来保障安全。

对于比特币，主要的 DEX 模式有：

- **[原子交换](/glossary/atomic-swap)**——BTC 与其他资产之间基于 HTLC 的无信任交换。比中心化订单簿慢，但无需托管。
- **Robosats**——仅限 Tor 的点对点市场，使用闪电网络托管。订单簿将 BTC 与法币匹配（通过本地支付通道发送）；托管由闪电 HTLC 持有，而非平台。
- **Bisq**——更早建立的点对点市场，使用链上多签托管。比 Robosats 慢但支付方式更灵活。
- **Submarine-swap 服务**如 Boltz Exchange，用于无信任的链上 ↔ 闪电网络转换。

优势：

- **无托管人。** 你永远不会把密钥交给服务。交易对手风险仅限于特定交易，由托管保护。
- **大多数情况下无需 KYC。** 一些点对点平台完全匿名运营；其他让你选择身份验证级别。
- **抗审查。** 没有可以被传唤或被施压冻结你账户的中央运营商。

权衡：

- **流动性更薄。** 中心化交易所在几乎所有交易对上都有更深的订单簿。
- **用户体验更粗糙。** DEX 界面通常不如商业交易所精致。
- **法币通道是本地的。** 你通常通过银行转账、现金存款或本地支付应用而非统一存款流程支付。

对于关心避免[交易对手风险](/glossary/counterparty-risk)和 [KYC](/glossary/kyc-know-your-customer) 的用户，DEX 是原则性答案。它们不如 Coinbase 顺滑，但保留了最初带你来到比特币的那些特性。
