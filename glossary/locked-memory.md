---
title: "Locked Memory"
slug: locked-memory
draft: false
shortDefinition: "Memory pages that cannot be swapped to disk, protecting private keys from being written to persistent storage."
keyTakeaways:
  - "Prevents private keys from landing in the swap file"
  - "Adds a protective layer for sensitive wallet data"
  - "Relies on OS support and correct configuration"
sources: []
relatedTerms: []
liveWidget: ~
---

Locked memory is the technique of telling the operating system "do not page these memory pages out to disk." For Bitcoin Core and other cryptographic software, this means pages holding decrypted private keys or other sensitive secrets stay in RAM and are never written to a swap file or hibernation image where a later attacker could recover them.

The mechanism is `mlock()` on POSIX systems (Linux, macOS, BSD) and `VirtualLock()` on Windows. Bitcoin Core's [secure allocator](https://github.com/bitcoin/bitcoin/blob/master/src/support/lockedpool.h) uses these calls when storing decrypted key material.

What it defends against:

- **Hibernation files** that contain a full memory snapshot, including keys.
- **Swap files** that capture pages of unused memory under memory pressure. An attacker with disk access could potentially extract historical key material.
- **Forensic recovery from a powered-off machine** where the swap survives reboot.

What it doesn't defend against:

- **A running attacker with sufficient privileges** to read process memory directly (root, kernel exploits, ptrace on a debug build).
- **Cold-boot attacks** that physically extract RAM contents before its contents fade.
- **Hardware-level exploits** like the Intel SGX side channels or DRAM rowhammer.

Practical limits:

- Locked memory uses physical RAM and can't be swapped out, so there's a finite system-wide limit (usually a few MB without sudo on Linux). Bitcoin Core's secure pool uses a few KB; the limit is not a problem for the wallet but could be for very-large-pool applications.
- The OS must honor the lock. On a memory-constrained system the kernel might still kill processes via OOM rather than swap, so the practical effect is "swap won't betray you" rather than "memory is invincible."

This is one of those small disciplines that's invisible when it's working. Hardware wallets do something analogous in a more isolated environment; Bitcoin Core does the best it can on a multi-process OS.
