---
title: "B32 地址"
slug: b32-address
draft: false
shortDefinition: "bech32 地址的别称，指隔离见证（SegWit）引入的 base32 编码格式。"
keyTakeaways:
  - "与 bech32 地址同义"
  - "改善错误检测和二维码扫描"
  - "作为 SegWit（BIP-173）的一部分引入"
sources: []
relatedTerms:
  - address
  - bech32m
  - bip-173-bech32
  - p2pk-pay-public-key
  - p2pkh-pay-public-key-hash
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - silent-payments
  - stealth-address
  - vanity-address
liveWidget: ~
---

"B32"是 [bech32](/glossary/bip-173-bech32) 的非正式简称，即 BIP 173 中定义的地址格式，用于见证版本 0 的 SegWit 输出。在主网上，这些地址以 `bc1q` 开头（P2WPKH 或 P2WSH）。

"B32"这个名字不是比特币标准术语，很少出现在规范文档或钱包 UI 中。生态系统大多数直接说"bech32"或"原生 SegWit 地址"。这个词条存在是因为一些遗留文档使用了这个简称。

bech32 相比旧格式的优势：

- **不区分大小写。**整个地址都是小写，消除了大小写混淆错误。
- **更强的错误检测。**BCH 码校验和几乎能捕获所有单字符拼写错误和大多数字符错误。输错地址时钱包通常会拒绝，而不是意外发送到另一个有效地址。
- **二维码友好。**受限字符集在二维码中编码更高效。

见证版本 1+（Taproot 及未来版本）使用 [bech32m](/glossary/bech32m)——略微不同的校验和，修复了原始 bech32 中发现的一个微妙 bug。这些地址表面上看一样（Taproot 是 `bc1p...`），但使用不同的验证器。

对于现代比特币：优先使用原生 SegWit（`bc1q...`）或 Taproot（`bc1p...`），而非旧的 `1...`（P2PKH）和 `3...`（P2SH 包装）格式。更低手续费、更好的错误检测、更小的二维码。
