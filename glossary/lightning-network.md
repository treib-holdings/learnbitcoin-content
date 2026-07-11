---
title: "闪电网络"
slug: lightning-network
draft: false
shortDefinition: "构建在比特币之上的第二层系统，通过链下通道实现快速、低费用支付，仅在必要时进行链上结算。"
keyTakeaways:
  - "解决日常支付中高昂的链上手续费和缓慢确认问题"
  - "使用支付通道将交易批量放到链下"
  - "依赖由路由互连的全球闪电节点网络"
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
  - delayed-payment-channel
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - gossip-protocol-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - jamming-attack-ln
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-probe
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
  - micropayment
  - off-chain
  - onion-routing-lightning
  - payment-channel
  - submarine-swap
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
  - "https://en.bitcoin.it/wiki/Lightning_Network"
liveWidget: ~
---

闪电网络是构建在比特币之上的支付层。它通过预注资支付通道路由支付来实现即时、低费用的支付，仅在通道开启或关闭时在基础链上结算。

简化后的机制：

1. **开启[通道](/glossary/lightning-channel)。** 双方创建一个 2-of-2 多签的链上比特币输出，由一方或双方注资。这是一笔普通的链上交易，支付普通手续费。
2. **[链下](/glossary/off-chain)交易。** 双方交换已签名的"余额更新"——关于通道资金当前分配的加密有效声明。这些更新不广播；它们只存在于两个参与者之间。
3. **通过网络路由。** 大多数通道并不直接连接你和最终接收方。闪电网络是通道的网状网络；支付通过中间节点跳转，使用[哈希时间锁合约（HTLC）](/glossary/htlc-hashed-time-locked-contract)使每一跳都是原子的——整笔支付成功，或全部不成功。
4. **关闭通道。** 任一方可随时通过在链上广播最新的双方签名状态来关闭。资金根据该最终状态分配。完成。

这带来的好处：

- **速度。** 支付在几秒内确认，而非几分钟。
- **成本。** 典型费用低于一美分。你真的可以用比特币进行[微支付](/glossary/micropayment)。
- **隐私。** 闪电支付*不*在公共链上广播。只有通道开启和关闭可见；其间的支付仅存在于参与者和路由节点之间。
- **可扩展性。** 每个通道支持两方之间无限次交易而不膨胀基础链。

限制是真实的：

- **流动性。** 通道只能路由相关一侧已有的金额。入站流动性是一个真实概念，也是新节点的真实问题。
- **在线要求。** 节点必须在线才能发送、接收和（重要的）监视通道对手方的欺诈尝试。
- **运营复杂性。** 运行自己的闪电节点比单纯持有比特币需要更多关注。许多用户更喜欢托管闪电钱包——这与托管链上钱包一样，以便利换取自托管。

闪电网络是比特币在不改变基础层的情况下扩展的方式。基础层优化数十年的结算安全性；闪电网络优化即时支付。两者在设计上是互补的。

**关于 BOLT-12 offers 的说明。** 传统发票格式是 [BOLT-11](/glossary/bolt-11)——一次性的、即时支付请求。BOLT-12（"offers"）是现代继任者：可重复使用、支持定期支付、更小、更隐私。它于 2024 年 9 月正式合并到闪电网络规范中。截至 2026 年的采用取决于实现：Core Lightning、LDK 和 eclair/Phoenix 原生支持；LND 尚未（可通过 LNDK shim 实现）。Strike、Lightspark 和 CoinOS 等服务已上线支持；大多数日常钱包仍默认使用 BOLT-11。预计未来几年会转变。

请参阅[闪电通道](/glossary/lightning-channel)了解构建模块，以及 [Journey: Using Bitcoin](/journey/using-bitcoin) 了解实际用户视角。
