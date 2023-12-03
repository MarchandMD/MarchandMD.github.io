---
layout: post
published: false
title:  "Cookies, and Sessions"
categories: cookies sessions rails controllers
tags: ruby cookies sessions rails controllers
---

There's too much confusion around these two ideas and there really doesn't need to be.

I'll start this conversation with a review of a Hash.

If I have an existing Hash, I can add new key/value pairs to it.

```ruby
my_hash = Hash.new

my_hash[:new_key] = "value to go with the new_key"
```

Now let's observe `my_hash`

```ruby
my_hash

{
  new_key: "value to go with the new_key"
}
```


Now instead of `my_hash`....imagine I wanted to store some data in the client browser. I could do this:


```ruby
cookies[:a_cookie_key] = "cookie data"
```

At this point, in any of the controller actions, I could get the value of `cookie data` by calling `cookies[:a_cookie_key]`, just like I would a hash key/value pair.


So setting cookies, and getting cookies is very similar to a Hash.

It's also very similar to Params, because params is like a Hash too.

Ok, so what?


Well how do cookies differ from sessions?

They don't in any Earth-shattering way.

But there is a Session object in Rails.

A session can add `key/value` pairs, just like other hashes.

But instead of just always being available.....they are encrypted, and they will expire.

How are they encrypted? Feel free to look into that yourself.

How long before they expire? Feel free to look into that yourself.

But that is the main difference between cookies and sessions.

A session object is a way to store cookies on the user's client (browser) in a way that will be encrypted, and with a built in expiration date/time into them.

That's it.

Don't let this idea be more intimidating than it already is.
