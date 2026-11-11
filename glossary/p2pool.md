---
title: "P2Pool"
slug: p2pool
linkText:
  - "P2Pool"
draft: false
published: "2026-11-11"
shortDefinition: "A Bitcoin mining pool with no operator, announced by Forrest Voight in June 2011. Miners ran their own nodes, kept score on a shared chain of 'shares', and were paid directly in the coinbase transaction of every block the pool found. Its last release was in 2017, and newer projects are trying to rebuild the idea."
keyTakeaways:
  - "Nobody held the miners' coins. Each block the pool found paid every recent contributor straight to their own address"
  - "Miners kept score on a 'share chain', a small blockchain of their own with a new share about every 30 seconds"
  - "Each P2Pool node ran beside a full Bitcoin node and decided for itself which transactions to mine"
  - "It could not grow. More miners meant more and smaller payouts crowding the coinbase, and a higher bar for a small miner to score at all"
  - "The last release, 17.0, came out in August 2017. As of November 2026, P2Poolv2 and Braidpool are attempts to rebuild it"
sources:
  - { label: "forrestv - p2pool: Decentralized, DoS-resistant, Hop-Proof pool (BitcoinTalk, thread started 17 June 2011): the announcement, the project's own description, and the notice for release 17.0 dated 26 August 2017", url: "https://bitcointalk.org/index.php?topic=18313.0" }
  - { label: "Bitcoin Wiki - P2Pool (read November 2026; the project's README names it as the official wiki): the share chain, the last 8,640 shares, the payout rule, 0.5% to the block finder, stale shares, the History section", url: "https://en.bitcoin.it/wiki/P2Pool" }
  - { label: "p2pool/p2pool - p2pool/networks/bitcoin.py: SHARE_PERIOD = 30 seconds, a chain of 8,640 shares, payouts spread over three blocks' worth of work", url: "https://github.com/p2pool/p2pool/blob/master/p2pool/networks/bitcoin.py" }
  - { label: "p2pool/p2pool - p2pool/data.py: 99.5% of the reward by recent work, 0.5% to the block finder, and a coinbase limited to the 4,000 largest payouts ('block length limit, unlikely to ever be hit')", url: "https://github.com/p2pool/p2pool/blob/master/p2pool/data.py" }
  - { label: "p2pool/p2pool - p2pool/work.py: a miner whose expected payout per block is under the dust threshold (0.001 BTC, set in p2pool/bitcoin/networks/bitcoin.py) is given a harder share target", url: "https://github.com/p2pool/p2pool/blob/master/p2pool/work.py" }
  - { label: "p2pool/p2pool - commit history of the main branch: the last commit is dated 19 September 2018", url: "https://github.com/p2pool/p2pool/commits/master" }
  - { label: "windpath - post 13795 in the P2Pool thread on BitcoinTalk (24 November 2015): what a jump in the pool's hash power would do to its existing miners", url: "https://bitcointalk.org/index.php?topic=18313.msg13057899#msg13057899" }
  - { label: "P2Poolv2 wiki - P2Pool vs P2Poolv2 (read November 2026): the original's four main problems as the successor project sees them, and what it changes", url: "https://github.com/p2poolv2/p2poolv2/wiki/P2Pool-vs-P2Poolv2" }
  - { label: "7d5x9 - Decentralized Coinbase Payout Protocols (DCPP): A Framework for Discussion (Delving Bitcoin, 11 November 2026): names P2Poolv2 and Braidpool as projects reviving the idea, and describes Braidpool's payout design", url: "https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060" }
  - { label: "p2pool.org - Decentralized Bitcoin Mining (a steward page for the domain, kept by the person who runs this site; last updated May 2026): what P2Pool was, why it stopped being viable, and the projects working toward decentralized mining since", url: "https://p2pool.org/" }
relatedTerms:
  - mining-pool
  - pooled-mining
  - pool-hopping
  - coinbase-transaction
  - rich-list-attack
  - payout-settlement-griefing
  - mining-centralization
  - dust
  - full-node
  - block-reward
