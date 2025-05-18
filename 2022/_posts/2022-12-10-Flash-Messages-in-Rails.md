---
layout: post
title: "Flash Messages in Rails"
published: false
tags: ruby rails frontend development
---

## What is a Flash Message?

To start, a flash message is two things:

1. It's a reserved keyword
2. It's a Hash

## How is the Flash Message a reserved keyword?

Because it just is.

Whenever you want or need a special message to be shown during the next HTTP request, and then gone forever, you can use that reserved keyword of `flash` (which is a hash) to assign it a key/value pair.

```ruby
flash[:im_the_flash_hash_KEY] = "i'm the flash hash VALUE"
```

## How is the Flash Message a Hash?

The code snippet above should look familiar, if a basic Ruby hash is a data type that's been seen before.

## Cool! So what? How do I use this?

Rails always has access to `flash` hash. But there isn't always information in the flash hash. Only when you specifically add a key/value pair to the flash hash will Rails display information from the flash hash.

And Rails will only display that information on the very next HTTP request. Then it's gone forever.

A good way to use the `flash` hash without having to think too much about placement on the page is to put some ERB into the application.html.erb file that looks like this:

```ruby
<% flash.each do |name, msg| %>
  <%= content_tag :div, msg, class: "#{name}" %>
<% end %>
```

This should sort of be familiar:

1. `#each` is a basic iterator
2. `do` and `end` sets up a block
3. `|name, msg|` are piped in variables for the block, that represent the `|key, value|` of the flash hash
4. `<%= content_tag :div, msg, class: "#{name}" %>` is the Rails way to write HTML; if you stare at it long enough it'll make sense


## A little more detail

There's more that can be done with the Flash Hash. And there's more nuance as well. This is just a high-level overview to make the concept of using a `flash` a little more accessible.

## conclusion

that's a brief intro to using the Flash Hash. Good luck!
