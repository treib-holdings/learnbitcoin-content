---
title: "授权参与商"
slug: authorized-participant
draft: false
published: "2026-06-15"
shortDefinition: "与发行人签订合同、可直接创建和赎回 ETF 份额的大型经纪商。这是保持 ETF 市场价与净资产值一致的套利机制。"
keyTakeaways:
  - "只有授权参与商直接与基金交互；散户在公开交易所交易"
  - "授权参与商套利：市场价 > 净资产值时创建份额，市场价 < 净资产值时赎回"
  - "比特币 ETF 的授权参与商包括 Jane Street、Virtu、JPMorgan、Goldman Sachs、ABN AMRO、Macquarie 等"
sources: []
relatedTerms:
  - etf-exchange-traded-fund
  - spot-bitcoin-etf
  - nav-net-asset-value
  - creation-redemption
  - premium-discount-to-nav
  - tracking-error
  - liquidity
  - exchange
liveWidget: ~
---

授权参与商（AP）是与 ETF 发行人有合同关系的大型经纪商，可以直接向基金创建和赎回 ETF 份额。散户投资者和大多数机构通过普通经纪商在公开市场交易 ETF 份额；只有 AP 可以铸造新份额或销毁现有份额以换取底层资产（或现金，取决于结构）。

AP 存在的原因：

- **持续套利。**当需求推高 ETF 市场价使其高于[净资产值](/glossary/nav-net-asset-value)时，AP 可以买入底层资产（BTC），交付给发行人以换取按净资产值计的新份额，然后以较高的市场价卖出这些份额。无风险利润（扣除执行成本后）。这个过程缩小了差距。当市场价低于净资产值时，AP 反向操作：以折价买入 ETF 份额，赎回为 BTC（或现金）按净资产值计，然后卖出。无论哪种方式，[溢价或折价](/glossary/premium-discount-to-nav)都被压缩回零。
- **做市。**AP 通常也在 ETF 份额本身做市，在[交易所](/glossary/exchange)报价买卖并提供日内[流动性](/glossary/liquidity)。

创建的机械流程：

1. AP 想创建一个创建单位（比特币 ETF 通常为 5,000 到 40,000 份，因发行人而异）。
2. AP 向发行人交付所需篮子。现金创建：等于净资产值乘以单位大小的美元。实物创建：等于每股背后 BTC 数量乘以单位大小的 BTC。
3. 发行人向 AP 记入新份额。
4. AP 将份额卖入市场（或持有为库存）。

赎回是反向操作。

现货比特币 ETF 的 AP 是谁：

美国主要现货 ETF 在招股说明书中披露了初始 AP 名单。出现在多个产品中的名字包括：

- **Jane Street**——高频做市商，大多数美国 ETF 的 AP
- **Virtu Financial**——做市商，非常常见的 ETF AP
- **JPMorgan Securities**——大型经纪商，偏机构型产品的 AP
- **Goldman Sachs**——大型经纪商
- **ABN AMRO Clearing**——有美国业务的欧洲清算公司
- **Macquarie Capital**——投资银行，活跃于大宗商品 ETF
- **Cantor Fitzgerald、BofA Securities、Barclays Capital**——也出现在各 AP 名单上的大型经纪商

比特币特有的复杂性：

传统大宗商品 ETF（黄金、白银）的 AP 安排围绕充分理解的实物交割基础设施建立。对于现货比特币 ETF，AP 需要获取 BTC 流动性来完成创建。一些 AP 运营自己的 BTC 交易台。其他使用 Coinbase Prime、OTC 台或期货市场来获取。2024 年 [SEC 要求](/glossary/creation-redemption)仅限现金创建，最初意味着发行人（通常通过 Coinbase Custody）处理现货 BTC 执行，但 AP 仍需交付大额美元，对于每日数亿美元的流动来说这并非易事。

为什么这对零售比特币 ETF 买家重要：

- 健康的 AP 名单意味着紧密的价差和紧密的跟踪。如果 AP 缺席或犹豫，包装就会出问题。
- AP 行为是现货比特币 ETF 自上市以来跟踪底层资产如此干净的原因之一——套利有利可图且有许多有能力的公司在运营。
- AP 集中风险存在但通常不如托管人集中风险严重：AP 互相竞争；而 11 只 ETF 中 8 只的托管在一家公司。
