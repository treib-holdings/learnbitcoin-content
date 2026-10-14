---
title: "Miner"
slug: miner
draft: false
updated: "2026-10-13"
shortDefinition: "A participant using specialized hardware to find valid block hashes, securing the network and earning block rewards."
keyTakeaways:
  - "Searches for a block hash meeting network difficulty"
  - "Receives newly minted BTC (subsidy) plus transaction fees"
  - "Mostly large-scale ASIC operations in today's mining landscape"
sources:
  - { label: "Bitcoin.org Developer Guide - Mining: mining software builds a block header and sends it to an ASIC, which iterates through every nonce; solo mining keeps the whole block reward and fees with high variance, pooled mining shares them out for smaller, steadier payouts", url: "https://developer.bitcoin.org/devguide/mining.html" }
  - { label: "Bitcoin.org Developer Reference - Block Chain, serialized blocks: the transaction fees and block subsidy together are called the block reward; a coinbase transaction that spends more than the block reward is invalid", url: "https://developer.bitcoin.org/reference/block_chain.html" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 5 (2008): nodes accept a block only if all transactions in it are valid and not already spent", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report (April 2025): ASICs ushered in industrial-scale mining in specialised data centres; electricity is more than 80% of miners' cash operating expenses; miners are drawn to regions rich in hydropower and wind and tap stranded energy and flared natural gas; China's clampdown altered the global mining landscape", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
  - { label: "Sixth Tone - After Inner Mongolia Bitcoin Ban, Sichuan Mulls Mining Shutdown (May 28, 2021): many miners flocked to Sichuan hoping to cash in on the coming wet season's cheap hydropower", url: "https://www.sixthtone.com/news/1007595" }
  - { label: "mempool.space API - mining pool shares over the last year (read 13 October 2026: 52,377 blocks; Foundry USA 28.2%, AntPool 18.1%, F2Pool 12.6%, ViaBTC 9.7%; unknown 0.5%; the solo services Solo CK, Public Pool, Braiins Solo and SoloPool.com found 23 blocks between them)", url: "https://mempool.space/api/v1/mining/pools/1y" }
relatedTerms:
  - coinbase-transaction
  - cpu-mining
  - difficulty-retargeting
  - gui-miner
  - hash
  - hash-rate
  - merged-mining
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

In practice "miners" today are mostly industrial operations running purpose-built ASIC hardware by the warehouse, sited wherever electricity is cheapest (hydro in Sichuan during the wet season, back when China still allowed mining; flared gas at oil wells; stranded renewables with no other buyer). The hardware is specialized; the economics are razor-thin; with electricity typically more than 80 percent of a miner's cash operating costs, the margins live or die on the price of one kilowatt-hour.

Smaller actors still exist. Solo miners occasionally win a block on their own against lottery odds; the solo-mining services that cater to them pick up a couple of dozen blocks a year. Hobbyists run small rigs for the experience. Most production hash rate, though, flows through [mining pools](/glossary/mining-pool) - aggregators that bundle small contributors so each receives smooth payouts instead of waiting years for a solo block find.

Miners are not Bitcoin's rulers. The protocol is enforced by every full node, not by miners. Miners can choose *which valid transactions* to include in their blocks, but they can't change the rules. Any block that violates consensus (more than the allowed subsidy, an invalid signature, etc.) gets rejected by every honest node on Earth.

See the [Mining rabbit hole](/rabbit-hole/mining) for the full mechanism, and [Mining Pool](/glossary/mining-pool) for the centralization concerns around how miners actually organize.
