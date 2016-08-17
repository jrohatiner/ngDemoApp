# ngDemoApp


##1st: [Demo](https://reyramos.github.io/ngDemoApp/#/home) tries to demonstrate as close as possible to a real Production application with the following features.
- HTTP request, call JSON service to load data onto DOM
- Lazy loading routes, on large application it is necessary to load chunks when needed.
- Loading multiple images, each patients is different from each user, and force browser to XHR request.
- 2way binding on Patient information.
- Make the necessary HTTP request before rending View/Controller




##2nd: [Demo](https://reyramos.github.io/ngDemoApp-Basic/#/home) has the minimal use of the code to render the necessary to UI
- All JSON files are compiled within the js files. (no HTTP)
- All routes are define within the application root, (no LazyLoading)
- Load only 4 images, while the rest are cached by the browser. (these patients looks all the same)
- 2way binding on Patient information

