# The Eberron Vault

A companion website for our tabletop campaign — lore, session recaps, NPCs, the
party, a timeline, and maps. It's plain HTML, so you can **open any page in your
web browser to preview it before publishing — no software to install.**

This README is for *you* (the DM). Players never see it; they just visit the site.

---

## Previewing the site (on your own computer, before publishing)

Just **double-click any `.html` file** — it opens in your web browser and looks
exactly like the live site. Start with **`index.html`** (the home page) and click
around. Nothing you do here is visible to players until you publish (below).

> The fancy fonts load from the internet, so the styling looks best while you're
> online. Everything still works offline; the text just uses a fallback font.

---

## Publishing changes (making them live for players)

The live site is hosted on **GitHub Pages**. The site players see is built from
the files **on GitHub**, so any change has to be sent up there. The simplest ways,
no command line:

- **Change text on an existing page:** on GitHub, open the file, click the
  **pencil icon** (✏️ Edit), make changes, then **Commit changes**.
- **Add new files (a new NPC page, a map image, etc.):** on GitHub, click
  **Add file → Upload files**, drag them in, then **Commit changes**.

Your live site lives at:

```
https://YOUR-USERNAME.github.io/Eberron_Vault/
```

That URL is the link you give your players.

> **Privacy note (you chose "obscure link only"):** GitHub Pages sites are
> technically public — anyone with the URL can read them, and anyone you share it
> with can reshare. The pages ask search engines not to list them, so they won't
> show up in Google, but treat the link as semi-secret. Don't put true DM-only
> secrets on pages players can reach.

---

## Adding content

Every page is a normal HTML file. You can edit them by hand using the templates
below — **or just ask Claude to make a page for you** and paste in the result.

### The structure

```
index.html            the home page
lore.html             \
sessions.html          |
npcs.html              |  the section pages (the lists of cards)
heroes.html            |
events.html            |
maps.html              |
tags.html             /   (auto-built; lists every tag)

lore/   sessions/   npcs/   heroes/        <- one HTML file per entry
templates/                                  <- copy-me starter pages
assets/css/style.css                        <- the whole look lives here
assets/site-data.js                         <- the search & tags index (see below)
assets/site.js                              <- powers search + the tags page
assets/img/                                 <- images (e.g. house crests)
maps/                                       <- map & handout images
```

### To add an entry (NPC, session, lore page, or hero)

1. Go to the matching `templates/…-page.html` file and **make a copy** of it in
   the matching section folder (`npcs/`, `sessions/`, `lore/`, or `heroes/`).
   - Example: copy `templates/npc-page.html` to `npcs/captain-rhett.html`.
2. Open your new file and edit the parts marked `<!-- EDIT -->`.
   - Preview it any time by opening it in your web browser.
3. Open the section page (e.g. `npcs.html`), find the comment that says
   **"TO ADD …"**, copy one card block, and change its link + text to point at
   your new page. (This is the one line that puts it in the list.)
4. Open `assets/site-data.js` and add an entry for the page (copy a block) so
   **Search and the Tags page** can find it.

*(Or skip all of this and just ask Claude to make the page — it'll wire up the
card and the search index for you.)*

### To add a timeline event

Open `events.html`, copy one `<li>` block (marked in a comment), and edit it.
No separate file needed.

### To add a map or handout

1. Put the image in the `maps/` folder.
2. Open `maps.html`, copy one `<figure>` block, and update the file names + caption.

### Changing the look

All colors and fonts live at the top of `assets/css/style.css` (in the
`:root { … }` block). Change a value there and it updates the whole site.

---

Have fun, and may the dice be ever in your favor.
