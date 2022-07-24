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

![action specified explicitly](/assets/images/code_photos/screen_shot1.png)

which will result in this HTML when rendered:

![HTML rendered code](/assets/images/code_photos/form_action_users.png)

* The input must be explicitly labeled into a hash to be nested within the params hash upon submission:

![label with hash](/assets/images/code_photos/explicitly_label_user_hash.png)

and this will push the input to a nested hash within params:

![params hash](/assets/images/code_photos/params_hash.png)

* The methods exposed with the `form_tag` are specific to be used with that method:

![form_tag methods](/assets/images/code_photos/form_tag_methods.png)

## paragraph 2 - `form_with`

* The action can be specified explicitly, though it's passed via the `url:` argument and can accept the rails path helpers

![form_with action](/assets/images/code_photos/form_with_action.png)

And it creates this HTML (same as the form_tag)

![HTML rendered code](/assets/images/code_photos/form_action_users.png)

* Instead of explicitly coding the names of the input fields, adding the `scope:` argument will automatically provide the same result

![form_with scope](/assets/images/code_photos/form_with_scope.png)

* Can use a model (or an instance of one) to apply both a URL, action and the `scope:` for the input fields

![form_with action](/assets/images/code_photos/form_with_action.png)

* Using an existing model object will pre-populate the fields

* Field names do not have to match model attributes

* it's possible to mix and match methods within the form from the `form_tag` collection. 


## paragraph 3 - The `form_for` tag

It's being discontinued. If the above 2 methods are understood, then `form_for` should be easier to decipher and there is still a significant amount of reference to `form_for` in the official documentation API. 

## conclusion

Both `form_tag` and `form_with` make writing forms easier. 

And `form_for` should be known about, but not used since it's being deprecated and removed. 



