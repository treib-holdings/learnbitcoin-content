---
title: "BIP 9（VersionBits）"
slug: bip-9-versionbits
draft: false
shortDefinition: "一种信号方法，允许矿工在区块头中表示对软分叉提案的支持，在达到激活阈值之前。"
keyTakeaways:
  - "使用区块头中的位进行矿工信号"
  - "在通过阈值后触发软分叉"
  - "帮助更顺利地协调网络升级"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-91
  - bip-119-ctv
  - bip-125-replace-fee
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki)引入了 **VersionBits**，用于协调比特币[软分叉](/glossary/soft-fork)激活的矿工信号机制。前提：将候选软分叉提案编码到[区块头](/glossary/block-header)版本字段的特定位中，让矿工设置这些位来表示就绪。

机制：

1. 新 BIP 被分配一个版本位和一个部署窗口（开始时间和结束时间）。
2. 在窗口期间，矿工可以在其区块中设置该位来信号支持。
3. 如果 2,016 个区块重定向周期内 95% 的区块信号支持，软分叉在下一个重定向周期"锁定"然后激活。
4. 如果部署窗口结束未达阈值，提案过期。

这对几个软分叉运作良好（如 BIP-65 CLTV、BIP-68 CSV）。它在 2017 年 [SegWit](/glossary/segwit-segregated-witness-bip-141)激活期间著名地崩溃了，当时少数矿工尽管有广泛的用户支持仍拒绝信号。那个僵局导致了替代激活方法：[BIP-148 (UASF)](/glossary/bip-148-uasf)、[BIP-91](/glossary/bip-91)，以及最终的继任框架 BIP-8 / "快速审判"，后者用于在 2021 年激活 [Taproot](/glossary/taproot)，如果矿工信号失败则回退到用户强制激活。

SegWit 事件的更深层教训：**矿工信号就绪，但他们不决定规则。**当用户节点愿意无论矿工信号如何都执行规则时，矿工最终会跟从。BIP-9 使无争议升级的协调更顺利，但对有争议的没有干净的答案。现代激活方法吸收了这个教训。
