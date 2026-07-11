---
title: "地址"
slug: address
draft: false
shortDefinition: "一串字符（通常以 1、3 或 bc1 开头），代表比特币支付的收款目标，由公钥派生。"
keyTakeaways:
  - "通过密码学哈希从公钥派生"
  - "存在多种格式（如 P2PKH、Bech32）"
  - "分享地址是接收比特币的方式"
sources: []
relatedTerms:
  - b32-address
  - bech32m
  - bip-173-bech32
  - bitcoin-script
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - price-discovery
  - silent-payments
  - stealth-address
  - vanity-address
sameAs:
  - "https://en.bitcoin.it/wiki/Address"
liveWidget: ~
---

比特币地址是一串短字符，代表支付的收款目标。它编码了[公钥](/glossary/public-key)（或脚本）的[哈希](/glossary/hash)，格式化为易于复制、粘贴和扫描的形式。

你会在网络上看到几种共存的地址格式：

- **传统 / P2PKH**——以 `1` 开头。最初的格式。仍然可用，但比新类型占用更多区块空间。
- **P2SH**——以 `3` 开头。Pay-to-Script-Hash，常用于多签或旧的 SegWit 包装地址。
- **原生 SegWit / Bech32**——以 `bc1q` 开头。由 [BIP-173](/glossary/bip-173-bech32) 引入。手续费更低，错误检测更好。
- **Taproot / Bech32m**——以 `bc1p` 开头。随 [BIP-341](/glossary/taproot) 引入。最佳隐私性，最小签名，支持与单签名外观相同的高级脚本。

所有格式都代表同一个底层概念："要花费发送到此处的 BTC，你必须提供有效的脚本和签名，满足该地址中编码的锁定条件。"不同格式只是指定了不同的锁定脚本结构和不同的链上占用。

地址不是什么：

- **不是你的身份。** 地址是一个收款目标，不是一个账户。一个钱包通常会生成许多地址来收款。
- **不是匿名的。** 链是完全公开的。如果一个地址已经被关联到你（通过交易所 KYC、公开捐赠、地址复用），每一笔涉及它的交易都可以被追溯。参见[可替代性](/glossary/fungibility)。
- **不是永久的。** 大多数钱包为每次入账生成新地址。复用地址会将活动集中在一个可观察的桶中，泄露隐私。

随意分享地址来收款。经常生成新地址。将任何地址的链上历史视为公开账本记录，因为它就是。
