---
layout: post
published: true
tags: turing ruby rails
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
7. Plan updates to the schema, visually (like, write them with pencil and paper, or update via the website)
8. Create additional models, with their relationships (has_many, belongs_to, has_many through:)
9. create the db `rails db:create`
10. write migration `rails g migration <NameOfMigration> <column_name:data_type>` etc (see below for an example)

```ruby
rails g migration CreateDiscounts percentage:integer threshold:integer merchant:references
```
11. migrate the migration (`rails db:migrate`)
12. Repeat steps 10 and 11 (or really, 10...and then 1, because I can't format the list to play nice....so you'll write the migration (step 10), and then migrate the migration)
13. Review `/db/schema.rb` for correctness
14. **(optional) Add `SimpleCov` gem (don't forget to `bundle` or `bundle install`...they do the same thing); for most ICs this is already in the Gemfile
15. **(optional) And SimpleCov code to the top of `/spec/spec_helper.rb`
```ruby
require 'simplecov'
SimpleCov.start do
  add_filter "spec/rails_helper.rb"
end
```

16. Run `bundle exec rspec spec/models/` or whatever and make sure 100% coverage
17. Add additional tests for model relationships
18. Add Validations

```ruby
it { should have_many :items }
```
19. Start the user stories

## conclusion

There's still a lot of heavy lifting you have to do to make sure everything is correct, so go through this carefully and let me know if anything is wrong.

cheers!