---
layout: post
published: true
title:  "How to install and configure factory_bot_rails"
tags: ruby rails testing factorybot rspec development tdd
---

## Using `factory_bot_rails`

Here's how to use `factory_bot_rails`. Explanation of what FactoryBot is can be found at the end of the article, maybe....

pre-requisites:

1. a working Rails app
2. the Faker gem already installed and bundled

As always, add the Gem quickly to an existing Rails app with the `bundle add` command:


```
bundle add factory_bot_rails -g 'development, test'
```

If you want to see this gem automatically added to your gemfile, pop open your Gemfile and scroll to the end of it, then run the command above. You'll see Bundler add the gem to the Gemfile. Cool stuff.

## Add this line to "spec/rails_helper.rb"

Open up the `spec/rails_helper.rb` file. Find the "RSpec configuration block". It'll look something like:

```
RSpec.configure do |config|
  # more cool code here
```

now add this line somewhere inside that block (it doesn't really matter, just put it on a new line somewhere; shouldn't be too hard to not mess this up...)

```
  config.include FactoryBot::Syntax::Methods
```

What does this do? Great question! [Here's a quick link to the FatoryBot "getting started" file](https://github.com/thoughtbot/factory_bot/blob/main/GETTING_STARTED.md#configure-your-test-suite)

## Now create a factory

It's "easier" to create a factory by simply generating a Model, but this is how to build a factory from scratch.

1. `mkdir spec/factories/`
2. `touch spec/factories/<the_name_of_your_model_>.rb` but make it plural (so if the model is Book, name it `spec/factories/books.rb`)
3. If you generated the factory using a rails model generator, this file will already exist and have this code inside it:

```ruby
FactoryBot.define do
  factory :book do
    title { "MyString" }
    author { "MyString" }
    genre { "MyString" }
    summary { "MyText" }
    number_sold { 1 }
  end
```

3. But if you didn't automatically generate this file, copy and paste that code....and then update the attributes (title, author, genre, summary, number_sold) to match whatever attributes your model has.

The stuff inside the curly braces is where we can use the Faker gem to automatically generate some fake data. Like this:

```ruby
FactoryBot.define do
  factory :book do
    title { Faker::Book.title }
    author { Faker::Book.author }
    genre { Faker::Book.genre }
    summary { Faker::Lorem.paragraph }
    number_sold { Faker::Number.within(range: 1..10) }
  end
end
```

> 'That's cool Mike, how do I learn more about using the Faker Gem?'

[Here's a link to the Faker gem documentation](https://github.com/faker-ruby/faker)

And as always, it's possible to go to RubyGems.org and search for stuff there. You do have free will....

You now have a working factory that can crank out fake test data in your RSpec files.

## Cool! So what? How do I use this?

Go to any spec file. Anywhere you need to CREATE an instance of a thing, you can just do this:

```ruby
it 'has some behaviour' do
  book_created_by_a_factory = create(:book)
  # cool code skipped here
end
```

Obviously that's a ridiculously long name for a variable, though that's all you need to do.

some other things that can be done:

```ruby
it 'has some behaviour' do
  factory_book_id = create(:book).id
  # cool code skipped here
end
```

I called the `#id` method on the book that was created by the factory. Now the `factory_book_id` is a variable that is storing the ID of that book. Good to use if you have to use the ID in a bunch of routes.....

Another option, if needing to specify one of the attributes:

```ruby
it 'has some behaviour' do
  add_a_pre_determined_value_to_one_of_the_attributes = create(:book, title: 'I just made this up')
  # cool code skipped here
end
```

Again, that variable name is awful, though it is illustrative. I now have a book, created by a factory, with a title that is known. Can be good if the book "belongs_to" another object, and you have to specify a `merchant_id` or something like that.

## A little more detail

In those "it" blocks above, the thing that was the FactoryBot was the `create` method. Without having the `factory_bot_rails` gem in your app, that `create` method won't work.

It might be a little confusing, seeing as how in a different context you're creating _actions_ in controllers in Rails that happen to also be named `create`.....but that's a Controller action....this is the factoryBot `create` method. You're doing different things with each of those `create` methods.

Coming up with fake data can really be a drag on the development process, especially for new learners. Free up some of your "psychic energy"....AKA your attentional awareness by using Faker and FactoryBot to come up with those silly things for you.

## It's also possible to create a lot of Fake things at once, using a Factory

There's a way to make lots of things all at once, using `create_list`:

```ruby
it 'has a lot of things' do
many_books = create_list(:book, 10)
### cool code skipped here
end
```
This'll make 10 books.

Now, keep in mind, this is happening in the "test" environment. That means when these factory things are created, they're being populated into the "test database". That's different than the development database.

But if you wanted to use these technologies to "seed" your development database, I suppose that could be done too, in the seeds.rb file.

There's probably a lot more flexibility to be used with FactoryBot. This is just one version of FactoryBot (specifically, `factory_bot_rails`).

## conclusion

that's a brief intro to using FactoryBot. Good luck!
