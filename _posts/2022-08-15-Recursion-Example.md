---
layout: post
published: false # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Setting it Up

Recursion isn't intuitive...

Write a recursive method that takes the integer N as input, and returns the Fibonacci sequence in an Array that's N elements long.

To start, need to set up the method:

```ruby
def fib_rec(input, n = 0, solution = [])
# code goes here
end
```

the `input` will be the integer.
the `n` is the thing that will be added to the solution.
the `solution` is the empty array that will eventually be returned with the answer.

## A quick word about recursive problems

Many problems can be solved with recursion. Though it isn't always practical.

If it can be done with recursion, it can probably be done with iteration.

There's also different types of recursive problems. This one is cumulative, because the solution is accumulated during the running of the method.

## Next step: just set up the framework within the method

```ruby
def fib_rec(input, n = 0, solution = [])
  if # some logic here
  # code goes here
  else
  # some more code here
  end
end
```

The `if` section will receive the base case.

the `else` section will receive the recursive call.

Build the base case.

## paragraph 3

```ruby
def fib_rec(input, n = 0, solution = [])
  if solution.length == input
    solution
  else
  # some more code here
  end
end
```

This says: if the solution length is equal to the length of the input, just return the solution, which is an array.

That's pretty straight-forward.

Except that the solution is currently an empty array. So how will numbers be added to it?

## recursive calls

## paragraph 5

```ruby

def fib_rec(input, n = 0, solution = [])
  if solution.length == input
    solution
  else
    if n <= 1
      solution << n
      n += 1
    else
      solution << solution[-2] + solution [-1]
    end
    fibs_rec(input, n, solution)
  end
end
```
