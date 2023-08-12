---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Introduction

To create a rake task, it would first be helpful to know what a rake task _is_.

A rake task is a small piece of code that is run when it is called from the command line. It's written in Ruby, and it can do just about anything you want it to do. It takes arguments, it can open files, it can even depend on other rake tasks. So what are some examples of a rake task?

In the terminal, navigate to a Rails app home directory. Now run `rails --tasks`. That's a list of the pre-existing tasks that come with Rails. A couple might be familiar to you at this point. Specifically, `rails db:create` and `rails db:migrate` or maybe simply `rails routes` depending on your current learning progress.

The goal of this article is to add a custom rake task to this list. So let's get started.

## where do rake tasks live

From the home directory (which is another name for the main directory, or the "top level" directory) checkout out the `/lib/tasks/` directory. Not much there. Yet. Create (or `touch`) a file in that directory and call it whatever you'd like. If you're not good at coming up with names, how about `csv_load_customers.rake`.

Yes, the extension of a rake file is `.rake`. It's not a big deal. That's just what it is.

## Populating the .rake file with code

I'll be following along with some of these basics for this next part: [https://guides.rubyonrails.org/v5.2/command_line.html#custom-rake-tasks](https://guides.rubyonrails.org/v5.2/command_line.html#custom-rake-tasks)

Open the `.rake` file you just created in your favorite IDE (if you're not already there).

Now add this (don't worry, we'll go over it line by line):

```ruby
namespace :csv_load do
  desc 'I am short, but comprehensive description for my cool task'
  task customers: [] do
    p 'Hello world'
  end
end
```

Here's the first line:

```ruby
namespace :csv_load do
end
```

Ok, I cheated. I said it'd be line-by-line, but if you add `do` add `end` right away. Just get into that habit. You'll thank yourself later.

This just assigns the rake task to a namespace. _But what's a namespace?_

To answer this question, let's take a second look at one of the rake commands we're already familiar with (maybe)

```
rails db:create
```

In this example the `db` is considered a namespace. Not a big deal.

So eventually our rake task will look like:

```
rails csv_load:whatever
```

Now let's look at the next line:

```ruby
  desc 'I am short, but comprehensive description for my cool task'
```

this is just a description. It will show up on the screen after we finish this portion of the tutorial after we run `rails --tasks`. But if you run that now it probably won't show up (it won't).

Next line

```ruby
task customers: [] do
end
```

This is where the name of the rake task is actually defined. `customers:` is actually the name of this rake task. So now to invoke (aka call) this rake task we'd do something like:

```
rails csv_load:customers
```

got it? Good. next line...

```ruby
p 'Hello world'
```

I don't need to explain this line.

Ok, at this point your first rake task is successfully written.

## Proving that the rake task exists

In the command line, run `rails --tasks` again.

You should see the name of the new rake task listed, along with the description.

```
rails csv_load:customers  # I am short, but comprehensive description for my cool task
```

## running the rake task

This should be fairly obvious at this point, but if it isn't, in the command line run

```ruby
rails csv_load:customers
```

And you should see `Hello world` in the command line. (If the capitalization is wrong in my article, it's just because i'm an inconsistent typer and it doesn't really matter. It's a small detail. But it should be the same as whatever was written in the rake file. I'm not going back to double check it)

## Updating the rake file

So now we know how a rake task is built and where it lives, and how to add ruby code to the rake task file.

So let's try to break it now. Start adding a bunch of crazy, random ruby code into the rake task file and try to do things. get crazy. And if you make any really cool rake tasks, let me know. Would love to see what you all create!

## conclusion

That's it! Happy coding!
