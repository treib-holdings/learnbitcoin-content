---
title: "BIP 39（助记词）"
slug: bip-39
draft: false
shortDefinition: "2013 年将钱包种子编码为 12-24 个英文单词的标准，可选密码提供额外保护。"
keyTakeaways:
  - "将 128-256 位熵编码为 2048 词表中的 12-24 个单词"
  - "可选密码从相同单词产生不同钱包"
  - "被普遍采用；钱包备份种子的标准方式"
sources: []
relatedTerms:
  - bip-32
  - bip-bitcoin-improvement-proposal
  - mnemonic-entropy-bits
  - mnemonic-password
  - seed-phrase
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0039"
liveWidget: ~
---

BIP 39 由 Marek Palatinus、Pavol Rusnak、Aaron Voisine 和 Sean Bowe 于 2013 年 9 月撰写，定义了比特币钱包如何将其种子编码为 12 到 24 个普通英文单词序列。同一构造被所有主流现代比特币钱包使用。

数学：

1. 从 128、160、192、224 或 256 位密码学熵开始。
2. 附加 SHA-256 派生的校验和（熵 / 32 位长）。
3. 分成 11 位组，在 2048 词 BIP 39 词表中查找每个组。

结果是 12、15、18、21 或 24 个单词的短语。12 个单词编码 128 位熵；24 个单词编码 256 位（参见[助记词熵位](/glossary/mnemonic-entropy-bits)了解完整阶梯）。两者都远超暴力破解范围；选择是偏好问题。硬件钱包通常默认 24 个。

要获得实际钱包种子（[BIP 32](/glossary/bip-32)派生的输入），助记词通过 PBKDF2-HMAC-SHA512 处理，2048 次迭代，可选密码作为盐。传入空密码得到一个钱包；传入非空密码从相同单词得到完全不同的钱包。这个可选[密码](/glossary/mnemonic-password)有时被称为"第 25 个词"。

BIP 39 为什么重要：

- **人类友好的备份。**24 个单词的列表比 64 个十六进制字符更容易准确写下、转录和验证。
- **错误检测。**校验和在加载时捕获几乎所有转录错误，所以拼写错误会快速失败而非静默打开一个不同的（可能是空的）钱包。
- **跨钱包可移植性。**在任何兼容 BIP 39 / BIP 32 的钱包中恢复 BIP 39 种子得到相同密钥。
- **多语言词表。**词表以英语、日语、韩语、西班牙语、法语、意大利语、捷克语、葡萄牙语和中文（简体和繁体）发布。数学相同，词语本地化。

英语词表经过精心选择：2048 个单词（恰好每个 11 位），每个在前四个字母内唯一（所以半个单词也能明确解析），没有容易混淆的对，没有冒犯性词汇。它是加密货币中部署最广泛的助记标准，遥遥领先。

规范：[BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)。
