---
published: true
layout: post
tags: rails, stimulus
title: Where to add the value attribute for Stimulus
---

Stimulus values need to be added to the same element that defines the data-controller

For example:

```html
<div data-controller="example" data-example-value="hello_there">
  ....
</div>
```

This is referenced directly in their [docs](https://stimulus.hotwired.dev/reference/values)

The value then needs to exist in the Stimulus controller:

```js
// stimulus controller file
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { example: String }
}

// additional code omitted
```

....and can be accessed throughout the controller, and in the browser console when debugging as:

```js
this.exampleValue
# => "hello_there"
```