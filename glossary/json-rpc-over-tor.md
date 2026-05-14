---
title: "JSON-RPC over Tor"
slug: json-rpc-over-tor
draft: false
shortDefinition: "Running a remote Bitcoin Core node's RPC interface behind Tor, adding anonymity and censorship resistance to node control."
keyTakeaways:
  - "Protects node control interface via Tor's anonymity"
  - "Prevents direct IP exposure for remote RPC usage"
  - "Requires extra configuration but significantly boosts privacy"
sources: []
relatedTerms: []
liveWidget: ~
---

JSON-RPC over Tor is the practice of exposing a Bitcoin Core node's RPC interface via a Tor hidden service (`.onion` address) instead of (or in addition to) a clearnet IP. It lets you manage a remote node from anywhere without revealing the node's IP or your own.

Why this matters:

- **Bitcoin Core's RPC port (8332) should never be exposed to the public internet.** Anyone who reaches it with the right credentials can sign transactions, drain the wallet, or stop the node. Standard advice: bind to localhost only.
- **Self-hosted nodes at home behind NAT** typically can't be reached from a phone or laptop on the road unless you punch holes in the firewall (bad) or use a VPN (workable but extra layer to maintain).
- **A hidden service flips this**: bind RPC to a Tor v3 onion address. The address is unguessable, only reachable via Tor, and you don't need any firewall changes. The phone or laptop runs Tor and connects to the onion.

The setup is roughly:

1. Install Tor on the same machine as Bitcoin Core.
2. Configure a HiddenServiceDir and HiddenServicePort 8332 pointing at Bitcoin Core's RPC port.
3. Set Bitcoin Core's `-rpcbind=127.0.0.1` and `-rpcallowip` for the Tor SocksPort.
4. Use the resulting `.onion` URL with your wallet client (Sparrow, BlueWallet's connect-your-own-node feature, etc.).

Security stays solid because:

- The onion address is only known to people you share it with.
- RPC auth (rpcauth in bitcoin.conf, or the cookie file) still applies on top of the onion.
- Tor adds anonymity: even an adversary who knows the .onion can't see your IP.

It's not the easiest setup. But for self-sovereign Bitcoin operators who want their own infrastructure without exposing it, it's the right pattern. Tools like Umbrel, Start9, and RaspiBlitz automate most of the configuration.
