# DocquityAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 📚 Webinar Feature Module

This module provides a dynamic, styled, and reusable interface to display medical webinars categorized by type (For You, Live, Upcoming).

---

## ✅ Features

- **💳 Reusable Webinar Card Component**
  - Displays webinar details: banner, title, credits, dates, highlights, and social actions.
  - Fully styled with Bootstrap 5 and SCSS.
  - Data-driven via `@Input()` binding.

- **📄 Webinar List Component**
  - Accepts `tab` input (`foryou`, `live`, `upcoming`) and renders a list of webinar cards.
  - Dynamically switches webinars based on selected tab.

- **📦 Webinar Service**
  - Mock service providing hardcoded data for all three categories.
  - Organized and extensible for future API integration.

- **📐 Type-Safe Interface**
  - `Webinar` interface for consistency and IDE autocompletion.

## 🛠 Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Angular 16+

---
