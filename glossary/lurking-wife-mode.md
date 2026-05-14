---
title: "Lurking Wife Mode"
slug: lurking-wife-mode
draft: false
shortDefinition: "An unofficial Bitcoin Core GUI setting that hides wallet balance, as a playful inside joke/commit among developers."
keyTakeaways:
  - "Reflects dev humor, not a mainstream or official feature"
  - "Used to conceal balance from the GUI view"
  - "An example of Bitcoin Core's open-source culture"
sources: []
relatedTerms: []
liveWidget: ~
---

"Lurking Wife Mode" is a real (and shipped) Bitcoin Core feature: a UI toggle in the Qt GUI that hides wallet balances and transaction amounts from view. The point is privacy from someone looking over your shoulder - the namesake "lurking wife," but in practice anyone who shouldn't see your account.

The feature was added by Sjors Provoost in 2015 (PR #6489). The original commit message and the GitHub discussion both lean into the humor: the name is a self-aware joke about the very specific real-world situation of "your spouse walked into the room while you were checking on your Bitcoin." Bitcoin Core's dev culture is otherwise quite serious about code; this is one of the entries where the human side shows through.

What it actually does in the current Bitcoin Core GUI:

- Replaces all displayed BTC amounts (balance, individual transactions, fees) with a generic mask like `*****`.
- Stays in effect for the current session until you toggle it off.
- Doesn't change anything in the wallet's actual state; the amounts are simply not rendered.

Found under the Settings menu, often labeled "Hide values" or "Privacy mode" in modern Bitcoin Core versions (the explicit "Lurking Wife Mode" string has been softened in user-visible labels but the underlying feature and codename remain).

Limitations:

- **Doesn't hide much from a sophisticated observer.** Anyone with access to your computer can still inspect the wallet file or look at the chain to derive balances.
- **Doesn't substitute for actual privacy practices.** Address rotation, CoinJoin, separate wallets for different identities, hardware wallets, Tor connectivity - these are the real privacy tools. Lurking Wife Mode is a shoulder-surfer defense, nothing more.
- **It's a Bitcoin Core GUI feature only.** Other wallets have their own version (often called "balance privacy" or "stealth mode" or just an icon-toggle), each with different scope.

The cultural footnote: the feature is sometimes cited as evidence that the protocol is built by humans who think about the lived reality of Bitcoin users. The straight-laced version of the same feature ("Hide Wallet Values") would have been just another menu item; the goofy name made it memorable and made the human story behind a privacy feature legible.
