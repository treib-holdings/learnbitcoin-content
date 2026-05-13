---
title: "Static Channel Backup (SCB)"
slug: static-channel-backup-scb
draft: false
shortDefinition: "A file storing essential LN channel data so a user can attempt recovery if local channel state is lost."
keyTakeaways:
  - "Protects LN funds from total loss in case of node data failure"
  - "Forces channel closure on the known state, ignoring newer updates"
  - "A partial fallback requiring subsequent re-channeling if used"
sources: []
relatedTerms: []
liveWidget: ~
---

The SCB (often a .backup file) includes the channel’s funding transaction, remote public key, and other metadata. If your LN node crashes or hardware fails, you can load the SCB to trigger a force-close on each channel, at least recovering your on-chain funds. However, it only restores balances at worst-case states—more recent updates aren’t known. You won’t preserve the precise LN state or inbound/outbound capacity but can salvage unspent coins from an on-chain perspective. Modern LN wallets automatically store SCBs to mitigate catastrophic data loss.
