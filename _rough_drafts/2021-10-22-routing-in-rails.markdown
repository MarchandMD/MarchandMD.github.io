I love The Odin Project. I really do. 

But sometimes, for me, their teaching misses the mark.  

And by that I mean...the way they provide information is not the best way for me to receive information.  

They're a volunteer collective, and trying their best to serve the most people for the most common good. I get it. They can't necessarily spoon feed ideas to every person. Because every person learns at different speeds.  

But in the routing section, for me, they miss the mark.  

I'm finally through (most of) the Ruby section. And I whizzed through the Database section. Now I'm finally into the Rails section.  

And in the past I've skipped ahead and tried to dive into the deep end of Rails head first, with varying degrees of success. But I didn't know what I was doing, but I could understand some of these more complicated ideas. 

Well, I'm glad I did that in the past, because it's prepared me for when I finally did get to the section on routing. Because I'm able to be critical of what it is I'm reading, and I'm able to justify my criticisms. 

Instead of enumerating my criticisms though, i'm going to (attempt) to break the routing section down. Or maybe not the entire section, but a part of the section. Because the entire concept of routing seems extremely important. And I'm also currently working with the NHL API which has tons of data, so as I practice with the lessons from TheOdinProject, I'm able to see real results in the work that I do. 

## How I connected to an API using a Gem

Simply by adding a single line into my applications Gemfile and then bundling it. If anyone ever reads this and wants to know more, just ask, and I'll gladly expand on this idea. 

## Adding my first route

In the app there's a file in `/_config` called `routes.rb`. Opening that file I found text that looks like this: 

```ruby
Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'welcome#index'

  resources :teams, only:[:index, :show]
  resources :players, only:[:index, :show]
end

```

So there's a lot going on there, and it's best to legit just stop and figure out what one of those things is doing. 

At this point, I understand (generally) what a route is. But do I really? 

Doing a quick google search about "basic routing" or other general search terms, I find that there isn't a lot of very obvious information out there about routing. 

And most of the articles that are out there are very dense, and verbose. 

So let me try to tackle this idea head on. 

## What is a route? 

A route, plainly, is a path. 

An HTTP route is a path to files. The fact that it's an HTTP route simply suggests that there is some sort of "action" or some sort of verb that accompanies the path. 

A lot of the time a path is "requested". This is how routes and routing is talked about. Requesting. 

I think about it like this: when I go on the web, I am requesting my web browser to look at a website. 

By typing the web address of any website and hitting return, i am requesting to see that website or webpage.

that's at a very macro level. That's a single request and response. 

But a website isn't a single thing. 

It's files, and folders, and images, and fonts, and links, and scripts, and templates, and media, and cookies and all sorts of things. Tons of stuff. 

But at the surface, the first thing that happens is a request. With a verb. And often when talking about HTTP that verb is: GET. 

So get used to seeing that. 

Or at least realize that GET is a foundation of HTTP. There's a couple other verbs too:

- GET
- PUT 
- POST
- DELETE

But for the sake of my own education i'm simply going to focus on get. 

So then what's the point of the GET HTTP verb? 

it essentially means that if a browser makes an HTTP request (that is, if a certain web address is typed into the address bar of a browser and enter is hit) then the browser is going to initiate an HTTP request to that address, and it will be a GET request and it will go to a specific web address and GET the stuff that resides at that web address and then the browser will display whatever is gotten. 

Maybe that's an oversimplification, but it illustrates the point enough to begin understanding the verb portion of the HTTP request. 

So HTTP issues requests, and those requests are in the form of verbs and paths. 

For now the only thing I'm really cocnerned with is the GET verb. 

So then the next thing is to look at Rails specifically. 

So the next thing to acknowledge is that HTTP requests can be varied; since there are several verbs, there are many different types of requests that can be made. 

At this point it's making sense, but the application needs to know how to handle requests. Like, the application needs a single place to store all the possible requests it might receive...and it also needs to know where to send those requests. 

That's where the `routes.rb` file comes into play. 

So when I start the server, what happens? 

