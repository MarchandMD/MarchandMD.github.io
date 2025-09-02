---
published: true
layout: post
tags: rails stimulus
title: Basics of Stimulus Outlets in Rails 7
---

Pretend a `div` now has a `data-controller` attribute, like this:

```html
<div data-controller="controller-a"># code here</div>
```

If there are 2 (or more) separate Stimulus controllers on the same page, it is possible for controller A to "see" everything in controller B, **from within the Stimulus controller for A.**

_\* It is assumed that there is no turbo frame being loaded, and that all controllers, values, and targets are visible on the page._

With controller A in a view

```html
<div data-controller="controller-a"># code here</div>
```

and now controller B in the same view

```html
<div data-controller="controller-a"># code here</div>

<div data-controller="controller-b"># code here</div>
```

Now take the first step to _look into controller B_, by creating an "outlet attribute" on controller-A.

```html
// the second attribute; pattern is
data-nameOfThisController-nameOfOtherController-outlet

<div data-controller="controller-a" data-controller-a-controller-b-outlet="">
  # code here
</div>

<div data-controller="controller-b"># code here</div>
```

The value of "data-controller-a-controller-b-outlet" needs to be a css selector. Like a class or an id, that's on the same element that defines "controller-b".

Add an id to the "controller-b" element...

```html
<div
  data-controller="controller-a"
  data-controller-a-controller-b-outlet="#an-outlet"
>
  # code here
</div>

<div id="an-outlet" data-controller="controller-b"># code here</div>
```

Now in the controller-a Javascript Stimulus controller, make a reference to the outlet, the same way values and targets are referenced:

```js
// controller-a
import { Controller } from "@hotwired/stimulus";

export default class Extends Controller {
  // here
  static outlets = ["controller-b"]
}
```

Note = the name of the outlet in the Array is the name of the stimulus controller NOT the css selector.

Now create an initialize method in controller a and let's confirm they're connected:

```js
// controller-a
import { Controller } from "@hotwired/stimulus";

export default class Extends Controller {
  static outlets = ["controller-b"]

  initialize() {
    if (this.hasControllerBOutlet) {
      console.log("outlet connected")
    }
  }
}
```

At this point, if they're connected, controller A has _complete access_ to all of the things defined in controller B.

If controller B has values, it's possible to access them in controller A like so:

```js
// controller A
this.controllerBOutlet.someValue
```

Same goes for targets:

```js
// controller A
this.controllerBOutlet.someTarget
```

If a stimulus controller is loaded via TurboFrames or partial page loads, things will be different. It may be necessary to add an event listener into controller A, _to listen for controller B_

```js
document.addEventListener("turbo:frame-load", () => {
  if (this.hasControllerBOutlet) {
    console.log("controller B loaded")
  }
})
```
