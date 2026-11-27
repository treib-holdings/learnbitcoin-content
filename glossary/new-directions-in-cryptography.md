---
title: "New Directions in Cryptography (1976)"
slug: new-directions-in-cryptography
linkText:
  - "New Directions in Cryptography"
draft: false
published: "2026-11-27"
shortDefinition: "The November 1976 paper in which Whitfield Diffie and Martin Hellman put public-key cryptography in print: a key you can publish, a matching key you keep secret, and a digital signature anyone can check. Bitcoin's keys work this way."
keyTakeaways:
  - "Printed in IEEE Transactions on Information Theory, vol. IT-22, no. 6, November 1976, pages 644 to 654. Its authors, Whitfield Diffie and Martin Hellman, were at Stanford"
  - "It proposed a key in two halves: one published for anyone to use, one kept secret, with no practical way to work out the secret half from the public one"
  - "It asked for a digital signature that anyone can check and nobody else can produce. Every bitcoin payment is authorized by one"
  - "It gave one working method, for agreeing on a secret key over an open line, and left the rest as open problems. A full answer, RSA, followed in February 1978"
  - "Parts of it had been presented in June 1975 and June 1976, it credits Ralph Merkle's independent work, and GCHQ says its own staff had the idea earlier, in secret"
sources:
  - { label: "Whitfield Diffie and Martin E. Hellman - New Directions in Cryptography (IEEE Transactions on Information Theory, vol. IT-22, no. 6, November 1976, pages 644-654; Martin Hellman's own copy, PDF): the proposal, every quotation from the paper here, the credit to Merkle, and the note that portions were presented in June 1975 (Lenox, Massachusetts) and June 1976 (Ronneby, Sweden)", url: "https://ee.stanford.edu/~hellman/publications/24.pdf" }
  - { label: "IEEE - the journal's record of the paper (DOI 10.1109/TIT.1976.1055638): volume 22, issue 6, November 1976, pages 644-654", url: "https://doi.org/10.1109/TIT.1976.1055638" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): 'We define an electronic coin as a chain of digital signatures'; its reference 7, cited for the Merkle tree, is a 1980 paper by R.C. Merkle", url: "https://www.learnbitcoin.com/bitcoin.pdf" }
  - { label: "SECG - SEC 1: Elliptic Curve Cryptography, version 2.0 (May 21, 2009): the security of every scheme built on elliptic curves relies on the elliptic curve discrete logarithm problem", url: "https://www.secg.org/sec1-v2.pdf" }
  - { label: "BIP 340 - Schnorr Signatures for secp256k1: Bitcoin has used ECDSA signatures over the secp256k1 curve to authenticate transactions, and the BIP specifies Schnorr signatures over the same curve", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" }
  - { label: "R. L. Rivest, A. Shamir and L. Adleman - A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Communications of the ACM, vol. 21, no. 2, February 1978, pages 120-126)", url: "https://doi.org/10.1145/359340.359342" }
  - { label: "IETF - RFC 2631, Diffie-Hellman Key Agreement Method (E. Rescorla, June 1999, Standards Track): 'In [DH76] Diffie and Hellman describe a means for two parties to agree upon a shared secret'", url: "https://www.rfc-editor.org/rfc/rfc2631.html" }
  - { label: "GCHQ - James Ellis (the agency's own account, read November 27, 2026): Ellis conceived of 'non-secret encryption', now known as public-key cryptography; the discovery, which the page dates to 1973, stayed classified; the public announcement came a month after his death on November 25, 1997", url: "https://www.gchq.gov.uk/person/james-ellis" }
relatedTerms:
  - public-key
  - private-key
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - merkle-tree-merkle-root
  - whitepaper
  - satoshi-nakamoto
sameAs:
  - "https://doi.org/10.1109/TIT.1976.1055638"
liveWidget: ~
---

"We stand today on the brink of a revolution in cryptography." That is the first sentence of "New Directions in Cryptography", a paper by Whitfield Diffie and Martin Hellman of Stanford University, printed in the November 1976 issue of IEEE Transactions on Information Theory. They were right. Thirty-two years later, Bitcoin was built on what the paper proposed.

**The problem.** In 1976 a code worked like a house key: the key that locked a message was the key that opened it. Two people who wanted to talk in private first had to get a copy of that key to each other, and the paper says how that was done: by "private courier or registered mail". That works when the two sides know each other in advance. Two strangers on a computer network cannot wait for a courier.

**The proposal.** Diffie and Hellman suggested a key in two halves. One half is public and can sit in a directory for anyone to look up. The other half is secret and never leaves its owner. The two are tied together by math that is quick to do in one direction and, as far as anyone knows, not practical to undo, so seeing the public half does not give away the secret one. They called this a public key cryptosystem.

The same idea gives a signature. The paper asks for a "purely digital, unforgeable, message dependent signature", and says what one has to do: "It must be easy for anyone to recognize the signature as authentic, but impossible for anyone other than the legitimate signer to produce it."

**Why Bitcoin depends on it.** That sentence describes how bitcoin is spent. A wallet holds a [private key](/glossary/private-key) and signs each payment with it. Every node on the network checks the signature against the matching [public key](/glossary/public-key), and none of them ever learns the private one. No bank is asked who owns what. Satoshi Nakamoto's [whitepaper](/glossary/whitepaper) defines a coin as "a chain of digital signatures". Without a signature that strangers can check, there is no Bitcoin.

The paper's own example of one-way math was the discrete logarithm. In arithmetic that wraps around like a clock face, raising a number to a power is quick, and working back to the power that was used is not. Bitcoin's keys rest on a relative of that problem, set on an [elliptic curve](/glossary/elliptic-curve).

**The fine print.**

- **It was a proposal, not a finished system.** The paper gave one working method, for two strangers to agree on a secret key over a line anyone can listen to. It is known today as [Diffie-Hellman key exchange](https://www.rfc-editor.org/rfc/rfc2631.html), and the internet's standards body published a version of it in 1999. On public-key encryption the paper says "the problem is still largely open", and for signatures it offers partial solutions. A full answer, the RSA system, followed in print in February 1978. Bitcoin's own signatures, [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature), came later still.
- **November 1976 is the date of the journal.** The paper notes that parts of the work had already been presented at two conferences, in June 1975 and June 1976.
- **It credits Ralph Merkle**, who "has independently studied the problem of distributing keys over an insecure channel". He is the Merkle of the [Merkle tree](/glossary/merkle-tree-merkle-root), which every Bitcoin block uses.
- **Others had been there in secret.** GCHQ, Britain's signals intelligence agency, says its own James Ellis conceived of the idea, under the name "non-secret encryption", and dates the discovery to 1973. The work stayed classified and was announced at the end of 1997. Diffie and Hellman worked it out on their own, and theirs is the paper the world could read.

**Read it:** [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf) (PDF, eleven pages, on Martin Hellman's page at Stanford).
