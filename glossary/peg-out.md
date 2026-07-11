---
title: "Peg-out（锚定赎回）"
slug: peg-out
draft: false
shortDefinition: "在联邦或多签验证交易有效性后，将侧链代币换回主网 BTC。"
keyTakeaways:
  - "侧链代币被赎回为主网上的真实 BTC"
  - "联邦多签或功能成员确认无双花"
  - "完成从侧链到比特币的双向锚定闭环"
sources: []
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-guard
  - sidechain
liveWidget: ~
---

**Peg-out** 是将侧链代币转换回主网 BTC 的操作，完成始于 [peg-in](/glossary/peg) 的往返。这是[双向锚定](/glossary/peg)生命周期中需要最多信任假设的一半，因为必须有人授权释放主网上最初锁定的 BTC。

具体机制取决于锚定架构：

- **[联邦锚定](/glossary/liquid-network)（如 Liquid）：** 用户在 Liquid 上销毁 L-BTC；[联邦](/glossary/liquid-federation)验证销毁，联邦成员阈值（如 11-of-15 功能成员）签署一笔交易，从联邦的主网多签中释放 BTC。联邦诚实执行 peg-out 是关键的信任假设。
- **Drivechain（[BIP-300](/glossary/bip-300-drivechains)）：** 提款提案由[矿工](/glossary/miner)在较长时期内（约 3 个月）投票。如果足够多的矿工批准，BTC 被释放。这将信任转移到矿工多数。
- **SPV 验证锚定：** 侧链验证者通过主网活动的 SPV 证明验证 peg-out。理论上更无需信任，但很少大规模部署。

Peg-out 可能出什么问题：

- **联邦拒绝。** 如果联邦决定审查 peg-out（合规要求、争议、恶意行为），用户就拿着无法赎回的侧链代币。
- **联邦被攻破。** 被黑客攻击或被胁迫的联邦可能批准虚假 peg-out，抽走锁定的 BTC。
- **处理缓慢。** Drivechain 式 peg-out 有意设计为缓慢（数月）；联邦 peg-out 更快（数小时到数天），但仍比链上转账慢。
- **侧链失败。** 如果侧链本身失败（漏洞、关闭、被恶意接管），peg-out 可能变得不可能。

对于通过侧链转移真实价值的用户，peg-out 路径是需要评估的关键风险。一旦你的 BTC 被 peg-in，你就受制于 peg-out 机制在压力下实际能交付什么。

参见 [Peg](/glossary/peg) 了解 peg-in 和更广泛的背景，[Peg-Guard](/glossary/peg-guard) 了解安全机制。
