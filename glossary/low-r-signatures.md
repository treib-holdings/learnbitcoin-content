---
title: "Low R Signatures"
slug: low-r-signatures
draft: false
shortDefinition: "An ECDSA optimization using a minimal ‘R’ component, reducing overall signature size and lowering transaction fees."
keyTakeaways:
  - "Shortens ECDSA signatures by minimizing the R field size"
  - "Saves a few bytes, trimming transaction fees slightly"
  - "Implemented in many modern wallets as a default optimization"
sources: []
relatedTerms: []
liveWidget: ~
---

In ECDSA, the signature has two parts: R and S. By finding an R value that fits into fewer bytes (leading zeros removed, etc.), the signature’s overall size shrinks. This can cut a few bytes from each signature, marginally lowering fees for transactions with many inputs. Wallets like Bitcoin Core have integrated low-R signing, so most end users never notice-it happens automatically. While it doesn’t revolutionize fees, every byte saved counts in high-volume or large-input scenarios, reflecting the Bitcoin ethos of efficient data usage.
