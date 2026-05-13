---
title: "Miner"
slug: miner
draft: false
shortDefinition: "A participant using specialized hardware to find valid block hashes, securing the network and earning block rewards."
keyTakeaways:
  - "Searches for a block hash meeting network difficulty"
  - "Receives newly minted BTC (subsidy) plus transaction fees"
  - "Mostly large-scale ASIC operations in today's mining landscape"
sources: []
relatedTerms:
  - coinbase-transaction
  - cpu-mining
  - difficulty-retargeting
  - gui-miner
  - hash
  - hash-rate
  - hashpool
  - hidden-miner
  - merged-mining
  - pop-mining
  - miner-capitulation
  - mining
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-rig
  - mining-software
  - mining-subsidy
  - revenue-ths
liveWidget: ~
---

A miner is anyone running hardware that participates in Bitcoin's [proof-of-work](/glossary/proof-work-pow) - generating candidate [block headers](/glossary/block-header) and hashing them, trying to find one valid enough to propose to the network. In return, the miner collects the [block reward](/glossary/block-reward): newly minted BTC plus all the fees from transactions they include.

In practice "miners" today are large industrial operations running thousands of ASIC chips, sited near cheap electricity (hydro in Sichuan during the wet season, stranded gas in West Texas, geothermal in Iceland, off-peak nuclear in France). The hardware is specialized; the economics are razor-thin; the margins live or die on the cost of one kilowatt-hour.

Smaller actors still exist. Solo miners with one or two machines occasionally win blocks via lottery hardware. Hobbyists run small rigs for the experience. Most production hash rate, though, flows through [mining pools](/glossary/mining-pool) - aggregators that bundle small contributors so each receives smooth payouts instead of waiting years for a solo block find.

Miners are not Bitcoin's rulers. The protocol is enforced by every full node, not by miners. Miners can choose *which valid transactions* to include in their blocks, but they can't change the rules. Any block that violates consensus (more than the allowed subsidy, an invalid signature, etc.) gets rejected by every honest node on Earth.

See the [Mining rabbit hole](/rabbit-hole/mining) for the full mechanism, and [Mining Pool](/glossary/mining-pool) for the centralization concerns around how miners actually organize.
