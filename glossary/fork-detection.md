---
title: "Fork Detection"
slug: fork-detection
draft: false
updated: "2026-10-09"
shortDefinition: "Monitoring one's node or network for any unexpected chain splits or contentious forks to stay on the desired chain."
keyTakeaways:
  - "Alerts you if the chain diverges into separate forks"
  - "Helps miners and users ensure they track the main chain"
  - "Critical in periods of contentious upgrades or accidental splits"
sources:
  - { label: "bitcoin-data/stale-blocks - public dataset of stale blocks (between 28 and 93 a year from 2022 through 2025, as of October 2026)", url: "https://github.com/bitcoin-data/stale-blocks" }
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - blockchain
  - chain-split
  - corrupted-chain-state
  - fork
  - fork-watcher
  - reorg-reorganization
liveWidget: ~
---

Fork detection is the practice of monitoring for unexpected chain splits - times when the network produces two or more competing chains, intentionally or not.

The kinds of forks that get detected:

- **Routine 1-block reorgs.** Near-simultaneous block finds leave dozens of stale blocks a year (between 28 and 93 a year from 2022 through 2025 in the bitcoin-data/stale-blocks dataset), and 2-block reorgs are rare. Resolved automatically within a block or two; no operator intervention needed.
- **Software-bug forks.** Two versions of node software disagree about whether a block is valid, and each follows a different chain. Rare. The March 2013 fork documented in [BIP 50](/glossary/bip-50) is the canonical example: older nodes rejected a block that newer ones accepted, and the network was split for nearly eight hours. The full account is in [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork).
- **Activation forks.** A soft-fork or hard-fork rule change activates, and not all nodes upgrade. Intentional but managed via signaling thresholds and warning periods.
- **Contentious hard forks.** A faction deliberately changes consensus rules. The 2017 Bitcoin Cash split is the example.

How fork detection works in practice:

- **Bitcoin Core's built-in warnings.** `getblockchaininfo` exposes a `warnings` field that surfaces unusual chain conditions: unexpected high-difficulty competing chains, unknown soft-fork bits set in many recent blocks, etc.
- **Cross-source comparison.** Compare your node's tip hash to multiple block explorers (mempool.space, blockstream.info, Bitaroo, etc.) plus a few trusted peers. If they disagree at any depth, investigate.
- **Forkmonitor.info.** A dedicated public service that runs many Bitcoin node implementations side-by-side and alerts on divergence. The canonical fork-watcher service.

Who needs this:

- **Exchanges, custodians, payment processors.** Confirmation logic depends on being on the correct chain. Freeze deposits or withdrawals if the chain forks.
- **Miners.** Mining on a minority fork wastes hashing power.
- **Large on-chain transactions.** Wait for deeper confirmations during any suspected fork event.

Most users never see this in practice. Bitcoin Core handles routine reorgs transparently. The discipline matters for operators of high-value systems where "the wrong chain" would be expensive.
