# NgMonorepo

Sample project of an Angular 7.x monorepo project. One folder, containing multiple applications and using shared libraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## How to use
- This project is a "monorepo". It has a `projects` folder, containing a shared library and a "dashboard" application (it's just a name...). There is just one central `node_modules`.
- You can generate additional libraries and applications using
  - `ng generate library <library-name`
  - `ng generate application <application-name>`
- It has a build script `npm run build_lib` to build the libary.
- Remember to (re)build the libary if you changed it and want to use it in the applications.
- Use `ng serve --project=<application-name>` to run/serve a specific application.

## Credits

Based on the awesome work by the team of Angular In Depth:
-   https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
- https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121
- https://blog.angularindepth.com/the-angular-library-series-publishing-ce24bb673275 

## Book a training?
Want to follow an Angular training on your own, or with colleagues from your company? See the calendar at https://kassenaar.com/calendar/ or contact met at info@kassenaar.com.


Peter Kassenaar - info@kassenaar.com (C) 2019
