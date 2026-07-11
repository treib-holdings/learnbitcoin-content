---
title: "Peg-in（锚定）"
slug: peg
draft: false
shortDefinition: "在主链上锁定 BTC 以在侧链上接收锚定代币（如 Liquid 的 L-BTC）。"
keyTakeaways:
  - "将 BTC 从主网转移到侧链地址"
  - "联邦或功能成员验证锁定后发行锚定资产"
  - "启用侧链功能如更快的区块或隐私"
sources: []
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - liquid-network
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
---

在比特币语境中，**peg**（锚定）是将[侧链](/glossary/sidechain)（或其他独立系统）上的单位与主网 BTC 以固定 1:1 比率绑定的机制。Pegging 是通过该机制移动 BTC 的过程。

两个操作：

- **Peg-in：** 在主网上锁定 BTC，接收等价的侧链代币。主网 BTC 被锁定在由侧链锚定基础设施控制的多签或脚本中。
- **[Peg-out](/glossary/peg-out)：** 销毁或移动侧链代币，从锚定的锁定储备中接收等价的主网 BTC。

结果：侧链代币在经济上与 BTC 不可区分（1 L-BTC = 1 BTC），但它们存在于具有不同属性的独立链上。

锚定架构因信任模型而异：

- **联邦锚定**（最常见，由 [Liquid](/glossary/liquid-network) 使用）。一个受信运营者联盟通过多签控制锁定的 BTC。Peg-in 无需许可（任何人都可以锁定 BTC）；peg-out 需要联邦阈值签名。
- **Drivechain 锚定**（提案中，[BIP-300](/glossary/bip-300-drivechains)）。比特币矿工在较长时期内对 peg-out 提款进行投票。尚未激活。
- **SPV 锚定。** 侧链验证者检查主网 SPV 证明以验证锚定操作。用于一些研究设计；未大规模生产。
- **单向锚定**（[工作量证明销毁](/glossary/one-way-peg)）。BTC 通过可验证的销毁移动到侧链；没有返回路径。
- **通过契约实现的无信任锚定。** 如果 CTV 等契约（[CTV](/glossary/checktemplateverify-ctv)）激活后的未来选项；将实现更无信任的锚定构造。

锚定机制是任何侧链的信任热点。联邦锚定的好坏取决于联邦的诚信和运营安全。Drivechain 锚定的好坏取决于矿工的一致性。不同用户会看重不同的权衡。

参见 [Peg-out](/glossary/peg-out)、[Peg-Guard](/glossary/peg-guard)、[Sidechain](/glossary/sidechain) 和 [Liquid Network](/glossary/liquid-network) 了解相关概念。
