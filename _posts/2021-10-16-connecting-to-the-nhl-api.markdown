# Connecting to the NHL API

I'm a hobbyist when it comes to working with APIs and Rails and Ruby. Something that I want to learn is how to use (consume) the NHL API. 

As far as I know, the NHL provides an API available to the public. And I've found [this gem called Celly](https://github.com/rymcmahon/celly) that I'm currently using on a Rails app that I've created. 

Problem is...I have no idea what I've actually done! lol

So this article will be about reviewing what I've already done, so I can refresh my own brain lol

## Step 1 - What have I done
so I know that I have a functioning Rails app on my local machine. And I know that I can spin up the Rails server, and when I do that it spits out some current data that I've formatted, from the NHL API by way of that Celly gem I referenced earlier. 

But I just don't know what it is I've done to get to that point, so I'm going to take a look at the code I've already written. 

The easiest thing to do is look at the views. so `app > views > welcome > index.html.erb` and there it is. 

I didn't want to spend too much effort creating other pages/routes, so all I did was add a bunch of code onto the index page lol. Silly me. 

Ok, so then everything that I've written on the `/app/views/welcome/index.html.erb` did not exist when I created the app. So that means everything that's there is code that I've written. Wow. That's actually not that bad...

But it's dense, and poorly designed and I have no idea where it's coming from. 

Ok, so now that I know what is producing the stuff I'm looking at, where is it coming from? 

Since I know that this is a view for the `welcome` controller, maybe I should look at that...

Huh... is it really as simple as adding the `celly` gem to my gemfile? 

I mean, it's got to be, because as far as I can tell that's the only thing that's going on. 

Ok, that's legit, all it is. Whoa. 

Well that was a quick re-fresher. lol. 

## Step 2 - What's next

Ok, so now that I know how I've connected to the API...I think this becomes more about learning how to use the Celly gem, right? 

And it also becomes about using Rails. And building this out a lot more. 

I mean, I know what I have, I know how I got to this point. The next steps is to build it up. 

But I'm also trying to write articles for my blog. So the next step is to find where I placed this blog. 

Well, that's right...I posted it to my github.io page. So just got to find that. 

So now this becomes a two-part thing: learning how to use the Celly gem and practice using Jekyll for my own personal blog. 

Ok, so now I have the other directory for my blog open. What now? 

## Step 3 - moving this article to a post on my blog

So first thing I need to do is rename this file. the format is: 

year-month-day-title.markdown

so do that

