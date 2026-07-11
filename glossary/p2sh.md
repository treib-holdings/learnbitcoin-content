---
title: "P2SH（Pay to Script Hash）"
slug: p2sh
draft: false
shortDefinition: "比特币第一个重大地址格式升级（BIP 16，2012 年）。让接收方发布一个简短的脚本哈希——地址以 `3` 开头——仅在花费时才揭示完整脚本。"
keyTakeaways:
  - "接收方发布一个 20 字节哈希；实际赎回脚本仅在花费时才揭示"
  - "使多签钱包成为可用的基础功能（不再要求发送方知道完整脚本）"
  - "成本转移：复杂脚本的字节成本由花费方而非付款方承担"
  - "是让 SegWit 通过 'P2SH 包裹的 SegWit' 地址逐步部署的桥梁"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-script
  - multisig
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - psbt
  - script
  - segwit-segregated-witness-bip-141
  - soft-fork
  - taproot
sameAs:
  - "https://en.wikipedia.org/wiki/Pay_to_script_hash"
  - "https://en.bitcoin.it/wiki/Pay_to_script_hash"
  - "https://en.bitcoin.it/wiki/BIP_0016"
  - "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki"
liveWidget: ~
---

P2SH——"Pay to Script Hash"（支付到脚本哈希）——是一种脚本格式，使复杂的 [Bitcoin Script](/glossary/bitcoin-script) 作为接收地址变得实用。通过 [BIP-16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki) 引入，2012 年 4 月作为[软分叉](/glossary/soft-fork)激活，是 P2PKH 之后比特币第一个重大地址格式升级。P2SH 地址以 `3` 开头（例如 `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`）。

## 机制

在 BIP-16 之前，如果你想用多签或其他复杂脚本接收资金，*发送方*需要知道完整脚本并将其包含在输出中——这意味着更长的交易、没有隐私和糟糕的用户体验。P2SH 颠倒了这一点：接收方只发布一个 20 字节的脚本哈希，实际脚本仅在接收方花费时才揭示。

输出只是锁定到"哈希为 X 的脚本"。当你后来花费时，你揭示实际脚本（"赎回脚本"）以及它所需的任何内容——签名、原像、时间锁检查等。

## 它带来的能力

- **多签钱包成为可用基础功能。** 在 P2SH 之前，多签在理论上被支持但在实际中不可用。P2SH 之后，用户可以分享简单的 `3...` 地址并直接接收到多签设置中。
- **成本转移。** 复杂脚本的字节成本由花费方（揭示脚本时）承担，而非付款方。这很合理。
- **隐藏复杂性。** 链上显示的是地址而非脚本结构——在花费前这是一种隐私优势。
- **未来格式升级的模式。** P2SH 的"先哈希后揭示"模型直接影响了 [SegWit](/glossary/segwit-segregated-witness-bip-141) 的原生脚本哈希格式（[P2WSH](/glossary/p2wsh-pay-witness-script-hash)）和 Taproot。
- **SegWit 采用的桥梁。** 2017 年 SegWit 上线时，可以将其包裹在 P2SH 中（"P2SH-P2WPKH"）以兼容还不支持原生 SegWit 的钱包。P2SH 包裹的 SegWit 地址也以 `3` 开头，但在 SegWit 规则下花费。

## 现代用法

P2SH 如今最常用于传统多签（基于 `OP_CHECKMULTISIG` 的脚本）和仍在使用中的包裹 SegWit 设置。现代继任者是 [P2WSH](/glossary/p2wsh-pay-witness-script-hash)（原生 SegWit 脚本哈希）和 [Taproot](/glossary/taproot) 脚本路径花费——两者都更便宜且具有更好的特性。

BIP-16 是最早的例子之一，展示了一个小而精心设计的软分叉如何在不改变基础协议本质的情况下，解锁全新的使用类别。
