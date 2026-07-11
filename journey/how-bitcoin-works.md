---
title: "比特币如何运作"
slug: how-bitcoin-works
draft: false
status: live
published: "2026-05-15"
order: 3
estimatedMinutes: 30
tagline: "区块、交易、挖矿、手续费、UTXO。揭开机器的面纱,跳过那些不该跳过的部分。"
prerequisites: ["what-bitcoin-actually-is"]
relatedTerms: ["block", "transaction", "utxo-unspent-transaction-output", "mempool", "transaction-fee", "miner", "merkle-root", "nonce", "difficulty", "difficulty-retargeting", "full-node"]
ogImage: "/diagrams/og/alice-pays-bob.png"
ogImageAlt: "Alice pays Bob 0.5 BTC: a UTXO transaction diagram showing how the 1.0 BTC input is consumed and two new UTXOs are created (0.5 BTC to Bob and 0.499 BTC change to Alice), with 0.001 BTC fee to the miner."
sources:
  - { label: "Bitcoin developer documentation", url: "https://developer.bitcoin.org/reference/transactions.html" }
  - { label: "ChainQuery - inspect any block or transaction yourself", url: "https://chainquery.com" }
  - { label: "Bitcoin Wiki - block protocol spec", url: "https://en.bitcoin.it/wiki/Block" }
  - { label: "Mastering Bitcoin (Andreas Antonopoulos, CC-BY-SA)", url: "https://github.com/bitcoinbook/bitcoinbook" }
---

> **你将走向何方:** 你将能跟踪一笔交易从"点击发送"到"不可逆转"的全过程。你会理解内存池、手续费、区块和矿工到底在干什么,并拥有一个足够具体的思维模型,让你能推理比特币,而不只是信仰它。

## 1. 发送按钮

Alice 有 1 BTC。她想给 Bob 发 0.5 BTC。她打开钱包,输入 Bob 的地址,填金额,选手续费,点发送。

几秒后,Bob 的钱包显示收到付款,状态是"未确认"。大约十分钟后,变成"1 次确认"。再过一小时左右,变成"6 次确认"——实际上不可撤销了。

这一章就是讲中间发生了什么。我们一层一层来。读完之后,你能在餐巾纸上画出来。

## 2. 没有余额这回事

这是大多数人搞错的第一个概念:

**比特币不追踪账户余额。** 没有任何地方有一行写着 *"Alice: 1.00000000 BTC."* 那不是账本做的事。

账本追踪的是**交易**——每笔交易创造一些**输出**,这些输出以后可以被花费。一个*未花费*的输出(UTXO,"unspent transaction output",即未花费交易输出)是唯一存在的东西。你的"余额"只是你的钱包能花费的所有 UTXO 的总和。

一个有用的思维模型:比特币**像现金,不像银行账户**。

你在咖啡店用 5 美元钞票付 4.30 美元,你不会跟收银员说"从我那 5 美元里扣 4.30"。你递过去一整张钞票,收银员找给你 0.70 美元的*新*零钱。你钱包里装的东西和之前不一样了。

UTXO 就是这么工作的。Alice 的"1 BTC"可能实际上是一个价值 1 BTC 的 UTXO,或者两个 0.5 BTC 的 UTXO,或者 100 个 0.01 BTC 的 UTXO,任何组合都行。钱包帮你隐藏了区别。链没得选。

这听起来像个怪癖。实际上它是其他一切的基础。

## 3. 交易的解剖

Alice 给 Bob 的交易有三个部分:

- **输入。** 指向 Alice 当前控制的 UTXO 的引用。每个输入就是"我要花费这个特定过去交易的这个特定输出"。每个输入包含一个加密签名——证明 Alice 拥有被授权花费那个 UTXO 的私钥。
- **输出。** 比特币去哪。在 Alice 的例子里,两个输出:0.5 BTC 到 Bob 的地址,约 0.499 BTC 作为找零回到她自己。(找零去一个 Alice 钱包自动生成的*新*地址。)
- **手续费。** 输入减去输出后剩下的金额。这不是一个单独的字段——它就是你没拿回来当找零的那部分。矿工拿走它作为打包你交易的奖励。

在 Alice 的例子中,输入共 1.0 BTC,输出共 0.999 BTC,差的 0.001 BTC 就是手续费。

<figure>
  <img src="/diagrams/alice-pays-bob.svg" alt="Alice's 1.0 BTC UTXO is consumed by a transaction that creates two new UTXOs: 0.5 BTC to Bob and 0.499 BTC change to Alice at a new address. The remaining 0.001 BTC is the fee paid to the miner." />
  <figcaption>Alice 的 1.0 BTC UTXO 被整体消费。两个新 UTXO 被创造出来;0.001 BTC 的手续费就是输入和输出之间的差额。</figcaption>
