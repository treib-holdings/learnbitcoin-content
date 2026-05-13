---
title: "Paper Code Check"
slug: paper-code-check
draft: false
shortDefinition: "Reading and reviewing Bitcoin's source code in printed form-an extreme security measure against digital tampering."
keyTakeaways:
  - "An extreme, old-school approach to ensure no malicious code goes unnoticed"
  - "Drastically increases the time/effort needed for thorough reviews"
  - "Typically supplemented by reproducible builds and normal digital diffs"
sources: []
relatedTerms: []
liveWidget: ~
---

Some highly paranoid or security-minded developers have physically printed chunks of Bitcoin Core's source code for manual verification, hoping to catch hidden malicious lines that might be invisible or disguised in digital form. This approach is very time-consuming and typically reserved for critical code reviews or building strong trust in a particular software release. Most developers rely on reproducible builds, code signing, and version control audits, but 'paper code checks' are an ultimate fallback ensuring no software-level trickery hides changes from standard diff tools.