Ahh, ok, the Rails tutorial explains this nicely (which to OdinProject's credit, is exactly what their curriculum tells me to study):  

> 1. The browser makes a request: `GET http://localhost:3000`
>  2. Our Rails application receives this request.
> 3. The Rails router maps the root route to the index action of WelcomeController.
> 4. The index action uses the Article model to fetch all articles in the database.
> 5. Rails automatically renders the app/views/articles/index.html.erb view.
> 6. The ERB code in the view is evaluated to output HTML.
>7. The server sends a response containing the HTML back to the browser.

So the point of where I am right now is item 3..."The Rails router maps the root route to the index action of the WelcomeController. 

So the application receives the request, and somehow the applicaiton knows that the request for the webaddress should pull up the index action of the WelcomeController. 

and this is because I've specified in the `routes.rb` file that the `root` path should go to `welcome/index`. 

I know this to be true because `welcome/index` is very definitely a file path. 

But the controller...is that necessarily a path? I mean, the actual path from the root to the welcome controller is actually: 

```
/root/app/controllers/welcome_controller.rb
```

meanwhile, the actual path to the welcome/index view is: 

```
/root/app/views/welcome/index.html.erb
```

So it's sort of a combination of things happening. 

The applicaiton receives the request for that view, but the application is pushing all the requests through the `routes.rb`, and it somehow knows that it should go through the controller first. 

While at the controller, it confirms that there is a method that exists being requested. 

And then there's probably some additional things that happen. I believe by default the existence of the method in the controller is telling HTTP that the view does exist, and that those resources should be retrieved and displayed. 

The application is also executing any code that exists within the `#index` method in the welcome controller.

Now in my applicaiton, there is absolutely nothing in the `Welcome#index` method...it's an empty method. 

And so this sort of begs the question, what sort of things can be put into that method? 

How can I test to see if the controller and method are actually doing more than just dispatching the HTTP request to the view? 

I think one thing I could do is I could put a piece of code in the method, and see if I can access that thing...

Ok, so I just did a thing. 

I added a variable to the `Welcome#index` action and set it equal to a string. 

Next thing I did was I opened the `welcome/index` view. 

In that view I added some `erb` and tried to reference that naked variable. 

I spun up the server and then....

.... I was met with an error. 

specifically, I was met with a NameError in Welcome#index that was being experienced in the `welcome/view`

```
undefined local variable or method `corn`
```

yes, I created a variable in my `#index` method that was `"corn"`; Why not? It would make it abundantly apparent what was causing the error, so it did exactly what I wanted it to do. 

Now I had an error, and I knew exactly what was causing it. 

So I went back to the Welcome_controller, and I changed it to an instance variable... `@corn`. 

I then went to the `welcome/index` view and I changed my ERB there to reflect the `@corn` instance variable and voila! the string that I assigned to my `@corn` variable appeared in the browser!

Ok. so now I know that if I want something to appear in the view from the controller action, I need to add it as an instance variable. Which makes perfect sense. 

but there are some other questions that I have. 

Like, what is the scope of this `Welcome#index` method? Like, it's obviously an instance method....but what is it's object? Like, calling the `welcome#index` action, is part of what object? I'm pretty sure I can call `#class`....but what would be the thing I'm calling it on in the view? 

so what am I trying to do? I'm trying to find...if I can create an instance variable **outside of** the scope of `welcome#index` method. 

And why would I want to do that? 

Well, I'd want to do that because then I'd know what sort of an object I was creating instances of. 

I mean, if I have to create an instance variable to be able to access some "creator-generated" code in the `#index` instance method, then obviously I'm creating an instance....of something. 

And the structure of the controller is somewhat familiar to me... I mean it looks like a class. 

But it looks more than just a class....because it actually is a class! lol. 

Ok. 

Well, the next thing I did was I attempted to setup an initialization method `def initialize` just too see what would happen..and it worked. Sort of; but it also broke the application; there's a bunch of built in stuff that is happening behind the scenes. 

So, ok, that means that the controller is essentially an extension of some other basic Rails object, that is initialized somewhere else. And I don't really know what that code is, but I don't really need to know what that code is at this point. 

Ok. So then this all makes sense. And I now know how to Rails will handle a basic HTTP request for the index page. I also know how to add something of my own creating to the controller action to make it appear in the view. 

Now...how do I interact with the API on the index page? 

## interacting with the API on the home page

Well, yeah, I interact with the API very directly, via ERB. 

What I've done is created an instance of the `Celly` object, and specifically a `Player`. 

```ruby
<%= player = Celly::Player.new %>
```

and the reason this works is that I have attached the Celly gem to the application. So I'm able to access that thing. 

So then, my question now is: 

Can I move that instantiation to the `index` action of the welcome controller? 

Yep. I just successfully removed the raw instance of `player` from the code, and replaced it with instances of `@player` by moving that creation of the Player into the `#index` action of the welcome controller. 

Ok. So I understand that too. Next, what do I want to do? 

I mean, really this was supposed to be about learning how to work with routes, and the interaction between routes, and the controller, and the views. 

but there's still more to learn. I mean, there's still the idea of working with the API. 

So after I create an instance of that `Celly::Player` obj, then I do all kinds of stuff with it. 

But this is the index page, so I don't really want to be doing that right now. 

So I'll be fine with removing that from the index page. And I'll do it again, down the road. Because I don't need it there on the index page. 

Ok, there. 

That's so much better. 

So now, what am I going to do with the index page? 

Becaue I don't even need the instance of that `Celly::Player` object. 

Well, I can just focus on some simpler view stuff there. 

Ok, so now I can continue to learn about using Bootstrap and designing the page, or I can expand my learning about routes and APIs and controllers and views to figure out how I'm making eerything else on this page happen. 

first thing I'd lke to do is fix this navbar issue I got going on. 

Ok, so now that I have the basics of an HTTP GET REQUEST, what next? 

well, on my page I have a link to all the teams, which is the next thing I'd like to sort of expand on with notes. 

Ok, so it's one thing to get a basic request of a page which doesn't have any data on it...but I am connected to an API, so then what I want to do is get to a page that shows all the data. 

So on the index page I have a link that is set to the `teams_path`, and so that will go through the `routes.rb` page and look for the correct route there, and it will go by way of the code of: 

```
resources :teams, only:[:index, :show]
```

So what is this doing? 

In the `routes.rb` file, I need to specify what sort of HTTP requests might come in, and which HTTP verbs they'll be. 

So Rails has this shortcut called `resources` that I can use in the `routes.rb` file to create the possible HTTP paths. 

Well, by using that handy `resources` shortcut, I've told the application that when it gets an HTTP GET request for teams#index, that it should go to `teams/index`. And so that's exactly what Rails does. 

Now the next thing I need to do is look at the teams controller and see what sort of code I have in the index action. 

alright so looking at the teams_controller, I see the index action has only a single instance variable in it: 

```ruby
@teams = Celly::Player.new
```

So then, if I were to go and look at the teams/index view, what would I see? 

I see a lot of ERB...but really it's one call to an Array...but i'm gonna try to do soemthing here...

ok, so all I did was created a second instance ariable in the index method for the teams controller, and set it equal to `@teams.all[:data]`

All this does is makes the view a little easier to read. 

that's all. 

Ok, so the next thing is, I then go to the `teams#show` action. So take a look at the `teams/show` view and see if there's 


Alright, so here's the next piece to work on: params. 

The params hash. How does this value get there? When does the value get into the params hash? 

well, I pass the value into the params hash in the `link_to` helper!

So that's where it is!

ok, nice. 

So then I should be able to do something similar for the players... but what do I need to be in the params hash? 

I need the player Id to be there. 

Ok, so I already have something built for the player, but I need to build a little slower here. 

Because I jsut learned that I had that params value and I learned how to get it there. And I know what I need to do. So what I want to do is I want to clean up the `player/show` view...

Ok, so instead of doing anything backwards, i'd rather clean it up and just start from scratch. 

so now, what I want to do is I want to take a look at the params hash

Ok, just like that I've been able to pull all the data into the website for every stinking player; 

Now I can do the same for: 

- Scores
- Standings
- Leaders
- Schedule

and then it's a matter of making it look better

now something else came up which was a matter of cleaning up the data taht I receive...and that's working with the params hash; 

Something that I may be able to do is simply pass all this data that I am receiving into the params hash, and just pull things down from there. 

But that's jsut something i'm learning; I still want to go back and look at what I just did. 

Ok, so while cleaning up the `players/show` view...and thinking about what I could put into the `players#show` action, I realized that I would be able to pass in the value of the `params[:id]` ...and so that just made everything easier. 

In the `players#show` action then, all I did was create several instance variables, and passed in the `params[:id]` into those arguments...so now my `player#show` method looks like this: 

```ruby
def show
  @player = Celly::Player.new
  @profile = @player.profile(params[:id])
  # @season_stats = @player.season_stats(params[:id], season)
  @regular_season_career_stats = @player.regular_season_career_stats(params[:id])
  @playoffs_career_stats = @player.playoffs_career_stats(params[:id])
  @playoffs_stats_by_year = @player.playoffs_stats_by_year(params[:id])
end
```

and I can do something also very easy for myself....