---
layout: post
published: true
tags: ruby rails heroku deployment
---
| section                                   |
| ----------------------------------------- |
| [Introduction](#introduction)             |
| [Requirements](#requirements)             |
| [Steps to Deploy](#steps-to-deploy)       |
| [Attempted Hotfixes](#attempted-hotfixes) |
| [The Actual Fix](#the-actual-fix)         |
| [Notes](#notes)                           |


### Introduction

If I'm going to deploy a site, I'm responsible for handling the DevOps portion of deployment.

Often during deployment of my Rails apps to Heroku (rails v 5.2.8) I came across the same error:

Failed to deploy because the assets did not precompile.

This article is a note to myself about how I ultimately solved this error during deployment, so I can minimize the headache during the eventual next deploy....at least to Heroku.

### Requirements

Since this is mostly a note to myself, I know what my starting point is.

In the off chance that you're reading this and you're from _the wild_ than here's my starting point:

- I have an app ready to be deployed
- I have the app pushed to a Github repository
- I have a Heroku account
- I have the Heroku CLI installed on my local machine
- It's all built with Ruby and Rails
- Node and NPM installed (just run `node -v` and `npm -v` to determine if you're on the same page)

### Steps to Deploy

I don't deploy to Heroku everyday, so obviously it's a skill that I can lose quickly.

Documenting the process here will accelerate the process moving forward.

The following are commands to run in terminal to deploy:

1. `heroku create <app-name-here>`
2. `heroku stack:set heroku-20` *
3. `git push origin main`
4. `git push heroku main`

it's this last step that would typically result in the build failure, due to an inability by Heroku to precompile the assets.

What will follow is a list of unsuccessful steps I took. Then I'll share the step that actually fixed my issue.

### Attempted Hotfixes

1. I first tried to remove all the images from `app/assets/images`. I'm usually not using a ton of images, and it's pretty easy for me to just delete all the images. This is my first step because in the past this worked. However, this step has failed to fix the issue more times than it has resolved the issue. But it worked once and it's easy, so this is usually where I start. This most recent effort needed more than this. The search continues....

2. I ran `rails assets:precompile`. Well, actually I ran `rails --tasks` firsts, because I can never remember the task I need, but I know that `rails --tasks` will remind me. I figured this would do the trick, because it's my understanding that running `rails assets:precompile` takes the asset pre-compilation out of the hands of Heroku. This of course begs the question: what is asset pre-compilation. It's a niche thing to know and understand and probably is less confusing than it sounds, i'll leave it up to the reader to give it a Goog. Runninng `rails assets:precompile` does result in a couple new files being created, so of course, will need to push to Github before attempting to deploy. Unfortunately, this didn't work either.

3. At this point I turned to StackOverflow. A unique fix I came across was installing a Node package. I have Node and NPM on my machine. the package I installed was called "terser". So I ran `npm install -g terser`. For situations like this I don't mind installing these packages globally; If I install it globally than I don't have to ensure where it's installed. I equate this to killing a mosquito with a sledgehammer. At this point, I'm reaching for larger and larger tools to kill that annoying buzz. Again, no dice after pushing to Github and attempting to deploy. *

### The Actual Fix
The previous solution is where I began to gain confidence and felt like I was no longer reaching for bigger and bigger sledgehammers (ala Gallagher....YouTube him, Kids, for some low-brow humor), and instead I felt like I might have found a scalpel of a solution.

Again, I was on StackOverflow, and I found a question of a user who was attempting to deploy via a different service, but experiencing a similar problem. One of the lesser solutions suggested the following:

> comment out the `uglifier` gem in the Gemfile
>
> go to `config/environments/production.rb` and comment out the line `config.assets.js_compressor = false`

And of course, run through the git cycle, and push to Github.

Boom. Deploy to Heroku successful. Problem solved.

### Notes

1. `heroku stack:set heroku-20` is a short-term solution; as of the publishing of this article (2023-06-05) this solution works; the reason I have to do this is because of the version of Ruby (2.7.4) my Rails project is using. The reason this is a short-term solution is because that version of Ruby is nearing it's "End-of-life" support (which sounds super ominous), aka EOL. Setting the stack to `heroku-20` enables deployment to Heroku. There is another stack that is available.... `heroku-22`. Eventually it may behoove me to learn more about this. As well as updating to a more current version of Ruby and/or Rails. But this article is more about solving the problems I have been having recently.

2. Why didn't I read the stacktrace? I did read the stacktrace; it was complaining about my asset compiler, and it was complaining about the software that was being used to compile the assets. What's outlined above is my investigation process to determining where that is happening.