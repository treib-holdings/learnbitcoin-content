---
title: "密钥生成仪式"
slug: key-generation-ceremony
draft: false
shortDefinition: "一场精心编排的活动（通常是公开或半公开的），用于在没有单点故障的情况下创建密码学密钥。"
keyTakeaways:
  - "防止单一实体孤立生成密钥"
  - "通常涉及多层离线和公开审计"
  - "增强对系统安全假设的信任"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - key-rotation
  - key-split
  - key-wiping
  - proof-keys
  - security
liveWidget: ~
---

密钥生成仪式是在精心设计的条件下创建高风险密码学密钥的结构化事件，旨在确保没有任何单一方知道或能够影响最终结果。

典型组成部分：

- 多名参与者。每人贡献独立的熵（有时就是字面意思上的掷物理骰子）。最终密钥由各方的贡献组合派生。
- 气隙隔离或加固硬件。不使用带有网络接口的通用计算机；工作在专用设备上完成，设备在结束时被销毁或擦除。
- 见证人，通常有录像或独立观察员。仪式事后可审查。
- 验证生成的公钥，私钥（或其分片）在任何人离开前被封存。

真实的比特币案例：

- Liquid 侧链功能节点密钥设置，11-of-15 联邦密钥在协调仪式中生成。
- 硬件钱包制造商用于固件签名的主密钥。
- 基于 FROST 的阈值设置的 DKG（分布式密钥生成），协议在数学上保证没有单个参与者能看到组合密钥。
- 高净值家庭或机构的自托管多签设置，每个共签者在气隙隔离设备上在见证人面前生成自己的种子。

密码学本身没问题。仪式的存在是为了打败社会工程学、供应链攻击，以及"相信我，密钥是安全的"这种在出事前总是听起来合理的说法。
