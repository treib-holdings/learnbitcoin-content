---
title: "Testnet"
slug: testnet
draft: false
updated: "2026-10-15"
shortDefinition: "A Bitcoin network clone with valueless coins, used by developers to test code without risking real BTC."
keyTakeaways:
  - "Public environment for safe experimentation with new features"
  - "Testnet BTC is intentionally worthless to avoid speculation"
  - "Occasionally prone to disruptions since difficulty adjustments vary widely"
sources:
  - { label: "BIP-94 - Testnet 4 (assigned 2024-05-27, status Deployed): a new test network to replace Testnet 3; keeps the 20-minute exception, under which a block more than 20 minutes after the previous one must use minimum difficulty except the first block of a difficulty period; fixes block storms and time warp; own genesis block and message start; quotes the proposal that testnet3 coins were being bought and sold and used for scammy airdrops", url: "https://github.com/bitcoin/bips/blob/master/bip-0094.mediawiki" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024): support for Testnet4 as specified in BIP94 added, selected with -testnet4; the intention is to phase out Testnet3 in an upcoming version", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core - src/chainparamsbase.cpp (master, October 2026): the -testnet option still selects the testnet3 chain, and its help text says support for testnet3 is deprecated and will be removed in an upcoming release, pointing users to -testnet4", url: "https://github.com/bitcoin/bitcoin/blob/master/src/chainparamsbase.cpp" }
  - { label: "Bitcoin Wiki - Testnet: four generations of testnet; testnet2 was the first reset, because people were starting to trade testnet coins for real money; testnet3 came with the 0.7 release and a new rule for the difficulty problem; if no block is found in 20 minutes the difficulty resets to the minimum for a single block", url: "https://en.bitcoin.it/wiki/Testnet" }
  - { label: "bitcoin.org Developer Examples - Testing Applications: on testnet the satoshis spent have no real-world value and some restrictions such as standard transaction checks are relaxed; a community faucet gives free testnet satoshis; regtest mode creates a private block chain where you choose when blocks are created", url: "https://developer.bitcoin.org/examples/testing.html" }
  - { label: "BIP-325 - Signet (assigned 2019-03-20): testnet is notoriously unreliable, with huge block reorgs, long gaps between blocks and sudden bursts; signet aims for a predictable amount of unreliability and suits integration testing by organizations such as exchanges", url: "https://github.com/bitcoin/bips/blob/master/bip-0325.mediawiki" }
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

Testnet currently runs as **testnet4** (the third reset, launched in 2024). Earlier versions (testnet, testnet2, testnet3) were replaced with fresh chains once their coins started trading for real money or their difficulty quirks made them unusable; Bitcoin Core still carries testnet3 but marks it deprecated, with removal planned for an upcoming release. The current testnet4 has:

- **Free coins from faucets.** Various sites give out small amounts of testnet BTC to anyone who asks. They're effectively worthless.
- **A separate genesis block and network magic.** Testnet chains are not the same as mainnet; transactions and addresses are not interoperable.
- **A modified difficulty rule.** If 20 minutes pass without a block, the next block uses minimum difficulty so the chain doesn't stall during low-activity periods (the first block of each difficulty period must still be mined at the real difficulty, and testnet4 changed the retarget math so the exception can no longer trigger the block storms that plagued testnet3). Mainnet has no such escape hatch.

The drawbacks of testnet:

- **It's chaotic.** Difficulty swings wildly, blocks can come in bursts or droughts, abusive actors spam it. You can't rely on testnet behavior to predict mainnet behavior.
- **Test BTC has occasionally become traded.** Despite being officially worthless, testnet coins have been bought and sold, and scammers have run airdrop schemes on the chain; trading was what forced the very first reset.
- **Not appropriate for security-sensitive testing.** If you want to test a high-stakes upgrade under realistic adversarial conditions, [Signet](/glossary/signet) is usually a better choice.

For most casual development - "does my wallet work, can I broadcast a transaction, what does fee handling look like" - testnet is fine. For anything more serious, look at Signet or a private regtest network.
