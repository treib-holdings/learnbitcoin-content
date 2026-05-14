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

An exchange API key is the credential pair (key ID + secret) that lets software interact with an exchange account programmatically. Trading bots, portfolio trackers, accounting tools, and tax-reporting services all consume API keys.

The standard permission model exchanges expose:

- **Read-only.** Fetch balances, trades, deposit/withdrawal history. Useful for portfolio trackers, tax tools, alerting. Worst-case compromise is data leakage, no fund loss.
- **Trade.** Read-only plus place and cancel orders. Compromise lets an attacker pump your account into bad trades but not withdraw funds. Trading bots use this level.
- **Withdraw.** All of the above plus the ability to move funds off the exchange. Compromise = full account drain. Use only when absolutely necessary.

Best practices:

- **Match permission to use case.** Tax software needs read-only; never give it withdraw access.
- **IP whitelist.** Most exchanges let you bind an API key to one or more IP addresses. A stolen key from outside the allowed IPs is useless.
- **Withdrawal address whitelist.** Some exchanges support address whitelists for the withdraw permission: even with a stolen key, the attacker can only withdraw to addresses you pre-approved.
- **Key rotation.** Rotate every 6-12 months as a default. Always rotate immediately after suspecting compromise.
- **Never share or commit keys.** API keys in public Git repos are routinely found by attackers within minutes. The bot/script that uses them should read them from a secrets manager or environment variable, not from source code.

The biggest historical losses to API-key compromise: various users have lost full account balances when phishing or malware exfiltrated their trading-bot configurations. The pattern is so common that exchanges now generally require email + 2FA confirmation for new API key creation with withdraw permission.

The deeper Bitcoin discipline: anything on an exchange isn't yours, full stop. API keys are a power tool for active trading, not a storage strategy. Long-term holdings belong in self-custody, where there's no API to compromise.
