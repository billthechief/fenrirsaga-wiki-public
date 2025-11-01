# Contributing to Fenrir Saga Ragnarok Online Wiki

Thanks for helping improve the wiki! Keep it simple, accurate, and respectful.

## 1. Basic Flow

1. Fork the repo.
2. Clone your fork.
3. Create a branch: `content/<topic>` or `fix/<short-description>`.
4. Make changes (HTML or assets).
5. Commit and push.
6. Open a Pull Request (PR) to `main`.
7. I review and merge.

## 2. What to Add

Good:
- New or updated pages (classes, monsters, items, quests, maps).
- Fixes (typos, broken links, outdated info).
- Small structural/navigation improvements.
- Optimized images (PNG/WebP) with meaningful `alt` text.

Not good (without asking first):
- Huge redesigns.
- Bulk unverified data.
- Copyrighted material you don’t own.

## 3. File & Folder Basics

Please follow the current organization methods.

## 4. Commit Style (Keep Short)

Format:
```
type(scope): short description
```
Types: `content`, `fix`, `feat`, `chore`, `docs`

Examples:
```
content(monsters): add doppelganger guide
fix(items): correct hydra card drop rate
```

## 5. Pull Request

Include:
- Short summary.
- Screenshot if layout changed.

Only the owner merges.

## 6. Review

I may request small changes. Inactive PRs (no response in ~2 weeks) can be closed.

## 7. Quick Example

```
git clone https://github.com/<you>/fenrirsaga-wiki-public
cd fenrirsaga-wiki-public
git checkout -b content/doppelganger
# add content/monsters/doppelganger.html
git add content/monsters/doppelganger.html
git commit -m "content(monsters): add doppelganger guide"
git push origin content/doppelganger
# Open PR
```

Thanks for contributing!