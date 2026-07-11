---
title: "创设/赎回（现金 vs 实物）"
slug: creation-redemption
draft: false
published: "2026-06-15"
shortDefinition: "ETF 份额通过授权参与者的创设或赎回来铸造或销毁的过程，交换物可以是现金或底层资产。这是保持 ETF 跟踪净资产值的核心套利机制。"
keyTakeaways:
  - "现金创设：AP 交付美元，发行人执行 BTC 交易"
  - "实物创设：AP 直接向发行人交付 BTC"
  - "美国现货比特币 ETF 在 SEC 坚持下以仅现金方式启动；实物创设随后获批"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - authorized-participant
  - nav-net-asset-value
  - premium-discount-to-nav
  - tracking-error
liveWidget: ~
---

创设和赎回是 ETF 份额被铸造和销毁的过程。该过程发生在基金发行人和[授权参与者](/glossary/authorized-participant)之间，不在公开市场上。它是让 ETF 紧密跟踪其[净资产值](/glossary/nav-net-asset-value)的机制。

**创设（份额被铸造）：**

1. AP 想要创设一个创设单位——一大块份额，通常 5,000 到 40,000 份，取决于发行人。
2. AP 向发行人交付约定的篮子。
3. 发行人向 AP 记入新份额。
4. AP 将份额卖入市场或作为库存持有。

**赎回（份额被销毁）：**

1. AP 想要赎回。
2. AP 将份额交还给发行人。
3. 发行人将篮子（现金或底层资产）交还给 AP。
4. 份额被销毁；份额数量减少。

"篮子"可以采取两种形式：

**现金创设/赎回：**

AP 交付等于净资产值乘以单位规模的美元。发行人（或其托管人）执行现货 BTC 交易来部署现金。赎回反向运行：发行人卖出 BTC，向 AP 交付美元。

- **优点：** 对于缺乏自己 BTC 交易台的 AP 更简单。
- **缺点：** 执行价格可能与净资产值定价点不同，引入滑点和[跟踪误差](/glossary/tracking-error)。发行人 BTC 交易的已实现损益流入基金，带有税务后果。

**实物创设/赎回：**

AP 直接向发行人交付 BTC。发行人将 BTC 接入托管并向 AP 记入份额。赎回反向运行。

- **优点：** 基金内无执行风险。税务高效：发行人从不实现资本利得，因为 BTC 以成本基础进出。这是大多数商品 ETF 的标准机制。
- **缺点：** AP 需要具备机构规模处理 BTC 托管、转账和结算的运营能力。

比特币特有的历史：

- **2024 年 1 月启动——仅现金。** 当美国 SEC 批准首批十一只[现货比特币 ETF](/glossary/spot-bitcoin-etf) 时，它要求仅限现金创设/赎回。Gary Gensler 声明的理由是经纪交易商（AP）未注册直接处理 BTC。批评者认为这是 SEC 强加的摩擦，以使包装器与 BTC 本身保持一步之遥；在仅现金模式下，只有发行人的托管人（通常是 Coinbase Custody）接触资产。
- **2025 年 7 月 29 日——实物获批。** SEC 主席 Paul Atkins（Gensler 之后）批准了所有美国现货比特币和以太坊 ETP 的实物创设和赎回（公告 [2025-101](https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps)）。新一届 SEC 的首个重大加密友好政策转变，使现货比特币 ETF 与传统商品 ETF 机制一致。主要发行人（BlackRock、Fidelity、Ark）自 2025 年 1 月起就一直在提交修订申请以寻求实物处理。

为什么这很重要：

- **跟踪质量。** 实物跟踪在结构上比现金更紧密。基金避免了流量日的执行滑点。
- **税务效率。** 实物创设/赎回是 ETF 在美国比共同基金更税务高效的核心理由。仅现金比特币 ETF 放弃了这一优势。
- **AP 经济学。** 现金创设更容易运营但支付给 AP 的回报更少，因为套利部分被发行人吸收的执行成本所捕获。实物将执行风险转移给 AP，并奖励能够高效获取 BTC 的 AP。

对于零售买家来说，机制是不可见的。对于税务敏感的长期持有者来说，实物比特币 ETF 在结构上更接近最初使 ETF 包装器税务高效的设计。
