---
layout: post
title: Turbo Streams are so cool!
published: true
tags: turbo
---

<details open>
<summary>Table of Contents</summary>
<ul>
<li><a href="#setup">Setup</a></li>
<li><a href="#in-the-controller">In The Controller</a></li>
<li><a href="#in-the-turbo-stream-erb-file">In The Turbo Stream ERB file</a></li>
<li><a href="#additional-stuff">Additional Stuff</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>
</details>

# Setup

To use Turbo streams, do the following:

In a view, add a `turbo_frame_tag` like so:

```erb
<%= turbo_frame_tag "some_name_for_the_frame" do %>
  # additional html/erb code can be added here, but it will be
  # replaced by the turbo stream eventually
<% end %>
```

Now that there is a frame/target for the turbo stream, there must be some element on the same view to trigger an HTTP request.

One way to trigger the HTTP request might be to have a basic form and or a basic button that would trigger some sort of an HTTP request. Another option could be through a Stimulus controller.

Next stop: a controller action.

# In the controller

Usually, Rails convention is to render/redirect to a view that's been named the same as the action. Index action will render the index.html.erb view, the show action will render the show view, etc....

If I want to instead use turbo streams, this is how:

```ruby
# this would be added at the very end of the controller action (right before the "end" statement)
respond_to do |format|
  format.turbo_stream
end
```

Then the Turbo stream magic will start here.

The next thing Rails will do is, instead of looking for the entire view with the same name as the action, it'll look for a turbo stream file with the same name.

Instead of redirecting or rendering to an entire view, Rails is "responding to" the HTTP request with a turbo stream. Hence the call to "respond_to".

So if I'm in the `create` action of a  cars_controller, rails will look for `app/views/cars/create.turbo_stream.erb`.

# in the turbo stream erb file

First thing to know about this is: it's just a typical HTML/ERB file. Add any logic in ERB tags in this file.

And since it's a view, all the instance variables that were defined in the controller action are available here.

This file is more than just an HTML/ERB file.

This file is where the HTML code is written _that will replace_ the other HTML in the original view.

So the turbo_frame_tag that was first added at the beginning of this article will be replaced.

One such turbo stream file might look like this:

```erb
<%= turbo_stream.update "some_id" do %>
  # code here
<% end %>
```
Some basic notes about this is:

1. Do/end is just a block - put HTML and ERB in there (this is what will eventually be sent back to the turbo frame in the view where this all started)
2. turbo_stream is the magic word
3. #update is one of 7 possible actions to use to send/stream/broadcast HTML back to the view (other 6 actions listed below, in the code snippet)
4. The id has to match the id of a turbo_frame that's on the original view, because that will be update

That's it. That's the beauty of turbo streams.

# additional stuff
Now it's possible to use more than just #update. and it's possible to conditionally define what will happen to a single turbo_frame upon different circumstances.

One thing that might be neat to try to do is use all of the different turbo stream actions within a given turbo stream file; So the turbo_stream.erb might look like this:

```erb
# adding all seven possible turbo stream actions to the same id, from the same file
<%= turbo_stream.append "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.prepend "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.replace "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.update "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.remove "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.before "some_id" do %>
  # code here
<% end %>

<%= turbo_stream.after "some_id" do %>
  # code here
<% end %>

```

# Conclusion
The way I think about Turbo Streaming is: the `whatever.turbo_stream.erb` file is kind of like a controller that will "broadcast" (or stream) some HTML back to the view Rails just came from; and more specifically, Rails will take the streamed HTML and update the turbo frame on that page with the HTML that's been sent from `whatever.turbo_stream.erb`.

So cool.


It's possible to send a broadcast/stream to any number of turbo frames on a page.

It's possible to place the turbo stream tags within ERB/Ruby logic.
