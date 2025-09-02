---
published: false
layout: post
tags: git github
title: Using Git Rebase
---

This is how I usually use Git:

1. Create a new branch
2. Do some work
3. `git add <files>`
4. `git commit -m 'some commit message'`
5. Repeat steps 2 through 4, as necessary
6. `git pull origin main`
7. Resolve any merge conflicts
8. push changes to the remote repository on Github
9. Open a Pull Request

This article will modify the above steps to use `git rebase`.

### When to rebase

Considering the flow above, the question is: when would it be appropriate to use `git rebase`?

> instead of running `git pull origin main` on the new branch, run it on the main branch, and then rebase

Here's how:

- Switch back to the `main` branch
- `git pull`
- `git checkout <name of branch you've been working on>`
- `git rebase main`

### What's happening

By switching to the local `main` branch and running `git pull`, the local copy of `main` is updated/fast-forwarded to be an exact copy of the remote copy of `main`.

Next, switching back to the new branch brings the recent work into focus

Running `git rebase main` does the following things:

- lines up all the commits on the `main` branch
- looks at all the commits on the new branch
- creates new commits to the front of the line of existing commits on `main` branch

If the new branch you've been working on had 1 commit, the `rebase` command will rewrite one commit to the front of the commit history on `main`.

If the new branch has 10 commits, the `rebase` command will rewrite 10 commits to the front of the commit history on `main`.

### How often

If the new feature branch has _never_ been pushed to the remote repository, there is no limit to the amount of times it can be rebased.

### When to NOT rebase

If you've ever sent a PR from a feature branch DO NOT rebase.

The reason being.... when the `git rebase main` command is run, git is actually creating new commits, which have new SHA codes.

It's like Git is doing the `git add .` and `git commit -m` again, but it's using your previous messages.

The PR you submitted will have different commit SHAs. So if a PR has been opened from a branch, don't rebase.

Also, don't use old branches. Or if you do, don't rebase them, and don't submit PRs with them.

### Conclusion

Rebasing doesn't have to be scary. It requires some discipline with branches, but don't let that be fear inducing.

Each team may behave differently. YMMV.

Thanks for reading!

