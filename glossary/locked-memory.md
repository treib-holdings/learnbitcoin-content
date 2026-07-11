---
title: "锁定内存"
slug: locked-memory
draft: false
shortDefinition: "无法被交换到磁盘的内存页，保护私钥不被写入持久存储。"
keyTakeaways:
  - "防止私钥落入交换文件"
  - "为敏感钱包数据增加保护层"
  - "依赖操作系统支持和正确配置"
sources: []
relatedTerms:
  - bitcoin-core
  - hardware-security-module-hsm
  - private-key
  - seed-phrase
  - wallet
liveWidget: ~
---

锁定内存是告诉操作系统"不要将这些内存页换出到磁盘"的技术。对于 Bitcoin Core 和其他密码学软件，这意味着持有解密私钥或其他敏感秘密的页面留在 RAM 中，永远不会被写入交换文件或休眠镜像，后来的攻击者就无法从中恢复。

机制在 POSIX 系统（Linux、macOS、BSD）上是 `mlock()`，在 Windows 上是 `VirtualLock()`。Bitcoin Core 的[安全分配器](https://github.com/bitcoin/bitcoin/blob/master/src/support/lockedpool.h)在存储解密密钥材料时使用这些调用。

它防御的：

- **休眠文件**包含完整的内存快照，包括密钥。
- **交换文件**在内存压力下捕获未使用内存的页面。有磁盘访问权限的攻击者可能提取历史密钥材料。
- **从关机机器的取证恢复**，交换文件在重启后仍然存在。

它不防御的：

- **有足够权限的运行中攻击者**直接读取进程内存（root、内核漏洞、调试构建上的 ptrace）。
- **冷启动攻击**在内存内容消退前物理提取 RAM 内容。
- **硬件级漏洞**如 Intel SGX 侧信道或 DRAM rowhammer。

实际限制：

- 锁定内存使用物理 RAM 且不能换出，所以有有限的系统范围限制（Linux 上通常无 sudo 只有几 MB）。Bitcoin Core 的安全池使用几 KB；限制对钱包不是问题，但对大池应用可能是。
- 操作系统必须遵守锁。在内存受限系统上，内核可能通过 OOM 杀死进程而不是交换，所以实际效果是"交换不会出卖你"而非"内存不可战胜"。

这是那些在正常工作时不可见的小纪律之一。硬件钱包在更隔离的环境中做类似的事情；Bitcoin Core 在多进程操作系统上尽力而为。
