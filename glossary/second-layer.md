---
title: "第二层"
slug: second-layer
draft: false
shortDefinition: "建立在比特币主链之上的网络，如闪电网络或侧链，用于提升扩展性或增加功能。"
keyTakeaways:
  - "减轻主链负担，实现更快更便宜的支付"
  - "典型例子包括闪电网络通道和锚定侧链"
  - "需要最终结算或赎回以核对最终状态"
sources: []
relatedTerms:
  - atomic-swap
  - layer-1
  - lightning-channel
  - lightning-network
  - liquid-network
  - off-chain
  - payment-channel
  - sidechain
  - state-channel
liveWidget: ~
---

"第二层"（或"Layer 2"）指任何建立在比特币基础链之上的协议，在主链之外处理交易，但最终仍结算回主链。目标是在不改变也不增加基础层负担的情况下，增加吞吐量、速度或功能。

比特币主要的第二层设计：

- **[闪电网络](/glossary/lightning-network)。** 由比特币脚本保障的链下支付通道。即时、便宜、私密的支付；定期链上结算。部署最广泛的比特币第二层。
- **[侧链](/glossary/sidechain)**，如 Liquid 和 RSK。通过联邦或其他锚定机制与比特币挂钩的独立区块链。常用于实现比特币缺少的功能（保密交易、智能合约）。
- **Statechain / Mercury Layer。** 无需链上交易即可链下转移 UTXO 控制权，最终回退到链上。
- **Ark。** 一种较新的方案，由服务运营商通过短期链下通道让许多用户即时交易。
- **Chaumian 电子现金**（Fedimint、Cashu）。联邦铸币厂发行保护隐私的电子现金，可兑换闪电网络上的聪。以牺牲自托管换取联邦级别的强隐私和即时支付。
- **Drivechain（提案中）**——由比特币矿工投票管理赎回的假设性侧链类别。尚未激活。

每个第二层的共同逻辑：比特币基础链是全球结算层——安全、不可篡改，但大量使用时成本高。第二层吸收日常交易负载，仅在需要时结算回基础链。

不同的设计有不同的权衡。闪电网络真正无需信任但需要流动性管理。侧链更易用但引入了联邦信任。电子现金铸币厂方便但需要联邦诚实。

基础层加第二层的模式是比特币扩展的方式。基础层不需要处理每一杯咖啡的购买；它只需要结算最终状态。参见 [Layer 1](/glossary/layer-1) 了解基础链视角。
