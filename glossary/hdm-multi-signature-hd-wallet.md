---
title: "HDM（多签 HD 钱包）"
slug: hdm-multi-signature-hd-wallet
draft: false
shortDefinition: "将 HD 派生与多签结合，每个共同签名者拥有扩展密钥树用于多个账户或地址。"
keyTakeaways:
  - "在单个多签安排中部署多个 HD 种子"
  - "每个共同签名者的扩展密钥生成协调的地址"
  - "提高多签钱包的安全性、冗余和扩展性"
sources: []
relatedTerms:
  - byzantine-fault-tolerance
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - wallet
liveWidget: ~
---

HDM（层次确定性多签）是现代比特币多签的标准架构：每个共同签名者使用自己的 HD 钱包种子，多签钱包由所有共同签名者的扩展公钥（xpub）加阈值（如 2-of-3）的组合描述。

为什么这是正确的设计：

- **每个共同签名者的 HD 种子产生许多地址。** 多签钱包继承这一点：不是每次设置生成一个多签地址，而是钱包派生由 `m/.../0/i` 索引的地址序列，其中 `i` 覆盖所有接收索引。与单签 HD 钱包相同的隐私/新地址纪律。
- **xpub 只需共享一次。** 钱包设置期间，每个共同签名者导出其 xpub。组合钱包描述符（如 `wsh(sortedmulti(2, xpub_A/.../<0;1>/*, xpub_B/.../<0;1>/*, xpub_C/.../<0;1>/*))`）覆盖所有未来地址。
- **每个签名者的密钥保持隔离。** 共同签名者 A 的种子永远不会接触共同签名者 B 的设备。每个只在本地用自己的密钥签名。
- **备份是每个共同签名者一个种子。** 如果共同签名者 A 丢失设备但有种子备份，可以恢复。如果两者都丢失，其他共同签名者仍可通过剩余 xpub + 多签阈值恢复（假设丢失的共同签名者密钥不需要满足法定人数）。

实际部署模式：

- **2-of-3 个人托管。** 一个共同签名者在家庭硬件钱包上，一个在保险箱或信任的家人处，一个在 Unchained 或 Casa 等服务作为"始终可用"的第三方。
- **3-of-5 机构。** 标准企业金库设置。五个共同签名者分布在高管或地理办公室；需要三个来花费。
- **2-of-2 闪电通道。** 每个闪电通道技术上是 HDM（2-of-2），每个通道伙伴的密钥从其 HD 种子派生。

约定现在通过 [BIP-48](https://github.com/bitcoin/bips/blob/master/bip-0048.mediawiki) 标准化，它指定多签钱包的派生路径，以及描述符钱包格式以可移植字符串捕获完整多签设置。

HDM 不简化的：设置仪式（仍需在设置时安全交换 xpub）、遗产规划（每个共同签名者的种子需要自己的继承计划）和恢复测试（共同签名者越多，需要排练越多）。但标准使运营多签钱包比 HD 多签前的日子——每个共同签名者必须备份单个私钥——更有意义地实用。
