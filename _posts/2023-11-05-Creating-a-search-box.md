---
layout: post
published: false
title:  "Creating a Search bar form"
tag: rails search
---

There's been a couple of times when I've needed to create a search bar feature for a project I'm building.

I forget how to do that often, however, I've learned if I write an article about it, it tends to stick in my brain a little better.

Since I've implemented this search bar feature successfully, i'm going to create this article about my process so I can easily reference this when I forget in the future.

# How to

A search bar is essentially an HTML form. So I'll be using one of Rails form helpers, either `form_with` or `form_tag`.

# The code

The code I've used in the past that was successful looked like this:

```
<%= form_tag("/mountains", method: :get) do %>
  <p> Search for a mountain </p>
  <%= text_field_tag(:search, params[:search]) %>
  <%= submit_tag ("Search") %>
<% end %>
```

Now it's time to explain what this is doing.

1. `form_tag` is the helper method I use when creating a basic/generic form for a search bar. There's also `form_with`, but that seems to be intended to be used with an instance of a model, or for creating instances of models. This `form_tag` is perhaps a little "lighter" in terms of the minimum amount of things to make it behave like I'd expect.
2. the arguments that I pass to `form_tag` above are the destination of the form and the method to use when submitting. The `form_tag` defaults to using `POST`.....so if I wanted to use this form to submit something, all I'd really need to do is pass the first argument. But that's not what my form will be doing, so I will be using `method: :get`.
3. Pass a block
4. I create some basic text explaining what the form is for
5. `text_field_tag` is the actual search bar
6. the parameters for `text_field_tag` are the name of the field, and then how the data is passed into the `params` hash.
7. the `submit_tag` is how the form is submitted. The argument passed there is simply the text to display on the button/link

That's it.

# What does this do?

This creates a form on the view/page to allow a user to type in some text and then hit "Search" button.

At that point, the Rails application will send a request to the "Mountains" controller, because that's what's specified in the first argument of the `form_tag`. Specifically, this'll probably go to the `index` action.

At this point i'd need to look at the controller and add some logic for working with/interacting with the database using the data passed in via the form, but that's beyond the scope of this article.

# Conclusion

To create a simple search bar use the `form_tag` and point it at the controller of choice by specifying the URL and using the `GET` method.

Once the form is submitted, the HTTP request will arrive at the controller specified in the URL.