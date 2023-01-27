---
layout: post
published: false
title:  "Testing an HTTP request in Rails with RSpec"
categories: testing, rspec, http, api
---

# Givens

Just like in high school algebra, approaching any problem/challenge requires knowing where you're starting from, what you already know, and what the goal is.

* This article is being written while creating an API-only Rails app
* The thing being tested is an endpoint, AKA an HTTP request to a specific API endpoint
* The rest of this article assumes you've already setup a basic Rails project; version doesn't matter for this article
* You're using RSpec to test
* You already have a `/spec` directory in your project
* You're familiar with namespacing in the routes file

# Setting things up

Now that we're on the same page, let's begin.

We're testing a request, so in the `/spec` directory, let's add another directory called `/requests`.

Now create a spec file that describes the name of the request. For example, my spec file will be called `get_a_countries_recipes_spec.rb`.

So the full file path from top to bottom is: `<name-of-my-app>/spec/requests/get_a_countries_recipes_spec.rb`

In the spec file (`get_a_countries_recipes_spec.rb`) we'll now setup the basic outline for the rest of the tests:

```ruby
require 'rails_helper'

describe 'Get a countries recipes' do
  it 'returns a countries recipes as json data' do
    # test code will be added by us here later in this article
  end
end
```

We are now setup to test this API endpoint as though it were going to receive an HTTP request from somewhere else on the internet. Cool.

# Testing the Request: step 1 - add the route

I've received instructions about what endpoint i'm to be testing. Those instructions say something to the effect of:

> expose the endpoint `GET  "/api/v1/recipes?country=#{country}"`

There are some other details that have been provided. But they don't really matter to this article. If you're interested, I'll add them [here](#appendix).

So now I know what endpoint that needs to be exposed. What does that endpoint look like?

It looks like a file path. Or a route. But it's an HTTP request. Which is kind of the same thing as a file path.

Anytime something from outside the application (and even inside the application) approaches the application, it starts at the route file. I typically think of things from this perspective often. A new request starts at the `/app/config/routes.rb` file. So let's go there.

```ruby
# /app/config/routes.rb

namespace :api do
  namespace :v1 do
    # we add this line to tell the app what request to expect 'get', what path to expect '/recipes' and where to send it, to the RecipesController#index action'
    get '/recipes', to: 'recipes#index'
  end
end

```

If you didn't read the comment, the line `get '/recipes', to: 'recipes#index'` tells our API-only application a few things:

1. to expect a `get` request
2. to expect that `get` request to be looking for `/recipes`
3. to send those requests to the `recipes controller` and the `index action`

So now that that's done, it's time to add code to the test file.

```ruby
# we are in this file: /spec/requests/get_a_countries_recipes_spec.rb

require 'rails_helper'

describe 'Get a countries recipes' do
  it 'returns a countries recipes as json data' do
    country = "laos"

    get "/api/v1/recipes?country=#{country}"
  end
end
```










# Appendix
- The other details were about the HTTP headers to be included in the request. Specifically `Content-Type: application/json` and `Accept: application/json`. I don't want to explain these here. Feel free to Google them.


