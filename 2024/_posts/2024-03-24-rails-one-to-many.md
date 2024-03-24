---
layout: post
published: true
title: Creating One-to-Many Association in Rails
---


# Intro

Quick reminder about creating a one-to-many relationship/association.

# What did I already know

1. I knew that I needed to put both sides of the relationship into their respective models. The Team model needs `has_many :players`, and the Player model needs `belongs_to :team`.
2. A migration would be needed; and that there was a way for Rails to automatically write the migration for me.

# What didn't I already know

1. Both tables need to exist in the schema before creating the association/relationship
2. Only one side of the relationship needs to be expressed, for it to be bi-directional
3. There wouldn't be a joins table

# How to make the association/relationship

1. Had to write a migration to add the `Players` table (the `Teams` table already exsited)
2. Run the migration from #1
3. Create the association by generating a migration using specific Rails conventions. These coventions will do the difficult part of composing the content in the migration file, by writing a single command in the command line. Let's take a closer look:

## The single command

```bash
rails g migration AddTeamsToPlayers team:references
```

This single command will compose the migration; after hitting enter, the only other thing needed is to run `rails db:migrate`.

What this command is doing:

### rails g migration

`rails g migration` is the shorthand for creating a migration. After typing this, the only other things needed are a name for the migration and a declaration.

### AddTeamsToPlayers

This is the name of the migration. The name can be anything.

However, by following this specific pattern, Rails will compose the content of the migration file when hitting enter, automatically.

### team:references

`team:references` is the declaration. Based on the title of the migration the goal is to add Teams to Players.

Perhaps an easy way to remember this is:

- The last word of the title of the migration is the MANY object
- The first word of the declaration is the ONE object

The last word of the name of the migration is the table that's getting updated. So the Players Table is going to get a reference to the Teams table.

## Run the migration

For a sanity check, pop open the migration file and confirm what it says:

```ruby
class AddTeamsToPlayers < ActiveRecord::Migration[7.0]
  def change
    add_reference :players, :team, null: false, foreign_key: true
  end
end
```

Add a reference on the players table, that points to the team table. Do not allow the field to be empty. And it is a foreign key, so never will a player belong to a team that doesn't exist.

# Double check it works

After running the migration, drop into the console:

```bash
rails c
```

Create an instance of the ONE thing.

```rails
Team.create!(name: "home_team")
```

Now to see the association in action. Try to create an instance of the MANY thing, just like above.

I expect this to create an error:

```ruby
Player.create!
```

And just as expected, this did create an error.

The Player object was attempting to create a record with the field of the reference as null.

In the migration, it was specified that `null: false`. So null values are not permitted.

To pass the error:

```ruby
Team.create!(name: "home team")
# Team created

Player.create!(name: "billy", team: Team.last)
# Player created
```

A Player was successfully created, with an association to the Team.

Let's see the association in action:

```ruby
first_player = Player.first
# player just created

first_player.team.name
# home team
```

This proves that the association was successfully created.

