---
title: "地址派生路径"
slug: address-derivation-path
draft: false
shortDefinition: "在分层确定性（HD）钱包中生成一系列密钥和地址的结构化路径（如 m/44'/0'/0'/0/0）。"
keyTakeaways:
  - "结构化定义 HD 钱包如何生成多个地址"
  - "在 BIP-32 和 BIP-44 等提案中规范"
  - "确保钱包的互操作性和组织性"
sources: []
relatedTerms:
  - address
  - address-indexing
  - chaincode
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
liveWidget: ~
---

派生路径是用斜杠分隔的路径，指向 [BIP 32](/glossary/bip-32) HD 钱包树中的具体位置，告诉钱包从主种子中派生哪个密钥。格式为：

```
m / purpose' / coin_type' / account' / change / address_index
```

撇号（也常写成 `h`）标记硬化派生层级。前三个层级按惯例使用硬化派生，这样即使泄露了某个分支的密钥也不会暴露同级分支。

实际使用中的 purpose 层级约定：

- **BIP 44**（`m/44h/0h/0h/0/0`）——最初的多账户约定。传统 P2PKH `1...` 地址。
- **BIP 49**（`m/49h/0h/0h/0/0`）——P2SH 包装的 SegWit（`3...` 地址）。
- **BIP 84**（`m/84h/0h/0h/0/0`）——原生 SegWit（`bc1q...` 地址）。2026 年非 Taproot 钱包的默认选择。
- **BIP 86**（`m/86h/0h/0h/0/0`）——Taproot（`bc1p...` 地址）。
- **BIP 48**（`m/48h/0h/0h/<script>h/0/0`）——多签约定。

各部分含义：

- `purpose`——指定此层级以下的地址格式遵循哪个规范。
- `coin_type`——注册的链 ID。比特币是 0；测试网是 1；其他链有自己的 ID。
- `account`——独立的账户索引。账户 0 是惯例默认值；使用多个钱包的用户用 1、2 等。
- `change`——0 表示接收地址，1 表示找零地址。（某些钱包保留 2 表示"内部找零"。）
- `address_index`——单个地址的顺序计数器。

相同的种子加相同的派生路径总是产生相同的私钥，在任何遵循约定的钱包中都是如此。这就是 BIP 39 助记词可移植的原因：将它导入任何使用 BIP 84（或 86、44 等约定）的钱包，你就能得到相同的密钥。

派生路径不匹配是"我恢复了钱包但看不到余额"这一经典故障的原因：种子是对的，但钱包在看树的不同分支。现代钱包通常会自动尝试常见路径；较老或特殊钱包有时需要手动输入路径。
