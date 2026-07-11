---
title: "闪电通道容量"
slug: lightning-channel-capacity
draft: false
shortDefinition: "锁定在闪电通道中的 BTC 数量，决定了通过该通道可以发送或接收的金额。"
keyTakeaways:
  - "代表可用于链下支付的总锁定资金"
  - "容量分布不平衡会影响发送或接收"
  - "再平衡策略保持通道双向可用"
sources: []
relatedTerms:
  - bolt
  - bridge-node-lightning
  - churn-lightning
  - core-lightning-c-lightning
  - custodial-lightning-wallet
  - inactive-channel
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-routing
  - wumbo-channels-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

通道容量是锁定在[闪电通道](/glossary/lightning-channel) 2-of-2 多签中的比特币总量——它是该通道在其生命周期内任一方向能流过的上限。

常被误解的部分：**容量不等于你能发送多少**。1 BTC 的通道最多只能路由 1 BTC 总量，但只能发送当前分配给*支付方*那一侧的金额。如果全部 1 BTC 都在 Alice 那一侧，Bob 无法通过该通道支付——他没有出站流动性。容量是预算；*侧余额*是你实际能花费的。

两个经常出现的相关概念：

- **出站流动性**——你一侧的通道余额。决定你能*支付*多少。
- **入站流动性**——通道对手方一侧的余额。决定你能*接收*多少。

对于只发送的用户（如在闪电网络上购物），出站重要。对于也接收的用户（商家、获得打赏的内容创作者），入站也重要。这种不对称性对新闪电用户来说是真实的痛点：当你自己注资开通道时，你一开始全是出站、零入站。要接收任何有意义的金额需要：

- 先发送一些支付出去，将余额转移到另一侧。
- 使用[潜艇互换](/glossary/submarine-swap)"购买"入站流动性。
- 使用 Lightning Pool、Magma 等流动性服务或基于 LSP 的入门流程（Phoenix、Breez 自动处理）。
- [通道拼接](/glossary/lightning-channel-splicing)同时扩展容量。

现代钱包对终端用户隐藏了大部分这些操作。运行自己路由节点的高级用户更直接地操作容量和再平衡。无论哪种方式，通道容量都是闪电路由一切背后的基础量。
