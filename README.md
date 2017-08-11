# RecordLabel

If our Epicodus CSS/Design 2017 cohort ran a record label, all the bands would be named after our inside jokes, and we would have a website.  Well, GUESS WHAT?  I GOT a website JUST LIKE THAT!

## Setup

Clone down project from github
Run npm install and bower install in command line
Add Firebase credentials:
1. go to firebase console, pick a project or create a new one, go to 'add Firebase to your web app,' copy the object stored in var config.
2. in project, in src/app, create a file called api-keys.ts, inside paste the object inside a var called masterFirebaseConfig, like this:

export var masterFirebaseConfig = {
    apiKey: "your stuff from firebase",
    authDomain: "your stuff from firebase",
    databaseURL: "your stuff from firebase",
    projectId: "your stuff from firebase",
    storageBucket: "your stuff from firebase",
    messagingSenderId: "your stuff from firebase"
  };

3. run npm install promise-polyfill --save-exact in command line.
4. run apm install atom-typescript in command line.
5. run ng serve in command line

## MVP
User can:
	Visit a page to see a gallery of artists on the record label
	Click one and visit that artist's profile page with more details
	Visit an about page that tells the story of the record label


Admin can:
	Add, edit or delete artists from the app and the database.

## Wishlist:
	Artist object has an array of members as one of it's properties

# Angular Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
