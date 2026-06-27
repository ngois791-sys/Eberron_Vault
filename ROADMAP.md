# The Eberron Vault — Site Roadmap

A plain-language map of how the site is built, so you can edit it yourself.
Nothing here is technical jargon for its own sake — it's the mental model.

---

## 1. The big idea

The site is just a **folder of plain HTML files**. There is no database and no
"program" running on a server — when a player opens a page, their browser reads
that one `.html` file plus a few shared files, and draws the page. That's it.

GitHub Pages serves the folder at your URL. The **front door is `index.html`** —
opening the site always lands there first.

---

## 2. The two kinds of pages

**A) Section pages (the 8 tabs in the top menu)** — these live in the main folder:

| Tab | File | What it is |
|-----|------|------------|
| (Home) | `index.html` | Landing page; big title + cards to each tab |
| Lore | `lore.html` | A grid of cards, grouped under headings |
| Sessions | `sessions.html` | A grid of cards, one per Arc |
| NPCs | `npcs.html` | A grid of NPC cards |
| Heroes | `heroes.html` | A grid of the player-character cards |
| Timeline | `events.html` | The whole timeline lives on this one page |
| Maps | `maps.html` | A gallery of images from the `maps/` folder |
| Tags | `tags.html` | Built automatically (see §4) |
| Downloads | `downloads.html` | A list of files from the `downloads/` folder |

These are **hubs**: mostly a grid of clickable **cards** that link to content pages.

**B) Content pages (the actual entries)** — these live in sub-folders:

```
lore/      introduction.html, gods-and-demigods.html, dragonmarked-houses.html,
           archdruids-of-eberron.html, warlocks-of-khyber.html,
           ancient-paladins.html, draconic-prophecy.html,
           visions-in-the-great-diamond.html        (8 pages)
sessions/  arc-1-blood-on-the-lake.html ... arc-8-forged-by-war.html  (8 arcs)
npcs/      the-broker.html
heroes/    kitt.html, leroy-van-helsing.html, ziolda.html
```

So the flow is: **Home → a tab → a content page.** And every page's top menu
links to all 8 tabs, so you can jump anywhere from anywhere.

---

## 3. The shared "engine" — `assets/` (every page loads these)

Every single page, in its code, loads the same handful of files. Change one of
these and it changes **everywhere at once**:

- **`assets/css/style.css`** — the entire *look*: colors, fonts, spacing, the
  card style, the menu bar, everything. The colors live at the very top in a
  block called `:root` (e.g. `--brass`, `--bg`, `--teal`). Change a value there
  and the whole site re-colors.
- **`assets/site.js`** — the *behavior*: the search box, the Tags page, and the
  Previous/Next buttons. You rarely need to touch this.
- **`assets/site-data.js`** — the **master list of every page** (see §4). This is
  the one "data" file you'll edit when you add or remove pages.
- **`assets/favicon.svg`** — the little gold diamond in the browser tab.
- **`assets/img/houses/`** — the dragonmarked house crest images.
- Fonts (Cinzel + EB Garamond) load from Google over the internet.

---

## 4. `site-data.js` — the brain behind Search, Tags & Prev/Next

This file is a simple list. Each page has an entry like:

```js
{
  title: "Gods & Demigods",
  url: "lore/gods-and-demigods.html",
  section: "Lore",
  summary: "…one line, used by search…",
  tags: ["Religion"]
}
```

Three features read this list:
- **Search box** → matches what you type against titles, tags, summaries.
- **Tags page** → groups every page that shares a tag.
- **Previous / Next buttons** → finds the current page in the list, then links to
  the page **before/after it that has the same `section`**. So the *order* of
  entries in this file is the order the Prev/Next buttons follow.

**Rule of thumb:** if you add, remove, rename, or re-tag a page, update its entry
here too — otherwise Search/Tags/Prev-Next won't know about it.

---

## 5. Anatomy of a single page (what's inside any `.html` file)

Open any page and you'll see four parts in this order:

1. **`<head>`** — the title shown on the browser tab, plus links to the favicon,
   fonts, and `style.css`. (Identical on every page except the title.)
2. **`<header>`** — the brand, the **top menu**, and the search box. (Identical
   on every page.)
3. **`<main>`** — the *only part that's unique to this page*. On a tab it's the
   grid of cards; on a content page it's the `<article>` with the writing.
4. **`<footer>` + `<script>` tags** — the footer line, then the three engine
   files. (Identical on every page.)

So when you want to change a page's **content**, you're almost always editing the
`<main>` section and leaving the rest alone.

---

## 6. The `../` rule (relative paths) — important when editing links

Links are written *relative to where the file sits*:

- A page in the **main folder** (e.g. `lore.html`) links like `assets/...`,
  `lore/introduction.html`, `sessions.html`.
- A page **one folder deep** (e.g. `lore/introduction.html`) has to "step up" a
  folder first, so it links like `../assets/...`, `../lore.html`, `../index.html`.
  Those pages also set `var SITE_BASE = "../";` near the bottom.

If a link or image is broken, 9 times out of 10 it's a missing or extra `../`.

---

## 7. Common edits — where to go

| I want to… | Edit this |
|------------|-----------|
| Change the words on a page | that page's `<main>` section |
| Change colors or fonts site-wide | top of `assets/css/style.css` (`:root`) |
| Add a new Lore/NPC/Hero/Session page | copy a file from `templates/`, fill it in, then add a **card** to the tab and an **entry** to `assets/site-data.js` |
| Re-order or re-group cards on a tab | edit that tab's `.html` (move the card blocks / `group-head` headings) |
| Change Prev/Next order | re-order entries in `assets/site-data.js` |
| Change a page's tags | edit the tag chips on the page **and** its `tags:` in `site-data.js` |
| Add a menu tab | add an `<a>` to the `<nav>` in **every** page (tedious — ask Claude) |
| Add a downloadable file | drop it in `downloads/`, add a row in `downloads.html` |

The `templates/` folder holds copy-me starter pages and is never shown to players.

---

## 8. Publishing

Local files are just *your copy*. To make changes live for players:
**edit → GitHub Desktop → Commit → Push.** GitHub rebuilds the site in 1–2 min.
(Your browser may cache CSS/JS/favicons — hard-refresh with Ctrl+F5 if a change
doesn't show for you.)

---

*Tip: this file (`ROADMAP.md`) and `README.md` are notes for you. Players never
see them — they aren't linked from any page.*
