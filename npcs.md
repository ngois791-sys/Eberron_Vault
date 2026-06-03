---
layout: default
title: NPCs
permalink: /npcs/
---
<div class="section-head">
  <p class="eyebrow">People</p>
  <h1>NPCs</h1>
  <p>Everyone the party has met and thought worth remembering.</p>
</div>

<div class="grid">
  {% assign items = site.npcs | sort: "title" %}
  {% for item in items %}
  <a class="card" href="{{ item.url | relative_url }}">
    {% if item.role %}<p class="eyebrow">{{ item.role }}</p>{% endif %}
    <h3>{{ item.title }}</h3>
    {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
  </a>
  {% endfor %}
</div>