sameAs:
  - "https://en.bitcoin.it/wiki/P2Pool"
  - "https://github.com/p2pool/p2pool"
liveWidget: ~
---

P2Pool is a Bitcoin [mining pool](/glossary/mining-pool) with no operator. Forrest Voight announced it on the BitcoinTalk forum on 17 June 2011, and it began testing on the live network a month later. In an ordinary pool a company collects each block reward and pays the miners afterwards. In P2Pool the miners were paid by the block itself, so nobody ever held their coins.

A miner ran the P2Pool software beside their own [full node](/glossary/full-node), and the P2Pool nodes formed a peer-to-peer network of their own. Miners who did not want to run one could point their machines at a public node run by somebody else. Together the nodes kept a second, much smaller blockchain called the share chain. A share is a block that would be a valid Bitcoin block except that it only meets an easier difficulty target. The share chain adjusted that target so that somebody in the pool found a share about every 30 seconds, and each node kept only the latest 8,640 of them, three days' worth.

Each share carried a ready-made [coinbase transaction](/glossary/coinbase-transaction) that paid the miners who had found the recent shares before it, in proportion to their work. Now and then a share was also good enough to meet Bitcoin's own target. That share was a real Bitcoin block, and its coinbase paid everyone at once, straight to their own addresses. The miner who found it received an extra 0.5 percent of the reward, there to discourage anyone from keeping a winning block back, and the other 99.5 percent was divided by recent work.

This design removed several things a miner otherwise has to trust. No operator could run off with the pool's funds or quietly underpay, because no funds were ever held. There was no central server to knock offline. Each node built its own blocks, so no single operator chose which transactions the pool mined. And because the score counted only recent shares, [pool hopping](/glossary/pool-hopping) gained nothing, which is the "Hop-Proof" in the title of the announcement thread.

The same design set its limits.

- **Lost shares.** A chain that moves twenty times faster than Bitcoin's leaves little time for a share to reach everyone. Shares that arrived late did not count, and miners with slower connections lost more of them than the rest.
- **A rising bar.** The more hash power the pool had, the harder each share was to find. A small miner could go a long time without finding one, and a miner with no share among the recent ones was paid nothing from a block.
- **Crowded payouts.** Every miner's payout was a separate output in the coinbase, taking up block space, and the more miners there were, the smaller each payout got. To keep payouts from turning into [dust](/glossary/dust), the software made a small miner's shares harder to find, so that any share it did find would be worth at least 0.001 BTC when the pool found a block. The small miner's payouts stayed spendable and came less often. The code also limited a coinbase to the 4,000 largest payouts, with a comment that the limit was "unlikely to ever be hit".

The operator of a public node described the bind in the project's thread in November 2015: "If 100 PH/s was pointed to P2Pool today most (if not all) of the existing miners would see a huge spike in variance, and a large reduction in payout." (That operator now runs this site.) Pooling exists to smooth out a miner's income, and a pool can only do that in proportion to its size, so a pool that punishes its own growth cannot do the job well. The P2Poolv2 project's comparison says the same about the payouts: paying miners out of the coinbase put hard economic limits on how large the pool could grow.

The last release, 17.0, came out in August 2017 and made P2Pool compatible with SegWit. The last change on the main branch of its code is dated September 2018.

The idea has outlived the software. As of November 2026 at least two projects are trying to rebuild it. P2Poolv2 is a rewrite that lets a share credit other shares found at about the same time, so fewer are wasted, and pays only the largest miners in the coinbase while smaller miners sell their shares for bitcoin. Braidpool collects the whole reward in one output that a large group of its miners must sign for together. Neither has settled how a pool with no operator pays thousands of small miners out of one coinbase transaction without opening a new way to cheat them. The attacks on that step now have names of their own: [payout settlement griefing](/glossary/payout-settlement-griefing) and the [rich list attack](/glossary/rich-list-attack).

See [Mining rabbit hole section 8](/rabbit-hole/mining) for where mining pools stand today.
