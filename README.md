# SERVICEGITAR.COM

Platform pengetahuan teknis berbahasa Indonesia untuk servis, setup, perawatan, dan restorasi gitar & bass.

## Status
**Phase 2 — Knowledge Core COMPLETE.** 10 pilot articles, templates, JSON-LD, search, SEO verified.

| Aspect | Status |
|---|---|
| Tech stack | ✅ Next.js 14 App Router + TypeScript + Tailwind |
| Static export | ✅ `output:'export'`, `images.unoptimized:true` |
| Brand | ✅ Dark industrial premium (#0A0A0C / #C9A84C) |
| Entity model | ✅ 10 entities (5 core + 5 supporting) |
| Relationship graph | ✅ 14 typed relationships |
| Article schema | ✅ 10 content types, each with own required sections |
| Source model | ✅ 7 fields (title, url, tier, author, publisher, accessDate, note) |
| Build | ✅ PASS (4 pages, 87KB shared JS) |
| Type check | ✅ PASS |
| Lint | ✅ PASS |
| Git commit | ✅ local `057c3d9` + pushed `main` (jdanwmusic/servisgitar) |
| Deploy | ❌ NOT YET (Cloudflare — user-triggered) |

## Stack
- Next.js 14.2.28 (App Router)
- React 18.3.1
- TypeScript 5.7
- Tailwind 3.4
- Static export (no DB, no runtime)

## Architecture
See `src/lib/ARCHITECTURE.md` for the full knowledge model.

## Repository
- Local: `/home/ubuntu/servisgitar`
- Branch: `main`
- Git identity: `SEWAGITAR-BOT <deploy@servisgitar.com>`
- GitHub: not yet created (deferred to Phase 2 kickoff)

## Build
```bash
npm install
npm run build    # → dist/ (static export)
```

## Phase Roadmap
- **Phase 1.5** ✅ Architecture hardening (this checkpoint)
- **Phase 2** COMPLETE — 10 pilot articles (all 5 content types), templates, search, JSON-LD, sitemap (15 URLs)
- **Phase 3** Deep Knowledge (brands, models, advanced techniques)
- **Phase 4** Diagnostic Engine (interactive troubleshooting)
- **Phase 5** JW Guitar Service integration (case studies, services, contact)
- **Phase 6** Continuous improvement (monitoring, search, content gaps)

## Freezes
- `hardcasegitar` @ `ffd38de` — **READ-ONLY** until explicit lift.
- No autonomous Cloudflare changes. No autonomous design changes. No fake data.
