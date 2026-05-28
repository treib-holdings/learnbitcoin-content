# Assets — diagrams and interactive widgets

What this is: an index of every reusable visual asset (static SVG diagram or interactive Svelte widget) that content in this repo can embed, plus the boilerplate for embedding them.

The assets themselves live in the **web repo** (`learnbitcoin-web`), not here. This repo references them by URL path (for SVGs) or by component import (for Svelte widgets).

---

## Static SVG diagrams

All shipped diagrams live at `learnbitcoin-web/public/diagrams/<name>.svg`. Each is authored to a `viewBox="0 0 800 420"` canvas (1.905:1 aspect, the OG-PNG canonical ratio); the prebuild rasterize pipeline auto-generates a 1200×630 PNG at `public/diagrams/og/<name>.png` for social cards.

| Diagram | File | Currently embedded in |
|---|---|---|
| **Alice pays Bob (UTXO)** | `alice-pays-bob.svg` | [how-bitcoin-works §3](journey/how-bitcoin-works.md), [rabbit-holes/utxos §3](rabbit-holes/utxos.mdx) |
| **Dollar purchasing power** | `dollar-purchasing-power.svg` | [why-money-is-broken §6](journey/why-money-is-broken.md) |
| **Verify, don't trust** | `verify-dont-trust.svg` | [sovereignty §2](journey/sovereignty.md) |
| **HD wallet tree** | `hd-wallet-tree.svg` | [be-your-own-bank §3](journey/be-your-own-bank.md), [rabbit-holes/key-space](rabbit-holes/key-space.mdx) (near top) |
| **Network topology** | `network-topology.svg` | [what-bitcoin-actually-is §7](journey/what-bitcoin-actually-is.md), [rabbit-holes/decentralization](rabbit-holes/decentralization.mdx) |
| **Merkle tree** | `merkle-tree.svg` | [how-bitcoin-works §7](journey/how-bitcoin-works.md) |
| **Threat triangle** | `threat-triangle.svg` | [rabbit-holes/seed-backup-strategies §2](rabbit-holes/seed-backup-strategies.mdx) (chapter is draft; diagram is in place for go-live) |
| **Confirmations stack** | `confirmations-stack.svg` | [how-bitcoin-works §8](journey/how-bitcoin-works.md) |
| **Lightning channel** | `lightning-channel.svg` | [using-bitcoin §5](journey/using-bitcoin.md) |

### How to embed an SVG diagram

In any markdown or MDX file, use a `<figure>` block:

```html
<figure>
  <img src="/diagrams/<name>.svg" alt="<long descriptive alt text>" />
  <figcaption><short editorial caption that lands the takeaway></figcaption>
</figure>
```

To make this diagram the page's social-card image, add to the frontmatter:

```yaml
ogImage: "/diagrams/og/<name>.png"
ogImageAlt: "<one or two sentence description for social previews>"
```

The OG PNG is auto-generated; you do not need to create it by hand. Each chapter has only one OG image (the "lead" diagram).

---

## Animated explainers (manim videos)

Short data-driven animations rendered with manim CE and served as MP4 from `learnbitcoin-web/public/videos/<name>.mp4`. Brand grammar locked in v1: white background, Geist + Geist Mono, ink-800 chrome, **green = fiat / decay, orange = Bitcoin**, end card with site logo + `www.LearnBitcoin.com`. 1920×1080 @ 60fps, ~15-25s, ~1-2MB.

| Video | File | Currently embedded in |
|---|---|---|
| **What $1 from 1970 buys** | `purchasing-power.mp4` | [why-money-is-broken](journey/why-money-is-broken.md) — top-of-chapter visual hook, above the fold |
| **One has a supply cap. One doesn't.** | `fixed-vs-infinite.mp4` | [what-bitcoin-actually-is](journey/what-bitcoin-actually-is.md) — top-of-chapter hook, side-by-side USD vs BTC supply with "Glass ceiling" / "21M cap" contrast |
| **Open once. Pay many.** | `lightning-mesh.mp4` | [using-bitcoin](journey/using-bitcoin.md) — top-of-chapter hook, animated Lightning Network mesh with bidirectional routing through Alice's single channel to Bob. **Also embedded in** [rabbit-holes/lightning-routing](rabbit-holes/lightning-routing.mdx) — same MP4 reused; routing chapter pairs it with the BOLT-spec walkthrough of how routes actually get computed. OG card derived from the t=22s frame at `/diagrams/og/lightning-routing.png`. |
| **Five hours that almost killed Bitcoin.** | `inflation-bug.mp4` | [inflation-bug-postmortem](rabbit-holes/inflation-bug-postmortem.mdx) — top-of-chapter hook, August 2010 reorg visualization with 53-block orphan and the 184B-vs-21M digit contrast |
| **Pay the rate. Or wait.** | `mempool.mp4` | [mempool](rabbit-holes/mempool.mdx) — top-of-chapter hook, full mempool lifecycle (broadcast → propagation across 4 nodes → fee-rate sorting → Alice/Bob characters → mining → eviction after 2 weeks → rebroadcast at higher rate) |
| **Threshold-of-keys.** | `multisig.mp4` | [glossary/multisig](glossary/multisig.md) — top-of-entry hook, 35-second walkthrough of 2-of-3 multisig: setup (three different makers), normal spend (two signatures), loss scenario (one key gone, two remain), theft scenario (thief halts at one signature), closing pillars (Multisig / Threshold-of-keys / Vendor-diverse). First animated glossary entry. **Also embedded in** [rabbit-holes/seed-backup-strategies §7](rabbit-holes/seed-backup-strategies.mdx) — same MP4 reused; chapter pairs it with the multi-vendor hardware photo. |

