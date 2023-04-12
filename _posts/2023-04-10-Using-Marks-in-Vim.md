---
layout: default
published: true
---

# How to set a mark - 12345678910111213141516

When Vim is in Normal Mode, move the cursor to a location that you may like to return to. Perhaps a method name, or an argument.

While still in Normal Mode, hit the "m" key. (lower case "m").

A mark has now been set. Before this can be used though, we'll need to name that mark.

# How to name a mark

Marks are named by the very next keystroke after typing "m". There are 26 possible marks. So that'd be a-z.

Let's start with "a".

There is now a named mark for the current Vim document.

We've set a pin, and we've named the pin. Now it's time to see the utility of this.

# Navigating directly to the location of the named pin

Now do some editing, or shift the cursor to some other location on the file being edited.

I'd recommend doing something like "gg" to return the cursor back to the top of the page.

To return the cursor back to the mark, use the following keystroke:

~~~
`a
~~~
The cursor is now directly on the mark that was named "a".

There are 25 other possible marks that can be placed around the current document.

Every new document/file you use will be able to set 26 new marks, however you'd like.

# How to move to the beginning of a line with a mark

Sometimes I don't need that much precision. Sometimes I only need to go to the beginning of the line where a mark exists.

Navigate to some other code on the page.

To navigate back to the beginning of the line that has the "a" mark, perform the following keystroke:

```
'a
```

ta-da!

# conclusion

To summarize, here are the keystrokes to set a mark and assign it to the letter "a" (1) and then navigate directly to the mark (2) and/or to the beginning of the line that has that mark(3):

1. ma
2. `a
3. 'a



