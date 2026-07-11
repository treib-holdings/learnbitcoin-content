---
title: "Taproot"
slug: taproot
draft: false
shortDefinition: "2021 年软分叉（BIP 340、341、342），为比特币带来 Schnorr 签名、Taproot 输出和 Tapscript。每个 Taproot 输出在链上看起来都一样，无论底层脚本是什么。"
keyTakeaways:
  - "2021 年 11 月在区块高度 709,632 激活——自 SegWit 以来比特币最大的协议升级"
  - "Schnorr 签名：固定 64 字节（vs ECDSA 的约 71-72 字节），更严格的安全证明，原生聚合"
  - "密钥路径花费：复杂合约在链上看起来就像单签花费（巨大隐私收益）"
  - "脚本路径花费（MAST）：只揭示实际使用的脚本分支，而非整棵树"
  - "Taproot 地址以 `bc1p` 开头（bech32m 编码）"
sources: []
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-342-tapscript
  - lightning-channel
  - low-r-signatures
  - merkleized-abstract-syntax-tree-mast
  - musig
  - musig2
  - post-quantum-bitcoin
  - schnorr-signature
  - segwit-segregated-witness-bip-141
  - signature-aggregation
  - signature-clipping
  - silent-payments
  - soft-fork
sameAs:
  - "https://en.bitcoin.it/wiki/Taproot"
  - "https://en.bitcoin.it/wiki/BIP_0341"
  - "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki"
  - "https://bitcoinops.org/en/topics/taproot/"
liveWidget: ~
---

Taproot 是 2021 年 11 月在区块高度 709,632 激活的软分叉，为比特币协议带来两项密码学升级：[Schnorr 签名](/glossary/schnorr-signature)（[BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)）和 Taproot 本身（[BIP-341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)，由 Pieter Wuille、Jonas Nick 和 Anthony Towns 撰写），以及新的 Tapscript 语言（[BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)），用于高级花费条件。

头条特性是**每个 Taproot 输出在链上看起来都一样**。无论是单签花费、7-of-11 多签，还是带时间锁和哈希原像的复杂脚本，链上花费只是一个 64 字节 Schnorr 签名对一个 32 字节公钥。观察者无法分辨用了哪种。这对隐私来说是巨大的。

Taproot 地址以 `bc1p` 开头（使用 [bech32m](/glossary/bech32m) 编码）。

## 工作原理

Taproot 输出承诺于一个单独的公钥（"内部密钥"）或一棵替代花费脚本树（脚本路径），或两者兼有。

两种花费路径：

1. **密钥路径花费。** 如果多签或复杂合约的所有参与者达成一致，他们可以用一个聚合公钥集体签名（通过 [MuSig2](/glossary/signature-aggregation)）。花费在链上看起来就是一个单签名；观察者无法知道脚本路径是否存在或会是什么。这是常见情况，也是比特币现有最隐私、最便宜的花费类型。
2. **脚本路径花费（MAST）。** 如果无法达成一致——有人离线、时间锁触发、或需要备用分支——一方可以只揭示*实际执行的脚本分支*，以及它被承诺在原始输出中的 Merkle 证明。其他分支保持隐藏。

这个组合意味着复杂合约在"顺利"时（所有人协作签名）几乎没有链上成本，只有在"出问题"时才揭示严格必要的分支。

## 解锁了什么

- **MuSig2 / FROST 聚合。** 多个共同签名者产生单个 Schnorr 签名，对单个内部密钥。5-of-7 联邦花费 Taproot 输出与单签钱包无法区分。
- **闪电通道隐私。** 协作的通道关闭看起来就像任何其他 Taproot 密钥路径花费，不再明显是"2-of-2 多签关闭"。
- **便宜的多签。** 只为你实际使用的签名付费，而不是为你承诺的所有密钥付费。
- **更少的链上数据。** Schnorr 签名固定 64 字节，而 ECDSA 经[低 R](/glossary/low-r-signatures)研磨后约 71-72 字节。
- **更干净的密码学。** Schnorr 比 ECDSA 有更严格的安全证明。
- **未来协议的基础。** [静默支付](/glossary/silent-payments)、谨慎日志合约（DLC）和更新的闪电构造都受益于 Taproot 原语。

## 采用

Taproot 采用花了几年时间逐步渗透到钱包软件、硬件钱包和基础设施中。截至 2026 年，它已被广泛支持，大多数主要钱包默认为新接收操作生成 Taproot 地址，新地址中 `bc1p...` 的比例在持续增长。

一个值得指出的结构特性：Taproot 输出在 bech32m 地址中直接承诺于调整后的公钥——前面没有哈希层。因此每个 P2TR 输出在[后量子](/glossary/post-quantum-bitcoin)意义上是"始终暴露"的：公钥从输出创建起就在链上，无论是否曾被花费。这个权衡换来的是密钥路径的隐私和效率以及复杂合约的低成本。后量子签名到来时的修复方案是新的输出类型，而非放弃 Taproot。

参见 [Schnorr 签名](/glossary/schnorr-signature)和[签名聚合](/glossary/signature-aggregation)了解构建模块。
