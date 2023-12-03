---
layout: post
published: true
tags: turing rails ruby
---

1. Get the API key
2. Grab the Figaro gem, if not already in the Gemfile
3. `bundle exec figaro install` to update the .gitignore file with `/config/application.yml`
4. open `/config/application.yml` and add the key/value pair for the api_key: `api_key_name: <api_key_goes_here>`
5. Double check the Gemfile for the Faraday gem
6. create a directory: `/app/services`
7. add a `.rb` file there named something like `nps_services.rb`
8. Open the file and begin building the NpsService object
9. Build the `conn` method....by checking out my [blog article](https://marchandmd.github.io/2022/12/02/Using-the-Faraday-Gem.html)
10. Double check the API for a guide about how to pass the API key (using query params or as a header)
11. Update the `conn` method to use the proper URL for the base address and update the name of the expected key/value pair for the API
12. Create the `get_url` method by copying and pasting from the same blog article
13. Create the specific method to actually grab whatever data is being sought
14. Create another directory at `app/poros`
15. in `app/poros` create `nps_search.rb`
16. Create a class in that file called `class NpsSearch`
17. Create a method: `service`
18. add the service to it: `NpsService.new`
19. Create another method: `get_parks`
20. call the search: `service.parks`
21. Now go to a controller and get the parks, or create a PORO