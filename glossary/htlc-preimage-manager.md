---
title: "HTLC 原像管理器"
slug: htlc-preimage-manager
draft: false
shortDefinition: "闪电网络设置中跟踪和处理多跳支付原像的组件（或外部服务）。"
keyTakeaways:
  - "跟踪与每个 HTLC 关联的短期闪电网络秘密"
  - "协调多跳支付的及时原像披露"
  - "可以是内部节点逻辑或外部闪电网络服务模块"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - jammed-htlc-detector
  - lightning-channel
  - lightning-channel-splicing
  - lightning-invoice
  - lightning-network
  - lightning-payment
  - lightning-refund-invoice
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

HTLC 原像管理器是[闪电节点](/glossary/lightning-node)内部（或单独服务）跟踪与待处理 [HTLC](/glossary/htlc-hashed-time-locked-contract) 关联的密码秘密并协调其揭示的组件。

为什么节点需要仔细管理原像：

- **多跳原子性依赖于此。** 当下游跳揭示原像时，当前跳必须立即使用它认领上游 HTLC。此处延迟意味着失去路由手续费，或最坏情况下失去本金。
- **持有发票。** 一些闪电网络工作流故意不立即揭示原像——接收方在确认外部条件（如托管法币转换）时将支付保持在待处理状态。原像管理器必须跟踪这些长期持有的支付并决定何时释放或拒绝。
- **接收方钱包逻辑。** 当你在钱包上生成闪电网络发票时，原像在本地生成。钱包存储它并在相应 HTLC 到达时揭示。如果钱包丢失原像，你无法认领支付。

原像管理器处理：

- **生成。** 新发票的随机 32 字节秘密。
- **存储。** 在途支付原像的持久记录，跨重启耐用。
- **释放时机。** 下游 HTLC 结算时及时揭示原像（或在条件满足时释放持有发票）。
- **恢复。** 如果对手方在干净结算前强制关闭通道，重新广播原像。

在精心设计的闪电网络实现（LND、Core Lightning、Eclair）中，这是用户永远看不到的内部逻辑。在更模块化的设置中，它可以是单独服务——适用于预图像逻辑与瞭望塔和签名服务并行运行的高可用部署。

对于大多数用户，原像管理器是不可见的基础设施。对于闪电网络服务运营者，正确管理原像是最运营热点之一。
