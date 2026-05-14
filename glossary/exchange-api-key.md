---
title: "Exchange API Key"
slug: exchange-api-key
draft: false
shortDefinition: "Credentials provided by an exchange so bots or third-party software can access trading features programmatically."
keyTakeaways:
  - "Lets trading bots or software interact with exchange accounts"
  - "Security and permission management are critical"
  - "API key breaches can result in lost funds or unauthorized trades"
sources: []
relatedTerms:
  - centralized-exchange-cex
  - decentralized-exchange-dex
  - exchange
  - rpc-whitelist
liveWidget: ~
---

When you want to automate trades or track your portfolio without manually logging into a web interface, you request an API key from the exchange. This key (often combined with a secret) grants controlled access-like placing orders, fetching balances, or gathering market data. It's crucial to store these keys securely, as compromised keys could let attackers trade with your funds.
Different exchanges offer various levels of API permission. Some are read-only (for tracking balances), while others allow full trading, withdrawals, or advanced features. Best practices include limiting permissions, using IP whitelists, and rotating keys regularly. Always remember that if a malicious actor obtains your key with withdrawal privileges, they can drain your account.
