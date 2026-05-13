---
title: "Rescue Transaction"
slug: rescue-transaction
draft: false
shortDefinition: "A pre-signed or fallback transaction prepared to secure funds if keys are compromised or LN channels fail."
keyTakeaways:
  - "Acts as a contingency measure to preserve access to funds"
  - "Typically pre-signed with certain conditions or time locks"
  - "Essential for LN forced closures or emergency multisig retrieval"
sources: []
relatedTerms: []
liveWidget: ~
---

In LN or advanced custody, some users create a ‘rescue transaction’ that can be broadcast if something goes wrong—e.g., if hardware wallet access is lost or a channel partner vanishes. For LN, it may be a pre-signed commitment transaction ensuring you can force-close a channel. In a multisig context, it might be an emergency scenario if certain cosigners are unreachable. These transactions often carry high fees or use time locks. While beneficial for disaster recovery, they must be stored safely and not accidentally leaked or invalidated.
