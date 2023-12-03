---
layout: post
published: true
tags: ruby rails csv
---

# How to write to a File or CSV file in Ruby

|ToC|
|--|
|[Introduction](#introduction)|
|[Create a File](#create-a-file)|
|[Write to a File](#write-to-a-file)|
|[Now With CSV](#now-with-csv)|
|[Conclusion](#conclusion)|

# Introduction

Many, many times I've wanted to write a quick and dirty Ruby script that drops some data into a
file.

Too many times I've looked up how to do exactly that, and then not had to use that skill long enough
to forget it.

Just barely remembering something, but not having a total grasp on it is a tough experience. Being
faced with the reality of having to dig through documentation to do something I already know how to
do means I need to write an article about it.

This is that article.

Now I'll be able to reference this article instead of the various sources of documentation.

# Create A File

First thing to do is to remind myself how to create a file in the Ruby script I'm writing.

The easiest way to create a new file is to call the following:

```ruby
File.open('new_file.txt', 'w')
```

The class method is `::open`, but if the file doesn't exist, Ruby knows to create a new file.

That's it. That's the easiest way to create the file.

If it's important to be able to write to the new file, then the second argument definitely needs to
be "w".

Since I like to have a variable for my new file, I usually do something like this:

```ruby
new_file = File.open('new_file.txt', 'w')
```

It's probably possible to create different file types simply by adding a different extension to the
file name in the first argument. I'll do that in a bit when I start exploring CSVs.

# Write to a File

Once the `new_file` exists, I can then write to it like this:

```ruby
new_file.write('hello world')
```
And that'll automatically populate the file.

# Now with CSV

I'll have to `require 'csv'` at the top of the file.

Then, instead of `File.open`, I'll do `CSV.open`, so it would look like this:

```ruby
new_csv_file = CSV.open('new_csv_file.csv', 'w')
```

give that a shot.

Worked like a charm.

Now I want to get data onto the CSV file:

```ruby
headers = ['name', 'createdby', 'description', 'points']

new_csv_file << headers
```

CSV files like Arrays.

The above command will pull the string elements out of the array, and drop them into the CSV file,
seperated by commas. So they are Comma-Seperated Values (CSV....get it?)

Next, I want to populate the CSV file with more data.

the best thing would be to have data in an Array, so i can simply use the shovel operator again ( the
shovel operator is this: `<<`)

# Conclusion

There's a lot more that can be done with both `File` and `CSV`, but this is the quickest way to get
something onto a file, without having to dig through other documentation.

Now go build.


