---
title: "钱包"
slug: wallet
draft: false
shortDefinition: "管理私钥和地址的软件或硬件，让用户能够发送/接收 BTC。"
keyTakeaways:
  - "管理的是控制 BTC 输出的密钥，而非实物货币"
  - "可以是纯软件、硬件设备或多签设置"
  - "安全性取决于仔细的备份和密钥保护"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-dev-kit-bdk
  - bitcoin-vault
  - coin-control
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - green-address
  - gui-wallet
  - hardware-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - hierarchical-multisig
  - security
  - wallet-import-format-wif
  - watch-only-wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Wallet"
liveWidget: ~
---

比特币钱包实际上不持有比特币。比特币在链上。钱包持有的是授权移动它的[私钥](/glossary/private-key)。

钱包在机制上做什么：

- **生成和存储密钥**，通常通过 [BIP-39](/glossary/bip-39) 助记词使用[层次化确定性](/glossary/hierarchical-deterministic-wallet)结构派生。
- **跟踪你能花费的链上 UTXO**——要么通过查询远程服务器，要么像 [Bitcoin Core](/glossary/bitcoin-core) 那样运行全节点进行完整验证。
- **构建并签署[交易](/glossary/transaction)**，当你想发送时。
- **生成新的接收[地址](/glossary/address)**，按需提供。

钱包有几种原型，各有不同的安全/便利权衡：

- **[托管钱包](/glossary/custodial-wallet)**——别人持有你的密钥（Coinbase、Cash App、Strike）。最易用，最弱的财产保证。你不拥有比特币；你拥有一个借条。
- **移动钱包**——Phoenix、Muun、BlueWallet 等。你持有密钥，日常使用方便，热钱包安全模型。
- **桌面钱包**——Sparrow、Bitcoin Core 自带钱包、Wasabi。通常连接到自己的节点；更强大的币控制。
- **[硬件钱包](/glossary/hardware-wallet)**——Trezor、ColdCard、Jade、BitBox、Ledger。密钥留在专用签名设备上，永不触及联网机器。
- **多签设置**——需要多个设备才能授权交易。对大额资产强烈推荐。

合适的钱包取决于你持有什么以及做什么。像随身现金一样的花费？移动钱包就行。长期储蓄？硬件钱包，理想情况下多签。通用规则：价值越高 → 摩擦越多 → 密钥与在线环境的分离越远。

参见[旅程：做自己的银行](/journey/be-your-own-bank)章节了解完整指南。
