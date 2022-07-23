---
layout: post
published: true # switch to true when I'm ready to publish this
# title:  "Great googly Moogly" # whatever you'd like it to be; if omitted will default to file name title
# date:   2021-08-24 16:54:42 -0600 # optional; can override filename date to re-order articles; but it must contain all those different parts; -0600 is MST
# categories: # optional; I don't have any that I'm using right now
# tags: YAML list or space-separated string
---

## Intro - Build Rails forms

There are 2 active Rails helper methods for building forms, and 1 deprecated method:

1. `form_tag`
3. `form_with`
2. `form_for` - deprecated

This article will explore `form_tag` and `form_with`.

## paragraph 1 - The `form_tag`

* When using the form_tag, the action must be specified explicitly:

![action specified explicitly](./assets/images/screen_shot1.png)




* The input must be explicitly labeled into a hash to be nested within the params hash upon submission. 

* The methods exposed with the `form_tag` are specific to be used with that method. 

## paragraph 2 - `form_with`

* The action can be specified explicitly, though it's passed via the `url:` argument and can accept the rails path helpers

* Instead of explicitly coding the names of the input fields, adding the `scope:` argument will automatically provide the same result

* Can use a model (or an instance of one) to apply both a URL, action and the `scope:` for the input fields

* Using an existing model object will pre-populate the fields

* Field names do not have to match model attributes

* it's possible to mix and match methods within the form from the `form_tag` collection. 


## paragraph 3 - The `form_for` tag

It's being discontinued. If the above 2 methods are understood, then `form_for` should be easier to decipher and there is still a significant amount of reference to `form_for` in the official documentation API. 

## conclusion

## footnotes


