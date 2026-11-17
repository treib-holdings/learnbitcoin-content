---
title: "Key Wiping"
slug: key-wiping
draft: false
updated: "2026-11-17"
shortDefinition: "Securely erasing private keys from memory or storage so they cannot be recovered by forensic or malware tools."
keyTakeaways:
  - "Prevents data remnants after signing sessions"
  - "Essential for hardware wallets and secure multi-sig devices"
  - "Reduces exploit avenues if physical or malware access occurs"
sources:
  - { label: "Blockstream Jade firmware - main/sensitive.h: memory areas marked as sensitive hold data that should be zeroed after use, and the firmware keeps a stack of them", url: "https://github.com/Blockstream/Jade/blob/master/main/sensitive.h" }
  - { label: "Trezor firmware - storage/storage.h: storage_wipe erases the storage and re-initializes it to the wiped state", url: "https://github.com/trezor/trezor-firmware/blob/main/storage/storage.h" }
  - { label: "Bitcoin Core 32.1 - support/cleanse.h: memory_cleanse overwrites a buffer that may hold secret data with zero bytes, in a way the compiler will not optimize out", url: "https://github.com/bitcoin/bitcoin/blob/v32.1/src/support/cleanse.h" }
relatedTerms:
  - bitcoin-inheritance-planning
  - hardware-security-module-hsm
  - key-generation-ceremony
  - key-rotation
  - key-split
  - paper-wallet
  - security
liveWidget: ~
---

Key wiping is the practice of overwriting private-key material in memory (and persistent storage) so it can't be recovered through later forensic analysis, cold-boot attacks, or malware that scrapes the device after the fact.

In hardware wallets it's part of the firmware's job. The code is written to overwrite key material in memory once it has been used: Blockstream's Jade firmware, for one, keeps a list of the memory areas that hold sensitive data, so that each is zeroed after use. A factory reset is meant to erase the stored secrets too, not just mark them deleted: Trezor's storage code has a wipe function that erases the storage and sets it up again in the wiped state.

In general-purpose software the picture is messier. Bitcoin Core's wallet encryption tries to clear sensitive buffers when locked, but it's running on a multi-tasking OS where swap files, memory pressure, and kernel paging can copy buffers to disk without the application's knowledge. This is one of the reasons hardware wallets exist: the controlled execution environment makes key wiping actually enforceable.

The practical goal is to minimize the window during which a key sits decrypted in any kind of recoverable storage. A well-implemented hardware wallet signs in milliseconds and wipes immediately, keeping the exposed window short even relative to a fast attacker. A signing operation done by typing a seed into a general-purpose computer leaves traces that may persist for months.
