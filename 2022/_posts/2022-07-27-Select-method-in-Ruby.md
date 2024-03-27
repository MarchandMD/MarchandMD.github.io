---
layout: post
published: true
tags: ruby methods
---

### Intro

I'm trying different uses for this blog of mine, to see how I can use it for learning exhaust. Consider this article as an extension of the official documentation.

While being able to read documentation is a skill, _liking_ the vernacular used to write that documentation is something completely different.

To that end, I'm going to expand on the official documentation here for an individual method, one at a time.

### The `#select` method

One of the more versatile methods, it appears as part of the `ENV`, `IO`, `Enumerator::Lazy`, `Array`, `Enumerable`, `Hash`, `Kernel` and `Struct` objects.

I'll be looking at the `Enumerable` [version](https://ruby-doc.org/core-2.7.2/Enumerable.html#method-i-select) of the `#select` method. Though semantically speaking, it's hard to believe there's a lot of variation between how the objects use it.

### A high-level, 30,000' definition

The documentation for `#select` starts at the end:

> Returns an array containing all elements of enum for which the given block returns a true value.

When learning Ruby for the first time and reading a definition like this, it was hard to believe that Ruby was really written to make developers happy.

Or rather, maybe the language was written to make developers happy, but the documentation isn't as bubbly.

### Zooming into the definition with an example

Let's take a visual look at the method to reveal some clues and maybe short-circuit our discovery:

```ruby
[1,2,3,4,5].select { |num| num.even? }
```

So this reveals a lot of information about the `#select` method, but also about `Enumerable` as well:

1. An array is somehow akin to an `Enumerable` object
2. Call the method using the `.` dot operator
3. Pass a block to the method
4. "pipe in" each value of the object (`[1,2,3,4,5]` in this example) one at a time using `|num|`
5. Perform some Ruby code on each `num` variable

Easy

The return value here would be:

```ruby
[2, 4]
```

### Caveats

If no block is passed, an Enumerator object is returned

### Aliases

These methods could also be used, instead of `#select`:

-   `find_all`
-   `filter`
-   `reject` (this would be the opposite of filter, depending on what is sought from the original `Enumerable` object)
-   `grep` (this uses RegEx)

### Conclusion

Alright, that's it. `#select` is a versatile, non-destructive way to grab stuff from an existing Enumerable.

If there's anything that's lacking or missing or incorrect, feel free to contact me and let me know how I can improve this article. always looking to improve access to coding and decrease barriers to comprehension.

Happy coding!
