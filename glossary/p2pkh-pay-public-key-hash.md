---
title: "P2PKH（支付到公钥哈希）"
slug: p2pkh-pay-public-key-hash
draft: false
shortDefinition: "主流的旧版脚本格式（以 '1' 开头的地址），将 BTC 锁定到公钥的哈希值上。"
keyTakeaways:
  - "旧版 BTC 地址最容易识别的格式"
  - "需要花费者提供公钥和签名才能解锁"
  - "手续费效率不如 SegWit 或 Taproot 脚本"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Invoice_address"
liveWidget: ~
---

P2PKH——"支付到公钥哈希"——是比特币最早的主流脚本格式。它的[地址](/glossary/address)以 `1` 开头（例如 `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`）。

锁定脚本很直接："要花费这个 UTXO，提供一个[公钥](/glossary/public-key)，其哈希值等于特定的 20 字节值，以及对花费交易的有效签名。"收款方只公布哈希（即地址）；真正的公钥直到资金被花费时才会揭示。

P2PKH 在 2010 年左右取代旧版 [P2PK](/glossary/p2pk-pay-public-key) 格式的两个原因：

- **地址更短。** 哈希是 20 字节，公钥是 33 字节。更易于复制、分享和口述。
- **防御纵深。** 如果底层椭圆曲线密码学被破解（[后量子场景](/glossary/post-quantum-bitcoin)），未花费的 P2PKH 地址上的资金仍受哈希保护。公钥只在用户花费时才暴露。重复使用的地址在第一次花费后就失去了这种保护。

P2PKH 已是比特币的主力格式超过十年。它仍然完全受支持且完全安全，但手续费比新格式更贵。现代钱包默认使用 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)（SegWit，`bc1q...`）或 [P2TR](/glossary/taproot)（Taproot，`bc1p...`）来接收新资金。现有的 P2PKH UTXO 在花费时通常被转入新格式的找零输出，逐步完成供应量的迁移。

参见[地址](/glossary/address)了解当今比特币上共存的完整地址格式阵容。
