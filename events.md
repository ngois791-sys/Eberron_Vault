---
layout: default
title: Timeline
permalink: /events/
---
<div class="section-head">
  <p class="eyebrow">History</p>
  <h1>Timeline</h1>
  <p>The important events, in the order they came to pass.</p>
</div>

<ul class="timeline">
  {% assign items = site.events | sort: "date" %}
  {% for item in items %}
  <li>
    <span class="t-date">{% if item.when %}{{ item.when }}{% elsif item.date %}{{ item.date | date: "%B %e, %Y" }}{% endif %}</span>
    <h3>{% if item.url and item.content != "" %}<a href="{{ item.url | relative_url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</h3>
    {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
