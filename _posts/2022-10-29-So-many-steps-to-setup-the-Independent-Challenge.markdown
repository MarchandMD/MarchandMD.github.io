---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Setting it Up
Hey gang,

So many dang steps need to happen before looking at the user stories.

Here's a list that will hopefully help go from `git clone` to User story 1...

## The List of Steps:

1. `git clone` to wherever you keep things on your local machine
2. `bundle` or `bundle install` (they do the same thing)
3. Read the README.md
4. Review the existing `/db/schema.rb`
5. In `/db/schema.rb`, select all, and copy the data
6. Go to [www.dbdiagram.io](https://dbdiagram.io/home) and import your schema there, to get a visual representation
5. Plan updates to the schema, visually (like, write them with pencil and paper, or update via the website)
6. Create additional models, with their relationships (has_many, belongs_to, has_many through:)
7. create the db `rails db:create`
8. write migration `rails g migration <NameOfMigration> <column_name:data_type>' etc (see below for an example)

```ruby
rails g migration CreateDiscounts percentage:integer threshold:integer merchant:references
```
9. migrate the migration (`rails db:migrate`)
10. Repeat 8 and 9 as necessary
11. Review `/db/schema.rb` for correctness
12. **(optional) Add `SimpleCov` gem (don't forget to `bundle` or `bundle install`...they do the same thing); for most ICs this is already in the Gemfile
13. **(optional) And SimpleCov code to the top of `/spec/spec_helper.rb`

```ruby
require 'simplecov'
SimpleCov.start do
  add_filter "spec/rails_helper.rb"
end
```

14. Run `bundle exec rspec spec/models/` or whatever and make sure 100% coverage
15. Add additional tests for model relationships
16. ```ruby
      it { should have_many :items }
    ```
16. Start the user stories

## conclusion

There's still a lot of heavy lifting you have to do to make sure everything is correct, so go through this carefully and let me know if anything is wrong.

cheers!