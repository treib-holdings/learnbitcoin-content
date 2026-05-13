# _assets-staging

Raw extraction from `learn-bitcoin_live_2026-03-18T09-00-00_UTC_files.tar.gz`.

**This directory is temporary.** It gets deleted once everything in it has been
either migrated into a proper home in the content repo, or confirmed as
unneeded.

## Current contents

- `files_live/badge-images-{active,inactive,teaser}/` — 48 badge PNGs
  (15 unique designs × 3 states + one unsuffixed each). Names are still in
  Drupal's `Size=lg, State=<state>_<n>.png` format. **Semantic renaming
  blocked on Drupal database extraction** to read the badge entity
  metadata that maps `_<n>` indices to badge names/descriptions.

- `files_live/2025-01/` and `files_live/2025-02/` — 14 PDFs. The 8 unique
  ones have already been copied to `../downloads/` with clean slug names;
  the rest are duplicates or older revisions. Safe to delete this once
  confirmed.

- `files_live/hero-images/` (4) and `files_live/card-images/` (6) — used
  by various Drupal pages. To be reviewed alongside the deep-dive content
  migration; usable ones move to `learnbitcoin-web/public/images/`.

## Next steps

1. Run a DB-extraction script against
   `learn-bitcoin_live_2026-03-18T09-00-00_UTC_database.sql.gz`:
   - Pull badge entity names + descriptions + image-field references
     to produce a `badge-mapping.json`.
   - Pull the `/deep-dive/bitcoin-units` page node body to seed
     `learnbitcoin-content/deep-dives/bitcoin-units.md`.
2. Apply `badge-mapping.json` to rename `_<n>.png` files to semantic slugs.
3. Move hero/card images into `learnbitcoin-web/public/images/` as the
   design system gets built.
4. Delete this directory.
