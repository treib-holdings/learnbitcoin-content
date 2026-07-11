---
title: "地址复用"
slug: address-reuse
draft: false
shortDefinition: "多次使用同一个比特币地址的做法，会损害隐私，通常不建议这样做。"
keyTakeaways:
  - "使交易更容易被追踪"
  - "因损害隐私而不被鼓励"
  - "现代钱包默认生成新地址"
sources: []
relatedTerms:
  - address
  - address-clustering
  - address-indexing
  - chain-analysis
  - dust
  - dust-attack
  - fungibility
  - post-quantum-bitcoin
  - security
liveWidget: ~
---

地址复用是指在同一个比特币[地址](/glossary/address)上接收多笔付款的做法。这是最常见的隐私错误之一，也是最容易避免的。

为什么重要：每笔比特币交易都在链上公开可见，永久保存。一个只接收一次付款的地址只出现一次。一个接收了一百次付款的地址会出现一百次，每个交易对手、金额和时间戳都明明白白地关联在一起。任何知道这个地址属于你的人——因为你在 Twitter 上发布了它、用在了捐赠页面上、给了一个 KYC 交易所——现在都能通过这个地址看到你的完整历史。

解决方法很简单：每次收款都使用新地址。现代[分层确定性钱包](/glossary/hierarchical-deterministic-wallet)会自动生成新地址。同样的 12 或 24 个[助记词](/glossary/seed-phrase)备份了数千个地址；你不需要单独跟踪它们。

实际中仍然出现复用的场景：

- **个人网站和 Twitter 简介上的捐赠地址。** 方便，但每个捐赠者都看到同一个地址并可以关联。更好的替代方案：[闪电网络](/glossary/lightning-network)地址（即时 + 私密）、[Silent Payments](/glossary/silent-payments)（一个可复用代码，生成全新的链上地址）、或定期轮换静态地址。
- **交易所提币地址。** 一些用户反复提币到同一个地址。交易所看到了；链上分析师看到了；该地址的历史完全暴露。
- **多签设置**中重新生成地址在操作上不方便。

如果你无法避免复用某个特定地址，至少让它是一个明确公开的——你的捐赠地址、你的商户收款地址——那些已经被理解为与你身份关联的地址。不要为个人储蓄复用同一个地址。

协议允许复用。隐私模型不允许。把地址当作一次性的。

地址复用还有[后量子维度](/glossary/post-quantum-bitcoin)的影响。从 P2PKH 或 P2WPKH 地址花费会在花费交易中公布公钥。之后每次向同一地址存款都继承了这种暴露——一旦足够强大的量子计算机出现，这些余额就可能被任何人花费。因此，复用既是隐私错误，也是长期的安全隐患。
