---
title: "Peer Bookmark"
slug: peer-bookmark
draft: false
shortDefinition: "A node-optional feature saving specific peers’ IP or onion addresses for reconnection or whitelisting."
keyTakeaways:
  - "Ensures a node regularly reconnects to certain peers or onions"
  - "Aids stable networks or private usage where specific connections matter"
  - "Pairs with whitelisting to avoid default policy throttles"
sources: []
relatedTerms: []
liveWidget: ~
---

Some node implementations allow ‘peer bookmarks’ or ‘persistent peers’—an internal list so your node reconnects to favored addresses on restarts. This helps maintain stable connections with trusted or known peers, especially for private nets or organizations wanting consistent routing. Whitelisting can also exempt these peers from certain rate limits, ensuring smoother data flow. While most public nodes rely on random peer discovery or DNS seeds, peer bookmarks give operators more direct control over their node’s connectivity profile.
