---
layout: post
published: true
title:  "About Recursion"
categories: recursion
---

What is recursion?

1. Yes, recursion is calling a method inside of itself; however....
2. There will always be a `parameter/argument` being passed into the method
2. When the method is called inside itself, the `parameter/argument` must change before it's passed in again
3. It helps to think of Ruby as "pausing" the 1st call, and then "starting" the second call....and then "pausing" the 2nd call, and starting the 3rd call...etc
4. Often times, it's necessary to write a method with a *solution parameter set to an empty default array*
5. Try writing each step down with pen and paper!
6. The method will have at least a base case and a process to reduce the `parameter/argument` to the base case. Usually this takes the form of an `if-else` clause
7. When a method is called inside itself...Ruby will not move on until it has a return value from that method. Then it will "unpause" (see number 3 above) and continue

I'll elaborate on each of these steps, to illustrate.

## 1. Yes, recursion is calling a method inside itself; however....

The basic setup for a recursive method typically looks like this:

```ruby
def recursive_method(input, solution = [])
  if input.length == 1 # this could be something different, but it will often be *similar* to this
    # this is the base case
  else
    # the process to reduce the input to the base case scenario
    recursive_method(input.altered_somehow, solution)
  end
  solution
end
```

It's not always this basic, but this is a good foundation for writing recursion.

## 2. The parameter/argument should be altered somehow...

A recursive method is written to work with some set of data passed as an argument. I learned that that the input will be an Array.

So in the example above, `input` will be an Array.

Now observe the `recursive_method` _inside_ the method. Notice the `input`? it's `input.altered_somehow`.

If you're building a recursive method and the internal method call doesn't alter the input somehow....you're going to have a very difficult time.

Depending on the type of problem that's attempting to be solved, it may be necessary to decrease the input by 1. Or it maybe necessary to decrease the input by half.

If you need to cut things in half, remember that you can still _assign variables_ within the method, and assign half the value of the original input to it! and assign the second half to a different variable!

If you called a method once inside itself, you can be sure it's ok to call it a second time within itself... *mind blown*

## 3. It helps to think of Ruby "pausing"...

This should probably be tied in with #5...but it does help to think of Ruby starting and pausing.

So if Ruby starts a method....and then gets to the line inside the method that is a call to itself ..Ruby will "pause" the first call and do the second call.

I'm not gonna say more here until I get to step 5.

## 4. Often times it's important to create a "default" parameter...

Take a look back in the original skeleton I wrote in section 1

```ruby
def recursive_method(input, solution = [])
```

Now, when this is called, I won't have to explicitly pass in the second parameter!

But take a look at the call to the recursive method _inside_!

```ruby
recrusive_method(input.altered_somehow, solution)
```
`solution` is no longer a default parameter! It's a specifically defined parameter that's being passed into the method! How the heck does Ruby do that?!

I don't really know, so if you're reading this and you have an answer, please contact me and correct me!

## 5. Try writing each step down with pen and paper!

Yes I know this sounds tedious, but honestly it'll drastically reduce the amount of time you spend being frustrated.

I usually try to keep it to one line and say something like:

1. Begin first call of `recursive_method`
2. Skip `if`
3. Enter `else`
4. read call to `recursive_method` second call
5. Pause first call
6. Begin second call of `recursive_method`
7. Enter `if`
8. Return some value from second call of `recursive_method`
9. End second call of `recursive_method`
10. Unpause first call

...and so on like this.

Obviously on pen and paper I have the freedom to use arrows, and draw lines, and sort of make things take a different order. I encourage you to do whatever helps to wrap your mind around the topic!

## 6. The method will usually have an `if-else` clause...

See #1.

And...it's important to remember that it's possible for a method...with an `if-else` clause to `return` two different things, depending on if the `if` portion will be executed, or the `else` portion is executed.

And sometimes it's important to have either situation return the same thing...that is, have a return value placed outside the `if-else` clause...but still inside the method.

## Ruby will not move on until whe has a return value from a method call

When writing things down, often times I was left wondering..."yes, i've reached the end of the second call....but what does Ruby do next?"

A method call will usually have a return value. Just like most everything in Ruby has some sort of return value. So will a call to a method inside itself. Often times that needs to be the solution, being passed from one, back up to the previous situation.


## Conclusion
I don't really know if that'll help anyone else; However, these are some of the things that really helped me when trying to wrap my head around the topic of recursion.

And don't be intimidated by all the other information out there. Some of the people you're trying to learn from might not be as smart as you are....






