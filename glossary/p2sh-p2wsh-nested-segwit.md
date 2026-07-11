---
title: "P2SH-P2WSH（嵌套 SegWit 脚本）"
slug: p2sh-p2wsh-nested-segwit
draft: false
shortDefinition: "将 P2WSH 输出包裹在 P2SH 外层中，使地址看起来像传统格式（以 '3' 开头），但花费时使用 SegWit 见证数据。"
keyTakeaways:
  - "2017-2018 年 SegWit 部署期间的向后兼容方案"
  - "接收地址看起来像 P2SH（以 '3' 开头），但花费时使用见证数据"
  - "比原生 P2WSH 更大、更贵；现代钱包默认使用 bc1q 或 Taproot"
sources: []
relatedTerms:
  - p2sh
  - p2wsh-pay-witness-script-hash
  - segwit-segregated-witness-bip-141
  - native-segwit
  - taproot
  - p2wpkh-pay-witness-public-key-hash
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
---

P2SH-P2WSH——有时被称为"嵌套 SegWit 脚本"或"P2SH 包裹的 P2WSH"——是一个被 [P2SH](/glossary/p2sh) 外层包裹的 [P2WSH](/glossary/p2wsh-pay-witness-script-hash) 输出。地址看起来像传统格式（以 `3` 开头），但花费时遵循 [SegWit](/glossary/segwit-segregated-witness-bip-141) 规则：赎回脚本只是承诺一个 P2WSH 的 `scriptPubKey`，实际的见证数据位于传统交易结构之外。

它存在的唯一原因：2017-2018 年 SegWit 部署期间的向后兼容性。

2017 年 8 月 SegWit 激活时，大多数钱包和交易所还不支持发送到原生 SegWit 地址（`bc1q...`）。但它们知道如何发送到 `3...` 地址（[P2SH](/glossary/p2sh) 自 2012 年起就存在了，通过 [BIP-16](/glossary/p2sh)）。为了让用户在生态系统跟上之前就能采用 SegWit，钱包生成了 P2SH-P2WSH 地址：外表看起来像传统地址，内在是 SegWit。发送方看到的是熟悉的 `3...` 地址；接收方获得了 SegWit 的手续费折扣和延展性修复。

包裹机制的工作原理：

- **接收。** 地址是一个简短赎回脚本的哈希：`OP_0 <32-byte-script-hash>`，这本身就是一个 P2WSH 的 `scriptPubKey`。
- **花费。** 输入揭示该赎回脚本（P2SH 语义），实际的花费脚本和签名位于见证栈中（SegWit 语义）。

实际上它就是一个多了一层包裹的 P2WSH 花费。你需要为 P2SH 包裹层支付额外字节，但能获得 SegWit 的大部分好处。

**你会在哪里看到它：**

- 2017 年中到 2019 年左右生成的钱包，想要获得 SegWit 好处又不想破坏发送方兼容性
- 那个时期的多签设置（Casa、Unchained、BitGo 等）通常默认使用 P2SH-P2WSH
- 在生态系统普及 `bc1q` 之前支持 SegWit 的硬件钱包

**现状：**

- 新钱包默认使用[原生 SegWit](/glossary/native-segwit)（`bc1q...`）或 [Taproot](/glossary/taproot)（`bc1p...`）。不再需要嵌套了。
- 现有的 P2SH-P2WSH UTXO 仍然可以永久花费；这种格式没有过期。
- 如果你持有这种 UTXO，在手续费较低的日子将其扫入原生 SegWit 或 Taproot 地址，需要花一笔交易费，但能在未来的花费中节省成本。

同样的模式也存在于单签场景：P2SH 包裹的 [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) 提供一个 `3...` 地址，在 SegWit 规则下花费。理由相同，现状也一样。
