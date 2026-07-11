---
title: "默克尔树/默克尔根"
slug: merkle-tree-merkle-root
draft: false
shortDefinition: "一种二叉哈希树，汇总区块中的所有交易，最终产生一个根哈希。"
keyTakeaways:
  - "将交易组织成紧凑的、防篡改的数据结构"
  - "区块头只存储顶层默克尔根"
  - "通过默克尔证明实现交易的部分验证"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merkleized-abstract-syntax-tree-mast
  - merkle-proof
  - merkle-root
sameAs:
  - "https://en.wikipedia.org/wiki/Merkle_tree"
  - "https://www.wikidata.org/wiki/Q14746"
liveWidget: ~
---

默克尔树是一种二叉哈希树：取一堆数据项，两两[哈希](/glossary/hash)，然后将那些哈希两两哈希，再哈希那些，以此类推，直到顶部剩下一个最终哈希。那个单一的顶部哈希就是**默克尔根**，它提交了树中的每一条数据。

在比特币中，每个[区块](/glossary/block)包含数百或数千笔[交易](/glossary/transaction)。区块将它们组织成默克尔树，交易 ID（txid）在叶子节点，只存储最终的默克尔根在[区块头](/glossary/block-header)中。改变区块中的任何一笔交易，树的根哈希就会改变——篡改立即可见。

为什么这个设计重要：

- **高效验证。** 默克尔根只有 32 字节，但它提交了下面所有交易。区块头保持小（80 字节），同时仍然密码学地锚定所有区块的交易数据。
- **包含证明。** 任何有默克尔根的人都可以验证特定交易在区块中，只需一个 `log2(N)` 个哈希的"默克尔证明"——对于有数千笔交易的区块通常 10-20 个哈希。这就是 [SPV（简化支付验证）](/glossary/spv-simplified-payment-verification)钱包可行的原因。它们下载区块头（每年总共 4 MB），使用默克尔证明验证自己的交易而无需下载整个区块。
- **篡改证据。** 对交易的任何更改都会沿树传播并改变根。一旦根在区块头中，而区块头是[工作量证明](/glossary/proof-work-pow)保护链的一部分，交易实际上是不可变的。

默克尔树由 Ralph Merkle 于 1979 年发明，比比特币早了几十年。它们在比特币之外的密码学系统中广泛使用（Git、ZFS、Certificate Transparency 等许多）。比特币的特定设计是你最常遇到的。

术语**默克尔根**常与本条目互换使用；请参阅[默克尔根](/glossary/merkle-root)了解区块头字段特定的视角。
