---
layout: post
published: true # switch to true when I'm ready to publish this
title: "Visualize HTTP requests through a Rails App"
tags: rails HTTP
---

### introduction

As a baby dev, understanding "where" I am in a problem is vital to helping me troubleshoot.

Being able to visualize the HTTP request/response cycle in a novel way is often essential to getting a grasp on the nature of a bug.

The rest of this article will be a glimpse into my mind: how I think about the HTTP request/response cycle within a Rails App.

### section 1  - What exactly is in an HTTP request, anyway?

For the sake of simplicity, I'm going to assume the perspective of a single user at a single computer. However, HTTP requests can be made in other ways, by other machines.

An HTTP request in it's simplest form, is a request for information.

In my example, it comes from a browser ( so Chrome, Firefox, Safari etc). Type something in the address bar and hit `Return` and now the browser has sent an HTTP request into the internet.

So let's now pretend we've arrived at the web address typed by the user in their browser. And the address just happens to be Rails application! Let's keep watching the request....

#### section 2 - making a small change, even smaller

Now  a valid request has arrived at the "front door" of my Rails app.

> Wait, what is the front door of the Rails app?

The "front door" of the Rails App is the `routes.rb` file. Don't ask me how it is. Or why it is. I just know that `routes.rb` is the starting place when thinking about an incoming HTTP request.

Rails will "look" at the address included in the request that has just arrived from the browser.

If we pretend that the address we originally typed in the address bar was `www.vintageracecars.com/photos/` , then the part Rails is most interested in is the `photos/` part.

That `photos/` part of the address is essentially asking about the main `photos/` page....assuming my Rails app has a main `photos/` page. Lucky for us, it does!

Now Rails knows that the browser is asking about the main `photos/` page.... but what exactly is the browser asking for?

The browser is asking to `GET` the main `photos/` page.

At this point, i'm hoping bells and whistles are going off because you recognize the `GET` as the HTTP VERB mentioned earlier.

Now let's take a look at our pretend `routes.rb` file:

```ruby
#app/config/routes.rb

get '/photos/', to:'photos#index'
```

Maybe this is starting to make more sense as to why the `routes.rb` file is the front door. That single line of code has the HTTP verb at the start, followed by the "interesting" part of the address, and then some other stuff.

> Wait, what's that other stuff?

The "other stuff" is an instruction for Rails. It tells Rails where to go within my app, and what to do when it gets there.

I know that was not a lot of words but a lot of information. Don't get intimidated. You got this!

### section 3 - What Rails does after it knows what to do

Up to this point we followed everything from putting an address in a browser address bar, to watching the browser build and send an HTTP request and then rode along all the way into my Rails app and specifically the `routes.rb` file.

there we just saw the HTTP verb and the address (the important stuff) and we finished with looking at the instructions for Rails. If you don't remember, that was the "other stuff". To refresh your mind it looked like this:

```ruby
# app/config/routes.rb

get '/photos/' to: 'photos#index'
```

So what that says is "when a GET request for the photos/ address comes in, go to the photos controller and perform the index action".

Rails then sends the HTTP request over to the `photos_controller.rb` file.

> Wow, there's so much stuff in that file!

Well yeah, but I don't really care about all of it. I only care about the part that says `def index`.

Rails knows that it is targeting the `#index` action/method because that's what it's supposed to do, per the line in `routes.rb`.

So now Rails goes down to the `index` action (also known as a method).

At this point it's a little easier to understand what's going on. Rails is going to "run" or perform any Ruby code that's sitting inside the `index` action/method.

Often times when first learning some of these methods will be empty. That's totally ok.

> What happens when the method/action is empty?

Nothing much. There's no Ruby code to perform in the `photos#index` action so Rails simply moves on to the next part.

Rails sends the HTTP request from the `index` action of the `photos_controller.rb` to the `index` view for the photos.

> Hold up. Where did this "view" come from?

For every controller that exists, there's a corresponding folder (or directory) that contains all the views for that controller.

We have a `photos_controller` so we have a `app/views/photos/` directory. Got it?

> I think so....

Good. In `app/views/photos/` there's a file with a name similar to `index.html` (or maybe `index.html.erb`). That's a basic web page.

At this point Rails has some HTML to send back to the browser! Through the magic of Rails it now turns the HTTP request into an HTTP response and sends everything back to the browser!

Easy peasey! Right?!

### conclusion

And that's it! That's the very high level overview of a basic HTTP request from a browser to a Rails app and back again!

There's definitely a lot more stuff that happens, but this article is like being in an airplane and flying over land and saying "oh look! Nebraska!" LOL

If you're interested in more, keep coding! Good luck!