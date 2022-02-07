---
layout: post
published: false # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---
## Intro
This is a high-level overview of an HTTP request making it's way from start to finish, through an app built in Rails. Knowing all the diferent parts of a Rails app makes the visualization of an HTTP request easier to observe. Since this is the basic flow of the typical usage of the internet for casual end users, having a firm understanding of the ideas below really helps to paint a picture. 

## paragraph 1

The starting point is an HTTP request. End users rarely compose an actual HTTP request, however, every time a web address is typed in a browser address bar, or anytime a link is clicked, an HTTP request is being composed and sent to a server. An HTTP request is, generally speaking, a request by a client to a server for a specific piece of information, data or some other resource. Since everything on the internet is a document or file, everything has a specific location and or address that can be accessed. As long as you know the address of whatever you're looking for, you'll be able to find it. Certain things you don't need to know; Such as the actual location of an image file, or the actual location of other media. But that's ok, as long as the application has been built sufficiently well, typing in a web address is good enough to get a complete web page displayed on the browser. 

The HTTP request is like a piece of snail mail being sent via the USPS. Or like a package being delivered by Amazon. You as a customer order something on Amazon. You choose an item, give payment, and let them know when and where to deliver it. You are the client. Amazon is the server. Amazon receives the order. That's very similar to a user typing in a web address in a browser and hitting enter. When you hit enter in both situations, you send a request somewhere. In the example you send the request to Amazon. In the browser the request is sent to the server. You know what information was included with the Amazon order, but what information was sent to the server in the HTTP request made from the browser? 

## paragraph 2
The next step in the process moves from you the user making an HTTP request with your browser, to the Rails application receiving the HTTP request. So what exactly is the Rails app receiving when it receives an HTTP request? 

The Rails app is receiving at least 2 things: a location and a verb. As was referenced in the introduction, everything on the internet has a location. Sometimes that location is very specific, and sometimes that location is more general. A web address for a web page would be an example of a general location. 

the second thing included in an HTTP request is a verb. Typically that verb is `GET`. As in "get this thing and show it to me, so I can read stuff". Another common verb that can be included with HTTP requests could be `POST`, as in "post this information on a poster board and keep it there", or maybe "send this information i'm giving to you and post it to your internal database". It's a little archaic, but generally speaking it means to send new information. 

there are other verbs, but they go beyond the scope of this article. 

Since the HTTP request provided a location for a resource, the Rails app will first take a look at which resource is being requested, which will be part of the location or path in the HTTP request. 

Once Rails has determined which resource is being requested, Rails will take the HTTP request and move it's focus over to the associated controller. 

Rails will first go to the `routes.rb` file and will match the verb and URI. Once it's made a match for the resource being requested and the verb sent with the HTTP request, Rails will then shift to the controller and method associated to the verb and URI path. 

## paragraph 3

Now that the HTTP request is in the controller for the resource being requested, Rails will then go to the method requested, and will perform any Ruby code within that method. 

this is an important step because it's possible for the HTTP request to pass information from the client to the server, in the shape of parameters sent in the header or body of the HTTP request. Those parameters can be passed into the method as arguments, and can be used to customize whatever data is calculated/performed in the method. 

Once all the code is performed in the method, Rails will then send the HTTP request to a view that corresponds to the controller and method. At the same time, Rails is taking any Ruby code with it to the view to help populate the view with information calculated in the controller method. 


## paragraph 4

Now the HTTP request is in the associated view that corresponds to the controller and action. 

Here Rails populates any information on the page by inserting Ruby code into the embedded Ruby code listed on the page. I'm pretty sure it's recommended to avoid any code processing here and to keep most of the code logic in the controller. Really the view should simply be, as much as possible, just plugging in values from the controller into the view. 

## paragraph 5
At this point Rails has received an HTTP request, properly routed it to the correct controller and action, performed the Ruby code compilation in the specific controller action using any variables necessary, passed the infromation to the view, and then creates an HTTP response to send back to the browser (aka client) and ultimately to the user. 

## conclusion
So this concludes the high level overview. In this article we saw an HTTP request be made by a user in a browser, which is called a client. The client created a properly formatted HTTP request with at least a verb and a path/URI location for a resource. The client then sent this HTTP request to the Rails app. The Rails app determines which verb and path has been sent, and dispatches the request to a corresponding controller and method. Then Rails performs the Ruby code in that controller and method. That infromation is then passed from the controller method to the corresponding view. Now that the HTTP request and Rails is in the correct view, Rails populates the code by filling in any embedded Ruby code in the HTML. Finally, Rails returns this view as part of the response to the original sender of the HtTP request, the client to be intepreted by the browser and displayed to the user. 