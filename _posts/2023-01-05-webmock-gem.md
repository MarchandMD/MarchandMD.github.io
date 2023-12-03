---
layout: post
published: true
title: "Setting up and using the Webmock gem"
categories: gems ruby rails rspec apis
tags: gems ruby rails rspec apis
---

# Installation

This gem is useful for faking API requests. Instead of a test suite making API calls for many unit tests, adding `Webmock` to a rails application Gemfile will "fake" those API calls.

First I need to add the gem to the application. I usually add it directly from the commandline: `bundle add webmock -g 'test'`

# Setting it up

Now that the gem is available to me, I need to setup the application to access the cool features it makes available.

I've only ever used RSpec, so this would be added to the `spec/spec_helper`: `require 'webmock/rspec'`. Can be placed at the top of the file.

# Prove Webmock is working

If a test file is setup to make an API call, now would be a good time to run the test suite.

At this point, there's most likely a big error titled something like: `WebMock::NetConnectNotAllowedError:` with additional langauge provided , like "Real HTTP connections are disabled".

This means Webmock is in place and is blocking the test suite from making API calls. Good.

# Stub the API requests: Basic

In the unit test add the following code:

```ruby
stub_request(:get, "<endpoint-goes-here>").to_return(status: 200, body: "")
```

Run the test again, to get another error. The error should say something to the effect of: `JSON::ParserError: 783: unexpected token at ''`

If there's a service/facade setup, then the API call is returning a body that's going to be parsed....but in the stub_request written above, the body is an empty string.

So what needs to happen is the expected JSON that would be returned from this request needs to be faked.

There's a couple ways to do this. Could use POSTMAN to query the API endpoint, then copy and paste the raw JSON response into the empty string above.

Could do the same, but set it equal to a variable and pass that variable to the body.

Could do the same thing with POSTMAN, but instead of pasting the response into the unit test, could create a directory called `spec/fixtures` in the project, create a file in that directory, paste the JSON into that file, than use `File.read(spec/fixtures/filename)` instead.

Any of these work.

# Stub the API requests: With no API available

This is a little more theoretical at this point.

The endpoint would need to be faked in the `stub_request` method.

The expected response would need to be "serialized".

