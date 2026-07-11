---
title: "混币服务"
slug: mixing-service
draft: false
shortDefinition: "第三方或基于协议的解决方案（如 CoinJoin），混合用户交易以提升隐私。"
keyTakeaways:
  - "通过混合多个输入/输出来混淆代币来源"
  - "CoinJoin 等无需信任的协议减少对托管混币器的依赖"
  - "增强隐私但可能面临监管审查"
sources: []
relatedTerms:
  - address-clustering
  - coinjoin
  - paper-wallet
  - payjoin
  - shielded-coinjoin
  - stealth-address
liveWidget: ~
---

混币服务是任何将多个用户的比特币交易合并以打破输入和输出地址之间链上联系的系统。这个总称涵盖了信任假设差异很大的各种设计。

两个截然不同的类别：

**托管混币器。** 用户将代币发送到服务，服务临时持有并在之后从不同池中发回"等值"代币。用户信任运营者(a)实际返还资金，(b)不记录谁存了什么，(c)不是蜜罐。历史上这些混币器（Bitcoin Fog、Helix、ChipMixer）反复被查封、起诉或被揭露为执法蜜罐。截至 2026 年，托管混币器作为隐私工具基本上已死——法律和运营风险压倒性的。

**非托管协调协议**如 [CoinJoin](/glossary/coinjoin)。用户协作构建一笔合并其输入的交易。没有第三方持有资金；混币由密码学协议完成，而非信任。JoinMarket、Joinstr 等去中心化协议是 2024 年 Wasabi 和 Whirlpool 的中心化协调器关闭后 2026 年的实际选项。

**[PayJoin](/glossary/payjoin)** 是更小规模的双方向变体，通过看起来普通的交易实现类似的隐私目标。

实际格局：

- 托管混币器：法律风险大，风险显而易见，应避免。
- 由中心运营者运行的 CoinJoin 协调器：与托管混币器相同的轨迹；Wasabi/Whirlpool 的关闭展示了法律压力。
- 去中心化 CoinJoin 协议：活跃但规模比以前的中心化版本小。
- PayJoin：小规模但对双方隐私实用。
- [闪电网络](/glossary/lightning-network)路由：可以说是当今比特币使用最广泛的"混币"机制，因为闪电支付根本不出现在公共链上。

如果你考虑使用混币器，请研究特定服务的历史、法律管辖区和信任假设。这个类别包括合法的隐私工具、无效的表演和彻底的陷阱。
