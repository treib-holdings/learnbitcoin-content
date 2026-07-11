---
title: "常数时间"
slug: constant-time
draft: false
shortDefinition: "密码学中的一种实践，操作花费相同的时间，防止敏感数据的侧信道泄露。"
keyTakeaways:
  - "防止通过时序或功耗分析泄露密钥"
  - "对涉及私钥的密码操作很重要"
  - "通常通过统一代码路径和内存访问实现"
sources: []
relatedTerms:
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - hardware-security-module-hsm
  - private-key
  - schnorr-signature
liveWidget: ~
---

常数时间代码是编写密码操作的纪律，使其运行时间、内存访问模式和功耗不依赖于它们处理的秘密数据。目标是击败侧信道攻击——对手通过测量操作*如何*运行来推断*用什么*运行。

为什么这对比特币很重要：

- **ECDSA 和 Schnorr 签名**涉及秘密标量与曲线点的乘法。朴素实现在标量有更多零位时运行更快，通过时序泄露密钥位。
- **对秘密数据的哈希操作和 HMAC**可通过缓存访问模式泄露。测量 CPU 缓存命中的攻击者有时可以重建密钥材料。
- **侧信道是真实的攻击。** 研究人员已多次通过功耗分析或时序分析技术从云共居进程、智能卡甚至智能手机中提取 RSA、ECDSA 和 AES 密钥。

承担比特币繁重密码计算的库是 [libsecp256k1](https://github.com/bitcoin-core/secp256k1)（从 Bitcoin Core 中提取的 C 库）。它经过审计和重新实现，专门用于常数时间属性：签名路径无论密钥位如何都以相同顺序执行相同操作，相关内存访问是恒定的。

硬件钱包更进一步。ColdCard、Trezor Safe、Foundation Passport 和 BitBox 中的安全元件包含针对功耗分析的硬件级保护（随机时序、电流限制、毛刺检测）。威胁模型假设攻击者可以将设备放在示波器上。

对于用户来说，这些都不可见；它就是正常工作。对于库作者和硬件钱包设计师来说，常数时间纪律是将比特币的"密码安全"从口号变为在真实硅片上实际可实现的关键细节之一。
