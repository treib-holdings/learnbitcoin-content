---
title: "区块浏览器"
slug: block-explorer
draft: false
shortDefinition: "允许用户搜索区块链数据（交易、地址、区块等）的在线工具。"
keyTakeaways:
  - "公开显示交易历史和区块信息"
  - "验证确认或地址余额的常用方式"
  - "依赖第三方服务存在潜在隐私权衡"
sources: []
relatedTerms:
  - bip-30
  - bip-34
  - block
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - blockchain
  - chain-visualization
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Block_explorer"
liveWidget: ~
---

区块浏览器是浏览比特币链的网页界面。输入[地址](/glossary/address)、[交易](/glossary/transaction)ID 或区块高度；返回关联的链上数据：余额、交易历史、确认数、手续费、内存池状态。

区块浏览器普遍有用，也普遍是隐私妥协。你每次搜索都告诉运营商你关心哪些地址或交易。对于随便查查这没问题；对于与自己钱包相关的查询，这是与你的 IP、浏览器指纹和相关 cookie 关联的隐私泄露。

2026 年流行的浏览器：

- **[mempool.space](https://mempool.space)**——开源，有 Tor 镜像，可对自己的节点运行自托管版本（费用市场可视化的标准参考）。
- **[ChainQuery.com](https://chainquery.com)**——本站配套的比特币浏览器。诚实的 UI，无跟踪，由独立节点提供数据。
- **blockchain.com**、**blockchair**、**blockstream.info**——较旧或商业替代方案，隐私做法各异。

对于注重隐私的用例，运行自己的节点并使用本地浏览器（自托管 mempool.space、BTC RPC Explorer、btc-rpc-explorer）。[全节点](/glossary/full-node)加本地浏览器意味着*你*看到链数据且*只有你*——没有第三方记录你的查询。

对于日常"我的交易确认了吗"或"当前费用市场如何"类问题，公共浏览器没问题。只是不要在每个你访问的网站的搜索框里粘贴你的储蓄地址。
