---
title: "部署阈值（软分叉）"
slug: deployment-threshold-soft-fork
draft: false
shortDefinition: "软分叉锁定和激活前，要求区块信号支持达到的百分比（如 95%）。"
keyTakeaways:
  - "设定软分叉就绪的区块信号目标"
  - "确保升级仅在矿工高度支持时激活"
  - "有时被批评为给矿工过大影响力"
sources: []
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - bip-159
  - chain-flag-day
  - consensus-parameter
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

部署阈值是提议的软分叉激活前，近期区块必须信号支持的百分比。在 BIP 9（versionbits）下，标准阈值是在 2016 个区块的重定向周期中 95% 的区块设置指定的版本位。

这对于矿工社区一致支持的技术升级效果很好。对于矿工有经济或政治理由推迟的升级则效果很差。

SegWit 部署（2016-2017 年）是典型案例。SegWit 是一个干净的改进；大多数用户想要它；大部分挖矿算力因各种原因拖延信号数月（一些是关于实现细节的合理担忧，一些是商业的：ASICBoost 与 SegWit 不兼容，一些矿工不想放弃该收入流）。95% 阈值给了少数矿工事实上的否决权。

解决方案是多管齐下的：BIP 91 将 SegWit 信号阈值降至 80% 并强制锁定，BIP 148 是用户激活软分叉（UASF），表明经济上重要的节点甚至在没有矿工信号的情况下也能执行 SegWit 规则，综合压力使矿工开始信号。

吸取的教训：纯矿工阈值激活使升级被挖矿政治挟持。Taproot 的激活使用了"快速试验"（Speedy Trial）——BIP 9 信号加上硬性最低激活高度，因此升级在阈值或高度处激活，以先到者为准。不再有无限期卡住的部署。

部署阈值作为协调信号仍然有用，但将其视为激活最终仲裁者的日子已经过去了。
