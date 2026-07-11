# learnbitcoin-content

[learnbitcoin.com](https://learnbitcoin.com) 的源内容——诚实的比特币学校。

**只谈比特币。不废话。开心学。**

## 这里有什么

- [`glossary/`](glossary/) - 440 个比特币术语，每个一个 markdown 文件。
- [`rabbit-holes/`](rabbit-holes/) - 独立的深度探索，大多是 MDX 格式，可以嵌入交互式组件。
- [`journey/`](journey/) - 从"什么是钱？"到"我运行自己的节点"的硬核路线。
- [`pages/`](pages/) - 顶层站页面的正文（宣言、首页、/node、三个索引页）。
- [`downloads/`](downloads/) - 在站点 `/downloads/` 路径下提供的 PDF。

## 文件格式

每篇内容都是一个带 YAML frontmatter 的 markdown 或 MDX 文件：

```markdown
---
title: "Absolute Fee"
slug: absolute-fee
draft: false
shortDefinition: "A transaction fee set as a specific amount in satoshis or BTC..."
keyTakeaways:
  - "Flat amount paid regardless of transaction size"
  - "Can be convenient but risky if network conditions change"
sources: []
relatedTerms: []
liveWidget: ~
---

Body text in markdown.
```

站点渲染器把这个仓库当作一组 Astro 内容集合来读取。

## 贡献

参见 [CONTRIBUTING.md](CONTRIBUTING.md)，了解我们欢迎什么、不会合并什么、风格说明，以及如何提交。站上每个内容页面页脚都有"在 GitHub 上编辑此页面"的链接，直接跳到对应的源文件。

## 许可证

内容：[Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)](LICENSE)。

翻译它。嵌入它。混编它。在它上面建你自己的比特币学校。署名 + 相同方式共享是唯一的要求。

## 如何署名

如果你复用了这里的任何内容，请用类似以下的方式署名：

> 内容来自 [LearnBitcoin.com](https://learnbitcoin.com)，采用
> [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。

对于印刷品或超链接无法渲染的场景，请以纯文本形式包含 URL。许可证要求链接到许可证本身；链接或引用回 learnbitcoin.com 是鼓励的，也能帮助读者找到来源。

如果你在发布衍生作品，还有两点需要知道：

- **相同方式共享。** 你的版本也必须采用 CC-BY-SA-4.0（或兼容的更高版本）许可。
- **修改必须说明。** 如果你改了内容，要说清楚。类似"改编自 LearnBitcoin.com，有修改。"一句话就够了。
