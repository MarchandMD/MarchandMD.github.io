---
layout: post
published: true # switch to true when I'm ready to publish this
title: "Watch an HTTP request move from a Browser through a Rails app"
---

### introduction
I'm learning Rails. Specifically, i'm doing [this lesson in TheOdinProject.](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails/lessons/routing)  

I use `localhost`. A lot. After I "spin up the Rails server", I can see my website/web app live. 

I type `localhost:1234` (or whatever number port I happen to be using) and then hit enter, and _VIOLA!_ my website appears in the brower. 

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

#### section 1  
The discussion begins with an HTTP request being sent to the application. An HTTP request comes from the address bar in a browser, or from clicking a link in the app, or webpage. Every time an HTTP request happens there are generally 2 things that are sent to my app: A verb, and an address. For the sake of this article the verb will always be `GET` and the address will look like `/patients/17`. Obviously this is only part of what would be typed in an address bar. The rest of the address would look something like: `https://www.mycoolapp.com/` so the entire thing would be: `https://www.mycoolapp.com/patients/17`. We're only concerned with the last two portions. So this is the beginning of the flow along a Rails routing path. There's a proper HTTP request which arrives with an HTTP verb `GET` and an address in the form of `/patients/17`. Now that we have the first part of the Rails routing signal-flow, the next step is to observe how a Rails app will handle that request. 

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