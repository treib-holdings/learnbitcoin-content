---
title: "Xpub（扩展公钥）"
slug: xpub-extended-public-key
draft: false
shortDefinition: "BIP 32 的功能，允许在不暴露主私钥的情况下派生子公钥。"
keyTakeaways:
  - "从单个根派生多个子地址"
  - "主私钥安全隐藏时保持花费安全"
  - "用于只读钱包、会计和多签协调"
sources: []
relatedTerms:
  - bip-44
  - bip-85
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - public-key
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0032"
liveWidget: ~
---

xpub 是 [BIP 32](/glossary/bip-32) 的扩展公钥：一个父公钥与其[链码](/glossary/chaincode)捆绑在一起。有了这两部分，任何人都可以派生该钱包树分支下的所有非强化子公钥（以及因此所有地址），而永远不需要看到私钥。

有了某人的 xpub 你可以做什么：

- **监控其钱包。** 将 xpub 导入 Sparrow、Specter、BlueWallet 等，你会实时看到每个接收地址、每笔花费、每次余额变化。不需要私钥。
- **为其生成新的接收地址。** 商户服务器可以为每个客户生成新地址而不持有任何花费能力。
- **作为只读共同签名者参与。** 组合每个共同签名者的 xpub 来构建多签监控钱包。

泄露 xpub 你放弃什么：

- **隐私。** 该分支下的每个现有和未来地址现在对拥有 xpub 的人可见。链上分析故事崩塌；xpub 持有者看到完整的余额和交易图。
- **活动的前向保密。** 即使你再也不分享 xpub，持有者也可以通过遍历树派生你接下来 1000 个地址。

将 xpub 当作资产负债表对待，而非地址。

旧钱包中你会看到的格式变体：

- `xpub...`——原始 BIP 32 形式，通常关联传统 P2PKH 派生。
- `ypub...`——P2SH 包装的 SegWit（BIP 49）。
- `zpub...`——原生 P2WPKH（BIP 84）。
- `Ypub` / `Zpub`——多签变体。

2026 年，前缀变体主要是历史遗留：现代[描述符钱包](/glossary/output-descriptor)显式携带脚本类型信息，所以单个 `xpub` 加描述符模板就能干净地覆盖一切。
