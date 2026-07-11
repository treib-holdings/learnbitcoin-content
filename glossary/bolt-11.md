---
title: "BOLT 11"
slug: bolt-11
draft: false
shortDefinition: "闪电网络发票格式（通常以 lnbc... 开头），编码金额和目标等支付数据。"
keyTakeaways:
  - "以结构化发票格式编码 LN 支付"
  - "指定金额、接收节点和可选数据"
  - "提供标准、用户友好的闪电支付请求方式"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - audiobook-model-lightning
  - autopilot-lightning
  - bip-bitcoin-improvement-proposal
  - bolt
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
  - "https://github.com/lightning/bolts"
liveWidget: ~
---

BOLT 11 是[闪电发票](/glossary/lightning-invoice)规范——以 `lnbc`（主网）或 `lntb`（测试网）开头的编码支付请求。它是定义闪电网络实现如何互操作的 [BOLT 规范](/glossary/bolt)之一。

BOLT-11 发票编码了付款方完成支付所需的一切：

- **金额**（可选——如果发票未指定，付款方可指定）。
- **支付哈希**——秘密原像的哈希，揭示时完成支付。
- **目标节点公钥。**
- **路由提示**——对于未良好连接到公共图的节点（对移动钱包有用）。
- **过期时间**——默认 1 小时。
- **可选描述/备注。**
- **接收方节点的签名**——证明它创建了该发票。

整个内容编码为 bech32——与原生 SegWit 地址相同的地址格式。结果是一个相对短的字符串，适合二维码，可复制粘贴、扫描或 NFC 碰触。

设计为一次性的。一旦支付哈希被揭示（支付结算时），重用同一发票要么失败要么是欺诈信号。要在固定句柄接受重复支付，你需要 [BOLT-12 offers](/glossary/lightning-invoice)（现代继任者）或每笔支付单独发票的工作流。

BOLT-11 自 2017 年以来一直是闪电网络的支付请求通用语。每个闪电钱包都支持它。BOLT-12 正在逐步取代它，但 BOLT-11 仍将大量使用多年。
