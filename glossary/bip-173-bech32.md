---
title: "BIP 173（Bech32）"
slug: bip-173-bech32
draft: false
shortDefinition: "引入 bech32 地址格式，一种与 SegWit 兼容的编码，具有改进的错误检测。"
keyTakeaways:
  - "使用 base32 编码和健壮的校验和"
  - "原生 SegWit 支持降低手续费和延展性"
  - "更容易输入和扫描，错误更少"
sources: []
relatedTerms:
  - address
  - b32-address
  - bech32m
  - bip-bitcoin-improvement-proposal
  - p2sh
  - segwit-segregated-witness-bip-141
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0173"
  - "https://bitcoinops.org/en/topics/bech32/"
liveWidget: ~
---

[BIP-173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)定义了 **bech32**，用于原生 [SegWit](/glossary/segwit-segregated-witness-bip-141)输出的地址格式。Bech32 地址可通过其 `bc1q` 前缀（主网）或 `tb1q`（测试网）识别。

bech32 为何存在且值得关注：

- **更好的错误检测。** Bech32 的校验和经过数学设计，能检测拼写错误和相邻字符交换——人类实际会犯的那类错误。之前的 Base58Check 格式很强但不够严谨；bech32 以更好的数学保证捕获更多错误。
- **仅小写 + 字母数字。** Bech32 只使用 `0-9` 和 `a-z`（排除视觉易混淆字符如 `1/l/I` 和 `0/O/b`）。更容易朗读、电话口述和手动重新输入。
- **二维码友好。** 全小写的 bech32 生成比混合大小写 Base58 更小的二维码。钱包在二维码内以大写渲染 bech32 地址以进一步紧凑，同时保持有效。
- **原生 SegWit 支持。** 核心要点：bech32 被设计为见证版本 0 的地址格式。从 bech32 花费比传统 P2PKH 节省约 30-40% 手续费。

由 Pieter Wuille（Bitcoin Core 开发者）设计，2017 年提出，bech32 在 2010 年代后期成为新 SegWit 部署的默认地址格式。

继任者 **bech32m**（BIP-350）为 [Taproot](/glossary/taproot)地址（前缀 `bc1p`）引入。它使用基本相同的格式但更改了一个常数，修复了 bech32 中对新见证版本有影响的微妙弱点。

2026 年，大多数钱包默认使用 bech32 或 bech32m 地址收款。传统格式（`1...`、`3...`）仍然有效但在日常使用中逐渐被淘汰。参见 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)和 [Taproot](/glossary/taproot)了解 bech32/bech32m 包装的脚本格式。
