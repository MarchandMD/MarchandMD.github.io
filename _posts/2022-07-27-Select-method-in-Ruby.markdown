---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Intro

What does the `#select` method do? 

## return value: 

A new Array

## Contents of return value: 

All elements (if any) from the original Array that return true

## How to get contents into the returned value:

Pass a block to the method, either as `do/end` or `{}` that will evaluate to true or false for the individual elements of the original Array

## Caveats: 

If no block is passed, an Enumerator object is returned

## Aliases: 

`#filter` does the same thing

## conclusion
