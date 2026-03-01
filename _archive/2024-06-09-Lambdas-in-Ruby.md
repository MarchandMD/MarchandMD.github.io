---
published: false
layout: post
tags: ruby
title: Lambdas in Ruby (and Rails)
---

> A lambda is a way to write a block an save it to a variable.

I don't really have a use case for this, so it's tough to visualize ever using it. But there are various situations when it's used.

> This can be useful when calling different methods and passing the same block to each of them. It reduces redundancy.

Ok, this sort of makes sense. I could imagine a use-case for this.

> There are two ways to create a lambda.
>
> One is to use the keyword `lambda`

```rb
my_lambda = lambda { puts "inside my_lambda" }
```