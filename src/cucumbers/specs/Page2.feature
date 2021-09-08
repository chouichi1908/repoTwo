Feature: Home and Page2 test

    Scenario: test link and input
        Given Open home page
        Then current page is Home
        When click page2 link
        Then current page is Page2
        When input text tokyo
        Then confirm mock data
        When click home link
        Then current page is Home