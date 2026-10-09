---
title: "ASIC (Application-Specific Integrated Circuit)"
slug: asic-application-specific-integrated-circuit
draft: false
updated: "2026-10-09"
shortDefinition: "A specialized hardware chip designed to excel at a single task; Bitcoin ASICs do nothing but the SHA-256 hashing used in mining."
keyTakeaways:
  - "Purpose-built chips for Bitcoin mining"
  - "Drives industrial-scale mining operations"
  - "Raises centralization and energy usage concerns"
sources:
  - { label: "Michael Bedford Taylor - Bitcoin and the Age of Bespoke Silicon (2013): CPU, GPU, FPGA and first ASIC miners", url: "https://cseweb.ucsd.edu/~mbtaylor/papers/bitcoin_taylor_cases_2013.pdf" }
  - { label: "Michael Bedford Taylor - The Evolution of Bitcoin Hardware (IEEE Computer, September 2017)", url: "https://cseweb.ucsd.edu/~mbtaylor/papers/Taylor_Bitcoin_IEEE_Computer_2017.pdf" }
  - { label: "Bitmain support - S21 Pro specification (234 TH/s typical, 3,510 W, 15 J/TH)", url: "https://support.bitmain.com/hc/en-us/articles/31321354157593-S21-Pro-Specification" }
  - { label: "Cambridge Centre for Alternative Finance - Cambridge Digital Mining Industry Report (April 2025): 138 TWh, about 0.54% of global electricity; hardware market shares; 51% attack cost", url: "https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf" }
relatedTerms:
  - asic-resistance
  - asicboost
  - cpu-mining
  - hash-rate
  - miner
  - mining-algorithm
  - mining-rig
  - mining-software
sameAs:
  - "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit"
  - "https://www.wikidata.org/wiki/Q217302"
  - "https://en.bitcoin.it/wiki/ASIC"
liveWidget: ~
---

An ASIC - **A**pplication-**S**pecific **I**ntegrated **C**ircuit - is a chip designed to do exactly one thing extremely well. For Bitcoin, that one thing is SHA-256 [hashing](/glossary/hash). A mining machine packs many of these chips into one box. One model released in 2024 is rated at 234 trillion hashes per second on 3,510 watts. A high-end desktop CPU of 2011, an overclocked six-core Intel Core i7-990X, topped out around 33 million hashes per second. The 2024 machine is about seven million times faster.

The Bitcoin hardware progression went:

- **2009-2010:** CPU mining. Anyone with a laptop could find blocks.
- **2010-2013:** GPU mining. The first public GPU mining programs came out in September and October 2010, and hobbyists moved to graphics cards. A top card of the era hashed roughly 5 to 20 times faster than that high-end CPU.
- **2011-2013:** FPGA mining. Miners took up these reconfigurable chips in 2011. They cost more to buy than GPUs for the same hashing speed but were up to about five times more energy efficient. ASICs arrived before FPGAs could replace GPUs.
- **2013 onward:** ASIC mining. The first SHA-256-specific chips launched in January 2013. They pushed GPU and then FPGA mining into the red, and each new ASIC generation made the last one obsolete.

ASIC mining turned Bitcoin mining from a hobby into an industry. Hash rate moved into commercial-scale facilities, which cluster where electricity is cheapest, and the era when anyone could mine profitably with a home computer ended.

What this buys Bitcoin:

- **Massive security budget.** Competitive mining takes industrial fleets of machines that cost thousands of dollars each. An attacker has to buy and run that hardware against the entire global mining industry to threaten consensus. In an example calculation published in April 2025, Cambridge researchers estimated that a 51% attack would take about 1.74 million machines of the 2024 model described above, at $6,318 each, or roughly $11 billion before electricity.
- **Hard re-purposing.** Bitcoin ASICs literally cannot be repurposed for anything else. They're useless except for mining Bitcoin (or other SHA-256 chains). That specialization means the security investment is *committed* in a way generic hardware isn't.

What it costs:

- **Centralization pressure.** ASIC supply is dominated by a few manufacturers. Among the miners surveyed for Cambridge's 2025 report, Bitmain machines made up 82% of hardware by hash rate, MicroBT 15% and Canaan 2.1%. Geographic mining concentration follows electricity prices.
- **Energy footprint.** Cambridge estimated mining's draw at about 138 TWh a year as of June 2024, roughly 0.5% of world electricity. The miners Cambridge surveyed got 52.4% of their power from renewables and nuclear, with natural gas the largest single source at 38.2%.

See [Mining](/glossary/mining) for the broader picture and [Mining Centralization](/glossary/mining-centralization) for the structural concerns.
