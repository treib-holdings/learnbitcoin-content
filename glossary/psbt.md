---
title: "PSBT（部分签名比特币交易）"
slug: psbt
draft: false
shortDefinition: "BIP 174 标准格式，用于在多个设备或共同签名者之间传递尚未完全签名的交易而不暴露私钥。使现代自托管实际可行的工作流标准。"
keyTakeaways:
  - "单个二进制数据块（通常 base64 编码），携带未签名交易骨架加每个输入的 UTXO 数据、派生路径和部分签名"
  - "使硬件钱包能够气隔签名（USB / microSD / QR / NFC），种子永不暴露"
  - "跨厂商：任何 BIP-174 钱包可以将 PSBT 传给任何其他 BIP-174 钱包并完成交易"
  - "PSBT v2（BIP 370 / BIP 371）添加 Taproot 支持和创建后交易修改；现代工具原生使用 v2"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - hardware-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - transaction
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0174"
  - "https://en.bitcoin.it/wiki/PSBT"
  - "https://bitcoinops.org/en/topics/psbt/"
liveWidget: ~
---

PSBT——**P**artially **S**igned **B**itcoin **T**ransaction——是一种标准化格式（[BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)，由 Andrew Chow 撰写，2018 年合并入 Bitcoin Core 0.17），用于在多个设备或共同签名者之间传递尚未完全签名的交易。它是使现代自托管实际可行的工作流标准。

PSBT 解决的问题：在任何非简单的签名设置中，通常有一个*知道钱包状态*（哪些 UTXO 存在、哪些地址是你的）但没有[私钥](/glossary/private-key)的设备，和一个*有密钥*但不知道钱包状态的独立设备。未签名但完整描述的交易就是需要在这两者之间传递的工件。

## 格式

PSBT 是一个单一二进制数据块（通常编码为 base64 字符串），按每个输入、每个输出分节，加上全局部分。它携带：

- 未签名交易骨架
- 每个输入的 UTXO 数据（使签名者可以独立验证金额）
- 每个输入的派生路径和公钥
- 每个共同签名者添加的部分签名
- BIP 32 主密钥指纹

## 典型 PSBT 流程

1. **协调器**（Sparrow、Bitcoin Core、Specter、Nunchuk 等）构建[交易](/glossary/transaction)：选择 UTXO、设置收款方和金额、计算手续费。导出为 PSBT——二进制文件或 base64 字符串。
2. **签名者**（通常是[硬件钱包](/glossary/hardware-wallet)）通过 USB、microSD、QR 码或 NFC 接收 PSBT。签名者在可信屏幕上显示交易详情，用户验证，签名者签名并返回更新后的 PSBT。
3. **如果是多签**，对每个共同签名者重复步骤 2。每个将自己的部分签名添加到相应输入部分并传递。
4. **协调器**在足够签名满足每个输入的脚本后将 PSBT 完成为完全形式的交易并广播。

## 为什么重要

- **气隔签名可行。** 从不接触 USB 线的硬件钱包可以通过 QR 码签名。种子永远不触碰联网设备。
- **多签可移植。** 共同签名者可以是不同硬件厂商、不同软件、不同司法管辖区，仍能通过标准化文件格式协作。
- **跨设备无密钥重用。** 每个签名者本地保存密钥；只有部分签名跨越边界。

## PSBT v2

PSBT v2（BIP 370 / BIP 371）添加了更丰富的 [Taproot](/glossary/taproot) 支持，允许在 PSBT 创建后修改输入和输出集。现代工具（Sparrow、Specter、Nunchuk、BlueWallet、Bitcoin Core、所有主要硬件钱包）原生使用 v2。

PSBT 是严肃自托管中未被充分赞扬的基础设施。如果你的钱包技术栈使用硬件设备或多签，几乎可以肯定它在底层使用 PSBT。

参见 [Hardware Wallet](/glossary/hardware-wallet) 了解最常见用例，[Hierarchical Multisig](/glossary/hierarchical-multisig) 了解 PSBT 支持的多设备模式。
