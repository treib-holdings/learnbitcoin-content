---
title: "UTXO（未花费交易输出）"
slug: utxo-unspent-transaction-output
draft: false
shortDefinition: "链上记录的可花费 BTC 片段。每笔交易的输入消耗一个或多个 UTXO。"
keyTakeaways:
  - "体现了比特币账本模型中的'硬币'概念"
  - "必须被完整花费；剩余部分必须作为'找零'输出"
  - "对链上交易逻辑和隐私至关重要"
sources:
  - { label: "UTXOs rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/utxos" }
relatedTerms:
  - absolute-fee
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - output-transaction-output
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - transaction
  - transaction-index-txindex
  - vanity-address
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
liveWidget: ~
---

UTXO——**未花费交易输出**——是一个仍然可花费的[交易输出](/glossary/output-transaction-output)。比特币不追踪账户余额；它追踪 UTXO。你的钱包显示的"余额"只是它能解锁的所有 UTXO 的总和。

每个 UTXO 有两部分：一个**金额**（以聪为单位）和一个**锁定脚本**，定义了花费它需要什么。最常见的脚本是"证明你拥有此地址的私钥"。更高级的脚本可以要求多个签名、时间延迟或其他条件。

UTXO 是全有或全无的。当你将一个 UTXO 作为[交易输入](/glossary/input-transaction-input)花费时，整个都被消耗。如果你只想花其中一部分，你的交易会创建两个输出：一个给接收方，一个作为**找零**回到自己。大多数钱包在后台自动完成这个过程，并为找零选一个新地址。

从 UTXO 角度思考重要的两个实际原因：

- **手续费。** 你花费的每个输入大约占 68-148 字节（取决于脚本类型），更大的交易花费更多。许多小 UTXO = 昂贵的交易。在低费率时定期合并它们可以节省以后的费用。
- **隐私。** 当你在同一笔交易中花费两个 UTXO 时，你公开声明它们有共同所有者。链上分析师利用这一点来聚类地址。币控制（手动选择花费哪些 UTXO）和 [CoinJoin](/glossary/coinjoin) 等工具让你可以对抗这种分析。

在 [UTXO 深度指南](/rabbit-hole/utxos)中了解更多——找零地址、币选择、尘埃输出和隐私影响。另见[交易](/glossary/transaction)了解消耗和创建 UTXO 的数据结构，以及[挖矿深度指南 §6](/rabbit-hole/mining)了解矿工如何评估它们。
