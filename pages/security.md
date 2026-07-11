---
title: "安全"
heading: "我们做了什么，没做什么，第三方怎么给我们打分。"
description: "LearnBitcoin 如何保障网站安全——具体配置、独立评分、诚实的不足之处。你自己验证。"
---

长话短说：这个网站不碰你的钱，不碰你的私钥，不碰你的个人数据。没什么可被掏空的，没什么可被偷的，没有 API token 需要轮换。最强的安全姿态就是没什么值得攻击的，我们就靠这个。

但这不是糊弄的借口。以下是我们具体跑了什么、第三方怎么打分、以及我们知道还需要改进的地方。

## 我们做了什么

- **只走 HTTPS。** TLS 1.2 和 1.3。Cloudflare 通过 Let's Encrypt 和 Google Trust Services 管理证书。我们发布了 CAA DNS 记录，这样即使某个 CA 被攻破，也没有其他 CA 能为这个域名签发证书。
- **HSTS 预加载。** 一旦你的浏览器通过 HTTPS 访问过我们，一年内都不会回退到明文 HTTP。我们在[浏览器预加载列表](https://hstspreload.org)上，所以保护也覆盖你的*第一次*访问。
- **严格的内容安全策略。** 每个页面上的每个可执行脚本都通过 SHA-256 内容哈希白名单允许。没有任何 `unsafe-inline`。构建时检查器会拦截新的内联脚本，防止策略被悄悄侵蚀。
- **没有第三方脚本。** 没有广告网络，没有标签管理器，没有客服插件，没有 Google Fonts，没有嵌入式 iframe。Plausible 分析通过我们自己的 Cloudflare Worker 代理，所以是同源的——广告拦截器不会拦它，CDN 被攻破也无法后门植入。
- **没有 cookie，没有追踪像素。** Plausible 不用 cookie。我们设置的唯一浏览器存储是 `lb_progress_v1`，保存你的阅读进度，从不离开你的设备。（Cloudflare 会设置自己的 `cf_clearance` / `__cf_bm` cookie 用于滥用防护，我们不去读它们。）
- **锁定的 CI。** GitHub Actions 的第三方 action 都锁定到提交 SHA，不是可变的 `@v4` 标签。工作流 token 默认只读。Dependabot 每周开分组的更新 PR。

## 独立评分

我们不贴徽章。徽章会过时，而且它们本身就是第三方 JavaScript，还得加进我们的 CSP 里。自己点进去重新跑一遍扫描吧：

- **[Mozilla Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=learnbitcoin.com)**——综合评估 HTTPS、响应头、cookie 和 CSP。
- **[securityheaders.com](https://securityheaders.com/?q=https%3A%2F%2Fwww.learnbitcoin.com)**——HTTP 响应头配置。
- **[SSL Labs](https://www.ssllabs.com/ssltest/analyze.html?d=learnbitcoin.com)**——TLS 和证书配置。

## 我们不承诺什么

这是一个提供 HTML 和几张 PNG 的内容站。我们不会：

- 持有任何属于你的钱、私钥、助记词或个人数据。
- 运营任何托管服务、交易所或钱包。
- 承诺零日修复的 SLA。每次重大改动后我们都会重新扫描，真实发现的问题 14 天内修复。

## 报告漏洞

发邮件给 **[hello@learnbitcoin.com](mailto:hello@learnbitcoin.com)**，邮件主题以 `[security]` 开头。我们争取在 72 小时内确认，对有实际影响的问题在 14 天内发布修复或缓解措施。

我们不提供付费赏金。实质性的披露，如果你愿意，我们会公开致谢。

## 变更

这个页面和其他内容一样，在我们的[公开内容仓库](https://github.com/treib-holdings/learnbitcoin-content/blob/main/pages/security.md)里。每次改动都在 git 历史中。我们不会偷偷改写我们的安全声明。
