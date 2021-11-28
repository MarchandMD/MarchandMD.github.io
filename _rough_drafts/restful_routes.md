In the last article I discussed the idea of writing a route to the root of the folder. 

It was pretty straight-forward. 

Through some keywords in rails, I was able to write something as simple as `root to: "welcome#index"` and that route was written. 

But what that article didn't discuss at all was the HTTP verb that was implicit in the request. 

Without the discussion becoming too "complicated" the HTTP verb is simply the type of request that's being made by the browser or user or machine. 

There are several different types of requests that can be made. A few different types are: 

- GET
- PUT
- POST
- DELETE

There are others. For now though, it's best to limit which type of HTTP verbs I focus on, so I don't get over-whelmed. 

So the only verb I'm really worried about will be GET. 

Back when talking about the root route, the HTTP request was made and the idea that it was a GET request was never specified or discussed. 

That's because I didn't have to do anything to make it a GET request. The browser already "knew" that it should be a GET request. 

To begin the discussion about RESTful routes though, It's time to expand the assumptions about my web application. 

When talking about the root, all I really needed to pretend was that my application had a welcome page, or a landing page, or a home page or an index....just one of those. So that was easy to imagine. 

Now I need to imagine that my web application has a database attached to it. And in that database are, for example, 6 different blog articles. 

I also need to imagine that I will want to look at all the blog articles at once, that i'll want to look at just one of the articles, that I'll want to write a new article, that i'll want to add that new article to the database, that I'll want to edit an existing article, that i'll want to update the database with the edits, and that I'd want to delete a post from the database. 

Yeah, I know it's a lot of imagining. But like I said I only want to focus on being able to GET things through HTTP verbs, so I can ignore deleting articles, updating articles, creating new articles and updating the database. 

This leaves me with only needing to imagine looking at all 6 database records (which are 6 blog posts), and looking at an individual blog post (1 of the 6 blog posts). 

Let's first pretend I have 6 blog posts stored in a database (aka model) that is connected to an ArticlesController. 

## GET HTTP request and index action

These two things need to be thought of as being connected. 

That is, if an HTTP request is being made, it is one of the several verbs mentioned above. 

And if an HTTP request is being made, it will be connected to some type of controller/action combination. 

So it's actually an HTTP request, a controller, and an action. 

But it's actually more than that!

It's an HTTP verb, a location, a controller and an action!

So it's 4 things! When Originally I thought it was just 2!

Whoa! mind blown!

Ok, so now that it's clear that I need to think about 4 things....it's time to re-visit just exactly what I'm learning. 

And to make it clear, i'm learning how to write RESTful routes for my application. 

## 4 things to do 1 thing

So now that I know I need to specify 4 pieces of information (HTTP verb, route/path, controller and action) what example would I like to use? 

I'll use the example of showing all the 6 (imaginary) blog posts that my (imaginary) database (aka model) has. 

Let's also pretend that I'm currently looking at the welcome page of my website blog. 

Next, pretend there's a link on the page that I just clicked that says it'll take me to a page showing the title of all my blog posts. 

Clicking that link (aka the hypertext link) usually results in a new page loading. 

Clicking that link is the same as sending a new request through the browser. 

But what request was sent? 

Well, I know that the request was a request to GET the page showing all the blog posts. 

So it was a GET request. So let's start building the route that needs to be in `routes.rb`

```ruby
# /app/config/routes.rb

Rails.application.routes.draw do
  root to: 'welcome#index'
  
  get  
end
```

Ok, so that's the 1st of 4 things I need. So then what's the next part of the equation? 

The next part is that I need to specify the location of the blog articles...because the location of the blog articles is going to be the same as the path that the link is going to send with the GET request. 

This is a little strange. So let me spend some more time with this. 

I know that I want the link I mentioned earlier to send a specific request. And so when the link was written (which I haven't discussed yet) 