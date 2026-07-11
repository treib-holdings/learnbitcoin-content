---
title: "适配器签名"
slug: adapter-signature
draft: false
shortDefinition: "一种密码学机制，允许部分签名在完成后揭示一个秘密，常用于原子互换或高级闪电网络功能。"
keyTakeaways:
  - "部分签名，揭示一个隐藏的秘密"
  - "支持原子互换和高级合约逻辑"
  - "增强多方交易中的信任最小化"
sources: []
relatedTerms:
  - bitcoin-script
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - merkleized-abstract-syntax-tree-mast
  - scriptless-scripts
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

适配器签名是一种 Schnorr 签名原语，将签名有效性与一个额外秘密的揭示绑定在一起。双方持有一个"预签名"，它距离成为有效签名只差一个标量。想要使用它的一方必须提供该标量，而完成签名的行为会将该标量发布给所有观察链的人。

使它有用的技巧在于：这把"如果你签名，就揭示一个秘密"和"如果你揭示一个秘密，就能完成签名"变成了同一个数学事件。两条不同链上的两笔交易可以被绑定在一起，使得完成一笔交易会强制泄露一个秘密，从而完成另一笔交易。

这解锁了以下功能：

- **跨链原子互换**，无需 [HTLC](/glossary/htlc-hashed-time-locked-contract)。两笔交易看起来就像普通的单签名支出；两条链上都看不到哈希原像承诺。隐私和成本都得到改善。
- **离散对数合约（DLC）。** 预言机发布适配器签名形状的证明；当预言机的签名解锁对手方的预签名时，合约自动完成。
- **闪电网络 PTLC。** Payment Point Time-Locked Contracts 用适配器签名替代 HTLC 的哈希原像，修复了让观察者能够关联闪电路由路径的跨跳关联问题。
- **无脚本合约（Scriptless scripts）。** 一个更广泛的研究方向，将合约逻辑从 Bitcoin Script 中移出，放入适配器签名数学中，使链上交易与普通支出无法区分。

这一密码学机制是 Schnorr 特有的——它之所以有效，是因为 Schnorr 签名在密钥上是线性的，同样的代数让适配器构造能够干净地嵌入。ECDSA 也有类似构造（ECDSA 适配器签名存在），但数学上更复杂。

适配器签名在 2026 年主要处于研究阶段，跨链互换协议和闪电网络 PTLC 部署中有积极开发。密码学原语已被充分理解；生产钱包中的部署正在逐步推进。
