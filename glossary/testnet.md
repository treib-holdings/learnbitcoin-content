---
title: "Testnet"
slug: testnet
draft: false
shortDefinition: "A Bitcoin network clone with valueless coins, used by developers to test code without risking real BTC."
keyTakeaways:
  - "Public environment for safe experimentation with new features"
  - "Testnet BTC is intentionally worthless to avoid speculation"
  - "Occasionally prone to disruptions since difficulty adjustments vary widely"
sources: []
relatedTerms:
  - bitcoin-core
  - block-subsidy
  - coinbase-transaction
  - genesis-block
  - mainnet
  - signet
liveWidget: ~
---

Testnet is a public Bitcoin-protocol network that runs Bitcoin's consensus rules with intentionally worthless coins. It exists for developers and operators to test wallets, transactions, and node configurations without risking real [mainnet](/glossary/mainnet) BTC.

Testnet currently runs as **testnet4** (the third reset, activated 2024). Earlier versions (testnet, testnet3) accumulated enough abandoned hash power and abuse that they were periodically retired and replaced with fresh chains. The current testnet4 has:

- **Free coins from faucets.** Various sites give out small amounts of testnet BTC to anyone who asks. They're effectively worthless.
- **A separate magic genesis block.** Testnet chains are not the same as mainnet; transactions and addresses are not interoperable.
- **A modified difficulty rule.** If 20 minutes pass without a block, difficulty drops to the minimum so the chain doesn't stall during low-activity periods. Mainnet has no such escape hatch.

The drawbacks of testnet:

- **It's chaotic.** Difficulty swings wildly, blocks can come in bursts or droughts, abusive actors spam it. You can't rely on testnet behavior to predict mainnet behavior.
- **Test BTC has occasionally become traded.** Despite being officially worthless, scammers periodically try to sell testnet BTC to confused buyers, or use it for proof-of-funds scams.
- **Not appropriate for security-sensitive testing.** If you want to test a high-stakes upgrade under realistic adversarial conditions, [Signet](/glossary/signet) is usually a better choice.

For most casual development - "does my wallet work, can I broadcast a transaction, what does fee handling look like" - testnet is fine. For anything more serious, look at Signet or a private regtest network.
