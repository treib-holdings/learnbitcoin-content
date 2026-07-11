---
title: "BIP 44"
slug: bip-44
draft: false
shortDefinition: "扩展 BIP 32 的 HD 钱包框架以支持多账户、多币种和组织结构。"
keyTakeaways:
  - "为 HD 钱包提供标准多账户布局"
  - "允许一个种子短语下有多种币种"
  - "改善不同钱包之间的跨兼容性"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-bitcoin-improvement-proposal
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - seed-phrase
  - xpub-extended-public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0044"
liveWidget: ~
---

[BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)定义了[分层确定性钱包](/glossary/hierarchical-deterministic-wallet)的标准派生路径结构。正是这个约定让你在一个钱包中备份[助记词](/glossary/seed-phrase)后，可以在任何其他兼容 BIP-44 的钱包中恢复相同账户。

路径结构为：

```
m / purpose' / coin_type' / account' / change / address_index
```

具体来说，第一个比特币账户的第一个接收地址为：

```
m / 44' / 0' / 0' / 0 / 0
```

每个层级的含义：

- **44'**——purpose 编号，BIP-44 式派生固定为 44。（其他 purpose 存在：49' 用于 P2SH 包装 SegWit，84' 用于原生 SegWit，86' 用于 Taproot。）
- **0'**——币种类型，比特币为 0。其他链有自己的编号，见 [SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)。
- **0'**——账户编号。让你在一个钱包内有独立"账户"（如储蓄 vs 日常消费）。
- **0**——找零指示。0 = 接收地址，1 = 内部找零地址。
- **0**——地址索引。每个新地址递增。

撇号表示"硬化"派生——不能仅从父扩展*公*钥派生的层级。这防止了暴露的 xpub 危及钱包层级的其余部分。

BIP-44 是将"备份你的助记词"变成可移植、可靠、多实现标准的规范。几乎所有现代钱包都遵循它（或 BIP-49 / BIP-84 / BIP-86 变体用于不同地址类型）。参见[分层确定性钱包](/glossary/hierarchical-deterministic-wallet)了解此规范构建于其上的 BIP-32 框架。
