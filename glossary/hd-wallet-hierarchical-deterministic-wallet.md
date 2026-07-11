---
title: "HD 钱包（层次确定性钱包）"
slug: hd-wallet-hierarchical-deterministic-wallet
draft: false
shortDefinition: "使用 BIP 32 派生路径从一个种子创建结构化密钥树的钱包。"
keyTakeaways:
  - "所有地址可从一个主种子恢复"
  - "遵循标准化派生路径（如 BIP 44）"
  - "现代比特币钱包设计的决定性特征"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - bip-85
  - bitcoin-dev-kit-bdk
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - chaincode
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - seed-phrase
  - wallet
  - wallet-import-format-wif
  - xpub-extended-public-key
liveWidget: ~
---

层次确定性（HD）钱包是标准比特币钱包设计，其中钱包将需要的每个密钥都从一个根种子确定性地派生。备份种子；你就备份了一切。

结构定义在 [BIP 32](/glossary/bip-32) 中：

- 单个种子（通常是 12 或 24 个 [BIP 39](/glossary/bip-39) 词）加可选密码短语产生 512 位主种子。
- 主种子分为主私钥和主链码。
- 子密钥通过（父密钥、链码、索引）的 HMAC-SHA512 派生。每个子密钥本身是可以派生自己子密钥的父密钥。这形成了树。
- 标准化路径（旧版的 BIP 44、包装 SegWit 的 BIP 49、原生 SegWit 的 BIP 84、Taproot 的 BIP 86）告诉钱包确切在哪里查找地址。

为什么 HD 钱包主导：

- **一次备份覆盖一切。** 写下 12 或 24 个词，你就备份了钱包将生成的每个地址，跨每个账户，无限期。
- **跨钱包可移植性。** 将 BIP 39 种子导入任何合规标准的钱包（Sparrow、BlueWallet、Electrum、Trezor、ColdCard），获得相同地址。
- **只读支持。** 向某人提供 xpub（扩展公钥），他们可以派生每个接收地址而无需看到私钥。适用于会计、监控、由硬件钱包支撑的只读移动应用。
- **多账户分离。** BIP 44/84/86 路径结构包含账户级别，用户可以从单个种子维护逻辑分离的钱包（`account 0` 个人、`account 1` 商业等）。
- **硬件钱包整合。** 硬件设备持有种子；软件钱包只看到 xpub。标准化派生路径意味着任何兼容软件都与任何兼容硬件配对。

HD 钱包不是什么：

- **隐私万灵药。** 所有子密钥在每个分支共享相同链码；如果有人获得 xpub，他们可以派生所有非强化子密钥。强化派生（用于顶层路径）防止这向上扩展。
- **备份替代品。** 种子仍然是单点故障。丢失种子，丢失一切。硬件钱包和多签设置在 HD 之上添加弹性层。

HD 钱包在 2014-2016 年左右随着 BIP 32 / 39 / 44 实现成熟而普及。今天，基本上每个值得使用的钱包都是 HD 钱包，"种子"是通用备份原语。
