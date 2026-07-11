---
title: "链状态损坏"
slug: corrupted-chain-state
draft: false
shortDefinition: "节点的本地区块链数据变得无效或不一致，通常需要重新索引或完全同步。"
keyTakeaways:
  - "由硬件、文件系统或软件问题导致"
  - "导致本地区块链数据无效或不完整"
  - "通常通过重新索引或重新下载链来解决"
sources: []
relatedTerms:
  - bitcoin-vault
  - blockchain
  - chain-split
  - fork-detection
  - full-node
  - full-validation
  - node-synchronization
  - reorg-reorganization
  - safe-mode-bitcoin-core
liveWidget: ~
---

链状态损坏是节点本地数据库（区块文件、UTXO 集、索引）变得内部不一致的运营故障模式。密码链本身没问题；*本地副本*坏了。

常见原因：

- **数据库写入期间断电或硬关机。** LevelDB 和 Bitcoin Core 优雅地处理了大部分情况，但不是全部。
- **磁盘损坏**（SSD 故障、坏扇区、RAID 重建错误）。
- **文件系统层面的问题**，尤其是网络存储（NFS、sshfs——永远不要在这些上运行节点）。
- **Bitcoin Core 软件在大版本升级期间的 bug**，偶尔发生。
- **写入中途内存不足被杀。**

症状：节点拒绝启动，报告"corrupted block database"，无法验证新区块，或显示严重错误的余额。

修复阶梯，从简单到复杂：

- **`-reindex-chainstate`。** 从现有磁盘区块重建 UTXO 集。如果区块完整则速度较快；清理链状态数据库中的大部分损坏。
- **`-reindex`。** 通过重新读取和重新验证每个区块文件来重建区块索引和链状态。耗时更长（数小时），但不需要重新下载。
- **删除 `chainstate/` 并重新索引。** 如果 `-reindex-chainstate` 失败，在重新索引前手动删除 chainstate 目录。
- **删除并从零开始同步。** 删除 `blocks/` 和 `chainstate/`，从头开始。最后手段；需要完整的 IBD 时间（好硬件上 12+ 小时）。

预防主要是运营方面的：在可靠硬件上运行（具有断电保护的消费级 SSD，偏执的话用 ECC RAM），使用不间断电源，不要在网络文件系统上运行节点，备份钱包（不是链状态——链状态可以从网络重建）。
