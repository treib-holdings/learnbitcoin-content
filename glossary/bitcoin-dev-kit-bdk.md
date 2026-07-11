---
title: "Bitcoin Dev Kit (BDK)"
slug: bitcoin-dev-kit-bdk
draft: false
shortDefinition: "一个开源 Rust 库，提供基于描述符的密钥管理灵活工具来构建自定义比特币钱包。"
keyTakeaways:
  - "利用 Rust 的安全优势促进自定义钱包构建"
  - "使用描述符精确组织密钥/脚本"
  - "支持多种后端（如 Electrum、Core）"
sources: []
relatedTerms:
  - bitcoin-core
  - bitcoin-knots
  - bitcoin-script
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - wallet
sameAs:
  - "https://github.com/bitcoindevkit/bdk"
  - "https://bitcoindevkit.org"
liveWidget: ~
---

**Bitcoin Dev Kit (BDK)** 是一个开源 Rust 库，提供构建比特币钱包的模块化构建块。由活跃的贡献者社区维护，BDK 在 2026 年驱动着越来越多的生产钱包——包括需要链上功能伴随链下的主要闪电钱包。

BDK 提供的：

- **基于描述符的钱包原语。**输出脚本描述符（指定"这个钱包使用什么脚本"的现代方式）让 BDK 通过干净接口处理复杂设置——多签、miniscript、自定义锁定时间构造等。
- **可插拔后端。**连接到 Bitcoin Core 节点、Electrum 服务器、Esplora REST API，或完全离线运行基于 PSBT 的工作流。
- **币选择算法。**内置选择 UTXO 的策略（最大优先、分支定界等）。
- **PSBT 支持。**一流的 [PSBT](/glossary/psbt) 构建和完成。
- **跨平台。**Rust 核心带 Swift、Kotlin、Python、JavaScript 的 FFI 绑定——移动和嵌入式钱包都可以使用。

BDK 的亮点：任何构建新比特币钱包的人不需要从头写描述符解析、PSBT 逻辑、币选择、费用估算等。BDK 处理管道；钱包构建者专注用户体验和功能。

2026 年基于 BDK 的知名钱包包括 Mutiny Wallet、Cake Wallet 的比特币模块、一些闪电服务提供商的上线流程以及各种企业托管工具。该库也被嵌入硬件钱包配套软件。

对于开发者，BDK 是两大基于 Rust 的比特币库之一（另一个是用于闪电的 [LDK](/glossary/lightning-network-daemon-lnd)）。两者共同构成大多数不直接基于 Bitcoin Core 代码库的新比特币钱包开发的现代基础。

参见 [bitcoindevkit.org](https://bitcoindevkit.org/) 获取文档，[钱包](/glossary/wallet)了解更广泛的全景。
