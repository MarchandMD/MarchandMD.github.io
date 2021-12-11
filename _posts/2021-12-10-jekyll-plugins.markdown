---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

### Intro
From [Jekyllrb.com](https://jekyllrb.com/), plugins are something that can be installed. To install a plugin there are three possible options. It's not necessary to use all 3 options; However, all 3 methods achieve the same thing. I'll discuss the default method for installing plugins, a method without a Gemfile, and finally the programmer-specific method. Plugins are a great way to improve the things a website can do. Thankfully there are a number of ways to install plugins into my project. The first way I'll discuss is the method that is used by the developers of Jekyll. 
### body
#### paragraph 1 - the default method
The first method I'll discuss is the default method. I call this the "default" method because it's what I see in the project of a Jekyll blog created using the generator command. 

There are 3 steps necessary to completely installing the plugin. Those steps are: add the plugin to the Gemfile, install the plugin/gem to my computer, configure the project.  

1. Add the plugin to the Gemfile 

In the Gemfile of the project, there is a section that looks like this:  

``` ruby
group :jekyll-plugins do
  gem "jekyll-paginate" # your file may look similar, or it may have more gems, or fewer
end
```

If you know the name of the gem you want to add, you'd add it inside the "do/end" block, following the same pattern as above. 

2. Install the plugin/gem onto my computer

Once a new plugin/gem has been added to the Gemfile, the next step would be to actually install the plugin by running the following command in the command line: 

```
$ bundle install  

(no additional commands need to be added to the line above)
```

At this point, the computer will review the Gemfile from the project, and then install locally any new plugins/gems that aren't already on the computer. 

3. Configure the project to use the plugin/gem

Finally, the last thing I need to do is update the `_config.yml` file so the blog/website/project is using the plugin, or at least is "aware" of the plugin I just added. The way to do this is to open up the `_config.yml` file and add the following: 

```yaml
#_config.yml

- plugins
  - jekyll-paginate 
```
At this point, the plugin/gem has been installed, and "activated". My work as a developer/designer isn't necessarily done at this point. Now I'd need to go into the project and write the code that uses the plugin. But that's for another article. 

This is the default way of installing a plugin for a new Jekyll project. But there are 2 other ways to install them as well. The next method will be very similar to this method, except it will skip the Gemfile step. 

#### paragraph 2 - the method without the Gemfile  

Now that the default method for installing a plugin has been discussed, I'm going to describe how to install and activate a plugin without using the Gemfile. This method requires 2 steps: preparing my project to use the plugin/gem, and then installing the plugin/gem to my computer.  

1. Preparing my project to use the plugin/gem
  
Much like the default method, I need to setup my project to "activate" the plugin, by editing the `_config.yml` file: 

```yaml
#_config.yml

- plugins
  - jekyll-paginate 
```
2. Installing the plugin/gem directly to my computer  
   
 The second step is installing the plugin/gem via the command line.  

```
$ gem install jekyll-paginate
```

The computer will automatically install the plugin/gem on the computer. 

And that's the complete process for the second method. 

This second method was very similar to the default method, but it doesn't use the Gemfile.  

The final method is more for the experienced programmer/developer. If I'm building from scratch I might want to use the final method, but I don't really see why someone would use this method other than they have a high degree of skill or knowledge with writing custom plugins. 

#### paragraph 3 - the programmer-specific method  


The first two methods discussed used plugins/Gems that other people wrote. This method is a more "direct" approach and assumes I have a plugin that I've built and want to use in my blog/project/site. 

In the root folder of my project, I'd add a directory with the name of `_plugins`.  

 Any `*.rb` file in that directory will be "loaded" before my site is generated. Those `*.rb` files are the plugins. 

That's it. That's all that's needed to do this 3rd approach. 

And that's why I assume this method is more for the experienced programmer/developer who has something specific they're doing or using to customize a project. 

### conclusion

So that's it. Those are the 3 methods for installing plugins into a Jekyll project. It's not necessary to do all 3. Only 1 is needed. But they all achieve the same thing. 

There are many plugins/gems that are available to use with a Jekyll blog. Unfortunately just because a project uses a plugin doesn't mean it'll work on GitHub pages, the place I host my blog from. There are additional steps necessary to enable usage of "non-approved" plugins, and that'll be discussed in another article. 