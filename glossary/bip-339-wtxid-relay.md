---
title: "BIP 339（WTXID 中继）"
slug: bip-339-wtxid-relay
draft: false
shortDefinition: "P2P 协商用于基于 wtxid 的交易中继，替代基于 txid 的 INV 消息，关闭见证延展性中继缺口。"
keyTakeaways:
  - "对等节点在连接时交换 `wtxidrelay` 消息以选择启用 wtxid 中继"
  - "区分共享 txid 但有不同见证的交易，关闭重复检测缺口"
  - "在 Bitcoin Core 0.21（2021 年 1 月）中激活；对钱包用户透明"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-144-segwit-relay
  - bip-152-compact-blocks
  - segwit-segregated-witness-bip-141
  - signature-clipping
  - transaction
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0339.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0339"
liveWidget: ~
---

BIP 339 更改了 P2P 中继层，使对等节点可以通过见证交易 ID（wtxid）而非 txid 来宣告交易。协商通过在版本握手完成前交换的 `wtxidrelay` 消息进行；双方对等节点必须支持才能启用基于 wtxid 的 `INV`、`GETDATA` 和 `NOTFOUND` 流量。由 Suhas Daftuar 撰写，在 Bitcoin Core 0.21（2021 年 1 月）中部署。

动机来自一个微妙的 SegWit 细节。SegWit（BIP 141）消除了 txid 延展性：txid 只提交到非见证数据，因此见证级别的调整不再改变 txid。但见证本身仍然可以被延展。两笔交易可以共享一个 txid 但有完全不同的见证包（例如一个有效签名，另一个不同但同样有效的签名）。BIP 339 之前的中继逻辑按 txid 识别交易，意味着对等节点可能将一笔作为"重复"静默丢弃，而未意识到两笔是不同的。

实际效果：

- 关闭了一个小型 DoS 向量。观察到传输中交易的攻击者不再能用一些对等节点接受而另一些视为已见的替代见证副本淹没网络。
- 紧凑区块中继（BIP 152）更干净。紧凑区块中的短 ID 从 wtxid 派生，因此 wtxid 感知的对等节点更可靠地重建区块。
- 未来 P2P 传输升级（BIP 324 v2 加密传输等）建立在节点可以按完整标识哈希寻址交易的假设上。

对钱包和用户，没有可见变化。交易以相同方式广播和确认。BIP 339 是那些默默加固 P2P 层而永远不会出现在用户体验中的管道级升级之一。

规范：[BIP-339](https://github.com/bitcoin/bips/blob/master/bip-0339.mediawiki)。
