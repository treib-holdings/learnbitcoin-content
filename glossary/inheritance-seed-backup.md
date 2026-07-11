---
title: "遗产助记词备份"
slug: inheritance-seed-backup
draft: false
shortDefinition: "确保继承人能在所有者去世后访问其 BTC 的指南和机制（如多签），同时不损害安全性。"
keyTakeaways:
  - "防止所有者去世后 BTC 永久丢失"
  - "通常涉及文档记录、多签或法律监督"
  - "在可访问性和持续安全性之间谨慎平衡"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-phrase
  - security
liveWidget: ~
---

遗产助记词备份是确保在你死亡或永久丧失能力时，其他人能够恢复你的比特币的做法，同时不损害你健在时钱包的安全性。

比特币没有客服、没有遗嘱执行人、没有恢复机制。如果你的继承人不知道你的[助记词](/glossary/seed-phrase)（或无法重建你的多签设置），BTC 将永久丢失。区块链不在乎遗产认证。真正的财富就这样被埋葬了。

相互竞争的需求：

- **继承人必须最终能够访问资金。** 他们需要知道助记词的存在、在哪里、该怎么用。
- **继承人在你健在时不能访问资金。** 如果你的侄子在你还在使用钱包时拿到了你的助记词，你就等于把你的钱给了他。
- **对手不能胁迫或欺骗继承人交出访问权限。** "你阿姨去世了，这是认领她 BTC 的流程"是一个随时可能发生的钓鱼脚本。

常见方案，从简单到复杂：

- **密封信件交由律师保管。** 记录你的钱包设置、[硬件设备](/glossary/hardware-wallet)清单以及助记词备份的存放位置。律师保管信封，在死亡时打开。适用于中等金额；依赖法律管辖区的有效性。
- **延迟访问的多签。** 2-of-3 设置，你持有 2 把密钥，受托托管人持有 1 把，并设有一个时间锁分支，允许托管人和指定继承人在较长延迟后（如 6 个月）花费。你在延迟期内可以覆盖操作（如果你还活着）；如果你不在了，继承分支最终解锁。
- **Shamir 秘密共享。** 将助记词分成 N 份，其中任意 K 份可以重建。将各份分发给家庭成员或受托人。有用但增加了复杂性。
- **专门的遗产服务。** Casa、Unchained、Nunchuk、Theya 等提供协作托管遗产计划，与其现有的多签产品集成。

无论选择哪种方案，**都要测试**。让你的继承人（或替代者）用一个微型测试钱包走一遍恢复流程。从未排练过的计划等于没有计划。每当你的托管设置发生变化时都要更新它。

请参阅[层级多签](/glossary/hierarchical-multisig)了解一些更复杂的方法。
