---
layout: post
published: true
tags: ruby arrays
---

## One way to split an array in to two separate Arrays

Working on a simple recursion problem, and the need to split an Array in two arose.

How the heck is this done simply?

## Of course there's many ways to do it....

```ruby
arr_a = [1, 2, 3, 4, 5, 6, 7, 8]
```

Starting simple, `arr` has 8 integers

```ruby
arr_b = arr_a[0...arr_a.length/2]
### [1, 2, 3, 4]
arr_c = arr_a[arr.a_length/2..-1]
### [5, 6, 7, 8]
```

Simple enough, right?

Yes, but no....

## Taking a closer look

`arr_b` is assigned the value of `arr_a[0...arr_a.length/2]`

So what exactly is that? And why does it work?

It's possible to access a range of elements from an array using square brackets. It's also possible to use inclusive or exclusive ranges.

## Inclusive or Exclusive?

Remember that a range typically is written like this:

```ruby

(0..10)
### 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```
The above example is considered an inclusive range. It _includes_ the last number. That's what happens when only 2 dots are used.

And the other type?

```ruby
(0...10)
### 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

The above example is considered an exclusive range. It _excludes_ the last number. That's what happens when 3 dots are used.

## Doing math

If the array that's being split is N elements long, and roughly half of the elements need to be in each array, telling Ruby to collect elements `0` through `arr_a.length/2` would grab half of the elements (assuming N is even).

So should the range be inclusive or exclusive?

Well, grabbing a range of elements using square brackets means elements are being grabbed **BY THEIR INDEX**.

Remember: Array elements start at 0. They use ordinal numbers, not cardinal numbers. (ordinal = order....first, being zero)

So if the range grabbed were `arr_a[0..arr_a.length/2]`, what would the range be, without the math?

Said another way, do the math and re-write the range in the square brackets with the answer of `arr_a.length/2`.

The answer would be:

```ruby
arr_a[0..4]
```

Ok. So what?

Well, that's the correct way to re-write `arr_a.length/2`....However, the range used is inclusive. So this is the following elements that would be selected:

1. arr_a[0]
2. arr_a[1]
3. arr_a[2]
4. arr_a[3]
5. arr_a[4]

So that's 5 elements selected.

Though the goal was to get half of the original 8 elements in `arr_a`.

## Light bulb moment

So then there's a couple things that could be done. The easiest, which was used earlier in this example, was to use the _exculsionary_ range, instead of the _inclusionary_.

```ruby
arr_b = arr_a[0...arr_a.length/2]
```

## conclusion

If that doesn't make sense, play around with it a little bit until it does.

And that's one way to get 2 arrays returned from one.

What if `arr_a` were not an even number of elements long? Would this still work?