---
title: "粉尘限制"
slug: dust-limit
draft: false
shortDefinition: "低于此阈值的输出被视为粉尘，被节点默认策略视为非标准而拒绝（如旧版 P2PKH 约 546 聪）。"
keyTakeaways:
  - "防止微小输出淹没网络"
  - "因脚本类型而异（如旧版 vs SegWit）"
  - "策略层面，非硬性共识规则，但被广泛执行"
sources: []
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

粉尘限制是 Bitcoin Core 的策略阈值，低于此阈值的输出被视为"粉尘"，交易被当作非标准处理，意味着节点不会中继或将其包含在内存池中。

确切阈值取决于输出脚本类型，因为计算考虑了*花费*该输出的成本：如果花费输出的手续费超过移动的价值，该输出就是粉尘。截至 2026 年：

- **P2PKH（旧版）**：约 546 聪。
- **P2SH**：约 540 聪。
- **P2WPKH（原生 SegWit）**：约 294 聪（更小因为 SegWit 输入更小）。
- **P2TR（Taproot）**：约 330 聪。
- **OP_RETURN** 输出豁免，因为它们被证明不可花费（没有未来花费成本需摊销）。

Bitcoin Core 中的公式：`dust_threshold = (output_size + input_size) * dustRelayFee / 1000`，其中 `dustRelayFee` 默认为 3,000 sats/kvB。运营者可以调整手续费率，这会按比例改变阈值。

"非标准"在实践中的含义：

- **默认 Bitcoin Core 节点不会中继**包含粉尘输出的交易。该交易实际上对网络的大部分不可见。
- **默认 Bitcoin Core 挖矿策略不会**将它们包含在候选区块中。
- **共识规则不拒绝它们。** 包含粉尘的交易技术上可以在区块中；策略是中继/标准性过滤器，不是硬规则。一些矿工和矿池通过带外提交接受包含粉尘的交易，需付费。

为什么存在限制：

- **UTXO 集增长。** 节点存储的每个输出消耗内存。永远不会被花费的粉尘输出永久膨胀 UTXO 集。
- **经济合理性。** 如果花费输出的成本超过输出价值，没有人会花费它——它永久卡住。最好不要创建它。
- **抗垃圾。** 微小输出是滥用网络的廉价方式。粉尘限制提高了成本。

用户通常只在边缘遇到粉尘限制——构建有非常小找零输出的交易，或尝试发送极小金额。钱包要么将粉尘合并到手续费中，要么拒绝构建交易，取决于钱包的 UX。
