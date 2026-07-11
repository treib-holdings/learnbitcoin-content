---
title: "完全验证"
slug: full-validation
draft: false
shortDefinition: "节点根据比特币共识规则验证每个区块和交易，确保完整数据完整性。"
keyTakeaways:
  - "提供最高级别的安全性和无信任性"
  - "从创世区块开始检查每条共识规则"
  - "需要更多计算资源但增强网络韧性"
sources: []
relatedTerms:
  - corrupted-chain-state
  - double-spend
  - full-node
  - node
  - node-synchronization
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

完全验证是比特币[全节点](/glossary/full-node)对每个区块执行的操作：根据每条共识规则独立验证区块及其所有交易是否正确。没有捷径，不信任其他节点，没有"这看起来对了"。

验证内容：

- **区块结构。** 头格式、时间戳约束、版本号、目标/难度。
- **[工作量证明](/glossary/proof-work-pow)。** 区块头哈希低于当前目标。
- **Merkle 根承诺。** 头中的 Merkle 根实际对应区块中的交易。
- **每笔交易。** 输入引用有效且未花费的 [UTXO](/glossary/utxo-unspent-transaction-output)。签名根据锁定脚本验证。输出值不超过输入值（无通胀 bug）。[区块补贴](/glossary/block-subsidy)不超过该高度协议定义的量。
- **脚本执行。** 每个花费脚本在比特币脚本规则下执行为真。
- **软分叉规则。** [SegWit](/glossary/segwit-segregated-witness-bip-141)、[Taproot](/glossary/taproot)、[CLTV](/glossary/bip-65-opchecklocktimeverify)、[CSV](/glossary/checksequenceverify-csv) 等全部执行。

为什么这比听起来更重要：

- **你从第一性原理学习链的真实状态。** 你不必信任网络对等方、交易所、区块浏览器或链上分析公司。链说什么就是什么；你的节点告诉你。
- **你执行共识规则。** 如果矿工试图产出补贴过多的区块、签名无效或任何其他违规，你的节点会拒绝。乘以数万个全节点，这就是使规则*真实*而非仅仅是建议的原因。
- **没有 51% 攻击可以损害你的视图。** 即使每个矿工串通产出无效区块，你的全节点也会拒绝。仅凭算力不足以欺骗全验证者。

对比是 [SPV](/glossary/spv-simplified-payment-verification)，它检查区块头中的工作量证明并信任包含证明但不完全验证内容。SPV 对手机钱包来说没问题。完全验证是定义比特币对抗不良行为者防御的安全模型。实际运行成本参见[全节点](/glossary/full-node)。
