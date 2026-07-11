---
title: "BIP 37"
slug: bip-37
draft: false
shortDefinition: "为轻量钱包引入布隆过滤器，后因隐私泄露受批评，大部分被 BIP 157/158 取代。"
keyTakeaways:
  - "减少 SPV 钱包的带宽使用"
  - "因泄露用户兴趣模式而受批评"
  - "大部分被现代过滤方法取代"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-36-merkle-block-request
  - bip-40-alerts-avoid-replay
  - bloom-filter
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - merkle-root
  - spv-simplified-payment-verification
liveWidget: ~
---

BIP 37 为比特币 P2P 协议添加了布隆过滤器支持，让 SPV 钱包可以请求全节点"发送匹配此过滤器的交易"而无需下载每个区块。在几年内它是每个移动钱包的工作方式。

隐私故事结果很糟糕。布隆过滤器旨在通过混入足够多的假阳性来模糊钱包关心哪些地址，但实际上钱包使用的过滤参数假阳性率很低（为了节省带宽），服务节点可以通过简单的统计分析去匿名化钱包的大部分密钥，特别是在使用刷新过滤器的重连中。2014 年的论文"On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients"使情况难以忽视。

公共节点大部分停止了 BIP 37 服务。Bitcoin Core 在 0.19（2019 年）中默认禁用了 `NODE_BLOOM` 服务位，2026 年仍使用 BIP 37 的少数钱包大多指向自托管节点。

现代替代方案是 BIP 158 紧凑区块过滤器：节点为每个区块发布一个小的确定性过滤器，客户端下载过滤器并在本地匹配。钱包永远不会向任何人发送其过滤器。它严格来说更隐私，带宽只略大。

规范：[BIP-37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki)。
