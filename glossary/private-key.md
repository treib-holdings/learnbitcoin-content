---
title: "私钥（Private Key）"
slug: private-key
draft: false
shortDefinition: "一个 256 位密钥，授予从派生地址花费 BTC 的权力，必须保密。"
keyTakeaways:
  - "用于签署交易的核心密钥"
  - "丢失或泄露即丧失对 BTC 的控制"
  - "通常由钱包在后台生成/管理"
sources:
  - { label: "Key Space rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/key-space" }
relatedTerms:
  - bip-39
  - hierarchical-deterministic-wallet
  - locked-memory
  - public-key
  - seed-phrase
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
  - "https://en.bitcoin.it/wiki/Private_key"
liveWidget: ~
---

比特币中的私钥是一个 256 位数字。就这样。32 个随机字节，从 2^256 个可能值中抽取。知道这个数字的人可以花费它控制的 BTC。不知道的人不能。

影响是绝对且直接的：

- **丢失私钥，丢失 BTC。** 没有密码重置，没有账户恢复，没有客服热线。协议没有"合法所有者"的概念，只有"谁能用密钥产生有效签名"。
- **泄露私钥，丢失 BTC。** 社交媒体上备份卡的照片、同步到被入侵云盘的密钥文件、捕获密钥的钓鱼邮件——任何一个都够了。
- **生成不当，丢失 BTC。** 可预测的随机数生成器可能产生统计上比 2^256 空间暗示的更易猜测的密钥。这种事发生过，人们因此损失了数百万。
- **泄露到交换区，丢失 BTC。** 像样的钱包软件使用[锁定内存](/glossary/locked-memory)将解密后的密钥保持在交换区和休眠镜像之外。粗糙的实现不会，对旧交换区文件的取证提取曾经提取出过密钥。

现代钱包通过使用[助记词](/glossary/seed-phrase)（[BIP-39](/glossary/bip-39) 助记词）屏蔽了原始的 32 字节私钥，助记词通过[分层确定性钱包](/glossary/hierarchical-deterministic-wallet)结构确定性地生成数千个私钥。你备份 12 或 24 个单词而非 32 字节。功能上安全等价；人类工程学更好。

"不是你的密钥，就不是你的币"是自托管中最重要的句子。如果你的 BTC 在交易所，交易所持有密钥。他们的偿付能力是你的安全模型。比特币的全部意义就是不需要那样。

参见 [Public Key](/glossary/public-key) 了解从这里派生什么以及为什么方向是单向的，以及 [Key Space rabbit hole](/rabbit-hole/key-space) 了解为什么 2^256 比你的直觉更大。