</figure>

然后交易被**签名**——Alice 的钱包用她的私钥生成一个签名,证明她有权花费这些特定输入。签名不会泄露私钥。任何人都能验证它;只有 Alice 能创造它。

广播到网络的大约是 250 字节数据:输入、输出、签名、元数据。就这样。整笔交易占的字节数和一张缩略图差不多。

## 4. 内存池——候诊室

Alice 的钱包广播交易后,它先到她钱包连接的一个节点,节点再转发给它的对等节点,对等节点再转发给它们的对等节点。几秒之内,比特币网络上的每个节点都收到了 Alice 的交易,并把它存在自己的本地**内存池**(mempool)里——就是"memory pool"的简称——等待被挖矿的有效交易队列。

几个要注意的点:

- **内存池不是单一的全球事物。** 每个节点有自己的副本。它们几乎一样但不完全一样——东京的节点和圣保罗的节点可能在几秒内有略微不同的集合。最终会收敛。
- **内存池里的交易有效但未确认。** 每个节点已经检查过:签名有效,被花费的 UTXO 确实存在且未花费,数学对得上。任何检查失败,交易就被丢弃。
- **内存池按手续费率排序。** 矿工想最大化每个区块的收益,所以他们先挑手续费最高的交易。你的手续费决定你的排队位置。

