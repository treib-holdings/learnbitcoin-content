---
title: "通胀漏洞"
slug: inflation-bug
draft: false
shortDefinition: "一种严重的软件缺陷，允许铸造超过 2100 万枚上限的 BTC（如 CVE-2018-17144）。"
keyTakeaways:
  - "若未修复，会威胁比特币的核心稀缺性特征"
  - "凸显了快速修复和社区警惕的重要性"
  - "历史上罕见但极其严重的漏洞"
sources:
  - { label: "Inflation Bug Postmortem rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/inflation-bug-postmortem" }
relatedTerms:
  - bip-42
  - block-reward
  - block-subsidy
  - disinflation
  - halving-halvening
  - inflation
  - mining-subsidy
liveWidget: ~
---

通胀漏洞是比特币软件中最严重的漏洞类型：一种允许攻击者创建超过协议 2100 万枚上限的 BTC 的缺陷，通过欺骗验证者接受无效交易或无效的 coinbase 输出来实现。

典型案例是 CVE-2018-17144，于 2018 年 9 月 18 日披露。

漏洞是什么：

- 一种特定类型的双花——在同一区块中提交两笔花费同一个 UTXO（未花费交易输出）的交易——此前被认为是不可能的。Bitcoin Core 在区块验证路径中对此进行了检查。
- Bitcoin Core 0.14.0（2017 年）中的一项优化意外地移除了对未通过其他早期检查的交易的该特定检查。相关代码路径可以通过精心构造的区块触发。
- 产出此类区块的攻击者可以双花一个输出。反复操作，这就是通胀。

如何被发现和修复：

- Awemany（一位从事 Bitcoin Cash 软件开发的开发者）在审查继承自 Bitcoin Core 的代码时发现了该漏洞。
- 他们私下向 Bitcoin Core 维护者披露了漏洞。
- Bitcoin Core 0.16.3 在披露后 24 小时内发布了修复版本，并为旧的受支持分支提供了补丁版本。
- 矿池和交易所在数小时内完成了升级。
- 目前未知有人在修复前在野外利用了该漏洞。

为什么这很重要：

- **比特币的货币诚信几乎被打破。** 如果被利用且未被发现，2100 万上限将被静默突破，这对比特币货币属性的信任将是灾难性的。
- **补丁有效是因为社会流程有效。** 私下披露、快速审查、基础设施运营商快速部署。任何未来的严重漏洞都需要同样的协调。
- **这提醒我们，"代码即宪法"需要代码确实是正确的。** 比特币的货币承诺依赖于 Bitcoin Core（及其兼容实现）实际执行规则。优化路径中的微妙漏洞可以破坏这些承诺。

CVE-2018-17144 仍然是开发者论证以下观点时最常引用的例子：对验证代码路径保持保守变更、对共识关键函数增加测试覆盖率、对优化设置最低审查期限。

请参阅 [通胀漏洞事后分析](/rabbit-hole/inflation-bug-postmortem) 了解完整时间线——那个本应存在却不存在的重复输入检查、漏洞如何被发现、私下披露流程，以及补丁如何在市场未恐慌的情况下发布。
