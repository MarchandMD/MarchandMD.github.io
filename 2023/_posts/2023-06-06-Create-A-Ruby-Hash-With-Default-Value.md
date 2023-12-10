---
layout: post
published: true
tags: ruby
---
|section|
|-------|
|[Introduction](#introduction)|
|[Requirements](#requirements)|
|[The Objective](#the-objective)|
|[How To](#how-to)|
|[Notes](#notes)|


# Introduction

There's this really great way to tabulate elements of an array in Ruby that I like, but I often forget exactly how to do it.

This is a quick reference for myself so I can quickly find what I need when trying to use this method.

# Requirements

Really, the only thing that's needed is an array element.

# The objective

I have an Array. What I want is a Hash that tabulates the elements of that Array.

So I'm starting with an Array, but I want a Hash that has unique keys from the elements of that Array. The values should be he number of times the element occurs in the Array.

Visual example of what I'm looking for:

```ruby
# what I'm starting with

array = ['m', 'o', 'n', 'o', 'p', 'o', 'l', 'y']
```

```ruby
# what i want to achieve

hash = {
  'm' => 1,
  'o' => 3,
  'n' => 1,
  'p' => 1,
  'l' => 1,
  'y' => 1
}
```

# How To

First: need to create a Hash with a default value:

```ruby
new_hash = Hash.new { |h,k| h[k] = 0 }
# => {}
```

What this does is gives me a new Hash object that will accept keys. If I pass a key without any explicit value, like this:

```ruby
new_hash['x']
# => 0
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

# Notes

1. This article started as a way to use `group_by`, but I quickly realized that the `group_by` method wasn't doing anything that `each` didn't do.

2. Really, the main thrust of this is about how to create a new Hash object in a dynamic way with a default value of 0 for each new element.