# Udacity Frontend Nanodegree Feedreader

## Introduction

This project is Project 6 of the Udacity Frontend Web Developer Nanodegree.  Its purpose is to provide testing for a pre-existing web application which reads RSS feeds.  Testing uses [Jasmine](http://jasmine.github.io/).

## Usage

Download/unzip or clone the repository.

Open `index.html` in a browser.

Tests run automatically on opening the file, and you will notice onscreen changes as the app's functionality is exercised.  When tests are complete, results are displayed at the bottom of the browser window.

The code for the tests is found in the file `jasmine/spec/feedreader.js`.

## What is tested?

Several test suites are provided in response to items 7 through 13 [here](https://github.com/udacity/frontend-nanodegree-feedreader#how-will-i-complete-this-project) in the project's specifications.  These test the app's current functionality.

Additional tests have been added, testing both current functionality and projected enhancements.  These are described in the section below.

All tests of current functionality pass, but tests of planned features fail.

### Additional tests

I have added another test of existing functionality which ensures that the feed menu slides out of view when a menu item is clicked.

As provided, the feed reader app does not have a means of adding and removing feeds.  Support of this basic functionality should be a goal of future development.  In line with "test-driven development," I have added tests to track the progress of this projected enhancement.

Tests related to adding and removing feeds are as follows:

1. Ensure that the new function `addFeed` adds a feed to the variable `allFeeds` ("RSS Feeds can be added to allFeeds").
    + functionality has been very simply implemented in `js/app.js'
    + test passes

2. Ensure that the new function `removeFeed` removes a feed from `allFeeds` ("RSS Feeds can be removed").
    + functionality has been very simply implemented in `js/app.js'
    + test passes

3. Ensure that added feeds show up on screen ("The menu contains newly added feed").
    + functionality is not yet implemented
    + _test fails_

4. Ensure that removed feeds disappear from the onscreen feed menu ("The menu omits newly removed feed").
    + functionality is not yet implemented
    + _test fails_

## References

The following sources were useful to me:

* [Jasmine documentation](http://jasmine.github.io/2.1/introduction.html)
* [JavaScript Unit Testing With Jasmine: Part I](http://www.joezimjs.com/javascript/javascript-unit-testing-with-jasmine-part-1/)
* [Using Jasmine 2.0's New done() Function to Test Asynchronous Processes](http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)
* [List of frontend RSS feeds](https://github.com/impressivewebs/frontend-feeds)
* From the Udacity Discussion Forum:
    + [Async tests – why the second done() call?](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751)
    + [When does it() require done()?](https://discussions.udacity.com/t/when-does-it-require-done/38785)
    + [New Feed Selection question?](https://discussions.udacity.com/t/new-feed-selection-question/16274)
