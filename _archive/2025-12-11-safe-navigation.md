---
layout: post
published: true
title: Safe Navigation Operator
tags: Ruby
#date: 2021-08-24 16:54:42 -0600
---

Ruby has something called a "Safe Navigation Operator".

It's syntax is this: `&.`

Typically, a method is called on an instance of an object:

```rb
"cat".upcase

#=> CAT
```

Here "cat" is an instance of a String object.

The upcase method is called on it, using the dot operator (literally just the period).

But what if upcase was called on nil?

```rb
nil.upcase
```

What would be returned?

The easiest way to answer this is to drop into IRB (or pry) in the command line and try it.

IRB would throw `NoMethodError`.

Throwing an error. Raise an exception. Sort of the same thing*. (Technically, it goes: Exception/ -> every possible error type. So every Error is under the main directory of Exception/.)

The point though is an error is raised, or an exception is raised.

Now, instead of calling `.upcase` on `nil`, use the safe navigation operator:

```rb
nil&.upcase
```

What is returned?

Just `nil`!

Why is this important?

Essentially....raising an exception should be exceptional.

```rb
user.address.city
```

If address is missing, Ruby would crash out. Seems extreme reason to crash out.

```rb
user&.address&.city
```

This would return nil if there was no address.

The Safe Navigation Operator is protecting the absence of the thing in front of it....not being able to call the method behind it.

It's not possible to "upcase" nil, because nil isn't a String. So there's no method Upcase for nil.

But that's no reason to crash the system.

Since the thing before `&.` is nil, and the method after `&.` isn't defined for nil, let's just return `nil` instead of crashing out.


