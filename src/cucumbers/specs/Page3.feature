Feature: Page3 test

    Scenario: test page path
        Given open page3
        Then the current page is page3
        When input the tokyo on page3
        Then confirm mock data on page3
        When test formik validation
        Then show formik validate message