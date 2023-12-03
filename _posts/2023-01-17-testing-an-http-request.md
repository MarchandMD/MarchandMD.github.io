---
layout: post
published: false
title:  "Testing an HTTP request in Rails with RSpec"
categories: testing rspec http api
tags: testing rspec http api rails ruby
---

# Givens

Just like in high school algebra, approaching any problem/challenge requires knowing where you're starting from, what you already know, and what the goal is. Below is a list of things that are given, or assumed, prior to being comfortable with the rest of the article.

* This article is being written while creating an API-only Rails app
* The thing being tested is an endpoint, AKA an HTTP request to a specific API endpoint
* The rest of this article assumes you've already setup a basic Rails project; version doesn't matter for this article
* You're using RSpec to test and have run `rails g rspec:install`
* You're familiar with namespacing in the routes file

# Setting things up

Now that we're on the same page, let's begin.

We're testing a request, so in the `/spec` directory, let's add a sub-directory called `/requests`.

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

We are now setup to test this API endpoint.

A quick note about what this means, at a high level: I'm imagining as though my app is receiving an HTTP request. So someone else somewhere in the world is going to initiate an HTTP request from their browser (Chrome, Firefox, whatever) and that HTTP request is coming to my app. Cool.

# Testing the Request: step 1 - add the route

I've received instructions about what endpoint i'm to be testing. Those instructions say something to the effect of:

> expose the endpoint `GET  "/api/v1/recipes?country=#{country}"`

There are some other details that have been provided. But they don't really matter to this article. If you're interested, I'll add them [here](#appendix).

So now I know what endpoint needs to be exposed. What does that endpoint look like?

It looks like a file path. Or a route. But it's an HTTP request. Which is kind of the same thing as a file path.

Anytime something from outside the application (and even inside the application) comes to  the application, it first arrives at the routes file. I typically think of things from this perspective often. A new request starts at the `/app/config/routes.rb` file. So let's go there.

```ruby
# /app/config/routes.rb

namespace :api do
  namespace :v1 do
    # we add this line to tell the app what HTTP verb to expect in the request, which will be 'get', what path to expect '/recipes' and where to send it, to the RecipesController#index action'
    get '/recipes', to: 'recipes#index'
  end
end

```

If you didn't read the comment, the line `get '/recipes', to: 'recipes#index'` tells our API-only application a few things:

1. to expect a `get` request
2. to expect that `get` request to be looking for `/recipes`
3. to send those requests to the `recipes controller` and then more specifically to the `index action`

So now that's done, let's close `routes.rb` and it's time to add code to the test file.

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

At this point I would run the test file, and I would expect it to fail, with the following failure message (yours may vary slightly):

```

Failures:

  1) Get a countries recipes returns a countries recipes
     Failure/Error: get "/api/v1/recipes?country=#{country}"

     ActionController::RoutingError:
       uninitialized constant Api
     # ./spec/requests/get_a_countries_recipes_spec.rb:7:in `block (2 levels) in <top (required)>'
     # ------------------
     # --- Caused by: ---
     # NameError:
     #   uninitialized constant Api
     #   ./spec/requests/get_a_countries_recipes_spec.rb:7:in `block (2 levels) in <top (required)>'

Finished in 0.11544 seconds (files took 1.22 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/requests/get_a_countries_recipes_spec.rb:4 # Get a countries recipes returns a countries recipes
```

I see "uninitialized constant Api" twice; I also see "ActionController::RoutingError", which is telling me there's a routing error.

This error was expected. RSpec is alerting me that there is no route to something called API. Let's fix that.

# Creating the controller

When building an API not a lot is different, aside from the organization of things.

Let's create a controller.

In `/app/controllers/` add a new directory, called `api`.

Now, in `/app/controllers/api` add a new directory called `v1`.

So we just made two directories, one inside the other. Now add a file in `/app/controllers/api/v1/` and call it `recipes_controller.rb`.

Perfect.

So now, let's add the typical Rails code here in this file:

```ruby
# /app/controllers/api/v1/recipes_controller.rb

class Api::V1::RecipesController < ApplicationController
  # code goes here
end
```

This should solve the old failure, and provide a new one. We've given RSpec the next step, the controller. I imagine RSpec will now complain about not being able to find the `index` action.

Let's run the test and see if my expectation is correct.

```

Get a countries recipes
  returns a countries recipes (FAILED - 1)

Failures:

  1) Get a countries recipes returns a countries recipes
     Failure/Error: get "/api/v1/recipes?country=#{country}"

     AbstractController::ActionNotFound:
       The action 'index' could not be found for Api::V1::RecipesController
     # ./spec/requests/get_a_countries_recipes_spec.rb:7:in `block (2 levels) in <top (required)>'

Finished in 0.0822 seconds (files took 1.22 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/requests/get_a_countries_recipes_spec.rb:4 # Get a countries recipes returns a countries recipes
```

It says failure, but somehow I'm not discouraged by it. Because it's a new failure.

It reads "AbstractController::ActionNotFound". I know what an action is. Actions are the things found in the controller: index, show, new, create, edit, update, destroy.

So my expectation is correct. Next, let's build the simplest possible thing. The `index` action.

# Adding the `index` action


# Appendix
- The other details were about the HTTP headers to be included in the request. Specifically `Content-Type: application/json` and `Accept: application/json`. I don't want to explain these here. Feel free to Google them.


