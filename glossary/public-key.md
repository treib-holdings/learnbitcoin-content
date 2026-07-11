---
title: "公钥（Public Key）"
slug: public-key
draft: false
shortDefinition: "通过椭圆曲线乘法从私钥派生，用于验证签名或生成 BTC 地址。"
keyTakeaways:
  - "比特币密码学的核心：验证从私钥派生的签名"
  - "可以安全分享，不像私钥"
  - "通常被哈希以形成典型脚本类型的地址"
sources: []
relatedTerms:
  - address
  - b32-address
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - shors-algorithm
  - xpub-extended-public-key
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
liveWidget: ~
---

公钥是通过椭圆曲线乘法从[私钥](/glossary/private-key)派生的一个数字。它与私钥唯一对应但不泄露任何关于私钥的信息——你可以发布公钥而不危及你的秘密。

机制：比特币使用 secp256k1 椭圆曲线。将曲线生成元点 G 乘以你的私钥 k 得到点 P = k·G。那个点 P（以 33 字节压缩形式编码）就是你的公钥。从 k 到 P 正向计算很便宜。从 P 反向推导 k 需要解决椭圆曲线离散对数问题，这在计算上是不可行的——保护现代互联网大部分密码学的也是同样的不可行性。

公钥的用途：

- **验证签名。** 当你花费 BTC 时，钱包用你的私钥签署交易。任何人，包括网络上的每个节点，都可以针对你的公钥验证签名而无需知道你的私钥。这就是比特币执行"只有合法所有者才能花费"的方式。
- **生成[地址](/glossary/address)。** 大多数比特币地址类型是通过对公钥进行哈希（先 SHA-256 再 RIPEMD-160，或新格式仅 SHA-256）派生的。通常共享的是哈希；公钥本身仅在你花费时才揭示。

为什么将公钥哈希成地址而不是直接分享公钥？两个原因。第一，地址更短更容易处理。第二，哈希增加了一层防御：如果椭圆曲线密码学被破解（例如被足够强大的量子计算机运行 [Shor 算法](/glossary/shors-algorithm)），未花费地址中的资金在公钥从未被揭示的情况下仍然安全。重复使用或已花费的地址暴露更多。参见 [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) 了解迁移框架。

私钥和公钥之间的不对称——一个方向便宜，另一个方向不可能——是比特币中涉及密码学所有权的一切的基础。
