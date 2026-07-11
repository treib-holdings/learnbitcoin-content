---
title: "闪电发票"
slug: lightning-invoice
draft: false
shortDefinition: "闪电网络中的支付请求，通常编码为 BOLT 11 字符串以便于发送和接收。"
keyTakeaways:
  - "编码闪电支付详情（金额、目的地、有效期）"
  - "扫描或输入闪电钱包即可进行链下支付"
  - "可包含路由提示等可选字段"
sources: []
relatedTerms:
  - bolt-11
  - graph-pruning
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
  - "https://en.wikipedia.org/wiki/Lightning_Network"
  - "https://www.wikidata.org/wiki/Q30325114"
liveWidget: ~
---

闪电发票是[闪电网络](/glossary/lightning-network)上的支付请求。它是接收方生成并与付款方分享的字符串，编码了付款方完成支付所需的一切信息。

标准格式是 **BOLT-11**，一种编码字符串，通常以 `lnbc`（主网）或 `lntb`（测试网）开头。它包含：

- **金额**（可选——某些发票让付款方自行选择）。
- **支付哈希**——接收方知道的一个秘密（*原像*）的哈希。只有当原像被揭示时支付才完成。
- **接收节点公钥**——哪个闪电节点应接收。
- **路由提示**——关于哪些通道可以送达支付的可选信息，对于公共连接有限的节点有用。
- **有效期**——发票有效时长（默认通常 1 小时）。
- **描述/备注**——可选的人类可读注释。
- **接收方节点的签名**。

支付流程：

1. 接收方生成发票；将其复制给付款方（二维码、复制粘贴、NFC 等）。
2. 付款方钱包解码发票，在网络中找到路由，并转发一个 HTLC。
3. 每一跳保持支付锁定，直到原像被揭示。
4. 最终接收方揭示原像以认领支付，这会沿路由级联返回。
5. 路径上的每个路由节点现在都有支付完成的证明。

发票是一次性的。支付哈希在支付结算时被揭示，所以重复支付同一发票要么会失败（接收方不会再次接受），要么是欺诈信号。

一种较新的格式 **BOLT-12 offers** 解决了 BOLT-11 的一些限制——可重复使用、支持定期支付、更小、更隐私。它于 2024 年 9 月正式合并到闪电网络规范中。截至 2026 年，Core Lightning、LDK 和 eclair/Phoenix 支持它；LND 的采用仍在进行中。预计未来几年 BOLT-12 将逐步取代 BOLT-11。

请参阅[闪电网络](/glossary/lightning-network)了解发票如何被路由。
