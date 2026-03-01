---
layout: post
published: true # switch to true when I'm ready to publish this
title: "visualize http requests through a rails app"
tags: rails http ruby
---

### introduction

As a baby dev, understanding "where" I am in a problem is vital to helping me troubleshoot.

Being able to visualize the HTTP request/response cycle in a novel way is often essential to getting a grasp on the nature of a bug.

The rest of this article will be a glimpse into my mind: how I think about the HTTP request/response cycle within a Rails App.

### What exactly is in an HTTP request, anyway?

For the sake of simplicity, I'm going to assume the perspective of a single user at a single computer. However, HTTP requests can be made in other ways, by other machines.

An HTTP request in it's simplest form, is a request for information.

In my example, it comes from a browser ( so Chrome, Firefox, Safari etc). Type something in the address bar and hit `Return` and now the browser has sent an HTTP request into the internet.

Ignoring the content of what's actually in an HTTP request, let's pretend we've arrived at the web address typed by the user in their browser. And let's also pretend the address just happens to be Rails application! Let's keep watching the request....

### Using Visualization

I assume an HTTP request arrives at my Rails app similar to how people arrive at the front door of my house.

> Wait, what is the front door of the Rails app?

The "front door" of a Rails app is the `routes.rb` file. Or more specifically `/config/routes.rb`. That's considered the front door because in that file is (potentially) every possible type of HTTP request that could arrive, including instructions about where to go next, and what to do next.

### a quick example
Assume the original website was `www.vintageracecars.com/photos/`, then the part Rails is most interested in is the `/photos/` part.

Now let's take a look at our pretend `routes.rb` file:

```ruby
#app/config/routes.rb

get '/photos/', to:'photos#index'
```

What this is saying is: "When a `get` request for `/photos` shows up at the front door, send it to the `PhotosController` and specifically to the `index` action there.

Then do the stuff in `index`.

### Moving From the Front Door to In the App

The HTTP request has now moved from the `/config/routes.rb` file to the `app/controllers/photos_controller.rb`.

Rails then sends the HTTP request to the `index` action of the `photos_controller.rb`.

Any code there is then executed.

This may include lots of different things, depending on the context of the app. At this point, it may be helpful to lose sight of the HTTP request, because the App is most likely preparing an HTTP response that will include returning of some data, whether it be raw JSON data, or HTML data, or some combination of information.

### conclusion

And that's it! That's the very high level overview of a basic HTTP request from a browser to a Rails app!

There's definitely a lot more stuff that happens, but this article is like being in an airplane and flying over land and saying "oh look! Nebraska!" LOL

If you're interested in more, keep coding! Good luck!