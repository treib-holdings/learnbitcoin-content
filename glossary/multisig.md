---
title: "多签"
slug: multisig
draft: false
shortDefinition: "一种钱包设置，花费需要多个签名，因此没有单一密钥（或单一密钥持有者）能单独移动资金。"
keyTakeaways:
  - "花费需要 N 个共签者中的 M 个签名（如 2-of-3）"
  - "消除了单一种子的单点故障问题"
  - "标准模式：每个共签者密钥在不同设备上，通常在不同位置"
sources: []
relatedTerms:
  - hierarchical-multisig
  - interactive-multi-sig
  - k-k-multisig
  - hdm-multi-signature-hd-wallet
  - m-n
  - key-aggregation
  - musig
  - musig2
  - partial-signature
  - psbt
  - quorum-signatures
  - shamir-secret-sharing
sameAs:
  - "https://en.wikipedia.org/wiki/Cryptocurrency_wallet"
  - "https://www.wikidata.org/wiki/Q40186999"
  - "https://en.bitcoin.it/wiki/Multi-signature"
liveWidget: ~
ogImage: "/diagrams/og/multisig.png"
ogImageAlt: "BITCOIN MULTISIG in large bold type, with the subtitle 'Threshold-of-keys, not single-key-of-failure.' The opening frame of LearnBitcoin's 35-second animated walkthrough of 2-of-3 multisig."
---

<figure>
  <video
    src="/videos/multisig.mp4"
    poster="/videos/posters/multisig.png"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="Animated walkthrough of a 2-of-3 multisig wallet. Three hardware keys appear in a row with a 'Threshold: 2 of 3' label and the caption 'Three different makers. A bug in one can't break the others.' A transaction signs with two keys and broadcasts. Loss scenario: Key B fades to gray with a 'lost' label; the other two keys still sign and the spend goes through. Theft scenario: a hooded figure grabs Key A, which turns green and is marked 'stolen'; the thief's attempt to sign alone halts at one of two signatures. Closing pillars: Multisig. Threshold-of-keys. Vendor-diverse."
  ></video>
  <figcaption>三把密钥。任意两把签名。丢失一把仍可花费。被盗一把仍无法花费。</figcaption>
</figure>

多签是一种钱包结构，输出需要多个签名才能花费，而不仅仅是一个。脚本编码"M of N 共签者必须签名"——你可能有三把共签者密钥（N=3），要求其中任意 2 把签名才能使花费有效（M=2）。这就是经典的 [2-of-3](/glossary/m-n)。

目的是消除普通单签钱包的单点故障问题。一个种子，任何人找到或复制它都能掏空你。2-of-3 多签分布在三个位置或三个设备上，攻击者需要同时攻破两把——一个难得多的门槛。

常见模式：

- **2-of-3 个人托管。** 一把密钥在家中的硬件钱包上，一把在托管服务或银行保险箱中，一把在信任的家庭成员或律师处。丢失任何一把都能恢复。偷到一把仍无法花费。严肃个人持有的甜蜜点。
- **3-of-5 机构。** 企业金库和大型托管机构的标准。可丢失两把，需要三把签名，通常与硬件安全模块配对。
- **2-of-2 闪电通道。** 每个闪电通道在技术上是你和通道伙伴之间的 2-of-2 多签输出。大多数用户看不到这一点；协议只是在底层使用多签作为通道的注资输出。

比特币在链上有两种表达多签的方式：

- **经典多签**（`OP_CHECKMULTISIG`，Taproot 之前）。封装在 P2SH 或 P2WSH 中。脚本在花费时在链上可见，因此观察者可以看到"这是一个 2-of-3 花费"。操作码设计上限 15 个共签者。
- **Taproot 多签**（2021 年后）。要么是脚本路径（MAST 树，可以支持更多共签者），要么使用 MuSig2 / FROST [密钥聚合](/glossary/key-aggregation)，花费看起来与单签 Taproot 输出完全相同。外部观察者根本看不出这是多签。隐私和手续费都改善。

签名流程使用 [PSBT](/glossary/psbt)。一个共签者构建交易、签名自己的部分、传给下一个，下一个添加签名，以此类推直到达到阈值。使用硬件钱包和 Sparrow、Nunchuk 或 Specter 等协调工具，这很直接但比单签更复杂。

何时使用多签：当价值证明运营复杂性合理时。对于小额余额，备份良好的单签硬件钱包比你会搞砸的多签更安全。对于你承受不起丢失且不会每天移动的金额，多签是正确答案。
