---
title: "BIP 66"
slug: bip-66
draft: false
shortDefinition: "强制严格 DER 编码签名，缓解某些交易延展性和解析问题。"
keyTakeaways:
  - "使签名符合单一 DER 标准"
  - "通过移除替代编码减少延展性"
  - "改善网络稳定性和钱包兼容性"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - schnorr-signature
  - signature-aggregation
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0066"
liveWidget: ~
---

[BIP-66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)收紧了比特币的签名编码规则，要求严格的 **Distinguished Encoding Rules (DER)** 格式。2015 年 7 月作为[软分叉](/glossary/soft-fork)激活，这是一个延展性修复，关闭了前些年导致微妙 bug 的多个边缘情况。

问题：BIP-66 之前，比特币接受 OpenSSL 接受的任何签名，而 OpenSSL 很宽松。同一个逻辑 [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm)签名可以有多种编码方式——前导零、不同的整数编码、填充缓冲区。每种编码解析为相同的实际签名，但*字节*不同，这意味着交易的 [txid](/glossary/transaction)（基于这些字节计算）不同。

这是一种交易延展性形式：有人可以拦截广播的交易，以不同的有效方式重新编码签名，然后以不同 txid 重新广播。原始发送方的钱包会丢失对交易的跟踪，即使它最终被确认。最著名的受害者是 Mt. Gox，它在 2014 年将延展性作为丢失 850,000 BTC 的解释（实际原因更复杂，但延展性是故事的一部分）。

BIP-66 的修复：要求签名为规范 DER 格式——每个逻辑签名一种特定的字节布局。其他任何格式都被每个节点拒绝。

这消除了*签名形式*的延展性，但没有完全解决交易延展性（其他向量仍然存在，如脚本形式变体）。完整修复随 2017 年的 [SegWit](/glossary/segwit-segregated-witness-bip-141)到来，它将见证数据与 txid 计算结构分离。BIP-66 是有用的中间步骤。

BIP-66 的激活也标志着比特币首次使用 [BIP-9](/glossary/bip-9-versionbits)矿工信号机制进行软分叉——这个模板后来被多次复用。
