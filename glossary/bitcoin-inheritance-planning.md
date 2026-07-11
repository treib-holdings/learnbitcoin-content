---
title: "比特币继承规划"
slug: bitcoin-inheritance-planning
draft: false
shortDefinition: "确保在你去世后继承人能访问你的 BTC 的策略，通常涉及多签、受托执行人或时间锁脚本。"
keyTakeaways:
  - "防止 BTC 在去世后变得不可访问"
  - "结合技术方案（多签、时间锁）和法律措施"
  - "需要仔细平衡安全性和可用性"
sources: []
relatedTerms:
  - decentralization
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - paper-wallet
  - seed-phrase
liveWidget: ~
---

比特币继承规划是确保你的继承人在你去世或永久丧失能力时能访问你的 BTC 的实践，同时不让他们在你健在时过早获得访问权。

比特币没有遗嘱认证法庭、没有有行政超越权的执行人、没有可传唤的银行。如果你的继承人没有到你的[私钥](/glossary/private-key)（或你的[助记词](/glossary/seed-phrase)或你的多签设置）的可行路径，BTC 就永久丢失了。许多真实财富以这种方式被埋葬——链不在乎你的死亡证明。

竞争需求：

1. **继承人必须最终能够访问资金。**他们需要知道钱包存在、材料存放在哪里以及该怎么做。
2. **继承人不能过早访问资金。**在你使用钱包时给继承人助记词意味着你已给了他们你的钱。
3. **对手不能胁迫或欺骗继承人给出访问权。**"你父亲去世了，以下是认领他 BTC 的方法"是等待被利用的钓鱼脚本模板。

常见方法：

- **律师保管密封信。**记录你的钱包设置、硬件设备位置和助记词存储。律师保管信封，在死亡通知后打开。适用于中等金额；取决于法律管辖区。
- **延迟访问多签。**2-of-3 设置，你持有 2 把密钥，指定继承人（或受托人）持有 1 把，有时间锁分支让继承人 + 受托人在长延迟后（如 6 个月不活动）花费。你在延迟期间可以覆盖（如果你活着）；如果你不在了就不能。
- **Shamir 秘密分享。**将种子分成 N 份，需要 K-of-N 来重建。分发给受托人。有用但增加复杂性。
- **专用服务**如 Casa、Unchained、Theya、Nunchuk、AnchorWatch——与其多签产品集成的协作托管继承计划。

测试极为重要。**让你的继承人（或替代者）用一个小测试钱包走一遍恢复流程。**每当你的托管设置变更时更新计划。你从未排练过的计划就是你没有的计划。

参见[继承种子备份](/glossary/inheritance-seed-backup)了解备份机制，[分层多签](/glossary/hierarchical-multisig)了解大多数现代计划底层的高签模式。
