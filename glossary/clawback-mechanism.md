---
title: "回收机制"
slug: clawback-mechanism
draft: false
shortDefinition: "一种脚本或合约功能，在特定条件未满足时允许部分退款或资金回收。"
keyTakeaways:
  - "在预定义条件下启用退款或撤销"
  - "通常使用时间锁或多签脚本"
  - "提供额外安全性但增加脚本复杂度"
sources: []
relatedTerms:
  - coin-control
  - coin-freeze
  - colored-coins
  - covenants
  - escrow
  - escrowed-lightning-channel
  - quorum-signatures
liveWidget: ~
---

回收机制是任何让一方在超时或条件失败后回收资金的比特币脚本构造。它是金库、托管和恢复协议的基础构建块。

其机制依赖比特币的时间锁操作码：

- **OP_CHECKLOCKTIMEVERIFY（CLTV）**：仅在达到绝对区块高度或时间戳后允许花费。
- **OP_CHECKSEQUENCEVERIFY（CSV）**：仅在父输出确认后经过 N 个区块后允许花费。

经典的回收模式：

```
IF
  <recipient_pubkey> OP_CHECKSIG          # 接收方签名后可立即花费
ELSE
  <timeout_blocks> OP_CSV OP_DROP         # 超时后...
  <sender_pubkey> OP_CHECKSIG             # 发送方可回收
ENDIF
```

接收方在整个超时窗口内可以签名并认领。如果他们不这样做，发送方的回收路径就变为可花费。

实际用途：

- **托管。** 买家将付款提交到托管；如果卖家在 N 天内未交付，买家回收资金。
- **金库。** 热密钥可即时花费；冷密钥也可即时花费，*并且*在检测到热密钥被入侵时，可在时间锁窗口内覆盖待处理的热密钥花费。
- **闪电网络 HTLC。** 每个 HTLC 都有回收路径，如果超时前从未揭示原像，出资方可以回收。
- **遗产。** 继承人的花费路径在 N 个月不活动后生效。
- **跨链交换超时。** 如果对方未在窗口内完成交换，任一方均可回收。

限制：

- **预测超时**在绝对时间模式下，如果内存池条件变化，会很棘手。大多数回收设计使用 CSV（相对时间）以获得可预测性。
- **回收交易的存储**很重要：预签名的回收交易必须安全存储并在适当时刻可访问。
- **软分叉升级**如 [BIP 119 CTV](/glossary/bip-119-ctv) 或其他契约提案将进一步简化回收模式；当今的设计可行但需要更谨慎的脚本工程。

回收是使比特币合约超越简单转账的有用原语之一。几乎每个有趣的比特币协议（闪电网络、金库、交换）都以某种形式建立在回收之上。
