---
title: "输出描述符"
slug: output-descriptor
draft: false
shortDefinition: "一种人类可读的表示法，描述如何生成或观察特定比特币脚本/地址。"
keyTakeaways:
  - "简化了地址/脚本集的共享和管理"
  - "适用于只读钱包或复杂的多签设置"
  - "比旧的临时地址生成方法更清晰"
sources: []
relatedTerms:
  - bitcoin-core
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - p2wpkh-pay-witness-public-key-hash
  - psbt
  - taproot
sameAs:
  - "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md"
  - "https://bitcoinops.org/en/topics/output-script-descriptors/"
liveWidget: ~
---

输出描述符是一种紧凑文本格式，描述如何派生一组比特币脚本和地址。它用一种自包含的配方取代了临时的"原始地址"集合，钱包可以插入并开始观察或花费。

一个典型的描述符看起来像：

```
wpkh([d34db33f/84h/0h/0h]xpub6BosfCnifzxcF.../<0;1>/*)#cm5e6jrn
```

解码：

- `wpkh(...)`——脚本类型。这里是见证公钥哈希（P2WPKH，原生 SegWit）。
- `[d34db33f/84h/0h/0h]`——BIP 32 起点：主密钥指纹和用于到达此 xpub 的派生路径。
- `xpub6Bos...`——扩展公钥。
- `/<0;1>/*`——多路径：在 `/0/*`（接收）和 `/1/*`（找零）处派生子项，索引遍历所有整数。
- `#cm5e6jrn`——校验和，使拼写错误在导入时快速失败。

描述符为什么重要：

- **自描述。** 任何阅读描述符的人都可以派生相同的地址，无需带外约定如"我们使用了 BIP 84 账户 0 和 SegWit。"描述符显式编码了所有这些。
- **只读钱包。** 将描述符（无私钥）交给手机或笔记本电脑，它可以监控余额和构建未签名 PSBT。
- **多签协调。** 多签钱包由单个描述符描述，如 `wsh(sortedmulti(2,xpub_A/<0;1>/*,xpub_B/<0;1>/*,xpub_C/<0;1>/*))`。共签者导入相同描述符，自动同步。
- **工具互操作性。** Sparrow、Specter、Nunchuk、Bitcoin Core 和大多数现代钱包都接受描述符。通过复制一个字符串在工具间移动只读钱包。

Bitcoin Core 在 0.21（2021 年）中将描述符钱包设为默认，在 0.22 中对新钱包强制使用。旧式 `addmultisigaddress` 钱包管理方式已正式弃用，推荐使用描述符。

对于大多数用户，描述符是不可见的；钱包处理它们。对于多签设置、集成者和任何调试托管配置的人，它们是通用语言。
