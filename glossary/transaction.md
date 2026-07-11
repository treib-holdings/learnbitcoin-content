---
title: "交易"
slug: transaction
draft: false
shortDefinition: "将 BTC 从输入（引用 UTXO）转移到输出（锁定脚本）的数据结构。由私钥签名。"
keyTakeaways:
  - "由输入、输出、签名和可选脚本/数据组成"
  - "消耗现有 UTXO 并创建新的，形成账本的流转"
  - "有效交易必须满足每个输入的脚本约束"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - batch-transaction
  - psbt
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - double-spend
  - double-spend-relay
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - nlocktime
  - nsequence
  - output-transaction-output
  - replace-fee-rbf
  - satoshi-unit
  - transaction-chaining
  - transaction-fee
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_protocol"
  - "https://www.wikidata.org/wiki/Q17001427"
  - "https://en.bitcoin.it/wiki/Transaction"
liveWidget: ~
---

比特币交易是一种数据结构，将 BTC 从一组所有者转移到另一组。它通过消耗现有的[未花费输出](/glossary/utxo-unspent-transaction-output)（UTXO）作为**输入**，创建新的[**输出**](/glossary/output-transaction-output)，将资金锁定到新的花费条件下来实现这一点。

结构是原子的：一笔交易要么完全成功，要么完全失败。每个输入必须产生有效签名（或脚本见证），证明花费者控制被消耗的 UTXO。即使一个输入失败，整笔交易就无效。输入值之和必须至少等于输出值之和；差额是支付给矿工的[交易手续费](/glossary/fee-estimation)。

典型的发送流程：你的钱包选择一个或多个 UTXO，其价值总和至少等于你要发送的金额，将它们签名为输入，创建一个支付给接收方的输出，并创建一个*找零*输出将余额付回给自己。整个包广播到点对点网络，在[内存池](/glossary/mempool)中等待，直到矿工将其包含在区块中。

一旦确认，交易就永远由其 **txid** 标识——其序列化形式的双重 SHA-256 哈希。它创建的输出成为全局 UTXO 集中的新 UTXO，可在未来交易中被花费，而它消耗的输入则永远消失。

参见[挖矿深度指南 §6](/rabbit-hole/mining)了解矿工如何决定将哪些交易打包进区块，以及 [UTXO](/glossary/utxo-unspent-transaction-output)了解比特币会计的"硬币对象"模型。
