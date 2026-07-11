---
title: "BIP 342（Tapscript）"
slug: bip-342-tapscript
draft: false
shortDefinition: "定义 Taproot 脚本逻辑，包括操作码和版本控制，为未来比特币智能合约扩展做准备。"
keyTakeaways:
  - "为 Taproot 引入新的脚本版本"
  - "支持额外的操作码和灵活升级"
  - "确保高级智能合约的前向兼容性"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - p2sh
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - taproot
  - bitcoin-script
  - merkleized-abstract-syntax-tree-mast
  - script
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0342"
  - "https://bitcoinops.org/en/topics/tapscript/"
liveWidget: ~
---

[BIP-342](https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki)定义了 **Tapscript**——[Taproot](/glossary/taproot)输出通过脚本路径分支花费时（相对于协作式密钥路径分支）使用的 [Bitcoin Script](/glossary/bitcoin-script)版本。2021 年 11 月作为[软分叉](/glossary/soft-fork)与 BIP-340 和 BIP-341 一起激活。

Tapscript 与你已知的 Bitcoin Script 大致相同，但有几项改进：

- **新签名[操作码](/glossary/op-code-operation-code)。** `OP_CHECKSIGADD` 替代 `OP_CHECKMULTISIG`（在 Tapscript 中已弃用），使用更清晰的逐签名累加器模式。
- **Tapscript 内的 `OP_CHECKSIG` 使用 [Schnorr 签名](/glossary/schnorr-signature)**，与 Taproot 其余签名方案一致。
- **移除遗留操作码。** 一些没有意义或有微妙怪癖的操作码在 Tapscript 上下文中被移除。
- **版本控制。** Tapscript 是 Taproot 中的"叶子版本 0xC0"；未来的叶子版本可以引入*更多*操作码（或不同规则），而无需另一次完整协议升级。这是面向未来的关键。
- **更清晰的资源计量。** Tapscript 以不同于遗留脚本的方式计量资源使用，验证成本的上界更清晰。

版本控制方面是一个被低估的胜利。向遗留 Bitcoin Script 添加新操作码需要更新版本字段解释的软分叉——笨重。在 Tapscript 中，新的叶子版本可以引入不同操作码而不影响现有叶子版本。未来的能力扩展（契约、新签名方案等）可以使用这个插槽。

对大多数用户来说，Tapscript 是不可见的。当你以协作方式花费 Taproot 输出（"密钥路径"花费）时，Tapscript 不参与——只需一个 Schnorr 签名。Tapscript 只在使用脚本路径分支（[MAST](/glossary/merkleized-abstract-syntax-tree-mast)中的替代分支）时才起作用。即使那样，你的钱包也会处理它。

参见 [Taproot](/glossary/taproot)了解更广泛的升级，[Bitcoin Script](/glossary/bitcoin-script)了解 Tapscript 扩展的遗留脚本语言。
