---
layout: default
---


{% for category in site.categories %}
# {{ category[0] }}
 <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}