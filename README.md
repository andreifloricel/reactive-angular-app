Car Designer
---

A small demo app to be used for msg Automotive Angular Testing Training Workshop.

# Description

The app has the (almost) standard Angular layout that we use in msg Automotive:

- core module, with app shell and API ("db") services
- a feature module with:
    - container- and view-components
    - business and resource services
    - a directive
    - a pipe

# "Specifications"

It lets the user "design" cars. You get total of 10 points. You can spend it among:
- engine,
- chassis,
- body.

We start with a "dashboard" page, where we either search for existing cars and view/edit them, or we create a new one.
The search module is a small table, searchable with autocomplete, with columns:
- car name
- top speed
- handling
- thumb of the car

View car is a module with a car card that shows card-game style car and can be used as either a popover or standalone(routed) thing.

To support the "can be used either standalone or popover", we also have one biz-shared module, "car-shared", with the actual car view-component.

Edit/new car is a module that lets you:
- name/change name of a car
- spend points on one of the engines which gives the car top speed
- spend points on car chassis, which affects the car handling
- a basic or nicer car body with a color you can pick freely.

## 

# CarDesigner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
