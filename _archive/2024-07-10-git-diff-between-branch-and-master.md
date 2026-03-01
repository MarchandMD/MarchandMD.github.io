---
published: true
layout: post
tags: git
title: Compare a git diff of a single file between a branch and master, quickly
---

```bash
git diff <feature_branch_name>..master -- path/to/file/name.rb
```

This will show, in the terminal, the git diff of the file at "path/to/file/name.rb" between the branch you're currently working on and the master branch. 
