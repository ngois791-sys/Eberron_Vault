# The Eberron Vault

A companion website for our tabletop campaign — lore, session recaps, NPCs, the
party, a timeline, and maps. It's built so that **adding content means dropping a
small text file into a folder.** No web design required.

This README is for *you* (the DM). Players never see it — they just visit the site.

---

## 1. Publishing it (one-time setup)

The site is hosted free with **GitHub Pages**. GitHub turns these files into a real
website automatically every time you save changes.

1. **Create a repository** on GitHub (the green **New** button on your repos page).
   - Give it a name, e.g. `eberron-vault`. **Remember this name** — you'll need it in step 4.
   - You can make it **Public** or **Private**; either works with GitHub Pages on a free account for a project site.
2. **Upload these files.** Easiest path with no command line:
   - On the new repo's page, click **uploading an existing file**.
   - Drag in *everything* from this folder (including the folders that start
     with `_`), then click **Commit changes**.
3. **Turn on Pages:** in the repo, go to **Settings → Pages**.
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Set the branch to **`main`** and the folder to **`/ (root)`**, then **Save**.
4. **Fix the `baseurl`** (important, or your styling/links will look broken):
   - Open `_config.yml` and set `baseurl: "/your-repo-name"`.
     If your repo is `eberron-vault`, that's `baseurl: "/eberron-vault"`.
   - Commit the change.
5. Wait ~1–2 minutes. Your site appears at:

   ```
   https://YOUR-USERNAME.github.io/your-repo-name/
   ```

   **That URL is the link you give your players.**

> ### A note on privacy
> You chose **"obscure link only."** GitHub Pages sites are technically public —
> anyone with the URL can read them. The site asks search engines *not* to list it
> (so it won't show up in Google), but treat the link as semi-secret: anyone you
> share it with can share it further. Don't put true secrets (your DM-only plot
> notes) on pages players can reach. Keep those in files marked `published: false`
> (see below) or out of the repo entirely.

---

## 2. Adding content (the everyday workflow)

Each section of the site is a folder. **To add something, copy that folder's
`TEMPLATE.md` file, rename it, and fill it in.** Then upload/commit it — the new
page and its navigation link appear automatically.

| To add a…            | Put a file in… | Copy this template            |
|----------------------|----------------|-------------------------------|
| Lore / wiki page     | `_lore/`       | `_lore/TEMPLATE.md`           |
| Session recap        | `_sessions/`   | `_sessions/TEMPLATE.md`       |
| NPC                  | `_npcs/`       | `_npcs/TEMPLATE.md`           |
| Player character     | `_characters/` | `_characters/TEMPLATE.md`     |
| Timeline event       | `_events/`     | `_events/TEMPLATE.md`         |
| Map / image handout  | `maps/`        | (just drop in an image; see below) |

### The bit at the top (front matter)

Every content file starts with a small block fenced by `---` lines. That's where
the title, summary, etc. go. Everything *below* the second `---` is the page
content, written in **Markdown** (plain text with simple formatting). Look at the
sample files already in each folder for working examples.

- **`title:`** — what shows as the page heading and in lists.
- **`summary:`** — one sentence shown on the section's index cards.
- **`published: false`** — a page with this line is **hidden** from the live site.
  Use it for secrets, drafts, or your DM notes. Delete the line to reveal it.

### Maps & handouts

1. Drop an image (`.jpg`, `.png`, `.webp`, `.svg`, even a `.pdf`) into the `maps/` folder.
2. Open `maps.md` and copy the `<figure>` block, updating the filename and caption.

---

## 3. Previewing locally (optional)

You don't need this — you can just commit and look at the live site. But if you
want to preview changes on your own PC before publishing, you'll need
[Ruby + Jekyll](https://jekyllrb.com/docs/installation/windows/). Then, in this
folder:

```powershell
bundle install      # first time only
bundle exec jekyll serve
```

…and open <http://localhost:4000>. (When previewing locally, you can leave
`baseurl` empty; just remember to set it back before publishing.)

---

## 4. Where things live

```
_config.yml        site name, tagline, and settings (edit the title here)
index.html         the landing page
lore.md ...        the six section index pages
_lore/  _npcs/ ... your content — one file per page
maps/              image handouts
_layouts/          page templates (the look of every page)
assets/css/        the theme — colors live at the top of style.css
```

Have fun, and may the dice be ever in your favor.
