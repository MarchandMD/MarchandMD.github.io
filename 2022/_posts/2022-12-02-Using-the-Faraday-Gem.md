---
layout: post
published: true
tags: gems ruby rails
---

## Introduction

When consuming _data made available by a 3rd party API_ (I've always disliked the confusion introduced when saying 'consuming an API'), the `Faraday` gem is a very popular and concise way to create the connection to the API data.

This article will attempt to succinctly describe how to use the `Faraday` gem.

Prerequisites:

1. A Rails app
2. An API you actually want to access
3. `bundle add faraday` (If you want to see what this command will do, open your Gemfile, scroll to the bottom of the page, and then run this command in the terminal/commandline; the gem will automagically appear)
4. `bundle` (it's the same as `bundle install`)

Nice to haves:

1. You've installed and are using `Figaro` gem or maybe `DOTENV` gem, but TBH that's not really required to gain some value from this article

## Defining the `conn` method in a `service` directory

Provided you've done the prerequisites from above...

In your Rails `/app` directory, create a new directory called `services`.

In the `services` directory, create a blank `.rb` file, and name it something obvious. The typical convention is to name it something similar to the API data being retrieved. For example, we're consuming the TMDB API, so this will be called `tmdb_services.rb`

Again, the file path looks like this, starting at the root (aka home) directory of your app:

```
my_cool_rails_app/app/services/tmdb_services.rb
```

The file is plural, because there will be multiple endpoints accessed...and then _SERVED_ to you (like a plate of food is served to you).

Add this code:

```ruby
### app/services/tmdb_services.rb

def conn
  Faraday.new(url: "https://api.themoviedb.org") do |faraday|
    faraday.params['api_key'] = ENV['tmdb_api_key']
    faraday.params['language'] = 'en-US'
  end
end
```

If you want to know how this works, or if you want to include headers as opposed to params, checkout the [official Faraday docs here](https://lostisland.github.io/faraday/usage/)

Quickly, what this is doing is: Creating a `new` Faraday "connection" which is just fancy way of saying, this is a reusable thing can specify a base url for the API location, as well as automatically include default `params` (which will be query params) to include with every request. See docs for more improvisational techniques with this code

## Preparing to `get_url` using the `conn` method and parsing the JSON

Next, directly above (or below, it doesn't really matter) the `conn` method, copy and paste this code:

```ruby
  def get_url(url, params = nil)
    response = conn.get(url, params)
    JSON.parse(response.body, symbolize_names: true)
  end
```

this method will be called `get_url` because that's what it will be doing. And to use it, I will chain it onto the `conn` method we just created.

So now, for "how" this method will work:

1. `response = conn.get(url, params)` will do the actual retrieval of data from the API. The `conn` method only had the base url, the `get_url` method will take the API endpoint. Then Faraday will combine the base url with the endpoint. `params` are optional in case there are additional parameters to be added to the request; any `params` defined here will be amended onto the default `params` defined in the `conn` method.
2. `JSON.parse(response.body, symbolize_names: true)` is doing some JSON magic and turning the returned data into something a little more familiar: a Ruby Hash object, with symbols for names.

A quick note about `params`: their order doesn't matter.

Now that we've established a connection, and a way to `get_url`....lets finally make a method that _actually_ goes and gets data from the external API.

## Retrieving information from the API

in the same file, write this method:

```ruby
def top_rated
  get_url("/3/movie/top_rated")
end
```

This method uses the `#get_url` method that was just created. The URL is hard-coded. One of the few places in coding where we see hard-coding and it's permissible/allowable/allowed/ok.

To understand what this will do....I'll leave it up to you. But essentially it's just creating a "daisy-chain" back to the `#get_url` method....which links back to the `#conn` method....which uses the `Faraday.new` thingy....

## Ok, but so what?
Right?! The question is, now what? How do you use all these things? And when do we get to see the data in the view?!

That's another article, so I'll say at this point, the application is capable to reach to an API and grab the data and bring it back to the website.

If you're absolutely busting and need to know how to do this, a quick and dirty way to do this would be to go to a controller, and say perhaps the #index action and do something like `@top_rated_movies = TmdbService.new.top_rated` or if you want to display this in a view, but there's a better way to do this.

## conclusion

Ok, that's it for now. Hope this helps.
