---
title: "托管式闪电钱包"
slug: custodial-lightning-wallet
draft: false
shortDefinition: "由第三方代你管理闪电网络通道和资金的闪电钱包，类似于在交易所存放 BTC。"
keyTakeaways:
  - "需要信任服务来持有你的闪电资金"
  - "比运行节点更容易上手"
  - "比自行管理通道和密钥安全性低"
sources: []
relatedTerms:
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-wallet
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-probe
  - lightning-routing
  - wallet
  - wumbo-channels-lightning
liveWidget: ~
---

托管式[闪电网络](/glossary/lightning-network)钱包是由第三方代你管理通道、[私钥](/glossary/private-key)和流动性的钱包。你登录，看到余额，发送和接收闪电支付——但底层通道和签名密钥属于运营商。这是[托管式链上钱包](/glossary/custodial-wallet)的闪电网络版本。

为什么存在托管式闪电钱包：

- **用户体验大幅简化。** 无需管理通道，无需获取[入站流动性](/glossary/lightning-channel-capacity)，无需节点在线要求。用邮箱或手机号注册，几秒内发送和接收。
- **对非技术用户的入门是现实的。** 自托管闪电虽然改进很快，但仍然比托管式有更多活动部件。
- **闪电的用户体验一直是采用的限制因素。** 托管钱包在非托管用户体验赶上之前填补空白。

你放弃的：

- **自托管。** "[不是你的密钥，就不是你的币](/glossary/custodial-wallet)"对闪电余额和链上余额同样适用。托管人可以冻结提现、配合传票、破产或 simply 被黑客攻击。
- **隐私。** 托管人看到你的每笔支付和收款。如果涉及 KYC，他们可以将闪电活动与你的真实身份关联。
- **抗审查。** 托管人可以拒绝向特定地址支付、地理围栏使用或因任何原因关闭你。

对大多数用户的务实立场：托管式闪电钱包适合**你会当作现金携带的零花钱**——你资产中小额日常支出部分。对于有意义的储蓄，与[托管式链上](/glossary/custodial-wallet)相同的逻辑适用：转移到你实际控制的钱包。

自托管闪电选项已有显著改进；现代非托管闪电钱包在保持密钥在你手中的同时，用户体验已接近托管级别。如果你经常使用闪电网络，值得调查自托管方面，而不是默认使用托管人。寻找持有自己密钥、为你管理通道、让你无需将余额托付给运营商即可支付和接收的钱包。
