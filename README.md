# Angular 2 RC5 Seed Project - WebPack2.1.0-beta.20 - LazyLoading

> A simple angular tutorial from their own documentation of LazyLoading with System.config, instead used prefer bundler WebPack2


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

If that doesn't work, [come chat with us](https://gitter.im/ng-book/ng-book  )!

## ngDemoApp


##1st: [Demo](https://reyramos.github.io/ngDemoApp/) #master branch tries to demonstrate as close as possible to a real Production application with the following features.
- HTTP request, call JSON service to load data onto DOM
- Lazy loading routes, on large application it is necessary to load chunks when needed.
- Loading multiple images, each patients is different from each user, and force browser to XHR request.
- 2way binding on Patient information.
- Make the necessary HTTP request before rending View/Controller




##2nd: [Demo](https://reyramos.github.io/ngDemoApp-Basic/) #waterdown branch  has the minimal use of the code to render the necessary to UI
- All JSON files are compiled within the js files. (no HTTP)
- All routes are define within the application root, (no LazyLoading)
- Load only 4 images, while the rest are cached by the browser. (these patients looks all the same)
- 2way binding on Patient information

