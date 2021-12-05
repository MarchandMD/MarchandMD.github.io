---
layout: post
published: false # switch to true when I'm ready to publish this
title: Default Minima theme Vs Minimal-Mistakes theme
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## introduction

Change is an inevitable part of life. Being able to gracefully transition when change is necessary can be an indication of a flexible and open mind. There is an idiom, however, that opposes these ideas: "Better the devil you know." Using the existing default Minima theme is better than changing to the new theme titled Minimal-Mistakes.

I will compare and contrast the Minima and Minimal-Mistakes themes by looking at the steps needed to configure them, the strength of the documentation for each, and the features available to both. The comparison will start with a fully-developed and working site already using the Minima theme. While it is tempting to look for a new option that may seem to be a quick fix with a slick looking user interface, making a change isn't necessarily the best thing to do when learning. To begin understanding these convictions against change, I'll discuss the steps needed to apply a theme. 

## body of article

### section 1  

The existing Minima theme has been in place since the project was created. The Minima theme comes "pre-packaged" as the default of a new project. It's intended to be used as a starting point for learning Jekyll. To apply the Minima theme requires no editing of the existing files. Also, adding to the blog's content does not require any changes to files. Furthermore, the `Gemfile` and `_config.yml` are already properly setup and do not require any editing.  

Selecting the Minimal-Mistakes theme is not the default, and therefore requires some understanding of how to alter the project in a non-detrimental way. Since the new theme may use different layouts with unique layout convention, existing content may need to be updated to adhere to the new theme's layout naming convention. Finally, using a new theme would require updating the `Gemfile`, bundling the project correctly to ensure proper versioning amongst all software used, and updating  `_config.yml` to apply the new theme.  

While it may seem to be relatively easy to change to a new theme, getting away from the default may introduce hidden challenges. One way to avoid or resolve challenges is through documentation. 

### section 2

Documentation can resolve challenges to using a theme effectively. I will next observe both theme's ReadMe files, compare the # of contributors to the entire themes, and also the interface for accessing each theme's documentation. 

The Minima ReadMe file boasts 21 unique contributors with the last update happening April 2020. Minimal-Mistakes ReadMe file shows 12 contributors and the last commit occuring October 2021. While there are more contributors to the default Minima theme, Minimal Mistakes has been updated more recently. However, the recent nature of an update isn't an objective indication of qualitative superiority. It may point more to a project's "maturity". 

The entire Minima theme lists 66 unique contributors across the repository. The Minimal-Mistakes theme lists 238 unique contributors. This is a sizable difference. Clearly there is a significant amount of popularity in working on and contributing to the entire theme for Minimal-Mistakes. The quantity of contributors points to the open nature and popularity of the software. A smaller amount of contributors again may point to a more concentrated amount of "power" and/or design decisions being made, and thus point to a more mature set of documentation. 

The maturity of a theme's documentation can be further articulated by interacting with it as a user. Minima is of course pre-packaged with the Jekyll software and is referenced at length in the documentation. Everything from Tutorials, to community posts, to basics of all aspects of the Jekyll software are woven together with the usage of Minima. On the other hand Minimal-Mistakes theme has a nice user interface, which describes in a succinct fashion how to quickly interact with the theme. While it is easy to read and navigate, it's more style than substance and can't compete with the educational feel of the documentation provided by the Minima default theme.

Having now compared and contrasted both theme's documentation with each other, i'm going to look closer at the specific features of each theme; Specifically, target purpose of the theme, layouts, customization of navigation and aesthetics of the interface. 

### section 3

Looking through the documentation of each theme gives a sense of what both themes are all about. Taking a closer look at specific features about each theme helps embellish the comparison and contrast of the two themes.  

Minima is billed as a "one-size-fits-all Jekyll theme for writers". The target users are writers looking to write, and specifically a blog. Minimal Mistakes on the other hand claims it's "...perfect for building personal sites, blogs, and portfolios." So by self-definition the Minima theme is more rigid in terms of who it's intended audience is. However, the latter of the 2 themes goes on to further describe itself as "purposely minimalistic (styling) to be enchanced and customized" by the designer. 

For Minima, the different layouts that are included are default, home, page and post. The default is the basis for the other three. That is: home, page and post all include front matter referencing the default layout. So ultimately Minima is a single layout using Liquid coding language to create other layouts. Minimal-Mistakes has 14 different layouts! A lot more to potentially manage, and at the very least a lot more to begin to learn how to properly apply. 

Minima does have a built in navigation bar, however, it is not easily customizable. Adding additional pages with a title in the front matter adds to the navigation options, but it's not a separate part of the code in `_includes`. 

Minimal-Mistakes has a separate "nav links" in it's `_includes`, but it's not necessarily easier to customize than the default theme. 

In terms of aesthetics, both have a "clean" feel to them. They aren't overly cluttered, and they are responsive and built to be respectful of multiple browsers and devices. 

## conclusion  

Both the default Minima theme and the popular Minimal-Mistakes themes have been compared. Using the criteria above it's interesting to find that the two theme's may not be so different from each other. And the Minimal-Mistakes theme may actually be more robust in terms of it's appeal and it's customization. 

However, as a new adopter of the Jekyll software, it's important to have as much support as possible when building a static blog. Being able to rely on the existing structure and configuration of the projects default build without needing to "retrofit" content, alter Gemfiles is ideal to the spirit of the static site generating software. And having the entire strength of the Jekyll development team building Minima with the idea of being "one-size-fits-all" is comforting; If there's ever an issue within the project, I feel supported. And finally, while Minimal-Mistakes has more options available to a developer and potentially more ability to create uniqueness out of the box, that greater potential comes with a need for a greater ability to wield the tool. And a tool is only as good as the artisan using it. 

So in the spirit of learning and the spirit of Jekyll itself, this blog will continue to leverage the Minima theme. Change is inevitable, however, perhaps it's possible to embrace change while still embracing "the devil you know". 