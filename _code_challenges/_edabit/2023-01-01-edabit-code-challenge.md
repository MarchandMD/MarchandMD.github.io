---
title: Edabit - January 2, 2023
layout: page
published: true
categories: challenge ruby edabit
---

# January 1st, 2023

> Given an array of dates in the format "Dec 11", etc
> and a month in the format "Dec" as arguments,
> Return the number of uploads for a given month

```ruby
def upload_count(arr, month_abbreviation)
  arr.count { |element| element.include? month_abbreviation}
end
```

> In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you
> advance your piece onto the same tile as another player's piece, both of you earn a bonus.
>
> Can you reach your friend's tile number in the next roll?
> Create a function that takes your position a and your
> friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
> given: a = position 1
> given: b = position 2
> given: c = maximum possible adancement = a + 6

```ruby
def possible_bonus(a,b)
  (a + 6) >= b && b > a
end
```

>  Write a function that returns the number of users in a chatroom based on the following rules:
>    If there is no one, return "no one online".
>    If there is 1 person, return "user1 online".
>    If there are 2 people, return "user1 and user2 online".
>    If there are n>2 people, return the first two names and add "and n-2 more online".

```ruby
def chatroom_status(users)
  if users.count > 2
    "#{users[0]}, #{users[1]} and #{users.count - 2} more online"
  elsif users.count == 2
    "#{users[0]} and #{users[1]} online"
  elsif users.count == 1
    "#{users[0]} online"
  else
    'no one online'
  end
end
```