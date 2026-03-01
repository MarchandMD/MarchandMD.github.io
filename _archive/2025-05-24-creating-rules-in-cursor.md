---
layout: post
published: false
title: Creating Rules in Cursor.AI
tags: ai cursor
---

Large Language Models (LLMs) don't retain memory between completions.

A "completion" is the output of a chatbot, or an agent.

Tell the chatbot/agent to do something; Everything it spits out is considered a "completion".

Rules are the workaround.

Simple example:
>
>  I work in Ruby on Rails. Frequently I'll prompt the LLM for assistance.
>
>  Frequently the LLM will immediately ask for additional context: "Should I provide a solution in Javascript, Python, Ruby, Go, Swift, Rust, etc."
>
>  Instead of following up with a second prompt of "Ruby", writing a rule solves this


# Caveats

- Must be using Cursor IDE

# How to write a rule

## For a specific project

Create a hidden directory in the top-level directory of a project.

```bash
# assuming the current working directory is app/

mkdir .cursor && mkdir .cursor/rules/
```

