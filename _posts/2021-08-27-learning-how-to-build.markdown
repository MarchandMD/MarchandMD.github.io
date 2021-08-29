---
layout: post
date: 2021-08-27 08:55:48 -0600
title: "Banging away..."
categories: learning
---

So, this is just writing in Markdown; there really isn't anything else to it; So then it's a matter of creating articles and or content; 

So then, I know that what I just learned is how to create a post with a little more quickness; I can add a little more of the front matter. And in this page the front matter elements I need are: 

1. Layout
2. date
3. title
4. categories

Something else I can do with front matter is I can use it within the page. So for example I believe I could get the date like this: {{ page.date }}.  

 though, i'm just guessing here. 

 Nice! I guessed right! Awesome. Ok. So that's just one way for me to sort of interact with the frontMatter. 

 And I know how to build a post. That's easy. But what else? I mean, I think the next thing I might want to do is figure out how to build more of a home page; 

 There's also some other stylistic things I may want to fix; but for now, this is nice. This is helpful. I'm learning how to build things. So yeah. 

 then I'll be able to do more than one of these. And I'll be able to deploy them quicker. 

 So that's kind of the idea. And then, since I'm learning how to build this thing, I might be able to offer this as a service to other people; designing and building things. but for now, just keep working on building this thing. And learning how to do more with it. 

 So then, what do I really want to do with that homepage? Because right now, all it is...is the list of posts; why not go ahead and figure out how to add an additional homepage. 

 ## building a homepage

 So, I already have an `index.markdown` page. 

 And I know that if I add just some random text, it'll pop up onto the page...but what I want to know is...where are the "posts" showing from? Where and how are they being pulled into the homepage? 

 So then I guess that has to do with `Layouts`? I think. So then, maybe that's sort of the next step in my learning...to look at how layouts/templates are built. 

 > Layouts are templates that wrap around your content. 

 I'm not sure if that's the best way to phrase what a layout is. 

 Maybe a better way to deecribe this is to call it a template, with fully customizable sections. 

 Ok, either way, let's take a look at these layouts. 

 oh! another thing! In the front matter of the markdown pages, i am actually adding a `layout:` section....so that makes it simple for me to think about that. I have layouts stored, and then I can access them by simply changing what the layout should be. Which is pretty dope. I mean, that's one way for me to test things. Like, I can test a new template, without actually destroying the old ones. I can simply make a new one, and then change the front matter with the new layout type. 

 But before I try to build a new template, the thing I should do is look at an existing layout, to findout what's going on with it. 

 So what are the different layouts that are available to me? 

 ## Layouts available to me: 

 So, these layouts are theme-specific; that is, if I were to import a different theme, these layouts may not be completely available to me. 

 But that's alright, I'm able to copy and paste code for these...I'm able to create adn change and update the template/layout being applied to any post. That's not that big of an issue. 

 But the point is....I want to look at the layouts and see what's going on there...

 ## what's in the layout...

 Ok, so, it's as expected: it's mostly compartmentalized. Which is awesome. 

 That just means most of the stuff that needs to be in the page is in other places. 

 ## ok, so now what?

 Yeah, this is great..but so what? Like really? 

 Well, I think the way to learn from this is by considering just exactly what is happening.

 I mean, in the template page there is the minimum amount of hard coded HTML. And then there's dynamic content. 

 There's also a lot of styling done with the CSS, obviously. 

 Ok, so yeah, I see this; I guess I started this with the idea of building a new homepage...but do I really want to do that now? 

 I mean, i don't really have any burning idea of a feature I want to see on the page. 

 Ok, so, how to go about doing this...I just spend some time on the site and there are some things that I want to see. But I don't really know what it is I want to see. 

 I do know that Jekyll website/documentation suggests adding some features...so maybe I'll do that, and take a closer look. 

 So right now, what I'm doing is moving away from the layouts. I mean, I don't necessarily need to create a new one. But I did say I wanted to create one. So why not try to build one? 

## building a template/layout to use

 Ok, so now I have a post that is applying `my_template`...but I haven't added anything to that page. 

 So then, what can I add to this page? 

 Well, what do I ahve to add to this page? 

 Let's just try using the keyword of "Content" within double curly braces.... and see what that gets me...

 Wow. And that is it. That is all I really need to do to get the content onto the new page. cool. 

 So yeah. That's dope. Now, then, what else can I add to the template page? 

 Well, something I just found was another template called "page" which I'm not sure is being used anywhere on the site. or it's a layout called "page"...just like I have `default, home, and post`. 

 Ok, so the "about" page is using th `page` layout. That's dope. I get that. 