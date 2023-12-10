---
layout: post
published: false
---

I want to take a string of a time `"2023-09-29T00:30:00Z"` and convert it to be local time.

This is not necessarily easy.

Start with a string.

convert it to the local time.

Here's what I believe needs to happen:

1. Convert the string to a DateTime object
2. Convert the DateTime object to a readable string
3. Bring this new string into the local time
4. format it

The reasoning behind all this:

## convert the string to a Datetime object

the original string is all smushed together. Which is no good. It needs to breathe with some additional white space.

## convert the DateTime object back to a readable string

This part seems silly because it already was in a string and it's being transformed back to a string immediately, but this way it has some additional spaces that'll make the next few things easier.
