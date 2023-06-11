---
layout: post
published: true
---

# Docker; My introduction to it

|ToC|
|---|
|[Introduction](#introduction)|
|[More than just one thing](#more-than-just-one-thing)|
|[How I'll probably most frequently use Docker](#how-ill-probably-most-frequently-use-docker)|
|[Another use of Docker](#another-use-of-docker)|
|[What I know about Docker so far](#what-i-know-about-docker-so-far)|
|[Conclusion](#conclusion)|

# Introduction

Docker often comes up in daily life. Whether I see it in job descriptions, or I see it mentioned in conversations, or whether I see articles about it, it's another piece of technology that seems to have grown into the cultural zeitgeist for developers.

So now that it's part of the eco-system, I need to know what it is and how to use it. And that's what this article is: Me paraphrasing the things I learn to internalize what Docker is and how to use it.

So let's start....

# More than just one thing

Docker is more than just one thing, but it's talked about kind of like 'Git' is talked about. So let's start from a high level and then look at different parts of it.

1. Docker is a way to run an entire app that I pull from Github without having to install different languages and various packages and dependencies onto my local machine

2. Docker is a series of commands I can (and have to) run from the command line, to be able to access an app

3. Docker uses something called an `image` to build a temporary `container`. This is done from the command line. Often the result is being able to interact with an app, in the development environment

4. Docker Hub is a thing. That's a website, kind of like Github.

5. Docker Desktop is a thing too; That's like a GUI interface for things related to Docker

# How I'll probably most frequently use Docker

Not sure, but here's my best guess:

1. I'll download an application from Github onto my local machine (git clone, or whatever)
2. I'll `cd` into that repo
3. That repo will probably have a `Dockerfile` in the root directory
4. I'll run a bunch of `docker` commands in the commandline that will access a Docker image and build a temporary Docker container

At this point, I'm pretty sure I'd have access to most things I'd need to be able to do in the terminal, within the project. I can still use the commandline once the project is up and running, but the commands in the commandline would be executed _within the context of the containerized application._ Not sure if that makes any sense, but that's how I'm thinking about it.

# Another use of Docker

The "thing" of Docker seems to be an image. And it's this image that builds the temporary container.

Since I have the ability to build containers using images, the obvious next question is: how do I build an image.

And I'd want to build an image because I'd want to "dockerize" an app I've built.

This way I'd be able to include instructions in a README about how to run the app I build from within a container, without having to expect the other person to know how to setup the project. Although if they're able to use docker, than they'd most likely be able to setup a project from a poorly documented repo on Github, but that's besides the point.

So the other use of Docker is to build an image. But that's not really using Docker, so much as building something using the technology of Docker. Which makes this very much a honeypot technology. And here i'm using the term "honeypot" to mean something that is interesting and entertaining, though not a foundational skill.

# What I know about Docker so far

This is more of a brain dump, than it is an exhaustive list

1. It's possible to run `docker run` or `docker-compose`. What's the difference? Learn more [here](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Docker-run-vs-docker-compose-Whats-the-difference)
2. It was necessary to signup for an account on [Docker Hub](https://hub.docker.com/)
3. It was necessary to install Docker Desktop on my machine _AND_ to sign into my Docker Hub account from Docker Desktop
4. I think installing Docker Desktop on my local machine gave me access to the `docker` commands in terminal
5. I was able to launch an open source project using Docker, and I was able to access it's development environment in my browser, so that's a win

# Conclusion

It's not so scary, once it's been grasped at a certain level. Next comes the repetitions of using it more often, and doing more than just building temporary containers...such as building an image.