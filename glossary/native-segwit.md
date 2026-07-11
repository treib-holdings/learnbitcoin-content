---
title: "原生 SegWit"
slug: native-segwit
draft: false
shortDefinition: "SegWit 引入的 Bech32 交易格式（bc1q...），提供更低手续费和减少交易可延展性。"
keyTakeaways:
  - "因 SegWit 对见证数据的折扣而节省手续费"
  - "简化地址解析，具有更好的错误检测"
  - "成为现代钱包的首选标准"
sources: []
relatedTerms:
  - bech32m
  - p2sh
  - p2sh-p2wsh-nested-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - segwit-segregated-witness-bip-141
  - taproot
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki"
liveWidget: ~
---

"原生 SegWit"指使用 bech32 地址（主网 `bc1q...`）的 SegWit，而非较旧的 P2SH 包装 SegWit 模式（`3...` 地址）。见证数据无论哪种方式都居住在交易的隔离见证部分；区别在于链上编码。

为什么有"原生"与"包装"之分：

- **包装 SegWit**（P2SH-P2WPKH，[P2SH-P2WSH](/glossary/p2sh-p2wsh-nested-segwit)）。一个伪装成 P2SH 输出的 SegWit 输出，使尚不理解 bech32 的钱包仍能发送给它。与一切兼容但为包装开销付费。
- **原生 SegWit**（P2WPKH，P2WSH）。直接 bech32 编码，无包装。更小的交易、更低的手续费、相同的安全属性。要求发送方钱包理解 bech32，所有现代钱包都已支持。

原生 SegWit 是 SegWit 设计（BIP 141）更清晰的最终状态，但生态系统先推出包装版以缓解过渡。到 2026 年，原生 SegWit 是新钱包的默认选项，包装形式主要是遗留。

手续费节省真实但适度：P2WPKH 花费比包装等价物大约便宜 10-15% vbyte。加上 [Taproot](/glossary/taproot)（`bc1p...`，[bech32m](/glossary/bech32m)）获得略多节省和更好隐私，你就有了现代地址格式栈：遗留 P2PKH（`1...`）用于旧钱包，包装 SegWit（`3...`）用于过渡场景，原生 SegWit（`bc1q...`）用于当前使用，Taproot（`bc1p...`）用于前沿。
