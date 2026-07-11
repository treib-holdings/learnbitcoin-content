---
title: "密钥轮换"
slug: key-rotation
draft: false
shortDefinition: "定期更换或生成新的密码学密钥，以减少旧密钥被泄露时的风险。"
keyTakeaways:
  - "有助于在密钥被泄露或泄露时降低风险"
  - "避免过多交易绑定到单一地址"
  - "在企业级托管方案中通常自动化"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - key-generation-ceremony
  - key-split
  - key-wiping
  - paper-wallet
  - security
  - stealth-address
liveWidget: ~
---

"密钥轮换"在比特币中有两种不同含义，混淆它们是常见的误解来源：

- 地址轮换：每次收款使用新地址。HD 钱包自动做到这一点，每个地址的密钥都从同一个主种子派生。种子本身不轮换。这是隐私卫生，不是安全轮换，每个现代钱包都默认这样做。

- 真正的密钥轮换：将资金从一组密钥转移到全新的一组，然后销毁或退役旧密钥。这就是企业安全政策所说的"轮换密钥"。在比特币中，这是一个刻意的、手动的操作：将所有资金花费到从新种子派生的新地址。

真正的密钥轮换在以下情况有意义：

- 多签中的共签者离开，你不想让他们持有即使已不足法定人数的份额。
- 你怀疑某把密钥已被泄露但不确定（例如冷备份曾短暂暴露）。
- 长期运行的设置积累了足够的运营历史，你宁愿重新开始也不愿审计每个过往接触点。

对于大多数个人用户，这种更强意义上的定期密钥轮换是过度的。你硬件钱包里的种子今年的风险不比去年高。地址轮换（自动的）处理隐私问题；无原因地轮换底层种子只是在迁移过程中引入人为错误的机会。
