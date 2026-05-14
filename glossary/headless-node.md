---
title: "Headless Node"
slug: headless-node
draft: false
shortDefinition: "A Bitcoin node running without a graphical interface, managed via command-line or JSON-RPC."
keyTakeaways:
  - "Operates on servers or embedded systems without a GUI"
  - "Controlled by RPC calls, config files, or CLI commands"
  - "Offers greater resource efficiency and automation potential"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - full-node
  - node
  - node-autoban
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - tor-hidden-service
liveWidget: ~
---

A headless node is `bitcoind` running without the `bitcoin-qt` GUI: no window, no menus, just the daemon process listening on RPC and the P2P network. It's the standard production deployment.

Why headless:

- Less RAM and CPU than running Qt. Frees resources for the actual node work.
- Easy to run on a server, a Raspberry Pi, a NAS, or any embedded device.
- Configurable entirely through `bitcoin.conf`. Drivable through `bitcoin-cli` or RPC, so scripts and other software can talk to it directly.
- Runs as a systemd service or launchd job that survives reboots, restarts, and SSH disconnections.

It's how every packaged node distro (Umbrel, Start9, RaspiBlitz, MyNode, Citadel) actually runs Bitcoin Core under the hood. The friendly web UI talks to `bitcoind` via RPC. It's also how exchanges, payment processors, block explorers, Electrum servers, and Lightning nodes interact with Bitcoin: not through a GUI, but through `getblockchaininfo`, `gettxout`, `sendrawtransaction`, and the rest of the RPC surface.

If you don't need a GUI, headless is the right default. Less surface area, less resource usage, easier to automate and monitor.
