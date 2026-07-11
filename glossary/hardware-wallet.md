---
title: "硬件钱包"
slug: hardware-wallet
draft: false
shortDefinition: "离线存储私钥并在安全环境中签名交易的物理设备（如 Ledger、Trezor）。"
keyTakeaways:
  - "离线密钥存储防止软件窃取"
  - "用户在安全屏幕上验证交易详情"
  - "纯纸钱包和在线钱包之间的中间方案"
sources: []
relatedTerms:
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - security
  - wallet
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Hardware_wallet"
liveWidget: ~
---

硬件钱包是一种小型专用设备，其唯一工作是存储[私钥](/glossary/private-key)和签署[交易](/glossary/transaction)。密钥在设备内部生成且永不离开。当你想花费时，未签名交易被送入，你在设备内置屏幕上验证目的地和金额，你确认，签名交易出来。你的笔记本电脑永远看不到密钥。

它防御的威胁模型：完全被入侵的电脑。如果你的电脑运行着监控每次按键和读取每个文件的恶意软件，热钱包的密钥就完蛋了——攻击者可以随意向自己签名交易。使用硬件钱包，恶意软件可以在电脑上显示假的"发送给你朋友"屏幕，但当实际交易发送到硬件设备时，设备在其可信屏幕上显示*真实*的目标地址和金额。你看到恶意软件替换的地址，你拒绝交易，你就安全了。

选择时要注意：

- **开源固件。** 闭源签名设备要求你信任制造商的声称。开放固件让更广泛的社区审计在芯片上运行的代码。几个成熟的开源签名设备广泛可用；比特币社区通常推荐这些而非闭源替代品。
- **仅比特币固件（如果提供）。** 多币种固件为你永远不会使用的支持增加了攻击面。更简单的代码库是更容易审计的代码库。
- **气隙工作流程，理想情况下。** 通过二维码或 microSD 卡签名的设备完全不连接电脑——甚至通过 USB——关闭了另一类攻击。
- **活跃开发和可信的安全历史。** 硬件钱包漏洞经常被发现和修补；你需要一个及时发布修复并公开的供应商。

推荐很快过时。与其在这里点名具体产品，不如搜索"开源比特币硬件钱包"或查看经验丰富的自托管比特币用户目前推荐什么。

硬件钱包不是魔法。它生成的[助记词](/glossary/seed-phrase)仍然是主备份；如果有人拿到了那个词组，他们不需要设备。设备的工作是在日常使用中保持密钥离线，而不是取代良好的词组卫生。

对于超过日常花费规模的金额，硬件钱包是底线。多硬件设备的多签是更高一级。完整指南参见[旅程：做自己的银行](/journey/be-your-own-bank)。
