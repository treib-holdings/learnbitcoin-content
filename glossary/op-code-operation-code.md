---
title: "操作码（OP Code）"
slug: op-code-operation-code
draft: false
shortDefinition: "比特币脚本语言中的指令（如 OP_CHECKSIG），定义交易验证逻辑或条件。"
keyTakeaways:
  - "定义必须成功才能使花费有效的逻辑"
  - "有限的指令集以确保安全和确定性"
  - "Taproot 等扩展在现有脚本能力上扩展"
sources: []
relatedTerms:
  - bip-119-ctv
  - bitcoin-script
  - checktemplateverify-ctv
  - covenants
  - opreturn
  - script
  - scriptless-scripts
sameAs:
  - "https://en.bitcoin.it/wiki/Script"
liveWidget: ~
---

操作码（opcode）是[比特币脚本](/glossary/bitcoin-script)中的单条指令。比特币的脚本语言是基于栈的：操作码将值压入栈、从栈弹出值、操作栈、执行检查或有条件执行分支。如果脚本执行到栈顶为非空、非假值，则脚本"成功"。

主要操作码类别：

- **栈操作：** `OP_DUP`、`OP_DROP`、`OP_SWAP`、`OP_PICK`、`OP_ROLL` 等。
- **算术：** `OP_ADD`、`OP_SUB`、`OP_MUL`（当前禁用）、比较等。
- **哈希：** `OP_HASH160`、`OP_HASH256`、`OP_SHA256`、`OP_RIPEMD160`。
- **签名检查：** `OP_CHECKSIG`、`OP_CHECKMULTISIG`、`OP_CHECKSIGVERIFY`。
- **锁定时间检查：** [`OP_CHECKLOCKTIMEVERIFY`](/glossary/checklocktimeverify-cltv)、[`OP_CHECKSEQUENCEVERIFY`](/glossary/checksequenceverify-csv)。
- **条件：** `OP_IF`、`OP_NOTIF`、`OP_ELSE`、`OP_ENDIF`。
- **常量和特殊：** `OP_0` 到 `OP_16`、`OP_RETURN`、`OP_NOP`。

一些*曾经*存在于比特币脚本中的操作码已被中本聪或后续开发者出于安全原因**禁用**——`OP_CAT`、`OP_MUL`、`OP_DIV`、`OP_LSHIFT` 等。其中一些（ notably `OP_CAT`）是正在进行的重新启用辩论的主题，因为它们可以启用对金库和其他构造有用的额外合约结构。

操作码集是有意有限的。比特币脚本没有循环、没有跳转到任意地址、没有图灵完备的通用计算。这是刻意的安全权衡：更丰富的语言会创造更多攻击面、更难的验证以及通过昂贵脚本进行拒绝服务的可能性。比特币窄范围的操作码集使验证可预测且廉价。

新操作码通过[软分叉](/glossary/soft-fork)添加，通过重新利用先前禁用或 NOP 操作码。CLTV（BIP-65）和 CSV（BIP-112）就是这样添加的——它们接管了先前无意义的 `OP_NOP` 槽位。未来如 CTV（[BIP-119](/glossary/bip-119-ctv)）的添加将遵循相同模式。

请参阅[比特币脚本](/glossary/bitcoin-script)了解操作码如何组合成花费条件的更广泛图景。
