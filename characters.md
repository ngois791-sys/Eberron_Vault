---
layout: default
title: The Party
permalink: /characters/
---
<div class="section-head">
  <p class="eyebrow">The Heroes</p>
  <h1>The Party</h1>
  <p>The adventurers whose tale this is.</p>
</div>

<div class="grid">
  {% assign items = site.characters | sort: "title" %}
  {% for item in items %}
  <a class="card" href="{{ item.url | relative_url }}">
    {% if item.class %}<p class="eyebrow">{{ item.class }}</p>{% endif %}
    <h3>{{ item.title }}</h3>
    {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
  </a>
  {% endfor %}
</div>
