---
title: "默克尔证明"
slug: merkle-proof
draft: false
shortDefinition: "默克尔包含证明的另一种叫法：一组哈希，验证交易在区块中的存在。"
keyTakeaways:
  - "确保交易确实在特定区块中"
  - "轻量级方法实现最小信任验证"
  - "SPV 钱包验证策略的核心组成部分"
sources: []
relatedTerms:
  - bip-37
  - bip-158
  - block-header
  - bloom-filter
  - fraud-proof
  - hash
  - merkle-block
  - merkle-inclusion-proof
  - merkle-tree-merkle-root
  - merkle-root
liveWidget: ~
---

默克尔证明是一段紧凑的证据，证明特定[交易](/glossary/transaction)被包含在特定[区块](/glossary/block)中，而无需验证者下载整个区块。

它通过走[默克尔树](/glossary/merkle-tree-merkle-root)工作：从叶子（交易的 txid）到根（存储在[区块头](/glossary/block-header)中），证明包含每一层的兄弟哈希。有了这些哈希，任何人都可以重新计算给定声称交易的[默克尔根](/glossary/merkle-root) *应该*是什么，并与区块头中的实际根比较。如果匹配，交易被证明在区块中。如果不匹配，证明无效。

为什么有用：

- **小。** 有 N 笔交易的区块的默克尔证明大小为 `O(log N)`——对任何现实大小的区块通常 10-12 个哈希，约 320-400 字节。
- **密码学保证。** 不信任来源的任何信息；数学要么对要么不对。
- **驱动 [SPV](/glossary/spv-simplified-payment-verification)。** 轻客户端使用默克尔证明验证自己的交易而无需下载整个区块。它们只存储[区块头](/glossary/block-header)（每年约 4 MB），需要确认特定交易时向全节点请求证明。

有时称为"默克尔包含证明"或"默克尔路径"。三个术语都指同一构造。

同一原语出现在密码学的各个领域：Git 用于提交历史，ZFS 用于文件系统完整性，Certificate Transparency 用于日志包含。比特币的使用是更广泛模式中一个知名的实例。
