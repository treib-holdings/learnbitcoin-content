---
title: "SPV（简化支付验证）"
slug: spv-simplified-payment-verification
draft: false
shortDefinition: "一种轻量级客户端模型，使用区块头和 Merkle 证明而非完整区块链来验证交易。"
keyTakeaways:
  - "只存储区块头，依赖 Merkle 证明"
  - "比全节点资源消耗少，但更依赖对等节点"
  - "除非使用高级方法（如 Neutrino），否则存在隐私问题"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - bitcoin-client
  - chain-analysis
  - eclipse-attack
  - full-validation
  - merkle-root
  - neutrino
  - race-attack
  - replay-attack
liveWidget: ~
---

SPV——**简**化**支**付**验**证——是[比特币白皮书](/glossary/whitepaper)第 8 节描述的轻量级客户端模型。它让钱包在不存储完整链的情况下验证自己的交易。

工作原理：

1. 钱包只下载从创世块到现在的每个**80 字节[区块头](/glossary/block-header)**。这大约每年 4 MB，十六年总计不到 100 MB。
2. 钱包通过检查每个头的[工作量证明](/glossary/proof-work-pow)以及每个头是否正确链接到前一个来验证头链。
3. 对于钱包关心的特定交易，它向[全节点](/glossary/full-node)请求一个 [Merkle 证明](/glossary/merkle-proof)——一个简短的哈希列表，证明该交易包含在某个区块的 [Merkle 树](/glossary/merkle-tree-merkle-root)中。
4. 钱包从交易和证明重新计算 Merkle 根，并检查它与该区块头中存储的根是否匹配。

如果证明通过，交易就被证明在指定深度的链上。钱包无需下载区块其余数据就确认了交易包含。

SPV 的权衡：

- **你对区块其余内容一无所知。** 无法验证区块中的其他交易是否遵守共识规则；必须信任[矿工](/glossary/miner)和你对话的全节点没有在链的有效性上撒谎。
- **隐私泄露。** 朴素的 SPV 会问"交易 X 的证明是什么？"——这告诉了被查询的节点你关心 X。更好的协议（[BIP-157/158](/glossary/bip-158) 紧凑区块过滤器，在生产中实现为 [Neutrino](/glossary/neutrino)）让客户端下载过滤器并在本地检查匹配，无需暴露自己的地址。
- **日食攻击脆弱性。** 如果攻击者将你的 SPV 客户端与诚实对等节点隔离，可以喂给你一条分叉链。[全节点](/glossary/full-node)更能抵抗，因为它独立验证每条规则。

大多数轻量级移动钱包使用 SPV 式逻辑，通常结合紧凑区块过滤器以保护隐私。对日常使用来说是合理的权衡。对高价值或高风险场景，运行[全节点](/glossary/full-node)。
