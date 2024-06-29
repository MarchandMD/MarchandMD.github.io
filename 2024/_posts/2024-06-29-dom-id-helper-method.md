---
published: true
layout: post
tags: rails, helpers
title: Using the dom_id helper method
---

Sometimes when writing HTML, it'd be nice to have a shortcut to create an `id` attribute.

In Rails views there exists the `dom_id` helper method that does this very thing.

It's designed to be used with a collection of ActiveRecord items (for example, a collection of items from a database query); However, it can be used with plain objects as well.

First, let's see how it works with a single item.

# How it works

- Assuming that a Post model exists
- And that a Post with an id of 123 exists

Imagine this happens in a controller action (like index or show)

```rb
@post = Post.find(123)
```

In the related view, the `dom_id` helper method is available within embedded Ruby tags

```erb
<div id="<%= dom_id(@post) %>">
  # some cool content
</div>
```

This would create the following HTML

```html
<div id="post_123">
  # some cool content
</div>
```

# Customizing the id

Perhaps the value of the id would be more descriptive with some customization.

Pass a second argument as either a symbol or a string, and that word will be prepended onto the id.

```erb
<div id="<%= dom_id(@post, "edit") %>">
  # some cool content
</div>
```

This will create the following HTML

```html
<div id="edit_post_123">
  # some cool content
</div>
```
# Summary

For now, this is all I need to understand this concept of the `dom_id` helper method.

