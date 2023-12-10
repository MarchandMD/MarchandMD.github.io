---
layout: post
title: Turbo Streams are so cool!
published: false
tags: turbo turbo-streams rails ruby
---

To use Turbo streams, do the following:

In a view, add a `turbo_frame_tag` like so:

```erb
<%= turbo_frame_tag "some_name_for_the_frame" do %>
  # additional html/erb code can be added here, but it will be
  # acted upon by the turbo stream eventually
<% end %>
```
