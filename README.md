# Introduction

Demo BDD test framework using TestCafe and Gherkin-TestCafe

# Test Site

The tests are run against Amazon: https://www.amazon.com/

# Installation

Requires Node.js: https://nodejs.org/en/download/

Inside the project root folder, run **npm install** to download dependencies.

# To Run

There's several test scripts to run different combinations of browsers and headless mode. Below are some basic ones.
Please note that you will need the browser installed on your local machine to run tests on that browser.

Chrome:
**npm run test:chrome**

Chrome (with headless mode):
**npm run test:chrome:headless**

Firefox:
**npm run test:firefox**

Firefox (with headless mode):
**npm run test:firefox:headless**

Chrome and Firefox:
**npm run test:multiple**

Chrome and Firefox (with headless mode):
**npm run test:multiple:headless**
