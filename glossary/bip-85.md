---
title: "BIP 85"
slug: bip-85
draft: false
shortDefinition: "定义从单个主种子创建多个确定性子种子的标准，改善备份便利性。"
keyTakeaways:
  - "允许从一个根生成多个助记词种子"
  - "简化多个钱包的备份"
  - "扩展 HD 钱包的分层方法"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - bip-44
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
liveWidget: ~
---

[BIP-85](https://github.com/bitcoin/bips/blob/master/bip-0085.mediawiki)定义了一种确定性方式，从单个主 BIP-32 钱包生成子密钥（通常是新的 BIP-39 助记词，但也支持 WIF 私钥、HD 种子字节或通用 256 位熵等其他格式）。每个子派生在结果钱包运营方面完全独立，但可从主种子加派生路径重现。

为什么有用：

- **一次备份，多个钱包。**拥有一个精心保护的主种子的用户可以确定性地为独立"子钱包"生成种子——一个日常消费、一个储蓄、一个给家庭成员等。备份合并到主种子。
- **可恢复的密钥，非随机的。**如果丢失子钱包的助记词，可以从主种子加路径重新派生。无需独立备份每个子钱包。
- **通用熵生成。**BIP-85 也支持派生非助记词输出——PGP 密钥、密码种子、任何需要锚定到已备份源的确定性随机性的应用的任意字节。

缺点：**主种子成为单点灾难性故障。**如果主种子泄露，每个子钱包同时被入侵。对于有严肃操作安全（硬件钱包、安全备份存储）的用户，这种集中是可以接受的。对于密钥卫生较弱的用户，它可能比独立种子更糟。

BIP-85 在 Bitcoin Core、硬件钱包（ColdCard、Trezor、Foundation Passport）和多个钱包技术栈中被广泛支持。它是"我想要多个钱包但只保管一个备份"的标准。

参见[分层确定性钱包](/glossary/hierarchical-deterministic-wallet)了解此规范构建于其上的 BIP-32 框架。
