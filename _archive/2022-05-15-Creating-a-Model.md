---
layout: post
title: "Creating a Model"
published: false
tags: ruby rails activerecord models mvc development
---

## Intro

There isn't a whole lot of work that I need to do to model an object. The first step is thinking of an object that I want to model.

For the rest of this article I'm going to model arenas. Like hockey arenas. There's lots of them, and there's different pieces of data that I can record about them. It's as good a thing as any.

The first thing I need is a working Rails application. I'm not going to go through the steps needed to build a basic project. There's plenty of other tutorials out there.

I'm now modelling hockey arenas. I'm going to call the model `Arena`, because that's the convention. That's what's normal.

## paragraph 1

There's a shortcut to generating a model in Rails, but i'm not cutting any corners here. Not yet anyway....

To build this basic model, I'm going to create a file in `app/models/` directory, and call it `arena.rb`

then I sub-class `ApplicationRecord`

```ruby
class Arena < ApplicationRecord
end
```



## paragraph 2
## paragraph 3
## paragraph 4
## paragraph 5
## conclusion