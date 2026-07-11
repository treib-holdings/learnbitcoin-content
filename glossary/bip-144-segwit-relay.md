---
title: "BIP 144（SegWit 中继）"
slug: bip-144-segwit-relay
draft: false
shortDefinition: "定义新的 P2P 消息类型（如 witnessTx）用于在网络中中继 SegWit 数据。"
keyTakeaways:
  - "添加见证数据的消息类型"
  - "向后兼容旧节点"
  - "促进 P2P 通信中的完整 SegWit 支持"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-148-uasf
  - taproot
  - bip-342-tapscript
  - native-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
liveWidget: ~
---

[BIP-144](https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki)定义了在比特币网络中中继 [SegWit](/glossary/segwit-segregated-witness-bip-141)交易和区块所需的点对点协议变更。它是 BIP-141（SegWit 共识）和 BIP-143（签名哈希）的网络协议配套。

SegWit 在 P2P 层面提出的挑战：见证数据是区块的一部分，但不是传统交易格式的一部分。旧节点需要能够接收有效区块而不会因不理解的数据而卡住；新节点需要看到并验证见证数据以执行 SegWit 规则。

BIP-144 的解决方案：

- **新服务位 `NODE_WITNESS`** 信号 SegWit 感知节点。
- **见证感知消息类型。**来自 SegWit 感知对等节点的 `tx` 消息以新格式包含见证数据。传统对等节点接收剥离了见证数据的交易（对他们来说有效——他们不执行 SegWit 规则）。
- **见证感知 `getdata` 请求。**SegWit 感知对等节点可以请求带见证数据的区块；传统对等节点请求不带见证数据的区块。
- **向后兼容。**不信号 NODE_WITNESS 的旧节点仍通过传统代码路径接收有效区块，只是没有见证验证。

这种双协议方式使 SegWit 能够部署而不分裂网络。SegWit 感知节点执行所有新规则；未升级节点仍验证他们理解的部分，并在其（略宽松的）规则视图下接受 SegWit 区块为有效。

BIP-144 是那些所有人视为理所当然但对 SegWit 实际推出至关重要的基础设施之一。参见 [SegWit](/glossary/segwit-segregated-witness-bip-141)了解此功能在网络层启用的共识变更。
