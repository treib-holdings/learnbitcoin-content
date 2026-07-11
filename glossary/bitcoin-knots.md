---
title: "Bitcoin Knots"
slug: bitcoin-knots
draft: false
shortDefinition: "基于 Bitcoin Core 的分叉，添加额外功能，由独立开发社区维护。"
keyTakeaways:
  - "源自 Bitcoin Core 但有更多功能"
  - "由单独的团队维护，非官方 Core 开发者"
  - "可能更早引入新功能但潜在风险更高"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-operator
  - node-synchronization
  - safe-mode-bitcoin-core
liveWidget: ~
---

**Bitcoin Knots** 是 [Bitcoin Core](/glossary/bitcoin-core)的衍生版本，由单一开发者 Luke Dashjr 维护。它紧随 Core 的代码库，并添加反映维护者对节点应如何行为的特定观点的补丁——特别是在内存池策略和哪些交易被视为"垃圾"方面。

关于 Knots 治理需要了解的两件事：

- **这是个人项目。**与 [Bitcoin Core](/glossary/bitcoin-core)不同——后者由轮换贡献者维护，有正式审查流程和广泛的社区输入——Knots 反映一个开发者的编辑决定。社区不决定什么进入 Knots；维护者决定。代码是开源的，任何人都可以分叉，但方向由维护者掌控。
- **添加的补丁编码了特定的策略观点。**最值得注意的是，Knots 对其维护者认为是垃圾的交易类型（大型 [OP_RETURN](/glossary/opreturn) 载荷、[Ordinals](/glossary/opreturn-based-tokens)式铭文等）应用更严格的默认过滤。这是策略选择，非中立的技术改进，合理的人可能对节点运营商是否应对中继内容施加这些过滤器有不同看法。

兼容性说明：Knots 与 Core 共识兼容。Knots 节点看到相同的链并接受相同的区块。差异在**中继策略**（转发哪些交易）和**内存池准入**（保留哪些交易），这些是本地节点选择，不是共识规则。

对于大多数用户，**[Bitcoin Core](/glossary/bitcoin-core)是参考实现**——拥有广泛开发者审查、最充分测试的验证逻辑以及从社区审查过程而非单一维护者偏好中产生的策略的代码库。它是默认选择是有原因的，也是本站推荐的默认选项。

如果你已经仔细考虑过运行 Knots 所采取的策略立场，它是一个合理选项。如果你没有——如果你只是在找一个比特币节点——Core 是答案。
