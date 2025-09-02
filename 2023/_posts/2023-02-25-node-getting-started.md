---
layout: post
published: true
title:  "Getting Started with Node.js"
tags: node javascript back-end server
---

### Node.js

It's a way to write a backend with JavaScript. Among other things probably.

the [nodejs.dev](https://techfriends.slack.com/archives/C034QA24Z/p1677341951567719) website shows an example Node.js application, a server

It's creating a server; The closest I've ever got to a server with Rails was Puma. So this is going to expand my knowledge there. That's cool.

Alright, back to the lesson.

In a directory add this:

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`SeRvEr RuNnInG at http://${hostname}:${port}/`);
});
```

Alright so what is happening here?

```js
// This includes/requires a module called 'http'
const http = require('http');
```

 Node.js has some modules built into it. And it has some others that I'd need to go grab. This makes total sense. Rails is very much the same thing. It's a collection of gems that uses other gems. Node.js is a collection of modules that uses other modules. And above is how those are required. At least that's how the modules that are available to the system from the standard library are required. This begs the question: "how do I get third party modules on the machine?"

And that's probably through NPM. Node Package Manager. Got it.

Keep going.

After requiring the necessary library (or module, or gem) then a couple of constants are defined. `hostname` and `port`. Hostname is the base url, port is the port. Note: `hostname` is a string, `port` is an integer; I could change hostname, but the system told me not to. I could change port, and there were no issues when I did that.

Next, I'm actually creating the server.

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
```

Ok, pretty sure I don't need anyone else telling me what this does. I'm creating another constant/variable here called `server`. And then I'm referencing a reserved keyword of some type called `http`. And that thing has a built in method called `#createServer` which is pretty dope. Next it appears I'm passing in an arrow function, which uses a couple of parameters: both `req` and `res`. These are the request and responses for HTTP requests. So i'm setting up the server to receive requests and to send responses. Makes sense. What's next? Those two parameters are then sent to the function body where some additional built in methods are called, specifically:

1. `res.statusCode = 200;` (this is pretty straightforward)
2. `res.setHeader('Content-Type', 'text/plain');` (this is also fairly straightforward)
3. `res.end('Hello World\n');` What this does is provides some textual confirmation for display in the browser. So maybe this is like the response body.

All three of these methods/functions `#statusCode`, `#setHeader` and `#end` are all called on the response. Nothing is done (at this point) with the request. Though that request parameter `req` is available to the body of the function.

Next is the "spinning up" of the server.

```js
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
```

Again, this is a basic method/function call. the `server` which was previously instantiated above as a constant, begins to listen. `#listen` is a function and it accepts three parameters here:

1. a port
2. a hostname
3. a function (aka a callback in JS or a yield clause in Ruby)

The server then begins to listen and displays the output to the commandline using string interpolation (note, JS string interpoloation uses back ticks as well as a $ sign).

At this point I can "spin up" the server by jumping into the commandline and running `node server.js` (as long as the current working directory is accurate). I'll see confirmation in the terminal. (or an error with my typo, which is what happened initially; so cool, already debugged my first program lul)

Beyond this, I began to play with the `req` parameter, to see what I could display in the browser. I also attempted to pass in a parameter with the URL. At this point though, I appreciate the idea of being able to create a server using Node.js, and then spinning it up, and sending a basic HTTP GET request through my client.