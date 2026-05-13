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

Bitcoin Core's JSON-RPC interface allows remote procedure calls for tasks like broadcasting transactions or fetching block data. Exposing it directly online can be risky, so some users hide it behind Tor's .onion address. That way, only Tor-enabled clients can access the API, boosting privacy and limiting discovery by unwanted parties. This method suits scenarios where you want to manage a node from afar without revealing its IP or location. The setup involves configuring Tor's HiddenServicePort and ensuring Bitcoin Core listens on that port. It's a powerful tactic for stealthy node management with minimal attack surface.
