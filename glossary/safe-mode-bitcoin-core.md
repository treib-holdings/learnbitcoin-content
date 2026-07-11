---
title: "安全模式（Safe Mode，Bitcoin Core）"
slug: safe-mode-bitcoin-core
draft: false
shortDefinition: "一种保护模式，当节点怀疑重大链分叉或严重共识异常时禁用某些 RPC。"
keyTakeaways:
  - "在严重网络事件期间预先停止某些操作"
  - "帮助用户避免双花或接受无效区块"
  - "很少激活，指示异常或潜在恶意分叉"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - corrupted-chain-state
liveWidget: ~
---

"安全模式"是 Bitcoin Core 的一个旧功能，当节点检测到链状态异常——通常是深度重组、包含无效区块的长链或其他共识异常——时自动禁用某些 RPC 调用。理念是故障关闭：宁可拒绝广播交易也不要在受损或分叉的链上无意操作。

该功能在 Bitcoin Core 0.16（2018）中被移除。被淘汰的原因：

- **高误报率。** 触发安全模式的网络条件通常是良性的（一个自行解决的临时分叉、一个提供虚假区块数据的节点），但锁定是破坏性的。
- **不可靠的信号。** 应该真正停止操作的条件很难自动定义。安全模式要么触发太频繁（烦人），要么在实际问题上不触发（无用）。
- **更好的替代方案。** 现代 Bitcoin Core 通过 `getblockchaininfo` 和 `getnetworkinfo`（`warnings` 字段）浮现警告条件。运营者可以直接监控这些，而不需要一个可能误触的自动锁定。

取代安全模式的内容：

- **显式警告字段。** `getblockchaininfo` 的 `warnings` 字段向任何查询者报告异常链状态。钱包和下游工具可以自行选择如何反应。
- **GUI 警告。** Bitcoin Core 的 Qt UI 在节点看到令人担忧的情况时显示黄色横幅，但不禁用功能。
- **运营者警觉。** 在争议分叉或疑似攻击期间停止操作的决策从"节点替你决定"变为"你根据节点提供的数据自行决定"。

这个概念在更广泛的原则中延续：当共识层出现异常时，保守的运营者会停止操作直到情况被理解。自动化已不存在；纪律没有。
