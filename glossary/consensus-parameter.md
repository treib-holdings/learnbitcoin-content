---
title: "共识参数"
slug: consensus-parameter
draft: false
shortDefinition: "全网必须遵循的网络规则或设置——如区块大小或难度——以保持共识。"
keyTakeaways:
  - "定义区块和交易有效性的基本规则"
  - "如果未被广泛接受，变更可能导致链分叉"
  - "由全节点执行以实现全网一致"
sources: []
relatedTerms:
  - block
  - block-subsidy
  - blockchain
  - decentralization
  - deployment-threshold-soft-fork
  - difficulty
  - difficulty-retargeting
  - fork
  - locked-period-soft-fork
  - nonce
  - proof-work-pow
  - soft-fork
liveWidget: ~
---

共识参数是协议要求每个全节点以相同方式执行的任何规则。如果两个节点对共识参数有分歧，它们最终会在不同的链上。

主要的比特币共识参数：

- **区块重量限制。** 400 万重量单位。这是 SegWit 之后对原始 1 MB 区块大小上限的替代。
- **减半计划。** 补贴每 210,000 个区块（约 4 年）减半，从 50 BTC 开始递减趋向 20,999,999.9769 BTC [渐近线](/glossary/asymptote)。
- **有效脚本操作码及其语义。** 由共识实现定义；`OP_CHECKLOCKTIMEVERIFY` 做什么、`OP_CHECKMULTISIG` 做什么、SegWit 见证中允许什么、Tapscript 叶中允许什么。
- **难度调整规则。** 每 2016 个区块，难度调整以使区块间的预期间隔目标为 10 分钟。
- **coinbase 成熟期。** 新铸造的区块奖励在 100 次确认之前不可花费。
- **软分叉激活规则。** BIP 9 versionbits、Speedy Trial、BIP 8——*如何*激活新共识参数的规则本身就是一种元共识参数。

更改共识参数需要协调的软分叉（收紧规则，向后兼容）或硬分叉（放宽规则，如果不一致则分裂链）。两者的门槛都很高。比特币的参数集一直刻意保持稳定；在协议历史上，实质性的共识变更大约每 2-4 年一次（P2SH、CLTV、CSV、SegWit、Taproot）。

这种稳定性本身就是一种特性。货币的价值部分来自对规则不会改变的信心。一个十年未变的共识参数向持有者传达了任意政策链无法传达的信息。
