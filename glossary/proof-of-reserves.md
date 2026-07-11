---
title: "储备证明（Proof of Reserves）"
slug: proof-of-reserves
draft: false
published: "2026-06-18"
shortDefinition: "一种密码学证明，表明交易所或托管方确实持有其声称的币。FTX 之后的一项真正改进——但它证明的是资产，不是偿付能力。"
keyTakeaways:
  - "储备证明使用链上数据和密码学展示托管方控制着特定的币集"
  - "它在 FTX 崩塌那周成为标准要求，因为 FTX 正是它要抓的情况"
  - "它是部分信号，不是保证：证明资产不证明负债，而且快照可以为审计日临时安排"
sources: []
relatedTerms:
  - ftx
  - counterparty-risk
  - centralized-exchange-cex
  - self-custody
liveWidget: ~
---

储备证明是让托管方使用链上和密码学证据展示它确实持有其声称的币的尝试。更完整的版本将资产证明——托管方展示对特定地址的控制（通常锚定到客户余额的 Merkle 树，使每个用户可以检查自己的余额被包含在内）——与负债证明（托管方欠款的可验证总额）配对。第二部分难得多也罕见得多。

它在 [FTX](/glossary/ftx) 崩塌那周成为标准要求，因为 FTX 正是它要抓的情况：一个客户存款被悄悄转到别处的交易所。一个能证明它控制着币的交易所更难像 FTX 那样运作。

它是部分信号，不是保证。展示储备不等于展示你有偿付能力。一家公司可以展示它持有的资产而对欠款只字不提，它可以借币来通过一个它知道要来的审计，它可以安排在被检查的那一天看起来资金充足。目前发布的大多数"储备证明"只覆盖资产端。它比它取代的营销承诺好，但不是[自托管](/glossary/self-custody)的替代品。你永远不必信任的一组储备是你持有密钥的那些币。

参见 [Mt. Gox to FTX: The Custody Graveyard](/rabbit-hole/mt-gox-ftx-graveyard) 了解使储备证明成为必要的那些失败。
