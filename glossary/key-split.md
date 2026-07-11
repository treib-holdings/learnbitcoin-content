---
title: "密钥分片"
slug: key-split
draft: false
shortDefinition: "将私钥分成多个片段（如通过 Shamir 秘密共享），使任何单一分片都无法单独花费资金。"
keyTakeaways:
  - "通过将私钥分配给多个持有者来增强安全性"
  - "任何单一方都无法独自重建或使用密钥"
  - "广泛用于链下备份或助记词弹性"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - hardware-security-module-hsm
  - key-generation-ceremony
  - key-rotation
  - key-wiping
  - paper-wallet
  - security
liveWidget: ~
---

密钥分片将一个私钥（或种子）分成多个份额，使得任意阈值数量的份额可以重建密钥，但少于阈值则不能。经典的数学方法是 Shamir 秘密共享（SSS）。

在比特币实践中，最常见的形式是 SLIP-39，一种用于 BIP 39 种子的标准化 SSS 方案。Trezor 原生支持它，SeedSigner 等工具可以从任何种子生成 SLIP-39 份额。典型配置：2-of-3 或 3-of-5 份额分布在不同的地理位置或受信任的人之间。

大多数介绍中忽略的关键注意事项：密钥分片与多签的安全模型不同。

- 多签：每个共签者用自己的密钥独立签名，M 个签名由脚本组合。没有任何单一设备曾持有完整的支付能力。
- 密钥分片：在签名时，阈值数量的份额必须在一台设备上重新组合成单一私钥，然后由该设备签名。该设备在那一刻持有完整密钥。

因此，密钥分片非常适合冷备份分发（没有任何单一位置足以盗窃钱包），但对于热/温运营使用来说不如多签（重建事件是一个诱人的目标）。大多数注重安全的设置在运营层使用多签，并可能使用 SSS 来分发任何单一密钥的备份。
