---
title: "Script"
slug: script
draft: false
shortDefinition: "比特币的基于栈的可编程指令集，定义了输出如何被花费（例如单签、多签）。"
keyTakeaways:
  - "通过后进先出的栈模型运行"
  - "受限的设计有助于安全性和确定性"
  - "用于实现多签、哈希支付、时间锁等功能"
sources: []
relatedTerms:
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - op-code-operation-code
  - opreturn
  - scriptless-scripts
liveWidget: ~
---

Bitcoin Script 是一种基于栈的编程语言，定义了输出如何被花费。每个 UTXO（未花费交易输出）都有一个锁定脚本（`scriptPubKey`）；要花费它，需要提供一个解锁脚本（传统输入的 `scriptSig`，SegWit 和 Taproot 的见证数据），与锁定脚本组合后执行，最终在栈上留下一个非零值即表示解锁成功。

设计上的刻意限制：

- **非图灵完备。** 没有循环，没有通用递归。每个脚本都在有限时间和有限内存内终止。这是一个特性：每个全节点都要验证每个脚本，无限制的计算会成为整个网络的拒绝服务攻击向量。
- **基于栈。** 操作在一个栈上压入和弹出。易于验证，易于推理，但表达力有限（这也是 Lightning 和其他层将复杂合约放在链下处理的原因之一）。
- **操作码受限。** 比特币历史上许多操作码已被禁用（`OP_CAT`、`OP_MUL`、`OP_NOP` 前缀的保留位）。活跃的操作码集合小到可以装进脑子里。

覆盖绝大多数 UTXO 的常见脚本模板：

- **P2PK**（`<pubkey> OP_CHECKSIG`）。最原始的形式。在主网上除了中本聪时代的币之外几乎绝迹。
- **P2PKH**（`OP_DUP OP_HASH160 <hash> OP_EQUALVERIFY OP_CHECKSIG`）。传统 `1...` 地址。
- **P2SH**（`OP_HASH160 <hash> OP_EQUAL`）。`3...` 地址；将任意赎回脚本包装在哈希后面。
- **P2WPKH / P2WSH**（[原生 SegWit](/glossary/native-segwit)，见证版本 0）。`bc1q...` 地址；逻辑与 P2PKH / P2SH 相同，但放在见证数据部分。
- **P2TR**（[Taproot](/glossary/taproot)，见证版本 1）。`bc1p...` 地址；Schnorr 签名，密钥路径或脚本路径花费，脚本路径中使用 MAST 树。

建立在基础 Script 之上的功能：通过 `OP_CHECKLOCKTIMEVERIFY` 和 `OP_CHECKSEQUENCEVERIFY` 实现时间锁（Lightning HTLC 的基础），通过 `OP_CHECKMULTISIG` 或聚合 Schnorr 实现多签，哈希原像承诺，以及各种策略组合器——拼接起来形成金库、互换和通道。

Tapscript（BIP 342）用 Schnorr 签名操作码扩展了经典 Script，并通过版本化操作码空间为未来升级铺路，但结构设计——基于栈、有界、简单——没有改变。
