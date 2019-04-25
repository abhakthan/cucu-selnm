Feature: Certified Copy Center Main page
  Need to know if the site is available

  Scenario: CCC Site is available
    Given user opens the browser
    When user navigates to "https://certifiedcopycenter.uspto.gov"
    Then user should see " Sign in to your USPTO.gov account" button
    When user click " Sign in to your USPTO.gov account" button
    Then user should see "Sign in" screen
