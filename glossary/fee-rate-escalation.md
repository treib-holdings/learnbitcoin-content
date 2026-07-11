---
title: "手续费率升级"
slug: fee-rate-escalation
draft: false
shortDefinition: "因内存池严重拥堵导致的交易手续费飙升，引发对区块空间的竞价战。"
keyTakeaways:
  - "在突发交易激增或内存池峰值期间发生"
  - "鼓励用户延迟低优先级交易或使用闪电网络"
  - "竞价战可能短暂将手续费推到很高水平"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

手续费率升级是区块空间需求超过供应时发生的情况。内存池充满未确认交易；矿工选每 vByte 手续费最高的；所有人竞价以求进入。

比特币大约每 10 分钟产出一个区块，每个区块有效上限约 400 万重量单位（约 1.5-2 MB 的典型交易数据）。该上限由共识固定，不在负载下扩展。当交易提交率超过区块产出率时，内存池增长，下一区块（或接下来几个区块）确认的手续费底线攀升。

历史手续费飙升：

- 2017 年 12 月牛市：手续费短暂突破每笔交易 50 美元以上。
- 2021 年 4-5 月牛市：持续数周 100+ sat/vbyte。
- 2022 年 12 月至 2024 年 Ordinals/铭文时代：铭文铸造造成的持续基线拥堵；周期性飙升至数百 sat/vbyte。
- 减半后时期（特别是 2020 年 5 月和 2024 年 4 月）：矿工补贴收入下降、网络调整时的短暂升级。

手续费升级期间你可以做什么：

- 等待。手续费升级通常是自我修正的。随着手续费攀升，边际用户退出，内存池在几小时或几天内清空。
- 使用闪电网络。链下支付不竞争相同的区块空间。
- 使用 [Replace-by-Fee](/glossary/replace-fee-rbf) 加价卡住的交易。
- 批量。一笔交易多个接收者摊销手续费开销。
- 使用 Taproot。Schnorr 签名和密钥路径 Taproot 花费比基于 ECDSA 的等价物略小。

基础层优先考虑手续费而非吞吐量是一种特性。这使比特币的区块大小上限在政治上可行，并给闪电网络空间成为真正的高量支付轨道。
