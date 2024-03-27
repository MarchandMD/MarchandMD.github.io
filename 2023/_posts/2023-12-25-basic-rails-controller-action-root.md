---
layout: post
published: true
title: Creating a Controller, an Action and a Root path in a Rails 7 app
tags: rails controllers actions routes
date: 2023-12-22 16:54:42 -0600
---

Creating a Rails 7 app is an easy thing to do from the command line.

```bash
rails new devise-practice-1
```

After it's been created, starting the rails server is also very easy to do.

```bash
cd devise-practice-1
rails s
```

This spins up the server (which is enabled by the software called Puma; You can look into it if you want to, but it's not necessary; I've never had to learn about Puma and I've been coding for many years; Eventually I will, but not today)

Now open a browser and go to `localhost:3000`.

As of December 2023, I see a page like this:

![no database error image](/assets/images/nodatabaseerror.png)

To fix this I click the "Create database" button and now I see

![default root path](/assets/images/defaultrootpath.png)

This page is the default root path.

It is possible to display something besides this page by adding a controller with an action and updating the routes file.

### Generate a Controller with an Index action

Kill the server by typing `ctrl-c` in the command line (the Terminal app)

In a second or two, the server will stop running.

In the same command line generate a new controller with an index action all at the same time

```bash
### g is short for generate
rails g controller Welcome index

### rails generate controller Welcome index
```

This creates the following output in the command line (yours may look a little different, buy you'll definitely have at least these):

```bash
 create  app/controllers/welcome_controller.rb
  route  get 'welcome/index'
 create    app/views/welcome
 create    app/views/welcome/index.html.erb
 invoke  helper
 create    app/helpers/welcome_helper.rb
```

The last thing we need to do to change the default root path is update the routes file.

### Update the routes file

In your app, navigate to `devise-practice-1/config/routes.rb` and open it

delete the line showing `get 'welcome/index'` and update it to look like this:

```ruby
Rails.application.routes.draw do
  root to: "welcome#index"
end
```

Save the file (if you don't already have "auto-save" turned on), and start the server again.

You will see a different page than the one before.

### Conclusion

That's a quick example for creating a new controller, adding an action (index) and updating the routes file to re-direct to a new root path.

If you want to update what's on the page, a good starting place would be to navigate to `devise-practice-1/app/views/welcome/index.html.erb` and you can add some HTML there. But that's beyond the scope of this article.

Thanks for reading. Happy coding.
