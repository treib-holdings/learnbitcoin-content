---
title: "Constant Time"
slug: constant-time
draft: false
shortDefinition: "A practice in cryptography where operations take the same amount of time, preventing side-channel leaks of sensitive data."
keyTakeaways:
  - "Prevents leaking secrets via timing or power analysis"
  - "Important for cryptographic operations involving private keys"
  - "Often achieved by uniform code paths and memory access"
sources: []
relatedTerms: []
liveWidget: ~
---

Constant-time algorithms avoid revealing secret-dependent operations through measurable differences-like how much CPU time or power is used. If cryptographic code runs faster or slower depending on the secret input (e.g., a private key bit), attackers could exploit this to uncover the key.
In Bitcoin, constant-time implementations are crucial for elliptic curve operations, ensuring private keys aren't leaked via timing attacks. Developers carefully audit cryptographic functions, making sure every operation path has the same run time and memory access pattern, preserving security in real-world hardware environments.
