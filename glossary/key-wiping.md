---
title: "密钥擦除"
slug: key-wiping
draft: false
shortDefinition: "从内存或存储中安全擦除私钥，使其无法被取证或恶意软件工具恢复。"
keyTakeaways:
  - "防止签名会话后的数据残留"
  - "对硬件钱包和安全多签设备至关重要"
  - "在物理或恶意软件访问时减少攻击面"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - hardware-security-module-hsm
  - key-generation-ceremony
  - key-rotation
  - key-split
  - paper-wallet
  - security
liveWidget: ~
---

密钥擦除是在内存（和持久存储）中覆盖私钥材料的做法，使其无法通过后续的取证分析、冷启动攻击或事后刮取设备的恶意软件来恢复。

在硬件钱包中，这是固件契约的一部分。Trezor、ColdCard、Jade、BitBox、Ledger 等设备仅在需要派生或签名时才解包种子，在受限的内存区域中完成工作，并在返回前覆盖该区域。恢复出厂设置时，存储种子的整个安全元件或闪存区域会被覆盖（而不仅仅是标记为删除）。

在通用软件中，情况更复杂。Bitcoin Core 的钱包加密尝试在锁定时清除敏感缓冲区，但它运行在多任务操作系统上，交换文件、内存压力和内核分页可能在应用不知情的情况下将缓冲区复制到磁盘。这是硬件钱包存在的理由之一：受控的执行环境使密钥擦除真正可执行。

实际目标是最小化密钥以解密状态存在于任何可恢复存储中的时间窗口。一个实现良好的硬件钱包在毫秒内签名并立即擦除，即使面对快速攻击者，暴露窗口也很短。而在通用计算机上输入种子进行签名操作则可能留下持续数月的痕迹。
