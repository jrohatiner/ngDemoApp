
[![Dependency Status](https://gemnasium.com/badges/github.com/jrohatiner/ngDemoApp.svg)](https://gemnasium.com/github.com/jrohatiner/ngDemoApp)
# Angular 2 RC5 Seed Project - WebPack2.1.0-beta.20 - LazyLoading

> A simple angular App with WebPack2


## Let's get started with Development Enviroment
- Install Node.JS version 5.10>
Use your system package manager (brew,port,apt-get,yum etc)

- Install global Grunt and Bower commands, once you install the following commands globally, you can run 'npm install' to run the components in the package.json file

```bash
	npm install -g grunt-cli bower
	npm install //load all your additional package.json components
```


Then we will 

- compile our TypeScript code and
- host the app on local development server 

by running the command:

```
grunt serve
```

I am using Grunt command to load modRewrite configuration to load the api/url to the localhost for http request


Then visit [http://localhost:8080](http://localhost:8080) in your browser. You should see an application with the header `Angular 2 Simple Reddit`. 

## Getting Help

In the case where it doesn't work, the first thing to try is looking at the developer console in your browser.

file an issue

## ngDemoApp

- HTTP request, call JSON service to load data onto DOM
- Lazy loading routes, on large application it is necessary to load chunks when needed.
- Loading multiple images, each patients is different from each user, and force browser to XHR request.
- 2way binding on Patient information.
- Make the necessary HTTP request before rending View/Controller

