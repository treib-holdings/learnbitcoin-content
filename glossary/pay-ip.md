---
title: "Pay-to-IP"
slug: pay-ip
draft: false
shortDefinition: "An early Bitcoin feature sending BTC to a specific IP address directly, deprecated for privacy/security reasons."
keyTakeaways:
  - "Sent transactions directly to a node's IP, bypassing typical address usage"
  - "Abandoned due to privacy and network architecture issues"
  - "An artifact of Bitcoin's experimental beginnings"
sources: []
relatedTerms:
  - bolt-11
  - lightning-invoice
  - lightning-payment
liveWidget: ~
---

Pay-to-IP (sometimes called "IP-to-IP transaction") was an early Bitcoin feature, present in Satoshi's original 2009 client, that let you send coins directly to someone's IP address without exchanging a Bitcoin address first. The sender's client would connect directly to the recipient's running node, request a fresh receive address, and immediately broadcast the payment.

How it worked:

1. Sender types the recipient's IP address (or hostname) into their Bitcoin client.
2. Sender's client opens a TCP connection to the recipient's node.
3. Recipient's node generates a fresh address on demand and returns it.
4. Sender's client constructs and signs a transaction paying to that address.
5. Transaction is broadcast to the network normally.

Why it was removed:

- **Privacy nightmare.** The sender's IP was exposed to the recipient. The recipient's IP was effectively a payment endpoint that anyone monitoring connections could associate with Bitcoin activity.
- **Network architecture problems.** It required recipients' nodes to be reachable on the public internet. Behind NAT or firewall? Can't receive.
- **Identity / impersonation risk.** Anyone running a node at a known IP could be impersonated by anyone who could BGP-hijack or DNS-spoof the connection.
- **Doxing vector.** Tying Bitcoin payments to IP addresses defeated the pseudonymity of the address-based model.
- **Functionally redundant.** Once Bitcoin addresses became the standard payment endpoint, Pay-to-IP was just a more dangerous way to do what addresses already did.

Pay-to-IP was disabled by default in Bitcoin 0.5 (2011) and removed in Bitcoin 0.8 (2013). For a decade-plus now it has been a museum piece, occasionally referenced when explaining how early Bitcoin worked or as a counterexample to "what not to do for privacy."

Modern equivalents that actually work:

- **Standard Bitcoin addresses** with QR codes for in-person and BIP 21 URIs for digital sharing.
- **Lightning invoices and BOLT 12 offers** for fast, recipient-anonymous payment endpoints.
- **PayJoin / [BIP 78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)** for sender-recipient interactive payment flows when needed, with proper privacy properties.

The lesson: Bitcoin's mechanisms have generally evolved away from "trust the network connection" toward "trust the cryptographic identity." Pay-to-IP is what the former looks like at the design level. Modern Bitcoin is the latter, and the difference is real.
