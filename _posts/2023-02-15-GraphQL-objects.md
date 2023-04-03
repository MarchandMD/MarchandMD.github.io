---
layout: post
published: false
title: "GraphQL - working with Types and objects"
tags: GraphQL API
---

| table of contents                |
| -------------------------------- |
| 1. [introduction](#introduction) |
| 2. [types](#types)               |
| 2. [testing](#testing)           |

# introduction

This article will walk through the process of turning data into a graphQL response.

Specifically, data is going to be grabbed from the NHL Api using traditional ReST conventions, and re-packaged as a graphQL query.

# types

Let's add a Type.

A type is graphQL's version of a Model Object, or a PORO. A Type does the heavy lifting of behaving both like a serializer and a Model.

# testing

In the first article I setup the app to use RSpec. Now the app needs a place to hold all the tests for the graphQL queries (or mutations). From the root of the app in the commandline, run this command:

```
mkdir -p spec/graphql/queries && touch spec/graphql/queries/get_all_teams_spec.rb
```

in `spec/graphql/queries/get_all_teams_spec.rb` add the following:

```ruby
require 'rails_helper'

describe 'Teams query' do
  describe 'happy path' do
    it 'gets all teams' do
      result = NhlapiGraphqlSchema.execute(query).to_json

      parsed_response = JSON.parse(result, symbolize_names: true)

      require 'pry'; binding.pry
    end
  end
end
```

Now i need to build the method called `query` that is used in the argument for `#execute(query)` above.

This will be done directly in the spec file, but outside of everything else. Below everything else in the spec file add this:

```ruby
def query
  <<~GQL
    {
      teams {
        id
        name
      }
    }
  GQL
end
```

This is an actual graphQL query that is being used in the unit test. It's meant to mimic what an actual graphQL query would look like from an external client.

Running the test will now result in hitting the `pry`, and it's possible to inspect the result.
