Feature: Login
    In order to perform successful Login
    As a user
    I want to enter correct username and password

    @focus
    Scenario: Verify login to facebook login as valid user
        Given User navigates to facebook website
        When User validates the homepage title
        Then User entered valid username
        And User entered valid password
        Then User should be successfully logged in to website

    Scenario: Verify login to facebook login as invalid user
        Given User navigates to facebook website
        When User validates the homepage title
        Then User entered invalid username
        And User entered invalid password
        Then User should not be successfully logged in to website