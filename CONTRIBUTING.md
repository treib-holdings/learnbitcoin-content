# 贡献指南

感谢你的考虑。这个仓库存放着 [learnbitcoin.com](https://learnbitcoin.com) 上的每一个字：术语表、进阶章节、兔子洞、可下载的 PDF。

内容采用 [CC-BY-SA-4.0](LICENSE) 许可。用吧，混编吧，在上面建你自己的比特币学校。网站本身（Astro、Svelte、渲染管线）在另一个私有仓库里。

## 我们欢迎什么

- **错别字和语法修正。** 发 PR，我们会快速合并。
- **事实性更正。** 引用一手来源。我们会定期更新链上数据，但不可能让静态内容里的每个数字都保持实时。
- **澄清。** 如果某段话令人困惑或可以更精炼，开个 issue 或 PR。给我们看看改前改后。
- **新术语条目。** 如果缺少某个术语，用"提议新条目"issue 模板来提交。
- **新兔子洞。** 这是更大的投入。先开个 issue，让我们聊聊范围和角度，然后再写 8000 字。
- **更好的交叉链接。** rehype 插件会自动链接精确标题匹配，但手动链接在行文流畅度上仍然更好。
- **术语条目的 sameAs 链接。** 放在内容的 `sameAs:` 数组里的外部参考链接。见下文。
- **翻译。** 长期目标。先跟我们聊聊。

## 我们不会合并什么

- 任何关于山寨币、代币或"泛加密货币"的内容。
- 价格预测、"这个要起飞"之类的内容、任何很快会过时的东西。
- 任何形式的分销链接。
- 追踪像素、分析信标、"就加一小段 JS"。
- 将特定托管型闪电网络钱包列为长期推荐的内容。这个领域变化太快了。
- 边缘政治。只谈比特币不等于比特币部落主义。

## 如何提交

1. **小修复（错别字、断链、事实更正）：** 直接开 pull request。对了我们就合并。
2. **新内容或实质性修改：** 先用对应模板开个 issue。先对齐比白写几小时强。
3. **其他：** 开个讨论或者直接发邮件。联系方式见[宣言页面](https://learnbitcoin.com/manifesto)。

## 风格与语气

这个站有一致的语气。简单来说：

- **大白话。** 写得让一个好奇的普通人能跟上，不觉得被居高临下。
- **有出处。** 每个事实性论断都应引用一手来源：BIP、源代码、论文、权威参考。不是链接到博客的博客。
- **有态度，不说教。** 该表态就表态。别道德说教。
- **只用 ASCII 直引号和直撇号。** 不用弯引号、智能撇号、en-dash、省略号字符。弯引号会破坏 YAML frontmatter。
- **单位前缀用 U+00B5 (µ)，不用 U+03BC (μ)。** 它们看起来一样，但 OG 卡片的字体子集只包含拉丁区块，希腊 mu 在社交预览中会显示为缺字方框。Unicode 标准也建议单位前缀如 µBTC、µs、µm 使用 U+00B5（Micro Sign）。在 macOS 上，Option+M 输入 µ。
- **不预测价格。** 永远不。
- **真实数字，当前时代。** 如果你引用供应量、手续费、算力等数据，使用与当前时代一致并经过链上交叉验证的数字。

如果你不确定某个内容是否符合语气，看几篇已有条目，找到那个节奏。

## sameAs 值

术语条目可以在内容的 `sameAs:` 数组中列出指向权威参考的外部 URL。

好的来源，按优先级粗略排序：

- Wikipedia
- Wikidata
- Bitcoin Wiki (en.bitcoin.it)
- GitHub 上的 BIP 源码（针对 BIP 条目）
- Bitcoin Optech 主题页

每个条目 2-5 个 URL 足够。跳过博客和营销页面。

示例：

```yaml
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
```

## OG 卡片和 `ogImage` 覆盖

每个术语条目、兔子洞和进阶章节都会生成一张社交预览卡（`og:image`）。网站会在 `/og/<collection>/<slug>.png` 自动渲染一张，基于条目的 `title` 和短文本，所以你不需要为默认卡片做任何事。

你可以通过 frontmatter 中的 `ogImage` 字段覆盖自动生成的 URL：

```yaml
ogImage: "/og/glossary/bip-361.png?v=2"     # 编辑后缓存刷新
ogImage: "/diagrams/og/halvings.png"        # 静态图表图片
ogImageAlt: "Description of the image."     # optional alt text
```

常见用例：

- **编辑后刷新缓存。** Twitter 缓存 OG 卡片约 7 天，Cloudflare CDN 缓存 24 小时。追加 `?v=2`（然后 `?v=3`，以此类推）来强制重新获取当你改了影响卡片的 `shortDefinition` 或 `tagline` 时。
- **自定义图表。** 当条目需要比纯文本模板更丰富的视觉效果时，指向一个已提交的静态图片。目前每个进阶章节都这样做。

Worker 按 URL 路径路由，所以 `?v=N` 查询字符串纯粹是缓存刷新的手段——渲染的卡片内容不会变。

## 文件在哪里

```
glossary/             # 每个术语一个 markdown 文件
journey/              # 六个叙事章节
rabbit-holes/         # 深度探索，大多 MDX（交互式组件）
downloads/            # 在 /downloads/ 提供的 PDF
```

每个文件都有站点渲染器读取的 YAML frontmatter。看邻近文件了解确切的 schema；不先沟通不要自创新字段。

## 发布日期

进阶章节和兔子洞带有两个 ISO 日期 frontmatter 字段。第一个由构建管线强制执行；第二个是可选的。

- **`published: "YYYY-MM-DD"`** - 条目首次在网站上公开可见的日期。**非草稿的进阶和兔子洞条目必填。** Web 仓库的 `check-published-dates` 脚本在每个 `predev` / `prebuild` / `prepreview` hook 中运行，如果非草稿条目缺少此字段或格式错误，构建会失败。

  接入：RSS feed `pubDate`（最新优先排序）+ schema.org Article `datePublished` + `og:article:published_time`。

- **`updated: "YYYY-MM-DD"`** - 条目最后一次实质性修改的日期。**可选。实质性重写时更新，错别字修复不用。** 会重新通知 RSS 订阅者并给搜索引擎发送新鲜度信号。

  接入：RSS feed `<atom:updated>` + schema.org Article `dateModified`（Google 新鲜度信号）+ `og:article:modified_time`。

术语条目也可以带这些字段但不强制（有 440+ 条目；缺失时回退到上线日的 `DEFAULT_PUBLISHED`）。在搜索引擎对特定条目的新鲜度有要求时，建议设置。

示例：

```yaml
published: "2026-06-15"
updated: "2026-07-02"
```

日期字符串始终加引号。不加引号的 `YYYY-MM-DD` 会被 YAML 解析为日期类型，导致 schema 验证失败。

## 署名

实质性贡献会在相关 commit 和页面元数据中署名。我们目前还没有贡献者页面（项目还年轻），但当贡献者列表足够长时会建一个。

## 许可证

提交贡献即表示你同意该内容与仓库其余部分一样采用 [CC-BY-SA-4.0](LICENSE) 许可。

## 行为准则

诚实。精准。引用来源。不要跑题。就这些。