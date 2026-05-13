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

Bitcoin Core can lock certain memory buffers (mmap/MLock) containing sensitive data (like private keys) so the OS doesn't swap them to disk. This reduces the risk of forensic or malware tools scanning swap files for key materials. Locked memory usage is limited by OS constraints (e.g., requiring special privileges). While not foolproof, it adds another barrier: an attacker with physical or system-level access must tackle live RAM extraction rather than simply parsing a swap file. This approach underscores Core's attention to key security in multi-user or high-risk environments.
