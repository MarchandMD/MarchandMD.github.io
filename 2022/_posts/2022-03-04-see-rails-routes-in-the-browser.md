---
layout: post
published: true
tags: ruby rails routing http
---

|section|
|-|
|[Look at the routes](#look-at-the-routes)|
|[Other ways to view the routes](#other-ways-to-view-the-routes)|


# Look at the routes
There's a really handy shortcut to looking at the routes available when developing a Rails app.

When i've run `rails s` (which "spins up" the local server), I can see the application in the browser by going to (usually) https://localhost:3000

If i'm in the browser and the application is running, then in the browser address bar, if I just tack on `/rails/info/routes` to i'll get all the routes right there in the browser.

https://localhost:3000/rails/info/routes

# other ways to view the routes

the alternative way to view the routes is the standard

```
rails routes
```

It's also possible to look at the routes for a specific `-c` controller...
```
# assuming there's a controller for users...
rails routes -c users
```
