---
layout: default
title: Lore & Wiki
permalink: /lore/
---
<div class="section-head">
  <p class="eyebrow">The World</p>
  <h1>Lore &amp; Wiki</h1>
  <p>The nations, factions, and forces of our world. Knowledge the party has earned.</p>
</div>

<div class="grid">
  {% assign items = site.lore | sort: "title" %}
  {% for item in items %}
  <a class="card" href="{{ item.url | relative_url }}">
    {% if item.category %}<p class="eyebrow">{{ item.category }}</p>{% endif %}
    <h3>{{ item.title }}</h3>
    {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
  </a>
  {% endfor %}
</div>
