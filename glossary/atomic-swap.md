---
title: "原子互换"
slug: atomic-swap
draft: false
shortDefinition: "两方在无需使用中心化交易所的情况下交换不同加密货币的无信任方式。"
keyTakeaways:
  - "使用哈希时间锁定合约实现无信任交易"
  - "消除对中心化交易所的依赖"
  - "需要一定的技术设置和兼容的区块链功能"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap-refill
  - bitcoin-bridge
  - htlc-hashed-time-locked-contract
  - payjoin
  - submarine-swap
liveWidget: ~
---

原子互换是一种无信任的跨链或跨层交易。两方在不同链上（或一条链上和一条闪电通道上）交换代币，无需向第三方放弃托管。交易的两面要么都发生，要么都不发生。不存在"我发了我的，但你没发你的"这种失败模式。

机制是配对的 [HTLC](/glossary/htlc-hashed-time-locked-contract)：

1. **Alice 选一个随机秘密** `s` 并计算 `hash(s)`。她只公布哈希值。
2. **Alice 在链 A 上锁定她的资金**到一个 HTLC："Bob 如果揭示 `s` 就可以领取；否则 24 小时后 Alice 退款。"
3. **Bob 在链 B 上锁定他的资金**到一个 HTLC："Alice 如果揭示 `s` 就可以领取；否则 12 小时后 Bob 退款"（超时时间故意更短，这样 Bob 不会暴露过久）。
4. **Alice 通过揭示 `s` 来领取 Bob 的资金。**这不可避免地在链 B 上公布了 `s`。
5. **Bob 看到 `s`**，用它来领取 Alice 在链 A 上的资金。

如果任何一方在任何步骤退出，HTLC 会超时并自动退款。交易要么原子性地完成，要么原子性地回滚。任何一方都没有对手方风险。

实际用途：

- **BTC ↔ BTC 跨层。**将链上 BTC 换为闪电 BTC 或反之——参见[潜艇互换](/glossary/submarine-swap)。
- **BTC ↔ 其他比特币衍生链**（Liquid、侧链等）。
- **BTC ↔ 稳定币**，通过 Robosats 等去中心化互换市场。

难点在于操作复杂性。原子互换要求双方的钱包都支持该协议，两条链都支持必要的脚本原语，以及谨慎的超时管理。大多数普通用户委托给互换服务（本身可能是信任最小化的），而不是原生操作。

原子互换是[比特币桥](/glossary/bitcoin-bridge)的无信任替代方案。桥持有真实 BTC 并在另一条链上发行包装表示（引入托管或联盟信任假设），而原子互换让交易的双方都保持在自己链上的原生状态，没有中间人持有任何资产。不同的权衡：桥更容易且支持更多下游用例；互换更安全且需要有意愿的对手方。

这是比特币的 [Script](/glossary/bitcoin-script) 和 [HTLC](/glossary/htlc-hashed-time-locked-contract) 使成为可能的优雅原语之一。它也是更广泛比特币生态系统中大量去中心化交易所的动力。
