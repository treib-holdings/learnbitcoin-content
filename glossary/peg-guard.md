---
title: "Peg-Guard（锚定守护）"
slug: peg-guard
draft: false
shortDefinition: "侧链锚定系统中的安全措施，防止锚定 BTC 被利用或双花，通常需要联邦签名。"
keyTakeaways:
  - "防止锚定的 BTC 被非法提取"
  - "联邦或多签通常验证合法的 peg-out"
  - "对使用双向锚定的侧链安全至关重要"
sources: []
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-out
  - sidechain
liveWidget: ~
---

**Peg-guard** 是[侧链](/glossary/sidechain)锚定系统中旨在防止欺诈性提取的安全机制——尤其是那种灾难性的失败模式：某个漏洞或攻击让人凭空"打印"锚定 BTC，创建没有实际主网 BTC 储备支撑的侧链代币。

Peg-guard 需要防范的情况：

- **侧链共识漏洞。** 让无效区块通过的漏洞可能创建不应存在的侧链代币。如果这些代币随后获得 peg-out 批准，真正的 BTC 将从锁定的储备中被抽走。
- **侧链代码中的通胀。** 发行超过 peg-in 锁定数量的侧链代币的软件漏洞。
- **锚定运营者串通。** 联邦成员签署没有有效 peg-in 支撑的 peg-out。

常见的 peg-guard 实现：

- **Peg-out 多签阈值。** 要求 11-of-15 联邦签名意味着单个恶意运营者无法抽走资金。由 [Liquid](/glossary/liquid-network) 使用。
- **交叉验证要求。** 联邦成员在签名前独立验证侧链状态和 peg-out 提案。如果侧链漏洞看起来在抽空锚定储备，成员拒绝签名。
- **审计储备。** 一些侧链定期发布储备证明，让用户验证锚定支撑与已发行代币匹配。
- **慢速提取窗口**（drivechain 风格）。peg-out 最终确认前的长延迟提供了检测异常的时间。

在 Liquid 中，"peg-guard"这个说法不是正式品牌，但该功能由联邦成员在签署 peg-out 释放前独立验证 Liquid 状态来执行。去中心化验证就是守护——如果联邦怀疑 Liquid 有漏洞，单个成员可以拒绝签名，peg-out 就无法进行。

对于用户来说，peg-guard 不是直接可见的，但它是使侧链锚定足够可信以供大规模使用的部分。一个有强 peg-guard 的侧链，其共识漏洞不会立即抽空 BTC 储备。
