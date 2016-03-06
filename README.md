# Udacity Frontend Nanodegree Feedreader

## Introduction

This project is Project 6 of the Udacity Frontend Nanodegree.  Its goal is to provide testing for a pre-existing web application which reads RSS feeds.  Testing uses [Jasmine](http://jasmine.github.io/).

## Usage

Download/unzip or clone the repository.

Open `index.html` in a browser.

Tests run automatically on opening the file, and you will notice onscreen changes as the app's functionality is exercised.  The results of the tests will be displayed at the bottom of the browser window.

(The actual code for the tests is found in `jasmine/spec/feedreader.js`.)

## What is tested?

A number of tests of existing functionality are provided in response to items 7 through 13 [here](https://github.com/udacity/frontend-nanodegree-feedreader#how-will-i-complete-this-project) in the project's specifications.

Additional tests have been added, testing both current functionality and projected enhancements.  These are described in the section below.

All tests of current functionality pass, but tests of planned features fail.

### Additional tests

I have added another test of existing functionality which ensures that the feed menu slides out of view when an element within it is clicked.

A feed reader naturally should have a means of adding/removing feeds from
those included.  Tests of these features have been added, namely:

1. A test that the new function `addFeed` adds a feed to the variable `allFeeds`.  This functionality has been very simply implemented so the test would pass.

2. A test that the new function `removeFeed` removes a feed from `allFeeds`.  This is also implemented in a basic way so the test would pass.

3. A test that added feeds show up on screen.  This functionality is not implemented and _the test fails_.

4. A test that removed feeds disappear from the onscreen feed menu.  Like the above, this is not yet the case and accordingly, _the test faile_.
