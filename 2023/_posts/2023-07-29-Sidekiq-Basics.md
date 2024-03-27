---
published: true
layout: post
title: "Sidekiq + Redis + Background Jobs (aka workers)"
tags: sidekiq ruby rails
---

| ToC                                                     |
| ------------------------------------------------------- |
| [Intro](#intro)                                         |
| [What is Sidekiq](#what-is-sidekiq)                     |
| [When is Sidekiq in action](#when-is-sidekiq-in-action) |
| [Why use Sidekiq](#why-use-sidekiq-and-redis-and-jobs)  |
| [Conclusion](#conclusion)                               |

### Intro

This is about Sidekiq. What it is, when it is in action, and why it's used.

To get everything you need from this article you should have a basic understanding of:

1. a typical HTTP request/response cycle
2. an idea of some action that you want to perform at a certain time separate from that HTTP request/response cycle



### What is Sidekiq?

According to the [Sidekiq Github wiki](https://github.com/sidekiq/sidekiq/wiki)

> Sidekiq is a full-featured background job framework for Ruby

It's a framework.

It helps to perform jobs. Jobs are a Ruby class with only one method: `perform`. Jobs looks something like this:

```ruby
class EmailJob
  include Sidekiq::Worker

  def perform(*args)
    # cool code goes here to perform
  end
end
```

Any normal Ruby code can be placed in the `perform` method.

There are some "magical" nuances to how the `perform` method is called.... However, the focus of this article is on Sidekiq.

The reason this Job is being displayed is because a Job (aka a Worker) is part of the convention in Rails, and it's what Sidekiq uses to create separate threads.

A thread is a process. Running `rails s` is an example of a process. Running `rails c` is another example of a process. Being able to run more than 1 thread with an app is what Sidekiq does.

### When is Sidekiq in action?

First, some context:

Typically an HTTP request happens from start to finish.

A browser makes an HTTP request (the usual GET, POST, PUT, PATCH, DELETE actions), and then a server replies with an HTTP response.

Sidekiq can be seen in action when a job is called during that request/response cycle.

Sidekiq is "happening" when the HTTP request/response cycle runs to completion..._and_ a job was triggered inside a controller action during that request/response cycle to be run at some other time _outside of the HTTP request/response cycle_.


When the job is triggered, a Rails app that is using Sidekiq will then start using something called Redis to create a queue (aka a line...like a line of people waiting to get on a ride at Disneyland).

So to use Sidekiq, there needs to be a Job in place, and Redis needs to be running and/or in use.

This of course begs the question: how do we know if Redis is running?

Redis is like PostgresQL; it's sort of an always on thing, at least locally.

But this isn't about Redis, this is about Sidekiq.

It's nearly impossible to talk about Sidekiq without also mentioning Redis and Jobs.

### Why use Sidekiq (and Redis and Jobs)

It's not at all necessary to use Sidekiq in simple apps.

Most likely everything you've built is simple. You build an app. It displays some stuff using the usual CRUD behaviors.

If the app is bigger and could do other things behind the scenes, maybe it'd be a good idea to use a background job framework. Like Sidekiq.

Some examples of things to be done behind the scenes could be:

1. Send a new user who just signed up a welcome email
2. Send an email to a user who didn't complete a form
3. Send an SMS when a package is picked up from a vendor
3. Schedule a call to an external API, to update data

Imagine a user signs up to a new website but doesn't add all their details. In order to get them to come back to the website tomorrow, it might be a good idea to create a background worker/job to trigger an email reminding them to finish setting up their profile.

### Conclusion

Sidekiq is a background jobs framework.

For it to work, your machine needs to be running Redis (kind of like it runs PostgresQL).

And your app needs to have a job in place that gets triggered as part of a normal HTTP request/response cycle.

A browser makes an HTTP request, which goes to an app Controller and method. In that method is a call to a Job. The Job is then added to a queue on the Redis database. Sidekiq will then perform that Job later. HTTP response done. Sidekiq side job is queued up.

That's a high level overview of Sidekiq + Redis + Jobs.

Thanks for reading!