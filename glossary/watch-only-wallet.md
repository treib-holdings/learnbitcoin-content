---
title: "只读钱包"
slug: watch-only-wallet
draft: false
shortDefinition: "只包含公钥或地址的钱包，让用户监控余额但不能花费。"
keyTakeaways:
  - "提供资金可见性而无花费能力"
  - "在 HD 设置中通常使用 xpub 进行派生"
  - "用于安全审计、托管监督或会计"
sources: []
relatedTerms:
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - security
  - wallet
  - wallet-import-format-wif
liveWidget: ~
---

只读钱包包含[公钥](/glossary/public-key)或[扩展公钥](/glossary/xpub-extended-public-key)但不包含[私钥](/glossary/private-key)。它可以显示余额、跟踪入账交易、生成接收地址、构建未签名交易——但实际不能签名或花费。

标准模式：[硬件钱包](/glossary/hardware-wallet)持有私钥，你将其 **xpub**（扩展公钥）加载到笔记本电脑或手机上的只读钱包中。只读钱包从 xpub 派生你将来会用的每个地址，在链上监控它们，实时显示钱包状态。当你想发送时，只读钱包构建一个 [PSBT](/glossary/psbt) 并交给硬件钱包签名。

这种分离为什么有用：

- **日常监控无暴露。** 你的手机显示钱包余额，而密钥从不在你手机上。
- **审计。** 会计、商业伙伴或审计员可以验证钱包的链上活动而无需花费权限。
- **多签协调。** 每个共同签名者可以保留共享钱包的只读视图，而实际密钥在隔离的硬件上。
- **备份验证。** 在另一台机器上恢复 xpub 来确认你的地址匹配——在不暴露助记词的情况下检查备份。

只读钱包被广泛支持。Sparrow、Electrum、Bitcoin Core、Specter Desktop、Nunchuk、BlueWallet 等都原生处理 xpub。现代自托管工作流几乎总是将硬件钱包与只读桌面或移动配套应用配对——这是"知道余额"和"持有密钥"之间最干净的分离。

参见[硬件钱包](/glossary/hardware-wallet)了解签名端设备，以及 [PSBT](/glossary/psbt)了解只读钱包和签名钱包如何交换交易。
