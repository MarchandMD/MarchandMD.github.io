---
layout: post
published: true # switch to true when I'm ready to publish this
title: "Watch an HTTP request move from a Browser through a Rails app"
---

### introduction
I'm learning Rails. Specifically, i'm doing [this lesson in TheOdinProject.](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails/lessons/routing)  

I use `localhost`. A lot. After I "spin up the Rails server", I can see my website/web app live. 

I type `localhost:1234` (or whatever number port I happen to be using) and then hit enter, and _VIOLA!_ my website appears in the browser. 

So what happens _after_ I hit enter (or return) to make my website appear in the browser?

The rest of this article will try to illustrate the answer to that question. 

Now, imagine typing an address in the address bar is the same thing as thinking of something you want to see. 

Hitting enter (or return) would be like telling someone to go get that thing and bring it back to you, and place it in front of you. 

Of course this is a very simplistic and general idea....

and it is an analogy for making an HTTP request. The thing you typed in the address bar of the browser? That's the request. 

Hitting enter (or return)? Well what's that? That, my friends, is part of the magic of the internet which isn't really magic at all. 

Hitting enter (or return) is known as "making an HTTP request". So is clicking a link, so is filling out a form on a webpage, so is visiting a website from your search history. 

Lots of HTTP requests are being made right now.

And if you're reading this, you're _not_ making an HTTP request; you already did. What you're doing now is viewing the successful results of an HTTP request. 

The rest of this article will discuss just exactly how an HTTP request goes from wherever it starts (clicking a link, typing a web address in the address bar, etc) all the way through a Rails application. 

### section 1  - What exactly is in an HTTP request, anyway?
Hitting enter (or return) tells the browser to create and then send an HTTP request. 

For the sake of ease I'm going to sometimes refer to an HTTP request as 'a request' for the rest of this article. Sometimes I'll say 'HTTP request' and other times I'll just say 'request'. Deal with it.

Yeah, you probably though the browser was just something sort of dumb that just did what you told it to do. 

I'm here to tell you your browser is actually very capable of doing many things. Two of those things are 1. creating HTTP requests and 2. sending HTTP requests. 

Every time the browser builds a request, it _wants_ 2 specific things: An HTTP verb and a web address.

Ugh, this is starting to get complicated....

So let's take a step back then. We're talking about HTTP requests and what they are. 

  - They're things created (and sent) by the browser
  - They have a verb and an address  

Ok, maybe it's not that complicated then....

The verb is `GET`. Not always. Not all the time. There are other verbs. If you must know what the other verbs are, just search "HTTP verbs". Here, i'll do it [for ya, lmao](https://www.google.com/search?hl=en&q=what%20are%20HTTP%20verbs) 

Just squash that other curiosity for a second and keep the eyes on the prize.

The HTTP verb is `GET`. Where does the address come from? 

Yep: the address bar. 

The website you typed is the address. That's the location. 

So the verb is `GET` and the address is in the address bar. 

So now the browser has ([most of](https://gavilan.blog/2019/01/03/anatomy-of-an-http-request/)) what it needs to make an HTTP request. 

Hitting enter tells the browser to `GET` the "address". 

Simple enough, right? 

Well yeah. However, we're going to follow that HTTP request. We're going to pretend it's moving super slow and that we as humans can watch it move from the browser then over the magic of WIFI or an ethernet cable to the internet, and through all kinds of "traffic" to a server where the "address" is. 

So let's now pretend we've arrived at the address. And the address just happens to be the Rails application I'm building! Let's keep watching the request....

#### section 2 - making a small change

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