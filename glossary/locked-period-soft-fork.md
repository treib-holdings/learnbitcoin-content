---
title: "锁定期（软分叉）"
slug: locked-period-soft-fork
draft: false
shortDefinition: "软分叉信号阈值达到后、新共识规则在网络上生效之前的等待阶段。"
keyTakeaways:
  - "阈值达到 -> 锁定 -> 等待期 -> 最终激活"
  - "防止突然规则变更以便节点平滑更新"
  - "矿工和用户必须在规则变为强制之前对齐"
sources: []
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - chain-flag-day
  - consensus-parameter
  - deployment-threshold-soft-fork
  - soft-fork
liveWidget: ~
---

锁定期是软分叉达到信号阈值后到新共识规则实际生效之间的等待窗口。

在 BIP 9 版本位中，序列是：

1. Started：信号开放，矿工如果支持升级可以设置版本位。
2. Locked-in：阈值达到（历史上为 2016 区块周期中 95% 的区块）。结果现在已确定；升级将激活。
3. Active：规则生效。违反新规则的区块被拒绝。

Locked-in 和 Active 之间的间隔就是"锁定期"，通常是一个完整的重定向间隔（约 2 周）。其目的是运营性的：尚未升级的节点运营者有一个明确的窗口来完成升级。钱包、交易所和基础设施可以宣布最终兼容状态。未发信号的矿工可以确保其软件已更新。然后转换在一个已知的、可预测的高度发生，所有人都已预先知晓。

在 Speedy Trial（用于 Taproot）下，同样的理念适用：锁定后有一个固定延迟才激活。机制变了但运营理由没变。即使是积极的变化，突然激活也会增加陈旧软件碰壁、产生孤块或拒绝有效交易的风险。锁定期是一种协调礼貌，事实证明是承重的。
