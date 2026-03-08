---
layout: post
published: true
title: Relocating Rigor
tags:
---

link to original article: [Relocating Rigor by Chad Fowler](https://aicoding.leaflet.pub/3mbrvhyye4k2e)

_If the author dislikes being quoted, please contact me and we can arrange proper attribution or another mutually agreeable middle ground_

Why this article:
- I'm confident it's not written by AI
- The author is a proven dynamic, established human being across disciplines
- Has authored books in my preferred language: Ruby
- Subject of AI
- I've already read the article a couple of times

## Quotes and thoughts

> It also explains why I lost interest once Extreme Programming got absorbed into the broader "Agile" movement and solidified into branding and ceremony. When the name took over, the rigor drained out. The feedback softened. The theater returned. Consultants taught the artifacts without the discipline....I'm revisiting this history now because we're watching the same pattern repeat with generative AI, and it's being misunderstood in exactly the same way.

The introduction of this article paints a picture of a really exciting time to be a developer: Extreme Programming was an approach that could create tangible results that helped separate craftsmen from ticket-pushers.

And then it shifts to the paragraph above, showing how the practice was soon absorbed by wider adoption, misinterpretation, and bastardization. People hear about something that works, and then instead of learning how it actually is valuable, take short cuts to achieve the benefits.

It's like the idea of painting by number. Everyone wants the rewards, without the effort.

The author is suggesting generative AI is following the same pattern as XP.

> Certain shifts in software history...

What exactly is the shift he's mentioning here?

>  feel like freedom because they remove familiar signals of control.

What is the "freedom" he's suggesting? Freedom from writing code? Freedom from labor? Freedom from effort?

> In reality, they relocate rigor closer to where truth lives. They make it harder to fake progress.

I hope what he's talking about is the effort of software engineering.

If generative AI "feels" like it's creating freedom, but is actually "relocating rigor" of software development, then there is some cause for optimism about the field of software engineering.

But where does the truth live? and how could this _shift_ in software history make it harder to fake progress?

> Dynamic languages displaced static type systems.

The first relocation of rigor.

Ruby/Python require less syntax rigidity than static-typed languages. But they do require more contextual awareness.

Rigor moved from being specific about what everything's datatype is, to being specific about not interrupting the flow of logic.

> Extreme Programming displaced phase-gate development.

The second relocation of rigor.

Phase-gate development apparently included plans, design documents, and phase gates.

XP introduced TDD, CI, constant peer review and customer feedback.

This is a shift apparently because the rigor was moved to the act of writing code, as opposed to the planning of managers.

> Continuous deployment displaced release management.

Third relocation of rigor.

Apparently release management involved release windows, stabilization phases, integration efforts.

CD requires rigor of discipline because it moves fast, but that's not necessarily the point of CD. It's about predictability.

> Generative systems only work if invariants are explicit rather than implicit.

Invariants means things that don't change. A lot of code or programs is separating things that don't change with things that do change. And there are very real patterns here. CRUD, REST, HTTP, etc. And design patterns that don't change, even though the context around the patterns do.

> Failures must be loud and immediate.

Something I've found when writing is an awareness of need for rescuing failures, or for publishing information about failures to help troubleshoot in the future.

>  The engineer's job shifts from typing code to specifying intent and verifying outcomes.

Since code can be generated so easily, being able to look at code and understand/appreciate the context of how it works (inputs/outputs) but also how it could go wrong, and preventing that, becomes a skill that must be embellished.

> What does this look like in practice?...test-first development...turns out to be exactly the discipline that makes AI-assisted development work....The rigor relocated from who writes the code to what the code must satisfy.

Here.

The last line is important:

> The rigor relocated from who writes the code to what the code must satisfy.

If a person listens to the noise in/around the hype, they'll here the words "cost of code is near zero", or a permutation of it.

This simply means the code itself may be worthless; But the purpose the code satisfies becomes more valuable.

>...what the code must satisfy.

In the miasma of AI-generated output, some of it will be valuable; most of it will be cruft.

> The tests don't care whether a human or a machine produced the implementation. They care whether it behaves correctly.

Sycophants may say: Let the AI write the tests.

Without deep understanding of what is being tested, and how the various ecosystems interact, AI will also write cruft-filled tests.

> Specifying intent...is not easier than writing code.It's a different skill, and in some ways a more demanding one.

Must be more rigorous about what code is accepted as valid specifications.

> Cheap generation without strict judgment isn't a new paradigm. It's abdication.

Vibe-coding doesn't judge. Vibe-coding sets a very low bar. Just because an app/tool/platform can exist, doesn't mean it should exist.

The test generated should be ruthlessly nit-picked.

> comfort of working code that you don't understand is precisely the comfort you have to refuse.

Vibe-coding implementation does make one less critical.

It creates a state of comfort that must be rejected.

Create the thing...but make it resilient to prevent brittleness. And make it accessible to all.

> The engineers who thrive in this environment will be the ones who relocate discipline rather than abandon it....They'll build evaluation systems that are harder to fool than the ones they replaced. They'll refuse the temptation to mistake velocity for progress.

Discipline is often a characteristic/practice used when talking about art.

Or art is often defined as being a function of discipline.

Being rigorous about how features are developed, or contributions are submitted. This can lead to personal value-generation.

The acceleration doesn't mean less need for learning...it creates more opportunity to subdue more obscure details about the discipline.

Which leads to greater mastery.

> If generation gets easier, judgment must get stricter. Otherwise, you're not engineering anymore.

Humility vs hubris.

Over-confidence vs self-awareness.

Self-promotion vs Bombastic hyperbole.

Some element becoming less challenging doesn't remove necessity to apply effort; It simply creates an opportunity to apply effort elsewhere.

### Conclusion

This is an excellent article.

It looks at the new tool of "cheap code generation", and observes whence human evaluation can be applied to it. Or rather, before it.

Most beautiful things in life are free. Like looking at a nice painting, or listening to a good song.

Creating that painting or that song though requires tremendous rigor and discipline.

Then the person who created it becomes something valuable.

