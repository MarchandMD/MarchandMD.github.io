---
layout: post
published: true
title: "Setting up and using VCR gem"
categories: gems ruby rails rspec apis
---

1. `bundle add vcr -g 'test, development'`
2. `bundle add webmock -g 'test, development'`
3. add the following to `spec/spec_helper`: `require webmock/rspec`
4. add the following to `spec/rails_helper`:

```ruby
VCR.configure do |config|
  config.cassette_library_dir = "spec/fixtures/vcr_cassettes"
  config.hook_into :webmock
  config.filter_sensitive_data('<tmdb_api_key>') { ENV['tmdb_api_key'] }
  config.configure_rspec_metadata!
end
```

5. Now in any spec file that triggers a call to an API will force an error that looks something like this:

```
Failure/Error: response = conn.get(url, params)

VCR::Errors::UnhandledHTTPRequestError:


================================================================================
An HTTP request has been made that VCR does not know how to handle:
  GET https://statsapi.web.nhl.com/api/v1/teams/16/roster

There is currently no cassette in use. There are a few ways
you can configure VCR to handle this request:

  * If you're surprised VCR is raising this error
    and want insight about how VCR attempted to handle the request,
    you can use the debug_logger configuration option to log more details [1].
  * If you want VCR to record this request and play it back during future test
    runs, you should wrap your test (or this portion of your test) in a
    `VCR.use_cassette` block [2].
  * If you only want VCR to handle requests made while a cassette is in use,
    configure `allow_http_connections_when_no_cassette = true`. VCR will
    ignore this request since it is made when there is no cassette [3].
  * If you want VCR to ignore this request (and others like it), you can
    set an `ignore_request` callback [4].

[1] https://www.relishapp.com/vcr/vcr/v/6-1-0/docs/configuration/debug-logging
[2] https://www.relishapp.com/vcr/vcr/v/6-1-0/docs/getting-started
[3] https://www.relishapp.com/vcr/vcr/v/6-1-0/docs/configuration/allow-http-connections-when-no-cassette
[4] https://www.relishapp.com/vcr/vcr/v/6-1-0/docs/configuration/ignore-request
================================================================================

```

7. So anywhere there's a unit test (anywhere in the spec file where you see "it 'does something cool' do) needs to be udpated to become "it 'does something cool', :vcr do"
8. Rerun the tests and now VCR will hook into webmock, run any API calls once, and then save those API calls to the local repo. So now the project has some data to use for testing, without haveing to make additional API calls.

That's a really incomplete way to explain it...but it's good for now.
