---
title: "BIP 42"
slug: bip-42
draft: false
shortDefinition: "将 2100 万 BTC 上限编入规范，明确超出最大供应量后不再通胀。"
keyTakeaways:
  - "确保 2100 万 BTC 仍是最大供应量"
  - "修复币发行的潜在溢出问题"
  - "比特币'稳健货币'叙事的核心"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - block-reward
  - block-size
  - block-subsidy
  - hal-finneys-running-bitcoin
  - halving-halvening
  - miner
  - mining-pool
liveWidget: ~
---

[BIP-42](https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki)是关闭比特币原始[供应](/glossary/block-subsidy)代码中一个微妙 bug 的共识修复。该 bug 由 Pieter Wuille 于 2014 年发现：原始 `GetBlockSubsidy` 函数中的整数运算在足够多次减半后会溢出，并重新开始产生正奖励——意味着比特币将从约 2214 年开始无限通胀。

原始代码大致如下：

```cpp
int64_t nSubsidy = 50 * COIN;
nSubsidy >>= (nHeight / 210000);  // 每 210,000 个区块减半
```

`>>` 运算符是 C++ 对 64 位有符号整数的右移。约 64 次减半后，移位在技术上属于未定义行为；实际上在大多数编译器上要么归零（正确），要么回绕（灾难性）。不同编译器的不同行为可能导致链分裂。

BIP-42 的修复很简单：在足够多次减半后显式返回零，不管底层算术会做什么。

```cpp
if (halvings >= 64) return 0;
```

这使 2100 万上限真正永久化，而非依赖于未定义的 C++ 行为。作为共识变更，BIP-42 作为[软分叉](/glossary/soft-fork)部署（因为它收紧行为为"不，减半 33 次后你确实不能获得正奖励"）。

这一事件是比特币历史中小而有教益的时刻。[2100 万上限](/glossary/asymptote)不是愿望；它是代码的属性，由每个节点、每个区块永远执行。BIP-42 确保代码确实说了所有人认为它说的话。
