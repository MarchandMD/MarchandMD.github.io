---
layout: post
published: true
title:  "How To Pull an Unmerged Pull Request Locally"
date:   2023-11-30 00:54:42 -0600
categories: git github
tags: git github
---

This article was adapated from [this StackOverflow answer](https://stackoverflow.com/questions/6743514/how-can-i-fetch-an-unmerged-pull-request-for-a-branch-i-dont-own)


Someone else is working on the same github repository that you're working on.

You need to do a review of a Pull Request they just opened.

You want to pull their code onto your local machine so you can review their work.

How the heck do you do that?

Go to the repository on Github.

From the main page, click on the "Pull requests" tab.

You'll see a list of open pull requests. Each pull request is numbered. Let's assume that we're looking at pull request number 1.

Now that I know what the pull request number is, I can use the command line to fetch their pull request.

```
git fetch origin pull/1/head:1
```

This will create a new branch with the title if. The name of the new branch will be the pull request number.

After running the above command, you will need to switch to that branch using `git checkout 1`.

You've now switched to a local copy of their pull request.

At this point I'd usually start the server and take a look at the changes that person made with their PR.

Simple enough.

Happy Coding.
