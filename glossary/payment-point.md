---
title: "支付点（Payment Point）"
slug: payment-point
draft: false
shortDefinition: "在闪电网络中，由支付秘密哈希原像派生的公钥；接收方必须揭示该原像才能领取资金。"
keyTakeaways:
  - "与闪电网络的哈希时间锁合约（HTLC）相关"
  - "接收方通过揭示哈希秘密的原像来领取支付"
  - "在不揭示整个支付路径的情况下确保路由级安全"
sources: []
relatedTerms:
  - htlc-hashed-time-locked-contract
  - lightning-routing
  - lightning-sphinx
  - schnorr-signature
  - taproot
liveWidget: ~
---

支付点是闪电网络支付秘密的公钥形式，在 PTLC（Point Time-Locked Contract，点时间锁合约）支付路由中用作密码学锚点，替代原像的哈希。

经典闪电网络构造使用 HTLC：每一跳持有可以通过揭示原像 `r`（满足 `SHA256(r) = h`）来领取的资金。哈希 `h` 在整个路由中相同，因此看到一跳揭示原像的网络观察者可以将其与其他跳的揭示关联起来，链接整个路径。PTLC 修复了这个问题。

PTLC 使用支付点 `P = r * G`（其中 `G` 是曲线生成元）。发送方构造路由，使每一跳看到不同的移位点（`P + t_i * G`，对于某个移位 `t_i`）。最终接收方揭示 `r`（`P` 的离散对数）；每个转发跳减去其移位并使用结果标量来领取其入站 HTLC。每一跳看到曲线上不同的点，因此跨跳关联点的外部观察者看不到任何有用信息。

PTLC 一旦部署将解锁的能力：

- **更强的路由隐私。** 观察者不再能通过共享支付哈希轻易关联各跳。
- **异步/自发支付**（LN-keysend 等价物）具有更好的特性。
- **原子多路径支付无关联。** 每条路径使用不同的点；观察者无法判断各部分属于同一笔支付。
- **无状态发票和其他高级构造**基于更灵活的密码学原语。

依赖项是 Schnorr 签名（BIP 340），Taproot 已于 2021 年部署。PTLC 机制已设计和规范，但生产闪电网络实现仍在推出中。截至 2026 年，大多数实际闪电支付仍通过 HTLC 进行。PTLC 即将到来。
