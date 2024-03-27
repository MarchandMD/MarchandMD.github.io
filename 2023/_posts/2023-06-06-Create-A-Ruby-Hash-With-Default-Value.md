---
layout: post
published: true
tags: ruby
title: Count items in a Array; Tabulate in a Hash
---
| section                       |
| ----------------------------- |
| [Introduction](#introduction) |
| [How To](#how-to)             |
| [Notes](#notes)               |


#### Introduction
Assume I have an array:

```ruby
my_array = ['apple', 'banana', 'orange', 'apple', 'pear', 'apple', 'orange']
```

and I want to count the elements of each:

```ruby
### my_array, turned into a hash

my_hash = {
  'apple': 3,
  'banana': 1,
  'orange': 2,
  'pear': 1
}
```

How can this be done quickly?

#### How To

First, create a Hash with a default value:

```ruby
new_hash = Hash.new { |h,k| h[k] = 0 }
### => {}
```

The default value of the hash is the block passed to `Hash.new`

What this does is gives me a new Hash object that will accept keys. If I pass a key without any explicit value, like this:

```ruby
new_hash['x']
### => 0
```

The result will be:

```ruby
new_hash = {
'x' = 0
}
```

How what I'll be able to do is use the group_by method in a really slick way.

Second:

```ruby
array = ['m', 'o', 'n', 'o', 'p', 'o', 'l', 'y']

array.group_by do |x|
new_hash[x] += 1
end
```

This will then do the iteration through the elements of the `array` and it will create a new key if it doesn't exist, and it will increment the value by 1.

Next time I call `new_hash`, i'll get the Hash I'm looking for.

### Notes

1. This article started as a way to use `group_by`, but I quickly realized that the `group_by` method wasn't doing anything that `each` didn't do.

2. Really, the main thrust of this is about how to create a new Hash object in a dynamic way with a default value of 0 for each new element.