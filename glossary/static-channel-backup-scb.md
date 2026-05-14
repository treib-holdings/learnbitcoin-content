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

A Static Channel Backup is a small file (typically called `channel.backup` in LND) that captures the minimum metadata needed to recover a Lightning node's on-chain funds after total local data loss: channel funding outpoints, remote node pubkeys, and basic peer-connection info.

It's a "static" backup because the file doesn't need updating after every channel state change. It captures what's needed for emergency recovery, not the current channel balance.

How recovery works with an SCB:

1. Your node dies. Hardware failure, ransomware, dropped phone in the ocean. Local channel state is gone.
2. You install a fresh node, restore the seed phrase, and load the SCB.
3. The new node reaches out to each channel peer with a `channel_reestablish` message that essentially says "I lost state, please force-close at the latest commitment you have."
4. The peer obliges, broadcasting their latest commitment transaction.
5. Your on-chain funds become spendable after the CSV timelock window expires.

What you give up:

- **In-flight HTLCs.** Any pending payment routed through your node at the moment of failure may resolve in the counterparty's favor.
- **The cheating-detection ability.** If your peer is dishonest and broadcasts an *older* commitment that pays them more, you can't detect or punish it. Watchtowers running before the failure can still respond on your behalf if they were monitoring.
- **Channel continuity.** Channels close. You start fresh, pay on-chain fees, and re-establish liquidity.

What you keep: your on-chain Bitcoin from the channels' final settled balances. Better than nothing, dramatically better than complete fund loss.

SCBs are an emergency tool, not a substitute for proper backups. The right architecture is: regular volume-level backups of the node's full state directory, *plus* an up-to-date SCB as a last-resort fallback. Both LND and Core Lightning expose SCB-style recovery; modern Lightning wallets often handle SCB storage automatically.
