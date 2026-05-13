---
title: "IP-to-IP Transaction"
slug: ip-ip-transaction
draft: false
shortDefinition: "An early Bitcoin feature allowing direct sending of transactions to a recipient’s IP address. Removed for privacy/security reasons."
keyTakeaways:
  - "Originally meant to simplify direct transfers between online clients"
  - "Abandoned to bolster privacy, reduce complexity"
  - "A relic of Bitcoin’s experimental infancy"
sources: []
relatedTerms: []
liveWidget: ~
---

In Bitcoin’s earliest days, clients could send transactions directly to another node by specifying its IP address-bypassing the broader P2P gossip layer. This was short-lived, as it risked exposing user IPs, removing the pseudonymity offered by addresses, and complicating NAT/firewall setups. It also didn’t scale well in a decentralized environment. Modern Bitcoin usage relies on broadcasting transactions to connected nodes, which then relay them globally. While IP-to-IP sending was an interesting idea historically, it’s largely obsolete, overshadowed by privacy-preserving practices like connecting via Tor or relying on addresses instead of IPs.
