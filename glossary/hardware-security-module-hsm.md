---
title: "硬件安全模块（HSM）"
slug: hardware-security-module-hsm
draft: false
shortDefinition: "专为安全存储和管理密码密钥而设计的设备，常用于机构级 BTC 托管。"
keyTakeaways:
  - "将私钥密封在硬件中"
  - "银行和高价值托管服务经常使用"
  - "支持多签和基于角色的访问以降低风险"
sources: []
relatedTerms:
  - air-gapped
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - key-rotation
  - key-split
  - key-wiping
  - oracle-based-betting
  - security
liveWidget: ~
---

硬件安全模块是一种专用、防篡改设备，在密封边界内生成、存储和使用密码密钥。密钥永远不会以可用形式离开设备。签名在板上完成：你向 HSM 发送消息和操作员授权；它返回签名。

HSM 是传统金融安全原语。银行、支付处理商和证书颁发机构已运行它们数十年。FIPS 140-2 / 140-3 认证、防篡改外壳、基于角色的访问控制、双重控制策略（单一操作员不能单独签名）都是标准功能。

在比特币中，HSM 支撑大多数大型托管运营：交易所冷存储、受监管托管人（Coinbase Custody、Anchorage、BitGo、Fidelity Digital Assets）、企业金库。典型模式是多签钱包，每个共同签名者密钥存在于独立 HSM 中、在独立运营控制下，因此单一 HSM 入侵（或操作员串通）不足以移动资金。

成本是真实的。企业 HSM 从 1 万美元（低端网络 HSM）到 10 万美元以上（顶级 FIPS-140-3 Level 3/4 设备），加上运行它们的运营团队。它们面向合规要求它们且保障价值证明开销合理的机构。

对于个人，硬件钱包是消费级等价物。相同理念（密钥永不离开设备、签名在芯片上完成），威胁模型小得多，成本大大降低。100 美元硬件钱包和 5 万美元 HSM 之间的区别主要是认证体系、物理安全保证和多方访问控制。