### How to embed a video

```html
<figure>
  <video
    src="/videos/<name>.mp4"
    autoplay
    muted
    loop
    playsinline
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    preload="metadata"
    aria-label="<description of what the animation shows, for screen readers>"
  ></video>
  <figcaption>One-line caption with the key takeaway.</figcaption>
</figure>
```

`autoplay muted loop playsinline` is the loop-friendly default for decorative motion graphics. `controls` gives readers pause/play + scrubber on hover; `controlslist` suppresses download, playback rate, and cast buttons we don't need. Browsers honor `prefers-reduced-motion` and pause autoplay for users who request it.

### Authoring new videos

Source code for the animations lives in the private repo `treib-holdings/learnbitcoin-animations` (kept private to avoid intimidating contributors with a Python/manim toolchain, and to give editorial control over drafts). Setup and render instructions are in that repo's README. The deliverable is the rendered MP4, which gets copied to `learnbitcoin-web/public/videos/<name>.mp4` and committed there.

### OG image from a video frame

When a chapter's lead asset is a video (not an SVG diagram), the OG image is extracted as a still frame from the rendered MP4 at the most visually rich moment (typically a data reveal or end-card frame). Standard workflow:

```bash
# from learnbitcoin-web/
ffmpeg -y -ss <seconds> -i public/videos/<name>.mp4 \
  -vframes 1 -vf "scale=1200:675,crop=1200:630" \
  public/diagrams/og/<chapter-slug>.png
```

Because `public/diagrams/og/*` is gitignored (auto-regenerated by `scripts/rasterize-diagrams.mjs` from SVGs), each video-derived OG needs a `!public/diagrams/og/<chapter-slug>.png` exception line added to `learnbitcoin-web/.gitignore`. Otherwise `git add` will silently skip the file.

Reference the OG in the chapter frontmatter as `ogImage: "/diagrams/og/<chapter-slug>.png"` — same syntax as SVG-derived OGs.

---

## Original photography

Operator-shot photos of real hardware, stored at `learnbitcoin-web/public/photos/<name>.jpg` for single shots or `public/photos/<chapter-slug>/<name>.jpg` for chapters with multiple photos. Resized to 1200-1600px max edge at JPEG quality 72-85 (~250KB-1MB per file). Authentic device photography proves the gear is real and in use, which is the whole brand differentiator versus sites that lean on vendor marketing shots or stock imagery.

| Photo | File | Currently embedded in |
|---|---|---|
| **Hardware wallet ecosystem** | `hardware-wallet-ecosystem.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — hero shot, four vendors side by side |
| **Trezor Safe 5 PIN entry** | `trezor-safe-5-pin.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Safe 5 bullet, shows scrambled keypad |
| **Coldcard Mk4 PIN prefix** | `coldcard-mk4-pin.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Coldcard bullet, transparent case showing the chip |
| **Keystone 3 Pro retail box** | `keystone-3-pro-box.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Keystone bullet |
| **Blockstream Jade unlock** | `jade-unlock.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — next to Jade bullet |
| **Trezor four-generation lineup** | `trezor-evolution.jpg` | [be-your-own-bank §6](journey/be-your-own-bank.md) — closes the section, 2014-2024 historical anchor |
| **Trezor paper backup card** | `seed-backup/paper-card.jpg` | [rabbit-holes/seed-backup-strategies §3](rabbit-holes/seed-backup-strategies.mdx) — opens the Paper section |
| **Coldcard recovery card** | `seed-backup/paper-coldcard-recovery.jpg` | [rabbit-holes/seed-backup-strategies §3](rabbit-holes/seed-backup-strategies.mdx) — closes Paper section, shows metadata fields beyond seed words |
| **Steel tube backup (dot-matrix)** | `seed-backup/steel-tube.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — tube format |
| **Steel plate backup (tile)** | `seed-backup/steel-plate-tile.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — tile-insertion format |
| **Steel plate backup (tab)** | `seed-backup/steel-plate-tab.jpg` | [rabbit-holes/seed-backup-strategies §4](rabbit-holes/seed-backup-strategies.mdx) — bend-tab format |
| **SLIP-39 share card** | `seed-backup/shamir-shares.jpg` | [rabbit-holes/seed-backup-strategies §6](rabbit-holes/seed-backup-strategies.mdx) — 20-word Shamir share format |
| **Multisig HW lineup** | `seed-backup/multisig-three-devices.jpg` | [rabbit-holes/seed-backup-strategies §7](rabbit-holes/seed-backup-strategies.mdx) — Coldcard + Jade + Trezor (also cropped for chapter OG card at `/diagrams/og/seed-backup.jpg`) |

### How to embed a photo

Same `<figure>` block pattern as static diagrams, with a `/photos/` path:

```html
<figure>
  <img src="/photos/<name>.jpg" alt="<long descriptive alt text>" />
  <figcaption><short editorial caption>.</figcaption>
