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
    title: "The Last War",
    url: "lore/the-last-war.html",
    section: "Lore",
    summary: "A century of conflict that shattered the old kingdom and redrew every border.",
    tags: ["History", "War"]
  },
  {
    title: "The Dragonmarked Houses",
    url: "lore/dragonmarked-houses.html",
    section: "Lore",
    summary: "Mercantile dynasties whose arcane birthmarks grant them a monopoly on magic and trade.",
    tags: ["Factions", "Magic"]
  },

  // ----- Sessions -----
  {
    title: "Session 1 — Arrival in the City of Towers",
    url: "sessions/session-01-arrival.html",
    section: "Sessions",
    summary: "The party arrives by airship, takes a strange job, and makes its first enemy.",
    tags: ["Session", "City of Towers"]
  },

  // ----- NPCs -----
  {
    title: "Veyl the Broker",
    url: "npcs/the-broker.html",
    section: "NPCs",
    summary: "The nervous fixer who gave the party their first job. Knows more than he says.",
    tags: ["NPC", "City of Towers"]
  },

  // ----- Party -----
  {
    title: "Kessa Ironwright",
    url: "characters/kessa-ironwright.html",
    section: "Party",
    summary: "A warforged artificer searching the city for the maker who left her behind.",
    tags: ["Player Character", "Warforged"]
  },

  // ----- Section pages (so search can find them too; usually no tags) -----
  { title: "Lore & Wiki",     url: "lore.html",       section: "Section", summary: "Nations, factions, history, and the powers that shape our world.", tags: [] },
  { title: "Session Recaps",  url: "sessions.html",   section: "Section", summary: "The story so far, told one session at a time.",                   tags: [] },
  { title: "NPCs",            url: "npcs.html",        section: "Section", summary: "Everyone the party has met and thought worth remembering.",        tags: [] },
  { title: "The Party",       url: "characters.html",  section: "Section", summary: "The adventurers whose tale this is.",                              tags: [] },
  { title: "Timeline",        url: "events.html",      section: "Section", summary: "The important events, in the order they came to pass.",            tags: [] },
  { title: "Maps & Handouts", url: "maps.html",        section: "Section", summary: "Maps, letters, and other things the party has gathered.",          tags: [] }

];
