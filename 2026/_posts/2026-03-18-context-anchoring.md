---
layout: post
published: true
title: My thoughts on "Context Anchoring" by Rahul Garg
tags:
---

link to original article: [https://martinfowler.com/articles/reduce-friction-ai/context-anchoring.html](https://martinfowler.com/articles/reduce-friction-ai/context-anchoring.html)


As always, if the author does not like being quoted, I'm happy to come to some different agreement for how to promote their work.

Why this article: Firmly not composed by AI

Subject: Context windows

Original website hosting article: MartinFowler.com

>  The context lives nowhere else. There is no external record. And so the conversation stretches on, growing unwieldy, while the AI's ability to recall earlier decisions quietly degrades

There are 2 types of interactions worth having with AI, both produce artifacts:

1. Planning
2. Execution of a plan

Any other conversation, be it ephemeral fact-finding or self edification, is completely fungible.

> Here is a test I find revealing: could I close this conversation right now and start a new one without anxiety?

After a plan artifact has been generated, immediately close the current context.

A new chat simply begins: "Complete step 1 of this plan"...

> Research confirms ...that  language models perform significantly worse on information placed in the middle of long contexts compared to the beginning or end.

"Lost in the Middle".

Claude just announced a 1 MM token context window. Great...more context to be lost in the middle.

> is what fades first. In my experience, the reasoning behind decisions degrades faster than the decisions themselves.

This would make sense. Decisions are finite; objective. Fact.

Reasons are ephemeral, and often not based in logic.

Why did I eat half a bag of chocolate chips today?

> Compacting...is a black box....The what survives; the why does not. Trusting an opaque process to preserve what matters is not a strategy; it is a hope.

Hope is not a strategy.

Placing trust in an LLM is a foolish choice.

> sharing...context with AI...build... shared mental model between human and AI. But that alignment is...transient.
>
> Context anchoring is the practice of making that alignment durable.

If there's a context window, and that is ephemeral, than context anchoring is the idea of establishing alignment between AI and humans about what decisions were made and also why the decisions were made.

Not sure how this differs from claude.md files, or other instructions files, but we will see.

If anything, this is another artifact to clog context window.

> The solution is to treat decision context as external state

Again, doesn't this need to be fed back into the context window?

> A living document that exists outside the conversation, captures decisions as they happen...serves as...authoritative reference.

Isn't this capturing the what, instead of the why?

Is this living document supposed to contain detailed information RE why a decision was made? Who's responsible for this documents curation?

> project-level context....and....feature-level context

Again, who's contributing to and maintaining these documents? Is this another prompt to feed into the AI chat window during development?

> When starting a new sessions, both are loaded:

Ok, so yeah, this is additional fodder for the context window. Which again, consumes valuable tokens of the context window and makes more interaction susceptible to "lost in the middle" degradation.

> document-driven development

I mean, maybe. But again, this all must be fed into the context window.

## Conclusion

It seems like more and more people are trying to espouse their novelty in a myriad of ways, but they all end up reeking of the same smell of false intellectualism.

I applaud the effort, but curated context here or there ultimately must be in the context window, and that is what determines the efficacy of a conversation.

Use the AI like a tool: Create a plan or execute the plan. Otherwise, it's an ephemeral toy. YMMV.


