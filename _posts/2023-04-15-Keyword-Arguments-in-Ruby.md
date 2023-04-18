---
layout: post
published: true
---
|section|
|-------|
|[Introduction](#introduction)|
|[Remove Argument Order Dependency](#remove-argument-order-dependency)|
|[The Caveat](#the-caveat)|
|[In the Wild](#in-the-wild)|
|[Conclusion](#conclusion)|

# Introduction

One way to refactor old projects is to search for dependencies, and update the code to remove those dependencies.

Sandi Metz, [author of Practical Object-Oriented Design](https://www.poodr.com/), says dependencies can be identified in 4 ways:

-   When an object "knows" the name of another class
-   When an object "knows" the name of a method being passed to that other class
-   When an object "knows" the arguments to be passed to a "foreign" object
-   When an object has to "know" the order of the arguments passed to the "foreign" object

Let's take a look at the last bullet point and how to remove "argument order" dependency

# Remove Argument Order Dependency

If a method (aka a message) needs an argument, then there's no way around that. And that's completely ok. Arguments/parameters are a normal part of writing code.

The problem arises when there are multiple arguments that need to be passed in a specific order.

This is exactly what argument order dependency is: Requiring parameters to be passed in a specific order.

This dependency arises naturally as part of learning to program.

One example is the `#initialize` method for any object. If an application is new, and an object is new, every time an instance of the new object occurs, I'd need to refer back to the `#initialize` method to make sure I'm passing the information in the correct order. This will be tedious.

Solution: Use keyword arguments

If I'm in control of the object, I can update the `#initialize` method to use keyword arguments.

```ruby
# WITHOUT keyword arguments
class Foo
  def initialize(name, email, password)
    @name = name
    @email = email
    @password = password
  end
end

# WITH keyword arguments
class Foo
  def initialize(name:, email:, password:)
    @name = name
    @email = email
    @password = password
  end
end
```

It is as simple as adding the colon after each parameter.

Now it is possible to pass the arguments in any order when a new object is instantiated.

But there's a caveat....

# The Caveat

To take advantage of this new freedom requires extra typing of key/value pairs when creating a new object:

```ruby
# using the old way of argument order dependency
old_foo = Foo.new('Michael', 'email@email.com', 'pathword')

# using the new way of keyword arguments
new_foo = Foo.new(
  password: 'pathword',
  name: 'Michael',
  email: 'changing@theorder.com'
)
```

Admittedly, this may not feel like an advantage. More typing is involved.

The object has removed the dependency on order of keywords, and gained dependency on _name of keywords_.

According to Sandi Metz, this is an acceptable trade off.

Her reasons being (and I paraphrase):

Both the sender and receiver of the message "know" the name of the arguments. This is mutual knowledge.

By removing the ambiguity of the name of the arguments, the program introduces the freedom to add ambiguity in the order of the arguments. This adds flexibility and reduces the amount of rigidity when creating a new instance.

# In the wild

One place where keyword arguments are prevalent is in the `form_with` helper in Rails. That's a method that accepts multiple arguments/parameters. Some are required, others are not. But they're all keyword arguments, and can be passed in any order. Which definitely helps when learning about constructing forms and learning to accept that the order of the arguments do not matter.

# Conclusion

Keyword arguments versus positional arguments is not an either/or conflict. it is possible and reasonable to use both keyword arguments and positional arguments in the same class. However, there can be a strong argument made for using keyword arguments more often than not.

# Editorial comments

I do my best to remove ambiguity when I write; Early in my development I gained an aversion to words such as "just" and "simply", because of the frustration it would trigger after coming to a new topic with good intentions of remaining calm and clear-minded.

Throughout this article the word "know" or "knows" appears several times. And that to me smacks of confusion. _How could something as banal as code 'know' about something?_ Instead of diving into a philosophical discussion of what it means to "know" something (but if you're into that sort of conversation, please email me your thoughts) I'll make a quick note here: using this word bugs me.

If it bugged you to, this section is for you:

An object does not "know" about another class.

But it is possible to see another class appear inside some other class.

For example:

```ruby
class Foo
  def initialize(name:)
    @name = name
  end

  def some_method
    my_pet = Pet.new('billie')
  end
end
```

See how `Pet.new('billie')` is inside the `Foo` class?

That's what is meant by `Foo` "knows" about `Pet`.

Happy coding!