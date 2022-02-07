---
layout: post
published: true # switch to true when I'm ready to publish this
title: "Watch an HTTP request move from a Browser through a Rails app"
---

### introduction
I'm learning Rails. Specifically, i'm doing [this lesson in TheOdinProject.](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails/lessons/routing)  

I use `localhost`. A lot. After I "spin up the Rails server", I can see my website/web app live. 

I type `localhost:1234` (or whatever number port I happen to be using) and then hit enter, and _VIOLA!_ my website appears in the browser. 

What happens _after_ I hit enter (or return)? 

Imagine typing an address in the address bar is the same thing as thinking of something you want. 

Hitting enter (or return) would be like telling someone to go get that thing and bring back to you, and place it in front of you. 

Of course this is a very general idea....and it is an analogy for making an HTTP request. The thing you typed in the address bar of the browser? That's the request. 

Hitting enter (or return)? Well what's that? That, my friends, is part of the magic of the internet which isn't really magic at all. 

Hitting enter (or return) is known as "making an HTTP request". 

So is clicking a link, so is filling out a form on a webpage, so is visiting a website from your search history. Lots of HTTP requests are being made right now.

And if you're reading this, you're _not_ making an HTTP request; you already did. What you're doing now is viewing the successful results of an HTTP request. 

The rest of this article will discuss just exactly how an HTTP request goes from wherever it starts (clicking a link, typing a web address in the address bar, etc) all the way through a Rails application. 

### body of article

#### section 1  - What exactly is in an HTTP request, anyway?
So, hitting enter (or return) tells the browser to create and then send an HTTP request. 

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

#### section 2
Now that a valid HTTP request has arrived, Rails will "look" at the pattern of the address as well as the HTTP verb of `GET`. Essentially, the application will go into the `/config/routes.rb` file and look for some hard code that has been typed by the developer. In this example, in the `/config/routes.rb` file the Rails app will find this line of code: 

```ruby
get '/patients/:id`, to:`patients#show`
```

I notice that this line begins with the HTTP verb of `get` which matches the incoming HTTP request. The next part is `/patients/:id` which also matches the pattern of the incoming address from the HTTP request `/patients/17`. Since the HTTP verb matches, and the HTTP address matches, Rails will go along the rest of the hard code in `/config/routes.rb` and will see that it's been hard coded to `patients#show`. This is a controller#action combination. Before moving this conversation to the Patients controller, and the show action, I'll mention that at this point, Rails has added the number `17` to the `params` hash. What this means is during this signal-flow for this HTTP request, it's possible to access the number `17` by referring to `params[:id]` in the appropriate place. This begs the question: where is the appropriate place? The appropriate place would be the final step in this signal-flow chain of events, going to the `Patients` controller, and it's `show` action. 

#### section 3

In the second step of the signal-flow, Rails matched the HTTP verb and HTTP address being requested to a controller and action pair, which it found in the `/config/routes.rb` file. 

Now that Rails has a controller action pair, the final step is to take the value of `17` which is stored in the `params` hash and go to the `Patients` controller, and the `show` action. 

Since a controller's action is paired with a view, Rails will return the `Patients#show` view to the browser. So that's a controller, it's associated action, and it's associated view. It's a lot, but keeping in mind that it's more a path rather than things accumulating, can be a helpful idea. One thing I will mention is this: when Rails is in the `Patients` controller and at the `show` action, there's a good chance that there is some ruby code happening there. For example, it's safe to assume that Ruby will somehow call the `params[:id]` data to access the number of `17`. Or it's possible that the view will somehow have some embedded ruby (ERB) that calls `params[:id]` so that it can access any data associated to patient id 17. All this would happen during the signal-flow and before the view is returned to the browser/user. 

### conclusion  

And that's it for this article. That's the highest level overview of the basic behavior of the route through Rails an HTTP request can take. It's important to note that Rails has other capabilities with routing and how it's configured, but those items are beyond the scope of this article. HTTP requests connect code constantly. It's a good concept to have a firm grasp on because it involves many parts of the software and it describes the signal-flow of an interaction with a browser/user. 