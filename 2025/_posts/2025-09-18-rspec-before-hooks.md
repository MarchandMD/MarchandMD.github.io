---
layout: post
published: true
---

Hooks are another name for "code to run at a certain time".

Maybe another good name for hooks would be "setup code" or "teardown code".

Hooks can be `before` , `after` or `around`.

Hooks typically take at least a `do/end` block.

```rb
RSpec.describe SomeObject do
  before do
    a_variable = "world"
  end

  it "exists" do
    greeting = "Hello #{a_variable}"

    expect(greeting).to eq("Hello world")
  end
end
```

It's also possible to specify when to run the hook.

```rb

before(:suite) # not common
before(:context/:all) # can be run one before a context block and applies to all tests within context
before(:example/:each) # runs before each example in the entire spec file
```

A `before` hook can be placed at the highest scope, directly after the first line in a spec file

```rb
RSpec.describe SomeObject do
  before do
    # code here
  end
end
```

If another `before` hook is written within a `context` block, the code in the `before` hook within the `context` block will take precedence.

It's possible to skip a before hook, if the before hook is given a metadata tag.

```rb
RSpec.describe SomeObject do
  before(:each, purple_tests: true) do
    color = "purple"
  end

  describe("method 1", :purple_tests) do
    # code here
  end

  describe("method 2", purple_tests: false) do
    # code here
  end
end
```

The describe block for method 1 will include the `color` variable (equal to "purple").

The describe block for method 2 will _not_ include the `color` variable.


