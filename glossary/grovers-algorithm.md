---
title: "Grover 算法"
slug: grovers-algorithm
draft: false
published: "2026-06-01"
shortDefinition: "将 SHA-256 的有效安全性减半的量子算法——削弱而非破解——以降低的余量保留比特币的工作量证明和哈希地址。"
keyTakeaways:
  - "非结构化搜索的二次加速——有意义但非灾难性"
  - "将 SHA-256 的有效安全性从 256 位减半到 128 位（仍然很强）"
  - "比特币的生存量子威胁是签名上的 Shor 算法，而非哈希上的 Grover 算法"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - shors-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - hash
  - proof-work-pow
  - p2pkh-pay-public-key-hash
  - p2wpkh-pay-witness-public-key-hash
  - difficulty
liveWidget: ~
---

Grover 算法由 Lov Grover 于 1996 年发表，为非结构化搜索问题提供二次加速。应用于比特币，它削弱 [SHA-256](/glossary/hash) 并略微加速挖矿，但不会破坏两者。它是比特币两个量子威胁暴露中较轻的一个——不会造成生存风险的那个。

## 它做什么

经典搜索通过 N 个可能性的非结构化空间平均需要 O(N) 时间。Grover 将此减少到 O(sqrt(N))。

对于比特币：

- 经典暴力破解 256 位哈希约需 2^256 次操作。实际上不可能。
- 在 Grover 下，相同任务约需 2^128 次操作。仍然非常大——超出实际攻击范围。

有效安全性在指数上减半：256 位变为 128 位。这是理发而非断头。128 位对称安全是密码系统的标准底线，仍然远超实际攻击范围。

## 为什么这不是生存性的

比特币对 SHA-256 的两个主要用途：

- **[工作量证明挖矿](/glossary/proof-work-pow)。** 矿工搜索哈希低于目标的 nonce。Grover 提供 sqrt(N) 加速，意味着量子矿工可以比经典矿工快一个取决于难度的倍数找到区块。
- **地址派生**（与 RIPEMD-160）。[P2PKH](/glossary/p2pkh-pay-public-key-hash) 和 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) 地址是公钥的哈希。反转哈希以恢复公钥需要 Grover 级别的工作——仍然约 2^128 有效安全性。

关键的是，Grover 不破坏 2100 万供应上限，不启用双花，不破坏工作量证明作为共识机制。如果量子硬件变得有竞争力，挖矿经济学会转变，但系统继续运行。

## 对挖矿的影响

Aggarwal 等人（2017 年）分析了量子加速对比特币挖矿的影响，得出工作量证明*"相对抵抗量子计算机的实质性加速"*，在多十年时间范围内。原因：

- Grover 加速是平方根的，不是指数的。量子矿工获得有意义但非主导的优势。
- 挖矿是迭代和带宽受限的。为 Grover 优化的量子硬件不会达到现代 ASIC 的时钟速度。
- 硬件专业化是移动目标。经典 ASIC 进展和量子硬件开发都重要。

可能的长期结果：如果量子挖矿变得实际，[难度](/glossary/difficulty)上调以补偿。系统达到新平衡而不被破坏。

## 对地址的影响

对于比特币的哈希地址类型，Grover 有效将抗原像攻击的安全参数减半：

- P2PKH / P2WPKH：约 160 位哈希输出（RIPEMD-160 后）。Grover 将有效原像安全性降至约 80 位——今天仍超出实际攻击范围，但不再是轻松地大。
- 现实攻击场景假设 [Shor 算法](/glossary/shors-algorithm)已可用于暴露的公钥；Grover 将是哈希地址攻击的辅助工具，而非主要威胁。

Grover 是让比特币保留哈希函数的量子威胁。Shor 是迫使签名重写的那个。

为什么签名是弱链接而非哈希参见[量子与比特币深入探讨](/rabbit-hole/quantum-and-bitcoin)。
