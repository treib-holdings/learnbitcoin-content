---
title: "确定性钱包"
slug: deterministic-wallet
draft: false
shortDefinition: "使用单个助记词派生所有子密钥的钱包（BIP 32/44），简化备份和密钥管理。"
keyTakeaways:
  - "一个助记词可以重建所有派生地址"
  - "遵循 HD 标准（BIP 32/44）以实现广泛兼容性"
  - "大幅简化备份和恢复"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - bip-85
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - coin-control
  - custodial-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
---

确定性钱包是每个[私钥](/glossary/private-key)都从单一起始密钥算法派生的钱包。相同种子输入，相同密钥输出，在任何兼容软件上，永远。这是每个现代比特币钱包的定义特性。

在确定性钱包之前，你有一个*随机*钱包：每个新地址来自独立生成的私钥，你的钱包备份必须包含所有密钥。花费一次，生成新地址，就需要新备份。交易后忘记备份？丢失那些资金。2010-2012 年，真实用户以这种方式丢失了真实的比特币。

确定性修复：一个主种子（熵），一个派生算法，无限子密钥。备份种子一次；密钥可以按需重新派生。

主导标准是 [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)，在基本确定性之上添加了**层次化**结构（[HD 钱包](/glossary/hierarchical-deterministic-wallet)）。在实践中，2026 年"确定性钱包"和"HD 钱包"几乎可以互换使用，因为生产中几乎所有确定性钱包都使用层次化扩展。

最低属性：

- **单次备份。** 备份[助记词](/glossary/seed-phrase)一次，恢复一切。
- **可移植。** 相同种子在不同软件上恢复相同钱包（Sparrow、Electrum、Bitcoin Core、硬件钱包），只要两者都实现标准。
- **可重现。** 给定相同种子，两个不同钱包可以独立派生相同地址。用于验证、恢复和只读设置。

仍然偶尔可见的主要非 HD 设计是 **JBOK**（"Just a Bunch Of Keys"，一堆密钥）——随机钱包模式。它现在主要作为历史奇谈和警告存在。用 HD。

主流 BIP-32 变体参见[层次确定性钱包](/glossary/hierarchical-deterministic-wallet)，驱动一切的人类可读备份参见[助记词](/glossary/seed-phrase)。
