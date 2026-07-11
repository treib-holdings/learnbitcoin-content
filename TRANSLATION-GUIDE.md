# 翻译规范文档 — LearnBitcoin 中文版

## 总体原则

1. **目标读者**：对比特币感兴趣的普通中文读者，可能没有技术背景。语言要通俗、亲切、易懂。
2. **翻译风格**：意译为主，不是逐字翻译。保持原文的口语化、直接、有态度的风格。
3. **比特币专业性**：贴近比特币语境，用中文比特币社区的习惯表达。

## 术语处理规则

### 翻译为中文的常用词
- Hash → 哈希
- Public key → 公钥
- Private key → 私钥
- Signature → 签名
- Transaction → 交易
- Block → 区块
- Blockchain → 区块链
- Mining / Miner → 挖矿 / 矿工
- Node → 节点
- Wallet → 钱包
- Fee → 手续费
- Confirmation → 确认
- Mempool → 内存池
- Fork → 分叉
- Inflation → 通胀
- Deflation → 通缩
- Disinflation → 反通胀（通缩趋势）
- Custody → 托管
- Self-custody → 自托管
- Liquidity → 流动性
- Volatility → 波动性
- Bull market → 牛市
- Bear market → 熊市
- Spot → 现货
- Leverage → 杠杆
- Exchange → 交易所
- Address → 地址
- Seed phrase → 助记词
- Cold storage → 冷存储
- Hot wallet → 热钱包
- Hardware wallet → 硬件钱包
- Multisig → 多签
- Supply → 供应量
- Halving → 减半
- Block reward → 区块奖励
- Satoshis / sats → 聪（sat）
- Proof of Work → 工作量证明
- Consensus → 共识
- Decentralization → 去中心化
- Permissionless → 无需许可
- Censorship resistance → 抗审查
- Fungibility → 可替代性
- UTXO → UTXO（保留英文，但首次出现时解释"未花费交易输出"）
- Replay attack → 重放攻击
- Double spend → 双花

### 保留英文的专有名词
- SegWit
- Taproot
- BIP（Bitcoin Improvement Proposal）
- Bech32 / Bech32m
- P2PKH / P2SH / P2WPKH / P2WSH / P2TR
- Schnorr
- ECDSA
- RBF (Replace-By-Fee)
- CPFP (Child Pays For Parent)
- Lightning Network / Lightning（可翻译为"闪电网络"）
- HTLC
- PSBT
- Tor
- KYC
- ETF
- CME
- Mt. Gox
- Bitcoin Core
- Satoshi Nakamoto（可翻译为"中本聪"）

### 首次出现加注释的词
部分词在首次出现时，用括号或注释方式给出英文原文：
- 例："聪（sat，比特币的最小单位）"
- 例："减半（halving）"

## 格式要求

1. **YAML frontmatter**：title 翻译为中文，slug 保持英文不变，shortDefinition 和 keyTakeaways 翻译为中文。其他字段保持不变。
2. **Markdown/MDX 语法**：保持原有结构，标题层级、链接、图片、代码块等不变。
3. **代码和命令**：不翻译代码块中的内容。
4. **URL 和路径**：不翻译 URL 和文件路径。
5. **组件引用**：MDX 中的 import 和组件标签保持不变。
6. **ASCII 标点**：按 CONTRIBUTING.md 要求，使用 ASCII 直引号和直撇号，不用弯引号。中文内容用中文标点（。，！？等），但 YAML 中仍用 ASCII 标点。

## 内容完善要求

1. **修复明显错误**：拼写、语法、事实性错误在翻译时一并修复。
2. **补充中文读者需要的背景**：在涉及美国金融体系的内容处，可适当补充中国读者可能不熟悉的背景。
3. **保持数据准确**：所有数字、日期、百分比保持与原文一致。
4. **链接保持有效**：所有链接保持原样，不修改。

## 文件命名

- 文件名保持英文不变（slug 体系不变）
- 输出目录结构保持不变

## 高效翻译技巧

对于大量 glossary 文件，可以使用以下方式批量翻译：
1. 先用 exec 命令读取多个文件内容
2. 在一个回复中翻译多个文件并用 write 工具写入
3. 使用 shell 脚本辅助验证翻译是否完成（检查 title 字段是否包含中文字符）

### 验证脚本
```bash
# 检查哪些文件还没翻译（title 仍是英文）
for f in glossary/*.md; do
  title=$(grep '^title:' "$f" | head -1)
  if echo "$title" | grep -qP '[\x{4e00}-\x{9fff}]'; then
    echo "TRANSLATED: $f"
  else
    echo "UNTRANSLATED: $f"
  fi
done
```
