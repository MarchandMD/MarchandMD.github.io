---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Intro

Active Record seems to be a really big deal in Rails. It's only fair that more time and more words are given to it. 

Active Record is the "M" in MVC; the Model. 

Every application is about a "thing". An application is about one thing, at least. Realistically an app is about many things; When learning though, keep it simple....

So then an application is about a single thing. Let's say an application is about a blog. 

A blog is a collection of articles I write. The "thing" in this situation is an article. 

So I'm going to model an Article.

An article has a title, it has an author, it has a byline, it has a date it's written, a date it's published, a date it's updated, and it has a body. 

Ok....just like that, the articles of a blog have been modeled. 

## paragraph 1

Now that I have the Model for my blog articles, Active Record gives me a place to store all my blog articles. 

All the articles are stored in a database. Active Record gives me the tools to build the database, the tables in the database, as well as a way to make sure the data going into the database is "good" data. 

Active Record also gives me simple tools to grab stuff from the database, as well as create, read, update and destroy. 

Or more generally, Active Record is when I start thinking, writing and working with databases and interfacing with the idea of CRUD. 

## paragraph 2

Since Active Record is such a big idea, there's a lot of different things that become available to me as a programmer, but at the end of the day a lot of what it is, is the idea of an object as a row in a database. 

The rest of Active Record is like cake frosting....it's additional stuff that is actually very interesting and intricate.

Or perhaps the rest of Active Record is like looking at the rest of the cake ingredients and learning how the cake is actually made. 

## paragraph 3

Apparently there's a pattern to Active Record that transcends programming languages. The gist of that pattern is that an object is more than just pieces of data about the object. An object has characteristics that can be accessed, but an object also has methods that can be accessed; and the idea is that these methods will help a programmer understand how to interact with the object without necessarily being specifically versed with the object itself. 

At least that's what I think it means. 

## paragraph 4

Another idea is this idea of Object Relational Mapping, ORM. This means that one thing can be connected to another thing. 

This is done through databases and SQL, associations and database tables and foreign keys and primary keys. It's all very deep. And it's a rabbit hole. For now though, ORM means that objects can be connected to each other and they can be referenced by each other, even though they may be stored in separate tables of the same database. 

## paragraph 5

Active Record is all of these things and more: 

- Active Record employs the use of modelling objects and their data points
- Active Record facilitates associating these things together
- I can create an object that inherits from a different model
- I can validate information before storing it in a database table
- I can access databases using the principles of object orientation, instead of SQL

## conclusion

Time to dig into the nitty gritty of Models.....