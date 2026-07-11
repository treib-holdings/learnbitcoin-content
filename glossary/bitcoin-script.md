---
title: "Bitcoin Script"
slug: bitcoin-script
draft: false
shortDefinition: "比特币内置的脚本语言，定义交易中的花费条件（如单签、多签）。"
keyTakeaways:
  - "指定花费 BTC 输出的条件"
  - "基于栈，刻意限制以保证安全"
  - "可通过多签或时间锁等功能形成复杂合约"
sources: []
relatedTerms:
  - adapter-signature
  - p2sh
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - bip-113
  - bip-119-ctv
  - bip-342-tapscript
  - bitcoin-pizza-day
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - merkleized-abstract-syntax-tree-mast
  - op-code-operation-code
  - opreturn
  - script
  - scriptless-scripts
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Script"
liveWidget: ~
---

Bitcoin Script 是基于栈的语言，定义每个比特币 [UTXO](/glossary/utxo-unspent-transaction-output)的花费条件。每个输出有一个 **scriptPubKey**（锁）；每个输入必须提供满足它的 **scriptSig** 或**见证**（钥匙）。

Script **刻意不是图灵完备的**。没有循环。没有跳转。执行总是终止。这是刻意的选择：更具表达力的语言意味着无界执行时间，意味着攻击向量。比特币用表达力换安全。如果你想要完全可编程性，那在链下（在组合 Script 原语的工具中）或在[闪电网络](/glossary/lightning-network)等单独层上。

Script 原生能做的：

- **支付到单个公钥。**最初的 P2PK 格式。
- **支付到公钥哈希（P2PKH）。**将公钥哈希为地址；仅在花费时揭示公钥。
- **多签。**N-of-M 花费——要求 M 个指定密钥中任意 N 个签名（传统"OP_CHECKMULTISIG"或现代 Taproot 等价物）。
- **时间锁。**要求交易在特定区块高度或墙上时钟时间后才有效（[CLTV](/glossary/checklocktimeverify-cltv)、[CSV](/glossary/checksequenceverify-csv)）。
- **哈希锁。**要求揭示一个哈希到特定承诺的值——闪电网络 [HTLC](/glossary/htlc-hashed-time-locked-contract)的基础。
- **上述的任意组合**，特别是在 [Taproot](/glossary/taproot)和 Tapscript 下。

大多数比特币用户从不直接写 Script。钱包自动构造标准脚本模板（P2PKH、P2WPKH、P2TR）。但理解 Script 是理解什么样的比特币合约可能的门户——以及哪些提案（契约、金库脚本、CTV）可能或不可能在未来软分叉中添加。

参见 [Taproot](/glossary/taproot)了解现代脚本环境，[HTLC](/glossary/htlc-hashed-time-locked-contract)了解 Script 最有用的现实世界组合之一。
