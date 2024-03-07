---
layout: post
published: true
---

There was a disconnect between the [documentation](https://guides.rubyonrails.org/asset_pipeline.html#how-to-use-import-maps-as-javascript-asset-pipeline) and the various StackOverflow and Google searches regarding this subject.

So I'm writing this article.

# Intro

This article assumes a couple of things:

1. Using an (existing) Rails 7 project - I did this with rails v 7.0.8
2. The app was created using the default setup for handing Javascript - you just ran `rails new app_name` without a `-j` flag
3. You're willing to add Vanilla JavaScript to your project, using a third party JS library

If those 2 things are true, there shouldn't be any issues with following this.

## 1. Acquire the exact location of the third party JavaScript library

This was probably the trickiest part. JavaScript libraries are similar to Ruby Gems in one way: The libraries are complete libraries/modules/packages that exist and can be found in the internet.

However, they are unlike Ruby Gems because they exist in several centralized locations (as opposed to one single source). One such location is [npmjs.com](https://www.npmjs.com/). The code that makes up these libraries is served directly from the internet to your app. The way the app connects to these libraries is through _another_ service....called a Content Delivery Network (CDN).

Thankfully, Rails convention automatically "connects" to a specific CDN: [jspm.org](https://jspm.org/). There are some other JavaScript CDNs that exist. 2 other examples are [Unpkg.com](https://unpkg.com/) (which this tutorial will use), and [JSDelivr.com](https://www.jsdelivr.com/).

On the Unpkg.com home page, there's a very important line of code that shows exactly how to specify the location of a third party JS library.

```
unpkg.com/:package@:version/:file
```

* `:package` will become the name of the third party library. In our case: `animejs`.
* `@:version` will become the version of the library we're interested in. We'll be using `@3.2.2`.
* `:file` will become the filepath to the location of the actual library. This will turn into `/lib/anime.es.js`

So all together, that will become:

```
https://unpkg.com/animejs@3.2.2/lib/anime.es.js
```

Copy that.

We now have the exact location of the third party library for AnimeJS.

In the documentation, this is what's known as a "bare module specifier".

Said another way: This is the HTTP address of the third party library.

Moving on...

## 2. Create a pin in config/importmap.rb

When talking about this idea, often they're called Import Maps -- plural. But your app will only have one import map -- singular.

In that file there may be some existing code such as

```ruby
pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
```

That's fine. If that stuff is not there, that's ok too. (Though it should probably be there)

We're going to add this line:

```ruby
pin "anime", to: "https://unpkg.com/animejs@3.2.2/lib/anime.es.js"
```

Couple of important things here:

- you could have called `"anime"` anything you wanted.
- if it's all the same, you could add `preload: true` on the end of it
- don't forget the commas

Next step...

## 3. Import the package, via the pin you just added, to application.js

We now have a pin directly to the AnimeJS library.

We now need to pull it into the rest of the app.

Thankfully, we can do this by using our little keyword `"anime"` and not the full HTTP address (aka - bare module specifier).

Open app/javascript/application.js

There's probably some existing code there, something like:

```ruby
import "@hotwired/turbo-rails"
import "controllers"
```

That's fine. We'll add:

```ruby
import "anime"
```

This is pulling the third party javascript from the import map into the application.js file.

Next step.

## 4. Create a vanilla JavaScript file

Now create a blank javascript file. The easiest place would be in app/javascript. So it'll be a sibling file to `application.js`. I named mine `test.js`.

This will be the file where all the Vanilla JS is written.

Since we'll be writing vanilla JS, with the use of the AnimeJS library, let's bring that library into this file.

Next step...

## 5. Import the third party library via the pin into the vanilla JavaScript file

At the top of `test.js` (or whatever new JavaScript file you created) add this line:

```javascript
// app/javascript/test.js
import anime from "anime";

```

Getting closer. You now have the ability to use the `anime` keyword, which is a fundamental method for writing javascript animations that are described and documented in detail on the [animejs documentation page](https://animejs.com/documentation/).

There's 2 steps required to bridge the gap

## 6. Import the vanilla javascript file into application.js

Open `app/javascript/application.js` again.

It should look like this:

```javascript
import "@hotwired/turbo-rails"
import "controllers"
import "anime"
```

Add this line:

```javascript
import "./test.js"
```

This brings in the vanilla javascript file, which has been enabled with the third party library.

Final step...

## 7. Restart your server and start writing animations

At this point, the only thing left to do is to re-start the server.

in the Vanilla JS file, you can start writing `document.querySelector` statements, defining variables, and construction animations.

# Conclusion

I hope this was helpful and fills in some of the gaps that Rails documentation and StackOverflow articles miss.

Good luck!

