---
title: "双盲市场"
slug: double-blind-marketplace
draft: false
shortDefinition: "买方和卖方都只知道对方最少身份信息的在线市场，通常使用基于比特币的托管。"
keyTakeaways:
  - "在交易中保护买卖双方身份"
  - "通常使用多签或闪电网络托管来最小化信任"
  - "可以有利于匿名但带来监管挑战"
sources: []
relatedTerms:
  - decentralization
  - decentralized-exchange-dex
  - fungibility
  - security
  - silent-payments
  - stealth-address
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

双盲市场是买方和卖方除了完成交易严格需要的信息外，都不持有对方个人身份信息的市场。比特币的假名性质，结合[托管](/glossary/escrow)原语和 [Tor](/glossary/tor-hidden-service) 等[隐私网络](/glossary/tor-hidden-service)，使这种市场在技术上可行。

使其运作的模式：

- **身份层：** 参与者仅通过假名句柄（随机用户名、公钥）连接。无 KYC，无真名账户。
- **网络层：** 交易通过 Tor 或 I2P 进行以隐藏 IP。
- **结算层：** 比特币（尤其是[闪电网络](/glossary/lightning-network)）处理支付，无需传统金融系统的身份标识。
- **托管层：** [多签](/glossary/escrowed-lightning-channel)或基于 HTLC 的托管在交易期间持有资金。可信但非托管的第三方可以调解纠纷。

2026 年真正的比特币原生双盲市场：

- **Bisq**——点对点交易，链上多签托管，仅限 Tor。成熟，资金充足。
- **Robosats**——通过闪电网络点对点交易，仅限 Tor，快速结算。
- **AgoraDesk**（原 LocalBitcoins 克隆，在该平台关闭后）——点对点法币到 BTC 交易。
- **基于私密聊天的市场**——在 Nostr、Tor 论坛和类似场所。结构化程度较低但真实存在。

双盲市场实现了什么：

- **隐私免受链上分析者侵犯。** 交易不易链接到身份。
- **抗审查。** 难以关闭一个没有参与者可识别的市场。
- **为没有银行账户的用户提供访问。** 无 KYC 要求意味着不会因地理或身份而被排斥。

它们无法避免的：

- **运营商风险。** 即使去中心化市场也有软件、通信渠道和声誉系统，可能被攻击或胁迫。
- **商品本身的交易对手风险。** 双盲市场无法保证商品如所宣称的那样；这仍是每笔交易的信任问题。
- **法律风险。** 匿名有帮助但并非完美，监管者有越来越多的链上分析工具。

双盲市场是比特币使法币无法实现的一个真实世界例子：陌生人之间无需许可的商业，带有密码学纠纷解决。用于合法贸易（隐私、司法灵活性、规避法币通道）以及有时用于非法活动。工具是双刃剑，就像大多数隐私基础设施一样。
