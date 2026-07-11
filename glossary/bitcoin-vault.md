---
title: "比特币金库"
slug: bitcoin-vault
draft: false
shortDefinition: "一种注重安全的钱包设置，通常使用特殊脚本或多签在花费前引入延迟或多个步骤。"
keyTakeaways:
  - "在花费前引入延迟或额外检查"
  - "通常使用时间锁或多签增加安全性"
  - "最小化密钥泄露或被盗的损害"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - coin-control
  - corrupted-chain-state
  - covenants
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-multisig
  - inheritance-seed-backup
  - m-n
  - security
liveWidget: ~
---

比特币金库是一种自托管构造，使用脚本级约束强制提币通过多步、延迟流程——给所有者时间在资金实际移动前检测和取消未授权提款。

基本模式：

1. **资金锁定在金库地址**，该地址要求特定的多步花费流程。
2. **要提款，所有者广播一笔"解除金库"交易**，该交易不立即发出资金——它只是启动一个 [CSV 锁定](/glossary/checksequenceverify-csv)延迟窗口（通常数小时到数天）。
3. **在延迟窗口期间**，所有者监控。如果解除金库是合法的，延迟后完成。如果是攻击者不知何故获得了花费密钥，所有者使用紧急恢复密钥将资金重定向（通常到冷存储或不同金库）。
4. **在延迟结束时**，如果未触发恢复，资金到达指定目的地。

这带来的好处：防护灾难性密钥泄露。即使攻击者获得了你的热签名密钥，他们也不能立即清空钱包——他们必须广播一笔链上可见的解除金库交易，你有时间用恢复密钥响应。

2026 年的金库构造：

- **基于多签的金库**是当前最实用的。如 2-of-3 设置，一把密钥在冷存储，热端流程有 CSV 延迟，用现有比特币脚本近似金库行为。
- **原生金库操作码**如 OP_VAULT（James O'Beirne 的[契约](/glossary/covenants)提案）将使金库构造更干净，但尚未有契约操作码激活。
- **商业产品**如 Casa、Unchained 等提供类似金库的产品，结合链上脚本延迟和托管恢复服务。

金库最适合**大额、不常花费的持仓**——认真的储蓄而非日常消费。对于日常比特币使用，操作复杂性不值得。对于长期冷存储，灾难性故障保护是有意义的。

参见[分层多签](/glossary/hierarchical-multisig)了解金库常基于的多签模式，[契约](/glossary/covenants)了解将使金库更强大的提议操作码。
