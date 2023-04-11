---
layout: post
published: false # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

# How to build forms in Rails

Rails offers three ways to build a form. It's possible, depending on the version of Rails being used, to see any of these tags for forms:

```erb
 <%= form_with %>
 <%= form_tag %>
 <%= form_for %> # deprecated
```

This article will be a demonstration of building a form using form_with, since it's the most common and most versatile.

Forms are used for most things that require user input. This includes search bars.

There's many parts to the form_with helper, so let's dive right into it.

# Using the rails form_with helper

To start, add the form_with helper in some expressed ERB tags. The form_with helper is a method that takes arguments and receives a block, so I'll use parenthesis to make it easy to see the arguments and block:

```erb
<%= form_with(model: nil, scope: nil, url: nil, format: nil, local: true) do |form_builder_object| %>
<% end %>
```

The arguments are (among others):

-   model
-   scope
-   url
-   format
-   local
-   (review documentation for a complete list)

Since the arguments have colons (model:, scope:, url:, etc) they can be listed in any order within the parenthesis.

This example is illustrative, and not exhaustive. For a complete resource, consult the api documentation for your current version of rails.

# Form_with arguments - url:

The "url:" argument will create a form that will POST to the path supplied.

for example, if there is a "users_path", then the following code would be needed:

```erb
<%= form_with(url: users_path) do |f| %>
```

And this would render the following HTML:

```html
<form action="/posts" method="post" data-remote="true"></form>
```

# Form_with arguments - scope:

Add the "scope:" argument to prefix the name of the input fields; this is an ideal way to nest data within the params hash and improve security through the use of strong_params

```erb
<%= form_with scope: :post, url: posts_path do |form| %>
  <%= form.text_field :title %>
<% end %>
```

And this will result in rendered HTML as such:

```html
<input type="text" name="post[title]" />
```

# Form_with arguments - model:

Of course, it's possible to achieve the same effect of "url:" and "scope:" with a single argument instead: "model:"

```erb
<%= form_with model: Post.new do |form| %>
  <%= form.text_field :title %>
```

And this will achieve the same result as above:

```html
<form action="/posts" method="post" data-remote="true">
    <input type="text" name="post[title]" />
</form>
```

# How to prefill a form - Use an existing model object

Instead of explicitly calling the model, if the routes file is using resources to create RESTful routes, then it's possible to use Rails magic to do a lot of heavy lifting.

```erb
<%= form_with model: @post do |form| %>
  <%= form.text_field :title %>
```

The above is roughly equivalent to:

```erb
<%= form_with scope: :post, url: post_path(@post), method: :patch do |form| %>
  ...
<% end %>
```



