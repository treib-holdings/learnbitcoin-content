---
title: "Output（交易输出）"
slug: output-transaction-output
draft: false
shortDefinition: "指定一定数量的 BTC 和一个脚本（锁定脚本），决定如何花费它。输出在未被花费前成为 UTXO。"
keyTakeaways:
  - "定义收款方和花费条件"
  - "确认后成为 UTXO，等待未来花费"
  - "scriptPubKey 可以是单签、多签或高级脚本"
sources: []
relatedTerms:
  - bitcoin-script
  - input-transaction-input
  - opreturn
  - p2pkh-pay-public-key-hash
  - p2sh
  - taproot
  - transaction
  - utxo-unspent-transaction-output
liveWidget: ~
---

交易输出指定一定数量的 BTC 和一个**锁定脚本**（技术上称为 *scriptPubKey*），后者定义了后续花费它所需的条件。交易确认后，该输出就成为全局未花费集合中的一个 [UTXO](/glossary/utxo-unspent-transaction-output)（未花费交易输出），停留在链上，直到有人产生一个满足其脚本的[交易输入](/glossary/input-transaction-input)来花费它。

在数据结构上，每个输出包含两个字段：一个 8 字节的聪（sat）金额值，后面跟一个带长度前缀的锁定脚本。输出在交易内是有序的；每个输出的位置（**vout** 索引，从 0 开始）成为其永久身份的一部分。后续花费通过 `(txid, vout)` 这对值来引用一个输出。

锁定脚本可以很简单（"持有此私钥的人可以花费"），也可以非常复杂（多签、时间锁、哈希锁，或通用的 [Bitcoin Script](/glossary/bitcoin-script) 逻辑）。实践中，几种标准模式占据主导：

- **[P2PKH](/glossary/p2pkh-pay-public-key-hash)** —— 以 `1` 开头的旧版地址。通过提供公钥和匹配的签名来花费。
- **[P2SH](/glossary/p2sh)** —— 以 `3` 开头的地址。通过提供赎回脚本（赎回脚本本身定义了真正的花费条件）及其满足数据来花费。
- **[P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash)** —— 以 `bc1q...` 开头的 SegWit 地址。P2PKH 的原生 SegWit 等价物。
- **[P2WSH](/glossary/p2wsh-pay-witness-script-hash)** —— 以 `bc1q...` 开头的 SegWit 地址（更长）。P2SH 的原生 SegWit 等价物。
- **[Taproot](/glossary/taproot) (P2TR)** —— 以 `bc1p...` 开头的地址。添加了密钥路径和脚本路径花费方式，使用 Schnorr 签名。

输出是*不可分割的*。你不能花费半个 UTXO；你必须花费整个 UTXO，然后把找零作为新的**找零**输出返回给自己。这就是为什么你的大多数[交易](/glossary/transaction)有两个输出：一个给实际收款方，一个回到你自己的钱包。

两个值得了解的特殊情况：

- **尘埃输出。** 低于中继费相关的阈值（旧版类型通常约 546 聪，SegWit 和 Taproot 更小）的输出是非标准的——默认内存池策略拒绝中继它们。钱包不会创建这类输出。
- **[OP_RETURN](/glossary/opreturn) 输出。** 以 `OP_RETURN` 开头的锁定脚本可证明永远不可花费。它们携带零聪，仅用于嵌入小额数据承诺——协议元数据、证明、侧链锚定——而不会膨胀 UTXO 集。
