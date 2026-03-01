---
layout: post
published: true
title: "The Importance of Floating"
tags: ruby math
---

## Floating-Point Arithmetic

Recently I subtracted a float and an integer in Ruby

```ruby
3.2 - 3
> 0.20000000000000018
```

Wait a minute...

Shouldn't the return value simply be .2?

## Not so fast....

The actual problem at hand included extracting the decimals from a float

```ruby
2.23
```

Naturally, turned to [StackOverflow](https://stackoverflow.com/questions/12406032/get-fraction-part-of-a-decimal-number)

The variety of responses there were eye-opening, given the disparity between upvoted answers

So it seems there's some divergence RE what's best or more correct (or less wrong)

## ....pulling the thread....

One of the response links to [this website](https://floating-point-gui.de/) which seemingly doesn't have a name, per se, though it does appear to be a Github repo.

For better or worse, it's "The Floating-Point Arithmetic guide"

## So what's the answer?

What was the question again?

Oh yeah...why doesn't the ol' 'puter just do simple maths?

If you've ever watched the cult classic movie "Office Space", then you have a frame of reference for how this issue is explained.

## It's about precision

At some point a repeating decimal has to be rounded.

Remember in math that line above a decimal number that meant it was repeating? And the idea of infinity was introduced (to awkward teenagers no less). At some point if that was going to be written, a rounding had to happen.

That's what the computer is doing. It's just doing some rounding.

## Caveats

If working with...oh I don't know...Money..... that could prove to be a big problem. Though there are work arounds. Just reference the website again.  [this website](https://floating-point-gui.de/)

## conclusion

Numbers might be easy to deal with on paper....though computers need to cope. Be patient with them.