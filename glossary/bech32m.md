---
title: "BECH32m"
slug: bech32m
draft: false
shortDefinition: "用于 Taproot 的更新版 bech32 地址格式（BIP-350），比原始 bech32 具有更好的错误检测能力。"
keyTakeaways:
  - "支持使用 'bc1p' 前缀的 Taproot 地址"
  - "增强的校验和，减少地址错误"
  - "在 BIP-350 中定义为 bech32 的升级"
sources: []
relatedTerms:
  - address
  - b32-address
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
liveWidget: ~
---

Bech32m 是用于 [Taproot](/glossary/taproot) 及任何未来 SegWit 版本的地址编码格式。在主网上看起来像 `bc1p...`，在测试网上像 `tb1p...`，使用与原始 [bech32](/glossary/bip-173-bech32) 格式相同的字符集，但校验和常数不同。

新格式的原因是 bech32 中的一个微妙 bug。原始 bech32 校验和使用常数 1，它与某些编辑距离属性的交互不佳：拼写错误或攻击者可以创建地址变体，尽管编码了不同数据仍能通过 bech32 验证。Pieter Wuille 在 2020 年发现了这个问题，并提出了 bech32m（BIP 350），使用不同的校验和常数（`0x2bc830a3`），弥补了这个弱点。

实际中的分割：

- **见证版本 0** 输出（[P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) `bc1q...` 和 [P2WSH](/glossary/p2wsh-pay-witness-script-hash) `bc1q...`）出于向后兼容继续使用原始 bech32。这个弱点在实践中不影响 v0，因为 v0 不允许该 bug 会利用的长度变体。
- **见证版本 1+**（Taproot `bc1p...` 及任何未来版本）使用 bech32m。地址验证器根据第一个解码数据字节（见证版本）选择正确的算法。

对用户来说，区别是不可见的。钱包为自己生成的地址类型选择正确的编码。有趣的故事主要是建设性的密码学审查在任何人实际受害之前发现了 bug，而比特币的软分叉升级模型干净地适应了修复。

规范：[BIP-350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki)。
