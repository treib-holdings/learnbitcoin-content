---
title: "链码（Chaincode）"
slug: chaincode
draft: false
shortDefinition: "在 HD 钱包（BIP 32）中，与父密钥配对的 256 位值，用于确定性派生子密钥。"
keyTakeaways:
  - "与密钥配对以确定性创建子密钥"
  - "层次确定性钱包设计（BIP 32）的核心"
  - "在支持多条派生路径的同时保护主种子"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - xpub-extended-public-key
liveWidget: ~
---

链码是 BIP 32 扩展密钥的 32 字节"右半部分"。它与实际密钥材料（"左半部分"）配对，形成扩展私钥（`xprv`）或扩展公钥（`xpub`）。

为什么要拆分。BIP 32 通过对父密钥、链码和子索引进行 HMAC-SHA512 运算来派生子密钥。链码为派生提供熵，因此仅知道父公钥不足以派生子密钥；你还需要链码。这就是 `xpub` 成为真正有意义的工件的原因：它将链码与公钥一起携带，允许只观察后代被派生而不暴露私钥侧。

隐私影响很尖锐：

- 链码加上公钥（即 `xpub`）允许任何人派生所有非强化子公钥。这对只读钱包很有用。但如果 `xpub` 泄露就很危险：泄露的 `xpub` 暴露了该钱包的完整地址树，完全破坏交易隐私。把 `xpub` 当作资产负债表对待，而不是地址。
- 链码加上子私钥，在非强化派生中，可以重建父私钥。这就是"BIP 32 非强化泄露"，也是顶层账户使用强化派生（索引 2^31 及以上）的原因。Bitcoin Core、硬件钱包和任何合理的 HD 钱包都在账户级别使用强化派生，这样泄露一个子私钥就不会危及同级或祖先。

对于用户来说，链码是不可见的底层管道。对于开发者和集成商来说，它是区分"HD 钱包"和"确定性但脆弱的密钥生成"的关键细节。
