---
title: "闪电节点别名"
slug: lightning-node-alias
draft: false
shortDefinition: "闪电节点在 gossip 协议中广播的昵称，不是可信身份而是用户友好的标签。"
keyTakeaways:
  - "为闪电节点添加友好标签但可被冒充"
  - "帮助人类用户在 gossip 数据中区分节点"
  - "公钥仍是闪电路由的唯一真实标识符"
sources: []
relatedTerms:
  - bolt
  - gossip-protocol-lightning
  - lightning-node
  - node-operator
liveWidget: ~
---

闪电节点别名是[闪电节点](/glossary/lightning-node)通过[gossip 协议](/glossary/gossip-protocol-lightning)作为 `node_announcement` 消息一部分广播的人类可读昵称。它是一个标签，不是身份。

示例："ACINQ"、"WalletOfSatoshi.com"、"Bitfinex"、"Satoshi 的咖啡店"、"🌩️ Lightning Bot 🌩️"。别名由运营者自选，外加一个 24 位颜色值用于 UI 渲染。

重要警告：**别名不经认证**。任何人都可以广播任何别名。多个节点可以声明相同的别名。别名可能是知名节点的冒充。闪电节点的密码学身份是其**公钥**（33 字节 secp256k1 公钥）；别名只是 UX 便利。

别名的用途：

- **闪电浏览器展示。** 当你看到路由图可视化时，别名使其可读。
- **钱包中的节点列表 UI。** "连接到哪个对等方？"如果对等方有有意义的别名就更容易回答。
- **非正式识别。** "我和 WalletOfSatoshi 开了一个通道"比对应的公钥更简洁。
- **运营者品牌。** 拥有公共基础设施（托管钱包、交易所、企业）的闪电节点运营者将别名作为其面向公众身份的一部分。

别名不适合的用途：

- **信任决策。** 永远不要仅凭别名信任一个节点。公钥才是密码学上重要的。
- **路由安全。** 自称"Coinbase"的骗局节点无法真正拦截 Coinbase 的支付，因为路由使用公钥。
- **长期身份。** 运营者有时会更改别名；别名本身不带有历史问责性。

把别名当作 Twitter 显示名：对人类交流有用，但底层句柄（公钥）才是实际身份。
