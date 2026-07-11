---
title: "单签"
slug: mono-signature
draft: false
shortDefinition: "单一 ECDSA 或 Schnorr 签名控制一个输出——典型的单签场景，与多签相对。"
keyTakeaways:
  - "标准方式：一把私钥签名，一个签名即可"
  - "密钥被泄露时不如多签安全"
  - "Schnorr 单签可以比 ECDSA 更紧凑"
sources: []
relatedTerms:
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

"单签"是大多数人所说的单签（single-sig）的不寻常表述：一把私钥，一个签名，控制一个输出。这是比特币的默认花费模式。

当今链上大多数比特币交易都是单签的。其余使用经典多签或聚合方案用于更高安全的托管（金库、交易所冷存储、金库）或协议原因（闪电通道在底层技术上是 2-of-2 多签，但大多数其他 2-of-2 输出现在是看起来像单签的 Taproot 密钥路径花费）。

Schnorr（Taproot）单签签名是 64 字节；ECDSA 单签签名在[低 R](/glossary/low-r-signatures) 研磨后是 71-72 字节。两者都用一把私钥授权花费，两者在链上看起来都是一个签名，两者都有相同的单点故障安全特征。

权衡是显而易见的：一把密钥，一个故障点。丢失密钥访问权限（丢失种子、硬盘损坏、无备份）代币就没了。密钥被泄露（恶意软件、钱包供应链攻击、种子处理不当）代币就被盗了。多签和聚合签名将该风险分散到多把密钥或设备上，代价是运营复杂性。

对于大多数用户，一把硬件钱包（单签）加正确验证的种子备份比他们实际能正确执行的替代方案安全得多。多签只有在你愿意胜任地使用它时才是真正的升级。
