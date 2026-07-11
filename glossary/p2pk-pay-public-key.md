---
title: "P2PK（支付到公钥）"
slug: p2pk-pay-public-key
draft: false
shortDefinition: "一种旧版脚本类型，将比特币直接锁定到公钥上，大部分已被 P2PKH 取代。"
keyTakeaways:
  - "将资金锁定到原始公钥，而非公钥哈希"
  - "出现在中本聪早期挖出的区块中，但现已少见"
  - "隐私性和灵活性不如现代脚本形式"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2sh
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - post-quantum-bitcoin
  - shors-algorithm
  - utxo-unspent-transaction-output
liveWidget: ~
---

P2PK——"支付到公钥"——是比特币最早的脚本格式，用于链上最初的几个区块。它将输出锁定到一个原始[公钥](/glossary/public-key)（而非公钥的哈希），通过对应私钥对花费交易签名来解锁。

值得注意的历史：

- **用于[创世区块](/glossary/genesis-block)。** 中本聪最初的 50 BTC coinbase 输出就是 P2PK。这种格式在前几千个区块中占主导地位。
- **中本聪早期挖矿使用。** 中本聪挖出的约 110 万 BTC 大部分停留在 P2PK 输出上。
- **约 2010 年后被基本弃用。** 一旦社区认识到仅在花费时才揭示公钥（而非收款时就揭示）严格来说更好，[P2PKH](/glossary/p2pkh-pay-public-key-hash) 就取代了它用于新的收款。

P2PK 的劣势：

- **公钥立即在链上可见。** 这破坏了基于哈希的地址提供的[量子防御纵深](/glossary/post-quantum-bitcoin)。公钥从输出创建时就在链上，意味着 P2PK 输出在未来具备 [Shor 算法能力](/glossary/shors-algorithm)的量子计算机面前毫无迁移窗口地暴露着。
- **输出更大。** 33 字节的压缩公钥（或 65 字节的未压缩公钥）比 20 字节的哈希要大。
- **地址易用性从未发展。** P2PK 通常以原始十六进制显示，而非带校验和的地址格式。很容易输错。

P2PK 输出仍然可花费——任何 Bitcoin Core 节点都能验证它们——但没有你愿意使用的钱包会生成新的 P2PK 地址。它们主要作为历史遗物和学术好奇心的对象存在。特别是中本聪的 P2PK 输出，是加密货币领域最受关注的未花费输出。

参见 [P2PKH](/glossary/p2pkh-pay-public-key-hash) 了解取代它的格式。
