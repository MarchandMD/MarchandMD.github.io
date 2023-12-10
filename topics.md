---
layout: page
title: Topics I've Written About
---

<div class="text-center">
<p>Below are some of the articles I've written, grouped by topic</p>


  {% for tag in site.tags %}
  <h3> {{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}

</div>