---
layout: post
published: true
tags: ruby hashes
---

# How to collect things in a Hash, as an instance variable of an Object

Objects have state and behavior.

State is like the current state of your car. Your car's current state is "parked".

State is represented with an instance variable.

Behaviors are the things you can do to or with your car: "drive", "start", "fill_tank", "accelerate", etc.

Behavior is represented with instance methods.

This article will create a simple object that has a single instance variable.

That instance variable will be an Empty Hash object.

This will allow for the demonstration of how to collect things in a Hash, as an instance variable.

# Setting up the code

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

Looking at the more correct way, the `@orders` instance variable is building a Hash using the `#new` method. It's also receiving a block.

```ruby
@orders = Hash.new { |hash, key| hash[key] = [ ] }
```

The block has 2 variables piped into it: hash, and key.

The instance variable `@orders` is a Hash object. And this next part is maybe a little tricky to understand.... but in the block.... the hash is being passed _to itself_.

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

# How to add a value to the new key, at the same time

Calling `restaurant.orders['ham']` would result in an empty Array being displayed. Assigning a value is a little less than obvious as well.

Since the value that is assigned to any key in the Hash is an Array, all the typical Array methods are available, including shorthand methods like the shovel operator:

```ruby
@orders['ham'] << "customer 1"

```

Ultimately what would be created is an Array associated to the ['ham'] key populated with a bunch of customers.

```ruby
@orders['ham'] << "customer 1"

@orders['ham'] << "customer 2"

@orders['veggie'] << "customer 3"

# @orders now looks like:
@orders = {
  'ham' => ["customer 1", "customer 2"],
  'veggie' => ["customer 3"]
}
```

# conclusion

This article doesn't discuss the difference between the less correct way, and the more correct way. This article illustrates how to collect things in a Hash that's been assigned to an instance variable.

This can be helpful for aggregation of similar things, like orders for a restaurant.

What are some other examples of data that might need to be aggregated?