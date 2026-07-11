---
title: "Signet"
slug: signet
draft: false
shortDefinition: "一种特殊的比特币测试网络，区块由中心化协调者签名，比测试网更稳定。"
keyTakeaways:
  - "结合了公共测试网络与受控出块的特点"
  - "在稳定、低垃圾信息环境下便于软件测试"
  - "仍与主网不同；不用于真实 BTC"
sources: []
relatedTerms:
  - bitcoin-core
  - consensus-parameter
  - mainnet
  - proof-work-pow
  - testnet
liveWidget: ~
---

Signet 是一个比特币测试网络（[BIP-325](https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki)），区块由指定的**区块签名者**按固定计划产生，而非通过竞争性[挖矿](/glossary/mining)。它是面向严肃协议和钱包开发的测试环境。

Signet 相对[测试网](/glossary/testnet)修复的问题：

- **可预测的出块时间。** Signet 区块稳定地每约 10 分钟出一个。不会有 20 分钟的干旱后 5 分钟内出 30 个块的情况。
- **没有垃圾信息驱动的难度战。** 签名者控制出块；没有什么可被垃圾信息攻击的。
- **接近真实的费用市场。** 在可预测的出块下，你确实可以测试费用估算和拥堵行为，这在混乱的测试网上很难做到。

Signet 为稳定性付出的代价：

- **签名者是一个受信任的角色。** 对测试网络来说没问题，但如果真正的攻击者控制了签名者，可以轻易扰乱 Signet。默认 Signet 有已知的签名者；你可以运行*自己的* Signet 配自己的签名者，如果你需要受控环境的话。
- **币仍然没有价值。** 这是测试网络；Signet 上的 BTC 没有经济价值。

自定义 Signet 越来越常见。一个团队可以启动自己的签名者，分发网络参数，就拥有一个完全受控的测试环境，出块节奏随意设定。这是协议开发工作的默认选择，如 Taproot、Drivechain 实验和闪电协议规范测试。

对大多数日常钱包开发来说，默认 Signet 就够了。对奇怪的边缘案例测试，运行自己的。参见[测试网](/glossary/testnet)了解更旧、更不受控的替代方案，以及[主网](/glossary/mainnet)了解真实环境。
