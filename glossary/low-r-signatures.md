---
title: "低 R 签名"
slug: low-r-signatures
draft: false
shortDefinition: "一种 ECDSA 优化，使用最小的'R'分量，减少签名整体大小并降低交易手续费。"
keyTakeaways:
  - "通过最小化 R 字段大小缩短 ECDSA 签名"
  - "节省几个字节，略微降低交易手续费"
  - "在许多现代钱包中作为默认优化实现"
sources: []
relatedTerms:
  - bip-66
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - low-s-signatures
  - schnorr-signature
liveWidget: ~
---

ECDSA 签名有两个分量，R 和 S。R 从每个签名的随机数派生，生成的字节大致均匀分布：约一半时间 R 的最高位被设置，需要额外的前导零字节来编码为正 DER 整数。

低 R 签名通过研磨实现。签名者尝试连续的确定性随机数（RFC 6979 派生），直到产生一个最高位为零的 R，节省一个字节。平均需要两次尝试，有长尾。生成的签名在密码学上等价；唯一区别是编码长度。

Bitcoin Core 在 0.17（2018 年）中采用了低 R 签名，大多数主要钱包跟进。全网范围内每个 ECDSA 签名大约节省一个 vbyte，听起来微不足道但在数百万笔交易中累积。对于 Taproot / Schnorr 签名，这个技巧不适用（Schnorr 签名固定 64 字节），所以这是仅限传统 ECDSA 的优化。

大多数用户永远不会看到它。它在签名代码内部自动发生。
