/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
            Loop through each feed in the allFeeds object and ensure it has a
            URL defined and that the URL is not empty.
        */
        it('all have defined non-empty URL', function() {
            allFeeds.forEach(function(elt) {
                expect(elt.url).toBeDefined();
                expect(elt.url.length).not.toBe(0);
            });
        });

        /**
            Loop through each feed in the allFeeds object and ensure it has a
            name defined and that the name is not empty.
        */
        it('all have defined non-empty name', function() {
            allFeeds.forEach(function(elt) {
                expect(elt.name).toBeDefined();
                expect(elt.name.length).not.toBe(0);
            });
        });

        /**
            ADDITIONAL TEST

            A feed reader should have the ability to add feeds.  This spec
            tests an aspect of this new feature (simple modification of the
            allFeeds array), which I've implemented far enough in js/app.js
            to pass.
        */
        it('can be added to allFeeds', function() {
            expect(addFeed).toBeDefined();
            var initialLength = allFeeds.length;
            var newFeed = {
                name: 'SitePoint CSS',
                url: 'http://www.sitepoint.com/html-css/feed'
            };
            addFeed(newFeed);
            expect(allFeeds.length).toBe(initialLength + 1);
            // restore pre-test state
            allFeeds.pop();
        });

        /**
            ADDITIONAL TEST

            A feed reader should have the ability to remove feeds as well.  This
            spec tests an aspect of this new feature (removal of an element from
            the allFeeds array), which I've implemented far enough in js/app.js
            to pass.
        */
        it('can be removed', function() {
            expect(removeFeed).toBeDefined();
            var initialLength = allFeeds.length;
            if (initialLength < 1) throw 'No feeds to remove';
            var lastFeed = allFeeds[initialLength - 1];
            removeFeed(initialLength - 1);
            expect(allFeeds.length).toBe(initialLength - 1);
            // restore pre-test state
            addFeed(lastFeed);
        });
    });

    describe('The menu', function() {
        var $body = $('body');
        /**
            Function which returns 'true' if menu is hidden, 'false' if
            visible.  Visibility is controlled by the presence or absence
            of the 'menu-hidden' class.
        */
        function menuInvisible() {
            return $body.hasClass('menu-hidden');
        }

        /**
            Test that the menu element is hidden by default.
        */
        it('is hidden by default', function() {
            expect(menuInvisible()).toBe(true);
        });

        /**
            Test that the menu changes visibility when the menu icon is
            clicked.  The menu should slide into view when clicked and slide
            out of view when clicked again.
        */
        var $icon = $('.menu-icon-link');
        it('changes visibility when menu icon clicked', function() {
            // simulate click and check if menu-hidden class bas been removed.
            $icon.trigger('click');
            expect(menuInvisible()).toBe(false);
            // Another click should add the class back, restoring the default.
            $icon.trigger('click');
            expect(menuInvisible()).toBe(true);
        });

        /**
            Test that the menu slides out of view when an element within it
            is clicked.
        */
        it('is hidden when an element is clicked', function() {
            $icon.trigger('click');
            var $feedLink = $('.feed-list li:first a');
            $feedLink.trigger('click');
            expect(menuInvisible()).toBe(true);
        });

        /**
            ADDITIONAL TEST: PROJECTED ENHANCEMENT

            Test that added feeds appear in the menu (not simply in
            the allFeeds array, tested above).

            Will fail!
        */
        it('contains newly added feed', function() {
            var newFeed = {
                name: 'SitePoint CSS',
                url: 'http://www.sitepoint.com/html-css/feed'
            };
            addFeed(newFeed);
            var lastFeedText = $('.feed-list li:last').text().trim();
            expect(lastFeedText).toBe(newFeed.name);
            // restore pre-test state
            removeFeed(allFeeds.length - 1);
        });

        /**
            ADDITIONAL TEST: PROJECTED ENHANCEMENT

            Test that a removed feed does not appear in the menu (beyond simply
            being removed from the allFeeds array, tested above).

            Will fail!
        */
        it('omits newly removed feed', function() {
            var allFeedsLength = allFeeds.length;
            var formerLastFeed = allFeeds[allFeedsLength - 1];
            removeFeed(allFeedsLength - 1);
            var lastFeedMenuText = $('.feed-list li:last').text().trim();
            expect(lastFeedMenuText).not.toBe(formerLastFeed.name);
            // restore pre-test state
            addFeed(formerLastFeed);
        });
    });

    describe('Initial entries', function() {
        /**
            Test that there is at least a single .entry element within the
            .feed container when the loadFeed function is called and completes
            its work.
        */
        beforeEach(function(done) {
            /**
                In order to signal that Jasmine can move to the spec, 'done'
                must be called.  Here, loadFeed executes 'done' as a callback
                when the AJAX call succeeds or fails.
            */
            loadFeed(0, done);
        });

        it('are present in feed', function() {
            var $entries = $('.entry-link');
            expect($entries.length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        /**
            Test that the content in fact changes when a new feed is loaded
            by the loadFeed function.
        */
        var feedLen = allFeeds.length;
        var $headerTitle = $('.header-title');
        var initialTitle, newTitle;
        beforeEach(function(done) {
            if (feedLen < 2) throw 'Not enough feeds (' + feedLen +
            ') to compare';
            loadFeed(0, function() {
                initialTitle = $headerTitle.html();
                loadFeed(feedLen - 1, function() {
                    newTitle = $headerTitle.html();
                    done();
                });
            });
        });

        it('loads new entries', function(done) {
            expect(newTitle).not.toBe(initialTitle);
            // reload default feed
            loadFeed(0, done);
        });
    });
}());
