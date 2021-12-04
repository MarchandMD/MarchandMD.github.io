---
layout: post
published: false # switch to true when I'm ready to publish this
title: Importing A New Theme vs. Building With The Current Theme
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## introduction

Change is an inevitable part of life. Being able to gracefully transition when change is necessary can be an indication of a flexible and open mind. However, there is an idiom that is popular which opposes these ideas: "Better the devil you know." It is my belief that an existing theme is a better tool to use to add a new feature to a static blog site, rather than searching for and importing a new theme.  

I will compare existing and new themes btoy considering issues related to deployment, a theme's ability to implement a navigation bar, and the robustness of a theme's documentation. The parameters for the starting point include a fully-developed and working site with the existing theme versus any new theme that hasn't been identified yet. While it is tempting to look for a new option that is somehow a quick fix with a slick looking user-facing navigation bar, making a change after a site has been deployed is detrimental to the process of growth. to begin understanding these convictions against making a change, I'll discuss the issues related to deployment with both an existing theme, versus using a new theme. 

## body of article

### section 1  

the existing theme in place has already been deployed as part of the larger push to host this blog. Immediately this seems to give an advantage to the existing theme, instead of searching for a new one. No additional time needs to be invested to see the existing thee live. this argument alone is the strongest statement for the abandonment of searching for a new theme. To deploy a new theme would require a selection of a new theme. Selecting a new theme includes browsing theme repositories from several resources, none of which provide universal standards in terms of compatibility, or even documentation requirements. Furthermore, the existing theme is part of a website that has content published and content that's waiting to be published. There is no guarantee a new theme will include the same layouts/includes, which would add additional time to deployment. Ultimately the purpose of a blog is for the easy dissemination of ideas. Spending more time editing single lines of code on several files to achieve what is already in place with an existing theme is an inefficient use of time. 

### section 2

The acknowledgement of a fully-deployed site, with content using an existing theme is important because it leverages the current state of a project. Nothing needs to be changed to the existing files. Similarly, adding a navigation bar may not require making any more changes either. The existing theme may already have a navigation bar in place, or at least may already be configured to process a navigation bar. I simply might need to learn more about how to work with the existing theme. If a navbar is no already implemented in a theme's design, I'd need to build one from scratch. Building a navigation bar from scratch includes writing a file to the `_includes` directory, updating a layout in the `_layouts` and maintaining the navbar as the site scales up in complexity and content.   

While Jekyll is built as a template and a file structure in place, it's still a project that requires time and technical knowledge. to compare an existing theme's navigation bar with a new theme I'd need to understand how the existing theme applies a nav bar, if any. I'd also need to know which pages are included in the nav bar, and how they're added. If a new theme is imported with a different layout, it might not be any easier to customize the code. At least it won't necessarily be any easier than working with the existing theme. Importing a new theme would only change the source of the documentation that I'd need to consult to learn how to work in the new theme. In this regard, adding a navigation bar in the existing thee might not be required because the theme may already be built to include a navigation bar in it's code. Importing a new theme won't make navigation bar customization easier. It would only change the documentation required to review and possibly include the extrapolation of layouts, includes and code/designing. 

### section 3

Since both an existing and new theme are very similar in their complexity of nav bar inclusion and customization, the next comparison will be related to the robustness of documentation for a theme. Since themes are created by any designer "in the wild" the amount of downloads and usage will be greatly varied. Some themes will be more popular than others. by using an existing theme I only have one documentation set to be familiar with. And depending on the popularity of that theme, it may already be well-documented. Importing a new theme would require gaining familiarity with the documentation and possible moving to a theme with less documentation. Since a new theme hasn't been selected yet, I'd need to peruse multiple documentation sets to understand the quantity of documentation that has been completed for a theme. 

## conclusion  

So in conclusion the sense is that an existing theme would be preferential to a new theme when it comes to adding the feature of a navigation bar. With a deployed blog in place, a navigation feature present in the existing theme, and familiarity present for the existing theme and documentation, the additional effort of importing a new theme simply for a single feature is not ideal. There is little justification in beginning again with a new theme when an existing theme can still provide a lot of education. So resist the urge to spend time looking for a quick fix and instead stick with the devil you know!