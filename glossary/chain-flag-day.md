---
title: "链上旗帜日"
slug: chain-flag-day
draft: false
shortDefinition: "节点开始执行新共识规则的选定日期或区块高度，常见于用户激活的分叉。"
keyTakeaways:
  - "为执行共识变更设定截止日期"
  - "在用户激活软分叉策略中很常见"
  - "可以统一网络，也可能导致链分叉"
sources: []
relatedTerms:
  - bip-148-uasf
  - chain-split
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://en.wikipedia.org/wiki/Flag_day_(computing)"
  - "https://www.wikidata.org/wiki/Q5456662"
liveWidget: ~
---

"链上旗帜日"是一种比特币升级激活机制，新共识规则在预先公布的区块高度或时间戳开始执行——而不是等待 [BIP-9](/glossary/bip-9-versionbits) 式的矿工信号阈值。

流程：

1. **开发者公布变更**，提前数月通知并指定具体的激活高度。
2. **节点运营者升级软件**，从旗帜日起开始执行新规则。
3. **到达激活高度时**，运行新软件的节点开始拒绝违反新规则的区块。
4. **未升级的节点**继续接受符合旧规则的区块，但如果经济网络中的多数已升级，遵循旧规则的矿工会看到自己的区块被孤立。

著名的例子：2017 年 SegWit 激活的 [BIP-148（UASF）](/glossary/bip-148-uasf)。UASF 设定 2017 年 8 月 1 日为旗帜日——运行 BIP-148 的节点将从该日起拒绝不为 SegWit 信号的区块。旗帜日的可信度打破了矿工信号的僵局，SegWit 在截止日期前一周通过 [BIP-91](/glossary/bip-91) 顺利激活。

旗帜日机制很重要，因为它将激活权力从矿工（他们可以拖延 BIP-9 信号）转移到节点（节点可以单方面执行规则）。节点的经济多数——交易所、企业、大额持有者、自托管用户的长尾——最终决定了什么是"比特币"。

2021 年的 Taproot 激活使用了一种更温和的变体，叫做"快速试验"（speedy trial），将矿工信号与矿工未能协调时的旗帜日后备方案结合。效果很顺利。

旗帜日功能强大但有风险。如果实际上没有得到经济多数的支持，它们可能分裂网络。如果得到了支持，它们就是比特币治理工具箱中最可信的激活工具。

历史案例参见 [BIP-148](/glossary/bip-148-uasf)，更广泛的激活全景参见[软分叉](/glossary/soft-fork)。
