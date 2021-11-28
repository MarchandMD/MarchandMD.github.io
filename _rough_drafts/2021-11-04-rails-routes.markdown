Routing is really interesting, but it definitely fits in a larger context of building a webpage/application, because it requires me to have more pages to connect together. 

So what I need to be doing at this point is I need to be building more sites/applications to work on and to build and to connect together. 

So this is really the nuts and bolts of things, where I begin to create a bunch of content-lite apps and practice the fundamentals of connecting pages togehter. 

because that's what this guide is going to be teaching me: how to connect pages together. 

So the goals of the "Rails Routing from the Outside In" page is to: 

1. teach me how to interpret the code in `config/routes.rb`
2. show me how to construct my own routes, using either the preferred resourceful style or the `match` method
3. declare route parameters, which are pssed onto controller actions
4. automatically create paths and URLS using route helpers
5. advanced techniques such as creating constraints and mounting Rack endpoints

Of all these, I believe I'll only be doing the first 4. I think the 5th thing is beyond the intention of the lesson I'm following along with in The Odin Project's curriculum. 

So I'd like to look at each of these numbers first, and "predict" sort of what the disccusion will be. And also to extrapolate on the guides own literature, since i'm sure it'll be bare bones and to the point. I'm a little verbose when I learn because I like to interpret things into my own viewpoint. 

## Interpreting the code in `config/routes.rb`
I mean, I hope the guide will discuss all the unique verbiage of the file, but I'm sure most of it will be slimmed down as much as possible. 

I'm sure there will be some shortcuts and some assumptions that'll need to be made to interpret the examples provided. But really I think the ability to interpret the code in `config/routes.rb` will come from repeated usage. 

The first thing that I want to say about the file of `config/routes.rb` is that this should be the place to look when trying to create links, when trying to develop a nav bar, when trying to connect parts of the application/site. Because `config/routes.rb` is like a train station, or a depot, or a hub. Everything else will flow through the applicaiton because of what's in the `config/routes.rb` file. 

