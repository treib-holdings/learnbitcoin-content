---
title: "BIP 65（OP_CHECKLOCKTIMEVERIFY）——通俗解释"
slug: bip-65-opchecklocktimeverify
draft: false
shortDefinition: "CLTV 做了什么、为什么在 2015 年添加、以及它如何支持支付通道和托管——不用规范术语。"
keyTakeaways:
  - "实现基于时间的花费约束"
  - "支持支付通道、托管等合约"
  - "增强比特币智能合约灵活性"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-68-relative-locktime
  - bitcoin-script
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0065"
  - "https://en.bitcoin.it/wiki/Timelock"
liveWidget: ~
---

[BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki)为 [Bitcoin Script](/glossary/bitcoin-script)添加了 **OP_CHECKLOCKTIMEVERIFY**（CLTV）操作码。2015 年 12 月作为[软分叉](/glossary/soft-fork)激活，它为[绝对锁定时间](/glossary/absolute-locktime)提供了脚本级执行。

在 BIP-65 之前，唯一的锁定时间机制是交易级 `nLockTime` 字段，它防止*整笔交易*在给定高度或时间之前被打包。CLTV 将相同概念带入脚本本身：输出的锁定脚本现在可以要求"花费交易的 `nLockTime` 至少为 X"。

这听起来像很小的区别。实际上它承载了整个类别的比特币应用：

- **[支付通道](/glossary/payment-channel)**和[闪电网络](/glossary/lightning-network)使用 CLTV 来执行强制关闭通道后的提款延迟。
- **[原子互换](/glossary/atomic-swap)**使用 CLTV 在对手方退出时执行退款截止日期。
- **[HTLC](/glossary/htlc-hashed-time-locked-contract)**使用 CLTV 作为其"原像或超时"结构中基于时间的后备。
- **继承金库**使用 CLTV 确保在原始所有者不活跃后继承人可以在长延迟后认领资金。

CLTV 一年后与 [BIP-68/112 (CSV)](/glossary/checksequenceverify-csv)配对用于相对锁定时间。两个操作码共同将 Bitcoin Script 变得足够强大，以支持闪电网络和大多数现代多方协议。

对用户来说，你很少直接与 CLTV 交互。你的钱包或[闪电网络](/glossary/lightning-network)实现在后台处理它。但你曾经使用的每个闪电通道都依赖 CLTV 的存在。
