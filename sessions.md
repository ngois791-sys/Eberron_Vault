---
layout: default
title: Session Recaps
permalink: /sessions/
---
<div class="section-head">
  <p class="eyebrow">The Chronicle</p>
  <h1>Session Recaps</h1>
  <p>The story so far, told one session at a time. Newest first.</p>
</div>

<div class="grid">
  {% assign items = site.sessions | sort: "date" | reverse %}
  {% for item in items %}
  <a class="card" href="{{ item.url | relative_url }}">
    <p class="eyebrow">{% if item.date %}{{ item.date | date: "%B %e, %Y" }}{% else %}Session{% endif %}</p>
    <h3>{{ item.title }}</h3>
    {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
  </a>
  {% endfor %}
</div>
