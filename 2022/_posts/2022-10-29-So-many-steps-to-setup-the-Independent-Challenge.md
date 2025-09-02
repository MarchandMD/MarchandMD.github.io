---
layout: post
published: true
title: "So Many Steps To Setup The Independent Challenge..."
tags: turing_school ruby rails
---

<details class="mb-5" open>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#setting-it-up">Setup</a></li>
    <li><a href="#the-list-of-steps">The list of steps</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>
</details>

### Setting it Up

If you're a student from Turing School of Software and Design and you're working on an IC, you're in the right place.

I wrote this article while I was in mod 2 (2208-BE, 'sup?), because there were a lot of steps required to setup a project.

Here's a list that will hopefully help you get from "git clone" to doing the first user story. Good luck!

(\* means optional)

### The List of Steps:

1. Clone the repo to wherever you keep things on your local machine
   ```bash
   # this should be happening in your Terminal (or the VSCode Integrated Terminal)
   > git clone <name-of-the-repository>
   ```
2. Run the 'bundle' command (or 'bundle install'...they do the same thing)
   ```bash
   > bundle
   ```
3. Read the README.md
   ```bash
   # seriously, go take the time to read the README.md....
   ```
4. Review the existing database schema in the "db/schema.rb" file
5. \*Open the schema file, select all, and copy; Literally the entire file
6. \*Go to the **FREE** website at [www.dbdiagram.io](https://dbdiagram.io/home) and import your schema there, to get a visual representation of the database
7. Plan updates to the schema, visually (like, write them with pencil and paper, or update via the website in step 6)
8. Create additional models, with their relationships (has_many, belongs_to, has_many through:)
9. create the database:
   ```bash
   > rails db:create
   ```
10. write any migration you may need; For example.....

    ```ruby
    rails g migration CreateDiscounts percentage:integer threshold:integer merchant:references
    ```

11. migrate the migration
    ```bash
    > rails db:migrate
    ```
12. Repeat steps 10 and 11, and then migrate any new migrations you write
13. Review "/db/schema.rb" for correctness
14. \*Add the "SimpleCov" gem (don't forget to **bundle** or **bundle install** ....they do the same thing); for most ICs this is already in the Gemfile. To do this quickly run these commands:
    ```bash
    # may not need to do this
    > bundle add simplecov
    > bundle
    ```
15. \*Add SimpleCov code to the top of the spec_helper file

    ```ruby
    # spec/spec_helper.rb

    require 'simplecov'
    SimpleCov.start do
    add_filter "spec/rails_helper.rb"
    end

    ```

16. Run your tests to make sure you start with 100% test coverage:
    ```bash
    # your command may be different
    >bundle exec rspec spec/models/
    ```
17. Add additional tests for model relationships you have added
18. Add Validations

    ```ruby
      it { should have_many :items }
    ```

19. Start the user stories

## conclusion

There's still a lot of heavy lifting you have to do to make sure everything is correct, so go through this carefully and let me know if anything is wrong.

cheers!