</figure>
```

Photos do not auto-rasterize into OG cards (that pipeline is SVG-only). If a photo should be a page's social card, point `ogImage` in frontmatter directly at the photo and make sure the source is close to 1200×630:

```yaml
ogImage: "/photos/<name>.jpg"
ogImageAlt: "..."
```

### Authoring new photos

Photos.app on macOS sandboxes its library bundle — CLI tools cannot read inside `~/Pictures/Photos Library.photoslibrary/`. To get photos out:

1. Export from Photos.app (File → Export → Export N Photos…) as JPEG, High quality, sRGB, 2400px long edge.
2. Save to `~/Sync/Treib Holdings LLC/<batch-name>/` (Desktop and Downloads are TCC-restricted too on this machine; the Sync folder is unrestricted).
3. Resize to web-friendly with `sips`: `sips -s format jpeg -s formatOptions 72 -Z 1200 input.jpeg --out output.jpg` (target ~250KB per photo for chapter-embedded shots; single hero shots can go larger).
4. Strip EXIF (avoids leaking phone model, GPS, timestamps): `exiftool -all= -overwrite_original output.jpg`.
5. Copy to `learnbitcoin-web/public/photos/<descriptive-name>.jpg` (single shot) or `learnbitcoin-web/public/photos/<chapter-slug>/<descriptive-name>.jpg` (chapter with multiple photos).
5. Embed via `<figure>` block (above).
6. Update the table here when adding a new photo.

---

## Interactive Svelte widgets

Live components in `learnbitcoin-web/src/components/`. Embedded in MDX (not plain markdown) via `import` + JSX-style tag. Each MDX page that embeds a widget should also declare it in the frontmatter `hasInteractive` array so the listing pages can flag it.

| Widget | Component path | Currently embedded in |
|---|---|---|
| **Bitcoin units converter** | `units/UnitsConverter.svelte` | [rabbit-holes/bitcoin-units](rabbit-holes/bitcoin-units.mdx) |
| **Bitcoin units visualization** | `units/UnitsVisualization.svelte` | [rabbit-holes/bitcoin-units](rabbit-holes/bitcoin-units.mdx) (multiple instances, one per unit) |
| **Supply chart** | `supply/SupplyChart.svelte` | [rabbit-holes/supply](rabbit-holes/supply.mdx) |
| **Halving countdown** | `halving/HalvingCountdown.svelte` | [rabbit-holes/halvings](rabbit-holes/halvings.mdx) |
| **Difficulty clock** | `mining/DifficultyClock.svelte` | [rabbit-holes/mining](rabbit-holes/mining.mdx) |
| **Mempool histogram** | `mining/MempoolHistogram.svelte` | [rabbit-holes/mining](rabbit-holes/mining.mdx), [rabbit-holes/mempool](rabbit-holes/mempool.mdx) |
| **Key space visualizer** | `keyspace/KeySpaceVisualizer.svelte` | [rabbit-holes/key-space](rabbit-holes/key-space.mdx) |

There are also site-chrome widgets (`LivePrice`, `LiveBlockHeight`) used in Astro pages only (homepage, `/node`, glossary). Those are not for content embedding.

### How to embed an interactive widget

The file must be `.mdx`, not `.md`. At the top of the body (after frontmatter, before the first heading or blockquote), import the component:

```mdx
import KeySpaceVisualizer from '@components/keyspace/KeySpaceVisualizer.svelte';
```

Then, wherever the widget belongs in the prose, drop in the tag with a hydration directive:

```mdx
<KeySpaceVisualizer client:load />
```

Hydration directives:
- `client:load` — hydrates immediately on page load. Use for above-the-fold widgets.
- `client:visible` — hydrates only when scrolled into view. Use for below-the-fold widgets (lighter on first paint).

In the chapter frontmatter, declare the widget so listing pages can flag the chapter as having interactive content:

```yaml
hasInteractive: ["keySpaceVisualizer"]
```

The string is camelCase of the component name. Multiple widgets: `["widgetA", "widgetB"]`.

### Widget configuration

Some widgets accept props. For example, `UnitsVisualization` takes a `unit` and an optional `showLabel`:

```mdx
<UnitsVisualization client:visible unit="finney" />
<UnitsVisualization client:visible unit="btc" showLabel={false} />
```

When a widget is new to you, check the `.svelte` source in the web repo for the `export let` declarations to see what it accepts.
