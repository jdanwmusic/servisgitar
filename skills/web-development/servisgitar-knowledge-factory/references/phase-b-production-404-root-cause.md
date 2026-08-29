# Phase B Production 404 — Root Cause (2026-08-28)

Verified: ARTICLES array = 13; 4 Phase A articles outside array (embedded in ARTICLES_BY_DOMAIN init). Build PASS but dist/ only 13 panduan routes. 404 = real failure, not deployment lag. Fix: insert 4 articles into ARTICLES array; verify ARTICLES boundary + dist/ + prerender manifest; push only with approval; hard stop applies.
