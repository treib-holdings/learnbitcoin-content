---
title: "BIP 32（HD 钱包）"
slug: bip-32
draft: false
shortDefinition: "Pieter Wuille 2012 年的确定性密钥派生标准：一个种子变为一棵密钥树，全部可从单次备份重现。"
keyTakeaways:
  - "定义扩展密钥（xpub / xprv）和通过 HMAC-SHA512 的子密钥派生"
  - "硬化派生（索引 >= 2^31）关闭父密钥恢复攻击"
  - "被普遍采用；每个现代比特币钱包都基于 BIP 32"
sources: []
relatedTerms:
  - bip-39
  - bip-44
  - bip-bitcoin-improvement-proposal
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-aggregation
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

BIP 32 由 Pieter Wuille 于 2012 年 2 月撰写，是分层确定性（HD）比特币钱包的基础标准。一个 512 位种子产生一棵密钥树，全部可从该单一种子重现。备份种子，就备份了钱包将永远派生的每个密钥。

构造很直接。种子被分为 256 位主私钥和 256 位[链码](/glossary/chaincode)，捆绑为扩展私钥（`xprv`）。要派生子密钥，对父密钥、链码和子索引计算 HMAC-SHA512。输出给出子密钥和新的链码。在每个层级重复以遍历树。

两种派生模式：

- **非硬化**（子索引 < 2^31）。子公钥可以从父公钥加链码派生。这就是 [xpub](/glossary/xpub-extended-public-key) 有用的原因：把 xpub 给某人，他们可以派生每个接收地址而永远看不到私钥。
- **硬化**（子索引 >= 2^31）。派生需要父私钥。知道一个硬化子私钥的攻击者无法重建父密钥或其同级。这关闭了非硬化派生的著名攻击。BIP 44 通常在账户层级使用硬化派生，这样泄露的账户密钥不会危及其他账户。

在实践中为什么重要：

- **一次备份，无限地址。**每笔交易生成新地址而不需要更多备份。
- **只读钱包。**将 xpub 导入手机应用以监控硬件钱包余额而不暴露任何私钥。
- **多账户分离。**[BIP 44](/glossary/bip-44)使用硬化账户层级路径，使暴露的账户不会泄露到同级。
- **跨钱包可移植性。**在任何标准钱包中恢复 BIP 32 种子得到相同地址。种子是资产；软件是可替换的。

BIP 32 本身不指定种子的创建或备份方式。那是 [BIP 39](/glossary/bip-39)：助记词。两者共同构成现代比特币自托管的基础。

规范：[BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)。
