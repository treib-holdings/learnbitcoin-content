---
title: "P2WSH（Pay to Witness Script Hash）"
slug: p2wsh-pay-witness-script-hash
draft: false
shortDefinition: "P2SH 的 SegWit 版本，用于高级脚本（如多签），地址以 bc1q 开头。"
keyTakeaways:
  - "将 P2SH 的功能带入 SegWit 的见证结构"
  - "减少复杂脚本/多签的链上数据占用"
  - "现代钱包中优先于旧版 P2SH 用于高级脚本"
sources: []
relatedTerms:
  - address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2WSH——"Pay to Witness Script Hash"——是 [P2SH](/glossary/p2sh) 的原生 [SegWit](/glossary/segwit-segregated-witness-bip-141) 版本。它将相同的"发送到脚本哈希"模型带入 SegWit 的见证结构中，享有所有 SegWit 优势：更低的实际手续费、无延展性。

地址以 `bc1q` 开头，比 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) 地址明显更长，因为 P2WSH 使用 32 字节的脚本哈希（SHA-256），而 P2WPKH 使用 20 字节的密钥哈希（SHA-256 的 RIPEMD-160）。更长的哈希提供更强的抗碰撞性，这对于可能与非合作方共享的脚本很重要。

P2WSH 在实际中的用途：

- **多签钱包。** 原生 SegWit 的 2-of-3、3-of-5 等。
- **复杂 HTLC。** 一些[闪电网络](/glossary/lightning-network)通道构造使用 P2WSH 输出。
- **任何具有非简单花费逻辑的场景。** 时间锁、哈希锁、金库构造。

对于支持 Taproot 的设置，[P2TR](/glossary/taproot)（见证版本 1）通常以更好的特性替代 P2WSH：通过 MuSig2 聚合签名、用 MAST 隐藏脚本分支、更小的链上足迹、与单签不可区分的花费。2026 年新的多签钱包通常默认使用 Taproot。P2WSH 仍在大量用于旧的多签设置和尚未迁移的生态系统。
