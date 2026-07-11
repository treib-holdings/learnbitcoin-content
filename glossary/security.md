---
title: "安全"
slug: security
draft: false
shortDefinition: "既指比特币协议的健壮性（PoW、节点共识），也指终端用户的密钥保护（钱包安全）。"
keyTakeaways:
  - "协议安全依赖于 PoW、难度调整和全节点验证"
  - "用户层面的安全聚焦于私钥保管和安全钱包使用"
  - "两者结合才能构建一个有韧性、最小化信任的货币体系"
sources: []
relatedTerms:
  - address-reuse
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - counterparty-risk
  - cpu-mining
  - eavesdropping-attack
  - eclipse-attack
  - fungibility
  - green-address
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - inheritance-seed-backup
  - key-rotation
  - key-split
  - key-wiping
  - kyc-know-your-customer
  - merchant-adoption
  - oracle-based-betting
  - proof-keys
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
  - stealth-address
  - submarine-swap
  - wallet
  - watch-only-wallet
liveWidget: ~
---

比特币中的"安全"有两个不同的含义，经常被混为一谈：

**协议安全。** 比特币网络抵御攻击的能力。这建立在[工作量证明](/glossary/proof-work-pow)之上，依靠全球分布的挖矿产业、每个全节点独立执行共识规则，以及十六年的运行记录。网络从未在主网上遭受过成功的 51% 攻击，从未有过推翻已确认交易的双花，从未被审查或关停。密码学原语（SHA-256、secp256k1）至今未被攻破。这个协议是世界上遭受攻击最多的密码学系统；它撑住了。

**操作安全（"opsec"）。** *你*作为比特币用户的个人安全。这才是真正出问题的地方：

- **[助记词](/glossary/seed-phrase)泄露。** 被拍照、写在被黑客入侵的电脑旁边、存在云盘中、分享给了后来不可信的信任者。
- **弱熵。** 用可预测的随机数生成的密钥。已发生过多次；人们因此损失了数百万。
- **钓鱼和社会工程。** 假客服、假钱包应用、假"钱包需要升级"邮件。普通用户丢失比特币的最主要方式。
- **[托管](/glossary/custodial-wallet)失败。** 交易所破产、被黑客攻击、冻结。真实的损失，真实的客户，真实的破产。
- **硬件被入侵。** 硬件钱包的供应链攻击、恶意固件更新、侧信道攻击。
- **继承空白。** 去世时没有可用的[继承计划](/glossary/inheritance-seed-backup)就是永久损失。

协议安全是*比特币*给你的。操作安全是*你*必须给自己的。防御手段（硬件钱包、多签、[气隙](/glossary/air-gapped)设置、谨慎的助记词管理、避开托管陷阱、最小化 KYC）都是众所周知的。但执行纪律不会自动发生。

一个合理的框架：比特币的协议层安全程度在计算领域是罕见的。你的钱包安全程度则取决于*你*做到什么程度。不要混淆两者。
