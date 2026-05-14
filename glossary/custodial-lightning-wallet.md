---
title: "Custodial Lightning Wallet"
slug: custodial-lightning-wallet
draft: false
shortDefinition: "A Lightning wallet where a third party manages LN channels and funds on your behalf, akin to storing BTC on an exchange."
keyTakeaways:
  - "Requires trusting a service to hold your LN funds"
  - "Easier onboarding compared to running a node"
  - "Less secure than managing your own channels and keys"
sources: []
relatedTerms:
  - bolt
  - bolt-11
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-wallet
  - lightning-channel
  - lightning-channel-capacity
  - lightning-channel-splicing
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-probe
  - lightning-routing
  - wallet
  - wumbo-channels-lightning
liveWidget: ~
---

A custodial [Lightning](/glossary/lightning-network) wallet is one where a third party manages the channels, [private keys](/glossary/private-key), and liquidity on your behalf. You log in, you see a balance, you send and receive Lightning payments - but underneath, the channels and signing keys belong to the operator. The Lightning analogue of a [custodial on-chain wallet](/glossary/custodial-wallet).

Why custodial Lightning wallets exist:

- **UX is dramatically simpler.** No channels to manage, no [inbound liquidity](/glossary/lightning-channel-capacity) to acquire, no node uptime requirement. Onboard with an email or phone number, send and receive within seconds.
- **Onboarding is realistic for non-technical users.** Self-custody Lightning, while improving fast, still has more moving parts than custodial.
- **Lightning's UX has historically been the limiter on adoption.** Custodial wallets bridge the gap while non-custodial UX catches up.

What you give up:

- **Self-custody.** "[Not your keys, not your coins](/glossary/custodial-wallet)" applies just as much to Lightning balances as to on-chain. The custodian can freeze withdrawals, comply with subpoenas, go bankrupt, or simply get hacked.
- **Privacy.** The custodian sees every payment you make and receive. They can correlate Lightning activity with your real-world identity if KYC was involved.
- **Censorship resistance.** The custodian can refuse payments to specific addresses, geofence usage, or shut you down for any reason.

The pragmatic stance for most users: custodial Lightning wallets are appropriate for **spending money you'd carry as cash** - the small daily-spend portion of your stack. For meaningful savings, the same logic that applies to [custodial on-chain](/glossary/custodial-wallet) applies here: move it to a wallet you actually control.

Self-custody Lightning options have improved considerably; modern non-custodial Lightning wallets approach custodial-level UX while keeping the keys in your hands. If you're using Lightning regularly, it's worth investigating the self-custody side rather than defaulting to a custodian. Look for wallets that hold their own keys, manage channels for you, and let you pay and receive without entrusting balances to an operator.
