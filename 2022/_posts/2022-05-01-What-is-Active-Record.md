---
layout: post
published: false
tags: activeRecord ruby rails models
---

I need an English-to-English translation of the official Rails guide. The language and ideas there are too obscure, too convoluted, too "gate-keepy". So i'll try to extrapolate those words into simpler ideas I understand.

## What is ActiveRecord?

- It's the "M" in "MVC", the model

The opening paragraph of the Rails guide calls the model many confusing things:
* "a layer"
* "a representation of business objects"
* "a facilitation"
* "an implementation"
* "a pattern"
* "a description of an Object Relational Mapping system"

All those things seem to me to be bullshit; All those words provide no clarification about what a Model is, or about what ActiveRecord is (or might be).

## In my own words

What is ActiveRecord? It's complicated....

So keep it simple, stupid

I'm going to take a specific thing, and i'm going to "model" it

## What do I already know?

There have been many examples of modeled objects I've seen in my time learning: Books, Dogs, Cats, Articles, Cars, Heros, People, Users, etc

Most any object, tangible or intangible, can be modeled.

For the sake of simplification, i'll consider only a real object: A book.

I'll observe a single specific book, and i'll make some very general observations about the book.

## Modeling an Object

Here's an image of the book i'm going to use to model all books

IMAGE OF CROME YELLOW BY ALDOUS HUXLEY

title: Crome Yellow
author: Aldous Huxley
pages: 176

I'll now turn those observations about the book into a database table


>	id|title|author|pages
>	---|---|---|---
> 1|Crome Yellow|Aldous Huxley| 167

What I just did is considered "modelling an object"; I took a book, I made some observations about it, then I turned those observations into a database table.

	Obviously there's a little more minutiae that's involved with creating a class of objects and it's database (that is, modelling an object). But I wanted to keep things as simple as possible while explaining what a Model is and what ActiveRecord is. I'll take a look at the actual code in other articles.

## More of my own words

A model is any object turned into a row in a database that I can use in my application, update, or delete. That's really it.

A 'Model' is maybe too simple of a name/concept as a beginner; A Model includes and implies both an Object and a database.

Modelling the object includes creating a Ruby Class, creating a database to store instances of the object, and then writing methods in the class that allow me to access the data in the database, and present it in my Rails application.

## So what is ActiveRecord then?

ActiveRecord is more of the official name for an umbrella; Everything that is involved with Objects, and Models and databases can be found in the Rails API documentation under the umbrella of ActiveRecord.

In fact, i'll rarely see the exact term of `ActiveRecord` in any code.

So don't get overwhelmed by all the technical language of what ActiveRecord is, and what Models are. It's little more than what I described above.
