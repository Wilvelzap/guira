# Graph Report - .  (2026-08-02)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 182 nodes · 174 edges · 19 communities (17 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2a47f2e8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- properties
- content.d.ts
- Layout.astro
- package.json
- []
- paths
- required
- dependencies
- scripts
- Navbar.astro
- tags
- content.config.ts

## God Nodes (most connected - your core abstractions)
1. `[]` - 18 edges
2. `scripts` - 8 edges
3. `required` - 7 edges
4. `paths` - 5 edges
5. `pubDate` - 3 edges
6. `updatedDate` - 3 edges
7. `author` - 3 edges
8. `authorRole` - 3 edges
9. `tags` - 3 edges
10. `featured` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (19 total, 2 thin omitted)

### Community 0 - "properties"
Cohesion: 0.06
Nodes (36): default, type, default, type, type, type, type, default (+28 more)

### Community 1 - "content.d.ts"
Cohesion: 0.08
Nodes (25): AllValuesOf, astro:content, CollectionEntry, CollectionKey, ContentConfig, DataEntryMap, ExtractCollectionFilterType, ExtractDataType (+17 more)

### Community 3 - "package.json"
Cohesion: 0.11
Nodes (17): author, bugs, url, description, devDependencies, tailwindcss, homepage, keywords (+9 more)

### Community 4 - "[]"
Cohesion: 0.12
Nodes (9): [], article, relatedPosts, string, tocChevron, tocContent, tocHeadings, tocLinks (+1 more)

### Community 5 - "paths"
Cohesion: 0.14
Nodes (13): astro/tsconfigs/strict, src/components/*, src/layouts/*, src/scripts/*, src/styles/*, compilerOptions, baseUrl, paths (+5 more)

### Community 6 - "required"
Cohesion: 0.20
Nodes (9): required, $schema, type, category, description, pubDate, readingTime, tags (+1 more)

### Community 7 - "dependencies"
Cohesion: 0.22
Nodes (9): astro, @astrojs/sitemap, @astrojs/tailwind, dependencies, astro, @astrojs/sitemap, @astrojs/tailwind, posthog-js (+1 more)

### Community 8 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, astro, build, build:css, dev, preview, start, watch:css

### Community 9 - "Navbar.astro"
Cohesion: 0.60
Nodes (4): getLinkClass(), getMobileLinkClass(), isCurrent(), onProduct

### Community 10 - "tags"
Cohesion: 0.50
Nodes (4): type, tags, items, type

## Knowledge Gaps
- **99 isolated node(s):** `$schema`, `type`, `type`, `type`, `type` (+94 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `properties` connect `properties` to `tags`, `required`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `[]` connect `[]` to `Layout.astro`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `$schema`, `type`, `type` to the rest of the system?**
  _99 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `properties` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `content.d.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Layout.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._