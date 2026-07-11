---
title: "P2WPKH（Pay to Witness Public Key Hash）"
slug: p2wpkh-pay-witness-public-key-hash
draft: false
shortDefinition: "一种原生 SegWit 单签格式（通常为 bech32 bc1q...），降低手续费并防止签名延展性。"
keyTakeaways:
  - "一种针对单密钥/签名的见证版本，具有更好的手续费效率"
  - "将签名数据从主区块中移出，消除延展性"
  - "被鼓励作为现代钱包的标准，取代传统地址"
sources: []
relatedTerms:
  - address
  - bip-85
  - p2sh
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2WPKH——"Pay to Witness Public Key Hash"——是 [P2PKH](/glossary/p2pkh-pay-public-key-hash) 的原生 [SegWit](/glossary/segwit-segregated-witness-bip-141) 版本。它是 SegWit 2017 年激活后成为标准的单签地址格式。地址以 `bc1q` 开头（例如 `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`）。

功能上与 P2PKH 相同：锁定到一个 20 字节的[公钥](/glossary/public-key)哈希，用公钥加签名解锁。改变的是*签名数据的位置*。

在 SegWit 中，解锁数据（"见证"）与交易主体分离。这有两个实际效果：

- **更低的实际手续费。** 见证数据按非见证数据 1/4 的权重计算。一个典型的 P2WPKH 花费比等效的 P2PKH 花费便宜约 40%。
- **无交易延展性。** [txid](/glossary/transaction) 仅基于非见证部分计算。签名在广播后不能被篡改以改变 txid。这正是使[闪电网络](/glossary/lightning-network)实际可部署的原因。

P2WPKH 是 2018 年到 2023 年左右的主导收款格式。到 2026 年，许多钱包已将默认设置转向 [P2TR](/glossary/taproot)（Taproot，`bc1p...`）以获得更低手续费和更好隐私。P2WPKH 仍然完全受支持，比 P2PKH/P2SH 更便宜，是日常使用的很好选择。

与 P2PKH 一样，P2WPKH 对[后量子威胁](/glossary/post-quantum-bitcoin)提供了纵深防御：公钥在地址中被哈希，仅在花费时才揭示。一次性使用的 P2WPKH 地址在今天是量子安全的；重复使用的地址则不是，因为花费见证包含原始公钥，后续每次存款都继承这种暴露。
