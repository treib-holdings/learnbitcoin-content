---
title: "BIP 40（警报防重放）"
slug: bip-40-alerts-avoid-replay
draft: false
shortDefinition: "解决旧警报消息的潜在重放问题，属于现已弃用的比特币警报系统的一部分。"
keyTakeaways:
  - "停止旧网络警报的重复使用"
  - "已退役警报机制的一部分"
  - "展示了比特币中迭代式的安全关注"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-37
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-synchronization
liveWidget: ~
---

BIP 40 是对旧比特币警报系统的一行补丁：防止陈旧警报消息的重放。整个警报系统此后已被移除，这使得 BIP 40 双重退役。

警报机制让少数早期开发者可以广播由主密钥签名的全网警告。到 2016 年，一个签名密钥控制紧急通道显然是中心化风险——即使持有者是可信的，密钥本身是目标，也没有干净的方式来轮换它。Bitcoin Core 在 0.12.1（2016 年 4 月）中弃用了警报，在 0.13（2016 年 8 月）中完全移除，警报私钥随后被故意公开，以便没有人可以恶意复活该系统。

规范：[BIP-40](https://github.com/bitcoin/bips/blob/master/bip-0040.mediawiki)。今天同等功能（紧急运营信号）存在于邮件列表、IRC 和 bitcoin-dev / bitcoin-core-dev 社区频道中——去中心化、缓慢、不可能被静默捕获。
