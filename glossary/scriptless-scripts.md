---
title: "Scriptless Scripts"
slug: scriptless-scripts
draft: false
shortDefinition: "利用 Schnorr 签名的代数特性，将合约条件编码在签名本身而非链上脚本中，实现链下合约逻辑。"
keyTakeaways:
  - "将合约细节保留在链下以增强隐私"
  - "利用 Schnorr 的代数特性实现基于签名的逻辑"
  - "相比传统比特币脚本，减少链上开销"
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - op-code-operation-code
  - script
liveWidget: ~
---

"Scriptless Scripts" 是由 Andrew Poelstra 等人开创的研究方向，将复杂的比特币合约逻辑编码到签名本身的密码学结构中，而不是编码到 [Bitcoin Script](/glossary/bitcoin-script) 的操作码里。合约的链上足迹只是一个标准签名；合约条件存在于数学之中。

技术机制依赖于 **[Schnorr 签名](/glossary/schnorr-signature)** 及其线性特性。两方可以构建一个联合签名流程，使得完成签名的同时也隐含地满足了某个合约条件——比如揭示一个秘密、证明一个事实，或结算一个预言机结果。签名一旦发布到链上，与任何其他 Schnorr 签名毫无区别——但链下参与者知道它编码了一次特定的合约执行。

Scriptless Scripts 的应用场景：

- **谨慎日志合约（DLC）。** 条件支付中，预言机对某个结果的签名决定赢家。链上交易看起来就是一笔普通结算；只有参与方（和预言机）知道赌的是什么。
- **[Lightning](/glossary/lightning-network) 路由改进。** 各种 Lightning 协议可以将信任假设从逐跳脚本移到签名聚合层。
- **原子互换变体。** 跨链互换中，关联价值编码在签名标量中而非哈希原像中。
- **跨链 Bitcoin Lightning / Liquid 互换**，在两条链上使用相同的签名编码条件。

优势：

- **隐私。** 观察者无法看出交易是复杂合约的一部分；它看起来就是一笔普通交易。
- **更小的链上足迹。** 合约逻辑不需要脚本字节。
- **无需新操作码。** 只要参与方使用 Schnorr/Taproot，许多 Scriptless Scripts 模式在当前的比特币上就能工作。

难点在于：Scriptless Scripts 需要精心设计的协议，实现起来并不简单。功能强大但专业化。实际采用还有限，但在增长——尤其是在 DLC 和高级 Lightning 工作流中。

参见 [Schnorr 签名](/glossary/schnorr-signature)了解底层密码学，以及 [Taproot](/glossary/taproot) 了解使这一方向变得可行的比特币升级。
