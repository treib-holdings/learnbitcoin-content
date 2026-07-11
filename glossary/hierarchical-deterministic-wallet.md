---
title: "层次确定性钱包"
slug: hierarchical-deterministic-wallet
draft: false
shortDefinition: "所有地址和私钥从单个助记词或主种子派生的钱包（同义词：HD 钱包）。"
keyTakeaways:
  - "单个助记词控制整棵密钥树"
  - "实现简单的备份和恢复"
  - "基于 BIP 32、44 和（通常）39 的助记词"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - bip-85
  - bitcoin-dev-kit-bdk
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - inheritance-seed-backup
  - seed-phrase
  - wallet
  - wallet-import-format-wif
  - xpub-extended-public-key
sameAs:
  - "https://en.bitcoin.it/wiki/Hierarchical_deterministic_wallet"
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

层次确定性（HD）钱包是每个[私钥](/glossary/private-key)和每个[地址](/glossary/address)都从单个主种子确定性派生的钱包。备份种子一次，你就备份了钱包曾经生成的每个密钥以及未来将生成的每个密钥。

HD 设计在三个 [BIP](/glossary/bip-bitcoin-improvement-proposal) 中规定：

- **BIP-32**——主派生算法。定义如何将主种子转换为子密钥树，使用 HMAC-SHA-512 确定性地派生而不泄露父密钥。
- **[BIP-39](/glossary/bip-39)**——种子到词的编码（12/24 词[助记词](/glossary/seed-phrase)）。
- **[BIP-44](/glossary/bip-44)**——标准化派生路径结构（`m/purpose'/coin'/account'/change/index`），让不同钱包软件发现彼此的账户和地址。

在实践中为什么重要：

- **备份简单。** 写下 12 或 24 个词。完成。覆盖所有当前和未来密钥。
- **每笔交易获得新地址。** 无复用，更好隐私，无额外备份负担。
- **种子可移植。** 在完全不同的软件中恢复钱包（Sparrow、Electrum、Bitcoin Core、Trezor Suite），它可以重新派生相同密钥并找到相同的币。
- **只读模式可行。** 你可以与另一个工具共享扩展*公钥*（xpub）来派生接收地址而无需暴露任何私钥。

几乎每个现代比特币钱包都是 HD。2013 年前的钱包（早期 Bitcoin Core、Bitcoin-Qt）生成随机独立密钥，每次交易后需要备份钱包文件——糟糕得多的用户体验，已完全过时十多年。
