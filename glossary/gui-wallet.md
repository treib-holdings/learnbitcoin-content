---
title: "GUI 钱包"
slug: gui-wallet
draft: false
shortDefinition: "带有图形界面的比特币钱包，支持点击操作而非命令行使用。"
keyTakeaways:
  - "提供直观的可视化方式发送/接收 BTC"
  - "覆盖用户体验和安全模型的广泛范围"
  - "对非技术受众的大规模采用至关重要"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-dev-kit-bdk
  - custodial-lightning-wallet
  - custodial-wallet
  - deterministic-wallet
  - gui-miner
  - hierarchical-deterministic-wallet
  - penalty-transaction
  - wallet
  - wallet-import-format-wif
  - watch-only-wallet
liveWidget: ~
---

GUI 钱包是任何带有图形用户界面的比特币钱包：可点击按钮、地址二维码、交易历史视图。与需要用户输入命令或发送 JSON 的 CLI / RPC 专用钱包相对。

GUI 钱包类别：

- **Bitcoin Core（Qt 构建）。** 参考实现也附带 GUI 版本。验证完整链、管理钱包、通过菜单暴露大多数节点功能。运行全节点并想要在其上使用钱包的人的默认选择。
- **Specter Desktop、Sparrow、Nunchuk。** 专注于高级用户、硬件钱包支持、多签协调的桌面 GUI 钱包。建立在单独的 Bitcoin Core 节点（或 Electrum 协议后端）之上。Sparrow 尤其被广泛推荐用于严肃的自托管。
- **BlueWallet、Wallet of Satoshi 式移动钱包。** 基于手机的钱包，UX 简单。从非托管（BlueWallet、Phoenix、Mutiny）到托管（Wallet of Satoshi、Strike）。
- **硬件钱包配套应用。** Trezor Suite、Ledger Live、Foundation Envoy、Bitbox 应用。GUI 在电脑或手机上运行；签名在连接的硬件设备上发生。
- **轻量级客户端。** Electrum（原始）和各种 fork。连接到 Electrum 服务器而非运行全节点；设置更快但牺牲一些主权。

好的 GUI 钱包提供什么：

- 清晰的接收/发送流程和确认屏幕。
- 合理默认值的手续费估计。
- 地址簿/发送交易标签。
- 高级用户需要的币控制（Sparrow 在这方面是典范）。
- 适用时的硬件钱包配对。
- 多签和气隙签名的 PSBT 支持。

"GUI"不保证什么：

- **安全性。** 漂亮的界面不意味着底层密钥管理正确。一些 GUI 钱包有灾难性的安全历史（Electrum 钓鱼浪潮、各种恶意 fork）。
- **隐私。** 与第三方 Electrum 服务器通信的 GUI 钱包向该服务器泄露你的地址。自托管后端保留隐私；默认云后端设置不行。
- **自托管。** 一些 GUI 钱包是托管式的——流畅的 UI 掩盖了实际币在别人服务器上的事实。

对于 2026 年的大多数用户，正确的 GUI 钱包组合是：移动钱包用于零花钱（Phoenix 用于闪电网络，BlueWallet 用于链上）和桌面 GUI 如 Sparrow 配硬件钱包用于重要持有。
