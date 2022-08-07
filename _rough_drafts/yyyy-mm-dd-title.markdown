---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Defining an Instance Variable with an Empty Hash

Creating a new object sometimes requires an instance variable that can store lots of information about other objects. 

For example, if a program being built has several smaller objects that are sort of related to each other (like User and Articles, or Player and Preferences, or Customer and Items) there's a good chance of wanting to organize these things in a certain way. 

Using the Customer and Items example from above, if there was a Store object that had a `@sales_log` instance variable, it could be helpful to store the `Items` as the key of a `Hash`. 

This would be helpful because the `@sales_log` could be turned into a `Hash`, and then it'd be possible to see all the Customers who purchased a specific item, simply by calling `@sales_log[:item]`. 

The example used here is arbitrary, meaning it was picked randomly. Though take a second look at the smaller objects that were suggested: 

- User and Topics
- Player and Preferences
- Customer and Items

All 3 of these pairs have something in common. User, Player and Customer are all single items....or single objects. 

Topics, Preferences and Items are several objects (or, could be several objects) that a single person could have. 

This article is about creating/defining an instance variable as an Empty Hash, and it requires pretending that there's a larger project/program being built that has other objects also being built, or that have already been built. At least 2 other objects. 

So to understand how to create an instance variable that is defined with an empty Hash _that can be filled with other objects in the future_ it's important to pretend that there are other objects. 

To re-inforce this idea, the remainder of this article will use the idea of `Customer` objects and `Sandwich` objects being stored in a `Restaurant` object; specifically, in an `@orders` instance variable that will be a Hash. 

## Just stay on topic....

```ruby
class Restaurant
  attr_accessor :orders

# the LESS CORRECT way
  def initialize
    @orders = {}
  end

# the MORE CORRECT way
  def initialize
    @orders = Hash.new { |hash, key| hash[key] = [] }
  end

end
```

So, what is happening here? 

Looking at the more correct way, the `@orders` instance variable is building a Hash using the `#new` method (also known as a keyword). It's also receiving a block. 

And the block has 2 variables being piped into it.... hash, and key. 

Now, whenever piping data into a block, the variables within the pipes can be called anything, because they're variables. These two variables have been chosen very specifically because they help to draw the picture of what is happening when the `@orders` instance variable is used to add some new information to itself. 

The instance variable `@orders` is now a Hash object. And this next part is maybe a little tricky to understand.... but in the block.... the hash is being passed _to itself_. 

ummmm.....what? 

It is possible for a Ruby object to change/update itself when the method accepts a block. 

So the method that's being used here is `#new`....and it accepts a block `{ |hash, key| hash[key] = [] }`. 

What's happening is the new method is passing `@orders` to the block. 

The next question would be....what's the `key` variable that's piped in? 

That would come from any argument/data passed directly to the `@orders` instance variable. So using the example from earlier: 

```ruby
@orders['ham']
```
would result in a hash that looks like this: 

```ruby
@orders
> {
  'ham' => []
}

```
So now the `@orders` Hash has a single key of "ham", with a single value of an empty Array. 

This can be verified by calling `@orders.keys` or `@orders.values`

## paragraph 2
## paragraph 3
## paragraph 4
## paragraph 5
## conclusion