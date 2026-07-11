---
title: "硬件种子金库"
slug: hardware-seed-vault
draft: false
shortDefinition: "用于生成/存储助记词的安全离线环境（硬件或安全设备）。"
keyTakeaways:
  - "保护助记词免受在线威胁"
  - "通常气隙隔离且防篡改"
  - "机构和安全意识强的个人使用"
sources: []
relatedTerms:
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - seed-phrase
  - security
liveWidget: ~
---

硬件种子金库是一个专用离线环境，其唯一工作是生成、持有和偶尔使用比特币种子，而永远不将其暴露给联网硬件。

它比"硬件钱包"涵盖范围更大。硬件钱包（Trezor、ColdCard、Jade、BitBox、Ledger 等）是消费友好版本：小型专用签名设备。种子金库可以是：

- 气隙隔离笔记本电脑，从未连接网络，种子手动输入并保存在加密离线存储中。
- SeedSigner 式无状态设备，每次签名会话从记忆或纸面存储的种子派生密钥。
- 机构环境中围绕硬件安全模块（HSM）构建的金库设备，具有多人物理访问控制。
- 运行在法拉第屏蔽室中的专用计算机，仅通过 SD 卡上传输的 PSBT 文件进行离线交易签名。

共同属性是气隙纪律。种子永远不会被联网机器看到。交易在在线机器上组装，作为未签名 PSBT 导出到介质，带到金库，签名后带回。无论在线机器上存在什么恶意软件，都永远接触不到种子。

对于大多数个人，单个硬件钱包就足够了。对于更高风险的设置（大额余额、机构、多签共同签名者职责），具有更严格气隙控制的专用种子金库是下一步。只有当价值证明运营成本合理时，威胁模型才证明这种成本的合理性。
