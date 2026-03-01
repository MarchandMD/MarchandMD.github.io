---
layout: post
published: true
tags: ruby jekyll liquid blogging
title: Learning about Jekyll Plug-ins
---

### Intro

A blog built with Jekyll is pretty robust and complete "out of the box".

However, sometimes additional functionality would be nice.

Thankfully, there are plugins.

To install a plugin there are three possible options:

1. the default method for installing plugins in the Gemfile
2. adding plugins without a Gemfile
3. the programmer-specific method


Plugins are a great way to improve the things a blog can do. Thankfully there are a number of ways to install plugins.


### the default way to install a plugin

1. Add the name of the plugin to the Gemfile

In the Gemfile of the project, there is a section that looks like this:

``` ruby
### Gemfile

group :jekyll-plugins do
  gem "jekyll-paginate" # your file may look similar, or it may have more gems, or fewer
end
```

If you know the name of the gem to add, add it inside the `do/end` block, following the same pattern as above.

2. Install the plugin/gem onto your computer

After adding the gem to the Gemfile, don't forget to `bundle install`.

Running `bundle install` in the commandline will import the necessary software onto the local machine, as well as update the Gemfile.lock.

3. Configure the project to use the plugin/gem

Finally, the last thing to do is update the `_config.yml` file so the project uses the plugin, or at least is "aware" of the plugin. The way to do this is to open up the `_config.yml` file and add the following:

```yaml
#_config.yml

- plugins
  - jekyll-paginate
```

At this point, the plugin/gem has been installed, and "activated". My work as a developer/designer isn't necessarily done at this point. Now I'd need to go into the project and write the code that uses the plugin. But that's for another article, and totally depends on what the plugin does.

This is the default way of installing a plugin for a new Jekyll project. But there are 2 other ways to install them as well. The next method will be very similar to this method, except it will skip the Gemfile step.

### the method without the Gemfile

Now that the default method for installing a plugin has been discussed, let's describe how to install and activate a plugin without using the Gemfile.

1. Preparing my project to use the plugin/gem

Much like the default method, I need to setup my project to "activate" the plugin, by editing the `_config.yml` file:

```yaml
#_config.yml

- plugins
  - jekyll-paginate
```
2. Installing the plugin/gem directly to my computer

```
$ gem install jekyll-paginate
```

The computer will automatically install the plugin/gem on the computer.

And that's the complete process for the second method.

The final method is more for the experienced programmer/developer. If I'm building from scratch I might want to use the final method, but I don't really see why someone would use this method other than they have a high degree of skill or knowledge with writing custom plugins.

### the programmer-specific method

The first two methods discussed used plugins/Gems that other people wrote. This method is a more "direct" approach and assumes I have a plugin that I've built and want to use in my site.

In the root folder of my project, I'd add a directory with the name of `_plugins`.

 Any `*.rb` file in that directory will be "loaded" before my site is generated. Those `*.rb` files are the plugins.

That's it. That's all that's needed to do this 3rd approach.


### conclusion

There are many plugins/gems that are available to use with a Jekyll blog. Unfortunately just because a project uses a plugin doesn't mean it'll work on GitHub pages. There are additional steps necessary to enable usage of "non-approved" plugins, and that'll be discussed in another article.