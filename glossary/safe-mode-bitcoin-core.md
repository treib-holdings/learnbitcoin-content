---
title: "Safe Mode (Bitcoin Core)"
slug: safe-mode-bitcoin-core
draft: false
shortDefinition: "A protective mode disabling certain RPCs if the node suspects a major chain fork or severe consensus anomaly."
keyTakeaways:
  - "Preemptively stops certain actions during severe network events"
  - "Helps users avoid double-spending or accepting invalid blocks"
  - "Activated rarely, indicating unusual or potentially malicious forks"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-knots
  - corrupted-chain-state
liveWidget: ~
---

Safe Mode triggers when the node sees unusual behavior—like a long reorg or conflicting blocks at a high depth. It prevents certain wallet commands or transaction broadcasts that might be risky until the situation is resolved. Designed to reduce user exposure to potential chain splits, it warns operators and halts some operations. Although not commonly activated in normal conditions, safe mode reflects a conservative approach: better to pause certain actions than risk operating on a potentially invalid or attacked chain. Manual override is possible if operators trust their chain view.
