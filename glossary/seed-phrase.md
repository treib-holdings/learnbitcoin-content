---
title: "助记词"
slug: seed-phrase
draft: false
shortDefinition: "12 或 24 个英文单词（BIP-39），编码了比特币钱包的主密钥。这是完整的备份——丢了它就丢了币，泄露了它别人就能拿走你的币。"
keyTakeaways:
  - "标准是 BIP-39——一个 2,048 个单词的列表，每个单词 11 位，内置校验和"
  - "12 个单词 = 128 位熵。24 个单词 = 256 位。两者在实践中都不可猜测"
  - "HD 钱包中的每个密钥和地址都从这一组词派生"
  - "离线存储。验证备份。考虑地理冗余"
sources:
  - { label: "Seed Backup Strategies rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/seed-backup-strategies" }
relatedTerms:
  - bip-32
  - bip-39
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - mnemonic-entropy-bits
  - mnemonic-password
  - private-key
  - seed-entropy-mixer
  - seed-tool
  - security
sameAs:
  - "https://en.bitcoin.it/wiki/Seed_phrase"
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

助记词是一组 12 或 24 个英文单词，编码了整个比特币钱包的主密钥。也叫"mnemonic phrase"或"recovery phrase"——这些术语在实践中可以互换使用。

## 它是什么，机制层面

标准是 **[BIP-39](/glossary/bip-39)**，发布于 2013 年。它定义了：

- 一个固定的 2,048 个单词的列表。每个单词的前四个字母唯一，所以即使只打了一半也能无歧义地解析，转录错误也更容易发现。
- 从二进制熵到单词序列的映射。每个单词编码 11 位。
- 一个由 SHA-256 派生的校验和，所以打错或随机猜测的助记词会验证失败，而不是静默地打开一个不同的（可能为空的）钱包。
- 从单词到 512 位主种子的派生：PBKDF2-HMAC-SHA512，2,048 次迭代，可选的用户自选密码作为盐值。

这个 512 位主种子输入到 [BIP-32](/glossary/bip-32) 层次化密钥派生中，生成钱包使用的每个[私钥](/glossary/private-key)和地址。整个链条——单词到主种子到主私钥到派生密钥到地址——是完全确定性的。同样的词进去，同样的钱包出来，在任何兼容 BIP-39 + BIP-32 的软件上都是如此。

12 个单词编码 128 位熵。24 个单词编码 256 位。两者都绰绰有余；128 位随机性在任何实际意义上都不可猜测，256 位则远超任何可想象的对手的能力。

## 为什么它赢了

便携性。用一个钱包备份，在完全不同品牌的钱包上恢复，你的币还在——只要两者都实现了标准。这种跨厂商互操作性是比特币标准流程中一个低调的胜利。

助记词是**完整的**备份。从这 12 或 24 个单词出发，一个[层次化确定性钱包](/glossary/hierarchical-deterministic-wallet)可以重新生成钱包曾经使用或将要使用的每个私钥、公钥和地址。丢了硬件钱包、手机、笔记本电脑——全部丢了——你只需在任何兼容设备上输入这些单词就能恢复钱包。

这种能力是双刃剑。任何看到你助记词的人都有同样的能力。

## 存储规则

- **写在纸上或金属上。** 不要拍照。不要输入电脑（除非在钱包中恢复时）。不要存在密码管理器或云盘中。
- **验证备份。** 在一个新设备上练习恢复。从未测试过的备份等于没有备份。
- **考虑地理冗余。** 一场火灾同时毁了你的助记词和硬件钱包就等于毁了你的钱。对于非小额资产，在物理上分离的地点放两三份副本是合理的。
- **考虑加一个密码**（"第 25 个词"）。一个可选的、用户自选的附加密码，与 12 或 24 个单词组合派生出单独的钱包。功能强大但增加了操作风险：忘了密码，资金就没了。

助记词是真正自托管比特币时**唯一**必须保护的东西。其他一切都可以恢复；这个不行。

参见[助记词备份策略深度指南](/rabbit-hole/seed-backup-strategies)了解更深入的内容——纸质 vs 金属、多签备份方案、继承规划，以及如何在不向任何人暴露单词的情况下验证备份。
