---
title: "Mining Front-End"
slug: mining-front-end
draft: false
shortDefinition: "Software or UI acting as a bridge between mining hardware (ASICs) and protocols like Stratum or getblocktemplate."
keyTakeaways:
  - "Coordinates ASIC tasks, pool settings, and job assignments"
  - "Displays performance metrics and config options"
  - "Essential for large-scale mining management"
sources: []
relatedTerms: []
liveWidget: ~
---

A mining front-end is the software layer that sits between mining hardware (ASICs) and the protocol that delivers them work: Stratum from a pool, or [getblocktemplate](/glossary/bip-22-getblocktemplate) for solo mining. The front-end handles connection management, work assignment, share submission, and operator-facing controls.

For a single home miner, the "front-end" is just the firmware running on the ASIC itself. For an industrial operation with hundreds or thousands of devices, the front-end is a separate layer running on a server somewhere, often called a fleet manager or farm controller.

What the front-end does:

- **Pool connections.** Maintain Stratum connections to one or more mining pools, automatically failing over if one pool's connection drops.
- **Work distribution.** Receive block-template jobs from the pool and route them to individual ASICs (or to a Stratum proxy that does the routing).
- **Share submission.** Take found shares from ASICs and submit them back to the pool.
- **Monitoring and control.** Track each ASIC's hash rate, temperature, voltage, frequency, fan speed; alert or auto-shutdown on overheating; remotely reboot misbehaving devices.
- **Firmware management.** Push firmware updates across the fleet, particularly important for [proprietary firmware](/glossary/proprietary-mining-firmware) like BraiinsOS or LuxOS.

Common products in the category (2026):

- **Awesome Miner**: paid Windows-centric fleet manager popular with mid-size operations.
- **Hive OS**: cloud-managed Linux-based mining OS, with a web dashboard.
- **Braiins Farm Proxy + Farm Manager**: open-source Stratum V2 stack from Braiins, the team behind the original Slush Pool.
- **Foreman**: SaaS fleet management for large mining operations.
- **MiningCore / NOMP / open-source pool software**: the other side of the protocol that pool operators run.

For a hobbyist running one or two ASICs, the front-end is mostly invisible. For an operator running thousands, the front-end is the difference between profitable and not.
