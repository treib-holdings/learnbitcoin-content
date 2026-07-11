---
title: "RPC 白名单（RPC Whitelist）"
slug: rpc-whitelist
draft: false
shortDefinition: "Bitcoin Core 配置，限制特定 JSON-RPC 方法仅对白名单用户或 IP 可用，以提升安全性。"
keyTakeaways:
  - "按用户/IP 限制敏感命令访问"
  - "防止未授权或恶意的 RPC 调用"
  - "对远程或共享设置中的安全节点管理至关重要"
sources: []
relatedTerms:
  - exchange-api-key
  - oracle-based-betting
liveWidget: ~
---

RPC 白名单是 Bitcoin Core 限制每个认证用户可以调用哪些 JSON-RPC 方法的机制。它在 RPC 层实现最小权限原则：即使凭证被泄露，损害也受限于该凭证被允许做的事情。

`bitcoin.conf` 中的配置：

```
rpcauth=alice:5e95...$abc...   # 用户 alice 的 bcrypt 哈希凭证
rpcwhitelist=alice:getblockchaininfo,getblock,getrawtransaction
rpcauth=bob:7f12...$def...
rpcwhitelist=bob:sendrawtransaction,signrawtransactionwithwallet,getbalance
rpcwhitelistdefault=0          # 拒绝未明确白名单的任何方法
```

在此例中，alice 只能读取链状态；bob 可以签名和广播但不能调用 `stop` 关闭节点。

这在实践中的重要场景：

- **区块浏览器后端。** 只读浏览器服务需要 `getblock`、`getrawtransaction`、`getblockchaininfo`。不需要钱包 RPC。相应限制意味着浏览器中的漏洞不能抽空同一节点上的钱包。
- **闪电网络节点后端。** 闪电网络守护进程需要特定 RPC（广播交易、检查内存池状态）。限制为仅这些意味着闪电网络的漏洞不能触发任意钱包操作。
- **监控/指标抓取。** Prometheus 导出器或告警系统的只读 RPC 访问；不需要写权限。
- **多用户节点托管。** 如果多个人共享一个节点，每个人获得只有其所需方法的凭证。

默认值：在现代 Bitcoin Core 中，`rpcwhitelistdefault=1` 意味着白名单用户可以访问所有 RPC 方法，除非明确排除。设置 `rpcwhitelistdefault=0` 翻转模型：方法默认被拒绝，除非明确列出。默认拒绝模式是任何非平凡部署的安全选择。

对于单用户家庭节点只有一个凭证，白名单设置是多余的。对于服务多个消费者的任何设置，这是标准加固步骤。
