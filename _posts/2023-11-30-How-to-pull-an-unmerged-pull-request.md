---
layout: post
published: true
title:  "How To Pull an Unmerged Pull Request Locally"
date:   2023-11-30 00:54:42 -0600
categories: personal update git github
tag: personal update git github
---

After fighting with this a little too long, I want to capture this knowledge here so I can reference it in the future.

I'll add a reference to the StackOverflow article in the future.

For now here's how:

```
git fetch origin pull/<pull-request-number>/head:<pull-request-number>
```

This will create a new branch. The name of the new branch will be the pull request number.

After running the above command, will need to `git checkout <branch-name>`.... which would be something like `git checkout 1234` because the branch is the same name as the pull request number.

Ok. Cool. Got it. Now to review their work....
