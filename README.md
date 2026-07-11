# learnbitcoin-content 中文版

[learnbitcoin.com](https://learnbitcoin.com) 的中文翻译版——诚实的比特币学校。

**只谈比特币。不废话。开心学。**

---

## 这是什么

这是 [LearnBitcoin.com](https://learnbitcoin.com) 全站内容的中文翻译版，基于 [原始英文仓库](https://github.com/learnbitcoin/learnbitcoin-content) fork 而来。原站是一个专注于比特币教育的开源项目，以大白话、有出处、链上数据可验证为特色。

本仓库的 `zh-CN` 分支包含全部内容的中文翻译，`main` 分支保留原始英文内容用于对照和同步上游更新。

## 这里有什么

| 目录 | 内容 | 文件数 | 说明 |
|---|---|---|---|
| [`glossary/`](glossary/) | 比特币术语表 | 464 | 每个术语一个 markdown 文件，含简短定义、要点和详细解释 |
| [`journey/`](journey/) | 进阶之路 | 6 | 从"什么是钱？"到"运行自己的节点"的系统学习路线 |
| [`rabbit-holes/`](rabbit-holes/) | 兔子洞 | 15 | 独立的深度探索文章，大多为 MDX 格式，可嵌入交互组件 |
| [`pages/`](pages/) | 站点页面 | 9 | 首页、宣言、术语表索引等顶层页面 |
| [`downloads/`](downloads/) | 下载资源 | 8 | PDF 文件，包括白皮书、隐私检查清单、助记词备份模板等 |

## 如何阅读

### 方式一：在线浏览（推荐）

访问 [learnbitcoin.com](https://learnbitcoin.com) 阅读英文原版。中文版可在此仓库中直接浏览 markdown 文件。

### 方式二：在 GitHub 上阅读

在仓库页面点击任意 `.md` 或 `.mdx` 文件即可在线阅读，GitHub 会自动渲染 markdown 格式。

推荐阅读顺序（进阶之路）：

1. [为什么货币体系出了问题](journey/why-money-is-broken.md) — 从法币的缺陷开始
2. [比特币到底是什么](journey/what-bitcoin-actually-is.md) — 理解比特币的本质
3. [比特币如何运作](journey/how-bitcoin-works.md) — 技术原理
4. [使用比特币](journey/using-bitcoin.md) — 实操指南
5. [做自己的银行](journey/be-your-own-bank.md) — 自托管与钱包
6. [主权](journey/sovereignty.md) — 运行节点、多签、毕业

想深入某个主题？浏览 [兔子洞](rabbit-holes/) 系列：

- [减半](rabbit-holes/halvings.mdx) — 每 21 万个区块奖励减半，为什么、什么时候、之后会怎样
- [挖矿](rabbit-holes/mining.mdx) — 工作量证明的原理与实践
- [闪电网络路由](rabbit-holes/lightning-routing.mdx) — 第二层支付如何路由
- [量子计算与比特币](rabbit-holes/quantum-and-bitcoin.mdx) — 量子威胁与比特币的应对
- [从 Mt. Gox 到 FTX：托管墓园](rabbit-holes/mt-gox-ftx-graveyard.mdx) — 交易所倒闭史
- 更多...

想查术语？浏览 [术语表](glossary/)，464 个比特币术语从 A 到 Z 全部有中文解释。

### 方式三：本地克隆

```bash
git clone -b zh-CN https://github.com/lovexw/learnbitcoin-content.git
cd learnbitcoin-content
```

然后用任意 markdown 阅读器打开文件即可。推荐使用 [Obsidian](https://obsidian.md/)、[Typora](https://typora.io/) 或 VS Code。

## 文件格式

每篇内容都是一个带 YAML frontmatter 的 markdown 或 MDX 文件：

```markdown
---
title: "绝对手续费"
slug: absolute-fee
draft: false
shortDefinition: "以聪或 BTC 的具体金额设定的交易手续费，而不是基于交易大小的费率。"
keyTakeaways:
  - "固定金额，与交易大小无关"
  - "使用方便，但网络状况变化时有风险"
sources: []
relatedTerms: []
liveWidget: ~
---

正文内容（中文）。
```

- `title`：中文标题（专有名词如 SegWit、Taproot 保留英文）
- `slug`：URL 路径标识符，保持英文不变
- `shortDefinition`：术语的一句话定义（中文）
- `keyTakeaways`：关键要点列表（中文）
- `relatedTerms`：关联术语的 slug 列表（英文）
- 正文：完整中文翻译

## 翻译说明

### 翻译规范

详见 [TRANSLATION-GUIDE.md](TRANSLATION-GUIDE.md)，核心规则：

- **常用技术词中文化**：哈希、公钥、私钥、交易、区块、矿工、手续费、确认、内存池等
- **专有名词保留英文**：SegWit、Taproot、BIP、Schnorr、Bitcoin Core、Lightning Network 等
- **首次出现加注释**：如"聪（sat，比特币的最小单位）"
- **保持格式不变**：所有 Markdown/MDX 语法、链接、组件引用、数字日期 URL 原样保留

### 术语对照

| 英文 | 中文 | 说明 |
|---|---|---|
| Hash | 哈希 | |
| Public Key | 公钥 | |
| Private Key | 私钥 | |
| Transaction | 交易 | |
| Block | 区块 | |
| Mining / Miner | 挖矿 / 矿工 | |
| Node | 节点 | |
| Wallet | 钱包 | |
| Fee | 手续费 | |
| Confirmation | 确认 | |
| Mempool | 内存池 | |
| Halving | 减半 | |
| Seed Phrase | 助记词 | |
| Satoshis / sats | 聪（sat） | |
| Proof of Work | 工作量证明 | |
| Self-custody | 自托管 | |
| Cold Storage | 冷存储 | |
| Hardware Wallet | 硬件钱包 | |
| Multisig | 多签 | |
| UTXO | UTXO | 保留英文，首次出现解释"未花费交易输出" |
| SegWit | SegWit | 保留英文 |
| Taproot | Taproot | 保留英文 |
| BIP | BIP | 保留英文（Bitcoin Improvement Proposal） |

### 翻译覆盖

| 内容 | 文件数 | 翻译状态 |
|---|---|---|
| 术语表（glossary/） | 464 | ✅ 全部翻译 |
| 进阶之路（journey/） | 6 | ✅ 全部翻译 |
| 兔子洞（rabbit-holes/） | 15 | ✅ 全部翻译 |
| 站点页面（pages/） | 9 | ✅ 全部翻译 |
| README.md | 1 | ✅ 翻译（本文件） |
| CONTRIBUTING.md | 1 | ✅ 翻译 |
| **合计** | **496** | **✅ 全部完成** |

## 分支说明

| 分支 | 用途 |
|---|---|
| `main` | 原始英文内容，用于跟踪上游更新 |
| `zh-CN` | 中文翻译版，所有内容已翻译为中文 |

## 贡献

欢迎改进翻译质量或修复问题！参见 [CONTRIBUTING.md](CONTRIBUTING.md) 了解风格规范和提交方式。

翻译改进请提交到 `zh-CN` 分支。

## 许可证

内容采用 [Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)](LICENSE) 许可。

翻译它。嵌入它。混编它。在它上面建你自己的比特币学校。署名 + 相同方式共享是唯一的要求。

## 如何署名

如果你复用了这里的任何内容，请用类似以下的方式署名：

> 内容来自 [LearnBitcoin.com](https://learnbitcoin.com)，采用
> [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。
> 中文翻译版来自 [lovexw/learnbitcoin-content](https://github.com/lovexw/learnbitcoin-content)，有修改。

对于印刷品或超链接无法渲染的场景，请以纯文本形式包含 URL。许可证要求链接到许可证本身；链接或引用回 learnbitcoin.com 是鼓励的，也能帮助读者找到来源。

如果你在发布衍生作品，还有两点需要知道：

- **相同方式共享。** 你的版本也必须采用 CC-BY-SA-4.0（或兼容的更高版本）许可。
- **修改必须说明。** 如果你改了内容，要说清楚。类似"改编自 LearnBitcoin.com，有修改。"一句话就够了。

## 致谢

- 原始内容：[LearnBitcoin.com](https://learnbitcoin.com) 团队
- 中文翻译：基于 lovexw fork 仓库完成，采用多轮 AI 辅助翻译 + 人工审校规范
- 翻译规范：见 [TRANSLATION-GUIDE.md](TRANSLATION-GUIDE.md)

---

*比特币是铸币诞生以来最重要的货币技术。它值得被好好教。*