你可以[亲自看实时内存池](https://chainquery.com/reports/data/mempool.json)——那是一个来自活比特币节点的 JSON 数据流,几秒更新一次。

## 5. 挖矿:区块是怎么造出来的

矿工就是一台运行专门软件的电脑,同时做两件事:

1. **组装候选区块。** 从内存池里挑出最有利可图的交易子集,加一笔 coinbase 交易(给自己支付区块奖励 + 累积手续费),构造区块头。
2. **用不同的 nonce 反复哈希区块头。** "nonce"就是一个数字——区块头里一个可以填入不同值的槽位。矿工每秒尝试万亿次,寻找一个哈希输出低于当前目标值的 nonce。

当矿工找到一个使哈希低于目标的 nonce,就广播区块。每个节点:

- 收到区块
- 验证哈希低于目标
- 验证区块中的每笔交易
- 把区块加到自己链的副本上
- 从内存池中移除这些交易
- 开始在这个新区块之上挖

这整条流水线——从"矿工找到 nonce"到"地球上每个节点都收到了区块"——只需几秒。区块到了。Alice 的交易在里面了。Bob 的钱包显示"1 次确认"。

## 6. 难度:自我调节的时钟

比特币的目标出块时间是 **10 分钟**。不是因为 10 分钟有什么特别,而是中本聪选的一个折中:长到区块有时间在全网络传播再出下一个,短到确认不用等太久。

但全网总算力一直在变。算力翻倍,区块就 5 分钟一个。减半,就 20 分钟一个。

为了保持平均 ~10 分钟出一个块,协议每 **2016 个区块**调整一次难度——大约每两周。如果前 2016 个区块花的时间不到两周,难度上升。超过两周,难度下降。调整是精确的:按实际时间与预期时间的比率缩放。

这是比特币中最精妙的机制设计。**没有人设定难度。** 没有委员会开会"加息"。网络每两周自动响应自身状况,永远如此。

你可以在实时节点数据上[看下一次难度调整倒计时](https://chainquery.com/reports/data/mining.json)。

## 7. 区块头和默克尔树

一个比特币区块有两部分:一个小区块头(80 字节)和一个包含所有交易的区块体(目前平均约 1.5 MB)。

区块头很紧凑。它包含:

- **版本号**——软件版本位
- **前一个区块的哈希**——把本区块和前一个连起来
- **默克尔根**(Merkle root)——一个 32 字节的哈希,汇总了区块体中的*每一笔*交易
- **时间戳**——矿工构造区块的时间
- **难度目标**——nonce 需要打败的哈希输出
- **Nonce**——矿工找到的那个数字

巧妙的部分是**默克尔根**。它是一棵二叉树的根:交易两两配对做哈希,然后哈希再两两配对,一路往上。最终结果是一个依赖于区块中每一笔交易的单一值。改任何一笔交易,默克尔根就变,区块哈希就变,链就断了。

<figure>
  <img src="/diagrams/merkle-tree.svg" alt="A binary Merkle tree. Eight transactions (TX1 through TX8) at the bottom are paired and hashed together to produce four intermediate hashes. Those four are paired and hashed again to produce two more. The final pair is hashed once more to produce the single Merkle root at the top. The block's 80-byte header contains only that root." />
  <figcaption>八笔交易,两两哈希直到一个根。改任何叶子,通往根路径上的每个哈希都会变。</figcaption>
</figure>

为什么这重要?因为只有 80 字节区块头的人,就拥有了所有交易的加密承诺,而不需要下载它们。这就是轻钱包(SPV)能工作的原因:它们只需下载默克尔路径——一小撮哈希——就能验证某笔特定交易在某个特定区块里,而不需要下载整个区块。

默克尔树就是那种你第一次看到会想"这也过度了吧"的想法。第一百次你会意识到,它恰好是恰到好处的杀伐。

## 8. 确认:为什么要等

Alice 的交易在区块 N 里。Bob 的钱包说"1 次确认"。

为什么要等更多?因为在概率性网络上,没有什么东西是真正终局的——只有*越来越*终局。

想象一个想撤销 Alice 付款的攻击者。他得:

1. 从 Alice 交易*之前*的区块分叉出一条替代链
2. 比世界其他地方挖真实链更快地挖这条替代链
3. 最终广播更长的链,让所有诚实节点切换

一个区块有可能做到——如果攻击者碰巧控制了足够算力,走运一次。**六个区块?几乎不可能。**

这是大致的概率数学,假设攻击者控制 30% 算力:

| 确认数 | 成功逆转概率 |
|---|---|
| 1 | ~17.5% |
| 2 | ~4.4% |
| 3 | ~1.2% |
| 4 | ~0.3% |
| 5 | ~0.1% |
| 6 | ~0.025% |

<figure>
  <img src="/diagrams/confirmations-stack.svg" alt="A chain of six Bitcoin blocks. The first block contains Alice's transaction; each subsequent block is a confirmation built on top. Below each block is the probability that a 30 percent attacker reverses the payment given that many confirmations, dropping from 17.5 percent at one confirmation to effectively 0 percent at six. A use-case axis above maps small purchases (t-shirt) on the left to large purchases (house) on the right; a time axis below shows roughly ten minutes per block, with the full chain settling in about an hour." />
  <figcaption>每增加一次确认,逆转概率大约下降一个数量级。六次之后,概率实际上为零——事实上不可逆。</figcaption>
</figure>

这就是为什么 6 次确认(大约一小时)是传统的"已结算"门槛。金额特别大可以等更久;买杯咖啡一次确认就够了。交易所通常要求 6 次。硬件钱包默认 6 次。

交易越深,撤销它的代价越天文。到 12 次确认,你需要连续两小时跑赢全球总算力。那不是"难",那是"16 年来没发生过"。

## 9. 链(和重组)

每个区块头包含前一个区块的哈希。这就是它是一条*链*而不只是一个列表的原因。改任何区块都会改变它的哈希,意味着下一个区块的"前一个哈希"不再匹配,意味着每个节点都会拒绝这个改动。

要有意义地篡改旧历史,你得从目标区块开始往后重建每一个区块——以现代算力,这大致是一个小国家自链启动以来的能源预算。越往回,越贵,几何级增长。

有时网络会*短暂地*在谁先出块上产生分歧——两个矿工几乎同时找到有效区块,网络不同部分看到不同的那个。这叫**重组**(reorg)。在一两个区块内自行解决:先获得下一个有效区块的链获胜,被孤立的区块变成"陈旧区块"(stale block)。只在陈旧区块中的交易回到内存池。

1-2 个区块的重组每年发生几次。超过 2 个的极其罕见。比特币历史上最深的意外重组是 2010 年的 4 个区块。之后再没发生过。

## 10. 验证而非信任

你不必因为任何人说的就相信以上任何内容。你可以运行一个**全节点**——软件下载整条链(目前约 600 GB),验证追溯到创世区块的每笔交易,并持续验证每个新区块,永远。

全节点验证:

- 每笔交易的每个签名
- 每个 UTXO 引用(这个输出真的存在吗?未花费吗?花费者被授权了吗?)
- 每个区块头(哈希低于目标吗?)
- 每条共识规则(没有双花,没有凭空造钱,没有违反规则)

如果矿工产出了一个无效区块——比如给自己支付超过时间表允许的数量——地球上每个全节点都会拒绝它。矿工的工作白费了。那个区块永远不会成为链的一部分。

这就是比特币"无需信任"的含义。不是含糊的"没人管",而是"每个参与者都能独立验证每条规则"。你不信任矿工,你不信任开发者,你甚至不用信任我。你运行软件,软件告诉你什么是真的。

一台笔记本电脑能运行全节点。一台树莓派能运行全节点。你不需要许可;你只需要软件和硬盘空间。第六章你将真正动手做。

> **提示:** 这一章有三件事要记住,其余都是细节。**第一:**没有余额,只有 UTXO。**第二:**挖矿是一个时钟加一个安全预算。**第三:**链可以被任何有电脑的人端到端验证。下一章你不再只是读比特币,你开始拥有它。
