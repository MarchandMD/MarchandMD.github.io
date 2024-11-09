---
layout: topics_page
title: Topics I've Written About
---

<div class="text-center no-bullets">
  <p class="topics-section">Below are some of the articles I've written, grouped by topic</p>
  <div>
    {% for tag in site.tags %}
    <h3 > {{ tag[0] }}</h3>
    <ul class="topics-section">
      <span id="{{ tag[0] }}"></span>
      {% assign processed_urls = "" %}
      {% for post in tag[1] %}
      {% assign current_url = post.url %}
        {% if processed_urls contains current_url %}
        <!-- skip -->
        {% else %}
        <li class="no-bullets"><a href="{{ post.url }}" class="no-bullets">{{ post.title }}</a></li>
        {% assign processed_urls = processed_urls | append: current_url | append: "," %}
        {% endif %}
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
