---
title: "闪电通道"
slug: lightning-channel
draft: false
shortDefinition: "闪电网络上的两方链下支付通道，允许在链上结算之前进行快速、低手续费的交易。"
keyTakeaways:
  - "将 BTC 锁定在 2-of-2 多签地址中用于链下转账"
  - "允许近乎即时、费用高效的支付"
  - "通道关闭时最终在链上结算"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bolt
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - loop-inout
  - payment-channel
  - rescue-transaction
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Payment_channels"
liveWidget: ~
---

闪电通道是[闪电网络](/glossary/lightning-network)上两方之间的支付管道。双方将资金锁定在一个共享的 2-of-2 多签链上输出中（**注资交易**），然后可以通过签署连续的**承诺交易**来更新通道的余额分配，从而进行无限次的链下支付。

通道端到端的运作方式：

1. **开启。** Alice 和 Bob 各自出资（或一方出资，取决于协议变体）到一个 2-of-2 多签。注资交易上链并确认。
2. **交易。** 要向 Bob 支付，Alice 构建一笔新的承诺交易，将通道余额中较少的部分分配给自己、较多的部分分配给 Bob，签名后分享给 Bob。Bob 也签名并存储。旧承诺通过撤销密钥失效。新状态现在是他们之间的"当前真相"，尽管没有任何内容上链。
3. **多次更新。** 他们可以来回重复这个过程，任一方向，数千次。每次更新只是存储在各自钱包中的已签名交易。
4. **关闭。** 任一方可以随时将最新承诺广播到链上。承诺本身是一种[救援交易](/glossary/rescue-transaction)——在每次状态更新时预签名，准备好在通道对手方离线或行为不端时广播。资金根据最新状态结算。**协作关闭**由双方签名且干净利落。**强制关闭**是单方面的，包含一个延迟窗口，在此期间另一方可以惩罚作弊对手方（广播过时状态），使用撤销密钥。

作弊保护是闪电网络无需信任的基础。如果 Bob 试图广播一个对他更有利的旧承诺，Alice 可以使用撤销密钥认领通道中的*所有*资金，包括 Bob 的份额。这种机制在通道层面是相互保证毁灭。在实践中，尝试作弊极为罕见。

一些实际现实：

- **非活跃通道不暴露任何东西。** 几个月没有更新的通道仍然正常工作。你可以随时回来。
- **你必须监视作弊行为。** 如果你的对手方在你离线时作弊，你会错过争议窗口。瞭望塔服务就是为此而存在的。
- **容量在开启时固定。** 以 0.05 BTC 注资的通道最多路由 0.05 BTC；更多容量需要再平衡（通过 [Loop In/Out](/glossary/loop-inout) 等潜艇互换服务）或拼接。

请参阅[闪电网络](/glossary/lightning-network)了解网络层面的视角和 HTLC 路由。
