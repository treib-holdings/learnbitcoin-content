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
| **Network topology** | `network-topology.svg` | [what-bitcoin-actually-is §7](journey/what-bitcoin-actually-is.md), [rabbit-holes/decentralization](rabbit-holes/decentralization.mdx) (coming soon) |
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
