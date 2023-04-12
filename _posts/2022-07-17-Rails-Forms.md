---
layout: post
published: true
---

# How to build forms in Rails

Rails offers three ways to build a form. It's possible, depending on the version of Rails being used, that I may see any of these tags for forms:

```erb
 <%= form_with %>
 <%= form_tag %>
 <%= form_for %> # deprecated
```

This article will be a demonstration of building a form using `form_with`, since it's the most common and most versatile.

Forms are used for most things that require user input. This includes search bars.

There's many parts to the form_with helper, so let's dive right into it.

# Using the rails `form_with` helper

To start, add the `form_with` helper in some expressed ERB tags. The `form_with` helper is a method that takes arguments and receives a block, so I'll use parenthesis to make it easy to see the arguments and block:

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
-   [ review documentation for a complete list ](https://api.rubyonrails.org/v5.2.8/) - just be sure to update the version in the URL to the version of Rails you're interested in

Since the arguments have colons (model:, scope:, url:, etc) they can be listed in any order within the parenthesis.

This example is illustrative, and not exhaustive. For a complete resource, consult the [api documentation](https://api.rubyonrails.org/v5.2.8/) for your current version of rails.

# `form_with` arguments - the `url:` argument

The `url:` argument is the URL I want to send the HTTP request to.

It IS possible to use path helpers for this (for example: `users_path`, `index_path` or whatever resource is available)

If there's a `users_path`, then the needed code would be the following:

```erb
<%= form_with(url: users_path) do |f| %>
```

And this would render the following HTML:

```html
<form action="/posts" method="post" data-remote="true"></form>
```

# `form_with` arguments - `scope`:

Add the `scope:` argument to prefix the name of the input fields; this is an ideal way to nest data within the params hash and improve security through the use of strong_params. Just don't forget to update the strong_params method in the controller.

```erb
<%= form_with scope: :post, url: posts_path do |form| %>
  <%= form.text_field :title %>
<% end %>
```

And this will result in rendered HTML as such:

```html
<input type="text" name="post[title]" />
```

# `form_with` arguments - `model:`

Of course, it's possible to achieve the same effect of `url:` and `scope:` with a single argument instead: `model:`

So, be mindful here. Using `model:` is more efficient, but it's more conventional as well and requires that the rest of the app has been using idiomatic conventions.

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

Instead of explicitly calling the model with `Post.new` (for example), if the routes file is using resources to create RESTful routes, then it's possible to use Rails magic to do a lot of heavy lifting.

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

This will retrieve the data from the database, and populate the form. Would probably be better to use this for something like patching a record, or updating an entire record, which is in the example above.

# conclusion

There are other resources out there for the remaining arguments that can be passed. Specifically for HTML options and styling considerations.

Also, keep in mind, the arguments to the `form_with` helper are keyword arguments, so their order does not matter.

Hope that makes life easier for you.

