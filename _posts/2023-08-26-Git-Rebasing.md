---
published: true
layout: post
---

|table of contents|
|---|
|[Learning How Git Rebase works](#learning-how-git-rebase-works)|
|[When to Rebase](#when-to-rebase)|
|[What's Happening](#whats-happening)|
|[A New Mental Model](#a-new-mental-model)|
|[Conclusion](#conclusion)|

# Learning How Git Rebase works

Git is a massive tool.

Generally, this is how I usually use git:

1. I start on the `main` branch on my local machine
2. Create a new branch
3. Do some work
4. git add
5. git commit -m 'some commit message'
6. Repeat steps 3 through 5
7. git pull origin main when I'm ready to push to the remote repository
8. I then resolve any merge conflicts
9. repeat steps 4 and 5, if necessary, then skip to step 10
10. push changes to the remote repository on Github
11. Open a Pull Request on/in the remote repository

This article will modify the above steps to illustrate one way to use `git rebase`.

# When to rebase

Since there's already a flow of steps listed above, the question is: what part of this flow would be replaced by `git rebase`?

To illustrate, here are the steps that would remain:

- Start on the `main` branch on my local machine (with an existing remote repo connected)
- Decide to do some work, so create a new branch with `git checkout -b <name of new branch>`
- Do some work on the new branch
- git add
- git commit -m 'some commit message'

This is where the workflow deviates to properly use `git rebase`.

The remaining steps look like this:

- Switch back to the `main` branch (`git checkout main`)
- `git pull` - this will `fetch` and `merge` any changes made by other developers that have been merged to the remote repository main branch
- switch back to the feature branch `git checkout <name of branch you've been working on>`
- `git rebase main`

# What's happening

By switching back to the local `main` branch and running `git pull`, the local copy of `origin/main` is updated/fast-forwarded to be a reflection of the remote repository.

Next, switching back to the new branch that's been the focus of the most recent local work you've been doing, you're ready to rebase.

Running `git rebase main` does the following things:

- lines up all the commits on the `main` branch
- looks at all the commits on the `new branch you've been working on`
- creates new commits to the front of the line of existing commits on `main` branch

If the new branch you've been working on had 1 commit, the `rebase` command will rewrite one commit to the front of the commit history on `main`.

If the new branch has 10 commits, the `rebase` command will rewrite 10 commits to the front of the commit history on `main`.

# A new mental model

I often think of it as a big line waiting for a roller coaster.

All the commits from `main` are all the people waiting in that long line to get on the roller coaster.

When you run `git rebase main`, it's like a small line of 1, 2, 3....however many people had started somewhere else, and know they're being placed in the same order AT THE FRONT OF THE LINE FOR THE ROLLER COASTER.

In this mental model, the people who 'cut' in line are like the new commits you've been making on the new branch. They started queuing up while you were doing work on your new feature branch.

Running `git rebase main` is what moves them from one random place to the front of the line.

# How often

If the new feature branch has _never_ been pushed to the remote repository, there is no limit to the amount of times it can be rebased.

# When to NOT rebase

Theoretically, right now, to be safe, if you've ever sent a PR request from a feature branch DO NOT rebase.

The reason being.... when the `git rebase main` command is run, git is actually creating new commits (which have new SHA codes).

The PR you submitted will have different commit SHAs. So if a PR has been opened from a branch, don't rebase.

Also, don't use old branches. Or if you do, don't rebase them, and don't submit PRs with them.

This part of your process maybe different, but this is one simply way to avoid confusion.

# Conclusion

Rebasing doesn't have to be scary. It requires some discipline with branches, but don't let that be fear inducing.

Each team may behave different. YMMV.

Git rebase is another alternative to branch management, and keeping commit history clean. It requires a couple extra steps, but it can provide some benefits, such as allowing for an interactive rebasing process. Which is good material for the next article.

Thanks for reading!

