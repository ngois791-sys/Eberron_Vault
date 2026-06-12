// ============================================================================
//  SITE INDEX  —  this makes Search and Tags work.
//
//  Every page that should be searchable / taggable needs ONE entry below.
//  When you add a new page, copy a block and fill it in. Fields:
//    title:   what shows in search results and tag lists
//    url:     the path FROM THE SITE ROOT (no leading slash), e.g. "npcs/veyl.html"
//    section: which part of the site it belongs to (shown as a small label)
//    summary: one short sentence
//    tags:    a list of tags in [square brackets], e.g. ["NPC", "City of Towers"]
//
//  Tags can be any words you like. Pages that share a tag are grouped together
//  on the Tags page automatically.
// ============================================================================

const SITE_PAGES = [

  // ----- Lore -----
  {
    title: "An Introduction to Khorvaire",
    url: "lore/introduction.html",
    section: "Lore",
    summary: "The myth of the Progenitor Dragons, the fall of Galifar, and the war that shattered the Five Nations.",
    tags: ["History", "Khorvaire"]
  },
  {
    title: "The Dragonmarked Houses",
    url: "lore/dragonmarked-houses.html",
    section: "Lore",
    summary: "The mercantile dynasties whose arcane birthmarks grant them a near-monopoly on magic and trade. All fourteen houses, their marks, sigils, and known members.",
    tags: ["Divine Agents","Dragonmarked Houses"]
  },

  {
    title: "Ancient Paladins — Champions of Siberys",
    url: "lore/ancient-paladins.html",
    section: "Lore",
    summary: "The great paladins of ages past — Tira Miron, Inarieth, Khardam Silvereye, and Traelor — whose spirits have armed Ziolda.",
    tags: ["History", "Champions of Siberys"]
  },

  {
    title: "The Draconic Prophecy",
    url: "lore/draconic-prophecy.html",
    section: "Lore",
    summary: "Cryptic visions of the seers of Draksholm — of three Champions, and the darkness they must face, including Zaverys the Black.",
    tags: ["History", "Prophecy"]
  },

  {
    title: "Gods & Demigods",
    url: "lore/gods-and-demigods.html",
    section: "Lore",
    summary: "The Progenitor Dragons and the powers behind creation — Siberys, Eberron, Khyber, Zaverys, and Alderdia.",
    tags: ["Religion"]
  },
  {
    title: "Archdruids of Eberron",
    url: "lore/archdruids-of-eberron.html",
    section: "Lore",
    summary: "The greatest druids of the age — Oalian the Great Druid, and Eladan Ardosar, founder of Arcanix.",
    tags: ["Divine Agents","Druids"]
  },
  {
    title: "Warlocks of Khyber",
    url: "lore/warlocks-of-khyber.html",
    section: "Lore",
    summary: "Khyber's chosen — Lord Soth, the Umbral Shade, the Great Demon, the Lord of Dust, and the Lord of Blades.",
    tags: ["Divine Agents","Villains"]
  },
  {
    title: "Visions in the Great Diamond",
    url: "lore/visions-in-the-great-diamond.html",
    section: "Lore",
    summary: "What each Champion witnessed within the Great Diamond — the Siberys, Eberron, and Khyber domains.",
    tags: ["Prophecy"]
  },

  // ----- Sessions (by arc) -----
  {
    title: "Arc 1 — Blood on the Lake",
    url: "sessions/arc-1-blood-on-the-lake.html",
    section: "Sessions",
    summary: "Sessions 1–4. Three strangers, scarred by the Mourning, are drawn together in Karrnath, hunting the dead that rise around Lakeside and Lake Dark.",
    tags: ["Session"]
  },
  {
    title: "Arc 2 — Unrest in Thaliost",
    url: "sessions/arc-2-unrest-in-thaliost.html",
    section: "Sessions",
    summary: "Sessions 5–10. The party uncovers the Silver Flame's hidden history with werewolves and the secret Silver Moon, amid the unrest of occupied Thaliost.",
    tags: ["Session"]
  },
  {
    title: "Arc 3 — The Dark Pack",
    url: "sessions/arc-3-the-dark-pack.html",
    section: "Sessions",
    summary: "Sessions 11–16. Riding with the Silver Moon into the Graywall Mountains to fight the werewolves of the Dark Pack, the heroes learn the Emerald Claw hunts the Fount of Inarieth.",
    tags: ["Session"]
  },
  {
    title: "Arc 4 — The Fount of Inarieth",
    url: "sessions/arc-4-the-fount-of-inarieth.html",
    section: "Sessions",
    summary: "Sessions 17–21. A race across the Blade Desert to Q'barra to reach the fabled Fount of Inarieth before the Order of the Emerald Claw.",
    tags: ["Session"]
  },
  {
    title: "Arc 5 — The Pirates of Lhazaar",
    url: "sessions/arc-5-the-pirates-of-lhazaar.html",
    section: "Sessions",
    summary: "Sessions 22–25. Among the pirates of the Lhazaar Principalities, the party chases a star map to the lost island of Draksholm.",
    tags: ["Session"]
  },
  {
    title: "Arc 6 — The Ruins of Draksholm",
    url: "sessions/arc-6-the-ruins-of-draksholm.html",
    section: "Sessions",
    summary: "Sessions 26–33. On the dead island of Draksholm, the heroes gather ancient relics and the first secrets of the Draconic Prophecy.",
    tags: ["Session"]
  },
  {
    title: "Arc 7 — Legacy of Solamnia",
    url: "sessions/arc-7-legacy-of-solamnia.html",
    section: "Sessions",
    summary: "Sessions 34–45. From the haunted Gloaming and a buried Solamnic fortress to the edge of the Mournlands, a fallen kingdom's legacy shapes the war to come.",
    tags: ["Session"]
  },
  {
    title: "Arc 8 — Forged by War",
    url: "sessions/arc-8-forged-by-war.html",
    section: "Sessions",
    summary: "Sessions 46–47. Deep in the Mournlands, the party infiltrates the warforged dominion rising at Eston and sparks a desperate uprising.",
    tags: ["Session"]
  },

  // ----- NPCs -----
  {
    title: "Veyl the Broker",
    url: "npcs/the-broker.html",
    section: "NPCs",
    summary: "The nervous fixer who gave the party their first job. Knows more than he says.",
    tags: ["NPC", "City of Towers"]
  },

  // ----- Heroes of the Realm -----
  {
    title: "Kitt",
    url: "heroes/kitt.html",
    section: "Heroes",
    summary: "A dragonmarked wanderer bound for Arcanix, with a dragon's bones at her back.",
    tags: ["Hero", "Champions of Eberron"]
  },
  {
    title: "Leroy Van Helsing",
    url: "heroes/leroy-van-helsing.html",
    section: "Heroes",
    summary: "A blood-sworn hunter tracking the werewolves that destroyed his family.",
    tags: ["Hero", "The Dark Pack"]
  },
  {
    title: "Ziolda",
    url: "heroes/ziolda.html",
    section: "Heroes",
    summary: "A knight of the Sacred Flame who walked back from death, and the chosen Champion of Siberys.",
    tags: ["Hero", "Champions of Siberys"]
  },

  // ----- Section pages (so search can find them too; usually no tags) -----
  { title: "Lore & Wiki",     url: "lore.html",       section: "Section", summary: "Nations, factions, history, and the powers that shape our world.", tags: [] },
  { title: "Session Recaps",  url: "sessions.html",   section: "Section", summary: "The story so far, told one session at a time.",                   tags: [] },
  { title: "NPCs",            url: "npcs.html",        section: "Section", summary: "Everyone the party has met and thought worth remembering.",        tags: [] },
  { title: "Heroes of the Realm", url: "heroes.html",  section: "Section", summary: "The adventurers whose tale this is.",                              tags: [] },
  { title: "Timeline",        url: "events.html",      section: "Section", summary: "The important events, in the order they came to pass.",            tags: [] },
  { title: "Maps & Handouts", url: "maps.html",        section: "Section", summary: "Maps, letters, and other things the party has gathered.",          tags: [] },
  { title: "Downloads",       url: "downloads.html",   section: "Section", summary: "Maps, character sheets, and handouts to download.",                 tags: [] }

];
