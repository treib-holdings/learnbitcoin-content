---
title: "默克尔化抽象语法树（MAST）"
slug: merkleized-abstract-syntax-tree-mast
draft: false
shortDefinition: "一种基于 Taproot 的技术，将每个脚本分支放入默克尔树中，隐藏未使用的分支以提升隐私和效率。"
keyTakeaways:
  - "允许分离的脚本分支，仅揭示使用的路径"
  - "通过隐藏未使用的逻辑增强隐私"
  - "减少复杂合约的链上占用和手续费"
sources: []
relatedTerms:
  - taproot
  - bip-342-tapscript
  - bitcoin-script
  - merkle-tree-merkle-root
  - merkle-root
liveWidget: ~
---

MAST——**M**erkleized **A**bstract **S**yntax **T**ree（默克尔化抽象语法树）——是一种结构化复杂[比特币脚本](/glossary/bitcoin-script)的方式，使得在花费时只有实际执行的分支需要出现在链上。其他分支保持隐藏，通过[默克尔根](/glossary/merkle-root)密码学提交但永不揭示除非被使用。

这是融入 [Taproot](/glossary/taproot) 的两个密码学思想之一。另一个是 [Schnorr 签名](/glossary/schnorr-signature)和密钥聚合。

为什么 MAST 有用：考虑一个有多个花费分支的金库脚本——"所有者 1 个确认后可花费"，"所有者 + 可信备份 1 天后可花费"，"可信备份单独 1 年后可花费"。没有 MAST，所有三个分支在每次花费时都可见，占用区块空间并暴露你的安全模型。有了 MAST，只有你实际使用的分支被发布。其余对链上观察者不可见。

结合 Taproot 的"密钥路径花费"（协作签名选项），隐私增益叠加：如果所有参与者同意，脚本根本不需要揭示。观察者看到的是看起来像单签花费的交易。如果合作破裂，只有脚本的一个分支被暴露。

MAST 自 Taproot 软分叉于 2021 年 11 月激活以来就是比特币的一部分（[BIP-341 / BIP-342](/glossary/taproot)）。它不是你选择启用的独立功能；它是 Taproot 脚本路径花费的工作方式。

缩写很长，解释很密集，但结论很干净：比特币现在可以拥有看起来与最简单交易相同的复杂合约，直到它们不必如此。
