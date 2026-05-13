#!/usr/bin/env python3.11
"""
Glossary migration: convert the legacy Drupal glossary export
(glossary-original-list.json) into one markdown file per term in
learnbitcoin-content/glossary/.

Uses live-slug-map.tsv (harvested from the live site) as the authoritative
source of (title, slug) pairs so SEO URLs are preserved exactly. Drupal's
pathauto applies stop-word stripping and punctuation rules we don't try
to replicate algorithmically.

One-shot. Idempotent — re-running overwrites output.

Run from anywhere:
    python3.11 scripts/migrate/glossary.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

CONTENT_REPO = Path(__file__).resolve().parents[2]
LEGACY_DRUPAL = Path("/Users/iantreibick/Sync/Claude-LearnBitcoin.com/site/scripts/glossary")
SOURCE_JSON = LEGACY_DRUPAL / "glossary-original-list.json"

MIGRATE_DIR = Path(__file__).resolve().parent
LIVE_MAP_TSV = MIGRATE_DIR / "live-slug-map.tsv"
TITLE_ALIASES_TSV = MIGRATE_DIR / "title-aliases.tsv"
RELATED_MAP_TSV = MIGRATE_DIR / "related-terms-map.tsv"

OUTPUT_DIR = CONTENT_REPO / "glossary"


A_TAG = re.compile(r'<a\s+href="([^"]+)"[^>]*>(.*?)</a>', re.IGNORECASE | re.DOTALL)


def html_to_md(text: str) -> str:
    """Convert the limited HTML used in source to markdown.

    Only <a href="…">…</a> appears (65 instances across 488 entries).
    Curly apostrophes / em-dashes are plain text and preserved as-is.
    """
    return A_TAG.sub(r"[\2](\1)", text)


def yaml_double_quoted(s: str) -> str:
    """Escape a string for YAML double-quoted form."""
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def load_tsv(path: Path) -> dict[str, str]:
    out: dict[str, str] = {}
    with path.open(encoding="utf-8") as f:
        for line in f:
            line = line.rstrip("\n")
            if not line or "\t" not in line:
                continue
            k, v = line.split("\t", 1)
            out[k] = v
    return out


def render_frontmatter(
    *,
    live_title: str,
    slug: str,
    short: str,
    takeaways: list[str],
    related: list[str],
    legacy_title: str | None,
) -> str:
    lines = [
        "---",
        f"title: {yaml_double_quoted(live_title)}",
        f"slug: {slug}",
        "draft: false",
        f"shortDefinition: {yaml_double_quoted(short)}",
        "keyTakeaways:",
    ]
    for t in takeaways:
        lines.append(f"  - {yaml_double_quoted(t)}")
    lines.append("sources: []")
    if related:
        lines.append("relatedTerms:")
        for r in related:
            lines.append(f"  - {r}")
    else:
        lines.append("relatedTerms: []")
    lines.append("liveWidget: ~")
    if legacy_title:
        lines.append(f"legacyTitle: {yaml_double_quoted(legacy_title)}")
    lines.append("---")
    return "\n".join(lines)


def load_related_map() -> dict[str, list[str]]:
    """slug -> deduped, order-preserving list of related slugs."""
    out: dict[str, list[str]] = {}
    if not RELATED_MAP_TSV.exists():
        return out
    with RELATED_MAP_TSV.open(encoding="utf-8") as f:
        for line in f:
            line = line.rstrip("\n")
            if not line or "\t" not in line:
                continue
            slug, csv = line.split("\t", 1)
            seen: set[str] = set()
            related: list[str] = []
            for r in csv.split(","):
                r = r.strip()
                if r and r not in seen:
                    seen.add(r)
                    related.append(r)
            out[slug] = related
    return out


def main() -> int:
    data = json.loads(SOURCE_JSON.read_text(encoding="utf-8"))
    entries = data["entries"]

    live_map = load_tsv(LIVE_MAP_TSV)          # live_title -> slug
    aliases = load_tsv(TITLE_ALIASES_TSV)      # json_title -> live_title
    related_map = load_related_map()           # slug -> [related slugs]

    if not live_map:
        print(f"ERROR: live slug map missing at {LIVE_MAP_TSV}", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Clear any previous output so renamed slugs don't leave stale files behind.
    for old in OUTPUT_DIR.glob("*.md"):
        old.unlink()

    written = 0
    orphans: list[str] = []
    renamed: list[tuple[str, str]] = []

    for term in entries:
        json_title = term["termName"]
        live_title = aliases.get(json_title, json_title)
        slug = live_map.get(live_title)

        if not slug:
            orphans.append(json_title)
            continue

        if live_title != json_title:
            renamed.append((json_title, live_title))

        body = html_to_md(term["expandedExplanation"])
        legacy_title = json_title if live_title != json_title else None

        content = render_frontmatter(
            live_title=live_title,
            slug=slug,
            short=term["shortDefinition"],
            takeaways=term["keyTakeaways"],
            related=related_map.get(slug, []),
            legacy_title=legacy_title,
        ) + "\n\n" + body + "\n"

        (OUTPUT_DIR / f"{slug}.md").write_text(content, encoding="utf-8")
        written += 1

    # Coverage report
    live_titles = set(live_map.keys())
    written_live_titles = {aliases.get(e["termName"], e["termName"]) for e in entries} - set(orphans)
    unused_live = live_titles - written_live_titles

    print(f"Wrote {written}/{len(entries)} files to {OUTPUT_DIR.relative_to(CONTENT_REPO)}/")
    print(f"  Renamed (json title -> live title): {len(renamed)}")
    print(f"  Orphan JSON terms (no live slug):   {len(orphans)}")
    print(f"  Unused live slugs (no JSON match):  {len(unused_live)}")

    if renamed:
        print("\nRenamed entries:")
        for j, l in renamed:
            print(f"  - {j!r} -> {l!r}")

    if orphans:
        print("\nWARNING: JSON terms with no live slug:", file=sys.stderr)
        for t in orphans:
            print(f"  - {t!r}", file=sys.stderr)

    if unused_live:
        print("\nWARNING: Live slugs with no JSON entry:", file=sys.stderr)
        for t in sorted(unused_live):
            print(f"  - {t!r}", file=sys.stderr)

    return 0 if not orphans and not unused_live else 1


if __name__ == "__main__":
    sys.exit(main())
