---
title: "Mainnet"
slug: mainnet
draft: false
shortDefinition: "The primary Bitcoin network where real BTC transactions occur and mining rewards have actual economic value."
keyTakeaways:
  - "Houses the 'real' BTC economy"
  - "Transactions are final and valuable, no free do-overs"
  - "Contrast with testnet, signet, or regtest for dev and testing"
sources: []
relatedTerms:
  - bitcoin-core
  - chain-split
  - consensus-parameter
  - full-node
  - genesis-block
  - signet
  - testnet
liveWidget: ~
---

Mainnet is the Bitcoin network - the one where real BTC moves, where real value is at stake, and where every block is part of the chain stretching back to [genesis](/glossary/genesis-block) on January 3, 2009.

When you "use Bitcoin," you're using mainnet. When you "run a Bitcoin node," it's a mainnet node unless you explicitly configured it otherwise. When you read about hash rate, supply, fees, or any number on this site, it's about mainnet.

What distinguishes mainnet from the alternatives:

- **Real economic value.** BTC on mainnet has market price. Bugs and mistakes here cost real money.
- **Real proof-of-work.** Mainnet is secured by ~700 EH/s of hash power. The other Bitcoin networks have a tiny fraction of that, and are not meaningfully secured against attacker hash rate.
- **Strict consensus rules.** Mainnet runs the full set of Bitcoin Core consensus rules, with no relaxations. Some test networks allow rule loosening for experimentation.

The other Bitcoin-protocol networks exist for developers and experimentation:

- **[Testnet](/glossary/testnet)** - public dev network with valueless coins.
- **[Signet](/glossary/signet)** - more stable test network with a signed block coordinator.
- **Regtest** - private local network for testing, blocks mined on demand.

None of these are mainnet. They all use different magic-number genesis blocks, so chains are not portable between them. A wallet configured for testnet cannot send to a mainnet address; the network IDs don't match.

If you're learning Bitcoin in 2026 and someone tells you to send real BTC to test something, you're on mainnet. Be careful.
