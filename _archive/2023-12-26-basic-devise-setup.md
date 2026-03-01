---
layout: post
published: true
title: Basic Devise setup in Rails 7 (no OmniAuth of any type)
tags: rails
#date: 2021-08-24 16:54:42 -0600
---

* This article is written with the expectation that ViewComponents are being used

When I have a new rails app that's been created with a root route in the routes.rb file, I'm ready to create users.

Here's the steps needed to add Authentication using Devise in a Rails 7 app.

1. Add the devise gem

   ```bash
   bundle add devise
   ```

2. Install the necessary Devise files via a generator

   ```bash
   rails g devise:install
   ```

3. Add the necessary flash messages to `application.html.erb`

The command in step 2 above will output 4 messages to the console. 1, 2 and 4 are unnecessary. The only one that's really needed/helpful is the third one. Copy the suggested flash messages and paste them into "application.html.erb".

4. Create the User model and migration

   ```bash
   rails g devise User
   ```

5. Migrate to add the users table to the database

   ```bash
   rails db:migrate
   ```

6. Add a header ViewComponent to store the login/signup/signout links

7. Add the link to sign up to the header:

   ```erb
   <div><%= link_to "Sign up", new_user_registration_path %></div>
   ```

8. Add an email and password, and click Log in
9. Update header ViewComponent to receive the current user

   ```ruby
   # app/components/header_component.rb
   class HeaderComponent < ViewComponent::Base
     def initialize(current_user:)
     @current_user = current_user
     end
   end
   ```

10. Pass the current user to the viewComponent, by using the `current_user` helper

    ```erb
    <%= render HeaderComponent.new(current_user: current_user) %>
    ```

11. Update the logic in the header component to display to verify the user is signedup/logged in

    ```erb
    # app/components/header_component.html.erb

    <% if @current_user %>
      <div>
        <p>Signed in as: <%= @current_user.email %></p>
      </div>
    <% else %>
      <div><%= link_to "Log in", root_path %></div>
      <div><%= link_to "Sign up", new_user_registration_path %></div>
    <% end %>
    ```

12. Add a link to sign out the current user

    ```erb
    # app/components/header_component.html.erb

    <% if @current_user %>
      <div>
        <p>Signed in as: <%= @current_user.email %></p>
      </div>
      <div>
        <%= link_to "Sign out", destroy_user_session_path, data: {turbo_method: :delete} %>
      </div>
    <% else %>
      <div><%= link_to "Log in", root_path %></div>
      <div><%= link_to "Sign up", new_user_registration_path %></div>
    <% end %>
    ```

13. Update the link to Log in

    ```erb
    # app/components/header_component.html.erb

    <% if @current_user %>
      <div>
        <p>Signed in as: <%= @current_user.email %></p>
      </div>
      <div>
        <%= link_to "Sign out", destroy_user_session_path, data: {turbo_method: :delete} %>
      </div>
    <% else %>
      <div><%= link_to "Log in", new_user_session_path %></div>
      <div><%= link_to "Sign up", new_user_registration_path %></div>
    <% end %>
    ```

14. Verify that Sign up, Log in and Sign out all work