---
layout: post
published: false
title: "Creating a Service in Rails"
tags: ruby rails services architecture patterns development design
---

## Setup
There's gotta be a `services` directory in the `app/` directory.

A "service" is kind of a strange name for it; But you gotta think like developers think. We want to be served. So serve us some data. We get data served to us through a service.

I'm just building on a past project. We used the `httparty` gem.

> Quickly add a gem to your gemfile from the command line by using `bundle add httparty`.....or if you want to be more explicit you could say `bundle add httparty -g 'development, test, production'` or you could specify a version (i literally just googled "specify a version with bundle add"....this ain't rocket surgery folks) `bundle add <gem-name> <version>`

Create a plain `.rb` file in the `services` directory. Name it something like `nhlapi_services.rb` or whatever you're planning to have served to you. Get HTTParty in the file.

```ruby
require 'httparty'
```

Ok, now that we have the file setup, let's start using HTTParty.

## Create a class with the Service object

When learning Ruby, there's so much emphasis on building and creating objects through classes. It almost elevates the idea of a class to like this rarified air of reverence. But classes are everywhere. There's probably a lot of reasoning behind such emphasis and importance given to classes (encapsulation being one of them, which is one of the pillars of OOP), but eventually seeing a class is going to become second nature.

```ruby
class NhlApiService
```

Or name it whatever resource/website/thing you're going to request data from. But end it with the name of Service. That's convention.

We're adding a single method at first. This is the method that'll be used in other methods within this class. It's a little strange, but not really. It's done this way to keep things clean/neat/encapsulated and adhering to something called SRP. (single-responsibility principle. Look it up)

Here's the method:

```ruby
def get_url(url)
  response = HTTParty.get(url)
  JSON.parse(response.body, symbolize_names: true)
end
```

This is sort of the method that'll do the neat stuff of going to grab the data from the API.

what's an API? I think of an API as a big warehouse with tons of data inside of it. I also imagine the warehouse has tons of doors all along the outside of it, and each door has an endpoint above that door. Accessing the API endpoint is like going to that warehouse, walking through that specific door, and grabbing the organized data and bringing it all back to your application.

But that's just me.

##



## paragraph 3

## paragraph 4

## paragraph 5

## conclusion
