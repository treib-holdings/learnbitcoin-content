---
title: "Payout Settlement Griefing (PSG)"
slug: payout-settlement-griefing
linkText:
  - "payout settlement griefing"
draft: false
published: "2026-11-11"
shortDefinition: "An attack on a decentralized mining pool that leaves the mining alone and goes after the payouts, making them slower, more expensive or less certain until miners leave. The term comes from a November 2026 post on Delving Bitcoin."
keyTakeaways:
  - "The target is the step where miners get paid. The pool can find blocks at exactly the expected rate and still lose its miners"
  - "It works because miners have bills due every month, so a pool that pays late or pays less than its rivals cannot keep them"
  - "Most forms rely on one miner posing as many, which a pool with no operator has no way to detect"
  - "The best-known form is the rich list attack, where a large miner crowds small miners out of the block's payout slots"
sources:
  - { label: "7d5x9 - Decentralized Coinbase Payout Protocols (DCPP): A Framework for Discussion (Delving Bitcoin, 11 November 2026): the post that names payout settlement griefing and describes each example given here", url: "https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060" }
relatedTerms:
  - rich-list-attack
  - decentralized-coinbase-payout-protocol
  - p2pool
  - mining-pool
  - pooled-mining
  - coinbase-transaction
  - griefing-attack
  - anti-sybil-mechanism
  - payment-channel
  - mining-centralization
liveWidget: ~
---

Payout settlement griefing (PSG) is a way to attack a decentralized [mining pool](/glossary/mining-pool) without interfering with its mining. The attacker goes after the step where miners get paid, and makes payouts slower, more expensive or less certain to arrive.

It can work because miners have bills. Power, hosting and hardware payments come due whether or not the pool has paid out. A pool that pays late, or pays a little less than its rivals after costs, loses its miners even if it finds blocks at exactly the rate its hash power predicts.

The name comes from a post on the Delving Bitcoin forum in November 2026, by an author writing as 7d5x9. The post is about [decentralized coinbase payout protocols](/glossary/decentralized-coinbase-payout-protocol), the rules by which a pool with no operator pays its miners straight from the [coinbase transaction](/glossary/coinbase-transaction) of each block it finds. It starts from one of the main reasons the original [P2Pool](/glossary/p2pool) failed: giving every miner their own output in the coinbase stops working once the pool has many miners. Every workaround the post looks at closes one gap and opens another, and it uses PSG as the name for the whole family of attacks on those gaps.

The forms it describes:

- **The [rich list attack](/glossary/rich-list-attack).** If a block has room to pay only the largest contributors, a large miner splits into many accounts and takes the places small miners would have had. The post calls this the most potent form.
- **Flooding a payment hub.** In a 2017 design by Chris Belcher, a hub pays each miner through a [payment channel](/glossary/payment-channel). A miner posing as hundreds or thousands of small ones forces the hub to open and fund a channel for each.
- **Taking over the signing group.** In Braidpool's design the pool's rewards sit in a single output, signed for by a two-thirds group of the miners who found its recent blocks. Miners holding enough of that group "can redirect payouts arbitrarily".
- **The poison pill.** Some designs put many small payouts into one shared output and count on a market maker to buy the small claims and collect them in a single cheap transaction. The attacker spreads accounts through that structure, sells all but one claim in each part of it, and refuses to cooperate with the last. The market maker then has to pay the full on-chain cost for every part, and charges small miners for that risk in the price it offers them.

Nearly all of these depend on accounts being free. A pool with no operator cannot tell one miner from a hundred accounts run by the same miner, which the post calls identity laundering. Bitcoin itself answers fake identities with proof of work (see [anti-Sybil mechanism](/glossary/anti-sybil-mechanism)), but inside a pool, splitting hash power across accounts costs nothing extra.

The word griefing is borrowed. On the Lightning Network a [griefing attack](/glossary/griefing-attack) ties up other people's funds without earning the attacker anything directly, and the pattern here is the same: the attacker gains little and everyone else pays more.

The post closes with a question it leaves open. An attacker with real hash power could instead join the pool and quietly throw away any winning blocks it finds, which is called block withholding. So who would mine honestly and grief the payouts? As of November 2026 nobody had answered that in the thread. The term itself is days old and comes from a single forum post, so its meaning may still shift.
