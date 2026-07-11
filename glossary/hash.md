---
title: "哈希"
slug: hash
draft: false
shortDefinition: "密码函数（如 SHA-256）的输出，将输入数据压缩为固定大小的摘要。"
keyTakeaways:
  - "将可变数据映射为固定长度、伪随机输出"
  - "区块挖矿和 Merkle 树完整性的基础"
  - "密码属性：微小变化产生截然不同的哈希"
sources: []
relatedTerms:
  - grovers-algorithm
  - hash-puzzle
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - merged-mining
  - merkle-proof
  - merkle-root
  - nonce
  - nonce-exhaustion
  - post-quantum-bitcoin
  - proof-work-pow
sameAs:
  - "https://en.wikipedia.org/wiki/Hash_function"
  - "https://www.wikidata.org/wiki/Q183427"
  - "https://en.wikipedia.org/wiki/Cryptographic_hash_function"
  - "https://www.wikidata.org/wiki/Q477202"
  - "https://en.bitcoin.it/wiki/Hash"
liveWidget: ~
---

哈希是哈希函数的输出：一种接受任意大小输入并产生固定长度、伪随机外观输出的算法。比特币使用 **SHA-256**，总是产生 256 位（64 个十六进制字符），无论你输入一个字节还是一个 TB。

三个属性使哈希对比特币有用：

- **确定性。** 相同输入总是产生相同哈希。
- **单向。** 给定输出，没有有效方法找到产生它的输入——除了猜输入直到碰巧命中。预期猜测次数约 2^256，这是不可想象的。
- **雪崩。** 改变输入一位，约一半输出位改变，不可预测。相似输入产生截然不同的哈希。

比特币到处使用哈希：

- **[区块头](/glossary/block-header)**被哈希（两次，通过双重 SHA-256），结果必须低于难度目标才有效。这就是[矿工](/glossary/miner)竞相赢得的搜索。
- **每个区块引用前一个区块的哈希**，创建防篡改的[区块链](/glossary/blockchain)。
- **交易组织成 [Merkle 树](/glossary/merkle-tree-merkle-root)**，其根用单个哈希承诺区块中的每笔交易。
- **地址是公钥的哈希**，在花费前保持底层公钥私密。
- **TXID 是序列化交易的哈希。**

比特币押注 SHA-256 在可预见的未来保持单向。如果那被打破，比特币就被打破。到目前为止，作为地球上最受攻击的密码系统之一 16 年后，SHA-256 仍然坚挺。

最可能的削弱——不是打破——是[Grover 算法](/glossary/grovers-algorithm)在量子计算机上运行：它通过非结构化搜索的二次加速将 SHA-256 的有效安全性从 256 位减半到 128 位。128 位对称安全仍然是其他领域密码学的标准底线——对比特币来说麻烦但非灾难。更广泛的全景参见[后量子比特币](/glossary/post-quantum-bitcoin)。

单向属性如何转化为安全性参见[挖矿深入探讨 §2](/rabbit-hole/mining)，为什么 2^256 比你的直觉大得多参见[密钥空间深入探讨](/rabbit-hole/key-space)。
